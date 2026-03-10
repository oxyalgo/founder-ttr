"use client";

import { useState, FormEvent } from "react";
import SectionHeading from "@/components/SectionHeading";

const scoreRanges = [
  "Below 500",
  "500-579",
  "580-619",
  "620-679",
  "680-719",
  "720+",
];

const expectations = [
  {
    icon: "📞",
    title: "15-Minute Call",
    description: "A focused conversation about your current credit situation and financial goals.",
  },
  {
    icon: "📋",
    title: "Credit Review",
    description: "We'll discuss what's on your report and identify the items hurting your score most.",
  },
  {
    icon: "🗺️",
    title: "Custom Game Plan",
    description: "You'll leave with a clear roadmap — whether that's credit repair, funding, or both.",
  },
  {
    icon: "💰",
    title: "No Obligation",
    description: "This consultation is completely free. No pressure, no hidden fees, no commitments.",
  },
];

export default function ConsultationPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    scoreRange: "",
    problem: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    // In production, this would send to an API
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
            Tell us about your situation and we'll reach out to schedule your
            free credit consultation. No strings attached.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="section">
        <div className="max-w-2xl mx-auto">
          {submitted ? (
            <div className="card text-center py-12">
              <div className="text-5xl mb-4">&#10003;</div>
              <h2 className="text-2xl font-bold text-white mb-3">
                Request Received!
              </h2>
              <p className="text-[var(--muted)]">
                Thank you for reaching out. Our team will contact you within 24
                hours to schedule your free consultation.
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
                  htmlFor="scoreRange"
                  className="block text-sm font-medium text-white mb-2"
                >
                  Current Credit Score Range *
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
                  htmlFor="problem"
                  className="block text-sm font-medium text-white mb-2"
                >
                  What&apos;s Your Main Problem? *
                </label>
                <textarea
                  id="problem"
                  required
                  rows={4}
                  value={formData.problem}
                  onChange={(e) =>
                    setFormData({ ...formData, problem: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-[var(--navy-dark)] border border-[var(--card-border)] rounded-lg text-white placeholder:text-[var(--muted)] focus:outline-none focus:border-[var(--gold)] transition-colors resize-none"
                  placeholder="Tell us about your credit situation, funding needs, or financial goals..."
                />
              </div>

              <button type="submit" className="btn-gold w-full text-center">
                Book My Free Consultation
              </button>

              <p className="text-[var(--muted)] text-xs text-center">
                By submitting this form, you agree to be contacted about our
                services. We respect your privacy and will never share your
                information.
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
            subtitle="Here's exactly what happens when you book a call with us."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {expectations.map((item) => (
              <div key={item.title} className="card text-center">
                <div className="text-3xl mb-3">{item.icon}</div>
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
