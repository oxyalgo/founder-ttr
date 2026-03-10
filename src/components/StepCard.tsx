interface StepCardProps {
  number: number;
  title: string;
  description: string;
}

export default function StepCard({ number, title, description }: StepCardProps) {
  return (
    <div className="relative flex flex-col items-center text-center">
      {/* Gold circle with step number */}
      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[var(--gold-light)] to-[var(--gold-dark)] flex items-center justify-center mb-5 shadow-lg shadow-[var(--gold)]/20">
        <span className="text-xl font-bold text-[var(--background)]">
          {number}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-[var(--foreground)] mb-2">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm text-[var(--muted)] leading-relaxed max-w-xs">
        {description}
      </p>
    </div>
  );
}
