import Link from 'next/link';
import NavBar from '@/components/NavBar';

// ── Inline SVG Icons ──────────────────────────────────────────────────────

const IconMedical = () => (
  <svg width="30" height="30" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="4" width="24" height="24" rx="4" />
    <line x1="16" y1="10" x2="16" y2="22" />
    <line x1="10" y1="16" x2="22" y2="16" />
  </svg>
);

const IconScale = () => (
  <svg width="30" height="30" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <line x1="16" y1="5" x2="16" y2="27" />
    <line x1="10" y1="27" x2="22" y2="27" />
    <line x1="8" y1="11" x2="24" y2="11" />
    <path d="M8 11 L5 17 Q8 20, 11 17 Z" />
    <path d="M24 11 L21 17 Q24 20, 27 17 Z" />
  </svg>
);

const IconCode = () => (
  <svg width="30" height="30" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="10,10 4,16 10,22" />
    <polyline points="22,10 28,16 22,22" />
    <line x1="18" y1="8" x2="14" y2="24" />
  </svg>
);

const IconDrone = () => (
  <svg width="30" height="30" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <rect x="12.5" y="12.5" width="7" height="7" rx="1.5" />
    <line x1="12.5" y1="14" x2="4" y2="4" />
    <line x1="19.5" y1="14" x2="28" y2="4" />
    <line x1="12.5" y1="18" x2="4" y2="28" />
    <line x1="19.5" y1="18" x2="28" y2="28" />
    <circle cx="4" cy="4" r="3" />
    <circle cx="28" cy="4" r="3" />
    <circle cx="4" cy="28" r="3" />
    <circle cx="28" cy="28" r="3" />
  </svg>
);

const IconChip = () => (
  <svg width="30" height="30" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <rect x="10" y="10" width="12" height="12" rx="2" />
    <line x1="14" y1="10" x2="14" y2="7" /><line x1="18" y1="10" x2="18" y2="7" />
    <line x1="14" y1="22" x2="14" y2="25" /><line x1="18" y1="22" x2="18" y2="25" />
    <line x1="10" y1="14" x2="7" y2="14" /><line x1="10" y1="18" x2="7" y2="18" />
    <line x1="22" y1="14" x2="25" y2="14" /><line x1="22" y1="18" x2="25" y2="18" />
  </svg>
);

const IconArrow = () => (
  <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="8" x2="13" y2="8" />
    <polyline points="9,4 13,8 9,12" />
  </svg>
);

// ── Network Diagram SVG ───────────────────────────────────────────────────

