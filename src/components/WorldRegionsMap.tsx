import { useMemo, useRef, useState } from "react";
import { regionalRates } from "../data/stats";
import { useElementWidth } from "../hooks/useElementWidth";

const VIEW_W = 800;
const VIEW_H = 350;

// regionalRates values are already a 0-100 relative index (highest region = 100).
const SCALE_MAX = 100;

// Light foam -> deep teal, same palette/scale style as the US map.
function colorFor(value: number) {
  const t = Math.max(0, Math.min(1, value / SCALE_MAX));
  const start = { r: 226, g: 238, b: 238 };
  const end = { r: 12, g: 55, b: 64 };
  const r = Math.round(start.r + (end.r - start.r) * t);
  const g = Math.round(start.g + (end.g - start.g) * t);
  const b = Math.round(start.b + (end.b - start.b) * t);
  return `rgb(${r}, ${g}, ${b})`;
}

// Schematic, not-to-scale blobs standing in for each WHO region, arranged
// roughly the way the regions sit on a world map (Americas on the left,
// Europe/Africa/Middle East/South-East Asia in the middle, Western Pacific
// on the right). This isn't a country-accurate map — it's a simple visual
// grouping so the existing WHO regional data (see the bars below) is easier
// to scan at a glance.
const REGION_SHAPES: Record<string, { d: string; labelX: number; labelY: number }> = {
  amr: {
    d: "M100,30 C140,20 170,40 165,80 C160,120 190,140 175,180 C160,220 185,260 160,300 C140,335 90,340 70,310 C50,280 65,250 55,210 C45,170 60,140 50,100 C42,65 65,40 100,30 Z",
    labelX: 112,
    labelY: 185,
  },
  eur: {
    d: "M330,30 C360,20 400,25 410,50 C418,70 400,85 375,88 C350,90 325,80 320,60 C317,45 320,35 330,30 Z",
    labelX: 366,
    labelY: 58,
  },
  afr: {
    d: "M350,100 C385,95 420,110 425,150 C430,190 415,230 420,270 C424,305 405,325 375,320 C345,315 335,280 330,240 C325,200 320,160 330,130 C335,115 340,105 350,100 Z",
    labelX: 374,
    labelY: 210,
  },
  emr: {
    d: "M430,80 C455,72 480,80 485,105 C489,125 475,140 455,142 C435,144 418,132 418,112 C418,98 422,86 430,80 Z",
    labelX: 451,
    labelY: 112,
  },
  sear: {
    d: "M470,150 C500,145 530,155 535,180 C539,202 522,218 498,220 C475,222 458,208 458,188 C458,172 460,158 470,150 Z",
    labelX: 497,
    labelY: 186,
  },
  wpr: {
    d: "M540,40 C600,20 680,30 710,70 C735,105 725,150 700,180 C720,210 715,250 685,270 C655,290 610,285 590,255 C572,228 585,200 565,175 C548,153 540,120 535,90 C532,70 528,55 540,40 Z",
    labelX: 622,
    labelY: 155,
  },
};

interface HoverInfo {
  label: string;
  value: number;
  x: number;
  y: number;
}

