import SectionHeading from "@/components/SectionHeading";
import CTABanner from "@/components/CTABanner";

const values = [
  {
    icon: "🎯",
    title: "Mission",
    description:
      "To empower individuals and entrepreneurs to take control of their financial future through professional credit repair, strategic funding access, and market education.",
  },
  {
    icon: "🔭",
    title: "Vision",
    description:
      "A world where bad credit doesn't define your potential. We envision every person having the knowledge, tools, and credit profile to build generational wealth.",
  },
  {
    icon: "⚖️",
    title: "Values",
    description:
      "Transparency, results-driven service, and client education. We don't just fix your credit — we teach you how to keep it strong for life.",
  },
];

const team = [
  {
    name: "Founder",
    role: "CEO & Credit Strategist",
    description:
      "With years of experience in credit repair and financial services, our founder built TTR to make professional credit solutions accessible to everyone.",
  },
  {
    name: "Credit Team",
    role: "Dispute Specialists",
    description:
      "Our certified credit specialists handle disputes, bureau communications, and score optimization strategies for every client.",
  },
  {
    name: "Funding Team",
    role: "Funding Advisors",
    description:
      "Our funding advisors help clients navigate business credit cards, lines of credit, and capital access once their credit is optimized.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="section bg-[var(--navy-dark)]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[var(--gold)] font-semibold text-sm uppercase tracking-widest mb-4">
            Our Story
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Built by Someone Who{" "}
            <span className="text-gold-gradient">Lived It</span>
          </h1>
          <p className="text-[var(--muted)] text-lg leading-relaxed max-w-2xl mx-auto">
            Founder TTR was born from personal experience. After facing credit
            denials, funding rejections, and the frustration of a broken financial
            system, we decided to master the game — and help others do the same.
            Today, we help hundreds of clients repair their credit, access funding,
            and build real wealth through proven strategies.
          </p>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="section">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="Who We Are"
            title="More Than Credit Repair"
            subtitle="We're a full-service financial empowerment company. Credit repair is where we start — wealth building is where we're headed."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {values.map((v) => (
              <div key={v.title} className="card text-center">
                <div className="text-4xl mb-4">{v.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{v.title}</h3>
                <p className="text-[var(--muted)] text-sm leading-relaxed">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-[var(--navy-dark)]">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="Why Founder TTR"
            title="What Sets Us Apart"
            subtitle="We combine credit expertise, funding knowledge, and market education into one powerful platform."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {[
              {
                title: "Results-Driven Process",
                text: "We track every dispute, monitor every bureau response, and keep you updated on your progress every step of the way.",
              },
              {
                title: "Full Financial Ecosystem",
                text: "Credit repair, funding access, and trading education — everything you need to go from surviving to thriving.",
              },
              {
                title: "Personalized Strategy",
                text: "No cookie-cutter plans. Every client gets a custom roadmap based on their unique credit profile and financial goals.",
              },
              {
                title: "Education First",
                text: "We don't just fix your credit — we teach you how credit works so you stay in control forever.",
              },
            ].map((item) => (
              <div key={item.title} className="card">
                <h3 className="text-lg font-bold text-[var(--gold)] mb-2">
                  {item.title}
                </h3>
                <p className="text-[var(--muted)] text-sm leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="The Team"
            title="Experts Behind Your Results"
            subtitle="A dedicated team of credit specialists, funding advisors, and financial educators working for you."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {team.map((member) => (
              <div key={member.name} className="card text-center">
                <div className="w-20 h-20 rounded-full bg-[var(--navy)] border-2 border-[var(--gold)] mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-[var(--gold)]">
                    {member.name[0]}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white">{member.name}</h3>
                <p className="text-[var(--gold)] text-sm mb-3">{member.role}</p>
                <p className="text-[var(--muted)] text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Transform Your Financial Future?"
        subtitle="Book a free consultation and let's build your custom credit repair and funding strategy."
        ctaText="Get Started"
        ctaHref="/consultation"
      />
    </>
  );
}
