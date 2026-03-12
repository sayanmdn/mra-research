export default function PaperLoading() {
  return (
    <main className="min-h-screen bg-white">
      <nav className="border-b border-gray-200 px-6 py-4 flex items-center justify-between max-w-6xl mx-auto">
        <span className="text-xl font-bold tracking-tight text-gray-900">MRA Research</span>
      </nav>

      <article className="max-w-3xl mx-auto px-6 pt-12 pb-24 animate-pulse">
        <div className="h-4 w-24 bg-gray-200 rounded mb-8" />
        <div className="h-10 w-3/4 bg-gray-200 rounded mb-4" />
        <div className="h-5 w-1/2 bg-gray-100 rounded mb-4" />
        <div className="flex gap-3 mb-10">
          <div className="h-4 w-20 bg-gray-100 rounded-full" />
          <div className="h-4 w-28 bg-gray-100 rounded-full" />
        </div>
        <div className="space-y-3">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className={`h-4 bg-gray-100 rounded ${i % 4 === 3 ? 'w-2/3' : 'w-full'}`} />
          ))}
        </div>
      </article>
    </main>
  );
}
