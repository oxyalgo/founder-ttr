'use client';

import { useState } from 'react';
import ScrollReveal from './ScrollReveal';
import SectionHeading from './SectionHeading';

const FEATURES = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#d4a843" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    ),
    title: 'Talk to AI → EA Executes',
    badge: 'ELITE',
    badgeGradient: true,
    desc: 'Type /bridge BUY EURUSD. Bridge EA fills in <1s on your MT4, MT5, or prop firm account. Auto SL/TP/lot.',
    highlighted: true,
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
      </svg>
    ),
    title: 'Live Signal Channels',
    badge: 'LIVE',
    badgeColor: '#10b981',
    desc: '7 currency baskets + crypto + indices + commodities. Every signal scored with ICT confluence.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
        <path d="M2 12h20"/>
      </svg>
    ),
    title: 'Daily Bias Analysis',
    badge: 'AI',
    badgeColor: '#3b82f6',
    desc: 'Institutional-grade daily bias. COT positioning, confluence, S/R.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18"/>
        <path d="m19 9-5 5-4-4-3 3"/>
      </svg>
    ),
    title: 'Charts + Liquidity Maps',
    badge: 'PRO',
    badgeColor: '#a855f7',
    desc: 'Auto-generated charts with EMA, RSI, order blocks, FVGs.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 8V4H8"/>
        <rect width="16" height="12" x="4" y="8" rx="2"/>
        <path d="M2 14h2"/>
        <path d="M20 14h2"/>
        <path d="M15 13v2"/>
        <path d="M9 13v2"/>
      </svg>
    ),
    title: '36 AI Commands',
    badge: '24/7',
    badgeColor: '#f59e0b',
    desc: 'Analysis, charts, risk, trade ideas, execution — all from Discord.',
  },
];

/* ── Sidebar channels ── */
interface ChannelItem {
  name: string;
  icon: string;
  active?: boolean;
  badge?: string;
}

const CHANNELS: { category: string; channels: ChannelItem[] }[] = [
  {
    category: 'START HERE',
    channels: [
      { name: 'welcome', icon: '#' },
      { name: 'announcements', icon: '#' },
      { name: 'rules', icon: '#' },
      { name: 'results', icon: '#' },
      { name: 'resources', icon: '#' },
      { name: 'upgrade', icon: '#' },
    ],
  },
  {
    category: 'COMMUNITY',
    channels: [
      { name: 'general', icon: '#', active: true },
      { name: 'learn', icon: '#' },
    ],
  },
  {
    category: 'SCANNER — Forex',
    channels: [
      { name: 'gbp-basket', icon: '#' },
      { name: 'eur-basket', icon: '#' },
      { name: 'jpy-basket', icon: '#' },
      { name: 'aud-basket', icon: '#' },
      { name: 'cad-basket', icon: '#', badge: 'NEW' },
    ],
  },
];

function Badge({ text, color, gradient }: { text: string; color?: string; gradient?: boolean }) {
  if (gradient) {
    return (
      <span
        className="ml-2 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full"
        style={{
          background: 'linear-gradient(135deg, #d4a843, #b8922e)',
          color: '#06080f',
        }}
      >
        {text}
      </span>
    );
  }
  return (
    <span
      className="ml-2 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full"
      style={{
        background: `${color}20`,
        color: color,
      }}
    >
      {text}
    </span>
  );
}

