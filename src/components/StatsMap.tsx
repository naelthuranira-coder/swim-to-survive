import { useMemo, useState } from "react";
import { regionalRates, ageRisk, type RegionRate } from "../data/stats";

type DatasetKey = "region" | "age";

const DATASETS: Record<
  DatasetKey,
  { title: string; unit: string; source: string; data: RegionRate[] }
> = {
  region: {
    title: "Drowning rate by WHO region",
    unit: "relative index (highest region = 100)",
    source: "WHO Global Report on Drowning, regional data",
    data: regionalRates,
  },
  age: {
    title: "Childhood drowning risk by age",
    unit: "relative index (highest band = 100)",
    source: "US CDC childhood drowning data",
    data: ageRisk,
  },
};

const ZOOM_STEPS = [0, 1, 2, 3];
const MIN_ZOOM = 0;
const MAX_ZOOM = ZOOM_STEPS.length - 1;

// Light foam -> deep teal, so higher values read as visibly "hotter".
function colorFor(value: number, max: number) {
  const t = Math.max(0, Math.min(1, value / max));
  const start = { r: 224, g: 238, b: 240 };
  const end = { r: 14, g: 58, b: 69 };
  const r = Math.round(start.r + (end.r - start.r) * t);
  const g = Math.round(start.g + (end.g - start.g) * t);
  const b = Math.round(start.b + (end.b - start.b) * t);
  return `rgb(${r}, ${g}, ${b})`;
}

function textColorFor(value: number, max: number) {
  return value / max > 0.45 ? "text-sand" : "text-deep";
}

interface StatsMapProps {
  compact?: boolean;
  datasets?: DatasetKey[];
}

export default function StatsMap({
  compact = false,
  datasets = ["region", "age"],
}: StatsMapProps) {
  const [active, setActive] = useState<DatasetKey>(datasets[0]);
  const [zoom, setZoom] = useState(1);
  const [hovered, setHovered] = useState<string | null>(null);

  const dataset = DATASETS[active];
  const max = useMemo(() => Math.max(...dataset.data.map((d) => d.value)), [dataset]);
  const hoveredItem = dataset.data.find((d) => d.key === hovered) ?? null;

  const tilePad = 0.9 + zoom * 0.35; // rem
  const numberSize = 1.5 + zoom * 0.35; // rem
  const labelSize = 0.72 + zoom * 0.05; // rem

  return (
    <div className="no-print">
      {datasets.length > 1 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {datasets.map((key) => (
            <button
              key={key}
              type="button"
              onClick={() => {
                setActive(key);
                setHovered(null);
              }}
              className={`text-sm font-semibold px-4 py-2 rounded-full border transition-colors ${
                active === key
                  ? "bg-teal text-sand border-teal"
                  : "bg-transparent text-current border-current/25 hover:border-current/50"
              }`}
            >
              {DATASETS[key].title}
            </button>
          ))}
        </div>
      )}

      <div className="relative rounded-2xl border border-current/15 p-4 sm:p-6 overflow-hidden">
        {/* zoom controls */}
        <div className="absolute top-3 right-3 z-10 flex flex-col rounded-xl overflow-hidden border border-current/20 bg-sand shadow-md">
          <button
            type="button"
            aria-label="Zoom in"
            disabled={zoom >= MAX_ZOOM}
            onClick={() => setZoom((z) => Math.min(MAX_ZOOM, z + 1))}
            className="w-9 h-9 flex items-center justify-center text-deep font-semibold hover:bg-teal/10 border-b border-teal/15 disabled:opacity-30"
          >
            +
          </button>
          <button
            type="button"
            aria-label="Zoom out"
            disabled={zoom <= MIN_ZOOM}
            onClick={() => setZoom((z) => Math.max(MIN_ZOOM, z - 1))}
            className="w-9 h-9 flex items-center justify-center text-deep font-semibold hover:bg-teal/10 disabled:opacity-30"
          >
            −
          </button>
        </div>

        <h3 className="font-semibold pr-14">{dataset.title}</h3>
        <p className="text-xs opacity-55 mt-0.5 mb-1">{dataset.unit}</p>

        {/* tile grid — color intensity = value, number shown directly on every tile */}
        <div
          className={`mt-4 grid gap-3 ${
            dataset.data.length > 4 ? "sm:grid-cols-3" : "sm:grid-cols-2"
          } grid-cols-2`}
        >
          {dataset.data.map((d) => {
            const bg = colorFor(d.value, max);
            const textClass = textColorFor(d.value, max);
            const isHovered = hovered === d.key;
            return (
              <button
                key={d.key}
                type="button"
                onMouseEnter={() => setHovered(d.key)}
                onMouseLeave={() => setHovered((h) => (h === d.key ? null : h))}
                onFocus={() => setHovered(d.key)}
                onBlur={() => setHovered((h) => (h === d.key ? null : h))}
                className={`text-left rounded-xl transition-all ${textClass} ${
                  isHovered ? "ring-2 ring-gold scale-[1.03]" : ""
                }`}
                style={{ backgroundColor: bg, padding: `${tilePad}rem` }}
              >
                <div
                  className="font-display font-semibold leading-none"
                  style={{ fontSize: `${numberSize}rem` }}
                >
                  {d.value}
                </div>
                <div
                  className="mt-1.5 opacity-90 leading-snug"
                  style={{ fontSize: `${labelSize}rem` }}
                >
                  {d.label}
                </div>
              </button>
            );
          })}
        </div>

        {/* tooltip-style detail panel for the hovered tile */}
        <div
          className={`mt-4 rounded-xl border border-current/15 px-4 py-3 text-sm transition-opacity ${
            hoveredItem ? "opacity-100" : "opacity-0"
          }`}
          aria-live="polite"
        >
          {hoveredItem ? (
            <>
              <span className="font-semibold">{hoveredItem.label}</span>
              <span className="opacity-60"> &middot; {dataset.unit.split(" (")[0]}: </span>
              <span className="font-semibold">{hoveredItem.value}</span>
            </>
          ) : (
            "\u00A0"
          )}
        </div>

        {/* legend */}
        {!compact && (
          <div className="mt-5">
            <div
              className="h-3 rounded-full"
              style={{
                background: `linear-gradient(to right, ${colorFor(0, max)}, ${colorFor(
                  max,
                  max
                )})`,
              }}
            />
            <div className="flex justify-between text-xs opacity-55 mt-1.5">
              <span>0 — lower relative risk</span>
              <span>{max} — higher relative risk</span>
            </div>
          </div>
        )}

        <p className="text-xs opacity-45 mt-4">Source: {dataset.source}.</p>
      </div>
    </div>
  );
}
