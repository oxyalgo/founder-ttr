import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import TestimonialCard from "@/components/TestimonialCard";
import StepCard from "@/components/StepCard";
import PricingCard from "@/components/PricingCard";
import StatCounter from "@/components/StatCounter";
import ScrollReveal from "@/components/ScrollReveal";
import FAQItem from "@/components/FAQItem";
import CTABanner from "@/components/CTABanner";
import DiscordShowcase from "@/components/DiscordShowcase";
import ProofGallery from "@/components/ProofGallery";

export const metadata: Metadata = {
  title: "Phi Mind Flow | AI Trading Automation",
  description:
    "8 AI agents scan 38 markets 24/7. Get live trading signals, copy trading, and automated execution. Let AI trade for you while you sleep.",
  openGraph: {
    title: "Phi Mind Flow | AI Trading Automation",
    description:
      "8 AI agents scan 38 markets 24/7. Live signals. Copy trading. Automated execution.",
  },
};

const painPoints = [
  {
    icon: "&#10005;",
    title: "Manual Trading",
    description:
      "You sit at the screen for hours. You miss setups. Emotions take over. You buy high. You sell low. You lose money.",
  },
  {
    icon: "&#10005;",
    title: "Signal Scams",
    description:
      "Fake gurus sell signals with no proof. No track record. No real trades. You pay and get nothing.",
  },
  {
    icon: "&#10005;",
    title: "No Risk Control",
    description:
      "Blown accounts. No system. No stop losses. No plan. One bad trade wipes out a month of gains.",
  },
];

const steps = [
  {
    number: 1,
    title: "Join the Hub",
    description:
      "Join our Discord community. Get instant access to live signals, AI analysis, and the full trading team.",
  },
  {
    number: 2,
    title: "AI Finds Trades",
    description:
      "8 AI agents scan 38 instruments 24/7. They use institutional Smart Money strategies to find high-quality setups.",
  },
  {
    number: 3,
    title: "You Collect Profits",
    description:
      "Trades execute on your account. Track results in real time. Copy trading available so you never miss a move.",
  },
];

const testimonials = [
  {
    name: "Marcus J.",
    role: "Forex Trader",
    quote:
      "I used to sit at my screen 10 hours a day. Now the AI finds every setup. I check my phone and the trades are already running. Last month was my best month ever.",
    rating: 5,
  },
  {
    name: "Tanya R.",
    role: "Prop Firm Trader",
    quote:
      "I failed 3 prop firm challenges on my own. Connected to the AI, passed on my first try. Now I trade with their capital. Zero risk to me.",
    rating: 5,
  },
  {
    name: "David K.",
    role: "Copy Trader",
    quote:
      "I know nothing about trading. I just copy the AI. I get alerts, I see the trades, and I watch my account grow. This is the future.",
    rating: 5,
  },
];

const tradingPlans = [
  {
    name: "Free",
    price: 0,
    features: [
      "Community Discord access",
      "Daily results posted",
      "Educational content",
      "Market overview",
    ],
    ctaText: "Join Free",
    ctaHref: "https://whop.com/oxy-algo-c9d2/starter-5f/?a=fitflyai",
  },
  {
    name: "Premium",
    price: 149,
    features: [
      "All 38 instruments",
      "Live AI signals",
      "Pre-news alerts",
      "Daily bias reports",
      "AI market analysis",
    ],
    ctaText: "Start Trading",
    ctaHref: "https://whop.com/checkout/plan_HubGrmolF1PHI?a=fitflyai",
  },
  {
    name: "VIP",
    price: 349,
    badge: "Best Value",
    featured: true,
    features: [
      "Everything in Premium",
      "Copy trading",
      "Live P&L tracking",
      "Prop firm tracker",
      "Weekly recaps",
      "Strategy Room access",
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
      "War Room access",
      "Priority execution",
      "Custom strategy",
    ],
    ctaText: "Go Elite",
    ctaHref: "https://whop.com/checkout/plan_xTljiE01bZx4x?a=fitflyai",
  },
];

