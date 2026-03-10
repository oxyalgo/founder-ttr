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
                By accessing or using Founder TTR&apos;s website and services,
                you agree to be bound by these Terms of Service. If you do not
                agree to these terms, please do not use our services.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">
                2. Services Provided
              </h2>
              <p className="mb-3">Founder TTR provides:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong className="text-white">Credit Repair Services:</strong>{" "}
                  Disputing inaccurate, incomplete, or unverifiable information
                  on credit reports with credit bureaus and creditors on your
                  behalf.
                </li>
                <li>
                  <strong className="text-white">Funding Assistance:</strong>{" "}
                  Guidance and support in accessing business credit cards, lines
                  of credit, and other funding products.
                </li>
                <li>
                  <strong className="text-white">Trading Education:</strong>{" "}
                  Educational content and resources about forex trading,
                  financial markets, and investment strategies.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">
                3. Client Responsibilities
              </h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>Provide accurate and complete information</li>
                <li>
                  Respond to communications in a timely manner
                </li>
                <li>
                  Not use our services for any unlawful purpose
                </li>
                <li>
                  Maintain the confidentiality of your account information
                </li>
                <li>
                  Notify us promptly of any changes to your personal information
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">
                4. No Guarantees
              </h2>
              <p>
                Founder TTR does not guarantee specific credit score increases,
                removal of any particular item from credit reports, or approval
                of funding applications. Results vary based on individual
                circumstances. Past client results are not indicative of future
                outcomes.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">
                5. Payment Terms
              </h2>
              <p>
                Fees for services are disclosed before enrollment. Monthly
                subscription fees are billed on a recurring basis until
                cancelled. Refund policies are outlined in your service
                agreement. Late or failed payments may result in service
                suspension.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">
                6. Cancellation Policy
              </h2>
              <p>
                You may cancel your services at any time by contacting our
                support team. Cancellation takes effect at the end of the
                current billing period. No refunds will be issued for partial
                months of service.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">
                7. Intellectual Property
              </h2>
              <p>
                All content on this website, including text, graphics, logos,
                images, videos, and educational materials, is the property of
                Founder TTR and is protected by copyright and other intellectual
                property laws. You may not reproduce, distribute, or create
                derivative works without our written consent.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">
                8. Limitation of Liability
              </h2>
              <p>
                To the maximum extent permitted by law, Founder TTR shall not be
                liable for any indirect, incidental, special, consequential, or
                punitive damages arising from or related to your use of our
                services. Our total liability shall not exceed the amount you
                paid for services in the 12 months preceding the claim.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">
                9. Dispute Resolution
              </h2>
              <p>
                Any disputes arising from these Terms or our services shall be
                resolved through binding arbitration in accordance with the rules
                of the American Arbitration Association. You agree to waive any
                right to participate in a class action lawsuit.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">
                10. Modifications
              </h2>
              <p>
                Founder TTR reserves the right to modify these Terms at any
                time. Changes will be posted on this page. Continued use of our
                services after changes constitutes acceptance of the modified
                terms.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">
                11. Contact
              </h2>
              <p>
                For questions about these Terms of Service, contact us at{" "}
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
