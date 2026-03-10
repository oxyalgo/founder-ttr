import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import LeadForm from "@/components/LeadForm";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Free Flywheel Blueprint | Founder TTR",
  description:
    "Download the free guide: The Flywheel Blueprint. Learn how to go from bad credit to AI trading income. Credit repair, funding, and trading in one system.",
  openGraph: {
    title: "Free Flywheel Blueprint | Founder TTR",
    description:
      "From bad credit to AI trading income. The complete Flywheel system in one free guide.",
  },
};

const bulletPoints = [
  "How to read your credit report and find the items that are killing your score",
  "The dispute process: how to get bad marks removed legally",
  "How to use good credit to unlock $10K-$100K+ in funding",
  "What algorithmic trading is and how AI trades for you",
  "How prop firms work: trade with their money, keep the profits",
];

const trustBadges = [
  { label: "500+ Clients", value: "500+" },
  { label: "Avg. Score Increase", value: "120pts" },
  { label: "100% Free", value: "FREE" },
  { label: "No Card Needed", value: "$0" },
];

export default function FreeGuidePage() {
  return (
    <>
      {/* Hero */}
      <section className="section bg-[var(--navy-dark)] relative overflow-hidden">
        <div className="glow-orb glow-orb-gold w-72 h-72 top-0 left-1/2" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-[var(--gold)] font-semibold text-sm uppercase tracking-widest mb-4">
            Free Download
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            The Flywheel Blueprint:{" "}
            <span className="text-gold-gradient">
              From Bad Credit to AI Trading Income
            </span>
          </h1>
          <p className="text-[var(--muted)] text-lg leading-relaxed max-w-2xl mx-auto">
            The exact system we use with our clients. Credit repair. Funding.
            AI trading. All in one guide. Free. No credit card needed.
          </p>
        </div>
      </section>

      {/* What You Will Learn */}
      <ScrollReveal>
        <section className="section">
          <div className="max-w-3xl mx-auto">
            <SectionHeading
              label="Inside the Guide"
              title="What You Will Learn"
              subtitle="5 chapters. Simple language. Real strategies you can use today."
            />
            <div className="mt-10 space-y-4">
              {bulletPoints.map((point, i) => (
                <div key={i} className="flex items-start gap-4 card">
                  <span className="text-[var(--gold)] font-bold text-lg shrink-0">
                    {i + 1}.
                  </span>
                  <p className="text-white text-sm leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Lead Form */}
      <ScrollReveal>
        <section className="section bg-[var(--navy-dark)]">
          <div className="max-w-xl mx-auto text-center">
            <SectionHeading
              label="Get Your Copy"
              title="Enter Your Email to Download"
              subtitle="We send the guide straight to your inbox. No spam. Unsubscribe anytime."
            />
            <div className="mt-8">
              <LeadForm />
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Trust Badges */}
      <ScrollReveal>
        <section className="section">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {trustBadges.map((badge) => (
                <div key={badge.label} className="card text-center py-6">
                  <div className="stat-number text-2xl mb-1">{badge.value}</div>
                  <p className="text-[var(--muted)] text-xs font-medium">
                    {badge.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>
    </>
  );
}
