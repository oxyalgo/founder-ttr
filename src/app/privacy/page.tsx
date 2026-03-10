import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Founder TTR",
  description:
    "Founder TTR privacy policy. How we collect, use, and protect your personal information for credit repair, funding, and trading services.",
};

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
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8 text-[var(--muted)] text-sm leading-relaxed">
            <div>
              <h2 className="text-xl font-bold text-white mb-3">
                1. Information We Collect
              </h2>
              <p className="mb-3">
                When you use Founder TTR&apos;s services, we may collect:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong className="text-white">Personal Information:</strong>{" "}
                  Name, email, phone number, and mailing address when you fill
                  out forms or book consultations.
                </li>
                <li>
                  <strong className="text-white">Credit Information:</strong>{" "}
                  Credit score ranges and report details you share for credit
                  repair services.
                </li>
                <li>
                  <strong className="text-white">Trading Information:</strong>{" "}
                  Account details you share for trading service setup and
                  configuration.
                </li>
                <li>
                  <strong className="text-white">Usage Data:</strong> IP
                  address, browser type, pages visited, and time on site via
                  cookies and analytics.
                </li>
                <li>
                  <strong className="text-white">Payment Information:</strong>{" "}
                  Billing details processed through secure third-party payment
                  processors. We do not store card numbers.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">
                2. How We Use Your Information
              </h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>To provide credit repair, funding, and trading services</li>
                <li>To communicate about your account and services</li>
                <li>To send marketing communications (with your consent)</li>
                <li>To improve our website and services</li>
                <li>To comply with legal obligations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">
                3. Data Protection
              </h2>
              <p>
                We use industry-standard security measures including SSL
                encryption, secure storage, and access controls. No method of
                internet transmission is 100% secure.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">
                4. Third-Party Sharing
              </h2>
              <p className="mb-3">
                We do not sell your personal information. We may share with:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Credit bureaus and creditors for dispute processing</li>
                <li>Trading platform providers for account setup</li>
                <li>Service providers (payment processors, email services)</li>
                <li>Law enforcement when required by law</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">
                5. Your Rights
              </h2>
              <p>You have the right to:</p>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>Access your personal data</li>
                <li>Request correction of wrong information</li>
                <li>Request deletion of your data</li>
                <li>Opt out of marketing communications</li>
                <li>Withdraw consent for data processing</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">
                6. Contact Us
              </h2>
              <p>
                Questions about this policy? Contact us at{" "}
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
