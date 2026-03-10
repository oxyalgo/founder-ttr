interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  label?: string;
  centered?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  label,
  centered = true,
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? 'text-center' : ''}`}>
      {/* Gold accent line */}
      <div
        className={`w-12 h-1 rounded-full bg-gradient-to-r from-[var(--gold-light)] to-[var(--gold-dark)] mb-4 ${
          centered ? 'mx-auto' : ''
        }`}
      />
      {label && (
        <p className="text-sm font-semibold uppercase tracking-widest text-[var(--gold)] mb-2">
          {label}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-lg text-[var(--muted)] max-w-2xl leading-relaxed ${centered ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
