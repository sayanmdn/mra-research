import Link from 'next/link';
import type { Metadata } from 'next';
import NavBar from '@/components/NavBar';

export const metadata: Metadata = {
  title: 'Request Services',
  description:
    'Request consulting or engineering services from MRA Research LLC — healthcare technology, legal technology, software infrastructure, and autonomous systems.',
  openGraph: {
    title: 'Request Services | MRA Research LLC',
    description:
      'Request consulting or engineering services from MRA Research LLC — healthcare technology, legal technology, software infrastructure, and autonomous systems.',
    url: 'https://www.mraresearch.org/request-services',
    type: 'website',
  },
};

const IconArrow = () => (
  <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="8" x2="13" y2="8" />
    <polyline points="9,4 13,8 9,12" />
  </svg>
);

const IconMail = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 7l9 6 9-6" />
  </svg>
);

const offerings = [
  {
    title: 'Healthcare Technology',
    desc: 'API integration, pharmacy system backends, EHR/webhook middleware, and HIPAA-compliant cloud infrastructure.',
  },
  {
    title: 'Legal Technology',
    desc: 'Case and property-dispute tracking tools, LLM-powered plain-language legal guidance products.',
  },
  {
    title: 'Software Infrastructure',
    desc: 'Fractional backend engineering — Node.js, TypeScript, PostgreSQL, GCP and AWS, for scaling startups.',
  },
  {
    title: 'Autonomous Systems',
    desc: 'UAV platform research, edge AI inference, IoT sensor networks, propulsion system analysis.',
  },
];

const steps = [
  { label: 'Reach out', desc: 'Send a note describing what you need — no form to fill out, just email us directly.' },
  { label: 'Discovery call', desc: 'We schedule a short call to understand scope, timeline, and constraints.' },
  { label: 'Proposal', desc: 'You receive a written scope of work and estimate before anything is billed.' },
  { label: 'Engagement', desc: 'We start work — async-first, with regular check-ins and clear deliverables.' },
];

export default function RequestServicesPage() {
  return (
    <>
      <NavBar />
      <main className="bg-white">
        {/* ── Hero ──────────────────────────────────────────────────────── */}
        <section className="bg-white">
          <div className="max-w-4xl mx-auto px-6 pt-16 pb-14 text-center">
            <p className="text-[#3B82F6] text-xs font-semibold uppercase tracking-[0.15em] mb-3">
              Get Started
            </p>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#1B2A4A] leading-[1.08] tracking-tight mb-6">
              Request Our Services
            </h1>
            <p className="text-base md:text-lg text-gray-500 leading-relaxed max-w-2xl mx-auto mb-9">
              Tell us what you&apos;re building and we&apos;ll get back to you within one business day.
              MRA Research LLC provides consulting and engineering across healthcare technology,
              legal technology, software infrastructure, and autonomous systems.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="mailto:contact@mraresearch.org?subject=Service%20Request"
                className="inline-flex items-center justify-center gap-2 bg-[#1B2A4A] text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-[#243656] transition-colors"
              >
                <IconMail /> Request Services
              </a>
              <Link
                href="/#services"
                className="inline-flex items-center justify-center gap-2 border border-[#1B2A4A] text-[#1B2A4A] px-6 py-3 rounded-lg text-sm font-semibold hover:bg-gray-50 transition-colors"
              >
                See What We Build <IconArrow />
              </Link>
            </div>
          </div>
        </section>

        {/* ── Offerings ─────────────────────────────────────────────────── */}
        <section className="bg-[#F5F7FA] py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <p className="text-[#3B82F6] text-xs font-semibold uppercase tracking-[0.15em] mb-3">
                What We Cover
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1B2A4A]">Where We Can Help</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {offerings.map((o) => (
                <div
                  key={o.title}
                  className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
                >
                  <h3 className="text-[0.9rem] font-semibold text-[#1B2A4A] mb-2 leading-snug">
                    {o.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{o.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Process ───────────────────────────────────────────────────── */}
        <section className="bg-white py-20">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-14">
              <p className="text-[#3B82F6] text-xs font-semibold uppercase tracking-[0.15em] mb-3">
                How It Works
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1B2A4A]">From First Email to Kickoff</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((s, i) => (
                <div key={s.label} className="relative pl-4 border-l-2 border-[#3B82F6]">
                  <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-[0.12em] mb-1">
                    Step {i + 1}
                  </p>
                  <h3 className="text-sm font-semibold text-[#1B2A4A] mb-2">{s.label}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Closing CTA ───────────────────────────────────────────────── */}
        <section className="bg-[#1B2A4A] py-16">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to talk about your project?
            </h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Email us directly and describe what you need — we&apos;ll follow up within one
              business day.
            </p>
            <a
              href="mailto:contact@mraresearch.org?subject=Service%20Request"
              className="inline-flex items-center justify-center gap-2 bg-[#3B82F6] text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-blue-500 transition-colors"
            >
              <IconMail /> contact@mraresearch.org
            </a>
          </div>
        </section>
      </main>

      {/* ── Footer ────────────────────────────────────────────────────────── */}
      <footer className="bg-[#1B2A4A] text-white py-10 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>&copy; 2026 MRA Research LLC. All rights reserved.</p>
          <Link href="/" className="hover:text-white transition-colors">
            Back to Home
          </Link>
        </div>
      </footer>
    </>
  );
}
