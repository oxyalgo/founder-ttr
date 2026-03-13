"use client";

import { useEffect, useRef, useState, useCallback } from "react";

interface NumberTickerProps {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  decimals?: number;
  className?: string;
  style?: React.CSSProperties;
}

export function NumberTicker({
  value,
  prefix = "",
  suffix = "",
  duration = 2000,
  decimals = 0,
  className,
  style,
}: NumberTickerProps) {
  const [display, setDisplay] = useState(0);
  const hasAnimated = useRef(false);
  const elRef = useRef<HTMLSpanElement | null>(null);

  const animate = useCallback(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;
    const start = performance.now();

    function tick(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const raw = eased * value;
      setDisplay(
        decimals > 0 ? parseFloat(raw.toFixed(decimals)) : Math.floor(raw)
      );

      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        setDisplay(value);
      }
    }

    requestAnimationFrame(tick);
  }, [value, duration, decimals]);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      animate();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animate();
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [animate]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasAnimated.current) {
        setDisplay(value);
        hasAnimated.current = true;
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, [value]);

  const formatted =
    decimals > 0 ? display.toFixed(decimals) : display.toLocaleString();

  return (
    <span ref={elRef} className={className} style={style}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
