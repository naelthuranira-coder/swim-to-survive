import { useMemo, useRef, useState } from "react";
import {
  dcMarker,
  stateDrowningRates,
  usDrowningMapSource,
  usDrowningNationalAverage,
} from "../data/stateDrowningRates";
import { useElementWidth } from "../hooks/useElementWidth";

const VIEW_W = 959;
const VIEW_H = 593;

// Legend caps at 3.0+ per 100,000, same as the reference map — a handful of
// states (Alaska, Hawaii) run well above the rest, so a hard cap keeps the
// color scale readable for every other state instead of getting washed out.
const SCALE_MAX = 3;

const ZOOM_STEPS = [1, 1.6, 2.4, 3.2];
const MIN_ZOOM = 0;
const MAX_ZOOM = ZOOM_STEPS.length - 1;

// Light foam -> deep teal, matching the site's palette.
function colorFor(value: number) {
  const t = Math.max(0, Math.min(1, value / SCALE_MAX));
  const start = { r: 226, g: 238, b: 238 };
  const end = { r: 12, g: 55, b: 64 };
  const r = Math.round(start.r + (end.r - start.r) * t);
  const g = Math.round(start.g + (end.g - start.g) * t);
  const b = Math.round(start.b + (end.b - start.b) * t);
  return `rgb(${r}, ${g}, ${b})`;
}

interface HoverInfo {
  name: string;
  rate: number | null;
  x: number;
  y: number;
}

interface UsDrowningMapProps {
  compact?: boolean;
}

