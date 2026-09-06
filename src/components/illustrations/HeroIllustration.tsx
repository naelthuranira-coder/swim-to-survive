export default function HeroIllustration() {
  return (
    <svg
      viewBox="0 0 520 460"
      className="w-full h-auto max-w-md mx-auto"
      role="img"
      aria-label="Illustration of a parent holding a child while floating together in calm water, sun overhead"
    >
      {/* sky */}
      <rect x="0" y="0" width="520" height="460" fill="none" />

      {/* sun */}
      <circle cx="412" cy="92" r="54" fill="#F2A73B" opacity="0.9" />
      <circle cx="412" cy="92" r="54" fill="none" stroke="#F2A73B" strokeWidth="2" opacity="0.4">
        <animate attributeName="r" values="54;60;54" dur="6s" repeatCount="indefinite" />
      </circle>

      {/* distant ripple rings */}
      <circle cx="120" cy="150" r="10" fill="none" stroke="#2F8B98" strokeWidth="2" opacity="0.35" />
      <circle cx="120" cy="150" r="22" fill="none" stroke="#2F8B98" strokeWidth="1.5" opacity="0.2" />

      {/* water body */}
      <path
        d="M0 260 C 60 235, 130 285, 200 260 C 270 235, 330 285, 400 260 C 450 242, 490 258, 520 250 L520 460 L0 460 Z"
        fill="#146C7A"
      />
      <path
        d="M0 260 C 60 235, 130 285, 200 260 C 270 235, 330 285, 400 260 C 450 242, 490 258, 520 250 L520 460 L0 460 Z"
        fill="#0E3A45"
        opacity="0.18"
      />

      {/* water surface lines */}
      <path
        d="M20 288 C 90 270, 150 306, 220 288 C 290 270, 350 306, 420 288 C 460 278, 490 288, 500 284"
        fill="none"
        stroke="#E8F3F0"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.5"
      />
      <path
        d="M40 322 C 110 304, 170 340, 240 322 C 310 304, 370 340, 440 322"
        fill="none"
        stroke="#E8F3F0"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.35"
      />

      {/* parent silhouette holding child */}
      <g transform="translate(160,150)">
        {/* parent body/shoulders above water */}
        <path
          d="M20 150 C 10 110, 30 60, 70 55 C 110 50, 135 90, 128 130 C 124 150, 118 160, 118 160 L20 160 Z"
          fill="#0E3138"
        />
        {/* parent head */}
        <circle cx="72" cy="38" r="26" fill="#0E3138" />
        {/* parent arm supporting child */}
        <path
          d="M110 118 C 150 108, 185 118, 205 138 C 215 148, 212 165, 198 168 C 175 172, 140 158, 118 150 Z"
          fill="#0E3138"
        />

        {/* child head */}
        <circle cx="205" cy="108" r="19" fill="#146C7A" />
        {/* child body, reclined floating */}
        <path
          d="M188 118 C 210 128, 245 130, 268 122 C 278 118, 280 128, 270 134 C 245 146, 205 148, 182 134 Z"
          fill="#146C7A"
        />
      </g>

      {/* small ripple marks near swimmers */}
      <path
        d="M250 268 C 262 262, 276 262, 288 268"
        stroke="#F2A73B"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        opacity="0.7"
      />
      <path
        d="M300 278 C 312 272, 326 272, 338 278"
        stroke="#F2A73B"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  );
}
