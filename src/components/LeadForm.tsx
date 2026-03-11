'use client';

import { useState, FormEvent } from 'react';

export default function LeadForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Failed to submit');
      setSubmitted(true);
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="glass rounded-2xl text-center py-14 px-8 max-w-lg mx-auto">
        {/* Animated checkmark */}
        <div className="w-20 h-20 rounded-full bg-[var(--success)]/10 border-2 border-[var(--success)] flex items-center justify-center mx-auto mb-6 animate-fade-up">
          <svg className="w-10 h-10 text-[var(--success)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-[var(--foreground)] mb-2 animate-fade-up delay-100">
          You&apos;re In!
        </h3>
        <p className="text-[var(--muted)] text-sm animate-fade-up delay-200">
          Check your email for your free credit + trading guide.
        </p>
      </div>
    );
  }

  return (
    <div className="glass rounded-2xl max-w-lg mx-auto p-8 md:p-10">
      <h3 className="text-2xl font-bold text-center text-[var(--foreground)] mb-2">
        Get Your Free Credit + Trading Guide
      </h3>
      <p className="text-center text-[var(--muted)] text-sm mb-8">
        Enter your details and we&apos;ll send it straight to your inbox.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="lead-name" className="block text-sm font-medium text-[var(--muted)] mb-1.5">
            Full Name
          </label>
          <input
            id="lead-name"
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="John Doe"
            className="w-full px-4 py-3 rounded-xl bg-[var(--navy-dark)] border border-[var(--card-border)] text-[var(--foreground)] placeholder:text-[var(--muted)]/40 focus:outline-none focus:border-[var(--gold)] focus:ring-2 focus:ring-[var(--gold)]/20 transition-all duration-300 text-sm"
          />
        </div>

        <div>
          <label htmlFor="lead-email" className="block text-sm font-medium text-[var(--muted)] mb-1.5">
            Email Address
          </label>
          <input
            id="lead-email"
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="john@example.com"
            className="w-full px-4 py-3 rounded-xl bg-[var(--navy-dark)] border border-[var(--card-border)] text-[var(--foreground)] placeholder:text-[var(--muted)]/40 focus:outline-none focus:border-[var(--gold)] focus:ring-2 focus:ring-[var(--gold)]/20 transition-all duration-300 text-sm"
          />
        </div>

        <div>
          <label htmlFor="lead-phone" className="block text-sm font-medium text-[var(--muted)] mb-1.5">
            Phone Number
          </label>
          <input
            id="lead-phone"
            type="tel"
            required
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            placeholder="(555) 123-4567"
            className="w-full px-4 py-3 rounded-xl bg-[var(--navy-dark)] border border-[var(--card-border)] text-[var(--foreground)] placeholder:text-[var(--muted)]/40 focus:outline-none focus:border-[var(--gold)] focus:ring-2 focus:ring-[var(--gold)]/20 transition-all duration-300 text-sm"
          />
        </div>

        {/* Submit button with loading state */}
        <button
          type="submit"
          disabled={loading}
          className="btn-gold w-full text-center text-base relative overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Sending...
            </span>
          ) : (
            'Send My Free Guide'
          )}
        </button>

        {error && (
          <p className="text-sm text-red-400 text-center">{error}</p>
        )}

        <p className="text-xs text-[var(--muted)]/50 text-center">
          We respect your privacy. No spam, ever.
        </p>
      </form>
    </div>
  );
}
