import { Link } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";
import UsDrowningMap from "../components/UsDrowningMap";
import WorldRegionsMap from "../components/WorldRegionsMap";
import { headlineStats, regionalRates, ageRisk, dataSources } from "../data/stats";

function BarList({
  data,
  valueSuffix = "",
}: {
  data: { label: string; value: number }[];
  valueSuffix?: string;
}) {
  const max = Math.max(...data.map((d) => d.value));
  return (
    <div className="space-y-4">
      {data.map((d) => (
        <div key={d.label}>
          <div className="flex items-baseline justify-between text-sm mb-1.5">
            <span className="text-deep font-medium">{d.label}</span>
            <span className="text-ink/50 text-xs">
              relative index {d.value}
              {valueSuffix}
            </span>
          </div>
          <div className="h-3 rounded-full bg-teal/10 overflow-hidden">
            <div
              className="h-full rounded-full bg-teal"
              style={{ width: `${(d.value / max) * 100}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Statistics() {
  const shareUrl = typeof window !== "undefined" ? window.location.href : "";

  async function handleShare() {
    const shareData = {
      title: "Water safety statistics — Watersafe Hub",
      text: "The numbers behind water safety, and what actually helps.",
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

  function handleDownloadPdf() {
    window.print();
  }

  return (
    <div className="max-w-4xl mx-auto px-5 md:px-8 py-14 md:py-20 text-ink">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <SectionHeading
          title="The numbers behind water safety"
          lede="These figures are hard to read. That's the point — they're also the reason a short guide, followed consistently, saves lives."
        />
        <div className="no-print flex gap-3 shrink-0">
          <button
            type="button"
            onClick={handleShare}
            className="bg-teal text-sand font-semibold px-5 py-2.5 rounded-full text-sm hover:bg-deep transition-colors"
          >
            Share
          </button>
          <button
            type="button"
            onClick={handleDownloadPdf}
            className="border-2 border-teal/30 text-deep font-semibold px-5 py-2.5 rounded-full text-sm hover:border-teal transition-colors"
          >
            Download PDF
          </button>
        </div>
      </div>

      <div className="mt-10 grid sm:grid-cols-2 gap-6">
        {headlineStats.map((s) => (
          <div key={s.label} className="border border-teal/15 rounded-2xl p-6 bg-sand">
            <div className="text-3xl font-display font-semibold text-gold-dark">{s.value}</div>
            <p className="mt-3 text-sm text-ink/75 leading-relaxed">{s.label}</p>
            <p className="mt-3 text-xs text-ink/45">{s.source}</p>
          </div>
        ))}
      </div>

      <div className="mt-14">
        <h2 className="font-semibold text-deep text-lg mb-1">Explore the data map</h2>
        <p className="text-sm text-ink/55 mb-6">
          Each state is shaded by its age-adjusted drowning death rate — darker means more
          deaths per 100,000 people. Hover or tap a state for the exact number, and use +/− to
          zoom in on the detail.
        </p>
        <UsDrowningMap />
      </div>

      <div className="mt-14">
        <h2 className="font-semibold text-deep text-lg mb-1">
          Drowning rate by WHO region
        </h2>
        <p className="text-sm text-ink/55 mb-6">
          Shown as a relative index (highest region = 100) rather than raw rates, so the
          gap between regions is easy to see at a glance. Tap or hover a region on the map,
          or scan the bars below for the same numbers.
        </p>
        <WorldRegionsMap />
        <div className="mt-8">
          <BarList data={regionalRates.map((r) => ({ label: r.label, value: r.value }))} />
        </div>
        <p className="text-xs text-ink/40 mt-4">Source: WHO Global Report on Drowning, regional data.</p>
      </div>

      <div className="mt-14">
        <h2 className="font-semibold text-deep text-lg mb-1">Risk by child age group</h2>
        <p className="text-sm text-ink/55 mb-6">
          Toddlers and young children carry the highest relative risk — most home and
          backyard pool drownings happen in this age band.
        </p>
        <BarList data={ageRisk.map((r) => ({ label: r.label, value: r.value }))} />
        <p className="text-xs text-ink/40 mt-4">Source: US CDC childhood drowning data.</p>
      </div>

      <div className="mt-14 border-l-4 border-gold bg-gold/10 rounded-r-xl px-5 py-4">
        <p className="text-sm text-deep leading-relaxed">
          <span className="font-semibold">What actually helps: </span>
          close, dedicated supervision, formal swim instruction, fenced pools with
          self-latching gates, and life jackets in open water are the interventions
          with the strongest evidence behind them.
        </p>
      </div>

      <div className="mt-14 pt-8 border-t border-teal/10">
        <h2 className="font-semibold text-deep text-lg mb-4">Data sources</h2>
        <ul className="space-y-3">
          {dataSources.map((s) => (
            <li key={s.name} className="text-sm">
              <a
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-teal hover:text-deep underline underline-offset-2"
              >
                {s.name}
              </a>
              <p className="text-ink/55 mt-0.5">{s.detail}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-10 no-print flex flex-wrap gap-4">
        <Link
          to="/guides"
          className="bg-teal text-sand font-semibold px-6 py-3.5 rounded-full hover:bg-deep transition-colors"
        >
          Start a swim guide
        </Link>
        <Link
          to="/blog"
          className="border-2 border-teal/30 text-deep font-semibold px-6 py-3.5 rounded-full hover:border-teal transition-colors"
        >
          Read more safety tips
        </Link>
      </div>
    </div>
  );
}
