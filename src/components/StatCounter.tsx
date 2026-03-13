'use client';

import { NumberTicker } from '@/components/magicui/NumberTicker';

interface StatCounterProps {
  value: string;
  label: string;
  prefix?: string;
}

export default function StatCounter({ value, label, prefix = '' }: StatCounterProps) {
  // Extract numeric part and suffix (e.g., "500+" -> num=500, suffix="+")
  const numMatch = value.match(/^(\d+)/);
  const targetNum = numMatch ? parseInt(numMatch[1], 10) : 0;
  const suffix = numMatch ? value.slice(numMatch[1].length) : value;

  return (
    <div className="text-center">
      <div className="stat-number !text-4xl md:!text-5xl font-mono">
        {targetNum > 0 ? (
          <NumberTicker
            value={targetNum}
            prefix={prefix}
            suffix={suffix}
            duration={1800}
            className="stat-number !text-4xl md:!text-5xl"
          />
        ) : (
          <span>{prefix}{value}</span>
        )}
      </div>
      <p className="text-[var(--muted)] text-sm mt-2 font-medium flex items-center justify-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold)] inline-block" />
        {label}
      </p>
    </div>
  );
}
