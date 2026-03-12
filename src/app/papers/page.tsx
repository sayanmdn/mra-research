import Link from 'next/link';

interface Blog {
  _id: string;
  title: string;
  slug: string;
  description: string;
  tags: string[];
  author: string;
  createdAt: string;
}

async function getPapers(): Promise<Blog[]> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/papers`, {
      cache: 'no-store',
    });
    const json = await res.json();
    return json.data || [];
  } catch {
    return [];
  }
}

export default async function PapersPage() {
  const papers = await getPapers();

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

      <section className="max-w-4xl mx-auto px-6 pt-16 pb-24">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Research Papers</h1>
        <p className="text-gray-500 mb-10">Browse all published papers and research articles.</p>

        {papers.length === 0 ? (
          <div className="text-center py-20 text-gray-400">
            <p className="text-lg">No papers published yet.</p>
            <p className="text-sm mt-2">Use the API to upload your first paper.</p>
          </div>
        ) : (
          <div className="flex flex-col gap-6">
            {papers.map((paper) => (
              <Link
                key={paper._id}
                href={`/papers/${paper.slug}`}
                className="block border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="text-lg font-semibold text-gray-900">{paper.title}</h2>
                    {paper.description && (
                      <p className="text-sm text-gray-500 mt-1">{paper.description}</p>
                    )}
                    <div className="flex flex-wrap gap-2 mt-3">
                      {paper.tags.map((tag) => (
                        <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    {paper.author && <p className="text-sm text-gray-600">{paper.author}</p>}
                    <p className="text-xs text-gray-400 mt-1">
                      {new Date(paper.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
