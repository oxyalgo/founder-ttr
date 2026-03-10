import Link from "next/link";

const features = [
  {
    icon: "📄",
    title: "Upload Reports",
    description:
      "Upload your credit reports from all three bureaus directly through the dashboard for fast analysis.",
  },
  {
    icon: "📊",
    title: "Track Disputes",
    description:
      "See every dispute in real time — which items have been sent, which are under investigation, and what's been removed.",
  },
  {
    icon: "🔔",
    title: "View Updates",
    description:
      "Get notified when bureau responses come in, score changes happen, or your team has an update for you.",
  },
  {
    icon: "💬",
    title: "Message Support",
    description:
      "Chat directly with your credit specialist through the dashboard. No phone tag, no waiting.",
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
            Client Dashboard{" "}
            <span className="text-gold-gradient">Coming Soon</span>
          </h1>
          <p className="text-[var(--muted)] text-lg leading-relaxed max-w-2xl mx-auto">
            We&apos;re building a powerful client portal where you can track your
            credit repair progress, view disputes, and communicate with your
            team — all in one place.
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

      {/* Feature Preview */}
      <section className="section bg-[var(--navy-dark)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[var(--gold)] font-semibold text-sm uppercase tracking-widest mb-4">
              Feature Preview
            </p>
            <h2 className="text-3xl font-bold text-white">
              What Your Dashboard Will Include
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="card text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
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

      {/* CTA */}
      <section className="section">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Want to Be First In?
          </h2>
          <p className="text-[var(--muted)] mb-6">
            Book a consultation today and you&apos;ll get early access to the
            client dashboard when it launches.
          </p>
          <Link href="/consultation" className="btn-gold">
            Book Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
