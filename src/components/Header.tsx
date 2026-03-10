'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Credit Repair', href: '/credit-repair' },
  { label: 'Funding', href: '/funding' },
  { label: 'Trading', href: '/trading' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass shadow-lg shadow-black/30'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group" onClick={() => setMenuOpen(false)}>
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[var(--gold-light)] to-[var(--gold-dark)] flex items-center justify-center text-[var(--background)] font-extrabold text-sm group-hover:shadow-[0_0_24px_rgba(212,168,67,0.5)] transition-all duration-300">
            F
          </div>
          <span className="text-gold-gradient font-extrabold text-xl tracking-tight">
            Founder TTR
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors duration-300 rounded-lg hover:bg-white/5"
            >
              {link.label}
            </Link>
          ))}
          <Link href="/free-guide" className="btn-gold ml-4 !py-2.5 !px-6 text-sm">
            Get Started
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden relative w-10 h-10 flex items-center justify-center"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span
              className={`block h-0.5 bg-[var(--foreground)] rounded-full transition-all duration-300 origin-center ${
                menuOpen ? 'rotate-45 translate-y-[4px]' : ''
              }`}
            />
            <span
              className={`block h-0.5 bg-[var(--foreground)] rounded-full transition-all duration-300 ${
                menuOpen ? 'opacity-0 scale-0' : ''
              }`}
            />
            <span
              className={`block h-0.5 bg-[var(--foreground)] rounded-full transition-all duration-300 origin-center ${
                menuOpen ? '-rotate-45 -translate-y-[4px]' : ''
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 top-16 z-40 transition-all duration-500 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setMenuOpen(false)} />

        <div
          className={`absolute top-0 right-0 h-full w-72 bg-[var(--navy-dark)] border-l border-[var(--card-border)] transition-transform duration-500 ease-out ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col p-6 pt-8 gap-1">
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="px-4 py-3 text-lg text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-white/5 rounded-lg transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/free-guide"
              onClick={() => setMenuOpen(false)}
              className="btn-gold text-center mt-6 !py-3 animate-fade-up"
              style={{ animationDelay: `${navLinks.length * 60}ms` }}
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
