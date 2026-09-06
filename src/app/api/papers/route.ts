import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
import connectDB from '@/lib/mongodb';
import Blog from '@/models/Blog';
import { getSession } from '@/lib/auth';
import { parseFrontmatter, slugify } from '@/lib/markdown';

const MAX_CONTENT_BYTES = 2 * 1024 * 1024; // 2 MB of markdown

export async function GET() {
  await connectDB();
  const blogs = await Blog.find({}, { content: 0 }).sort({ createdAt: -1 });
  return NextResponse.json({ success: true, data: blogs });
}

interface PaperInput {
  title: string;
  slug: string;
  description: string;
  content: string;
  tags: string[];
  author: string;
}

function normalizeTags(value: unknown): string[] {
  if (Array.isArray(value)) {
    return value.map((t) => String(t).trim()).filter(Boolean);
  }
  if (typeof value === 'string') {
    return value.split(',').map((t) => t.trim()).filter(Boolean);
  }
  return [];
}

/** Accepts either multipart/form-data (with a `doc` file) or a JSON body. */
async function readInput(req: NextRequest): Promise<PaperInput | { error: string }> {
  const contentType = req.headers.get('content-type') || '';
  let raw = '';
  let fields: Record<string, unknown> = {};

  if (contentType.includes('multipart/form-data') || contentType.includes('application/x-www-form-urlencoded')) {
    const formData = await req.formData();
    const file = formData.get('doc');
    if (file && typeof file === 'object' && 'text' in file) {
      raw = await (file as File).text();
    } else {
      raw = String(formData.get('content') || '');
    }
    fields = {
      title: formData.get('title'),
      slug: formData.get('slug'),
      description: formData.get('description'),
      tags: formData.get('tags'),
      author: formData.get('author'),
    };
  } else {
    const body = await req.json().catch(() => null);
    if (!body || typeof body !== 'object') {
      return { error: 'Invalid JSON body.' };
    }
    raw = String((body as Record<string, unknown>).content ?? '');
    fields = body as Record<string, unknown>;
  }

  if (Buffer.byteLength(raw, 'utf8') > MAX_CONTENT_BYTES) {
    return { error: 'Markdown content is too large (2 MB limit).' };
  }

  const { data, content } = parseFrontmatter(raw);

  const str = (key: string) => {
    const own = fields[key];
    if (typeof own === 'string' && own.trim()) return own.trim();
    return '';
  };

  const title = str('title') || data.title || '';
  if (!content.trim()) {
    return { error: 'Markdown content is required — upload a .md file or paste the text.' };
  }
  if (!title) {
    return { error: 'A title is required (provide one, or add `title:` front matter).' };
  }

  const slug = slugify(str('slug') || data.slug || title);
  if (!slug) {
    return { error: 'Could not derive a URL slug from the title. Provide a slug explicitly.' };
  }

  const tags = fields.tags !== undefined && fields.tags !== null && fields.tags !== ''
    ? normalizeTags(fields.tags)
    : data.tags || [];

  return {
    title,
    slug,
    description: str('description') || data.description || '',
    content,
    tags,
    author: str('author') || data.author || '',
  };
}

export async function POST(req: NextRequest) {
  const apiKey = req.headers.get('x-api-key');
  const apiKeyOk = Boolean(apiKey && process.env.PAPERS_API_KEY && apiKey === process.env.PAPERS_API_KEY);
  const session = apiKeyOk ? null : await getSession();

  if (!apiKeyOk && !session) {
    return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const input = await readInput(req);
    if ('error' in input) {
      return NextResponse.json({ success: false, error: input.error }, { status: 400 });
    }

    await connectDB();

    const existing = await Blog.findOne({ slug: input.slug }, { _id: 1 });
    if (existing) {
      return NextResponse.json(
        {
          success: false,
          error: `A paper already exists at /papers/${input.slug}. Change the title or slug.`,
        },
        { status: 409 }
      );
    }

    const blog = await Blog.create(input);

    revalidatePath('/papers');
    revalidatePath(`/papers/${input.slug}`);
    revalidatePath('/sitemap.xml');

    return NextResponse.json({ success: true, data: blog }, { status: 201 });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unexpected error while publishing.';
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}
