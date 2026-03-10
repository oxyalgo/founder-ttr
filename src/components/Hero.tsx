import Link from 'next/link';

interface HeroProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
  secondaryText?: string;
  secondaryHref?: string;
}

export default function Hero({
  title,
  subtitle,
  ctaText,
  ctaHref,
  secondaryText,
  secondaryHref,
}: HeroProps) {
  const displayTitle = title || 'Fix Your Credit. Access Funding. Build Financial Freedom.';
  const displaySubtitle =
    subtitle ||
    'We help entrepreneurs and individuals repair their credit, qualify for funding, and build long-term financial success.';
  const primaryCta = ctaText || 'Start Your Credit Repair';
  const primaryHref = ctaHref || '/credit-repair';
  const secCta = secondaryText || 'Book Free Consultation';
  const secHref = secondaryHref || '/consultation';

  // Split title on periods for multi-line rendering
  const titleParts = displayTitle.split('. ').map((p) => (p.endsWith('.') ? p : p + '.'));

  return (
    <section className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--navy)] via-[var(--navy-dark)] to-[var(--background)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,168,67,0.08)_0%,transparent_60%)]" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36 text-center">
        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
          {titleParts.length > 1 ? (
            titleParts.map((part, i) => (
              <span key={i}>
                {i === 0 ? (
                  <span className="text-gold-gradient">{part}</span>
                ) : (
                  <span className="text-[var(--foreground)]">{part}</span>
                )}
                {i < titleParts.length - 1 && <br />}
              </span>
            ))
          ) : (
            <span className="text-gold-gradient">{displayTitle}</span>
          )}
        </h1>

        {/* Subheadline */}
        <p className="mt-6 md:mt-8 text-lg md:text-xl text-[var(--muted)] max-w-2xl mx-auto leading-relaxed">
          {displaySubtitle}
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href={primaryHref} className="btn-gold text-base">
            {primaryCta}
          </Link>
          <Link href={secHref} className="btn-outline text-base">
            {secCta}
          </Link>
        </div>

        {/* Trust line */}
        <p className="mt-12 text-sm text-[var(--muted)]/60 tracking-wide uppercase">
          Trusted by 500+ clients nationwide
        </p>
      </div>
    </section>
  );
}
