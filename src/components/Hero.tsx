'use client';

import Link from 'next/link';
import dynamic from 'next/dynamic';

const HeroCanvas = dynamic(() => import('./HeroCanvas'), { ssr: false });

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[100vh] flex items-center">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#080d1a] via-[var(--navy-dark)] to-[var(--background)]" />

      {/* Radial gold atmosphere */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_center,rgba(212,168,67,0.06)_0%,transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(0,102,255,0.03)_0%,transparent_50%)]" />

      {/* Slow-moving large glow orbs */}
      <div
        className="absolute w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          top: '-15%',
          right: '-10%',
          background: 'radial-gradient(circle, rgba(212,168,67,0.07), transparent 65%)',
          animation: 'hero-drift 18s ease-in-out infinite',
        }}
      />
      <div
        className="absolute w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          bottom: '5%',
          left: '-8%',
          background: 'radial-gradient(circle, rgba(212,168,67,0.05), transparent 65%)',
          animation: 'hero-drift 22s ease-in-out infinite reverse',
        }}
      />
      <div
        className="absolute w-[350px] h-[350px] rounded-full pointer-events-none"
        style={{
          top: '30%',
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'radial-gradient(circle, rgba(100,140,255,0.04), transparent 60%)',
          animation: 'hero-breathe 12s ease-in-out infinite',
        }}
      />

      {/* 3D Particle canvas */}
      <div className="absolute inset-0">
        <HeroCanvas />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40 text-center">

        {/* Badge */}
        <div
          className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-[var(--gold)]/20 bg-[var(--gold)]/[0.04] mb-10"
          style={{ animation: 'hero-fade-in 1.5s ease-out 0.3s both' }}
        >
          <div
            className="w-2 h-2 rounded-full bg-[var(--gold)]"
            style={{ animation: 'hero-dot-pulse 3s ease-in-out infinite' }}
          />
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--gold)]">
            AI Trading Automation
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-display leading-[1.05]">
          <span
            className="block text-gold-gradient"
            style={{ animation: 'hero-text-rise 1.8s cubic-bezier(0.16, 1, 0.3, 1) 0.6s both' }}
          >
            AI Trades For You.
          </span>
          <span
            className="block text-[var(--foreground)] mt-1 md:mt-2"
            style={{ animation: 'hero-text-rise 1.8s cubic-bezier(0.16, 1, 0.3, 1) 0.9s both' }}
          >
            38 Markets. 8 Agents.
          </span>
          <span
            className="block text-[var(--foreground)] mt-1 md:mt-2"
            style={{ animation: 'hero-text-rise 1.8s cubic-bezier(0.16, 1, 0.3, 1) 1.2s both' }}
          >
            Zero Emotion.
          </span>
        </h1>

        {/* Subtext */}
        <p
          className="mt-8 md:mt-10 text-lg md:text-xl text-[var(--muted)] max-w-2xl mx-auto leading-relaxed"
          style={{ animation: 'hero-fade-in 2s ease-out 1.8s both' }}
        >
          Our AI scans forex, crypto, indices, and commodities around the clock.
          It finds trades. It executes. You collect results.
        </p>

        {/* CTAs */}
        <div
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
          style={{ animation: 'hero-fade-rise 2s cubic-bezier(0.16, 1, 0.3, 1) 2.3s both' }}
        >
          <Link href="https://whop.com/oxy-algo-c9d2/starter-5f/?a=fitflyai" className="btn-gold text-base" target="_blank" rel="noopener noreferrer">
            Join Free
          </Link>
          <Link href="/pricing" className="btn-outline text-base">
            See Pricing
          </Link>
        </div>

        {/* Stats bar */}
        <div
          className="mt-20"
          style={{ animation: 'hero-fade-rise 2.5s cubic-bezier(0.16, 1, 0.3, 1) 3s both' }}
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-8 sm:gap-12 px-4 sm:px-10 py-6 rounded-2xl glass">
            {[
              { value: '8', label: 'AI Agents' },
              { value: '38', label: 'Markets' },
              { value: '24/7', label: 'Trading' },
              { value: '$0', label: 'To Start' },
            ].map((stat, i) => (
              <div key={stat.label} className="text-center" style={{ animationDelay: `${3.2 + i * 0.2}s` }}>
                <p className="text-2xl sm:text-3xl font-extrabold text-gold-gradient">{stat.value}</p>
                <p className="text-xs text-[var(--muted)] mt-1.5 tracking-wide">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="mt-16"
          style={{ animation: 'hero-fade-in 2s ease-out 4s both' }}
        >
          <div className="flex flex-col items-center gap-2 text-[var(--muted)]/40">
            <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
            <div
              className="w-5 h-8 rounded-full border border-[var(--muted)]/20 flex justify-center pt-1.5"
            >
              <div
                className="w-1 h-2 rounded-full bg-[var(--gold)]/40"
                style={{ animation: 'hero-scroll-dot 2.5s ease-in-out infinite' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--background)] to-transparent pointer-events-none" />

      {/* Inline keyframes */}
      <style jsx>{`
        @keyframes hero-fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes hero-text-rise {
          from {
            opacity: 0;
            transform: translateY(60px) scale(0.95);
            filter: blur(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
          }
        }
        @keyframes hero-fade-rise {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes hero-drift {
          0%, 100% { transform: translate(0, 0); }
          33% { transform: translate(15px, -20px); }
          66% { transform: translate(-10px, 12px); }
        }
        @keyframes hero-breathe {
          0%, 100% { opacity: 0.6; transform: translateX(-50%) scale(1); }
          50% { opacity: 1; transform: translateX(-50%) scale(1.15); }
        }
        @keyframes hero-dot-pulse {
          0%, 100% { box-shadow: 0 0 8px rgba(212, 168, 67, 0.3); }
          50% { box-shadow: 0 0 20px rgba(212, 168, 67, 0.6); }
        }
        @keyframes hero-scroll-dot {
          0%, 100% { transform: translateY(0); opacity: 0.3; }
          50% { transform: translateY(8px); opacity: 0.8; }
        }
      `}</style>
    </section>
  );
}
