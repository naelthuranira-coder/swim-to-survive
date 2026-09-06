export default function TermsOfUse() {
  return (
    <div className="max-w-2xl mx-auto px-5 md:px-8 py-14 md:py-20">
      <p className="text-xs font-semibold text-teal uppercase tracking-wide">Legal</p>
      <h1 className="text-3xl md:text-4xl font-semibold text-deep mt-2">Terms of Use</h1>
      <p className="text-sm text-ink/45 mt-3">Effective September 6, 2026 &middot; Plain-language summary</p>

      <div className="mt-8 bg-foam rounded-2xl p-5 md:p-6">
        <p className="text-sm text-deep leading-relaxed">
          <span className="font-semibold">In short: </span>
          use this site to learn, share what helps, and keep your family
          safer around water. Don't copy our guides for commercial resale,
          and don't use anything here as your only safety measure.
        </p>
      </div>

      <div className="mt-10 space-y-8 text-ink/80 leading-relaxed">
        <section>
          <h2 className="font-semibold text-deep text-lg mb-2">1. Accepting these terms</h2>
          <p>
            By using Watersafe Hub, you agree to these terms. If any part
            of them doesn't sit right with you, the simplest option is to
            stop using the site.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-deep text-lg mb-2">2. Who this site is for</h2>
          <p>
            Watersafe Hub is written for parents, caregivers, and anyone
            teaching a child to swim or supervising them around water. It
            is not written for children to use unsupervised.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-deep text-lg mb-2">3. Using our content</h2>
          <p>
            You're welcome to read, print, and share our guides with your
            family, friends, or community for personal, non-commercial
            use. Please don't republish our articles as your own, resell
            them, or present them as official medical or lifesaving
            certification material.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-deep text-lg mb-2">4. Behaviour on the site</h2>
          <p>
            When you contact us, please keep messages respectful and
            honest. We may decline to respond to messages that are
            abusive, misleading, or unrelated to water safety.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-deep text-lg mb-2">5. No guarantees</h2>
          <p>
            We work hard to keep our guides accurate and useful, but we
            provide the site "as is," without guaranteeing that it will be
            error-free, uninterrupted, or suitable for every situation. See
            our{" "}
            <a href="/disclaimer" className="text-teal font-medium hover:text-deep">
              Disclaimer
            </a>{" "}
            for more on how to use our guidance safely.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-deep text-lg mb-2">6. Changes to these terms</h2>
          <p>
            We may update these terms as the site grows. We'll always
            update the effective date above when we do, and continued use
            of the site means you accept the current version.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-deep text-lg mb-2">7. Contact</h2>
          <p>
            Questions about these terms can go to{" "}
            <a href="mailto:nael.thuranira@akamom.org" className="text-teal font-medium hover:text-deep">
              nael.thuranira@akamom.org
            </a>{" "}
            or 0117 716 131.
          </p>
        </section>
      </div>
    </div>
  );
}
