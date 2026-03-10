export default function DisclaimerPage() {
  return (
    <>
      <section className="section bg-[var(--navy-dark)]">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Disclaimer
          </h1>
          <p className="text-[var(--muted)]">
            Credit Repair & Trading Education Disclaimer
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
                Founder TTR&apos;s services. By using our website or engaging
                our services, you acknowledge that you have read, understood,
                and agreed to the following terms.
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
                Credit repair results vary depending on individual circumstances,
                the nature and age of negative items, and credit bureau
                responses. No credit repair company can guarantee the removal of
                accurate, verifiable information from your credit report.
              </p>
              <p className="mb-3">
                Founder TTR exercises your legal rights under the Fair Credit
                Reporting Act (FCRA) to dispute inaccurate, incomplete, or
                unverifiable information on your credit reports. The bureaus are
                required by law to investigate disputes — but the outcome depends
                on the specific circumstances of each item.
              </p>
              <p>
                Any testimonials or success stories displayed on this website
                reflect individual experiences and are not representative of all
                client results. Your results may be better or worse than those
                described.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">
                Funding Disclaimer
              </h2>
              <p className="mb-3">
                Founder TTR is not a lender, bank, or financial institution. We
                provide guidance and support in helping clients apply for
                business credit cards, lines of credit, and other funding
                products from third-party lenders.
              </p>
              <p>
                Approval for funding products is determined solely by the
                issuing lender based on their underwriting criteria. We cannot
                guarantee approval, specific credit limits, or interest rates.
                Individual results depend on creditworthiness, income, and
                other factors determined by the lender.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">
                Trading Education Disclaimer
              </h2>
              <p className="mb-3">
                <strong className="text-white">
                  Trading involves significant risk of loss.
                </strong>{" "}
                Forex, commodities, indices, and cryptocurrency trading carry a
                high level of risk and may not be suitable for all investors.
                You could lose some or all of your invested capital.
              </p>
              <p className="mb-3">
                <strong className="text-white">
                  This is education only, not financial advice.
                </strong>{" "}
                All content, signals, strategies, and educational materials
                provided by Founder TTR and its partners (including OXY ALGO)
                are for informational and educational purposes only. Nothing on
                this website or in our programs constitutes personalized
                financial advice, investment advice, or a recommendation to buy
                or sell any financial instrument.
              </p>
              <p className="mb-3">
                <strong className="text-white">
                  Past performance does not guarantee future results.
                </strong>{" "}
                Any trading results, backtests, signals, or performance data
                shown are historical and do not indicate future profitability.
                Markets are inherently unpredictable.
              </p>
              <p>
                You should not trade with money you cannot afford to lose.
                Always do your own research and consult a licensed financial
                advisor before making any investment decisions.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">
                General Disclaimer
              </h2>
              <p className="mb-3">
                The information provided on this website is for general
                informational purposes only. While we strive to keep the
                information accurate and up to date, we make no representations
                or warranties of any kind, express or implied, about the
                completeness, accuracy, reliability, or suitability of the
                information.
              </p>
              <p>
                Any reliance you place on information from this website is
                strictly at your own risk. Founder TTR will not be liable for
                any loss or damage arising from your use of this website or our
                services.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">
                Contact
              </h2>
              <p>
                If you have questions about this disclaimer, please contact us
                at{" "}
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
