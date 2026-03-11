import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import StepCard from "@/components/StepCard";
import PricingCard from "@/components/PricingCard";
import StatCounter from "@/components/StatCounter";
import FlywheelDiagram from "@/components/FlywheelDiagram";
import ScrollReveal from "@/components/ScrollReveal";
import LeadForm from "@/components/LeadForm";
import FAQItem from "@/components/FAQItem";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Founder TTR | Fix Credit, Get Funded, AI Trades For You",
  description:
    "The Flywheel: Fix your credit, get funded, and let AI trade for you. Founder TTR turns bad credit into real income with credit repair, funding, and automated trading.",
  openGraph: {
    title: "Founder TTR | Fix Credit, Get Funded, AI Trades For You",
    description:
      "The Flywheel system turns bad credit into real income. Credit repair + funding + AI trading.",
  },
};

const painPoints = [
  {
    icon: "&#10005;",
    title: "Bad Credit",
    description:
      "Low scores lock you out. No credit cards. No loans. No way forward.",
  },
  {
    icon: "&#10005;",
    title: "No Funding",
    description:
      "Banks say no. You have ideas but no capital. Every door is closed.",
  },
  {
    icon: "&#10005;",
    title: "No Growth",
    description:
      "Money sits in a savings account earning nothing. You work harder but stay stuck.",
  },
];

const steps = [
  {
    number: 1,
    title: "We Fix Your Credit",
    description:
      "We remove bad marks from your report. Late payments, collections, errors. Your score goes up.",
  },
  {
    number: 2,
    title: "You Get Funded",
    description:
      "Good credit opens doors. Credit cards, loans, lines of credit. Real money in your hands.",
  },
  {
    number: 3,
    title: "We Set Up Your Trading",
    description:
      "Use your funds to buy a prop firm challenge or fund a trading account. We connect you to our AI.",
  },
  {
    number: 4,
    title: "AI Makes Money For You",
    description:
      "Our AI scans 38 markets 24/7. It finds trades. It executes. You collect profits. Then repeat.",
  },
];

const services = [
  {
    icon: "&#9889;",
    title: "AI Trading",
    description:
      "Your money goes to work. Our AI scans forex, crypto, indices, and commodities. It trades for you. 24/7.",
    href: "/trading",
  },
  {
    icon: "&#9881;",
    title: "Credit Repair",
    description:
      "We dispute bad marks on your credit report. Late payments, collections, errors. Most clients see real results in 3-6 months.",
    href: "/credit-repair",
  },
  {
    icon: "&#9733;",
    title: "Funding",
    description:
      "Once your credit is fixed, we help you get funded. Credit cards, loans, and lines of credit. Real capital.",
    href: "/funding",
  },
];

const testimonials = [
  {
    name: "Marcus J.",
    role: "Small Business Owner",
    quote:
      "My credit went from 520 to 740 in 5 months. I got $50K in business credit. Then I started trading with the AI. Life changed.",
    rating: 5,
  },
  {
    name: "Tanya R.",
    role: "Entrepreneur",
    quote:
      "They removed 6 collections from my report. My score jumped 180 points. I used my new funding to start trading. Best decision ever.",
    rating: 5,
  },
  {
    name: "David K.",
    role: "Full-Time Trader",
    quote:
      "The AI trading is real. I funded a prop firm challenge, passed it with the AI, and now I trade with their money. No risk to me.",
    rating: 5,
  },
];

const tradingPlans = [
  {
    name: "Starter",
    price: 149,
    features: [
      "AI trading signals",
      "7 forex baskets",
      "Daily market scans",
      "Basic Discord access",
    ],
    ctaText: "Start Trading",
    ctaHref: "https://whop.com/oxy-algo-c9d2/premium-4a-1c82?a=fitflyai",
  },
  {
    name: "Pro",
    price: 349,
    badge: "Most Popular",
    featured: true,
    features: [
      "Everything in Starter",
      "Live trade execution",
      "Daily bias reports",
      "Prop firm tracking",
      "Trading journal",
      "Strategy Room access",
    ],
    ctaText: "Go Pro",
    ctaHref: "https://whop.com/oxy-algo-c9d2/vip-96-9bb8?a=fitflyai",
  },
  {
    name: "Elite",
    price: 997,
    features: [
      "Everything in Pro",
      "Direct line to analysts",
      "Inner circle access",
      "War Room access",
      "Priority execution",
      "Custom strategy",
    ],
    ctaText: "Go Elite",
    ctaHref: "https://whop.com/oxy-algo-c9d2/elite-f7-bc43?a=fitflyai",
  },
];

