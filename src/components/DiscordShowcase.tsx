'use client';

import { useState } from 'react';
import ScrollReveal from './ScrollReveal';
import SectionHeading from './SectionHeading';

const FEATURES = [
  {
    icon: '📡',
    title: 'Live Signals',
    desc: 'Every signal lands in your channel. Entry price, stop loss, take profit, and confluence score. Nothing hidden.',
    color: 'var(--gold)',
  },
  {
    icon: '⚡',
    title: 'Bridge EA',
    desc: 'Install our EA on MetaTrader. Trades copy to your account automatically. No manual entry. No missed trades.',
    color: '#10b981',
  },
  {
    icon: '🧭',
    title: 'Daily Bias',
    desc: 'Wake up knowing the direction. AI reads institutional flow and gives you the bias before you open a chart.',
    color: '#00d4ff',
  },
  {
    icon: '📊',
    title: 'Live Charts',
    desc: 'Request any chart, any timeframe. AI generates it in seconds. Annotated with levels and structure.',
    color: '#a855f7',
  },
  {
    icon: '🤖',
    title: 'AI Assistant',
    desc: 'Ask anything. Get ICT analysis, risk checks, trade reviews, and coaching. Available 24/7 in Discord.',
    color: '#f59e0b',
  },
];

export default function DiscordShowcase() {
  const [active, setActive] = useState(0);

  return (
    <ScrollReveal>
      <section className="section relative overflow-hidden">
        <div className="glow-orb glow-orb-gold w-72 h-72 top-0 right-1/4" />
        <div className="glow-orb glow-orb-blue w-64 h-64 bottom-0 left-1/4" />

        <div className="max-w-7xl mx-auto relative z-10">
          <SectionHeading
            label="Your Command Center"
            title="The Only Server You Need."
            subtitle="Delete every other Discord server. This one has everything: live signals, AI analysis, trade execution, and a squad that has your back."
          />

          {/* Feature tabs */}
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-5 gap-4">
            {FEATURES.map((feat, i) => (
              <button
                key={feat.title}
                onClick={() => setActive(i)}
                className={`card text-left transition-all duration-300 cursor-pointer border ${
                  active === i
                    ? 'border-[var(--gold)]/40 shadow-[0_0_30px_rgba(212,168,67,0.15)]'
                    : 'border-[var(--card-border)] hover:border-[var(--gold)]/20'
                }`}
                style={{ padding: '1.25rem' }}
              >
                <div className="text-2xl mb-2">{feat.icon}</div>
                <h3
                  className="font-bold text-sm mb-1"
                  style={{ color: active === i ? feat.color : 'var(--foreground)' }}
                >
                  {feat.title}
                </h3>
                <p
                  className={`text-xs leading-relaxed transition-all duration-300 ${
                    active === i ? 'text-[var(--muted)] max-h-40 opacity-100' : 'text-[var(--muted)]/60 max-h-0 lg:max-h-40 lg:opacity-60 opacity-0 overflow-hidden'
                  }`}
                >
                  {feat.desc}
                </p>
              </button>
            ))}
          </div>

          {/* Active feature detail (mobile) */}
          <div className="lg:hidden mt-6">
            <div className="card border-[var(--gold)]/20" style={{ padding: '1.5rem' }}>
              <div className="text-3xl mb-3">{FEATURES[active].icon}</div>
              <h3 className="text-lg font-bold mb-2" style={{ color: FEATURES[active].color }}>
                {FEATURES[active].title}
              </h3>
              <p className="text-[var(--muted)] text-sm leading-relaxed">
                {FEATURES[active].desc}
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <a
              href="https://whop.com/oxy-algo-c9d2/starter-5f/?a=fitflyai"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold text-base"
            >
              Enter the Hub
            </a>
            <p className="text-[var(--muted)] text-xs mt-4">
              Powered by AI. Built for traders who execute.
            </p>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
