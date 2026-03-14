import Link from 'next/link';

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="text-lg font-bold tracking-tight text-[#1B2A4A]">
            MRA Research
          </span>
          <span className="hidden sm:inline text-[10px] font-semibold text-gray-400 border border-gray-200 px-2 py-0.5 rounded-full tracking-wide">
            LLC
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-7 text-sm font-medium text-gray-500">
          <Link href="/"         className="hover:text-[#1B2A4A] transition-colors">Home</Link>
          <Link href="/#about"   className="hover:text-[#1B2A4A] transition-colors">About</Link>
          <Link href="/#research" className="hover:text-[#1B2A4A] transition-colors">Research Areas</Link>
          <Link href="/#services" className="hover:text-[#1B2A4A] transition-colors">Services</Link>
          <Link href="/papers"   className="hover:text-[#1B2A4A] transition-colors">Papers</Link>
          <Link
            href="/#contact"
            className="bg-[#1B2A4A] text-white px-4 py-1.5 rounded-lg text-sm font-semibold hover:bg-[#243656] transition-colors"
          >
            Contact
          </Link>
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center gap-4 text-sm font-medium text-gray-500">
          <Link href="/papers" className="hover:text-[#1B2A4A] transition-colors">Papers</Link>
          <Link href="/#contact" className="bg-[#1B2A4A] text-white px-3 py-1.5 rounded-lg text-xs font-semibold">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
