"use client";

import { useState, FormEvent } from "react";
import SectionHeading from "@/components/SectionHeading";

const contactInfo = [
  {
    icon: "📧",
    title: "Email",
    value: "support@founderttr.com",
    href: "mailto:support@founderttr.com",
  },
  {
    icon: "📞",
    title: "Phone",
    value: "(555) 000-0000",
    href: "tel:+15550000000",
  },
  {
    icon: "📍",
    title: "Location",
    value: "United States",
    href: null,
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    setSubmitted(true);
  }

  return (
    <>
      {/* Hero */}
      <section className="section bg-[var(--navy-dark)]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[var(--gold)] font-semibold text-sm uppercase tracking-widest mb-4">
            Contact
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="text-gold-gradient">Get In Touch</span>
          </h1>
          <p className="text-[var(--muted)] text-lg leading-relaxed max-w-2xl mx-auto">
            Have a question about credit repair, funding, or trading education?
            We&apos;re here to help. Send us a message and we&apos;ll get back
            to you within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="section">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            {submitted ? (
              <div className="card text-center py-12">
                <div className="text-5xl mb-4">&#10003;</div>
                <h2 className="text-2xl font-bold text-white mb-3">
                  Message Sent!
                </h2>
                <p className="text-[var(--muted)]">
                  Thank you for reaching out. We&apos;ll get back to you within
                  24 hours.
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
                    placeholder="Your name"
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
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-white mb-2"
                  >
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    required
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-[var(--navy-dark)] border border-[var(--card-border)] rounded-lg text-white placeholder:text-[var(--muted)] focus:outline-none focus:border-[var(--gold)] transition-colors"
                    placeholder="What can we help with?"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-white mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-[var(--navy-dark)] border border-[var(--card-border)] rounded-lg text-white placeholder:text-[var(--muted)] focus:outline-none focus:border-[var(--gold)] transition-colors resize-none"
                    placeholder="Tell us more..."
                  />
                </div>

                <button type="submit" className="btn-gold w-full text-center">
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info) => (
              <div key={info.title} className="card">
                <div className="text-2xl mb-2">{info.icon}</div>
                <h3 className="text-sm font-bold text-white mb-1">
                  {info.title}
                </h3>
                {info.href ? (
                  <a
                    href={info.href}
                    className="text-[var(--gold)] text-sm hover:underline"
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-[var(--muted)] text-sm">{info.value}</p>
                )}
              </div>
            ))}

            <div className="card">
              <h3 className="text-sm font-bold text-white mb-2">
                Business Hours
              </h3>
              <p className="text-[var(--muted)] text-sm">
                Monday - Friday: 9am - 6pm EST
              </p>
              <p className="text-[var(--muted)] text-sm">
                Saturday: 10am - 2pm EST
              </p>
              <p className="text-[var(--muted)] text-sm">Sunday: Closed</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
