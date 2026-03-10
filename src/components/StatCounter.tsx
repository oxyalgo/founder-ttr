'use client';

import { useEffect, useRef, useState } from 'react';

interface StatCounterProps {
  value: string;
  label: string;
  prefix?: string;
}

export default function StatCounter({ value, label, prefix = '' }: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [displayNum, setDisplayNum] = useState(0);

  // Extract numeric part and suffix (e.g., "500+" -> num=500, suffix="+")
  const numMatch = value.match(/^(\d+)/);
  const targetNum = numMatch ? parseInt(numMatch[1], 10) : 0;
  const suffix = numMatch ? value.slice(numMatch[1].length) : value;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Count-up animation
  useEffect(() => {
    if (!visible || targetNum === 0) return;

    const duration = 1500;
    const steps = 40;
    const increment = targetNum / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      // Ease-out: fast at start, slows down
      const progress = step / steps;
      const eased = 1 - Math.pow(1 - progress, 3);
      current = Math.round(eased * targetNum);
      setDisplayNum(current);

      if (step >= steps) {
        setDisplayNum(targetNum);
        clearInterval(timer);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [visible, targetNum]);

  return (
    <div ref={ref} className="text-center">
      <div
        className={`stat-number transition-all duration-700 ${
          visible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
        }`}
      >
        {prefix}
        {targetNum > 0 ? (
          <>
            {displayNum.toLocaleString()}
            {suffix}
          </>
        ) : (
          value
        )}
      </div>
      <p className="text-[var(--muted)] text-sm mt-2 font-medium">{label}</p>
    </div>
  );
}
