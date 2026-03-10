import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Founder TTR",
  description:
    "Founder TTR terms of service for credit repair, funding assistance, and AI trading services.",
};

export default function TermsPage() {
  return (
    <>
      <section className="section bg-[var(--navy-dark)]">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Terms of Service
          </h1>
          <p className="text-[var(--muted)]">Last updated: March 2026</p>
        </div>
      </section>

      <section className="section">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8 text-[var(--muted)] text-sm leading-relaxed">
            <div>
              <h2 className="text-xl font-bold text-white mb-3">
                1. Acceptance of Terms
              </h2>
              <p>
                By using Founder TTR&apos;s website and services, you agree to
                these Terms of Service. If you do not agree, do not use our
                services.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">
                2. Services Provided
              </h2>
              <p className="mb-3">Founder TTR provides:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong className="text-white">Credit Repair:</strong>{" "}
                  Disputing inaccurate information on credit reports with bureaus
                  and creditors on your behalf.
                </li>
                <li>
                  <strong className="text-white">Funding Assistance:</strong>{" "}
                  Guidance in accessing business credit cards, loans, and other
                  funding products.
                </li>
                <li>
                  <strong className="text-white">AI Trading Services:</strong>{" "}
                  Access to AI-powered trading signals and automated execution
                  through our technology partner OXY ALGO.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">
                3. No Guarantees
              </h2>
              <p>
                Founder TTR does not guarantee specific credit score increases,
                removal of any particular item, approval of funding, or trading
                profits. Results vary based on individual circumstances. Past
                results are not indicative of future outcomes.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">
                4. Payment Terms
              </h2>
              <p>
                Fees are disclosed before enrollment. Monthly subscriptions are
                billed on a recurring basis until cancelled. Refund policies are
                outlined in your service agreement.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">
                5. Cancellation
              </h2>
              <p>
                You may cancel at any time by contacting support. Cancellation
                takes effect at the end of the current billing period. No refunds
                for partial months.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">
                6. Trading Risk Acknowledgment
              </h2>
              <p>
                Trading involves significant risk of loss. By using our trading
                services, you acknowledge that you understand these risks and
                that past performance does not guarantee future results. You
                should not trade with money you cannot afford to lose.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">
                7. Limitation of Liability
              </h2>
              <p>
                To the maximum extent permitted by law, Founder TTR shall not be
                liable for any indirect, incidental, special, or consequential
                damages. Our total liability shall not exceed the amount you paid
                in the 12 months preceding the claim.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">
                8. Contact
              </h2>
              <p>
                Questions about these Terms? Contact us at{" "}
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