export default function WorldRegionsMap() {
  const [hover, setHover] = useState<HoverInfo | null>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const { ref: scrollRef, width: containerWidth } = useElementWidth<HTMLDivElement>();

  const displayWidth = containerWidth > 0 ? containerWidth : undefined;
  const displayHeight = displayWidth ? (displayWidth * VIEW_H) / VIEW_W : undefined;

  const sorted = useMemo(
    () => [...regionalRates].sort((a, b) => b.value - a.value),
    []
  );
  const highest = sorted[0];
  const lowest = sorted[sorted.length - 1];

  function showTooltip(e: React.MouseEvent | React.FocusEvent, label: string, value: number) {
    const bounds = wrapRef.current?.getBoundingClientRect();
    if (!bounds) return;
    const clientX = "clientX" in e ? (e as React.MouseEvent).clientX : bounds.left + bounds.width / 2;
    const clientY = "clientY" in e ? (e as React.MouseEvent).clientY : bounds.top;
    setHover({
      label,
      value,
      x: clientX - bounds.left,
      y: clientY - bounds.top,
    });
  }

  function selectRegion(e: React.MouseEvent, label: string, value: number) {
    e.stopPropagation();
    showTooltip(e, label, value);
  }

  const wrapWidth = wrapRef.current?.clientWidth ?? 320;
  const tooltipMaxWidth = Math.min(200, wrapWidth - 16);

  return (
    <div className="no-print">
      <div
        ref={wrapRef}
        onClick={() => setHover(null)}
        className="relative rounded-2xl border border-current/15 p-4 sm:p-6 overflow-hidden"
      >
        <h3 className="font-semibold">World, by WHO region</h3>
        <p className="text-xs opacity-55 mt-0.5 mb-1">
          Relative drowning-rate index (highest region = 100) &middot; schematic grouping, not to scale
        </p>

        <div ref={scrollRef} className="mt-3 -mx-2 sm:mx-0 overflow-hidden" style={{ touchAction: "pan-y" }}>
          <svg
            viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
            width={displayWidth ?? "100%"}
            height={displayHeight ?? "auto"}
            xmlns="http://www.w3.org/2000/svg"
            className="block"
            role="img"
            aria-label="Schematic world map shaded by relative drowning rate per WHO region"
          >
            <title>Relative drowning rate by WHO region</title>
            <g>
              {regionalRates.map((r) => {
                const shape = REGION_SHAPES[r.key];
                if (!shape) return null;
                return (
                  <g key={r.key}>
                    <path
                      d={shape.d}
                      fill={colorFor(r.value)}
                      stroke="var(--color-sand)"
                      strokeWidth={1.5}
                      className="cursor-pointer transition-[filter] duration-150 hover:brightness-110"
                      style={hover?.label === r.label ? { filter: "brightness(1.12)" } : undefined}
                      onMouseMove={(e) => showTooltip(e, r.label, r.value)}
                      onMouseLeave={() => setHover((h) => (h?.label === r.label ? null : h))}
                      onClick={(e) => selectRegion(e, r.label, r.value)}
                      onFocus={(e) => showTooltip(e, r.label, r.value)}
                      onBlur={() => setHover((h) => (h?.label === r.label ? null : h))}
                      tabIndex={0}
                    >
                      <title>
                        {r.label}: relative index {r.value}
                      </title>
                    </path>
                    <text
                      x={shape.labelX}
                      y={shape.labelY}
                      textAnchor="middle"
                      className="pointer-events-none select-none"
                      style={{
                        fontSize: 13,
                        fontWeight: 600,
                        fill: r.value > 55 ? "var(--color-sand)" : "var(--color-deep)",
                      }}
                    >
                      {r.value}
                    </text>
                  </g>
                );
              })}
            </g>
          </svg>
        </div>

        {/* tooltip */}
        {hover && (
          <div
            className="absolute z-30 pointer-events-none rounded-lg bg-deep text-sand text-sm px-3 py-2 shadow-lg"
            style={{
              left: Math.max(8, Math.min(hover.x + 14, wrapWidth - tooltipMaxWidth - 8)),
              top: Math.max(hover.y - 10, 8),
              maxWidth: tooltipMaxWidth,
            }}
          >
            <div className="font-semibold">{hover.label}</div>
            <div className="opacity-80 text-xs mt-0.5">Relative drowning-rate index</div>
            <div className="font-semibold">{hover.value}</div>
          </div>
        )}

        {/* legend */}
        <div className="mt-5">
          <div className="flex justify-between text-xs opacity-55 mb-1">
            <span>Relative index (highest region = 100)</span>
          </div>
          <div
            className="h-3 rounded-full"
            style={{
              background: `linear-gradient(to right, ${colorFor(0)}, ${colorFor(SCALE_MAX)})`,
            }}
          />
          <div className="flex justify-between text-xs opacity-55 mt-1.5">
            <span>0</span>
            <span>25</span>
            <span>50</span>
            <span>75</span>
            <span>100</span>
          </div>
        </div>

        {/* headline callouts */}
        <div className="grid sm:grid-cols-2 gap-3 mt-5">
          <div className="rounded-xl bg-current/5 px-3 py-2.5">
            <div className="text-xs opacity-55">Highest relative rate</div>
            <div className="font-semibold">
              {highest.label} &middot; {highest.value}
            </div>
          </div>
          <div className="rounded-xl bg-current/5 px-3 py-2.5">
            <div className="text-xs opacity-55">Lowest relative rate</div>
            <div className="font-semibold">
              {lowest.label} &middot; {lowest.value}
            </div>
          </div>
        </div>

        <p className="text-xs opacity-45 mt-4">
          Source: World Health Organization, Global Report on Drowning, regional data. Shapes are a
          schematic grouping for readability, not precise country boundaries.
        </p>
      </div>
    </div>
  );
}