export default function UsDrowningMap({ compact = false }: UsDrowningMapProps) {
  const [zoom, setZoom] = useState(0);
  const [hover, setHover] = useState<HoverInfo | null>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const { ref: scrollRef, width: containerWidth } = useElementWidth<HTMLDivElement>();

  const zoomScale = ZOOM_STEPS[zoom];
  // At zoom 0 the map fills the available width exactly (no horizontal
  // scroll needed on any screen size). Zooming in scales past the
  // container width, which is when the surrounding div's overflow-auto
  // kicks in so the user can pan around the detail.
  const displayWidth = containerWidth > 0 ? containerWidth * zoomScale : undefined;
  const displayHeight = displayWidth ? (displayWidth * VIEW_H) / VIEW_W : undefined;

  const sorted = useMemo(
    () => [...stateDrowningRates].sort((a, b) => (b.rate ?? 0) - (a.rate ?? 0)),
    []
  );
  const highest = sorted[0];
  const lowest = sorted[sorted.length - 1];

  function showTooltip(e: React.MouseEvent | React.FocusEvent, name: string, rate: number | null) {
    const bounds = wrapRef.current?.getBoundingClientRect();
    if (!bounds) return;
    const clientX = "clientX" in e ? (e as React.MouseEvent).clientX : bounds.left + bounds.width / 2;
    const clientY = "clientY" in e ? (e as React.MouseEvent).clientY : bounds.top;
    setHover({
      name,
      rate,
      x: clientX - bounds.left,
      y: clientY - bounds.top,
    });
  }

  // Tapping/clicking a state selects it (works for touch, where there's no
  // hover); tapping anywhere else on the card dismisses the tooltip.
  function selectState(e: React.MouseEvent, name: string, rate: number | null) {
    e.stopPropagation();
    showTooltip(e, name, rate);
  }

  const wrapWidth = wrapRef.current?.clientWidth ?? 320;
  const tooltipMaxWidth = Math.min(190, wrapWidth - 16);

  return (
    <div className="no-print">
      <div
        ref={wrapRef}
        onClick={() => setHover(null)}
        className="relative rounded-2xl border border-current/15 p-4 sm:p-6 overflow-hidden"
      >
        {/* zoom controls */}
        <div className="absolute top-3 right-3 z-20 flex flex-col rounded-xl overflow-hidden border border-current/20 bg-sand shadow-md">
          <button
            type="button"
            aria-label="Zoom in"
            disabled={zoom >= MAX_ZOOM}
            onClick={(e) => {
              e.stopPropagation();
              setZoom((z) => Math.min(MAX_ZOOM, z + 1));
            }}
            className="w-10 h-10 sm:w-9 sm:h-9 flex items-center justify-center text-deep font-semibold hover:bg-teal/10 border-b border-teal/15 disabled:opacity-30 touch-manipulation"
          >
            +
          </button>
          <button
            type="button"
            aria-label="Zoom out"
            disabled={zoom <= MIN_ZOOM}
            onClick={(e) => {
              e.stopPropagation();
              setZoom((z) => Math.max(MIN_ZOOM, z - 1));
            }}
            className="w-10 h-10 sm:w-9 sm:h-9 flex items-center justify-center text-deep font-semibold hover:bg-teal/10 disabled:opacity-30 touch-manipulation"
          >
            &minus;
          </button>
        </div>

        <h3 className="font-semibold pr-14">United States, 2015 to 2019</h3>
        <p className="text-xs opacity-55 mt-0.5 mb-1">
          Age-adjusted drowning deaths per 100,000 people, by state
        </p>

        {/* map */}
        <div
          ref={scrollRef}
          className="mt-3 -mx-2 sm:mx-0 overflow-auto"
          style={{ touchAction: "pan-x pan-y" }}
        >
          <svg
            viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
            width={displayWidth ?? "100%"}
            height={displayHeight ?? "auto"}
            xmlns="http://www.w3.org/2000/svg"
            className="block"
            style={{ maxWidth: "none" }}
            role="img"
            aria-label="Map of the United States shaded by drowning death rate per state, 2015 to 2019"
          >
            <title>US drowning death rate by state, 2015 to 2019</title>
            <g>
              {stateDrowningRates.map((s) => (
                <path
                  key={s.abbr}
                  d={s.d}
                  fill={colorFor(s.rate ?? 0)}
                  stroke="var(--color-sand)"
                  strokeWidth={1}
                  className="cursor-pointer transition-[filter] duration-150 hover:brightness-110"
                  style={hover?.name === s.name ? { filter: "brightness(1.12)" } : undefined}
                  onMouseMove={(e) => showTooltip(e, s.name, s.rate)}
                  onMouseLeave={() => setHover((h) => (h?.name === s.name ? null : h))}
                  onClick={(e) => selectState(e, s.name, s.rate)}
                  onFocus={(e) => showTooltip(e, s.name, s.rate)}
                  onBlur={() => setHover((h) => (h?.name === s.name ? null : h))}
                  tabIndex={0}
                >
                  <title>
                    {s.name}: {s.rate !== null ? `${s.rate.toFixed(2)} per 100,000` : "data not available"}
                  </title>
                </path>
              ))}

              {/* Washington, D.C. — too small to shade as a shape, shown as a dot */}
              <circle
                cx={dcMarker.cx}
                cy={dcMarker.cy}
                r={5}
                fill="var(--color-gold)"
                stroke="var(--color-sand)"
                strokeWidth={1.5}
                className="cursor-pointer"
                onMouseMove={(e) => showTooltip(e, dcMarker.name, dcMarker.rate)}
                onMouseLeave={() => setHover((h) => (h?.name === dcMarker.name ? null : h))}
                onClick={(e) => selectState(e, dcMarker.name, dcMarker.rate)}
              >
                <title>{dcMarker.name}: rate suppressed (population too small for a reliable estimate)</title>
              </circle>
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
            <div className="font-semibold">{hover.name}</div>
            <div className="opacity-80 text-xs mt-0.5">Drowning deaths per 100,000</div>
            <div className="font-semibold">
              {hover.rate !== null ? hover.rate.toFixed(2) : "Not available"}
            </div>
          </div>
        )}

        {/* legend */}
        {!compact && (
          <div className="mt-5">
            <div className="flex justify-between text-xs opacity-55 mb-1">
              <span>Drowning Deaths per 100,000</span>
            </div>
            <div
              className="h-3 rounded-full"
              style={{
                background: `linear-gradient(to right, ${colorFor(0)}, ${colorFor(
                  SCALE_MAX
                )})`,
              }}
            />
            <div className="flex justify-between text-xs opacity-55 mt-1.5">
              <span>0</span>
              <span>0.5</span>
              <span>1.0</span>
              <span>1.5</span>
              <span>2.0</span>
              <span>2.5</span>
              <span>&gt;3</span>
            </div>
          </div>
        )}

        {/* headline callouts */}
        <div className={`grid sm:grid-cols-3 gap-3 ${compact ? "mt-4" : "mt-5"}`}>
          <div className="rounded-xl bg-current/5 px-3 py-2.5">
            <div className="text-xs opacity-55">Highest rate</div>
            <div className="font-semibold">
              {highest.name} &middot; {highest.rate?.toFixed(2)}
            </div>
          </div>
          <div className="rounded-xl bg-current/5 px-3 py-2.5">
            <div className="text-xs opacity-55">US national average</div>
            <div className="font-semibold">{usDrowningNationalAverage.toFixed(2)}</div>
          </div>
          <div className="rounded-xl bg-current/5 px-3 py-2.5">
            <div className="text-xs opacity-55">Lowest rate</div>
            <div className="font-semibold">
              {lowest.name} &middot; {lowest.rate?.toFixed(2)}
            </div>
          </div>
        </div>

        <p className="text-xs opacity-45 mt-4">Source: {usDrowningMapSource}</p>
      </div>
    </div>
  );
}
