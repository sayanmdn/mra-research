'use client';

import { useState } from 'react';
import Link from 'next/link';

const navLinks = [
  { href: '/',           label: 'Home' },
  { href: '/#about',     label: 'About' },
  { href: '/#verticals', label: 'Verticals' },
  { href: '/#services',  label: 'Services' },
  { href: '/papers',     label: 'Papers' },
];

const IconMenu = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const IconClose = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <line x1="6" y1="6" x2="18" y2="18" />
    <line x1="18" y1="6" x2="6" y2="18" />
  </svg>
);

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="text-lg font-bold tracking-tight text-[#1B2A4A]">
            MRA Research
          </span>
          <span className="hidden sm:inline text-[10px] font-semibold text-gray-400 border border-gray-200 px-2 py-0.5 rounded-full tracking-wide">
            LLC
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-7 text-sm font-medium text-gray-500">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-[#1B2A4A] transition-colors">
              {l.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            className="bg-[#1B2A4A] text-white px-4 py-1.5 rounded-lg text-sm font-semibold hover:bg-[#243656] transition-colors"
          >
            Contact
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className="md:hidden flex items-center justify-center text-[#1B2A4A] p-1.5 -mr-1.5"
        >
          {open ? <IconClose /> : <IconMenu />}
        </button>
      </nav>

      {/* Mobile panel */}
      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-1 text-sm font-medium text-gray-600">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2.5 border-b border-gray-100 last:border-0 hover:text-[#1B2A4A] transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex items-center justify-center bg-[#1B2A4A] text-white px-4 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#243656] transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
