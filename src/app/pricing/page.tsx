import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import PricingCard from "@/components/PricingCard";
import FAQItem from "@/components/FAQItem";
import ScrollReveal from "@/components/ScrollReveal";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Pricing | Phi Mind Flow — AI Trading Plans",
  description:
    "AI trading plans from $0 to $997/mo. Live signals, copy trading, and automated execution across 38 markets. Simple pricing. Cancel anytime.",
  openGraph: {
    title: "Pricing | Phi Mind Flow — AI Trading Plans",
    description:
      "AI trading plans from $0 to $997/mo. Live signals, copy trading, and automated execution.",
  },
};

const tradingPlans = [
  {
    name: "Free",
    price: 0,
    period: "",
    features: [
      "Community Discord access",
      "Daily results posted",
      "Educational content",
      "Market overview",
      "Learn from the community",
    ],
    ctaText: "Join Free",
    ctaHref: "https://whop.com/oxy-algo-c9d2/starter-5f/?a=fitflyai",
  },
  {
    name: "Premium",
    price: 149,
    features: [
      "All 38 instruments",
      "Live AI trading signals",
      "Pre-news alerts (15 min warning)",
      "Daily bias reports",
      "AI market analysis",
      "7 forex basket channels",
      "Indices, commodities, crypto signals",
      "Mobile alerts",
    ],
    ctaText: "Start Trading",
    ctaHref: "https://whop.com/checkout/plan_HubGrmolF1PHI?a=fitflyai",
  },
  {
    name: "VIP",
    price: 349,
    featured: true,
    badge: "Best Value",
    features: [
      "Everything in Premium",
      "Copy trading (AI trades for you)",
      "Live P&L tracking",
      "Prop firm challenge tracker",
      "Weekly performance recaps",
      "Trading journal",
      "Strategy Room voice access",
    ],
    ctaText: "Go VIP",
    ctaHref: "https://whop.com/checkout/plan_l5lOPlJRltDT1?a=fitflyai",
  },
  {
    name: "Elite",
    price: 997,
    features: [
      "Everything in VIP",
      "Direct line to analysts",
      "Inner circle access",
      "War Room voice channel",
      "Priority trade execution",
      "Custom trading strategy",
      "1-on-1 strategy sessions",
    ],
    ctaText: "Go Elite",
    ctaHref: "https://whop.com/checkout/plan_xTljiE01bZx4x?a=fitflyai",
  },
];

const faqs = [
  {
    question: "Can I try it before I pay?",
    answer:
      "Yes. The Free plan gives you Discord access, daily results, and educational content. You can see the AI working before you spend a dollar.",
  },
  {
    question: "Are there contracts or commitments?",
    answer:
      "No long-term contracts. All plans are month to month. Cancel anytime. No hidden fees.",
  },
  {
    question: "What is copy trading?",
    answer:
      "Copy trading means when the AI places a trade, the same trade is placed on your account automatically. You do not need to watch the screen. Available on VIP and Elite plans.",
  },
  {
    question: "Do I need to be a trader to use this?",
    answer:
      "No. The AI does the trading. You just connect your account and the system handles the rest. No experience needed.",
  },
  {
    question: "What broker do I need?",
    answer:
      "We recommend Exness for the best experience. The AI is optimized for MetaTrader 5. We will help you set everything up.",
  },
  {
    question: "Can I upgrade or downgrade later?",
    answer:
      "Yes. You can change your plan at any time. Upgrades take effect immediately. Downgrades apply at the next billing cycle.",
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
            No hidden fees. No surprises. Start free. Upgrade when you are
            ready. Cancel anytime.
          </p>
        </div>
      </section>

      {/* Trading Plans */}
      <ScrollReveal>
        <section className="section">
          <div className="max-w-7xl mx-auto">
            <SectionHeading
              label="AI-Powered"
              title="AI Trading Plans"
              subtitle="8 AI agents. 38 markets. Your money works while you sleep. Powered by OXY ALGO."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              {tradingPlans.map((plan) => (
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
        subtext="Start free. See the results. Upgrade when it clicks."
        buttonText="Join Free Now"
        buttonHref="https://whop.com/oxy-algo-c9d2/starter-5f/?a=fitflyai"
      />
    </>
  );
}
