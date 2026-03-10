import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import CTABanner from "@/components/CTABanner";

const articles = [
  {
    title: "How Credit Scores Work: The Complete Guide",
    excerpt:
      "Understanding the five factors that make up your FICO score and how to optimize each one for maximum impact.",
    category: "Credit Education",
    slug: "#",
  },
  {
    title: "How to Remove Collections from Your Credit Report",
    excerpt:
      "Step-by-step guide to disputing collections, understanding your rights under the FCRA, and when to negotiate pay-for-delete.",
    category: "Credit Repair",
    slug: "#",
  },
  {
    title: "How Business Funding Works: A Beginner's Guide",
    excerpt:
      "From business credit cards to SBA loans — learn the different types of funding available and what you need to qualify.",
    category: "Funding",
    slug: "#",
  },
  {
    title: "Top 10 Credit Myths That Are Costing You Money",
    excerpt:
      "Closing old cards helps your score? Checking your credit lowers it? We debunk the most common credit myths.",
    category: "Credit Education",
    slug: "#",
  },
  {
    title: "Forex Trading Basics: What Every Beginner Needs to Know",
    excerpt:
      "An introduction to the forex market, currency pairs, pips, leverage, and how to get started with a demo account.",
    category: "Trading",
    slug: "#",
  },
  {
    title: "Prop Firm Guide: How to Get Funded Without Your Own Capital",
    excerpt:
      "Everything you need to know about prop firm challenges, rules, profit splits, and how to pass on your first try.",
    category: "Trading",
    slug: "#",
  },
];

const categoryColors: Record<string, string> = {
  "Credit Education": "text-blue-400",
  "Credit Repair": "text-green-400",
  Funding: "text-[var(--gold)]",
  Trading: "text-purple-400",
};

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
            Financial{" "}
            <span className="text-gold-gradient">Education Resources</span>
          </h1>
          <p className="text-[var(--muted)] text-lg leading-relaxed max-w-2xl mx-auto">
            Free guides, articles, and educational content to help you master
            credit, funding, and trading. Knowledge is the foundation of
            financial freedom.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="section">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="Latest Articles"
            title="Learn. Apply. Grow."
            subtitle="Practical, actionable content written by credit and trading professionals."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {articles.map((article) => (
              <div key={article.title} className="card flex flex-col">
                <p
                  className={`text-xs font-semibold uppercase tracking-widest mb-3 ${
                    categoryColors[article.category] || "text-[var(--muted)]"
                  }`}
                >
                  {article.category}
                </p>
                <h3 className="text-lg font-bold text-white mb-3 leading-tight">
                  {article.title}
                </h3>
                <p className="text-[var(--muted)] text-sm leading-relaxed mb-4 flex-1">
                  {article.excerpt}
                </p>
                <Link
                  href={article.slug}
                  className="text-[var(--gold)] text-sm font-semibold hover:underline"
                >
                  Read More &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free Guide CTA */}
      <section className="section bg-[var(--navy-dark)]">
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeading
            label="Free Download"
            title="Get the Credit Secrets Guide"
            subtitle="Our most popular resource — the exact strategies we use to remove negative items and boost scores. Free instant download."
          />
          <div className="mt-8">
            <Link href="/free-guide" className="btn-gold">
              Download Free Guide
            </Link>
          </div>
        </div>
      </section>

      <CTABanner
        title="Have Questions? Let's Talk."
        subtitle="Book a free consultation and get personalized advice for your credit, funding, or trading goals."
        ctaText="Book Free Consultation"
        ctaHref="/consultation"
      />
    </>
  );
}
