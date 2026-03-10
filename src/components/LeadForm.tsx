'use client';

import { useState, FormEvent } from 'react';

export default function LeadForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '' });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    // TODO: wire to API or form handler
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="card text-center py-12">
        <div className="text-4xl mb-4">&#10003;</div>
        <h3 className="text-xl font-semibold text-[var(--foreground)] mb-2">
          You&apos;re In!
        </h3>
        <p className="text-[var(--muted)] text-sm">
          Check your email for your free credit guide.
        </p>
      </div>
    );
  }

  return (
    <div className="card max-w-lg mx-auto">
      <h3 className="text-2xl font-bold text-center text-[var(--foreground)] mb-2">
        Get Your Free Credit Guide
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
            className="w-full px-4 py-3 rounded-lg bg-[var(--navy-dark)] border border-[var(--card-border)] text-[var(--foreground)] placeholder:text-[var(--muted)]/50 focus:outline-none focus:border-[var(--gold)] focus:ring-1 focus:ring-[var(--gold)]/30 transition-colors text-sm"
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
            className="w-full px-4 py-3 rounded-lg bg-[var(--navy-dark)] border border-[var(--card-border)] text-[var(--foreground)] placeholder:text-[var(--muted)]/50 focus:outline-none focus:border-[var(--gold)] focus:ring-1 focus:ring-[var(--gold)]/30 transition-colors text-sm"
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
            className="w-full px-4 py-3 rounded-lg bg-[var(--navy-dark)] border border-[var(--card-border)] text-[var(--foreground)] placeholder:text-[var(--muted)]/50 focus:outline-none focus:border-[var(--gold)] focus:ring-1 focus:ring-[var(--gold)]/30 transition-colors text-sm"
          />
        </div>

        <button type="submit" className="btn-gold w-full text-center text-base">
          Send My Free Guide
        </button>

        <p className="text-xs text-[var(--muted)]/60 text-center">
          We respect your privacy. No spam, ever.
        </p>
      </form>
    </div>
  );
}
