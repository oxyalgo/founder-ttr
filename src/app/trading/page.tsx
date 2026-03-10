import SectionHeading from "@/components/SectionHeading";
import CTABanner from "@/components/CTABanner";

const topics = [
  {
    icon: "📊",
    title: "Forex Basics",
    description:
      "Understand currency pairs, pips, lots, leverage, and how the forex market works before placing your first trade.",
  },
  {
    icon: "🛡️",
    title: "Risk Management",
    description:
      "Learn proper position sizing, stop-loss placement, and the 2% rule that separates profitable traders from gamblers.",
  },
  {
    icon: "🏆",
    title: "Prop Firm Rules",
    description:
      "Master the rules of funded accounts — drawdown limits, profit targets, and how to pass challenges consistently.",
  },
  {
    icon: "🧠",
    title: "Trading Psychology",
    description:
      "Control fear, greed, and revenge trading. Learn the mental frameworks used by consistently profitable traders.",
  },
  {
    icon: "⚡",
    title: "Strategy Development",
    description:
      "Build a trading plan based on ICT and Smart Money Concepts — the institutional strategies that move the market.",
  },
  {
    icon: "📈",
    title: "Technical Analysis",
    description:
      "Read price action, identify order blocks, fair value gaps, liquidity sweeps, and market structure breaks.",
  },
];

const oxyFeatures = [
  {
    icon: "🤖",
    title: "AI-Powered Signals",
    description:
      "Automated market scanning across 38 instruments — forex, indices, commodities, and crypto. Signals delivered straight to your phone.",
  },
  {
    icon: "🔬",
    title: "Institutional-Grade Analysis",
    description:
      "Every signal comes with confluence scoring, Smart Money analysis, and institutional data (COT positioning, sentiment).",
  },
  {
    icon: "⏰",
    title: "Kill Zone Precision",
    description:
      "Signals fire during the highest-probability trading windows: London, New York, and Asian kill zones.",
  },
  {
    icon: "📱",
    title: "Real-Time Delivery",
    description:
      "Trade alerts delivered via Discord and Telegram the moment a setup triggers. No delays, no missed opportunities.",
  },
];

export default function TradingPage() {
  return (
    <>
      {/* Hero */}
      <section className="section bg-[var(--navy-dark)]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[var(--gold)] font-semibold text-sm uppercase tracking-widest mb-4">
            Trading Education
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Master the Markets with{" "}
            <span className="text-gold-gradient">Proven Strategies</span>
          </h1>
          <p className="text-[var(--muted)] text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            Learn to trade forex, indices, and crypto with real strategies used
            by institutional traders. Powered by OXY ALGO technology for
            automated signals and market analysis.
          </p>
          <a href="/consultation" className="btn-gold">
            Start Learning Today
          </a>
        </div>
      </section>

      {/* Topics Covered */}
      <section className="section">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="Curriculum"
            title="What You'll Learn"
            subtitle="A comprehensive trading education covering everything from basics to advanced institutional strategies."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {topics.map((topic) => (
              <div key={topic.title} className="card">
                <div className="text-3xl mb-3">{topic.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {topic.title}
                </h3>
                <p className="text-[var(--muted)] text-sm leading-relaxed">
                  {topic.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OXY ALGO Section */}
      <section className="section bg-[var(--navy-dark)]">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="Powered by OXY ALGO"
            title="AI-Powered Trading Technology"
            subtitle="Members get access to OXY ALGO's institutional-grade trading signals and automated market scanning. Technology that levels the playing field."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
            {oxyFeatures.map((feature) => (
              <div key={feature.title} className="card">
                <div className="text-3xl mb-3">{feature.icon}</div>
                <h3 className="text-lg font-bold text-[var(--gold)] mb-2">
                  {feature.title}
                </h3>
                <p className="text-[var(--muted)] text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <div className="card inline-block max-w-2xl">
              <p className="text-[var(--muted)] text-sm leading-relaxed">
                <strong className="text-white">How it works:</strong> OXY ALGO
                scans 38 instruments across forex, indices, commodities, and
                crypto every 30 minutes during high-probability kill zones. When
                a setup triggers, you get an instant signal with entry, stop
                loss, take profit, and a full Smart Money analysis — delivered
                directly to your phone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="section">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            label="Is This For You?"
            title="Who Our Trading Education Serves"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            {[
              "Complete beginners who want to learn trading from scratch",
              "Traders struggling with consistency who need a proven strategy",
              "Prop firm traders who want to pass challenges and stay funded",
              "Entrepreneurs looking for a new income stream alongside their business",
              "Credit repair clients who want to invest their funding profits",
              "Anyone interested in financial markets and building wealth",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-[var(--gold)] text-lg mt-0.5">
                  &#10003;
                </span>
                <p className="text-[var(--muted)] text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="section bg-[var(--navy-dark)]">
        <div className="max-w-3xl mx-auto text-center">
          <div className="card border-yellow-600/30">
            <p className="text-yellow-500 font-semibold text-sm uppercase tracking-widest mb-3">
              Important Disclaimer
            </p>
            <p className="text-[var(--muted)] text-sm leading-relaxed">
              Trading involves significant risk of loss and is not suitable for
              all investors. Past performance does not guarantee future results.
              This is education only, not financial advice. You should not trade
              with money you cannot afford to lose. Always do your own research
              and consult a licensed financial advisor before making investment
              decisions.
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Learn the Markets?"
        subtitle="Book a free consultation to discuss our trading education program and how it can fit your financial goals."
        ctaText="Book Free Consultation"
        ctaHref="/consultation"
      />
    </>
  );
}
