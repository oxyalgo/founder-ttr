interface StepCardProps {
  number: number;
  title: string;
  description: string;
}

export default function StepCard({ number, title, description }: StepCardProps) {
  return (
    <div className="relative flex flex-col items-center text-center group">
      {/* Connecting line (vertical dashed gold line going down from circle) */}
      <div className="absolute top-14 left-1/2 -translate-x-1/2 w-px h-[calc(100%-3.5rem)] border-l-2 border-dashed border-[var(--gold)]/20 hidden md:block" />

      {/* Gold gradient circle with number */}
      <div className="relative z-10 w-16 h-16 rounded-full bg-gradient-to-br from-[var(--gold-light)] to-[var(--gold-dark)] flex items-center justify-center mb-5 shadow-lg shadow-[var(--gold)]/20 group-hover:shadow-[var(--gold)]/40 group-hover:scale-110 transition-all duration-500">
        <span className="text-xl font-extrabold text-[var(--background)]">
          {number}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold text-[var(--foreground)] mb-2 group-hover:text-gold-gradient transition-colors duration-300">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm text-[var(--muted)] leading-relaxed max-w-xs">
        {description}
      </p>
    </div>
  );
}