const NetworkDiagram = () => (
  <svg
    viewBox="0 0 480 380"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    role="presentation"
  >
    {/* Background grid */}
    <line x1="80"  y1="0"   x2="80"  y2="380" stroke="#1B2A4A" strokeWidth="0.5" opacity="0.04" />
    <line x1="160" y1="0"   x2="160" y2="380" stroke="#1B2A4A" strokeWidth="0.5" opacity="0.04" />
    <line x1="240" y1="0"   x2="240" y2="380" stroke="#1B2A4A" strokeWidth="0.5" opacity="0.04" />
    <line x1="320" y1="0"   x2="320" y2="380" stroke="#1B2A4A" strokeWidth="0.5" opacity="0.04" />
    <line x1="400" y1="0"   x2="400" y2="380" stroke="#1B2A4A" strokeWidth="0.5" opacity="0.04" />
    <line x1="0"   y1="76"  x2="480" y2="76"  stroke="#1B2A4A" strokeWidth="0.5" opacity="0.04" />
    <line x1="0"   y1="152" x2="480" y2="152" stroke="#1B2A4A" strokeWidth="0.5" opacity="0.04" />
    <line x1="0"   y1="228" x2="480" y2="228" stroke="#1B2A4A" strokeWidth="0.5" opacity="0.04" />
    <line x1="0"   y1="304" x2="480" y2="304" stroke="#1B2A4A" strokeWidth="0.5" opacity="0.04" />

    {/* Outer ambient circles */}
    <circle cx="240" cy="190" r="168" stroke="#1B2A4A" strokeWidth="0.75" opacity="0.04" fill="none" strokeDasharray="4 10" />
    <circle cx="240" cy="190" r="108" stroke="#1B2A4A" strokeWidth="0.75" opacity="0.06" fill="none" strokeDasharray="3 7" />

    {/* Connection lines: center → domain nodes */}
    <line x1="240" y1="190" x2="90"  y2="82"  stroke="#1B2A4A" strokeWidth="1"    opacity="0.14" strokeDasharray="5 6" />
    <line x1="240" y1="190" x2="390" y2="82"  stroke="#1B2A4A" strokeWidth="1"    opacity="0.14" strokeDasharray="5 6" />
    <line x1="240" y1="190" x2="90"  y2="298" stroke="#1B2A4A" strokeWidth="1"    opacity="0.14" strokeDasharray="5 6" />
    <line x1="240" y1="190" x2="390" y2="298" stroke="#1B2A4A" strokeWidth="1"    opacity="0.14" strokeDasharray="5 6" />

    {/* Lateral connections */}
    <line x1="90"  y1="82"  x2="390" y2="82"  stroke="#1B2A4A" strokeWidth="0.75" opacity="0.08" strokeDasharray="3 8" />
    <line x1="90"  y1="298" x2="390" y2="298" stroke="#1B2A4A" strokeWidth="0.75" opacity="0.08" strokeDasharray="3 8" />
    <line x1="90"  y1="82"  x2="90"  y2="298" stroke="#1B2A4A" strokeWidth="0.75" opacity="0.08" strokeDasharray="3 8" />
    <line x1="390" y1="82"  x2="390" y2="298" stroke="#1B2A4A" strokeWidth="0.75" opacity="0.08" strokeDasharray="3 8" />

    {/* Midpoint dots on spokes */}
    <circle cx="165" cy="136" r="2.5" fill="#1B2A4A" opacity="0.14" />
    <circle cx="315" cy="136" r="2.5" fill="#1B2A4A" opacity="0.14" />
    <circle cx="165" cy="244" r="2.5" fill="#1B2A4A" opacity="0.14" />
    <circle cx="315" cy="244" r="2.5" fill="#1B2A4A" opacity="0.14" />

    {/* Central hub */}
    <circle cx="240" cy="190" r="34" stroke="#1B2A4A" strokeWidth="1.75" opacity="0.2"  fill="none" />
    <circle cx="240" cy="190" r="20" stroke="#1B2A4A" strokeWidth="1"    opacity="0.14" fill="none" />
    <circle cx="240" cy="190" r="4"  fill="#1B2A4A" opacity="0.22" />
    <text x="240" y="237" textAnchor="middle" fill="#1B2A4A" fontSize="8.5" opacity="0.3" fontFamily="system-ui, sans-serif" letterSpacing="0.02em">MRA Research</text>

    {/* Node: Healthcare IT (top-left) */}
    <circle cx="90"  cy="82"  r="30" stroke="#1B2A4A" strokeWidth="1.5" opacity="0.18" fill="none" />
    <circle cx="90"  cy="82"  r="4"  fill="#1B2A4A" opacity="0.22" />
    <text x="90" y="124" textAnchor="middle" fill="#1B2A4A" fontSize="8" opacity="0.28" fontFamily="system-ui, sans-serif">Healthcare IT</text>

    {/* Node: Legal Tech (top-right) */}
    <circle cx="390" cy="82"  r="30" stroke="#1B2A4A" strokeWidth="1.5" opacity="0.18" fill="none" />
    <circle cx="390" cy="82"  r="4"  fill="#1B2A4A" opacity="0.22" />
    <text x="390" y="124" textAnchor="middle" fill="#1B2A4A" fontSize="8" opacity="0.28" fontFamily="system-ui, sans-serif">Legal Tech</text>

    {/* Node: Software Infra (bottom-left) */}
    <circle cx="90"  cy="298" r="30" stroke="#1B2A4A" strokeWidth="1.5" opacity="0.18" fill="none" />
    <circle cx="90"  cy="298" r="4"  fill="#1B2A4A" opacity="0.22" />
    <text x="90" y="340" textAnchor="middle" fill="#1B2A4A" fontSize="8" opacity="0.28" fontFamily="system-ui, sans-serif">Software Infra</text>

    {/* Node: Autonomous Systems (bottom-right) */}
    <circle cx="390" cy="298" r="30" stroke="#1B2A4A" strokeWidth="1.5" opacity="0.18" fill="none" />
    <circle cx="390" cy="298" r="4"  fill="#1B2A4A" opacity="0.22" />
    <text x="390" y="340" textAnchor="middle" fill="#1B2A4A" fontSize="8" opacity="0.28" fontFamily="system-ui, sans-serif">Autonomous Sys</text>
  </svg>
);

