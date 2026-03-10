import Link from "next/link";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import StepCard from "@/components/StepCard";
import LeadForm from "@/components/LeadForm";
import CTABanner from "@/components/CTABanner";

const denialCards = [
  {
    icon: "💳",
    title: "Credit Card Denials",
    description:
      "Tired of seeing 'Application Denied'? Low scores and negative marks keep you locked out of the credit you need.",
  },
  {
    icon: "🏦",
    title: "Loan Rejections",
    description:
      "Banks say no because of collections, late payments, or thin credit history. You deserve better options.",
  },
  {
    icon: "📊",
    title: "Business Funding Blocked",
    description:
      "Your business idea is solid but your personal credit is holding you back from the capital you need to grow.",
  },
  {
    icon: "🏠",
    title: "Real Estate Barriers",
    description:
      "Dream home out of reach? Mortgage lenders require strong credit scores that seem impossible to achieve.",
  },
];

const solutionPoints = [
  {
    icon: "🗑️",
    title: "Remove Negative Items",
    description:
      "We dispute inaccurate late payments, collections, charge-offs, and other harmful marks dragging your score down.",
  },
  {
    icon: "📈",
    title: "Increase Your Score",
    description:
      "Strategic credit optimization techniques that boost your score month over month with measurable results.",
  },
  {
    icon: "🏗️",
    title: "Build Strong Tradelines",
    description:
      "Establish positive credit history with authorized user tradelines and strategic account management.",
  },
  {
    icon: "🔓",
    title: "Access Real Funding",
    description:
      "Once your credit is optimized, we help you access business credit cards, lines of credit, and loans.",
  },
];

const steps = [
  {
    number: 1,
    title: "Free Consultation",
    description:
      "Book a free call. We review your credit situation and create a personalized game plan.",
  },
  {
    number: 2,
    title: "Credit Analysis",
    description:
      "We pull your reports from all three bureaus and identify every item that can be disputed or improved.",
  },
  {
    number: 3,
    title: "Dispute & Repair",
    description:
      "Our team sends strategic dispute letters to bureaus and creditors on your behalf.",
  },
  {
    number: 4,
    title: "Score Optimization",
    description:
      "We optimize your credit utilization, tradeline strategy, and account mix for maximum score impact.",
  },
  {
    number: 5,
    title: "Funding & Growth",
    description:
      "With your improved credit, we help you access funding, investment capital, and financial freedom.",
  },
];

const services = [
  {
    icon: "🛡️",
    title: "Credit Repair",
    description:
      "Professional dispute services to remove inaccurate negative items and boost your credit score fast.",
    href: "/credit-repair",
  },
  {
    icon: "💰",
    title: "Funding Programs",
    description:
      "Access business credit cards, lines of credit, and funding packages once your credit is optimized.",
    href: "/funding",
  },
  {
    icon: "📉",
    title: "Trading Education",
    description:
      "Learn proven forex trading strategies powered by institutional-grade AI technology from OXY ALGO.",
    href: "/trading",
  },
  {
    icon: "📚",
    title: "Financial Literacy",
    description:
      "Master the fundamentals of credit, debt management, budgeting, and wealth building.",
    href: "/resources",
  },
];

const testimonials = [
  {
    name: "Marcus J.",
    role: "Small Business Owner",
    quote:
      "Founder TTR took my credit score from 520 to 740 in just 5 months. I was finally able to get a $50K business line of credit. Life changing.",
    rating: 5,
  },
  {
    name: "Tanya R.",
    role: "Real Estate Investor",
    quote:
      "I had 7 collections on my report and thought I was stuck. They removed 6 of them and my score jumped 180 points. I just closed on my first property.",
    rating: 5,
  },
  {
    name: "David K.",
    role: "Entrepreneur",
    quote:
      "The funding program got me approved for $35K in business credit cards at 0% APR. Plus the trading education opened a whole new income stream for me.",
    rating: 5,
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <Hero
        title="Fix Your Credit. Unlock Funding. Build Wealth."
        subtitle="Professional credit repair, business funding solutions, and trading education — all under one roof. Your financial comeback starts here."
        ctaText="Book Free Consultation"
        ctaHref="/consultation"
        secondaryText="Download Free Guide"
        secondaryHref="/free-guide"
      />

      {/* Problem Section */}
      <section className="section bg-[var(--navy-dark)]">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="The Problem"
            title="Bad Credit Is Costing You Everything"
            subtitle="Every day with a low credit score is a day you're paying more, earning less, and missing opportunities."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {denialCards.map((card) => (
              <div key={card.title} className="card text-center">
                <div className="text-4xl mb-4">{card.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {card.title}
                </h3>
                <p className="text-[var(--muted)] text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="section">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="The Solution"
            title="We Fix What's Holding You Back"
            subtitle="Our proven 4-pillar approach repairs your credit, builds your profile, and opens real doors to funding."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {solutionPoints.map((point) => (
              <div key={point.title} className="card">
                <div className="text-3xl mb-4">{point.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">
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

      {/* How It Works */}
      <section className="section bg-[var(--navy-dark)]">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="How It Works"
            title="5 Steps to Financial Freedom"
            subtitle="A clear, proven process that delivers results. No guesswork. No gimmicks."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-12">
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

      {/* Services Overview */}
      <section className="section">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="Our Services"
            title="Everything You Need to Win Financially"
            subtitle="Credit repair is just the beginning. We help you build real wealth."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
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

      {/* Testimonials */}
      <section className="section bg-[var(--navy-dark)]">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="Results"
            title="Real People. Real Results."
            subtitle="Our clients are building better credit, accessing funding, and changing their financial futures."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.name}
                name={testimonial.name}
                role={testimonial.role}
                quote={testimonial.quote}
                rating={testimonial.rating}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Lead Magnet */}
      <section className="section">
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeading
            label="Free Download"
            title="Get the Credit Secrets Guide"
            subtitle="Learn the exact strategies we use to remove negative items and boost scores by 100+ points. Free instant download."
          />
          <div className="mt-10">
            <LeadForm />
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        title="Book Your Free Credit Consultation"
        subtitle="Find out exactly what's hurting your score and get a custom game plan — completely free. No obligation."
        ctaText="Book Now"
        ctaHref="/consultation"
      />
    </>
  );
}
