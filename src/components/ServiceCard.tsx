'use client';

import Link from 'next/link';
import { SpotlightCard } from '@/components/magicui/SpotlightCard';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  href: string;
}

export default function ServiceCard({
  icon,
  title,
  description,
  href,
}: ServiceCardProps) {
  return (
    <SpotlightCard
      className="rounded-2xl"
      spotlightColor="rgba(212, 168, 67, 0.12)"
    >
      <Link href={href} className="card-3d group block relative overflow-hidden">
        {/* Hover glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--gold)]/0 to-[var(--gold)]/0 group-hover:from-[var(--gold)]/5 group-hover:to-transparent transition-all duration-500 rounded-[inherit]" />

        <div className="relative">
          {/* Icon */}
          <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-[var(--navy)] to-[var(--navy-dark)] border border-[var(--card-border)] group-hover:border-[var(--gold)]/40 group-hover:shadow-[0_0_20px_rgba(212,168,67,0.1)] transition-all duration-500 text-2xl mb-5">
            {icon}
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-[var(--foreground)] mb-3 group-hover:text-gold-gradient transition-colors duration-300">
            {title}
          </h3>

          {/* Description */}
          <p className="text-[var(--muted)] text-sm leading-relaxed mb-5">
            {description}
          </p>

          {/* Arrow indicator */}
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--gold)] opacity-0 translate-x-[-8px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-400">
            Learn more
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </span>
        </div>
      </Link>
    </SpotlightCard>
  );
}
