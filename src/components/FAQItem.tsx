'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
    <div
      className={`border-b transition-colors duration-300 ${
        open ? 'border-[var(--gold)]/30' : 'border-[var(--card-border)]'
      }`}
      style={{
        borderLeftWidth: '2px',
        borderLeftStyle: 'solid',
        borderLeftColor: open ? 'var(--gold)' : 'transparent',
        paddingLeft: open ? '1rem' : '0',
        transition: 'all 0.3s ease',
      }}
    >
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

      {/* Smooth expand animation */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: height + 24, opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <div ref={contentRef} className="pb-6">
              <p className="text-sm text-[var(--muted)] leading-relaxed pl-0">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
