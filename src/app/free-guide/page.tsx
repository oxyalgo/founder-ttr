import SectionHeading from "@/components/SectionHeading";
import LeadForm from "@/components/LeadForm";

const bulletPoints = [
  "The #1 reason your credit score is stuck — and how to fix it in 30 days",
  "How to dispute negative items the right way (the exact letter templates we use)",
  "The credit utilization trick that can boost your score 20-50 points overnight",
  "Why authorized user tradelines are the fastest path to a higher score",
  "The 3 mistakes 90% of people make when trying to repair credit on their own",
];

const trustBadges = [
  { label: "500+ Clients Helped", icon: "👥" },
  { label: "Avg. 120pt Score Increase", icon: "📈" },
  { label: "100% Free Download", icon: "🆓" },
  { label: "No Credit Card Required", icon: "🔒" },
];

export default function FreeGuidePage() {
  return (
    <>
      {/* Hero */}
      <section className="section bg-[var(--navy-dark)]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[var(--gold)] font-semibold text-sm uppercase tracking-widest mb-4">
            Free Download
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Free Guide:{" "}
            <span className="text-gold-gradient">Credit Secrets</span>
          </h1>
          <p className="text-[var(--muted)] text-lg leading-relaxed max-w-2xl mx-auto">
            The exact strategies our team uses to remove negative items, boost
            scores by 100+ points, and unlock funding. Download it free — no
            credit card required.
          </p>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="section">
        <div className="max-w-3xl mx-auto">
          <SectionHeading
            label="Inside the Guide"
            title="What You'll Learn"
            subtitle="Practical, actionable credit repair strategies you can start using today."
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

      {/* Lead Form */}
      <section className="section bg-[var(--navy-dark)]">
        <div className="max-w-xl mx-auto text-center">
          <SectionHeading
            label="Get Your Copy"
            title="Enter Your Email to Download"
            subtitle="We'll send the guide straight to your inbox. Unsubscribe anytime."
          />
          <div className="mt-8">
            <LeadForm />
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="section">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustBadges.map((badge) => (
              <div key={badge.label} className="card text-center py-6">
                <div className="text-3xl mb-2">{badge.icon}</div>
                <p className="text-white text-sm font-semibold">
                  {badge.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
