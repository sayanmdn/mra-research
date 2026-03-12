import Link from 'next/link';
import type { Metadata } from 'next';
import connectDB from '@/lib/mongodb';
import Blog from '@/models/Blog';
import PaperCard from '@/components/PaperCard';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'Research Papers',
  description: 'Browse all research papers and articles published by MRA Research.',
  openGraph: {
    title: 'Research Papers | MRA Research',
    description: 'Browse all research papers and articles published by MRA Research.',
    url: 'https://www.mraresearch.org/papers',
    type: 'website',
  },
};

interface BlogEntry {
  _id: string;
  title: string;
  slug: string;
  description: string;
  tags: string[];
  author: string;
  createdAt: string;
}

async function getPapers(): Promise<BlogEntry[]> {
  await connectDB();
  const blogs = await Blog.find({}, { content: 0 }).sort({ createdAt: -1 }).lean();
  return JSON.parse(JSON.stringify(blogs));
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

        {(papers as BlogEntry[]).length === 0 ? (
          <div className="text-center py-20 text-gray-400">
            <p className="text-lg">No papers published yet.</p>
            <p className="text-sm mt-2">Use the API to upload your first paper.</p>
          </div>
        ) : (
          <div className="flex flex-col gap-6">
            {papers.map((paper) => (
              <PaperCard key={paper._id} paper={paper} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
