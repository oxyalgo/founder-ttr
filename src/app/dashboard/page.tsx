import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Client Dashboard | Founder TTR",
  description:
    "Track your credit repair progress and AI trading performance. Client dashboard coming soon.",
};

const creditFeatures = [
  {
    title: "Score Tracking",
    description: "Watch your credit score go up month after month. All 3 bureaus.",
  },
  {
    title: "Dispute Status",
    description: "See every dispute. What was sent, what is pending, what was removed.",
  },
  {
    title: "Bureau Responses",
    description: "Get notified when bureaus respond. No more guessing.",
  },
  {
    title: "Chat With Your Team",
    description: "Message your credit specialist directly. No phone tag.",
  },
];

const tradingFeatures = [
  {
    title: "Live P&L",
    description: "See your trading profits and losses in real time.",
  },
  {
    title: "Trade History",
    description: "Every trade the AI made. Entry, exit, profit, loss. All logged.",
  },
  {
    title: "Signal Feed",
    description: "Live signal feed from OXY ALGO. See what the AI is scanning.",
  },
  {
    title: "Account Stats",
    description: "Win rate, total trades, best pairs, risk metrics. All in one place.",
  },
];

export default function DashboardPage() {
  return (
    <>
      {/* Hero */}
      <section className="section bg-[var(--navy-dark)]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[var(--gold)] font-semibold text-sm uppercase tracking-widest mb-4">
            Client Portal
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Your Dashboard{" "}
            <span className="text-gold-gradient">Coming Soon</span>
          </h1>
          <p className="text-[var(--muted)] text-lg leading-relaxed max-w-2xl mx-auto">
            Track your credit repair progress and AI trading performance.
            Everything in one place. Launching soon.
          </p>
        </div>
      </section>

      {/* Login Placeholder */}
      <section className="section">
        <div className="max-w-md mx-auto">
          <div className="card">
            <h2 className="text-xl font-bold text-white text-center mb-6">
              Client Login
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Email
                </label>
                <input
                  type="email"
                  disabled
                  placeholder="Coming soon..."
                  className="w-full px-4 py-3 bg-[var(--navy-dark)] border border-[var(--card-border)] rounded-lg text-[var(--muted)] cursor-not-allowed"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Password
                </label>
                <input
                  type="password"
                  disabled
                  placeholder="Coming soon..."
                  className="w-full px-4 py-3 bg-[var(--navy-dark)] border border-[var(--card-border)] rounded-lg text-[var(--muted)] cursor-not-allowed"
                />
              </div>
              <button
                disabled
                className="w-full py-3 bg-[var(--card-border)] text-[var(--muted)] rounded-lg font-semibold cursor-not-allowed"
              >
                Login (Coming Soon)
              </button>
            </div>
            <p className="text-[var(--muted)] text-xs text-center mt-4">
              Not a client yet?{" "}
              <Link
                href="/consultation"
                className="text-[var(--gold)] hover:underline"
              >
                Book a free consultation
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Credit Tracking Preview */}
      <ScrollReveal>
        <section className="section bg-[var(--navy-dark)]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-[var(--gold)] font-semibold text-sm uppercase tracking-widest mb-4">
                Credit Tracking
              </p>
              <h2 className="text-3xl font-bold text-white">
                Track Your Credit Repair
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {creditFeatures.map((feature) => (
                <div key={feature.title} className="card text-center">
                  <h3 className="text-lg font-bold text-white mb-2">
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

      {/* Trading Dashboard Preview */}
      <ScrollReveal>
        <section className="section">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-[var(--gold)] font-semibold text-sm uppercase tracking-widest mb-4">
                Trading Dashboard
              </p>
              <h2 className="text-3xl font-bold text-white">
                Track Your AI Trading
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {tradingFeatures.map((feature) => (
                <div key={feature.title} className="card text-center">
                  <h3 className="text-lg font-bold text-white mb-2">
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

      {/* CTA */}
      <section className="section bg-[var(--navy-dark)]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Want Early Access?
          </h2>
          <p className="text-[var(--muted)] mb-6">
            Book a consultation today. Clients get early access to the dashboard
            when it launches.
          </p>
          <Link href="/consultation" className="btn-gold">
            Book Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