const faqs = [
  {
    question: "What is the Flywheel?",
    answer:
      "The Flywheel is our system. First we fix your credit. Then you get funded with credit cards, loans, or lines of credit. You use that money to fund a trading account or buy a prop firm challenge. Our AI trades for you. You make money. Then you repeat the cycle.",
  },
  {
    question: "Do I need good credit to start?",
    answer:
      "No. That is the whole point. We start by fixing your credit. Most clients come to us with scores under 600. We work with you no matter where you start.",
  },
  {
    question: "How does the AI trading work?",
    answer:
      "Our AI scans 38 markets including forex, crypto, indices, and commodities. It uses institutional strategies to find high-quality trades. When it finds one, it executes automatically. You get alerts and can track everything in real time.",
  },
  {
    question: "What is a prop firm challenge?",
    answer:
      "Prop firms give you money to trade with. You pay a one-time fee to take a challenge. If you pass, you trade with their capital and keep up to 90% of profits. Our AI helps you pass these challenges.",
  },
  {
    question: "How long does credit repair take?",
    answer:
      "Most clients see real results in 3-6 months. Some items can be removed in 30 days. The time depends on what is on your report.",
  },
  {
    question: "Is trading risky?",
    answer:
      "Yes. All trading involves risk. That is why we use strict risk controls. Our AI never risks more than 2% per trade. We also recommend starting with a prop firm challenge so you trade with their money, not yours.",
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
            {["Equifax", "Experian", "TransUnion", "Exness", "Discord"].map(
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
              title="Most People Are Stuck"
              subtitle="Bad credit. No funding. No way to grow your money. It feels like a trap."
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

      {/* The Flywheel */}
      <ScrollReveal>
        <section id="flywheel" className="section relative overflow-hidden">
          <div className="glow-orb glow-orb-gold w-96 h-96 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          <div className="max-w-5xl mx-auto relative z-10">
            <SectionHeading
              label="The Solution"
              title="The Flywheel"
              subtitle="We built a system that turns bad credit into real income. Each step makes the next one stronger."
            />
            <div className="mt-12 flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1">
                <FlywheelDiagram />
              </div>
              <div className="flex-1 space-y-6">
                <div className="card-3d">
                  <h3 className="text-lg font-bold text-[var(--gold)] mb-2">
                    How It Works
                  </h3>
                  <p className="text-[var(--muted)] text-sm leading-relaxed">
                    Fix your credit. Use that good credit to get funded. Use those funds to buy a prop firm challenge or fund a trading account. Connect to our AI. The AI trades for you. You make money. Use the profits to get more funding. The wheel keeps spinning.
                  </p>
                </div>
                <div className="card-3d">
                  <h3 className="text-lg font-bold text-[var(--gold)] mb-2">
                    Why It Works
                  </h3>
                  <p className="text-[var(--muted)] text-sm leading-relaxed">
                    Each step feeds the next. Better credit means more funding. More funding means more trading capital. More capital means more profits. More profits means more options. It compounds.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* How It Works */}
      <ScrollReveal>
        <section className="section bg-[var(--navy-dark)] dot-grid">
          <div className="max-w-7xl mx-auto">
            <SectionHeading
              label="4 Steps"
              title="How It Works"
              subtitle="Simple. Clear. No guesswork."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
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

      {/* Services Overview */}
      <ScrollReveal>
        <section className="section">
          <div className="max-w-7xl mx-auto">
            <SectionHeading
              label="Our Services"
              title="Three Services. One System."
              subtitle="Credit repair is step one. Funding is step two. AI trading is where the money grows."
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {services.map((service) => (
                <ServiceCard
                  key={service.title}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  href={service.href}
                />
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Stats */}
      <ScrollReveal>
        <section className="section bg-[var(--navy-dark)]">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <StatCounter value="500+" label="Clients Helped" />
              <StatCounter prefix="$" value="2M+" label="Total Funded" />
              <StatCounter value="85%" label="Success Rate" />
              <StatCounter value="24/7" label="AI Trading" />
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Testimonials */}
      <ScrollReveal>
        <section className="section">
          <div className="max-w-7xl mx-auto">
            <SectionHeading
              label="Real Results"
              title="People Like You Are Winning"
              subtitle="Credit repair clients who became funded traders. Real stories."
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

      {/* Pricing Preview */}
      <ScrollReveal>
        <section className="section bg-[var(--navy-dark)]">
          <div className="max-w-7xl mx-auto">
            <SectionHeading
              label="AI Trading Plans"
              title="Simple Pricing. Real Results."
              subtitle="Pick the plan that fits your goals. Cancel anytime."
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
            <div className="text-center mt-10">
              <Link
                href="/pricing"
                className="text-[var(--gold)] font-semibold hover:underline"
              >
                See full pricing including credit repair and bundles &rarr;
              </Link>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Lead Magnet */}
      <ScrollReveal>
        <section className="section">
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeading
              label="Free Download"
              title="Get Your Free Credit + Trading Guide"
              subtitle="Learn how the Flywheel works. Step by step. Free. No credit card needed."
            />
            <div className="mt-10">
              <LeadForm />
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
              subtitle="The most common questions about credit repair, funding, and AI trading."
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
        headline="Ready to Start Your Flywheel?"
        subtext="Book a free call. We will look at your credit, map out your funding, and show you how the AI works. No pressure."
        buttonText="Book Free Consultation"
        buttonHref="/consultation"
      />
    </>
  );
}
