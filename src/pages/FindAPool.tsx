import { useState } from "react";
import { Link } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";

export default function FindAPool() {
  const [query, setQuery] = useState("swimming pools near me");
  const [submittedQuery, setSubmittedQuery] = useState(query);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmittedQuery(query.trim() || "swimming pools near me");
  }

  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(submittedQuery)}&output=embed`;

  return (
    <div className="max-w-5xl mx-auto px-5 md:px-8 py-14 md:py-20">
      <SectionHeading
        title="Find a pool or swim school"
        lede="Search any town, suburb, or venue name to see pools and swim schools nearby — a good starting point before you book your child's first lesson."
      />

      <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Try 'swimming pools in Nakuru' or a suburb name"
          className="flex-1 rounded-full border border-teal/25 bg-sand px-5 py-3 text-sm text-deep focus:border-teal focus:outline-none"
        />
        <button
          type="submit"
          className="bg-teal text-sand font-semibold px-6 py-3 rounded-full hover:bg-deep transition-colors shrink-0"
        >
          Search the map
        </button>
      </form>

      <div className="mt-8 rounded-2xl overflow-hidden border border-teal/15 aspect-[4/3] sm:aspect-video">
        <iframe
          key={submittedQuery}
          title="Map of nearby pools and swim schools"
          src={mapSrc}
          className="w-full h-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <div className="mt-8 border-l-4 border-gold bg-gold/10 rounded-r-xl px-5 py-4">
        <p className="text-sm text-deep leading-relaxed">
          <span className="font-semibold">Before you book: </span>
          confirm any instructor's certification directly and read our{" "}
          <Link to="/blog/choosing-an-instructor" className="underline font-semibold">
            guide to choosing a swim instructor
          </Link>{" "}
          before enrolling your child.
        </p>
      </div>
    </div>
  );
}
