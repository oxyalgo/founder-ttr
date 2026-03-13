'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AppBanner() {
  const [visible, setVisible] = useState(true);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ height: 36, opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="relative z-[60] w-full overflow-hidden"
          style={{
            background: 'linear-gradient(90deg, #d4a843, #b8922e)',
          }}
        >
          <div className="flex items-center justify-center gap-2 h-[36px] px-4">
            <a
              href="https://oxyalgo.online/app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-[#06080f] hover:underline flex items-center gap-1.5"
            >
              Trade smarter with OXY ALGO
              <span className="inline-flex items-center gap-1">
                — Open the App
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </span>
            </a>
            <button
              onClick={() => setVisible(false)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#06080f]/60 hover:text-[#06080f] transition-colors"
              aria-label="Dismiss banner"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
