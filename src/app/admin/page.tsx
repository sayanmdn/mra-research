import type { Metadata } from 'next';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import NavBar from '@/components/NavBar';
import connectDB from '@/lib/mongodb';
import Blog from '@/models/Blog';
import { getSession } from '@/lib/auth';
import LogoutButton from './LogoutButton';
import PublishForm from './PublishForm';

export const metadata: Metadata = {
  title: 'Publish a Paper',
  robots: { index: false, follow: false },
};

interface RecentPaper {
  _id: string;
  title: string;
  slug: string;
  createdAt: string;
}

async function getRecentPapers(): Promise<RecentPaper[]> {
  await connectDB();
  const papers = await Blog.find({}, { title: 1, slug: 1, createdAt: 1 })
    .sort({ createdAt: -1 })
    .limit(5)
    .lean();
  return JSON.parse(JSON.stringify(papers));
}

export default async function AdminPage() {
  const session = await getSession();
  if (!session) redirect('/login');

  const recent = await getRecentPapers();

  return (
    <>
      <NavBar />
      <main className="min-h-screen bg-[#F5F7FA]">
        <section className="max-w-3xl mx-auto px-6 pt-12 pb-24">
          <div className="flex flex-wrap items-start justify-between gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-bold text-[#1B2A4A]">Publish a paper</h1>
              <p className="text-sm text-gray-500 mt-1.5">
                Upload a <span className="font-mono text-xs">.md</span> file or paste markdown. It goes
                live at <span className="font-mono text-xs">/papers</span> immediately.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs text-gray-400">
                Signed in as <span className="font-semibold text-gray-600">{session.u}</span>
              </span>
              <LogoutButton />
            </div>
          </div>

          <PublishForm defaultAuthor={''} />

          {recent.length > 0 && (
            <section className="mt-10 bg-white border border-gray-200 rounded-2xl shadow-sm p-6 sm:p-8">
              <div className="flex items-center justify-between gap-4">
                <h2 className="text-sm font-bold text-[#1B2A4A] uppercase tracking-wide">
                  Recently published
                </h2>
                <Link href="/papers" className="text-xs font-semibold text-[#3B82F6] hover:underline">
                  View all
                </Link>
              </div>
              <ul className="mt-4 divide-y divide-gray-100">
                {recent.map((paper) => (
                  <li key={paper._id} className="py-3 flex items-center justify-between gap-4">
                    <Link
                      href={`/papers/${paper.slug}`}
                      className="text-sm text-gray-700 hover:text-[#1B2A4A] font-medium truncate"
                    >
                      {paper.title}
                    </Link>
                    <span className="text-xs text-gray-400 shrink-0">
                      {new Date(paper.createdAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </section>
      </main>
    </>
  );
}
