import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="max-w-xl mx-auto px-5 md:px-8 py-24 text-center">
      <p className="text-sm font-semibold text-teal uppercase tracking-wide">404</p>
      <h1 className="text-3xl md:text-4xl font-semibold text-deep mt-2">
        We couldn't find that page
      </h1>
      <p className="mt-4 text-ink/65 leading-relaxed">
        The page you're looking for may have moved. Try one of the links
        below instead.
      </p>
      <div className="mt-8 flex flex-wrap gap-4 justify-center">
        <Link
          to="/"
          className="bg-teal text-sand font-semibold px-6 py-3 rounded-full hover:bg-deep transition-colors"
        >
          Back to home
        </Link>
        <Link
          to="/guides"
          className="border-2 border-teal/30 text-deep font-semibold px-6 py-3 rounded-full hover:border-teal transition-colors"
        >
          See the guides
        </Link>
      </div>
    </div>
  );
}
