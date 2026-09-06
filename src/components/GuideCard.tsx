import { Link } from "react-router-dom";
import type { Guide } from "../data/guides";

interface GuideCardProps {
  guide: Guide;
  showSummary?: boolean;
}

/**
 * The guide card used everywhere a guide is previewed — home page,
 * guides listing. Uses the guide's photo as a full background image
 * with a gradient overlay so the photos are always front and centre.
 */
export default function GuideCard({ guide, showSummary = true }: GuideCardProps) {
  return (
    <Link
      to={`/guides/${guide.slug}`}
      className="group relative flex flex-col justify-end overflow-hidden rounded-2xl aspect-[4/5] sm:aspect-[3/4] shadow-[0_8px_28px_-14px_rgba(14,58,69,0.35)] hover:shadow-[0_14px_38px_-14px_rgba(14,58,69,0.5)] transition-shadow"
      style={{
        backgroundImage: `url(${guide.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="absolute inset-0 bg-gradient-to-t from-deep via-deep/55 to-deep/5 group-hover:from-deep/95 transition-colors"
        aria-hidden="true"
      />
      <div className="relative p-5 text-sand">
        <span className="inline-block text-[11px] font-semibold uppercase tracking-wide bg-gold text-deep rounded-full px-2.5 py-1">
          {guide.ageRange}
        </span>
        <h3 className="mt-3 font-semibold text-lg leading-snug">{guide.title}</h3>
        {showSummary && (
          <p className="text-sm text-sand/80 mt-1.5 leading-relaxed line-clamp-2">
            {guide.summary}
          </p>
        )}
        <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-gold group-hover:text-sand transition-colors">
          View the guide
          <svg viewBox="0 0 20 20" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 10h12M11 5l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
