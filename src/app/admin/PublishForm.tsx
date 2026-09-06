'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useRef, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { parseFrontmatter, slugify } from '@/lib/markdown';

type Mode = 'paste' | 'upload';

const inputClass =
  'w-full rounded-lg border border-gray-200 px-3.5 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-[#3B82F6] focus:outline-none focus:ring-2 focus:ring-[#3B82F6]/20 transition-colors';

const labelClass = 'block text-xs font-semibold text-gray-600 mb-1.5';

export default function PublishForm({ defaultAuthor }: { defaultAuthor: string }) {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [mode, setMode] = useState<Mode>('paste');
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [slugEdited, setSlugEdited] = useState(false);
  const [description, setDescription] = useState('');
  const [author, setAuthor] = useState(defaultAuthor);
  const [tags, setTags] = useState('');
  const [content, setContent] = useState('');
  const [fileName, setFileName] = useState('');
  const [dragging, setDragging] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [error, setError] = useState('');
  const [published, setPublished] = useState<{ title: string; slug: string } | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const effectiveSlug = slugEdited ? slugify(slug) : slugify(title);

  function onTitleChange(value: string) {
    setTitle(value);
    if (!slugEdited) setSlug(slugify(value));
  }

  /** Strips front matter and pre-fills any metadata fields it carries. */
  function ingestMarkdown(raw: string, name?: string) {
    const { data, content: body } = parseFrontmatter(raw);
    setContent(body);
    if (name) setFileName(name);

    if (data.title) onTitleChange(data.title);
    else if (name && !title) onTitleChange(name.replace(/\.(md|markdown|txt)$/i, '').replace(/[-_]+/g, ' '));

    if (data.description) setDescription(data.description);
    if (data.author) setAuthor(data.author);
    if (data.tags?.length) setTags(data.tags.join(', '));
    if (data.slug) {
      setSlug(slugify(data.slug));
      setSlugEdited(true);
    }
    setError('');
  }

  async function readFile(file: File) {
    if (file.size > 2 * 1024 * 1024) {
      setError('That file is larger than the 2 MB limit.');
      return;
    }
    ingestMarkdown(await file.text(), file.name);
    setMode('upload');
  }

  function onDrop(e: React.DragEvent) {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) void readFile(file);
  }

  function resetForm() {
    setTitle('');
    setSlug('');
    setSlugEdited(false);
    setDescription('');
    setTags('');
    setContent('');
    setFileName('');
    setShowPreview(false);
    setPublished(null);
    setError('');
    if (fileInputRef.current) fileInputRef.current.value = '';
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');

    if (!title.trim()) {
      setError('A title is required.');
      return;
    }
    if (!content.trim()) {
      setError(
        mode === 'upload'
          ? 'Choose a .md file to upload.'
          : 'Paste the markdown for the paper.'
      );
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch('/api/papers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: title.trim(),
          slug: effectiveSlug,
          description: description.trim(),
          author: author.trim(),
          tags,
          content,
        }),
      });

      if (res.status === 401) {
        router.replace('/login');
        return;
      }

      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.success) {
        setError(data.error || 'Publishing failed. Please try again.');
        setSubmitting(false);
        return;
      }

      setPublished({ title: data.data.title, slug: data.data.slug });
      setSubmitting(false);
      router.refresh();
    } catch {
      setError('Network error. Please try again.');
      setSubmitting(false);
    }
  }

  if (published) {
    return (
      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-8 text-center">
        <div className="mx-auto w-11 h-11 rounded-full bg-green-50 flex items-center justify-center">
          <svg className="w-6 h-6 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M4 12.5l5 5L20 6.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h2 className="text-xl font-bold text-[#1B2A4A] mt-4">Paper published</h2>
        <p className="text-sm text-gray-500 mt-1.5">
          “{published.title}” is now live on the site.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
          <Link
            href={`/papers/${published.slug}`}
            className="bg-[#1B2A4A] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#243656] transition-colors"
          >
            View paper
          </Link>
          <button
            type="button"
            onClick={resetForm}
            className="border border-gray-200 text-gray-600 px-4 py-2 rounded-lg text-sm font-semibold hover:border-gray-300 hover:text-gray-800 transition-colors"
          >
            Publish another
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-6">
      {/* Markdown source */}
      <section className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-sm font-bold text-[#1B2A4A] uppercase tracking-wide">Markdown</h2>
          <div className="flex rounded-lg border border-gray-200 p-0.5 text-xs font-semibold">
            {(['paste', 'upload'] as Mode[]).map((m) => (
              <button
                key={m}
                type="button"
                onClick={() => setMode(m)}
                className={`px-3 py-1.5 rounded-md transition-colors ${
                  mode === m ? 'bg-[#1B2A4A] text-white' : 'text-gray-500 hover:text-[#1B2A4A]'
                }`}
              >
                {m === 'paste' ? 'Paste markdown' : 'Upload .md file'}
              </button>
            ))}
          </div>
        </div>

        {mode === 'upload' ? (
          <div
            onDragOver={(e) => {
              e.preventDefault();
              setDragging(true);
            }}
            onDragLeave={() => setDragging(false)}
            onDrop={onDrop}
            className={`mt-5 rounded-xl border-2 border-dashed px-6 py-10 text-center transition-colors ${
              dragging ? 'border-[#3B82F6] bg-[#3B82F6]/5' : 'border-gray-200 bg-[#F5F7FA]'
            }`}
          >
            <svg className="mx-auto w-8 h-8 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M12 16V4m0 0L7.5 8.5M12 4l4.5 4.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M4 15v3a2 2 0 002 2h12a2 2 0 002-2v-3" strokeLinecap="round" />
            </svg>
            <p className="text-sm text-gray-600 mt-3">
              Drop a <span className="font-semibold">.md</span> file here, or
            </p>
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="mt-3 border border-gray-300 bg-white text-gray-700 px-4 py-2 rounded-lg text-sm font-semibold hover:border-gray-400 transition-colors"
            >
              Choose file
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept=".md,.markdown,.txt,text/markdown"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) void readFile(file);
              }}
            />
            {fileName && (
              <p className="text-xs text-gray-500 mt-4">
                Loaded <span className="font-semibold text-gray-700">{fileName}</span> ·{' '}
                {content.length.toLocaleString()} characters
              </p>
            )}
            <p className="text-[11px] text-gray-400 mt-2">
              YAML front matter (title, description, author, tags) is detected and fills the fields below.
            </p>
          </div>
        ) : (
          <>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              onPaste={(e) => {
                // A pasted document that starts with front matter fills the fields for you.
                const text = e.clipboardData.getData('text/plain');
                if (!content.trim() && text.trimStart().startsWith('---')) {
                  e.preventDefault();
                  ingestMarkdown(text);
                }
              }}
              rows={16}
              spellCheck={false}
              placeholder={'# Paper title\n\nPaste your markdown here…'}
              className="mt-5 w-full rounded-xl border border-gray-200 px-4 py-3 font-mono text-[13px] leading-relaxed text-gray-900 placeholder:text-gray-400 focus:border-[#3B82F6] focus:outline-none focus:ring-2 focus:ring-[#3B82F6]/20 transition-colors resize-y"
            />
            <p className="text-[11px] text-gray-400 mt-2">
              {content.length.toLocaleString()} characters · GitHub-flavored markdown, tables and all
            </p>
          </>
        )}

        {content.trim() && (
          <div className="mt-4 border-t border-gray-100 pt-4">
            <button
              type="button"
              onClick={() => setShowPreview((v) => !v)}
              className="text-xs font-semibold text-[#3B82F6] hover:underline"
            >
              {showPreview ? 'Hide preview' : 'Preview rendered paper'}
            </button>
            {showPreview && (
              <div className="mt-4 rounded-xl border border-gray-200 bg-white p-6 max-h-[28rem] overflow-y-auto">
                <div className="prose prose-gray prose-sm max-w-none">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
                </div>
              </div>
            )}
          </div>
        )}
      </section>

      {/* Metadata */}
      <section className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 sm:p-8 flex flex-col gap-4">
        <h2 className="text-sm font-bold text-[#1B2A4A] uppercase tracking-wide">Details</h2>

        <div>
          <label htmlFor="title" className={labelClass}>
            Title <span className="text-red-500">*</span>
          </label>
          <input
            id="title"
            value={title}
            onChange={(e) => onTitleChange(e.target.value)}
            className={inputClass}
            placeholder="Adaptive Path Planning for Autonomous UAV Swarms"
            required
          />
        </div>

        <div>
          <label htmlFor="slug" className={labelClass}>
            URL slug
          </label>
          <input
            id="slug"
            value={slugEdited ? slug : effectiveSlug}
            onChange={(e) => {
              setSlug(e.target.value);
              setSlugEdited(true);
            }}
            className={`${inputClass} font-mono text-[13px]`}
            placeholder="auto-generated-from-title"
          />
          <p className="text-[11px] text-gray-400 mt-1.5">
            mraresearch.org/papers/
            <span className="font-mono text-gray-500">{effectiveSlug || '…'}</span>
          </p>
        </div>

        <div>
          <label htmlFor="description" className={labelClass}>
            Abstract / short description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={3}
            className={`${inputClass} resize-y`}
            placeholder="One or two sentences shown on the papers listing and in search results."
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="author" className={labelClass}>
              Author
            </label>
            <input
              id="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className={inputClass}
              placeholder="Sayantan Mishra"
            />
          </div>
          <div>
            <label htmlFor="tags" className={labelClass}>
              Tags
            </label>
            <input
              id="tags"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              className={inputClass}
              placeholder="autonomous systems, edge ai"
            />
            <p className="text-[11px] text-gray-400 mt-1.5">Comma-separated</p>
          </div>
        </div>
      </section>

      {error && (
        <p className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-lg px-4 py-3">
          {error}
        </p>
      )}

      <div className="flex flex-wrap items-center gap-3">
        <button
          type="submit"
          disabled={submitting}
          className="bg-[#1B2A4A] text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#243656] disabled:opacity-60 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
        >
          {submitting && (
            <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
            </svg>
          )}
          {submitting ? 'Publishing…' : 'Publish paper'}
        </button>
        <button
          type="button"
          onClick={resetForm}
          className="text-sm font-semibold text-gray-500 hover:text-gray-800 transition-colors"
        >
          Clear
        </button>
      </div>
    </form>
  );
}