// ── Data ──────────────────────────────────────────────────────────────────

const verticals = [
  {
    icon: <IconMedical />,
    title: 'Healthcare Technology',
    desc: 'US healthcare API integration, pharmacy system backends, EHR and webhook middleware, and HIPAA-compliant cloud infrastructure for healthtech startups.',
  },
  {
    icon: <IconScale />,
    title: 'Legal Technology',
    desc: 'Case management tools for litigants, property dispute tracking, and LLM-powered plain-language guidance — built for everyday users, not just law firms.',
  },
  {
    icon: <IconCode />,
    title: 'Software Infrastructure',
    desc: 'Senior backend engineering for scaling startups — Node.js, TypeScript, PostgreSQL, and cloud-native architectures on GCP and AWS.',
  },
  {
    icon: <IconDrone />,
    title: 'Autonomous Systems',
    desc: 'UAV platform research, edge AI inference, IoT sensor networks, and propulsion system analysis for defense and commercial applications.',
  },
];

const services = [
  {
    icon: <IconCode />,
    title: 'Backend Engineering',
    tagline: 'Production-grade APIs and infrastructure for scaling startups.',
    bullets: [
      'Node.js / TypeScript API development',
      'PostgreSQL and MongoDB — schema design and migrations',
      'GCP and AWS infrastructure, Cloud SQL, Cloud Run',
      'Webhook and third-party system integrations',
      'Async-first fractional engineering (10–20 hrs/week)',
    ],
  },
  {
    icon: <IconChip />,
    title: 'Domain Consulting',
    tagline: 'Healthcare IT and legal-tech domain expertise — from design to production.',
    bullets: [
      'Pharmacy system integrations and EHR middleware',
      'HIPAA compliance documentation and BAA generation',
      'Healthcare API architecture review',
      'LegalTech product design and development',
      'Cloud SQL migrations for regulated data environments',
    ],
  },
];

const publications = [
  {
    title: 'Mesh IoT Integration for Trailer-Launched Autonomous UAV Networks in Wide-Area Infrastructure Surveillance',
    abstract:
      'Explores how trailer-mounted drone networks combined with mesh IoT technology are transforming wide-area infrastructure surveillance — shifting from fixed systems to mobile, autonomous deployments operating in communication-denied environments.',
    date: 'March 2026',
    slug: '/papers/mesh-iot-integration-for-trailer-launched-autonomous-uav-networks-in-wide-area-infrastructure-surveillance',
  },
  {
    title: 'Gasoline-Electric Propulsion Trade-offs in Large-Scale Fixed-Wing VTOL UAVs for Long-Endurance BVLOS Operations',
    abstract:
      'Examines the core architectural bottleneck of pure-electric aviation — where even optimized fixed-wing VTOL platforms plateau at roughly 90–180 minutes — and evaluates gasoline-electric hybrid propulsion as a path to mission-viable endurance.',
    date: 'March 2026',
    slug: '/papers/gasoline-electric-propulsion-trade-offs-in-large-scale-fixed-wing-vtol-uavs-for-long-endurance-bvlos-operations',
  },
  {
    title: 'Optimizing Tiny-YOLO Architectures for Cloud-Free Edge AI Inference in Autonomous UAV Navigation',
    abstract:
      'Investigates how lightweight, localized neural networks enable autonomous drones to perform real-time obstacle detection without cloud connectivity — critical for low-latency navigation at high speed in GPS-contested environments.',
    date: 'March 2026',
    slug: '/papers/optimizing-tiny-yolo-architectures-for-cloud-free-edge-ai-inference-in-autonomous-uav-navigation',
  },
];

