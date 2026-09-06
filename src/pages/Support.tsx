import { Link } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";

export default function Support() {
  const shareUrl = typeof window !== "undefined" ? window.location.origin : "";

  async function handleShare() {
    const shareData = {
      title: "Watersafe Hub",
      text: "Free, step-by-step swim safety guides for parents.",
      url: shareUrl,
    };
    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch {
        // user cancelled — nothing to do
      }
    } else if (navigator.clipboard) {
      await navigator.clipboard.writeText(shareUrl);
      alert("Link copied to clipboard!");
    }
  }

  return (
    <div className="max-w-3xl mx-auto px-5 md:px-8 py-14 md:py-20">
      <SectionHeading
        title="Support my guide"
        lede="This project is free for every family, and it stays that way through people who help it reach more parents. Here's how you can support the guide."
      />

      <div className="mt-12 grid sm:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-teal/15 p-6 bg-sand">
          <h3 className="font-semibold text-deep">Share it with a parent</h3>
          <p className="text-sm text-ink/65 mt-2 leading-relaxed">
            The single most useful thing you can do is send the guides to a parent who
            needs them right now.
          </p>
          <button
            type="button"
            onClick={handleShare}
            className="mt-4 bg-teal text-sand font-semibold px-5 py-2.5 rounded-full text-sm hover:bg-deep transition-colors"
          >
            Share this site
          </button>
        </div>

        <div className="rounded-2xl border border-teal/15 p-6 bg-sand">
          <h3 className="font-semibold text-deep">Tell us what's missing</h3>
          <p className="text-sm text-ink/65 mt-2 leading-relaxed">
            Guides get better with real feedback from parents actually using them in
            the pool. Tell us what worked and what didn't.
          </p>
          <Link
            to="/contact"
            className="mt-4 inline-block border-2 border-teal/30 text-deep font-semibold px-5 py-2.5 rounded-full text-sm hover:border-teal transition-colors"
          >
            Send feedback
          </Link>
        </div>

        <div className="rounded-2xl border border-teal/15 p-6 bg-sand">
          <h3 className="font-semibold text-deep">Partner with us</h3>
          <p className="text-sm text-ink/65 mt-2 leading-relaxed">
            Run a pool, swim school, or community programme? Get in touch about
            featuring your venue or contributing a guide.
          </p>
          <Link
            to="/contact"
            className="mt-4 inline-block border-2 border-teal/30 text-deep font-semibold px-5 py-2.5 rounded-full text-sm hover:border-teal transition-colors"
          >
            Get in touch
          </Link>
        </div>

        <div className="rounded-2xl border border-teal/15 p-6 bg-sand">
          <h3 className="font-semibold text-deep">Volunteer a guide</h3>
          <p className="text-sm text-ink/65 mt-2 leading-relaxed">
            Certified instructors and lifeguards are welcome to propose new
            step-by-step guides for the site.
          </p>
          <Link
            to="/contact"
            className="mt-4 inline-block border-2 border-teal/30 text-deep font-semibold px-5 py-2.5 rounded-full text-sm hover:border-teal transition-colors"
          >
            Propose a guide
          </Link>
        </div>
      </div>

      <div className="mt-12 border-l-4 border-gold bg-gold/10 rounded-r-xl px-5 py-4">
        <p className="text-sm text-deep leading-relaxed">
          <span className="font-semibold">Thank you. </span>
          Every share and every piece of feedback helps this stay free and useful for
          the next family that finds it.
        </p>
      </div>
    </div>
  );
}
