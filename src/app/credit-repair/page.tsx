import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import StepCard from "@/components/StepCard";
import FAQItem from "@/components/FAQItem";
import ScrollReveal from "@/components/ScrollReveal";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Credit Repair Services | Founder TTR",
  description:
    "Professional credit repair that removes late payments, collections, charge-offs, and errors. Step one of the Flywheel. Fix your credit, then get funded.",
  openGraph: {
    title: "Credit Repair Services | Founder TTR",
    description:
      "We fix your credit. That is step one. Good credit unlocks funding, which funds your trading.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Credit Repair",
  provider: { "@type": "Organization", name: "Founder TTR" },
  description:
    "Professional credit repair services. We dispute inaccurate items, remove collections, and boost your score.",
  offers: {
    "@type": "Offer",
    price: "99",
    priceCurrency: "USD",
    description: "Monthly credit repair program",
  },
};

const removals = [
  {
    icon: "&#10005;",
    title: "Late Payments",
    description: "We dispute late payments that should not be there. One removal can add 20-50 points.",
  },
  {
    icon: "&#10005;",
    title: "Collections",
    description: "Old debts, medical bills, accounts you never opened. We challenge them all.",
  },
  {
    icon: "&#10005;",
    title: "Charge-Offs",
    description: "Accounts marked as written off. Many have errors in balance, date, or ownership.",
  },
  {
    icon: "&#10005;",
    title: "Hard Inquiries",
    description: "Companies that pulled your credit without permission. We get those removed.",
  },
  {
    icon: "&#10005;",
    title: "Identity Errors",
    description: "Wrong name, wrong address, someone else's accounts on your report. We clean it up.",
  },
];

const scoreFactors = [
  { label: "Payment History", percent: 35 },
  { label: "Amounts Owed", percent: 30 },
  { label: "Length of History", percent: 15 },
  { label: "Credit Mix", percent: 10 },
  { label: "New Inquiries", percent: 10 },
];

const steps = [
  {
    number: 1,
    title: "Free Credit Audit",
    description: "We pull your reports from all 3 bureaus. We find every item that is hurting your score.",
  },
  {
    number: 2,
    title: "Dispute Strategy",
    description: "We build a plan. We target the items that will boost your score the most, first.",
  },
  {
    number: 3,
    title: "Bureau Communication",
    description: "We send dispute letters to Equifax, Experian, and TransUnion on your behalf.",
  },
  {
    number: 4,
    title: "Score Optimization",
    description: "Beyond disputes, we optimize your credit usage and help you build positive history.",
  },
];

const faqs = [
  {
    question: "How long does credit repair take?",
    answer:
      "Most clients see real results in 3-6 months. Some items can be removed in 30 days. It depends on what is on your report.",
  },
  {
    question: "Is credit repair legal?",
    answer:
      "Yes. The Fair Credit Reporting Act gives you the right to dispute anything on your credit report that is wrong or cannot be verified.",
  },
  {
    question: "Why does credit matter for the Flywheel?",
    answer:
      "Good credit is step one. Better credit means better funding offers. More funding means more capital for trading. It all starts here.",
  },
  {
    question: "Can you guarantee a specific score?",
    answer:
      "No honest company can guarantee a score. What we guarantee is that we will dispute every inaccurate item and fight for the best results.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Credit repair starts at $99 per month. We also offer a Credit + Funding Bundle at $149 per month. Book a free call for details.",
  },
];

export default function CreditRepairPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="section bg-[var(--navy-dark)] relative overflow-hidden">
        <div className="glow-orb glow-orb-gold w-72 h-72 top-0 left-0" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-[var(--gold)] font-semibold text-sm uppercase tracking-widest mb-4">
            Step 1 of the Flywheel
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            We Fix Your Credit.{" "}
            <span className="text-gold-gradient">That&apos;s Step One.</span>
          </h1>
          <p className="text-[var(--muted)] text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            Bad marks on your credit report are costing you money. We remove
            them. Your score goes up. Then the real doors open: funding,
            trading, and income.
          </p>
          <a href="/consultation" className="btn-gold">
            Start Your Credit Repair
          </a>
        </div>
      </section>

      {/* Why Credit Matters */}
      <ScrollReveal>
        <section className="section">
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeading
              label="Why It Matters"
              title="Credit Is the Key to Everything"
              subtitle="Good credit does not just mean better credit cards. It means funding. And funding means capital for trading."
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
              <div className="card text-center">
                <div className="stat-number text-3xl mb-2">580</div>
                <p className="text-[var(--muted)] text-sm">
                  Denied for most loans and cards
                </p>
              </div>
              <div className="card text-center border-[var(--gold)]">
                <div className="stat-number text-3xl mb-2">700+</div>
                <p className="text-[var(--muted)] text-sm">
                  Approved for funding and 0% APR cards
                </p>
              </div>
              <div className="card text-center">
                <div className="stat-number text-3xl mb-2">750+</div>
                <p className="text-[var(--muted)] text-sm">
                  Premium offers. Maximum capital.
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* What We Remove */}
      <ScrollReveal>
        <section className="section bg-[var(--navy-dark)]">
          <div className="max-w-7xl mx-auto">
            <SectionHeading
              label="What We Fix"
              title="We Remove What Is Hurting You"
              subtitle="These are the most common items we dispute and get removed."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {removals.map((item) => (
                <div key={item.title} className="card">
                  <div
                    className="text-3xl text-red-400 mb-3"
                    dangerouslySetInnerHTML={{ __html: item.icon }}
                  />
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
      </ScrollReveal>

      {/* Score Factors */}
      <ScrollReveal>
        <section className="section">
          <div className="max-w-3xl mx-auto">
            <SectionHeading
              label="How Scores Work"
              title="What Makes Up Your Credit Score"
            />
            <div className="space-y-5 mt-10">
              {scoreFactors.map((factor) => (
                <div key={factor.label}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-white">
                      {factor.label}
                    </span>
                    <span className="text-sm font-bold text-[var(--gold)]">
                      {factor.percent}%
                    </span>
                  </div>
                  <div className="w-full h-3 bg-[var(--navy)] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[var(--gold-dark)] to-[var(--gold-light)] rounded-full transition-all duration-1000"
                      style={{ width: `${factor.percent}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Process */}
      <ScrollReveal>
        <section className="section bg-[var(--navy-dark)]">
          <div className="max-w-7xl mx-auto">
            <SectionHeading
              label="Our Process"
              title="4 Steps to a Better Score"
              subtitle="A clear process. No guesswork. No gimmicks."
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
      </ScrollReveal>

      {/* FAQ */}
      <ScrollReveal>
        <section className="section">
          <div className="max-w-3xl mx-auto">
            <SectionHeading
              label="FAQ"
              title="Questions About Credit Repair"
            />
            <div className="mt-10">
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
      </ScrollReveal>

      <CTABanner
        headline="Ready to Fix Your Credit?"
        subtext="Book a free audit. We will show you exactly what is hurting your score and how to fix it."
        buttonText="Book Free Consultation"
        buttonHref="/consultation"
      />
    </>
  );
}
