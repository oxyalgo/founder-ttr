import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[90vh] flex items-center">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--navy)] via-[var(--navy-dark)] to-[var(--background)]" />
      <div className="absolute inset-0 dot-grid opacity-40" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,168,67,0.08)_0%,transparent_60%)]" />

      {/* Floating gold orbs */}
      <div className="glow-orb glow-orb-gold w-[500px] h-[500px] -top-40 -right-40 animate-float" />
      <div className="glow-orb glow-orb-gold w-[350px] h-[350px] bottom-20 -left-32 animate-float delay-300" />
      <div className="glow-orb glow-orb-blue w-[250px] h-[250px] top-1/3 right-1/4 animate-float delay-600" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-36 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--gold)]/30 bg-[var(--gold)]/5 mb-8 animate-fade-up">
          <div className="w-2 h-2 rounded-full bg-[var(--gold)] animate-pulse-glow" />
          <span className="text-xs font-semibold uppercase tracking-wider text-[var(--gold)]">
            The Money Flywheel
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-display animate-fade-up delay-100">
          <span className="text-gold-gradient">Fix Your Credit.</span>
          <br />
          <span className="text-[var(--foreground)]">Fund Your Future.</span>
          <br />
          <span className="text-[var(--foreground)]">Let AI Trade For You.</span>
        </h1>

        {/* Subtext */}
        <p className="mt-6 md:mt-8 text-lg md:text-xl text-[var(--muted)] max-w-2xl mx-auto leading-relaxed animate-fade-up delay-200">
          We repair your credit, unlock funding, and connect you to an AI trading
          algorithm that works while you sleep. This is the money flywheel.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up delay-300">
          <Link href="/free-guide" className="btn-gold text-base">
            Start Your Journey
          </Link>
          <Link href="/pricing" className="btn-outline text-base">
            See Pricing
          </Link>
        </div>

        {/* Stats bar */}
        <div className="mt-16 animate-fade-up delay-500">
          <div className="inline-flex flex-wrap items-center justify-center gap-6 sm:gap-10 px-8 py-5 rounded-2xl glass">
            <div className="text-center">
              <p className="text-2xl font-extrabold text-gold-gradient">500+</p>
              <p className="text-xs text-[var(--muted)] mt-1">Clients</p>
            </div>
            <div className="w-px h-10 bg-[var(--card-border)]" />
            <div className="text-center">
              <p className="text-2xl font-extrabold text-gold-gradient">$2M+</p>
              <p className="text-xs text-[var(--muted)] mt-1">Funded</p>
            </div>
            <div className="w-px h-10 bg-[var(--card-border)]" />
            <div className="text-center">
              <p className="text-2xl font-extrabold text-gold-gradient">AI</p>
              <p className="text-xs text-[var(--muted)] mt-1">Powered Trading</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
