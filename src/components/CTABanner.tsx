'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

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
  const buttonHref = props.buttonHref || props.ctaHref || '/free-guide';

  return (
    <section className="relative overflow-hidden">
      {/* Gold gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--gold-dark)] via-[var(--gold)] to-[var(--gold-light)]" />

      {/* Shimmer overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      </div>

      {/* Background gradient orbs */}
      <div className="absolute -top-20 -left-20 w-60 h-60 rounded-full bg-white/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 -right-16 w-48 h-48 rounded-full bg-[var(--background)]/20 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-white/5 blur-3xl pointer-events-none" />

      {/* Dot pattern overlay */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(rgba(6,8,15,0.3) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="t-heading-1 text-[var(--background)] tracking-tight leading-tight"
        >
          {headline}
        </motion.h2>
        {subtext && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-4 text-lg text-[var(--background)]/80 max-w-2xl mx-auto"
          >
            {subtext}
          </motion.p>
        )}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link
            href={buttonHref}
            className="mt-8 inline-block bg-[var(--background)] text-[var(--gold)] font-bold px-8 py-3.5 rounded-xl hover:bg-[var(--navy-dark)] hover:shadow-[0_0_40px_rgba(6,8,15,0.5),0_0_80px_rgba(212,168,67,0.2)] transition-all duration-300 text-base"
          >
            {buttonText}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
