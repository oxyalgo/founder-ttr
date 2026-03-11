import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import PricingCard from "@/components/PricingCard";
import FAQItem from "@/components/FAQItem";
import ScrollReveal from "@/components/ScrollReveal";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Pricing | Founder TTR",
  description:
    "Credit repair from $99/mo. AI trading from $184/mo. Flywheel bundles that save you money. Simple pricing. No hidden fees.",
  openGraph: {
    title: "Pricing | Founder TTR",
    description:
      "Simple pricing for credit repair, funding, and AI trading. See all plans.",
  },
};

const creditPlans = [
  {
    name: "Credit Audit",
    price: 0,
    period: "",
    features: [
      "Full 3-bureau credit review",
      "Score analysis",
      "Custom repair roadmap",
      "No obligation",
    ],
    ctaText: "Book Free Audit",
    ctaHref: "/consultation",
  },
  {
    name: "Credit Repair",
    price: 99,
    features: [
      "Monthly dispute cycles",
      "All 3 bureaus",
      "Score tracking",
      "Creditor negotiations",
      "3-6 month program",
    ],
    ctaText: "Start Repair",
    ctaHref: "/consultation",
    featured: true,
    badge: "Most Popular",
  },
  {
    name: "Credit + Funding Bundle",
    price: 149,
    features: [
      "Everything in Credit Repair",
      "Funding strategy prep",
      "Application timing",
      "Lender matching",
      "Post-repair funding access",
    ],
    ctaText: "Start Bundle",
    ctaHref: "/consultation",
  },
];

const tradingPlans = [
  {
    name: "Starter",
    price: 184,
    features: [
      "AI trading signals",
      "7 forex baskets",
      "Daily market scans",
      "Basic Discord access",
      "Mobile alerts",
    ],
    ctaText: "Start Trading",
    ctaHref: "https://whop.com/oxy-algo-c9d2/?a=fitflyai",
  },
  {
    name: "Pro",
    price: 384,
    features: [
      "Everything in Starter",
      "Live trade execution",
      "Daily bias reports",
      "Prop firm tracking",
      "Trading journal",
      "Strategy Room access",
    ],
    ctaText: "Go Pro",
    ctaHref: "https://whop.com/oxy-algo-c9d2/?a=fitflyai",
    featured: true,
    badge: "Best Value",
  },
  {
    name: "Elite",
    price: 1032,
    features: [
      "Everything in Pro",
      "Direct line to analysts",
      "Inner circle access",
      "War Room access",
      "Priority execution",
      "Custom strategy",
    ],
    ctaText: "Go Elite",
    ctaHref: "https://whop.com/oxy-algo-c9d2/?a=fitflyai",
  },
];

const bundlePlans = [
  {
    name: "Flywheel Starter",
    price: 283,
    badge: "Save $35",
    features: [
      "Credit Repair ($99)",
      "Starter Trading ($184)",
      "Combined discount",
      "Full Flywheel system",
    ],
    ctaText: "Start Flywheel",
    ctaHref: "/consultation",
  },
  {
    name: "Flywheel Pro",
    price: 498,
    badge: "Save $70",
    featured: true,
    features: [
      "Credit + Funding ($149)",
      "Pro Trading ($384)",
      "Combined discount",
      "Full Flywheel system",
      "Funding strategy included",
    ],
    ctaText: "Go Flywheel Pro",
    ctaHref: "/consultation",
  },
  {
    name: "Flywheel Elite",
    price: 1096,
    badge: "Save $150",
    features: [
      "Credit + Funding ($149)",
      "Elite Trading ($1,032)",
      "Maximum discount",
      "Full Flywheel system",
      "Priority everything",
      "Custom strategy",
    ],
    ctaText: "Go Flywheel Elite",
    ctaHref: "/consultation",
  },
];

const faqs = [
  {
    question: "Can I start with just credit repair?",
    answer:
      "Yes. You do not have to do everything at once. Many clients start with credit repair and add trading later once they are funded.",
  },
  {
    question: "Are there contracts or commitments?",
    answer:
      "No long-term contracts. Credit repair is a monthly program (typically 3-6 months). Trading plans are month to month. Cancel anytime.",
  },
  {
    question: "What is the Flywheel bundle?",
    answer:
      "It combines credit repair and trading into one plan at a discount. You get the full system: fix credit, get funded, trade with AI.",
  },
  {
    question: "Do I need to be a trader to use the AI?",
    answer:
      "No. The AI does the trading for you. You just fund the account and connect. No experience needed.",
  },
  {
    question: "What if I already have good credit?",
    answer:
      "Then you can skip credit repair and go straight to a trading plan. Or we can help you optimize your credit for even better funding offers.",
  },
];

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="section bg-[var(--navy-dark)] relative overflow-hidden">
        <div className="glow-orb glow-orb-gold w-72 h-72 top-0 right-1/4" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-[var(--gold)] font-semibold text-sm uppercase tracking-widest mb-4">
            Pricing
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Simple Pricing.{" "}
            <span className="text-gold-gradient">Real Results.</span>
          </h1>
          <p className="text-[var(--muted)] text-lg leading-relaxed max-w-2xl mx-auto">
            No hidden fees. No surprises. Pick what you need. Upgrade when you
            are ready. Cancel anytime.
          </p>
        </div>
      </section>

      {/* Credit Repair Plans */}
      <ScrollReveal>
        <section className="section">
          <div className="max-w-7xl mx-auto">
            <SectionHeading
              label="Step 1"
              title="Credit Repair Plans"
              subtitle="Fix your credit first. That unlocks everything else."
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {creditPlans.map((plan) => (
                <PricingCard
                  key={plan.name}
                  name={plan.name}
                  price={plan.price}
                  period={plan.period}
                  features={plan.features}
                  ctaText={plan.ctaText}
                  ctaHref={plan.ctaHref}
                  featured={plan.featured}
                  badge={plan.badge}
                />
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* AI Trading Plans */}
      <ScrollReveal>
        <section className="section bg-[var(--navy-dark)]">
          <div className="max-w-7xl mx-auto">
            <SectionHeading
              label="Step 3"
              title="AI Trading Plans"
              subtitle="Powered by OXY ALGO. Your money works while you sleep."
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {tradingPlans.map((plan) => (
                <PricingCard
                  key={plan.name}
                  name={plan.name}
                  price={plan.price}
                  features={plan.features}
                  ctaText={plan.ctaText}
                  ctaHref={plan.ctaHref}
                  featured={plan.featured}
                  badge={plan.badge}
                />
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Flywheel Bundles */}
      <ScrollReveal>
        <section className="section">
          <div className="max-w-7xl mx-auto">
            <SectionHeading
              label="Full System"
              title="Flywheel Bundles"
              subtitle="Credit repair + trading combined. Save money. Get the full system."
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {bundlePlans.map((plan) => (
                <PricingCard
                  key={plan.name}
                  name={plan.name}
                  price={plan.price}
                  features={plan.features}
                  ctaText={plan.ctaText}
                  ctaHref={plan.ctaHref}
                  featured={plan.featured}
                  badge={plan.badge}
                />
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* FAQ */}
      <ScrollReveal>
        <section className="section bg-[var(--navy-dark)]">
          <div className="max-w-3xl mx-auto">
            <SectionHeading label="FAQ" title="Pricing Questions" />
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
        headline="Not Sure Which Plan?"
        subtext="Book a free call. We will help you pick the right plan based on your credit and goals."
        buttonText="Book Free Consultation"
        buttonHref="/consultation"
      />
    </>
  );
}
