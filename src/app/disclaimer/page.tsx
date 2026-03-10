import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer | Founder TTR",
  description:
    "Important disclaimers for Founder TTR credit repair, funding assistance, and AI trading services. Read before using our services.",
};

export default function DisclaimerPage() {
  return (
    <>
      <section className="section bg-[var(--navy-dark)]">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Disclaimer
          </h1>
          <p className="text-[var(--muted)]">
            Credit Repair, Funding & Trading Disclaimer
          </p>
        </div>
      </section>

      <section className="section">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8 text-[var(--muted)] text-sm leading-relaxed">
            <div className="card border-yellow-600/30">
              <h2 className="text-xl font-bold text-yellow-500 mb-3">
                Important Notice
              </h2>
              <p>
                Please read this disclaimer carefully before using any of
                Founder TTR&apos;s services. By using our website or services,
                you acknowledge that you have read and understood these terms.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">
                Credit Repair Disclaimer
              </h2>
              <p className="mb-3">
                <strong className="text-white">
                  We do not guarantee results.
                </strong>{" "}
                Credit repair results vary by individual. No company can
                guarantee the removal of accurate, verified information from
                your credit report.
              </p>
              <p className="mb-3">
                Founder TTR exercises your legal rights under the Fair Credit
                Reporting Act (FCRA) to dispute inaccurate, incomplete, or
                unverifiable information. Results depend on individual
                circumstances.
              </p>
              <p>
                Testimonials reflect individual experiences and are not
                representative of all client results.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">
                Funding Disclaimer
              </h2>
              <p className="mb-3">
                Founder TTR is not a lender, bank, or financial institution.
                We provide guidance in applying for funding products from
                third-party lenders.
              </p>
              <p>
                Approval is determined by the issuing lender. We cannot
                guarantee approval, specific credit limits, or interest rates.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">
                Trading & Investment Disclaimer
              </h2>
              <p className="mb-3">
                <strong className="text-white">
                  Trading involves significant risk of loss.
                </strong>{" "}
                Forex, commodities, indices, and cryptocurrency trading carry a
                high level of risk. You could lose some or all of your invested
                capital.
              </p>
              <p className="mb-3">
                <strong className="text-white">
                  This is not financial advice.
                </strong>{" "}
                All content, signals, strategies, and educational materials from
                Founder TTR and its partners (including OXY ALGO) are for
                informational and educational purposes only. Nothing constitutes
                personalized financial or investment advice.
              </p>
              <p className="mb-3">
                <strong className="text-white">
                  Past performance does not guarantee future results.
                </strong>{" "}
                Any trading results, signals, or performance data shown are
                historical. Markets are unpredictable.
              </p>
              <p className="mb-3">
                <strong className="text-white">
                  AI trading is not risk-free.
                </strong>{" "}
                While our AI uses risk controls (2% max per trade, stop losses,
                circuit breakers), losses can and do occur. Automated systems
                can malfunction. Technology has limitations.
              </p>
              <p className="mb-3">
                <strong className="text-white">
                  Prop firm challenges are not guaranteed.
                </strong>{" "}
                Using AI to attempt prop firm challenges does not guarantee
                passing. Challenge fees are non-refundable and paid to
                third-party prop firms, not to Founder TTR.
              </p>
              <p>
                Do not trade with money you cannot afford to lose. Always do
                your own research. Consult a licensed financial advisor before
                making investment decisions.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">
                General Disclaimer
              </h2>
              <p>
                Information on this website is for general informational
                purposes only. We make no warranties about completeness,
                accuracy, or reliability. Reliance on this information is at
                your own risk.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">Contact</h2>
              <p>
                Questions about this disclaimer? Contact us at{" "}
                <a
                  href="mailto:support@founderttr.com"
                  className="text-[var(--gold)] hover:underline"
                >
                  support@founderttr.com
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
