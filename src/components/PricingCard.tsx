'use client';

import Link from 'next/link';
import { SpotlightCard } from '@/components/magicui/SpotlightCard';
import { BorderBeam } from '@/components/magicui/BorderBeam';
import { NumberTicker } from '@/components/magicui/NumberTicker';

interface PricingCardProps {
  name: string;
  price: number;
  period?: string;
  features: string[];
  featured?: boolean;
  ctaText?: string;
  ctaHref?: string;
  badge?: string;
}

export default function PricingCard({
  name,
  price,
  period = '/mo',
  features,
  featured = false,
  ctaText = 'Get Started',
  ctaHref = '/free-guide',
  badge,
}: PricingCardProps) {
  const spotlightColor = featured
    ? 'rgba(212, 168, 67, 0.18)'
    : name === 'Elite'
    ? 'rgba(168, 85, 247, 0.12)'
    : 'rgba(212, 168, 67, 0.08)';

  return (
    <SpotlightCard
      className="rounded-2xl h-full"
      spotlightColor={spotlightColor}
    >
      <div
        className={`relative rounded-2xl p-8 flex flex-col h-full transition-all duration-500 ${
          featured
            ? 'pricing-featured md:scale-[1.03] z-10'
            : 'card hover:border-[var(--card-border)]'
        }`}
      >
        {/* BorderBeam on VIP tier */}
        {featured && (
          <>
            <BorderBeam color="#d4a843" duration={4} />
            <div className="absolute inset-0 rounded-2xl shadow-[0_0_60px_rgba(212,168,67,0.15)] pointer-events-none" />
          </>
        )}

        {/* Badge */}
        {badge && (
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
            <span className="bg-gradient-to-r from-[var(--gold-light)] to-[var(--gold-dark)] text-[var(--background)] text-xs font-bold px-5 py-1.5 rounded-full uppercase tracking-wider whitespace-nowrap shadow-lg shadow-[var(--gold)]/20">
              {badge}
            </span>
          </div>
        )}

        {/* Plan name */}
        <h3 className="text-lg font-bold text-[var(--foreground)] mb-6 mt-1">{name}</h3>

        {/* Price */}
        <div className="mb-8">
          <div className="flex items-baseline gap-1">
            <span className="text-[var(--muted)] text-lg">$</span>
            {price > 0 ? (
              <NumberTicker
                value={price}
                className="stat-number !text-5xl"
                duration={1500}
              />
            ) : (
              <span className="stat-number !text-5xl">0</span>
            )}
            {period && (
              <span className="text-[var(--muted)] text-sm ml-1">{period}</span>
            )}
          </div>
        </div>

        {/* Features */}
        <ul className="space-y-3.5 mb-8 flex-1">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-3 text-sm text-[var(--muted)]">
              <svg className="w-5 h-5 text-[var(--gold)] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          href={ctaHref}
          {...(ctaHref.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          className={`text-center text-base ${featured ? 'btn-gold' : 'btn-outline'}`}
        >
          {ctaText}
        </Link>
      </div>
    </SpotlightCard>
  );
}
