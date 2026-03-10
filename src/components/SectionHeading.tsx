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
    <div className={`mb-12 md:mb-16 animate-fade-up ${centered ? 'text-center' : ''}`}>
      {/* Gold accent line */}
      <div
        className={`w-12 h-1 rounded-full bg-gradient-to-r from-[var(--gold-light)] to-[var(--gold-dark)] mb-5 ${
          centered ? 'mx-auto' : ''
        }`}
      />

      {/* Optional label */}
      {label && (
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--gold)] mb-3">
          {label}
        </p>
      )}

      {/* Title */}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[var(--foreground)] tracking-tight leading-tight">
        {title}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p className={`mt-4 text-lg text-[var(--muted)] max-w-2xl leading-relaxed ${centered ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
