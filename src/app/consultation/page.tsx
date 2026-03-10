"use client";

import { useState, FormEvent } from "react";
import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import ScrollReveal from "@/components/ScrollReveal";

const interests = [
  "Credit Repair",
  "Funding",
  "AI Trading",
  "Full Flywheel (All Three)",
];

const scoreRanges = [
  "Below 500",
  "500-579",
  "580-619",
  "620-679",
  "680-719",
  "720+",
  "Not sure",
];

const expectations = [
  {
    title: "15-Minute Call",
    description:
      "A quick focused conversation about your situation and goals.",
  },
  {
    title: "Credit Review",
    description:
      "We look at what is on your report and what is hurting your score.",
  },
  {
    title: "Custom Plan",
    description:
      "You leave with a clear roadmap. Credit, funding, trading, or all three.",
  },
  {
    title: "No Pressure",
    description:
      "Completely free. No obligation. No hidden fees. No commitments.",
  },
];

export default function ConsultationPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    scoreRange: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    console.log("Consultation form submitted:", formData);
    setSubmitted(true);
  }

  return (
    <>
      {/* Hero */}
      <section className="section bg-[var(--navy-dark)]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[var(--gold)] font-semibold text-sm uppercase tracking-widest mb-4">
            Free Consultation
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Book Your{" "}
            <span className="text-gold-gradient">Free Consultation</span>
          </h1>
          <p className="text-[var(--muted)] text-lg leading-relaxed max-w-2xl mx-auto">
            Tell us about your situation. We will reach out within 24 hours.
            No strings attached.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="section">
        <div className="max-w-2xl mx-auto">
          {submitted ? (
            <div className="card text-center py-12">
              <div className="text-5xl mb-4 text-[var(--gold)]">&#10003;</div>
              <h2 className="text-2xl font-bold text-white mb-3">
                Request Received!
              </h2>
              <p className="text-[var(--muted)]">
                We will contact you within 24 hours to schedule your free
                consultation.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="card space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-white mb-2"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-[var(--navy-dark)] border border-[var(--card-border)] rounded-lg text-white placeholder:text-[var(--muted)] focus:outline-none focus:border-[var(--gold)] transition-colors"
                  placeholder="John Smith"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-white mb-2"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-[var(--navy-dark)] border border-[var(--card-border)] rounded-lg text-white placeholder:text-[var(--muted)] focus:outline-none focus:border-[var(--gold)] transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-white mb-2"
                >
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-[var(--navy-dark)] border border-[var(--card-border)] rounded-lg text-white placeholder:text-[var(--muted)] focus:outline-none focus:border-[var(--gold)] transition-colors"
                  placeholder="(555) 123-4567"
                />
              </div>

              <div>
                <label
                  htmlFor="interest"
                  className="block text-sm font-medium text-white mb-2"
                >
                  What Interests You? *
                </label>
                <select
                  id="interest"
                  required
                  value={formData.interest}
                  onChange={(e) =>
                    setFormData({ ...formData, interest: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-[var(--navy-dark)] border border-[var(--card-border)] rounded-lg text-white focus:outline-none focus:border-[var(--gold)] transition-colors"
                >
                  <option value="">Select one</option>
                  {interests.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="scoreRange"
                  className="block text-sm font-medium text-white mb-2"
                >
                  Credit Score Range *
                </label>
                <select
                  id="scoreRange"
                  required
                  value={formData.scoreRange}
                  onChange={(e) =>
                    setFormData({ ...formData, scoreRange: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-[var(--navy-dark)] border border-[var(--card-border)] rounded-lg text-white focus:outline-none focus:border-[var(--gold)] transition-colors"
                >
                  <option value="">Select your range</option>
                  {scoreRanges.map((range) => (
                    <option key={range} value={range}>
                      {range}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-white mb-2"
                >
                  Tell Us More (Optional)
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-[var(--navy-dark)] border border-[var(--card-border)] rounded-lg text-white placeholder:text-[var(--muted)] focus:outline-none focus:border-[var(--gold)] transition-colors resize-none"
                  placeholder="Tell us about your credit, funding needs, or trading goals..."
                />
              </div>

              <button type="submit" className="btn-gold w-full text-center">
                Book My Free Consultation
              </button>

              <p className="text-[var(--muted)] text-xs text-center">
                By submitting this form, you agree to be contacted about our
                services. We respect your privacy.
              </p>
            </form>
          )}
        </div>
      </section>

      {/* What to Expect */}
      <section className="section bg-[var(--navy-dark)]">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="What to Expect"
            title="Your Free Consultation Includes"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {expectations.map((item, i) => (
              <div key={item.title} className="card text-center">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--gold-light)] to-[var(--gold-dark)] flex items-center justify-center mx-auto mb-4">
                  <span className="text-[var(--background)] font-bold text-sm">
                    {i + 1}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-[var(--muted)] text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
