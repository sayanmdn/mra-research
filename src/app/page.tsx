import Link from 'next/link';
import NavBar from '@/components/NavBar';

// ── Inline SVG Icons ──────────────────────────────────────────────────────

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

const IconBrain = () => (
  <svg width="30" height="30" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="9" r="2.5" />
    <circle cx="23" cy="9" r="2.5" />
    <circle cx="9" cy="23" r="2.5" />
    <circle cx="23" cy="23" r="2.5" />
    <circle cx="16" cy="16" r="2.5" />
    <line x1="11.5" y1="9" x2="13.5" y2="14" />
    <line x1="20.5" y1="10.5" x2="18.5" y2="14" />
    <line x1="11.5" y1="23" x2="13.5" y2="18" />
    <line x1="20.5" y1="21.5" x2="18.5" y2="18" />
    <line x1="9" y1="11.5" x2="9" y2="20.5" />
    <line x1="23" y1="11.5" x2="23" y2="20.5" />
  </svg>
);

const IconNetwork = () => (
  <svg width="30" height="30" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="16" cy="16" r="2.5" />
    <circle cx="5" cy="8" r="2.5" />
    <circle cx="27" cy="8" r="2.5" />
    <circle cx="5" cy="24" r="2.5" />
    <circle cx="27" cy="24" r="2.5" />
    <line x1="7.5" y1="8" x2="13.5" y2="14.5" />
    <line x1="24.5" y1="8" x2="18.5" y2="14.5" />
    <line x1="7.5" y1="24" x2="13.5" y2="17.5" />
    <line x1="24.5" y1="24" x2="18.5" y2="17.5" />
    <line x1="7.5" y1="8" x2="24.5" y2="8" />
    <line x1="5" y1="10.5" x2="5" y2="21.5" />
    <line x1="27" y1="10.5" x2="27" y2="21.5" />
  </svg>
);

const IconRocket = () => (
  <svg width="30" height="30" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 3 C21 3, 27 8, 27 18 L16 25 L5 18 C5 8, 11 3, 16 3Z" />
    <circle cx="16" cy="13" r="2.75" />
    <path d="M8 18 L3.5 24.5 L10 23" />
    <path d="M24 18 L28.5 24.5 L22 23" />
  </svg>
);

const IconArrow = () => (
  <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="8" x2="13" y2="8" />
    <polyline points="9,4 13,8 9,12" />
  </svg>
);

