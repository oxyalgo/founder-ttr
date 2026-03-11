'use client';

import { useState, useRef, useEffect } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
}

export default function FAQItem({ question, answer }: FAQItemProps) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [answer]);

  return (
    <div className={`border-b border-[var(--card-border)] transition-colors duration-300 ${open ? 'border-[var(--gold)]/30' : ''}`}>
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className={`text-base font-semibold pr-4 transition-colors duration-300 ${
          open ? 'text-[var(--gold)]' : 'text-[var(--foreground)] group-hover:text-[var(--gold)]'
        }`}>
          {question}
        </span>

        {/* Chevron with rotation */}
        <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300 ${
          open ? 'bg-[var(--gold)]/10 rotate-180' : 'bg-[var(--card-bg)]'
        }`}>
          <svg
            className="w-4 h-4 text-[var(--gold)] transition-transform duration-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
      </button>

      {/* Smooth height animation */}
      <div
        className="overflow-hidden transition-all duration-500 ease-out"
        style={{ maxHeight: open ? height + 24 : 0 }}
      >
        <div ref={contentRef} className="pb-6">
          <p className="text-sm text-[var(--muted)] leading-relaxed pl-0">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}
