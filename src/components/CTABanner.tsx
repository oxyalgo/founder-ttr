import Link from 'next/link';

interface CTABannerProps {
  headline?: string;
  subtext?: string;
  buttonText?: string;
  buttonHref?: string;
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
}

export default function CTABanner(props: CTABannerProps) {
  const headline = props.headline || props.title || '';
  const subtext = props.subtext || props.subtitle || '';
  const buttonText = props.buttonText || props.ctaText || 'Get Started';
  const buttonHref = props.buttonHref || props.ctaHref || '/consultation';
  return (
    <section className="relative overflow-hidden">
      {/* Gold gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--gold-dark)] via-[var(--gold)] to-[var(--gold-light)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(10,11,20,0)_0%,rgba(10,11,20,0.15)_100%)]" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--background)] tracking-tight">
          {headline}
        </h2>
        <p className="mt-4 text-lg text-[var(--background)]/80 max-w-2xl mx-auto">
          {subtext}
        </p>
        <Link
          href={buttonHref}
          className="mt-8 inline-block bg-[var(--background)] text-[var(--gold)] font-bold px-8 py-3.5 rounded-lg hover:bg-[var(--navy-dark)] hover:shadow-lg transition-all text-base"
        >
          {buttonText}
        </Link>
      </div>
    </section>
  );
}