const faqs = [
  {
    question: "What is Phi Mind Flow?",
    answer:
      "Phi Mind Flow is an AI-powered trading automation service. We have 8 AI agents that scan 38 markets around the clock. They find trades, analyze risk, and execute. You get live signals and can copy trades to your own account.",
  },
  {
    question: "How does the AI work?",
    answer:
      "Our AI uses institutional Smart Money strategies. It reads price action, order flow, and market structure. When it finds a high-quality setup, it sends a signal and can execute the trade automatically. No guesswork. No emotions.",
  },
  {
    question: "What instruments do you trade?",
    answer:
      "We scan 38 instruments: 28 forex pairs across 7 currency baskets, 3 indices, 3 commodities, and 10 crypto assets. The AI covers forex, gold, oil, Bitcoin, Ethereum, and more.",
  },
  {
    question: "Do I need trading experience?",
    answer:
      "No. The AI does the work. You can copy trades directly to your account. If you want to learn, we have educational content and a community of traders to help you.",
  },
  {
    question: "What is copy trading?",
    answer:
      "Copy trading means our AI places a trade, and the same trade is copied to your account automatically. You do not need to watch the screen or press any buttons. VIP and Elite members get copy trading.",
  },
  {
    question: "Is trading risky?",
    answer:
      "Yes. All trading involves risk. That is why we use strict risk controls. The AI never risks more than 2% per trade. It has built-in stop losses, position limits, and a circuit breaker that stops trading if losses get too high.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <Hero />

      {/* Trusted By */}
      <section className="border-b border-[var(--card-border)] py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-40">
            {["Exness", "MetaTrader 5", "Discord", "OXY ALGO", "Whop"].map(
              (name) => (
                <span
                  key={name}
                  className="text-sm md:text-base font-semibold tracking-wider uppercase text-[var(--muted)]"
                >
                  {name}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* The Problem */}
      <ScrollReveal>
        <section className="section bg-[var(--navy-dark)]">
          <div className="max-w-7xl mx-auto">
            <SectionHeading
              label="The Problem"
              title="Trading Is Broken"
              subtitle="Most traders lose money. Emotions, fake signals, and no risk control. It does not have to be this way."
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {painPoints.map((point) => (
                <div key={point.title} className="card text-center">
                  <div
                    className="text-4xl text-red-400 mb-4"
                    dangerouslySetInnerHTML={{ __html: point.icon }}
                  />
                  <h3 className="text-xl font-bold text-white mb-3">
                    {point.title}
                  </h3>
                  <p className="text-[var(--muted)] text-sm leading-relaxed">
                    {point.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* How It Works */}
      <ScrollReveal>
        <section className="section bg-[var(--navy-dark)] dot-grid">
          <div className="max-w-7xl mx-auto">
            <SectionHeading
              label="3 Steps"
              title="How It Works"
              subtitle="Simple. Clear. No guesswork."
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {steps.map((step) => (
                <ScrollReveal key={step.number} delay={step.number * 100}>
                  <StepCard
                    number={step.number}
                    title={step.title}
                    description={step.description}
                  />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Section Divider */}
      <div className="section-divider" />

      {/* Discord Showcase */}
      <DiscordShowcase />

      {/* Section Divider */}
      <div className="section-divider" />

      {/* Stats */}
      <ScrollReveal>
        <section className="section bg-[var(--navy-dark)]">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <StatCounter value="8+" label="AI Agents" />
              <StatCounter value="38" label="Instruments" />
              <StatCounter value="350+" label="Daily Scans" />
              <StatCounter value="24/7" label="AI Trading" />
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Verified Withdrawals */}
      <ProofGallery />

      {/* Section Divider */}
      <div className="section-divider" />

      {/* Testimonials */}
      <ScrollReveal>
        <section className="section">
          <div className="max-w-7xl mx-auto">
            <SectionHeading
              label="Real Results"
              title="Traders Are Winning"
              subtitle="Real people. Real results. See what AI trading can do."
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {testimonials.map((t) => (
                <TestimonialCard
                  key={t.name}
                  name={t.name}
                  role={t.role}
                  quote={t.quote}
                  rating={t.rating}
                />
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Trading Plans */}
      <ScrollReveal>
        <section className="section bg-[var(--navy-dark)]">
          <div className="max-w-7xl mx-auto">
            <SectionHeading
              label="Trading Plans"
              title="Simple Pricing. Real Results."
              subtitle="Pick the plan that fits your goals. Cancel anytime."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
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
            <div className="text-center mt-10">
              <Link
                href="/pricing"
                className="text-[var(--gold)] font-semibold hover:underline"
              >
                See full plan details &rarr;
              </Link>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Section Divider */}
      <div className="section-divider" />

      {/* CTA Section (replaces Lead Magnet) */}
      <ScrollReveal>
        <section className="section">
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeading
              label="Get Started"
              title="Join the Trading Revolution"
              subtitle="No experience needed. The AI does the work. You collect the results."
            />
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="https://whop.com/oxy-algo-c9d2/starter-5f/?a=fitflyai"
                className="btn-gold text-base"
              >
                Join Free
              </Link>
              <Link href="/pricing" className="btn-outline text-base">
                See All Plans
              </Link>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* FAQ */}
      <ScrollReveal>
        <section className="section bg-[var(--navy-dark)]">
          <div className="max-w-3xl mx-auto">
            <SectionHeading
              label="FAQ"
              title="Questions? Answers."
              subtitle="The most common questions about AI trading automation."
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

      {/* CTA Banner */}
      <CTABanner
        headline="Ready to Let AI Trade For You?"
        subtext="Join for free. See the signals. Watch the AI work. Upgrade when you are ready."
        buttonText="Join Free Now"
        buttonHref="https://whop.com/oxy-algo-c9d2/starter-5f/?a=fitflyai"
      />
    </>
  );
}
