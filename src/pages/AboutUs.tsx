import { Link } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";
import { guideProfile } from "../data/guide-profile";

export default function AboutUs() {
  return (
    <div className="max-w-4xl mx-auto px-5 md:px-8 py-14 md:py-20">
      <SectionHeading
        title="About us"
        lede="Watersafe Hub is guided by one goal: help parents keep their kids safe in the water. Meet the guide behind the site."
      />

      <div className="mt-10 rounded-2xl bg-foam p-6 md:p-10 grid sm:grid-cols-[auto_1fr] gap-6 sm:gap-8 items-center">
        <img
          src={guideProfile.photo}
          alt={guideProfile.name}
          className="w-28 h-28 sm:w-36 sm:h-36 rounded-full object-cover mx-auto sm:mx-0 border-4 border-sand shadow-[0_10px_30px_-12px_rgba(14,58,69,0.4)]"
        />
        <div>
          <h2 className="text-2xl font-semibold text-deep">{guideProfile.name}</h2>
          <p className="text-sm font-semibold text-gold-dark mt-1">{guideProfile.title}</p>
          <p className="mt-3 text-ink/75 leading-relaxed">{guideProfile.tagline}</p>
        </div>
      </div>

      <div className="mt-12 space-y-5">
        {guideProfile.bio.map((paragraph, i) => (
          <p key={i} className="text-ink/75 leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>

      <div className="mt-10">
        <h3 className="font-semibold text-deep text-lg mb-4">Background</h3>
        <ul className="space-y-3">
          {guideProfile.credentials.map((c) => (
            <li key={c} className="flex gap-3 text-sm text-ink/75">
              <span className="shrink-0 mt-0.5 w-5 h-5 rounded-full bg-teal/10 text-teal flex items-center justify-center text-xs font-bold">
                ✓
              </span>
              {c}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-14 border-t border-teal/10 pt-8 flex flex-wrap items-center gap-4">
        <a
          href={`mailto:${guideProfile.email}`}
          className="text-sm text-ink/70 hover:text-teal"
        >
          {guideProfile.email}
        </a>
        <span className="text-ink/30">&middot;</span>
        <a href={`tel:${guideProfile.phone}`} className="text-sm text-ink/70 hover:text-teal">
          {guideProfile.phone}
        </a>
      </div>

      <div className="mt-10 flex flex-wrap gap-4">
        <Link
          to="/support"
          className="bg-teal text-sand font-semibold px-6 py-3.5 rounded-full hover:bg-deep transition-colors"
        >
          Support my guide
        </Link>
        <Link
          to="/contact"
          className="border-2 border-teal/30 text-deep font-semibold px-6 py-3.5 rounded-full hover:border-teal transition-colors"
        >
          Get in touch
        </Link>
      </div>
    </div>
  );
}
