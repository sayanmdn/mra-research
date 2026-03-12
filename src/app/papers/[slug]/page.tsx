import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface Blog {
  _id: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  tags: string[];
  author: string;
  createdAt: string;
}

async function getPaper(slug: string): Promise<Blog | null> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/papers/${slug}`,
      { cache: 'no-store' }
    );
    if (!res.ok) return null;
    const json = await res.json();
    return json.data || null;
  } catch {
    return null;
  }
}

export default async function PaperPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const paper = await getPaper(slug);

  if (!paper) {
    return (
      <main className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Paper not found</h1>
          <Link href="/papers" className="text-blue-600 hover:underline">Back to papers</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Nav */}
      <nav className="border-b border-gray-200 px-6 py-4 flex items-center justify-between max-w-6xl mx-auto">
        <Link href="/" className="text-xl font-bold tracking-tight text-gray-900">MRA Research</Link>
        <div className="flex gap-6 text-sm font-medium text-gray-600">
          <Link href="/" className="hover:text-gray-900">Home</Link>
          <Link href="/papers" className="hover:text-gray-900">Papers</Link>
        </div>
      </nav>

      <article className="max-w-3xl mx-auto px-6 pt-12 pb-24">
        <Link href="/papers" className="text-sm text-gray-400 hover:text-gray-600 mb-6 inline-block">
          ← Back to Papers
        </Link>
        <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-3">{paper.title}</h1>
        {paper.description && (
          <p className="text-lg text-gray-500 mb-4">{paper.description}</p>
        )}
        <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
          {paper.author && <span>{paper.author}</span>}
          <span>{new Date(paper.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
        </div>
        <div className="flex flex-wrap gap-2 mb-10">
          {paper.tags.map((tag) => (
            <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">{tag}</span>
          ))}
        </div>
        <div className="prose prose-gray max-w-none">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{paper.content}</ReactMarkdown>
        </div>
      </article>
    </main>
  );
}
