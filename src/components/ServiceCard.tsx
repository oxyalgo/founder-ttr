import Link from 'next/link';

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
    <Link href={href} className="card group block">
      {/* Icon */}
      <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[var(--navy)] border border-[var(--card-border)] group-hover:border-[var(--gold)]/40 transition-colors text-2xl mb-5">
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold text-[var(--foreground)] mb-3 group-hover:text-[var(--gold)] transition-colors">
        {title}
      </h3>

      {/* Description */}
      <p className="text-[var(--muted)] text-sm leading-relaxed mb-4">
        {description}
      </p>

      {/* Link arrow */}
      <span className="inline-flex items-center gap-1 text-sm font-medium text-[var(--gold)] opacity-0 group-hover:opacity-100 transition-opacity">
        Learn more
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </span>
    </Link>
  );
}
