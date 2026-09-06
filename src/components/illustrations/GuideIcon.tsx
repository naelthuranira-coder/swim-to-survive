import type { JSX } from "react";
import type { GuideIconType } from "../../data/guides";

const paths: Record<GuideIconType, JSX.Element> = {
  waterBaby: (
    <>
      <circle cx="24" cy="16" r="6" />
      <path d="M14 34c0-6 4-10 10-10s10 4 10 10" />
      <path d="M8 34c2 3 4 3 6 0s4-3 6 0 4 3 6 0 4-3 6 0 4 3 6 0" />
    </>
  ),
  float: (
    <>
      <path d="M8 20c8-6 24-6 32 0" />
      <path d="M10 26c7 5 21 5 28 0" />
      <ellipse cx="24" cy="16" rx="9" ry="5" />
    </>
  ),
  kick: (
    <>
      <circle cx="15" cy="12" r="4" />
      <path d="M15 16v10l10 6" />
      <path d="M25 32l10-4" />
      <path d="M25 32l6 8" />
    </>
  ),
  independent: (
    <>
      <circle cx="24" cy="10" r="4" />
      <path d="M24 14v8l-8 6" />
      <path d="M24 22l8 6" />
      <path d="M16 20l-6 4" />
      <path d="M32 20l6 4" />
      <path d="M9 34c8-6 22-6 30 0" />
    </>
  ),
  poolRules: (
    <>
      <rect x="10" y="8" width="28" height="32" rx="3" />
      <path d="M16 18h16" />
      <path d="M16 25h16" />
      <path d="M16 32h10" />
    </>
  ),
  openWater: (
    <>
      <path d="M6 30c5-4 10-4 15 0s10 4 15 0 5-4 6-4" />
      <path d="M6 22c5-4 10-4 15 0s10 4 15 0 5-4 6-4" />
      <path d="M24 12l-4 6h8z" />
    </>
  ),
};

export default function GuideIcon({ type }: { type: GuideIconType }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className="w-7 h-7"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[type]}
    </svg>
  );
}
