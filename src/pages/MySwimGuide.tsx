import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";
import GuideIcon from "../components/illustrations/GuideIcon";
import { guides, type Guide } from "../data/guides";
import { readAllProgress } from "../hooks/useGuideProgress";

const AGE_OPTIONS = [
  { value: "under2", label: "Under 2 years" },
  { value: "2to4", label: "2 – 4 years" },
  { value: "4to6", label: "4 – 6 years" },
  { value: "6plus", label: "6 years and up" },
];

function recommendedSlugsForAge(age: string): string[] {
  switch (age) {
    case "under2":
      return ["getting-comfortable-in-water", "pool-safety-rules-for-the-family"];
    case "2to4":
      return ["floating-and-breath-control", "pool-safety-rules-for-the-family"];
    case "4to6":
      return ["kicking-and-basic-strokes", "pool-safety-rules-for-the-family"];
    case "6plus":
      return [
        "swimming-independently",
        "open-water-and-lake-safety",
        "pool-safety-rules-for-the-family",
      ];
    default:
      return [];
  }
}

function GuideRow({ guide }: { guide: Guide }) {
  const progress = readAllProgress();
  const done = Object.values(progress[guide.slug] ?? {}).filter(Boolean).length;
  const total = guide.steps.length;
  const pct = total ? Math.round((done / total) * 100) : 0;

  return (
    <Link
      to={`/guides/${guide.slug}`}
      className="group flex items-center gap-4 rounded-2xl border border-teal/15 hover:border-teal/40 transition-colors p-4"
    >
      <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0">
        <img src={guide.image} alt={guide.title} className="w-full h-full object-cover" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-xs text-gold-dark font-semibold">{guide.ageRange}</p>
        <h3 className="font-semibold text-deep group-hover:text-teal transition-colors truncate">
          {guide.title}
        </h3>
        <div className="mt-2 flex items-center gap-3">
          <div className="flex-1 h-1.5 rounded-full bg-teal/10 overflow-hidden max-w-[160px]">
            <div className="h-full bg-teal rounded-full" style={{ width: `${pct}%` }} />
          </div>
          <span className="text-xs text-ink/50 shrink-0">
            {done}/{total} steps
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function MySwimGuide() {
  const [age, setAge] = useState<string>("");

  const recommended = useMemo(() => {
    if (!age) return [];
    const slugs = recommendedSlugsForAge(age);
    return slugs
      .map((slug) => guides.find((g) => g.slug === slug))
      .filter((g): g is Guide => Boolean(g));
  }, [age]);

  const overallStats = useMemo(() => {
    const progress = readAllProgress();
    let stepsDone = 0;
    let stepsTotal = 0;
    let guidesStarted = 0;
    for (const g of guides) {
      const gp = progress[g.slug] ?? {};
      const done = Object.values(gp).filter(Boolean).length;
      stepsTotal += g.steps.length;
      stepsDone += done;
      if (done > 0) guidesStarted++;
    }
    return { stepsDone, stepsTotal, guidesStarted };
  }, [age]);

  return (
    <div className="max-w-4xl mx-auto px-5 md:px-8 py-14 md:py-20">
      <SectionHeading
        title="My Swim Guide"
        lede="Tell us your child's age to get a recommended path, and track step-by-step progress across every guide you've started. Progress is saved on this device."
      />

      <div className="mt-10 rounded-2xl bg-foam p-6 md:p-8">
        <label className="block text-sm font-semibold text-deep mb-3">
          How old is your child?
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {AGE_OPTIONS.map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => setAge(opt.value)}
              className={`rounded-xl px-4 py-3 text-sm font-semibold transition-colors border ${
                age === opt.value
                  ? "bg-teal text-sand border-teal"
                  : "bg-sand text-deep border-teal/20 hover:border-teal/50"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {age && recommended.length > 0 && (
        <div className="mt-10">
          <h2 className="font-semibold text-deep text-lg mb-4">Recommended for this age</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {recommended.map((g) => (
              <Link
                key={g.slug}
                to={`/guides/${g.slug}`}
                className="group rounded-2xl border border-teal/15 overflow-hidden hover:border-teal/40 transition-colors bg-sand"
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <img src={g.image} alt={g.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-teal/10 text-teal flex items-center justify-center">
                      <GuideIcon type={g.icon} />
                    </div>
                    <p className="text-xs text-gold-dark font-semibold">{g.ageRange}</p>
                  </div>
                  <h3 className="font-semibold text-deep mt-3 group-hover:text-teal transition-colors">
                    {g.title}
                  </h3>
                  <p className="text-sm text-ink/65 mt-1.5 leading-relaxed">{g.summary}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      <div className="mt-14 pt-10 border-t border-teal/10">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-6">
          <h2 className="font-semibold text-deep text-lg">Your progress</h2>
          <p className="text-sm text-ink/60">
            {overallStats.guidesStarted} guide{overallStats.guidesStarted === 1 ? "" : "s"} started
            &middot; {overallStats.stepsDone}/{overallStats.stepsTotal} steps completed
          </p>
        </div>
        <div className="space-y-3">
          {guides.map((g) => (
            <GuideRow key={g.slug} guide={g} />
          ))}
        </div>
      </div>
    </div>
  );
}
