import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import StepCard from "@/components/StepCard";
import ScrollReveal from "@/components/ScrollReveal";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Funding Solutions | Founder TTR",
  description:
    "Get funded after credit repair. Business credit cards, personal loans, lines of credit, and SBA loans. Step two of the Flywheel.",
  openGraph: {
    title: "Funding Solutions | Founder TTR",
    description:
      "Good credit opens doors. We help you get funded. Then put that money to work with AI trading.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Funding Solutions",
  provider: { "@type": "Organization", name: "Founder TTR" },
  description:
    "Funding assistance for business credit cards, personal loans, lines of credit, and SBA loans.",
};

const fundingTypes = [
  {
    title: "Business Credit Cards",
    amount: "$10K-$100K+",
    description:
      "0% APR intro offers. Use them for inventory, marketing, or to fund trading accounts.",
  },
  {
    title: "Personal Loans",
    amount: "$5K-$50K",
    description:
      "Fixed rates. Fixed payments. Use the capital however you want.",
  },
  {
    title: "Lines of Credit",
    amount: "$10K-$250K",
    description:
      "Draw money when you need it. Only pay interest on what you use.",
  },
  {
    title: "SBA Loans",
    amount: "$50K-$500K+",
    description:
      "Government-backed business loans with low rates and long terms.",
  },
];

const steps = [
  {
    number: 1,
    title: "Fix Your Credit First",
    description:
      "We optimize your credit score so lenders say yes. This is why credit repair comes first.",
  },
  {
    number: 2,
    title: "Build Your Strategy",
    description:
      "We pick the best funding products for your goals. We time applications to avoid hurting your score.",
  },
  {
    number: 3,
    title: "Get Approved",
    description:
      "We guide you through the process. You get funded. Then you decide what to do with the money.",
  },
];

export default function FundingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="section bg-[var(--navy-dark)] relative overflow-hidden">
        <div className="glow-orb glow-orb-gold w-72 h-72 bottom-0 right-0" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-[var(--gold)] font-semibold text-sm uppercase tracking-widest mb-4">
            Step 2 of the Flywheel
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get Funded.{" "}
            <span className="text-gold-gradient">
              Then Put That Money to Work.
            </span>
          </h1>
          <p className="text-[var(--muted)] text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            Good credit unlocks real funding. Credit cards. Loans. Lines of
            credit. Once you have capital, you can use it to enter the markets
            with our AI.
          </p>
          <a href="/consultation" className="btn-gold">
            Start Your Funding Journey
          </a>
        </div>
      </section>

      {/* Why Credit First */}
      <ScrollReveal>
        <section className="section">
          <div className="max-w-4xl mx-auto">
            <SectionHeading
              label="The Foundation"
              title="Why Credit Comes First"
              subtitle="Your credit score is the key. It decides how much you can borrow and at what rate."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
              <div className="card">
                <h3 className="text-lg font-bold text-red-400 mb-3">
                  Bad Credit = Bad Offers
                </h3>
                <ul className="space-y-3 text-[var(--muted)] text-sm">
                  {[
                    "High interest rates",
                    "Low approval amounts",
                    "Need collateral or co-signers",
                    "Most lenders say no",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-red-400 mt-0.5">&#10005;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="card border-[var(--gold)]">
                <h3 className="text-lg font-bold text-[var(--gold)] mb-3">
                  Good Credit = Great Offers
                </h3>
                <ul className="space-y-3 text-[var(--muted)] text-sm">
                  {[
                    "0% APR intro offers",
                    "$50K-$250K+ available",
                    "No collateral needed",
                    "Multiple approvals",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-[var(--gold)] mt-0.5">&#10003;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Types of Funding */}
      <ScrollReveal>
        <section className="section bg-[var(--navy-dark)]">
          <div className="max-w-7xl mx-auto">
            <SectionHeading
              label="Funding Options"
              title="Types of Funding We Help You Get"
              subtitle="We match you with the right funding for your goals."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {fundingTypes.map((type) => (
                <div key={type.title} className="card text-center">
                  <p className="text-[var(--gold)] font-bold text-sm mb-1">
                    {type.amount}
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
      </ScrollReveal>

      {/* Process */}
      <ScrollReveal>
        <section className="section">
          <div className="max-w-5xl mx-auto">
            <SectionHeading
              label="The Process"
              title="From Credit Repair to Funded"
              subtitle="Three steps. We guide you the whole way."
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
      </ScrollReveal>

      {/* Bridge to Trading */}
      <ScrollReveal>
        <section className="section bg-[var(--navy-dark)]">
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeading
              label="The Bridge"
              title="Funding Meets Trading"
              subtitle="Most people stop at funding. We go further."
            />
            <div className="card-3d mt-10">
              <p className="text-[var(--muted)] leading-relaxed">
                Once you are funded, you have capital. You can use that capital
                to buy a prop firm challenge. Or fund your own trading account.
                Either way, you connect to our AI. The AI scans 38 markets. It
                finds trades. It executes. You collect profits. That is the next
                step of the Flywheel.
              </p>
            </div>
            <a href="/trading" className="btn-outline mt-8 inline-block">
              Learn About AI Trading &rarr;
            </a>
          </div>
        </section>
      </ScrollReveal>

      <CTABanner
        headline="Ready to Get Funded?"
        subtext="Book a free call. We will map out your funding strategy based on your credit profile."
        buttonText="Book Free Consultation"
        buttonHref="/consultation"
      />
    </>
  );
}