const IconCode = () => (
  <svg width="30" height="30" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="10,10 4,16 10,22" />
    <polyline points="22,10 28,16 22,22" />
    <line x1="18" y1="8" x2="14" y2="24" />
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

// ── Drone Wireframe SVG ───────────────────────────────────────────────────

const DroneWireframe = () => (
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

    {/* Range circles */}
    <circle cx="240" cy="190" r="170" stroke="#1B2A4A" strokeWidth="0.75" opacity="0.05" fill="none" strokeDasharray="4 10" />
    <circle cx="240" cy="190" r="110" stroke="#1B2A4A" strokeWidth="0.75" opacity="0.07" fill="none" strokeDasharray="3 7" />
    <circle cx="240" cy="190" r="58"  stroke="#1B2A4A" strokeWidth="1"    opacity="0.09" fill="none" />

    {/* Crosshair */}
    <line x1="240" y1="60"  x2="240" y2="320" stroke="#1B2A4A" strokeWidth="0.75" opacity="0.07" />
    <line x1="70"  y1="190" x2="410" y2="190" stroke="#1B2A4A" strokeWidth="0.75" opacity="0.07" />

    {/* Drone body */}
    <rect x="213" y="163" width="54" height="54" rx="7" stroke="#1B2A4A" strokeWidth="2" opacity="0.22" fill="none" />

    {/* Body inner cross */}
    <line x1="240" y1="166" x2="240" y2="214" stroke="#1B2A4A" strokeWidth="1"   opacity="0.16" />
    <line x1="216" y1="190" x2="264" y2="190" stroke="#1B2A4A" strokeWidth="1"   opacity="0.16" />
    <circle cx="240" cy="190" r="9"  stroke="#1B2A4A" strokeWidth="1.5" opacity="0.2"  fill="none" />
    <circle cx="240" cy="190" r="2.5" fill="#1B2A4A" opacity="0.22" />

    {/* Arms */}
    <line x1="213" y1="163" x2="88"  y2="78"  stroke="#1B2A4A" strokeWidth="1.75" opacity="0.2" />
    <line x1="267" y1="163" x2="392" y2="78"  stroke="#1B2A4A" strokeWidth="1.75" opacity="0.2" />
    <line x1="213" y1="217" x2="88"  y2="302" stroke="#1B2A4A" strokeWidth="1.75" opacity="0.2" />
    <line x1="267" y1="217" x2="392" y2="302" stroke="#1B2A4A" strokeWidth="1.75" opacity="0.2" />

    {/* Motor housings */}
    <circle cx="88"  cy="78"  r="38" stroke="#1B2A4A" strokeWidth="1.5" opacity="0.18" fill="none" />
    <circle cx="392" cy="78"  r="38" stroke="#1B2A4A" strokeWidth="1.5" opacity="0.18" fill="none" />
    <circle cx="88"  cy="302" r="38" stroke="#1B2A4A" strokeWidth="1.5" opacity="0.18" fill="none" />
    <circle cx="392" cy="302" r="38" stroke="#1B2A4A" strokeWidth="1.5" opacity="0.18" fill="none" />

    {/* Motor centers */}
    <circle cx="88"  cy="78"  r="6" stroke="#1B2A4A" strokeWidth="1.5" opacity="0.24" fill="none" />
    <circle cx="392" cy="78"  r="6" stroke="#1B2A4A" strokeWidth="1.5" opacity="0.24" fill="none" />
    <circle cx="88"  cy="302" r="6" stroke="#1B2A4A" strokeWidth="1.5" opacity="0.24" fill="none" />
    <circle cx="392" cy="302" r="6" stroke="#1B2A4A" strokeWidth="1.5" opacity="0.24" fill="none" />

    {/* Propeller arcs — FL */}
    <path d="M63 54 Q88 47, 113 54"  stroke="#1B2A4A" strokeWidth="1.5" opacity="0.15" fill="none" />
    <path d="M63 102 Q88 109, 113 102" stroke="#1B2A4A" strokeWidth="1.5" opacity="0.15" fill="none" />
    <path d="M63 54 Q56 78, 63 102"  stroke="#1B2A4A" strokeWidth="1.5" opacity="0.15" fill="none" />
    <path d="M113 54 Q120 78, 113 102" stroke="#1B2A4A" strokeWidth="1.5" opacity="0.15" fill="none" />

    {/* Propeller arcs — FR */}
    <path d="M367 54 Q392 47, 417 54"  stroke="#1B2A4A" strokeWidth="1.5" opacity="0.15" fill="none" />
    <path d="M367 102 Q392 109, 417 102" stroke="#1B2A4A" strokeWidth="1.5" opacity="0.15" fill="none" />
    <path d="M367 54 Q360 78, 367 102"  stroke="#1B2A4A" strokeWidth="1.5" opacity="0.15" fill="none" />
    <path d="M417 54 Q424 78, 417 102"  stroke="#1B2A4A" strokeWidth="1.5" opacity="0.15" fill="none" />

    {/* Propeller arcs — RL */}
    <path d="M63 278 Q88 271, 113 278"  stroke="#1B2A4A" strokeWidth="1.5" opacity="0.15" fill="none" />
    <path d="M63 326 Q88 333, 113 326"  stroke="#1B2A4A" strokeWidth="1.5" opacity="0.15" fill="none" />
    <path d="M63 278 Q56 302, 63 326"   stroke="#1B2A4A" strokeWidth="1.5" opacity="0.15" fill="none" />
    <path d="M113 278 Q120 302, 113 326" stroke="#1B2A4A" strokeWidth="1.5" opacity="0.15" fill="none" />

    {/* Propeller arcs — RR */}
    <path d="M367 278 Q392 271, 417 278"  stroke="#1B2A4A" strokeWidth="1.5" opacity="0.15" fill="none" />
    <path d="M367 326 Q392 333, 417 326"  stroke="#1B2A4A" strokeWidth="1.5" opacity="0.15" fill="none" />
    <path d="M367 278 Q360 302, 367 326"  stroke="#1B2A4A" strokeWidth="1.5" opacity="0.15" fill="none" />
    <path d="M417 278 Q424 302, 417 326"  stroke="#1B2A4A" strokeWidth="1.5" opacity="0.15" fill="none" />

  </svg>
);

// ── Data ──────────────────────────────────────────────────────────────────

const researchAreas = [
  {
    icon: <IconDrone />,
    title: 'Autonomous UAV Systems',
    desc: 'Fixed-wing and hybrid VTOL drone design, swarm coordination, long-endurance BVLOS platforms, and counter-drone systems.',
  },
  {
    icon: <IconBrain />,
    title: 'Artificial Intelligence & Machine Learning',
    desc: 'Edge AI for on-board decision making, reinforcement learning for autonomous navigation, computer vision, and predictive analytics.',
  },
  {
    icon: <IconNetwork />,
    title: 'IoT & Edge Computing',
    desc: 'Distributed sensor networks, real-time telemetry, mesh communication architectures, and edge inference for field-deployed systems.',
  },
  {
    icon: <IconRocket />,
    title: 'Aerospace & Propulsion Research',
    desc: 'Jet engine design fundamentals, gasoline-electric hybrid propulsion for UAVs, aerodynamic optimization, and propulsion system integration.',
  },
];

const services = [
  {
    icon: <IconCode />,
    title: 'Software Consulting',
    tagline: 'From firmware to full-stack autonomous systems software.',
    bullets: [
      'Embedded systems & firmware development',
      'Autonomous navigation and flight control software',
      'Edge AI / ML model integration and optimization',
      'Real-time telemetry pipelines and data architectures',
      'Custom simulation and testing frameworks',
    ],
  },
  {
    icon: <IconChip />,
    title: 'Hardware Consulting',
    tagline: 'End-to-end hardware design for field-deployed systems.',
    bullets: [
      'PCB design and embedded hardware prototyping',
      'UAV airframe and propulsion system integration',
      'Multi-sensor fusion hardware architectures',
      'IoT node and mesh network hardware design',
      'Hardware-in-the-loop (HIL) testing and validation',
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
              <div className="inline-flex items-center gap-2 bg-blue-50 text-[#3B82F6] text-xs font-semibold px-3.5 py-1.5 rounded-full mb-6 border border-blue-100">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] inline-block" />
                Scientific R&amp;D · Delaware, USA
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-[#1B2A4A] leading-[1.08] tracking-tight mb-6">
                Engineering Tomorrow&rsquo;s{' '}
                <span className="text-[#3B82F6]">Autonomous Systems</span>
              </h1>

              <p className="text-base md:text-lg text-gray-500 leading-relaxed mb-8 max-w-lg">
                We develop cutting-edge solutions in autonomous UAV systems, artificial
                intelligence, IoT, and aerospace engineering — publishing open-access research
                and building technology for defense and commercial applications.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="#research"
                  className="inline-flex items-center justify-center gap-2 bg-[#1B2A4A] text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-[#243656] transition-colors"
                >
                  Explore Research <IconArrow />
                </Link>
                <Link
                  href="#about"
                  className="inline-flex items-center justify-center gap-2 border border-[#1B2A4A] text-[#1B2A4A] px-6 py-3 rounded-lg text-sm font-semibold hover:bg-gray-50 transition-colors"
                >
                  About Us
                </Link>
              </div>
            </div>

            {/* Right: drone wireframe */}
            <div className="w-full md:w-1/2 max-w-md md:max-w-none flex items-center justify-center">
              <DroneWireframe />
            </div>
          </div>
        </section>

        {/* ── Research Areas ────────────────────────────────────────────── */}
        <section id="research" className="bg-[#F5F7FA] py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <p className="text-[#3B82F6] text-xs font-semibold uppercase tracking-[0.15em] mb-3">
                Disciplines
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1B2A4A]">Research Areas</h2>
              <p className="text-gray-500 mt-4 max-w-xl mx-auto text-base leading-relaxed">
                Our work spans four core technical domains — from hardware-level UAV engineering
                to advanced AI and edge inference systems.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {researchAreas.map((area) => (
                <div
                  key={area.title}
                  className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
                >
                  <div className="text-[#1B2A4A] mb-4 opacity-75">{area.icon}</div>
                  <h3 className="text-[0.9rem] font-semibold text-[#1B2A4A] mb-2 leading-snug">
                    {area.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{area.desc}</p>
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
                MRA Research LLC is a scientific research and development firm incorporated in
                Delaware, USA. We focus on advancing autonomous systems, AI-driven engineering,
                and next-generation aerospace technologies. Our work spans peer-reviewed
                publications, prototype development, and applied R&amp;D for defense and
                commercial sectors.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
                {[
                  { label: 'Incorporated', value: 'Delaware, USA' },
                  { label: 'Focus',        value: 'Defense & Commercial R&D' },
                  { label: 'Services',     value: 'Software & Hardware Consulting' },
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
                Beyond research, MRA Research offers hands-on consulting across software and hardware
                — bringing our R&amp;D expertise directly to your engineering challenges.
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
                Scientific research and development in autonomous systems, AI, and aerospace
                engineering.
              </p>
            </div>

            {/* Center: links */}
            <div>
              <p className="text-[10px] font-semibold text-gray-500 uppercase tracking-[0.14em] mb-4">
                Navigation
              </p>
              <ul className="space-y-2.5 text-sm text-gray-300">
                <li><Link href="/"         className="hover:text-white transition-colors">Home</Link></li>
                <li><Link href="#about"    className="hover:text-white transition-colors">About</Link></li>
                <li><Link href="#research" className="hover:text-white transition-colors">Research</Link></li>
                <li><Link href="#services" className="hover:text-white transition-colors">Services</Link></li>
                <li><Link href="/papers"   className="hover:text-white transition-colors">Papers</Link></li>
                <li><Link href="#contact"  className="hover:text-white transition-colors">Contact</Link></li>
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
