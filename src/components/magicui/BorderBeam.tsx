"use client";

import { cn } from "@/lib/utils";

interface BorderBeamProps {
  className?: string;
  duration?: number;
  color?: string;
}

export function BorderBeam({
  className,
  duration = 6,
  color = "#d4a843",
}: BorderBeamProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 rounded-[inherit] overflow-hidden",
        className
      )}
      style={{
        WebkitMask:
          "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
        WebkitMaskComposite: "xor",
        maskComposite: "exclude",
        padding: "1px",
      }}
    >
      <div
        className="absolute"
        style={{
          inset: "-200%",
          background: `conic-gradient(from 0deg at 50% 50%, transparent 0%, transparent 70%, ${color}80 85%, ${color} 90%, ${color}80 95%, transparent 100%)`,
          animation: `spin ${duration}s linear infinite`,
        }}
      />
    </div>
  );
}
