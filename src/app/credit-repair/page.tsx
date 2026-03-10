import SectionHeading from "@/components/SectionHeading";
import StepCard from "@/components/StepCard";
import FAQItem from "@/components/FAQItem";
import CTABanner from "@/components/CTABanner";

const scoreFactors = [
  { label: "Payment History", percent: 35, description: "On-time payments are the single biggest factor." },
  { label: "Credit Utilization", percent: 30, description: "How much of your available credit you're using." },
  { label: "Length of History", percent: 15, description: "Older accounts help your score." },
  { label: "Credit Mix", percent: 10, description: "A healthy mix of revolving and installment accounts." },
  { label: "New Credit Inquiries", percent: 10, description: "Too many hard pulls can lower your score." },
];

const commonErrors = [
  {
    icon: "⏰",
    title: "Late Payments",
    description: "Incorrectly reported late payments that were actually on time, or accounts you never opened.",
  },
  {
    icon: "📋",
    title: "Collections",
    description: "Medical bills, old debts, or accounts sent to collections that may be inaccurate, duplicated, or past the statute of limitations.",
  },
  {
    icon: "❌",
    title: "Charge-Offs",
    description: "Accounts marked as charged off that may have incorrect balances, dates, or ownership information.",
  },
  {
    icon: "🔍",
    title: "Hard Inquiries",
    description: "Unauthorized hard pulls from companies you never applied with, or duplicate inquiries from the same lender.",
  },
  {
    icon: "🆔",
    title: "Identity Errors",
    description: "Mixed files, wrong addresses, misspelled names, or accounts belonging to someone else on your report.",
  },
];

const steps = [
  { number: 1, title: "Credit Analysis", description: "We pull your reports from Equifax, Experian, and TransUnion. Every negative item is identified and categorized." },
  { number: 2, title: "Dispute Strategy", description: "We build a custom dispute plan targeting the items with the highest impact on your score first." },
  { number: 3, title: "Bureau Communication", description: "We send professionally crafted dispute letters to all three bureaus and directly to creditors when needed." },
  { number: 4, title: "Score Optimization", description: "Beyond disputes, we optimize your credit utilization, recommend tradeline strategies, and build your profile." },
];

const faqs = [
  {
    question: "How long does credit repair take?",
    answer: "Most clients see significant results within 3-6 months. The timeline depends on the number and type of negative items on your report. Some items can be removed in as little as 30 days.",
  },
  {
    question: "Is credit repair legal?",
    answer: "Absolutely. The Fair Credit Reporting Act (FCRA) gives you the legal right to dispute any inaccurate, unverifiable, or unfair information on your credit report. We exercise that right on your behalf.",
  },
  {
    question: "How much does it cost?",
    answer: "We offer affordable monthly plans starting with a free consultation. Book a call to get your custom quote based on your specific credit situation.",
  },
  {
    question: "Will removed items come back?",
    answer: "If an item is removed because it was inaccurate or unverifiable, it should stay off your report. If a creditor later verifies the information, it could reappear — but we re-dispute if that happens.",
  },
  {
    question: "Can you guarantee a specific score?",
    answer: "No legitimate credit repair company can guarantee a specific score. What we can guarantee is that we will dispute every inaccurate item and fight for the best possible outcome using proven strategies.",
  },
];

export default function CreditRepairPage() {
  return (
    <>
      {/* Hero */}
      <section className="section bg-[var(--navy-dark)]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[var(--gold)] font-semibold text-sm uppercase tracking-widest mb-4">
            Credit Repair
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Professional{" "}
            <span className="text-gold-gradient">Credit Repair</span> Services
          </h1>
          <p className="text-[var(--muted)] text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            We dispute inaccurate negative items, optimize your credit profile,
            and help you build the score you need to access funding, housing, and
            financial freedom.
          </p>
          <a href="/consultation" className="btn-gold">
            Start Your Repair Today
          </a>
        </div>
      </section>

      {/* What is Credit Repair */}
      <section className="section">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            label="Understanding"
            title="What Is Credit Repair?"
            subtitle="Credit repair is the legal process of identifying and disputing inaccurate, incomplete, or unverifiable information on your credit reports."
          />
          <div className="mt-8 card">
            <p className="text-[var(--muted)] leading-relaxed mb-4">
              Your credit report is maintained by three major bureaus: Equifax,
              Experian, and TransUnion. These reports often contain errors —
              studies show that 1 in 5 consumers have an error on at least one
              credit report. These errors can lower your score by 50 to 200+
              points.
            </p>
            <p className="text-[var(--muted)] leading-relaxed">
              Under the Fair Credit Reporting Act (FCRA), you have the legal
              right to dispute any information that is inaccurate, unverifiable,
              or unfair. Credit repair companies like Founder TTR exercise this
              right on your behalf using proven dispute strategies.
            </p>
          </div>
        </div>
      </section>

      {/* How Credit Scores Work */}
      <section className="section bg-[var(--navy-dark)]">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="The Breakdown"
            title="How Credit Scores Work"
            subtitle="Your FICO score is calculated from five key factors. Understanding them is the first step to improving your score."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-12">
            {scoreFactors.map((factor) => (
              <div key={factor.label} className="card text-center">
                <div className="text-3xl font-bold text-gold-gradient mb-2">
                  {factor.percent}%
                </div>
                <h3 className="text-sm font-bold text-white mb-2">
                  {factor.label}
                </h3>
                <p className="text-[var(--muted)] text-xs leading-relaxed">
                  {factor.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Errors */}
      <section className="section">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="What We Fix"
            title="Common Credit Report Errors"
            subtitle="These are the most common items we dispute and remove from client reports."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {commonErrors.map((error) => (
              <div key={error.title} className="card">
                <div className="text-3xl mb-3">{error.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {error.title}
                </h3>
                <p className="text-[var(--muted)] text-sm leading-relaxed">
                  {error.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section bg-[var(--navy-dark)]">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="Our Process"
            title="4 Steps to a Better Score"
            subtitle="A structured, proven approach that delivers real results."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {steps.map((step) => (
              <StepCard
                key={step.number}
                number={step.number}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="max-w-3xl mx-auto">
          <SectionHeading
            label="FAQ"
            title="Frequently Asked Questions"
            subtitle="Honest answers to the most common questions about credit repair."
          />
          <div className="mt-10 space-y-4">
            {faqs.map((faq) => (
              <FAQItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Start Credit Repair Today"
        subtitle="Book your free consultation and find out exactly what's hurting your score. No obligation."
        ctaText="Book Free Consultation"
        ctaHref="/consultation"
      />
    </>
  );
}
