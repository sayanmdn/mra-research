import type { Metadata } from 'next';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import NavBar from '@/components/NavBar';
import { getSession } from '@/lib/auth';
import LoginForm from './LoginForm';

export const metadata: Metadata = {
  title: 'Sign In',
  description: 'Sign in to publish research papers on MRA Research.',
  robots: { index: false, follow: false },
};

export default async function LoginPage() {
  const session = await getSession();
  if (session) redirect('/admin');

  return (
    <>
      <NavBar />
      <main className="min-h-[calc(100vh-4rem)] bg-[#F5F7FA] flex items-start justify-center px-6 py-16">
        <div className="w-full max-w-md">
          <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-8">
            <h1 className="text-2xl font-bold text-[#1B2A4A]">Sign in</h1>
            <p className="text-sm text-gray-500 mt-1.5">
              Authorized contributors only. Sign in to publish a paper.
            </p>
            <LoginForm />
          </div>
          <p className="text-center text-xs text-gray-400 mt-6">
            Not a contributor?{' '}
            <Link href="/papers" className="text-[#3B82F6] hover:underline">
              Browse published papers
            </Link>
          </p>
        </div>
      </main>
    </>
  );
}
