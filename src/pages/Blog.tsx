import { Link } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";
import { posts } from "../data/posts";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function Blog() {
  return (
    <div className="max-w-4xl mx-auto px-5 md:px-8 py-14 md:py-20">
      <SectionHeading
        title="Notes on water safety"
        lede="Short, practical reads for parents — no jargon, no scare tactics, just what actually helps."
      />

      <div className="mt-12 divide-y divide-teal/10">
        {posts.map((p) => (
          <Link
            key={p.slug}
            to={`/blog/${p.slug}`}
            className="group flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 py-7"
          >
            <div className="sm:w-40 shrink-0 rounded-xl overflow-hidden aspect-[16/10]">
              <img
                src={p.image}
                alt={p.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex-1">
              <p className="text-xs font-semibold text-teal uppercase tracking-wide">
                {p.category}
              </p>
              <p className="text-xs text-ink/45 mt-1">
                {formatDate(p.date)} &middot; {p.readTime}
              </p>
              <h2 className="text-xl font-semibold text-deep group-hover:text-teal transition-colors mt-1.5">
                {p.title}
              </h2>
              <p className="text-sm text-ink/65 mt-1.5 leading-relaxed">{p.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
