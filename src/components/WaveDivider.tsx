interface WaveDividerProps {
  color?: string;
  flip?: boolean;
  className?: string;
}

export default function WaveDivider({
  color = "#FBFAF6",
  flip = false,
  className = "",
}: WaveDividerProps) {
  return (
    <div
      className={`w-full overflow-hidden leading-[0] ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1200 60"
        preserveAspectRatio="none"
        className={`w-full h-[36px] md:h-[56px] ${flip ? "rotate-180" : ""}`}
      >
        <path
          d="M0,32 C150,60 350,0 600,20 C850,40 1050,4 1200,26 L1200,60 L0,60 Z"
          fill={color}
        />
      </svg>
    </div>
  );
}
