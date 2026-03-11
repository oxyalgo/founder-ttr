import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import ScrollReveal from "@/components/ScrollReveal";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Resources | Founder TTR",
  description:
    "Free guides on credit repair, funding, algorithmic trading, prop firms, and risk management. Learn how the Flywheel works.",
  openGraph: {
    title: "Resources | Founder TTR",
    description:
      "Free educational content on credit, funding, and AI trading.",
  },
};

const articles = [
  {
    title: "How Credit Scores Really Work",
    excerpt:
      "The 5 factors that make up your score. What matters most. What to fix first. Simple breakdown.",
    category: "Credit",
    color: "text-green-400",
    slug: "#",
  },
  {
    title: "5 Ways to Get Funded Fast",
    excerpt:
      "Business credit cards, personal loans, lines of credit. The fastest paths to capital once your credit is fixed.",
    category: "Funding",
    color: "text-[var(--gold)]",
    slug: "#",
  },
  {
    title: "What Is Algorithmic Trading?",
    excerpt:
      "How AI scans the markets and finds trades. No experience needed. A simple guide for beginners.",
    category: "Trading",
    color: "text-blue-400",
    slug: "#",
  },
  {
    title: "The Flywheel Effect: Credit to Trading",
    excerpt:
      "How fixing your credit leads to funding, which leads to trading capital, which leads to income. The full loop.",
    category: "Strategy",
    color: "text-purple-400",
    slug: "#",
  },
  {
    title: "Prop Firm Trading Explained",
    excerpt:
      "What prop firms are. How challenges work. How to pass them. How to trade with their money and keep the profits.",
    category: "Trading",
    color: "text-blue-400",
    slug: "#",
  },
  {
    title: "How AI Manages Your Risk",
    excerpt:
      "Stop losses. Position sizing. The 2% rule. Circuit breakers. How the AI keeps your money safe.",
    category: "Trading",
    color: "text-blue-400",
    slug: "#",
  },
];

export default function ResourcesPage() {
  return (
    <>
      {/* Hero */}
      <section className="section bg-[var(--navy-dark)]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[var(--gold)] font-semibold text-sm uppercase tracking-widest mb-4">
            Resources
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Learn.{" "}
            <span className="text-gold-gradient">Apply. Grow.</span>
          </h1>
          <p className="text-[var(--muted)] text-lg leading-relaxed max-w-2xl mx-auto">
            Free guides on credit, funding, and trading. Simple language.
            Real strategies. No fluff.
          </p>
        </div>
      </section>

      {/* Articles */}
      <ScrollReveal>
        <section className="section">
          <div className="max-w-7xl mx-auto">
            <SectionHeading
              label="Articles"
              title="Credit, Funding & Trading Guides"
              subtitle="Start learning. Each article connects back to the Flywheel."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {articles.map((article) => (
                <ScrollReveal key={article.title}>
                  <div className="card flex flex-col h-full">
                    <p
                      className={`text-xs font-semibold uppercase tracking-widest mb-3 ${article.color}`}
                    >
                      {article.category}
                    </p>
                    <h3 className="text-lg font-bold text-white mb-3 leading-tight">
                      {article.title}
                    </h3>
                    <p className="text-[var(--muted)] text-sm leading-relaxed mb-4 flex-1">
                      {article.excerpt}
                    </p>
                    <span className="text-[var(--gold)]/40 text-xs font-medium uppercase tracking-wider">
                      Coming Soon
                    </span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Free Guide */}
      <ScrollReveal>
        <section className="section bg-[var(--navy-dark)]">
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeading
              label="Free Download"
              title="The Flywheel Blueprint"
              subtitle="Our most popular guide. Credit repair + funding + AI trading. The full system in one document."
            />
            <div className="mt-8">
              <Link href="/free-guide" className="btn-gold">
                Download Free Guide
              </Link>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <CTABanner
        headline="Have Questions? Let Us Help."
        subtext="Book a free call and get personal advice on credit, funding, or trading."
        buttonText="Book Free Consultation"
        buttonHref="/consultation"
      />
    </>
  );
}
