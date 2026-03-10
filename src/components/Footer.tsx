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
      { label: 'Credit Repair', href: '/credit-repair' },
      { label: 'Funding', href: '/funding' },
      { label: 'Trading', href: '/trading' },
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

const socials = [
  { label: 'Facebook', href: '#', icon: 'f' },
  { label: 'Instagram', href: '#', icon: 'ig' },
  { label: 'TikTok', href: '#', icon: 'tt' },
  { label: 'YouTube', href: '#', icon: 'yt' },
];

export default function Footer() {
  return (
    <footer className="relative bg-[var(--navy-dark)]">
      {/* Gold gradient divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-bold uppercase tracking-widest text-[var(--gold)] mb-5">
                {col.title}
              </h3>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[var(--muted)] hover:text-[var(--gold-light)] transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Connect */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-[var(--gold)] mb-5">
              Connect
            </h3>
            <div className="flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-[var(--card-bg)] border border-[var(--card-border)] text-[var(--muted)] hover:text-[var(--gold)] hover:border-[var(--gold)]/50 hover:shadow-[0_0_16px_rgba(212,168,67,0.15)] transition-all duration-300 text-xs font-bold uppercase"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
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
                Fix. Fund. Trade. Repeat.
              </p>
            </div>

            <p className="text-sm text-[var(--muted)]/60">
              &copy; 2026 Founder TTR. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
