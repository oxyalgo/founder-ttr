export default function PrivacyPage() {
  return (
    <>
      <section className="section bg-[var(--navy-dark)]">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-[var(--muted)]">Last updated: March 2026</p>
        </div>
      </section>

      <section className="section">
        <div className="max-w-3xl mx-auto prose-sm">
          <div className="space-y-8 text-[var(--muted)] text-sm leading-relaxed">
            <div>
              <h2 className="text-xl font-bold text-white mb-3">
                1. Information We Collect
              </h2>
              <p className="mb-3">
                When you use Founder TTR&apos;s services, we may collect the
                following information:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong className="text-white">Personal Information:</strong>{" "}
                  Name, email address, phone number, and mailing address when
                  you fill out forms or book consultations.
                </li>
                <li>
                  <strong className="text-white">Credit Information:</strong>{" "}
                  Credit score ranges and credit report details you voluntarily
                  share for the purpose of credit repair services.
                </li>
                <li>
                  <strong className="text-white">Usage Data:</strong> IP
                  address, browser type, pages visited, and time spent on our
                  site collected through cookies and analytics tools.
                </li>
                <li>
                  <strong className="text-white">Payment Information:</strong>{" "}
                  Billing details processed through secure third-party payment
                  processors. We do not store credit card numbers directly.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">
                2. How We Use Your Information
              </h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  To provide credit repair, funding assistance, and educational
                  services
                </li>
                <li>To communicate with you about your account and services</li>
                <li>To send marketing communications (with your consent)</li>
                <li>
                  To improve our website, services, and customer experience
                </li>
                <li>To comply with legal obligations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">
                3. Data Protection
              </h2>
              <p>
                We implement industry-standard security measures to protect your
                personal information, including SSL encryption, secure data
                storage, and access controls. However, no method of transmission
                over the Internet is 100% secure, and we cannot guarantee
                absolute security.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">
                4. Third-Party Sharing
              </h2>
              <p className="mb-3">
                We do not sell your personal information. We may share
                information with:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Credit bureaus and creditors as part of the dispute process
                  (with your authorization)
                </li>
                <li>
                  Service providers who assist in operating our business (payment
                  processors, email services)
                </li>
                <li>Law enforcement when required by law</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">
                5. Cookies & Tracking
              </h2>
              <p>
                We use cookies and similar technologies to analyze website
                traffic, personalize content, and improve user experience. You
                can manage cookie preferences through your browser settings.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">
                6. Your Rights
              </h2>
              <p>You have the right to:</p>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>Access the personal data we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal data</li>
                <li>Opt out of marketing communications at any time</li>
                <li>Withdraw consent for data processing</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">
                7. Data Retention
              </h2>
              <p>
                We retain your personal information for as long as necessary to
                provide our services and comply with legal obligations.
                Typically, client records are retained for 7 years after the
                conclusion of services.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">
                8. Children&apos;s Privacy
              </h2>
              <p>
                Our services are not directed to individuals under 18 years of
                age. We do not knowingly collect personal information from
                children.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">
                9. Changes to This Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. Changes
                will be posted on this page with an updated revision date. Your
                continued use of our services constitutes acceptance of any
                changes.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">
                10. Contact Us
              </h2>
              <p>
                If you have questions about this Privacy Policy or your personal
                data, contact us at{" "}
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
