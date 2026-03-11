'use client';

import ScrollReveal from './ScrollReveal';
import SectionHeading from './SectionHeading';

const PAYOUTS = [
  { amount: '$4,200', desc: 'Forex profits — 3 weeks', initials: 'MJ', gradient: 'from-green-400 to-emerald-600' },
  { amount: '$8,500', desc: 'Prop firm payout — FTMO', initials: 'TR', gradient: 'from-yellow-400 to-orange-500' },
  { amount: '$2,100', desc: 'Gold trades — 2 weeks', initials: 'DK', gradient: 'from-blue-400 to-cyan-500' },
  { amount: '$12,000', desc: 'Funded account withdrawal', initials: 'AW', gradient: 'from-purple-400 to-pink-500' },
  { amount: '$3,400', desc: 'Copy trading profits', initials: 'KP', gradient: 'from-red-400 to-orange-400' },
  { amount: '$6,750', desc: 'Prop firm — MyForexFunds', initials: 'SR', gradient: 'from-teal-400 to-green-500' },
];

const RESULTS = [
  { label: 'Total Withdrawn', value: '$55K+', color: 'var(--gold)' },
  { label: 'Prop Firms Passed', value: '12+', color: '#10b981' },
  { label: 'Active Traders', value: '300+', color: '#00d4ff' },
  { label: 'Avg Monthly ROI', value: '8-15%', color: '#a855f7' },
];

export default function ProofGallery() {
  return (
    <ScrollReveal>
      <section className="section bg-[var(--navy-dark)] relative overflow-hidden">
        <div className="glow-orb glow-orb-gold w-80 h-80 top-1/3 left-0 opacity-30" />

        <div className="max-w-7xl mx-auto relative z-10">
          <SectionHeading
            label="Verified Results"
            title="Real Withdrawals. Real Traders."
            subtitle="Every number is real. We show wins and losses. Full transparency."
          />

          {/* Result stats bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 mb-12">
            {RESULTS.map((r) => (
              <div key={r.label} className="card text-center" style={{ padding: '1.25rem' }}>
                <p className="text-2xl md:text-3xl font-extrabold" style={{ color: r.color }}>
                  {r.value}
                </p>
                <p className="text-[var(--muted)] text-xs mt-1 uppercase tracking-wider font-semibold">
                  {r.label}
                </p>
              </div>
            ))}
          </div>

          {/* Payout cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PAYOUTS.map((payout, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="card flex items-center gap-4 transition-all duration-300 hover:border-[var(--gold)]/30 hover:shadow-[0_0_20px_rgba(212,168,67,0.08)]">
                  <div
                    className={`w-11 h-11 rounded-full bg-gradient-to-br ${payout.gradient} flex items-center justify-center text-xs font-bold text-white shadow-lg flex-shrink-0`}
                  >
                    {payout.initials}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[var(--gold)] text-lg font-extrabold">{payout.amount}</p>
                    <p className="text-[var(--muted)] text-xs">{payout.desc}</p>
                  </div>
                  <div className="flex-shrink-0">
                    <span className="text-green-400 text-xs font-bold px-2 py-1 rounded bg-green-400/10 border border-green-400/20">
                      ✓ Verified
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Disclaimer */}
          <p className="text-center text-[var(--muted)] text-xs mt-8 max-w-xl mx-auto">
            Trading involves risk. Past performance does not guarantee future results. These are real results from real accounts — not a promise of what you will earn.
          </p>
        </div>
      </section>
    </ScrollReveal>
  );
}
