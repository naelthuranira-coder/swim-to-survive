export default function PrivacyPolicy() {
  return (
    <div className="max-w-2xl mx-auto px-5 md:px-8 py-14 md:py-20">
      <p className="text-xs font-semibold text-teal uppercase tracking-wide">Legal</p>
      <h1 className="text-3xl md:text-4xl font-semibold text-deep mt-2">Privacy Policy</h1>
      <p className="text-sm text-ink/45 mt-3">Effective September 6, 2026 &middot; Plain-language summary</p>

      <div className="mt-8 bg-foam rounded-2xl p-5 md:p-6">
        <p className="text-sm text-deep leading-relaxed">
          <span className="font-semibold">In short: </span>
          we only collect what you choose to give us — like your name and
          email if you use the contact form. We never sell your
          information, and this site is not intended for children under 13
          to use on their own.
        </p>
      </div>

      <div className="mt-10 space-y-8 text-ink/80 leading-relaxed">
        <section>
          <h2 className="font-semibold text-deep text-lg mb-2">1. What we collect</h2>
          <p>
            The only personal details we collect are the ones you type into
            our contact form — typically your name, email address, and
            message. We don't require an account, and you can browse every
            guide and post without giving us any information at all.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-deep text-lg mb-2">2. Why we collect it</h2>
          <p>
            We use contact form details for one reason only: to reply to
            your question, suggestion, or correction. We don't use it for
            marketing, and we don't share it with advertisers.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-deep text-lg mb-2">3. Children's privacy</h2>
          <p>
            Watersafe Hub is written for parents and caregivers, not for
            children browsing on their own. We do not knowingly collect
            personal information from anyone under 13. If you believe a
            child has sent us information without a parent's involvement,
            please contact us and we will remove it.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-deep text-lg mb-2">4. Third-party content</h2>
          <p>
            Some pages embed a video hosted by a third party (such as
            YouTube), which may set its own cookies according to its own
            privacy policy once you press play. We don't control those
            cookies and encourage you to review that provider's policy if
            you have questions.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-deep text-lg mb-2">5. How to reach us about your data</h2>
          <p>
            To ask what information we hold about you, or to have it
            deleted, email{" "}
            <a href="mailto:nael.thuranira@akamom.org" className="text-teal font-medium hover:text-deep">
              nael.thuranira@akamom.org
            </a>{" "}
            or call 0117 716 131. We'll respond as quickly as we can.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-deep text-lg mb-2">6. Changes to this policy</h2>
          <p>
            If we ever change how we handle information, we'll update the
            effective date at the top of this page so it's easy to see
            what's changed.
          </p>
        </section>
      </div>
    </div>
  );
}
