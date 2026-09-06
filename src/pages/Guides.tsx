import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";
import GuideCard from "../components/GuideCard";
import { guides, guideLevels, type GuideLevel } from "../data/guides";

const ALL = "All levels";

export default function Guides() {
  const [searchParams, setSearchParams] = useSearchParams();
  const levelParam = searchParams.get("level");
  const activeLevel: GuideLevel | typeof ALL =
    levelParam && (guideLevels as string[]).includes(levelParam)
      ? (levelParam as GuideLevel)
      : ALL;

  const filtered = useMemo(
    () =>
      activeLevel === ALL ? guides : guides.filter((g) => g.level === activeLevel),
    [activeLevel]
  );

  function handleLevelChange(value: string) {
    if (value === ALL) {
      searchParams.delete("level");
    } else {
      searchParams.set("level", value);
    }
    setSearchParams(searchParams, { replace: true });
  }

  return (
    <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeading
          title="Swim guides, stage by stage"
          lede="Every guide breaks a swim skill into small steps you can teach yourself, at your own child's pace. Start wherever they are today."
        />

        <label className="flex flex-col gap-1.5 shrink-0">
          <span className="text-xs font-semibold uppercase tracking-wide text-ink/50">
            Filter by level
          </span>
          <select
            value={activeLevel}
            onChange={(e) => handleLevelChange(e.target.value)}
            className="rounded-full border border-teal/25 bg-sand text-deep font-medium text-sm px-4 py-2.5 pr-9 focus:border-teal focus:outline-none min-w-[190px]"
          >
            <option value={ALL}>All levels</option>
            {guideLevels.map((level) => (
              <option key={level} value={level}>
                {level}
              </option>
            ))}
          </select>
        </label>
      </div>

      {filtered.length === 0 ? (
        <p className="mt-12 text-ink/60">No guides match that level yet.</p>
      ) : (
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((g) => (
            <GuideCard key={g.slug} guide={g} />
          ))}
        </div>
      )}
    </div>
  );
}
