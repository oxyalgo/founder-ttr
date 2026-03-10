import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import ScrollReveal from "@/components/ScrollReveal";
import StatCounter from "@/components/StatCounter";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "AI-Powered Trading | Founder TTR",
  description:
    "AI trades for you. 38 instruments. Forex, crypto, indices, commodities. Powered by OXY ALGO. Fund an account, connect to the AI, collect profits.",
  openGraph: {
    title: "AI-Powered Trading | Founder TTR",
    description:
      "Your money works while you sleep. AI scans 38 markets and executes trades for you.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI-Powered Trading",
  provider: { "@type": "Organization", name: "Founder TTR" },
  description:
    "Automated AI trading signals and execution across forex, crypto, indices, and commodities. Powered by OXY ALGO.",
};

const howItWorks = [
  {
    step: "1",
    title: "Fund an Account",
    description:
      "Use your funding to open a trading account or buy a prop firm challenge. We show you exactly how.",
  },
  {
    step: "2",
    title: "Connect to OXY ALGO",
    description:
      "Our AI plugs into your account. It scans 38 markets. Forex, crypto, indices, commodities. 24/7.",
  },
  {
    step: "3",
    title: "AI Finds Trades",
    description:
      "The AI uses institutional strategies to spot high-quality setups. It scores every trade before executing.",
  },
  {
    step: "4",
    title: "You Collect Profits",
    description:
      "Trades execute automatically. You get alerts. You track results in real time. You collect profits.",
  },
];

const instruments = [
  { category: "Forex", count: "28 pairs", examples: "GBPUSD, EURUSD, USDJPY, and 25 more" },
  { category: "Crypto", count: "10 tokens", examples: "BTC, ETH, SOL, and 7 more" },
  { category: "Indices", count: "3 markets", examples: "US30, NAS100, SPX500" },
  { category: "Commodities", count: "3 markets", examples: "Gold, Silver, Oil" },
];

const oxyFeatures = [
  {
    title: "Institutional Strategies",
    description:
      "ICT and Smart Money Concepts. The same strategies banks and hedge funds use. Built into the AI.",
  },
  {
    title: "Risk Controlled",
    description:
      "Maximum 2% risk per trade. Stop loss on every position. Circuit breaker if things go wrong.",
  },
  {
    title: "Kill Zone Trading",
    description:
      "The AI only trades during the best hours. London, New York, and Asian sessions. High-probability windows.",
  },
  {
    title: "Real-Time Alerts",
    description:
      "Every signal and trade is delivered to your Discord. Entry, stop loss, take profit, full analysis.",
  },
];

export default function TradingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="section bg-[var(--navy-dark)] relative overflow-hidden">
        <div className="glow-orb glow-orb-blue w-96 h-96 top-0 right-0" />
        <div className="glow-orb glow-orb-gold w-72 h-72 bottom-0 left-0" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-[var(--gold)] font-semibold text-sm uppercase tracking-widest mb-4">
            Step 3 of the Flywheel
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            AI-Powered Trading.{" "}
            <span className="text-gold-gradient">
              Your Money Works While You Sleep.
            </span>
          </h1>
          <p className="text-[var(--muted)] text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            You fund an account. You connect to OXY ALGO. The AI scans 38
            markets. It finds trades. It executes. You collect profits. It is
            that simple.
          </p>
          <a href="/consultation" className="btn-gold">
            Start Trading With AI
          </a>
        </div>
      </section>

      {/* How It Works */}
      <ScrollReveal>
        <section className="section">
          <div className="max-w-7xl mx-auto">
            <SectionHeading
              label="How It Works"
              title="4 Steps to AI Trading"
              subtitle="No experience needed. The AI does the heavy lifting."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              {howItWorks.map((item) => (
                <ScrollReveal key={item.step} delay={parseInt(item.step) * 100}>
                  <div className="card text-center h-full">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--gold-light)] to-[var(--gold-dark)] flex items-center justify-center mx-auto mb-4">
                      <span className="text-[var(--background)] font-bold text-lg">
                        {item.step}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-[var(--muted)] text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* What OXY ALGO Does */}
      <ScrollReveal>
        <section className="section bg-[var(--navy-dark)]">
          <div className="max-w-7xl mx-auto">
            <SectionHeading
              label="Powered by OXY ALGO"
              title="What the AI Does"
              subtitle="OXY ALGO is the engine behind your trades."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
              {oxyFeatures.map((feature) => (
                <div key={feature.title} className="card">
                  <h3 className="text-lg font-bold text-[var(--gold)] mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-[var(--muted)] text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Instruments */}
      <ScrollReveal>
        <section className="section">
          <div className="max-w-5xl mx-auto">
            <SectionHeading
              label="Coverage"
              title="38 Instruments. One AI."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
              {instruments.map((inst) => (
                <div key={inst.category} className="card text-center">
                  <h3 className="text-lg font-bold text-white mb-1">
                    {inst.category}
                  </h3>
                  <p className="text-[var(--gold)] font-semibold text-sm mb-2">
                    {inst.count}
                  </p>
                  <p className="text-[var(--muted)] text-xs">{inst.examples}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Stats */}
      <ScrollReveal>
        <section className="section bg-[var(--navy-dark)]">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <StatCounter value="38" label="Instruments Scanned" />
              <StatCounter value="24/7" label="Market Coverage" />
              <StatCounter value="2%" label="Max Risk Per Trade" />
              <StatCounter value="7" label="Forex Baskets" />
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Prop Firm Section */}
      <ScrollReveal>
        <section className="section">
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeading
              label="No Capital? No Problem."
              title="Prop Firm Trading"
              subtitle="You do not need your own money to trade."
            />
            <div className="card-3d mt-10 text-left">
              <p className="text-[var(--muted)] leading-relaxed mb-4">
                Prop firms give you money to trade with. You pay a one-time fee
                to take a challenge. If you pass, you trade with their capital.
                You keep up to 90% of the profits.
              </p>
              <p className="text-[var(--muted)] leading-relaxed mb-4">
                Our AI can help you pass these challenges. It uses the same
                risk-controlled strategies on prop accounts. You risk the
                challenge fee. The prop firm risks the capital.
              </p>
              <p className="text-white font-semibold">
                Use your funding to buy the challenge. Use our AI to pass it.
                Trade with their money. Keep the profits.
              </p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Disclaimer */}
      <section className="section bg-[var(--navy-dark)]">
        <div className="max-w-3xl mx-auto text-center">
          <div className="card border-yellow-600/30">
            <p className="text-yellow-500 font-semibold text-sm uppercase tracking-widest mb-3">
              Risk Disclaimer
            </p>
            <p className="text-[var(--muted)] text-sm leading-relaxed">
              Trading involves risk. You can lose money. Past results do not
              guarantee future profits. This is not financial advice. Do not
              trade with money you cannot afford to lose. Always do your own
              research. Talk to a licensed advisor before investing.
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        headline="Ready to Let AI Trade For You?"
        subtext="Book a free call. We will explain exactly how it works and help you get set up."
        buttonText="Book Free Consultation"
        buttonHref="/consultation"
      />
    </>
  );
}
