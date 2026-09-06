interface SectionHeadingProps {
  title: string;
  lede?: string;
  align?: "left" | "center";
  dark?: boolean;
}

export default function SectionHeading({
  title,
  lede,
  align = "left",
  dark = false,
}: SectionHeadingProps) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      <h2
        className={`text-3xl md:text-4xl font-semibold leading-tight ${
          dark ? "text-sand" : "text-deep"
        }`}
      >
        {title}
      </h2>
      {lede && (
        <p
          className={`mt-3 text-base md:text-lg leading-relaxed ${
            dark ? "text-sand/75" : "text-ink/70"
          }`}
        >
          {lede}
        </p>
      )}
    </div>
  );
}
