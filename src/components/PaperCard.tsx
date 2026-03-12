'use client';

import Link from 'next/link';
import { useState } from 'react';

interface BlogEntry {
  _id: string;
  title: string;
  slug: string;
  description: string;
  tags: string[];
  author: string;
  createdAt: string;
}

export default function PaperCard({ paper }: { paper: BlogEntry }) {
  const [loading, setLoading] = useState(false);

  return (
    <Link
      href={`/papers/${paper.slug}`}
      onClick={() => setLoading(true)}
      className={`block border rounded-xl p-6 transition-all ${
        loading
          ? 'border-gray-400 bg-gray-50 shadow-inner cursor-wait'
          : 'border-gray-200 hover:shadow-md'
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h2 className="text-lg font-semibold text-gray-900">{paper.title}</h2>
            {loading && (
              <svg className="shrink-0 w-4 h-4 text-gray-400 animate-spin" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
              </svg>
            )}
          </div>
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
  );
}
