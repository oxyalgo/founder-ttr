import Link from 'next/link';

const columns = [
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'AI Trading', href: '/trading' },
      { label: 'Copy Trading', href: '/pricing' },
      { label: 'Discord Hub', href: 'https://discord.gg/nWDH6Swj' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Disclaimer', href: '/disclaimer' },
    ],
  },
];


export default function Footer() {
  return (
    <footer className="relative bg-[var(--navy-dark)]">
      {/* Gradient glow line at top */}
      <div className="h-px bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent" />
      <div className="h-px bg-gradient-to-r from-transparent via-[var(--gold)]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 lg:gap-12">
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-bold uppercase tracking-widest text-[var(--gold)] mb-5">
                {col.title}
              </h3>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-[var(--muted)] hover:text-[var(--gold-light)] hover:drop-shadow-[0_0_8px_rgba(212,168,67,0.3)] transition-all duration-300"
                      {...(link.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-[var(--card-border)]/50">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex flex-col items-center sm:items-start gap-2">
              <Link href="/" className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-md bg-gradient-to-br from-[var(--gold-light)] to-[var(--gold-dark)] flex items-center justify-center text-[var(--background)] font-extrabold text-xs">
                  F
                </div>
                <span className="text-gold-gradient font-extrabold text-lg">Founder TTR</span>
              </Link>
              <p className="text-sm text-[var(--muted)] italic">
                AI Trades. You Profit.
              </p>
            </div>

            <p className="text-sm text-[var(--muted)]/60">
              &copy; 2026 Phi Mind Flow. All rights reserved.
            </p>
          </div>

          {/* Earnings Disclaimer */}
          <div className="mt-8 pt-6 border-t border-[var(--card-border)]/30">
            <p className="text-xs text-[var(--muted)]/40 leading-relaxed max-w-4xl mx-auto text-center">
              <strong className="text-[var(--muted)]/60">Earnings Disclaimer:</strong> Trading forex, crypto, indices, and commodities involves substantial risk of loss and is not suitable for all investors. Past performance is not indicative of future results. The content on this site is for educational purposes only and should not be considered financial advice. You should consult with a licensed financial advisor before making any investment decisions. Never trade with money you cannot afford to lose. Powered by OXY ALGO.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
