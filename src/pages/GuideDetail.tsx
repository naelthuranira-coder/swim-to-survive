import { Link, useParams } from "react-router-dom";
import GuideIcon from "../components/illustrations/GuideIcon";
import { guides } from "../data/guides";
import { useGuideProgress } from "../hooks/useGuideProgress";
import NotFound from "./NotFound";

export default function GuideDetail() {
  const { slug } = useParams();
  const guide = guides.find((g) => g.slug === slug);
  const { isStepDone, toggleStep, completedCount } = useGuideProgress(slug ?? "");

  if (!guide) return <NotFound />;

  const otherGuides = guides.filter((g) => g.slug !== guide.slug).slice(0, 3);
  const progressPct = Math.round((completedCount(guide.steps.length) / guide.steps.length) * 100);

  return (
    <div className="max-w-3xl mx-auto px-5 md:px-8 py-14 md:py-20">
      <Link to="/guides" className="text-sm text-teal font-semibold hover:text-deep">
        &larr; All guides
      </Link>

      <div className="mt-6 rounded-2xl overflow-hidden aspect-[16/9]">
        <img
          src={guide.image}
          alt={guide.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="mt-6 flex items-start gap-4">
        <div className="shrink-0 w-14 h-14 rounded-full bg-teal/10 text-teal flex items-center justify-center">
          <GuideIcon type={guide.icon} />
        </div>
        <div>
          <p className="text-sm text-gold-dark font-semibold">
            {guide.ageRange} &middot; {guide.level}
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold text-deep leading-tight mt-1">
            {guide.title}
          </h1>
        </div>
      </div>

      <p className="mt-6 text-lg text-ink/75 leading-relaxed">{guide.summary}</p>
      <p className="mt-2 text-sm text-ink/50">Suggested pace: {guide.timeToLearn}</p>

      <div className="mt-8 flex items-center gap-4">
        <div className="flex-1 h-2.5 rounded-full bg-teal/10 overflow-hidden">
          <div
            className="h-full bg-teal rounded-full transition-all"
            style={{ width: `${progressPct}%` }}
          />
        </div>
        <span className="text-xs font-semibold text-teal shrink-0">
          {completedCount(guide.steps.length)}/{guide.steps.length} steps done
        </span>
      </div>

      <ol className="mt-10 space-y-6">
        {guide.steps.map((step, i) => {
          const done = isStepDone(i);
          return (
            <li key={step.title} className="flex gap-5">
              <button
                type="button"
                onClick={() => toggleStep(i)}
                aria-pressed={done}
                aria-label={done ? "Mark step as not done" : "Mark step as done"}
                className={`shrink-0 w-9 h-9 rounded-full font-display font-semibold flex items-center justify-center text-sm transition-colors ${
                  done ? "bg-gold text-deep" : "bg-deep text-sand hover:bg-teal"
                }`}
              >
                {done ? "✓" : i + 1}
              </button>
              <div className="pt-1">
                <h3 className={`font-semibold ${done ? "text-ink/40 line-through" : "text-deep"}`}>
                  {step.title}
                </h3>
                <p className="text-sm text-ink/70 mt-1.5 leading-relaxed">{step.detail}</p>
              </div>
            </li>
          );
        })}
      </ol>

      <div className="mt-12 border-l-4 border-gold bg-gold/10 rounded-r-xl px-5 py-4">
        <p className="text-sm text-deep leading-relaxed">
          <span className="font-semibold">Always supervise closely. </span>
          These steps are educational guidance, not a substitute for
          certified instruction or active adult supervision in the water.
        </p>
      </div>

      <div className="mt-16">
        <h2 className="font-semibold text-deep text-lg mb-4">Keep going</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {otherGuides.map((g) => (
            <Link
              key={g.slug}
              to={`/guides/${g.slug}`}
              className="rounded-xl border border-teal/15 overflow-hidden hover:border-teal/40 transition-colors"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img src={g.image} alt={g.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-4">
                <p className="text-xs text-gold-dark font-medium">{g.ageRange}</p>
                <p className="font-semibold text-deep text-sm mt-1">{g.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