// ── Page ──────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      <NavBar />

      <main>
        {/* ── Hero ──────────────────────────────────────────────────────── */}
        <section className="bg-white overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 py-12 md:py-16 flex flex-col md:flex-row items-center gap-10 md:gap-6">

            {/* Left: text */}
            <div className="flex-1 max-w-xl md:max-w-none md:w-1/2">
              

              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-[#1B2A4A] leading-[1.08] tracking-tight mb-6">
                Research-Driven Engineering{' '}
                <span className="text-[#3B82F6]">Across Multiple Domains</span>
              </h1>

              <p className="text-base md:text-lg text-gray-500 leading-relaxed mb-8 max-w-lg">
                MRA Research LLC builds and consults across healthcare technology, legal infrastructure,
                software systems, and autonomous platforms — where deep domain expertise meets
                production-grade engineering.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="#verticals"
                  className="inline-flex items-center justify-center gap-2 bg-[#1B2A4A] text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-[#243656] transition-colors"
                >
                  Our Verticals <IconArrow />
                </Link>
                <Link
                  href="#about"
                  className="inline-flex items-center justify-center gap-2 border border-[#1B2A4A] text-[#1B2A4A] px-6 py-3 rounded-lg text-sm font-semibold hover:bg-gray-50 transition-colors"
                >
                  About Us
                </Link>
              </div>
            </div>

            {/* Right: network diagram */}
            <div className="w-full md:w-1/2 max-w-md md:max-w-none flex items-center justify-center">
              <NetworkDiagram />
            </div>
          </div>
        </section>

        {/* ── Verticals ─────────────────────────────────────────────────── */}
        <section id="verticals" className="bg-[#F5F7FA] py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <p className="text-[#3B82F6] text-xs font-semibold uppercase tracking-[0.15em] mb-3">
                Business Lines
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1B2A4A]">What We Work On</h2>
              <p className="text-gray-500 mt-4 max-w-xl mx-auto text-base leading-relaxed">
                We operate across four high-impact domains — each one chosen because we have
                genuine production experience and a defensible edge.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {verticals.map((v) => (
                <div
                  key={v.title}
                  className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
                >
                  <div className="text-[#1B2A4A] mb-4 opacity-75">{v.icon}</div>
                  <h3 className="text-[0.9rem] font-semibold text-[#1B2A4A] mb-2 leading-snug">
                    {v.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── About ─────────────────────────────────────────────────────── */}
        <section id="about" className="bg-white py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-3xl">
              <p className="text-[#3B82F6] text-xs font-semibold uppercase tracking-[0.15em] mb-3">
                Who We Are
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1B2A4A] mb-6">
                About MRA Research
              </h2>
              <p className="text-base md:text-lg text-gray-500 leading-relaxed">
                MRA Research LLC is a technology research and consulting firm incorporated in
                Delaware, USA. We operate across multiple high-impact domains — healthcare API
                integration, legal technology, backend software infrastructure, and autonomous
                systems research. Our work spans open-access publications, SaaS product development,
                and fractional consulting engagements for early-stage US-based startups.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
                {[
                  { label: 'Incorporated', value: 'Delaware, USA' },
                  { label: 'Focus',        value: 'Multi-Domain Technology' },
                  { label: 'Clients',      value: 'US Healthtech & Startups' },
                ].map((item) => (
                  <div key={item.label} className="border-l-2 border-[#3B82F6] pl-4">
                    <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-[0.12em] mb-1">
                      {item.label}
                    </p>
                    <p className="text-sm font-semibold text-[#1B2A4A]">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Services ──────────────────────────────────────────────────── */}
        <section id="services" className="bg-[#F5F7FA] py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <p className="text-[#3B82F6] text-xs font-semibold uppercase tracking-[0.15em] mb-3">
                Consulting
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1B2A4A]">What We Build For You</h2>
              <p className="text-gray-500 mt-4 max-w-xl mx-auto text-base leading-relaxed">
                Beyond research, MRA Research offers hands-on consulting — bringing domain expertise
                and production engineering experience directly to your challenges.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((svc) => (
                <div
                  key={svc.title}
                  className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
                >
                  <div className="text-[#1B2A4A] mb-4 opacity-75">{svc.icon}</div>
                  <h3 className="text-lg font-bold text-[#1B2A4A] mb-1">{svc.title}</h3>
                  <p className="text-sm text-gray-400 mb-5">{svc.tagline}</p>
                  <ul className="space-y-2.5">
                    {svc.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2.5 text-sm text-gray-500">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#3B82F6] shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Publications ──────────────────────────────────────────────── */}
        <section id="papers" className="bg-[#F5F7FA] py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
              <div>
                <p className="text-[#3B82F6] text-xs font-semibold uppercase tracking-[0.15em] mb-3">
                  Open Access
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-[#1B2A4A]">Latest Research</h2>
              </div>
              <Link
                href="/papers"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#3B82F6] hover:gap-2.5 transition-all"
              >
                View all papers <IconArrow />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {publications.map((pub) => (
                <div
                  key={pub.title}
                  className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col hover:shadow-md transition-shadow duration-200"
                >
                  <p className="text-[11px] text-gray-400 font-medium tracking-wide mb-3">
                    {pub.date}
                  </p>
                  <h3 className="text-[0.9rem] font-semibold text-[#1B2A4A] leading-snug mb-3">
                    {pub.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed flex-1 mb-5">
                    {pub.abstract}
                  </p>
                  <Link
                    href={pub.slug}
                    className="inline-flex items-center gap-1.5 text-[#3B82F6] text-sm font-semibold hover:gap-2.5 transition-all"
                  >
                    Read Paper <IconArrow />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* ── Footer ────────────────────────────────────────────────────────── */}
      <footer id="contact" className="bg-[#1B2A4A] text-white py-14">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

            {/* Left: brand */}
            <div>
              <p className="text-base font-bold mb-2 tracking-tight">MRA Research LLC</p>
              <p className="text-sm text-gray-400 leading-relaxed">
                Technology research and consulting across healthcare IT, legal technology,
                software infrastructure, and autonomous systems.
              </p>
            </div>

            {/* Center: links */}
            <div>
              <p className="text-[10px] font-semibold text-gray-500 uppercase tracking-[0.14em] mb-4">
                Navigation
              </p>
              <ul className="space-y-2.5 text-sm text-gray-300">
                <li><Link href="/"           className="hover:text-white transition-colors">Home</Link></li>
                <li><Link href="#about"      className="hover:text-white transition-colors">About</Link></li>
                <li><Link href="#verticals"  className="hover:text-white transition-colors">Verticals</Link></li>
                <li><Link href="#services"   className="hover:text-white transition-colors">Services</Link></li>
                <li><Link href="/papers"     className="hover:text-white transition-colors">Papers</Link></li>
                <li><Link href="#contact"    className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Right: contact */}
            <div>
              <p className="text-[10px] font-semibold text-gray-500 uppercase tracking-[0.14em] mb-4">
                Contact
              </p>
              <address className="not-italic text-sm text-gray-300 leading-relaxed">
                <p>34 Brier Ave #712</p>
                <p>Wilmington, DE 19805</p>
                <p className="mt-3">
                  <a
                    href="mailto:contact@mraresearch.org"
                    className="text-[#3B82F6] hover:text-blue-400 transition-colors"
                  >
                    contact@mraresearch.org
                  </a>
                </p>
              </address>
            </div>
          </div>

          <div className="border-t border-white/10 pt-6 text-xs text-gray-500">
            &copy; 2026 MRA Research LLC. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
