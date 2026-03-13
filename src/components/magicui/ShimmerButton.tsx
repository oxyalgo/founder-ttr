"use client";

import { cn } from "@/lib/utils";

interface ShimmerButtonProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
  shimmerColor?: string;
  background?: string;
  onClick?: () => void;
}

export function ShimmerButton({
  children,
  href,
  className,
  shimmerColor = "rgba(212, 168, 67, 0.3)",
  background = "rgba(212, 168, 67, 0.1)",
  onClick,
}: ShimmerButtonProps) {
  const inner = (
    <span
      className={cn(
        "group relative inline-flex items-center justify-center overflow-hidden rounded-lg px-8 py-3.5 font-semibold text-sm transition-all duration-300",
        "border border-[var(--gold)]/30 hover:border-[var(--gold)]/60",
        "hover:shadow-[0_0_30px_rgba(212,168,67,0.3)]",
        className
      )}
      style={{ background }}
    >
      {/* Shimmer sweep */}
      <span
        className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"
        style={{
          background: `linear-gradient(90deg, transparent, ${shimmerColor}, transparent)`,
        }}
      />
      <span className="relative z-10 text-[var(--gold)]">{children}</span>
    </span>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" onClick={onClick}>
        {inner}
      </a>
    );
  }

  return <button type="button">{inner}</button>;
}
