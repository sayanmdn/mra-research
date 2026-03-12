import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Nav */}
      <nav className="border-b border-gray-200 px-6 py-4 flex items-center justify-between max-w-6xl mx-auto">
        <span className="text-xl font-bold tracking-tight text-gray-900">MRA Research</span>
        <div className="flex gap-6 text-sm font-medium text-gray-600">
          <Link href="/" className="hover:text-gray-900">Home</Link>
          <Link href="/papers" className="hover:text-gray-900">Papers</Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-16 text-center">
        <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-6">
          Advancing Research.<br />Sharing Knowledge.
        </h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-10">
          MRA Research publishes cutting-edge papers, insights, and findings across disciplines.
          Explore our growing library of research.
        </p>
        <Link
          href="/papers"
          className="inline-block bg-gray-900 text-white px-8 py-3 rounded-lg text-sm font-semibold hover:bg-gray-700 transition-colors"
        >
          Browse Papers
        </Link>
      </section>

      {/* Feature cards */}
      <section className="max-w-5xl mx-auto px-6 pb-24 grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { title: 'Peer-Reviewed', desc: 'All publications go through rigorous review before being listed.' },
          { title: 'Open Access', desc: 'Our papers are freely available to the global research community.' },
          { title: 'Continuously Updated', desc: 'New research is added regularly as our team publishes.' },
        ].map((f) => (
          <div key={f.title} className="border border-gray-100 rounded-xl p-6 shadow-sm">
            <h3 className="font-semibold text-gray-900 mb-2">{f.title}</h3>
            <p className="text-sm text-gray-500">{f.desc}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
