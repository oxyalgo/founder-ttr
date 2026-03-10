import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import ScrollReveal from "@/components/ScrollReveal";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "About Founder TTR | Our Story",
  description:
    "A credit repair expert who discovered trading automation. Now we help everyday people fix their credit, get funded, and let AI grow their money.",
  openGraph: {
    title: "About Founder TTR | Our Story",
    description:
      "From credit repair to AI trading. The founder story behind the Flywheel.",
  },
};

const values = [
  {
    title: "Discipline",
    description:
      "We follow the process. No shortcuts. No magic fixes. Just proven steps that work every time.",
  },
  {
    title: "Transparency",
    description:
      "You see everything. Every dispute. Every trade. Every number. No hidden fees. No fine print games.",
  },
  {
    title: "Simplicity",
    description:
      "We keep it simple. You should not need a finance degree to fix your credit or make money trading.",
  },
  {
    title: "Results",
    description:
      "Talk is cheap. We measure everything. If it does not move the needle, we do not do it.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="section bg-[var(--navy-dark)] relative overflow-hidden">
        <div className="glow-orb glow-orb-gold w-72 h-72 top-0 right-0" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-[var(--gold)] font-semibold text-sm uppercase tracking-widest mb-4">
            Our Story
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Built by Someone Who{" "}
            <span className="text-gold-gradient">Lived It</span>
          </h1>
          <p className="text-[var(--muted)] text-lg leading-relaxed max-w-2xl mx-auto">
            Bad credit. Denied loans. No way to grow. The founder of TTR
            went through it all. Then he fixed his credit. Got funded. Discovered
            trading automation. And built a system so others never have to struggle
            the same way.
          </p>
        </div>
      </section>

      {/* The Story */}
      <ScrollReveal>
        <section className="section">
          <div className="max-w-3xl mx-auto">
            <SectionHeading
              label="The Beginning"
              title="From Denied to Funded"
            />
            <div className="space-y-6 mt-8 text-[var(--muted)] leading-relaxed">
              <p>
                It started with a credit card denial. Then a loan rejection. Then
                another. The founder had ideas. He had drive. But his credit score
                was a wall he could not climb.
              </p>
              <p>
                So he learned. He studied the Fair Credit Reporting Act. He learned
                how disputes work. He fixed his own credit. His score went up over
                200 points in 6 months.
              </p>
              <p>
                With better credit, funding doors opened. Business credit cards.
                Lines of credit. Real capital. But he did not stop there.
              </p>
              <p>
                He discovered algorithmic trading. AI that scans the markets and
                finds trades. He used his funding to enter the markets. And it
                worked. The money grew.
              </p>
              <p className="text-white font-semibold">
                That is when the Flywheel was born. Fix credit. Get funded. Trade
                with AI. Make money. Repeat.
              </p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Mission */}
      <ScrollReveal>
        <section className="section bg-[var(--navy-dark)]">
          <div className="max-w-4xl mx-auto text-center">
            <SectionHeading
              label="The Mission"
              title="Help Everyday People Build Real Income"
              subtitle="You should not need to be rich to grow your money. You just need the right system."
            />
            <div className="card-3d mt-10 max-w-2xl mx-auto">
              <p className="text-[var(--muted)] leading-relaxed">
                Most people think credit repair and trading are two different worlds.
                We connected them. Fix your credit. Use it to get funded. Put that
                money into the markets with AI doing the heavy lifting. Each step
                feeds the next. That is our mission. To give everyone access to this
                system.
              </p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Values */}
      <ScrollReveal>
        <section className="section">
          <div className="max-w-7xl mx-auto">
            <SectionHeading
              label="What We Stand For"
              title="Our Values"
              subtitle="Four principles guide everything we do."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {values.map((v, i) => (
                <ScrollReveal key={v.title} delay={i * 100}>
                  <div className="card text-center h-full">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--gold-light)] to-[var(--gold-dark)] flex items-center justify-center mx-auto mb-4">
                      <span className="text-[var(--background)] font-bold">
                        {i + 1}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3">
                      {v.title}
                    </h3>
                    <p className="text-[var(--muted)] text-sm leading-relaxed">
                      {v.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Flywheel Simple */}
      <ScrollReveal>
        <section className="section bg-[var(--navy-dark)]">
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeading
              label="The System"
              title="The Flywheel in 30 Seconds"
            />
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Step 1: We fix your credit score",
                "Step 2: You get approved for funding",
                "Step 3: You fund a trading account",
                "Step 4: Our AI trades the markets for you",
                "Step 5: You make money",
                "Step 6: You repeat with more capital",
              ].map((step, i) => (
                <div key={i} className="card text-left">
                  <p className="text-sm text-white font-medium">{step}</p>
                </div>
              ))}
            </div>
            <p className="text-[var(--muted)] text-sm mt-8">
              Each step makes the next step stronger. That is the Flywheel.
            </p>
          </div>
        </section>
      </ScrollReveal>

      <CTABanner
        headline="Ready to Start?"
        subtext="Book a free call. We will map out your credit, funding, and trading plan. No pressure."
        buttonText="Book Free Consultation"
        buttonHref="/consultation"
      />
    </>
  );
}