export default function DiscordShowcase() {
  const [activeFeature, setActiveFeature] = useState(1);

  return (
    <ScrollReveal>
      <section className="section relative overflow-hidden">
        <div className="glow-orb glow-orb-gold w-72 h-72 top-0 right-1/4" />
        <div className="glow-orb glow-orb-blue w-64 h-64 bottom-0 left-1/4" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Problem */}
          <div className="text-center mb-6">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-red-500">The Problem</span>
            <h3 className="mt-3 text-xl sm:text-2xl font-bold text-[var(--foreground)] opacity-80 leading-snug">
              You&apos;re switching between charts, signals, news feeds, and your broker.<br />
              By the time you see the setup — <span className="text-red-500">it&apos;s gone.</span>
            </h3>
          </div>

          {/* Solution */}
          <SectionHeading
            label="The Solution"
            title="One Discord. AI finds the trade. AI executes it."
            subtitle="Type a command. The AI places the trade on your MT4, MT5, or prop firm account in under 1 second. Everything else — signals, analysis, risk — runs on autopilot."
          />

          {/* Split layout */}
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* ─── LEFT: Feature list ─── */}
            <div className="flex flex-col gap-3">
              {FEATURES.map((feat, i) => (
                <button
                  key={feat.title}
                  onClick={() => setActiveFeature(i)}
                  className={`group relative text-left rounded-xl transition-all duration-300 cursor-pointer ${
                    feat.highlighted
                      ? 'border-l-[3px] border-l-[var(--gold)]'
                      : 'border-l-[3px] border-l-transparent'
                  }`}
                  style={{
                    padding: '1.125rem 1.25rem',
                    background:
                      activeFeature === i
                        ? feat.highlighted
                          ? 'rgba(212, 168, 67, 0.08)'
                          : 'rgba(255,255,255,0.03)'
                        : feat.highlighted
                        ? 'rgba(212, 168, 67, 0.04)'
                        : 'transparent',
                    borderRight: '1px solid transparent',
                    borderTop: '1px solid transparent',
                    borderBottom: '1px solid transparent',
                    ...(activeFeature === i
                      ? {
                          borderRight: '1px solid rgba(212, 168, 67, 0.15)',
                          borderTop: '1px solid rgba(212, 168, 67, 0.15)',
                          borderBottom: '1px solid rgba(212, 168, 67, 0.15)',
                        }
                      : {}),
                  }}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center mt-0.5"
                      style={{ background: 'rgba(255,255,255,0.05)' }}
                    >
                      {feat.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center flex-wrap gap-1">
                        <h3 className="font-bold text-sm text-[var(--foreground)]">{feat.title}</h3>
                        <Badge
                          text={feat.badge}
                          color={feat.badgeColor}
                          gradient={feat.badgeGradient}
                        />
                      </div>
                      <p
                        className={`text-xs leading-relaxed mt-1 transition-all duration-300 ${
                          activeFeature === i
                            ? 'text-[var(--muted)] opacity-100 max-h-20'
                            : 'text-[var(--muted)]/60 opacity-0 max-h-0 lg:opacity-60 lg:max-h-20 overflow-hidden'
                        }`}
                      >
                        {feat.desc}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* ─── RIGHT: Discord Mockup ─── */}
            <div
              className="relative rounded-xl overflow-hidden"
              style={{
                background: '#1e1f22',
                border: '1px solid rgba(255,255,255,0.08)',
                boxShadow:
                  '0 25px 60px rgba(0,0,0,0.5), 0 0 40px rgba(212, 168, 67, 0.06)',
                minHeight: 520,
              }}
            >
              {/* Titlebar */}
              <div
                className="flex items-center gap-3 px-4 py-2.5"
                style={{ background: '#1e1f22', borderBottom: '1px solid rgba(255,255,255,0.06)' }}
              >
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full" style={{ background: '#ff5f57' }} />
                  <span className="w-3 h-3 rounded-full" style={{ background: '#febc2e' }} />
                  <span className="w-3 h-3 rounded-full" style={{ background: '#28c840' }} />
                </div>
                <div className="flex items-center gap-2 ml-2">
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center text-[8px] font-black"
                    style={{
                      background: 'linear-gradient(135deg, #d4a843, #b8922e)',
                      color: '#06080f',
                    }}
                  >
                    P
                  </div>
                  <span className="text-xs font-bold text-white/90 tracking-wide">
                    PHI MIND FLOW
                  </span>
                </div>
              </div>

              {/* Body: Sidebar + Chat */}
              <div className="flex" style={{ height: 480 }}>
                {/* Sidebar */}
                <div
                  className="hidden sm:flex flex-col w-[180px] flex-shrink-0 overflow-y-auto py-2 px-2"
                  style={{
                    background: '#2b2d31',
                    borderRight: '1px solid rgba(255,255,255,0.04)',
                    scrollbarWidth: 'none',
                  }}
                >
                  {CHANNELS.map((group) => (
                    <div key={group.category} className="mb-2.5">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-white/30 px-1.5 py-1">
                        {group.category}
                      </div>
                      {group.channels.map((ch) => (
                        <div
                          key={ch.name}
                          className={`flex items-center gap-1.5 px-1.5 py-[5px] rounded text-[12px] cursor-pointer ${
                            ch.active
                              ? 'bg-white/10 text-white font-medium'
                              : 'text-white/40 hover:text-white/70 hover:bg-white/5'
                          }`}
                        >
                          <span className="text-white/25 text-[11px]">{ch.icon}</span>
                          <span className="truncate">{ch.name}</span>
                          {ch.badge && (
                            <span
                              className="ml-auto text-[8px] font-bold uppercase px-1.5 py-[1px] rounded-full"
                              style={{ background: '#10b981', color: '#fff' }}
                            >
                              {ch.badge}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>

                {/* Chat area */}
                <div className="flex-1 flex flex-col" style={{ background: '#313338' }}>
                  {/* Channel header */}
                  <div
                    className="flex items-center gap-2 px-4 py-2"
                    style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
                  >
                    <span className="text-white/30 text-sm">#</span>
                    <span className="text-sm font-semibold text-white/90">general</span>
                    <span className="hidden sm:inline text-xs text-white/30 ml-2">
                      Talk trading with the squad
                    </span>
                  </div>

                  {/* Messages */}
                  <div className="flex-1 overflow-y-auto px-4 py-3 space-y-4" style={{ scrollbarWidth: 'none' }}>
                    {/* Message 1: Institutional Context */}
                    <div className="flex gap-2.5">
                      <div
                        className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center text-[10px] font-black"
                        style={{
                          background: 'linear-gradient(135deg, #d4a843, #b8922e)',
                          color: '#06080f',
                        }}
                      >
                        PM
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-semibold" style={{ color: '#d4a843' }}>
                            Phi Mind Flow
                          </span>
                          <span
                            className="text-[9px] font-bold uppercase px-1 py-[1px] rounded"
                            style={{ background: '#5865f2', color: '#fff' }}
                          >
                            BOT
                          </span>
                          <span className="text-[10px] text-white/25">Today at 7:32 AM</span>
                        </div>

                        {/* Embed */}
                        <div
                          className="mt-1.5 rounded-lg overflow-hidden max-w-[380px]"
                          style={{
                            background: '#2b2d31',
                            borderLeft: '4px solid #d4a843',
                          }}
                        >
                          <div className="p-3">
                            <div className="text-[11px] font-bold uppercase tracking-wider mb-2" style={{ color: '#d4a843' }}>
                              Institutional Context
                            </div>
                            <div className="space-y-1.5 text-[11px] text-white/70 leading-relaxed">
                              <p>
                                <span className="text-white/40">COT:</span>{' '}
                                <span className="text-[#10b981] font-medium">GBP net long +12K</span>{' '}
                                <span className="text-white/30">(85th percentile)</span>
                              </p>
                              <p>
                                <span className="text-white/40">Sentiment:</span>{' '}
                                <span className="text-[#ef4444] font-medium">78% retail short GBPUSD</span>{' '}
                                <span className="text-white/30">— contrarian bullish</span>
                              </p>
                              <p>
                                <span className="text-white/40">H4 Trend:</span>{' '}
                                <span className="text-[#10b981] font-medium">EMA 20 &gt; 50</span>{' '}
                                <span className="text-white/30">— bullish structure</span>
                              </p>
                              <p>
                                <span className="text-white/40">Confluence:</span>{' '}
                                <span className="font-semibold text-white/90">3/3 layers aligned</span>{' '}
                                <span className="text-[#10b981]">STRONG</span>
                              </p>
                            </div>
                            <div className="mt-2 pt-2 flex items-center gap-1.5" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                              <span className="text-[9px] text-white/25">Bottom Line:</span>
                              <span className="text-[10px] font-medium text-white/80">
                                GBP setups have institutional backing. Watch London open sweeps.
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Message 2: Trade Execution */}
                    <div className="flex gap-2.5">
                      <div
                        className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center text-[10px] font-black"
                        style={{
                          background: 'linear-gradient(135deg, #d4a843, #b8922e)',
                          color: '#06080f',
                        }}
                      >
                        PM
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-semibold" style={{ color: '#d4a843' }}>
                            Phi Mind Flow
                          </span>
                          <span
                            className="text-[9px] font-bold uppercase px-1 py-[1px] rounded"
                            style={{ background: '#5865f2', color: '#fff' }}
                          >
                            BOT
                          </span>
                          <span className="text-[10px] text-white/25">Today at 7:33 AM</span>
                        </div>

                        {/* Execution embed */}
                        <div
                          className="mt-1.5 rounded-lg overflow-hidden max-w-[380px]"
                          style={{
                            background: '#2b2d31',
                            borderLeft: '4px solid #10b981',
                          }}
                        >
                          <div className="p-3">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="text-[11px] font-bold uppercase tracking-wider text-[#10b981]">
                                Trade Filled
                              </span>
                              <span
                                className="text-[9px] font-bold uppercase px-1.5 py-[1px] rounded-full"
                                style={{ background: 'rgba(16,185,129,0.15)', color: '#10b981' }}
                              >
                                S1
                              </span>
                            </div>
                            <div className="space-y-1 text-[11px]">
                              <div className="flex justify-between">
                                <span className="text-white/40">Symbol</span>
                                <span className="text-white/90 font-semibold">EURUSD</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-white/40">Direction</span>
                                <span className="text-[#10b981] font-bold">BUY</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-white/40">Entry</span>
                                <span className="text-white/70 font-mono text-[10px]">1.08432</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-white/40">SL</span>
                                <span className="text-[#ef4444] font-mono text-[10px]">1.08195</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-white/40">TP</span>
                                <span className="text-[#10b981] font-mono text-[10px]">1.09025</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-white/40">R:R</span>
                                <span className="text-white/90 font-semibold">1:2.5</span>
                              </div>
                            </div>
                            <div
                              className="mt-2 pt-2 flex items-center justify-between"
                              style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
                            >
                              <span className="text-[10px] text-white/30">via /bridge command</span>
                              <span className="text-[10px] font-medium text-[#10b981]">
                                Filled in 0.8s
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Chat input */}
                  <div className="px-4 py-3">
                    <div
                      className="flex items-center gap-2 px-3 py-2 rounded-lg"
                      style={{ background: '#383a40' }}
                    >
                      <span className="text-white/20 text-lg">+</span>
                      <span className="text-white/30 text-[13px]">Message #general</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating notification */}
              <div
                className="absolute bottom-16 left-3 sm:left-[196px] rounded-lg px-3 py-2 flex items-center gap-2"
                style={{
                  background: 'rgba(16, 185, 129, 0.12)',
                  border: '1px solid rgba(16, 185, 129, 0.25)',
                  backdropFilter: 'blur(12px)',
                  animation: 'float 4s ease-in-out infinite',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
                }}
              >
                <span
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ background: '#10b981', boxShadow: '0 0 6px #10b981' }}
                />
                <span className="text-[11px] text-white/80 font-medium whitespace-nowrap">
                  EURGBP closed +28 pips
                </span>
                <span className="text-[10px] text-white/30">54m ago</span>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <a
              href="https://whop.com/phi-mind-flow/?a=fitflyai"
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
