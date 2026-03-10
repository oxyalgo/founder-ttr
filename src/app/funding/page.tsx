import SectionHeading from "@/components/SectionHeading";
import StepCard from "@/components/StepCard";
import CTABanner from "@/components/CTABanner";

const fundingTypes = [
  {
    icon: "💳",
    title: "Business Credit Cards",
    description:
      "Access $10K-$100K+ in 0% APR business credit cards for startup costs, inventory, marketing, and growth capital.",
    highlight: "$10K-$100K+",
  },
  {
    icon: "🏦",
    title: "Lines of Credit",
    description:
      "Revolving credit lines you can draw from when you need capital. Flexible, low-interest options for established businesses.",
    highlight: "Flexible Access",
  },
  {
    icon: "👤",
    title: "Personal Funding",
    description:
      "Personal loans and credit products to consolidate debt, invest in yourself, or handle life's major expenses.",
    highlight: "Personal Growth",
  },
  {
    icon: "🏢",
    title: "Business Funding",
    description:
      "SBA loans, term loans, revenue-based financing, and merchant cash advances for businesses ready to scale.",
    highlight: "Scale Up",
  },
];

const steps = [
  {
    number: 1,
    title: "Credit Optimization",
    description:
      "First, we repair and optimize your credit profile to meet lender requirements and maximize approval odds.",
  },
  {
    number: 2,
    title: "Application Strategy",
    description:
      "We identify the best funding products for your situation and time applications strategically to avoid unnecessary inquiries.",
  },
  {
    number: 3,
    title: "Approval Planning",
    description:
      "We walk you through the process, prepare documentation, and ensure you're positioned for the highest approval amounts.",
  },
];

export default function FundingPage() {
  return (
    <>
      {/* Hero */}
      <section className="section bg-[var(--navy-dark)]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[var(--gold)] font-semibold text-sm uppercase tracking-widest mb-4">
            Funding Program
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Unlock the{" "}
            <span className="text-gold-gradient">Funding You Deserve</span>
          </h1>
          <p className="text-[var(--muted)] text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            Once your credit is optimized, we help you access business credit
            cards, lines of credit, and capital to fuel your goals. The funding
            is out there — you just need the right credit profile to get it.
          </p>
          <a href="/consultation" className="btn-gold">
            Start Your Funding Journey
          </a>
        </div>
      </section>

      {/* Why Credit Matters */}
      <section className="section">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            label="The Foundation"
            title="Why Credit Matters for Funding"
            subtitle="Your credit score is the key that unlocks (or blocks) every funding door."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            <div className="card">
              <h3 className="text-lg font-bold text-red-400 mb-3">
                With Bad Credit
              </h3>
              <ul className="space-y-3 text-[var(--muted)] text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5">&#10005;</span>
                  Higher interest rates on every loan
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5">&#10005;</span>
                  Lower approval amounts
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5">&#10005;</span>
                  Required collateral or co-signers
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5">&#10005;</span>
                  Flat-out rejections from most lenders
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5">&#10005;</span>
                  Limited to predatory lending options
                </li>
              </ul>
            </div>
            <div className="card border-[var(--gold)]">
              <h3 className="text-lg font-bold text-[var(--gold)] mb-3">
                With Optimized Credit
              </h3>
              <ul className="space-y-3 text-[var(--muted)] text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[var(--gold)] mt-0.5">&#10003;</span>
                  0% APR introductory offers
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--gold)] mt-0.5">&#10003;</span>
                  $50K-$250K+ in available credit
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--gold)] mt-0.5">&#10003;</span>
                  No collateral needed
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--gold)] mt-0.5">&#10003;</span>
                  Multiple approved applications
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--gold)] mt-0.5">&#10003;</span>
                  Premium lending products and rewards
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Funding */}
      <section className="section bg-[var(--navy-dark)]">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="Funding Options"
            title="Types of Funding We Help You Access"
            subtitle="From business credit cards to SBA loans — we match you with the right funding for your goals."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {fundingTypes.map((type) => (
              <div key={type.title} className="card text-center">
                <div className="text-4xl mb-4">{type.icon}</div>
                <p className="text-[var(--gold)] font-bold text-sm mb-1">
                  {type.highlight}
                </p>
                <h3 className="text-lg font-bold text-white mb-2">
                  {type.title}
                </h3>
                <p className="text-[var(--muted)] text-sm leading-relaxed">
                  {type.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section">
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            label="The Process"
            title="From Credit Repair to Funded"
            subtitle="Our 3-step funding process ensures you're fully prepared before applying."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
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

      <CTABanner
        title="Ready to Get Funded?"
        subtitle="Book your free consultation and let's map out your path from credit repair to approved funding."
        ctaText="Book Free Consultation"
        ctaHref="/consultation"
      />
    </>
  );
}
