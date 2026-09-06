export default function Disclaimer() {
  return (
    <div className="max-w-2xl mx-auto px-5 md:px-8 py-14 md:py-20">
      <p className="text-xs font-semibold text-teal uppercase tracking-wide">Legal</p>
      <h1 className="text-3xl md:text-4xl font-semibold text-deep mt-2">Disclaimer</h1>
      <p className="text-sm text-ink/45 mt-3">Effective September 6, 2026 &middot; Plain-language summary</p>

      <div className="mt-8 bg-foam rounded-2xl p-5 md:p-6">
        <p className="text-sm text-deep leading-relaxed">
          <span className="font-semibold">In short: </span>
          everything on Watersafe Hub is for learning and general
          guidance only. It is not a substitute for a certified swim
          instructor, a lifeguard, or your own judgement in the water.
          Always supervise children closely.
        </p>
      </div>

      <div className="mt-10 space-y-8 text-ink/80 leading-relaxed">
        <section>
          <h2 className="font-semibold text-deep text-lg mb-2">1. This site is educational, not instructional certification</h2>
          <p>
            The guides, tips, and articles on Watersafe Hub ("we," "us," or
            "the site") explain ideas and steps in plain language so parents
            can teach their own children. They are not a certified swim
            course, and finishing a guide does not mean a child is a fully
            trained or "safe" swimmer.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-deep text-lg mb-2">2. We do our best, but we can't promise perfection</h2>
          <p>
            We write every guide carefully and check our facts, including
            the statistics we quote from public health organisations. Even
            so, we can't guarantee that every detail is complete, current,
            or free of error, and we don't take responsibility for outcomes
            based on how the information is used.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-deep text-lg mb-2">3. Water always carries risk</h2>
          <p>
            No guide can remove the real risks of swimming pools, bathtubs,
            rivers, lakes, or the sea. Following our steps does not
            eliminate the chance of an accident. If you are not a confident
            swimmer yourself, please arrange certified lessons for your
            child instead of teaching alone.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-deep text-lg mb-2">4. Links to other websites</h2>
          <p>
            Where we link to outside organisations or videos, we don't
            control their content and aren't responsible for what they
            publish or how it changes after we link to it.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-deep text-lg mb-2">5. Questions about this disclaimer</h2>
          <p>
            Reach out any time at{" "}
            <a href="mailto:nael.thuranira@akamom.org" className="text-teal font-medium hover:text-deep">
              nael.thuranira@akamom.org
            </a>{" "}
            or 0117 716 131, and we'll be glad to explain anything on this
            page in more detail.
          </p>
        </section>
      </div>
    </div>
  );
}
