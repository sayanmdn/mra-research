import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Blog from '@/models/Blog';

export async function GET() {
  await connectDB();
  const blogs = await Blog.find({}, { content: 0 }).sort({ createdAt: -1 });
  return NextResponse.json({ success: true, data: blogs });
}

export async function POST(req: NextRequest) {
  const apiKey = req.headers.get('x-api-key');
  if (!apiKey || apiKey !== process.env.PAPERS_API_KEY) {
    return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
  }

  try {
    await connectDB();
    const formData = await req.formData();
    const file = formData.get('doc') as File | null;
    const title = formData.get('title') as string;
    const description = (formData.get('description') as string) || '';
    const tags = (formData.get('tags') as string) || '';
    const author = (formData.get('author') as string) || '';

    if (!file || !title) {
      return NextResponse.json(
        { success: false, error: 'doc (markdown file) and title are required' },
        { status: 400 }
      );
    }

    const content = await file.text();
    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');

    const blog = await Blog.create({
      title,
      slug,
      description,
      content,
      tags: tags ? tags.split(',').map((t) => t.trim()).filter(Boolean) : [],
      author,
    });

    return NextResponse.json({ success: true, data: blog }, { status: 201 });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
