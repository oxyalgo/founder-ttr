'use client';

import { useState } from 'react';

const steps = [
  {
    id: 1,
    label: 'Fix Credit',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    color: '#10b981',
    desc: 'We clean up your credit report so you qualify for the best rates.',
  },
  {
    id: 2,
    label: 'Get Funded',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: '#d4a843',
    desc: 'Use your new credit to unlock cards, loans, and capital.',
  },
  {
    id: 3,
    label: 'Trade Markets',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    color: '#3b82f6',
    desc: 'Fund prop firm challenges and trading accounts. AI handles the rest.',
  },
  {
    id: 4,
    label: 'Grow Wealth',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    ),
    color: '#8b5cf6',
    desc: 'Profits grow your credit and fund more accounts. The cycle repeats.',
  },
];

export default function FlywheelDiagram() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="section">
      <div className="max-w-5xl mx-auto px-4">
        {/* Desktop circular layout */}
        <div className="hidden md:block">
          <div className="relative w-[520px] h-[520px] mx-auto">
            {/* Spinning gold ring */}
            <div className="absolute inset-4 flywheel-ring" />

            {/* Inner ring glow */}
            <div className="absolute inset-16 rounded-full border border-[var(--card-border)]/30" />

            {/* Center label */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--gold)] mb-1">The</p>
                <p className="text-2xl font-extrabold text-gold-gradient">FLYWHEEL</p>
                <div className="w-10 h-0.5 bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent mx-auto mt-2" />
              </div>
            </div>

            {/* Curved arrows (SVG) */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 520 520" fill="none">
              <path d="M 290 60 Q 420 60 440 190" stroke="rgba(212,168,67,0.25)" strokeWidth="2" strokeDasharray="6 4" fill="none" markerEnd="url(#arrowGold)" />
              <path d="M 460 290 Q 460 420 330 440" stroke="rgba(212,168,67,0.25)" strokeWidth="2" strokeDasharray="6 4" fill="none" markerEnd="url(#arrowGold)" />
              <path d="M 230 460 Q 100 460 80 330" stroke="rgba(212,168,67,0.25)" strokeWidth="2" strokeDasharray="6 4" fill="none" markerEnd="url(#arrowGold)" />
              <path d="M 60 230 Q 60 100 190 80" stroke="rgba(212,168,67,0.25)" strokeWidth="2" strokeDasharray="6 4" fill="none" markerEnd="url(#arrowGold)" />
              <defs>
                <marker id="arrowGold" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
                  <path d="M 0 0 L 8 3 L 0 6 Z" fill="rgba(212,168,67,0.5)" />
                </marker>
              </defs>
            </svg>

            {/* Step nodes — positioned: top, right, bottom, left */}
            {steps.map((step, i) => {
              const posStyles = [
                { top: '0%', left: '50%' },
                { top: '50%', left: '100%' },
                { top: '100%', left: '50%' },
                { top: '50%', left: '0%' },
              ];
              return (
                <div
                  key={step.id}
                  className="absolute"
                  style={posStyles[i]}
                >
                  <div
                    className={`card-3d cursor-pointer p-5 w-36 -translate-x-1/2 -translate-y-1/2 text-center transition-all duration-500 ${
                      active === i ? '!border-[var(--gold)]/60 shadow-[0_0_30px_rgba(212,168,67,0.2)]' : ''
                    }`}
                    onMouseEnter={() => setActive(i)}
                    onMouseLeave={() => setActive(null)}
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 transition-all duration-300"
                      style={{
                        background: `${step.color}15`,
                        border: `1px solid ${step.color}40`,
                        color: step.color,
                      }}
                    >
                      {step.icon}
                    </div>
                    <p className="text-sm font-bold text-[var(--foreground)]">{step.label}</p>
                    <div
                      className={`overflow-hidden transition-all duration-500 ${
                        active === i ? 'max-h-20 opacity-100 mt-2' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <p className="text-xs text-[var(--muted)] leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile stacked layout */}
        <div className="md:hidden space-y-4">
          <div className="text-center mb-8">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--gold)] mb-1">The</p>
            <p className="text-2xl font-extrabold text-gold-gradient">FLYWHEEL</p>
          </div>
          {steps.map((step, i) => (
            <div key={step.id} className="relative">
              <div className="card-3d p-5 flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{
                    background: `${step.color}15`,
                    border: `1px solid ${step.color}40`,
                    color: step.color,
                  }}
                >
                  {step.icon}
                </div>
                <div>
                  <p className="font-bold text-[var(--foreground)] mb-1">{step.label}</p>
                  <p className="text-sm text-[var(--muted)] leading-relaxed">{step.desc}</p>
                </div>
              </div>
              {i < steps.length - 1 && (
                <div className="flex justify-center py-1">
                  <div className="w-0.5 h-6 bg-gradient-to-b from-[var(--gold)]/40 to-transparent" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Explanation */}
        <div className="mt-12 max-w-2xl mx-auto text-center">
          <p className="text-[var(--muted)] leading-relaxed">
            Most people stop at credit repair. We built a system that keeps going.
            Fix your credit, use it to get funding, put that money into trading
            accounts powered by AI, and watch your wealth grow. Then do it again.
            That&apos;s the flywheel.
          </p>
        </div>
      </div>
    </div>
  );
}
