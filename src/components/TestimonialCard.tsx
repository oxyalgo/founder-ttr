interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  rating: number;
}

export default function TestimonialCard({
  quote,
  name,
  role,
  rating,
}: TestimonialCardProps) {
  return (
    <div className="glass rounded-2xl p-7 flex flex-col group hover:border-[var(--gold)]/20 transition-all duration-500">
      {/* Quote icon */}
      <div className="mb-4">
        <svg className="w-8 h-8 text-[var(--gold)]/30" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609L9.978 5.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H0z" />
        </svg>
      </div>

      {/* Stars */}
      <div className="flex gap-0.5 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 transition-colors duration-300 ${
              i < rating ? 'text-[var(--gold)]' : 'text-[var(--card-border)]'
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Quote text */}
      <blockquote className="text-[var(--foreground)] text-sm leading-relaxed flex-1 mb-6">
        &ldquo;{quote}&rdquo;
      </blockquote>

      {/* Author */}
      <div className="border-t border-[var(--card-border)]/50 pt-4 flex items-center gap-3">
        {/* Avatar placeholder */}
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--gold)]/20 to-[var(--navy)] flex items-center justify-center text-[var(--gold)] font-bold text-sm border border-[var(--card-border)]">
          {name.charAt(0)}
        </div>
        <div>
          <p className="font-semibold text-[var(--foreground)] text-sm">{name}</p>
          <p className="text-[var(--muted)] text-xs mt-0.5">{role}</p>
        </div>
      </div>
    </div>
  );
}
