import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { guideLevels } from "../data/guides";

const links = [
  { to: "/", label: "Home" },
  { to: "/my-swim-guide", label: "My Swim Guide" },
  { to: "/blog", label: "Blog" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [guidesOpen, setGuidesOpen] = useState(false);
  const [mobileGuidesOpen, setMobileGuidesOpen] = useState(false);
  const guidesRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const guidesActive = location.pathname.startsWith("/guides");

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (guidesRef.current && !guidesRef.current.contains(e.target as Node)) {
        setGuidesOpen(false);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-sand/95 backdrop-blur border-b border-teal/10">
      <div className="max-w-6xl mx-auto px-5 md:px-8 flex items-center justify-between h-16">
        <NavLink to="/" className="flex items-center gap-2.5 shrink-0" onClick={() => setOpen(false)}>
          <svg viewBox="0 0 32 32" className="w-8 h-8" aria-hidden="true">
            <circle cx="16" cy="16" r="16" fill="#146C7A" />
            <path
              d="M6 17c3-2.5 6-2.5 9 0s6 2.5 9 0"
              stroke="#F2A73B"
              strokeWidth="2.4"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M6 21c3-2.5 6-2.5 9 0s6 2.5 9 0"
              stroke="#E8F3F0"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              opacity="0.8"
            />
          </svg>
          <span className="font-display font-semibold text-lg text-deep leading-none">
            Watersafe Hub
          </span>
        </NavLink>

        <nav className="hidden md:flex items-center gap-7">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `text-sm font-medium transition-colors ${
                isActive ? "text-teal border-b-2 border-teal" : "text-ink/70 hover:text-teal"
              }`
            }
          >
            Home
          </NavLink>

          {/* Guides dropdown */}
          <div className="relative" ref={guidesRef}>
            <button
              type="button"
              onClick={() => setGuidesOpen((v) => !v)}
              aria-expanded={guidesOpen}
              className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                guidesActive ? "text-teal border-b-2 border-teal" : "text-ink/70 hover:text-teal"
              }`}
            >
              Guides
              <svg
                viewBox="0 0 20 20"
                className={`w-3.5 h-3.5 transition-transform ${guidesOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 7.5l5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {guidesOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 rounded-2xl border border-teal/15 bg-sand shadow-[0_20px_45px_-15px_rgba(14,58,69,0.3)] p-2 z-50">
                <NavLink
                  to="/guides"
                  end
                  onClick={() => setGuidesOpen(false)}
                  className="block rounded-xl px-3.5 py-2.5 text-sm font-semibold text-deep hover:bg-teal/10"
                >
                  All guides
                </NavLink>
                <div className="my-1 border-t border-teal/10" />
                {guideLevels.map((level) => (
                  <NavLink
                    key={level}
                    to={`/guides?level=${encodeURIComponent(level)}`}
                    onClick={() => setGuidesOpen(false)}
                    className="block rounded-xl px-3.5 py-2.5 text-sm text-ink/75 hover:bg-teal/10 hover:text-teal"
                  >
                    {level}
                  </NavLink>
                ))}
              </div>
            )}
          </div>

          {links.slice(1).map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive ? "text-teal border-b-2 border-teal" : "text-ink/70 hover:text-teal"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <NavLink
            to="/guides"
            className="text-sm font-semibold bg-teal text-sand px-4 py-2 rounded-full hover:bg-deep transition-colors"
          >
            Start a guide
          </NavLink>
        </nav>

        <button
          className="md:hidden p-2 -mr-2 text-deep"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-teal/10 bg-sand px-5 py-4 flex flex-col gap-1">
          <NavLink
            to="/"
            end
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `text-base font-medium py-2.5 border-b border-teal/5 ${
                isActive ? "text-teal border-b-2 border-teal" : "text-ink/80"
              }`
            }
          >
            Home
          </NavLink>

          <div className="border-b border-teal/5">
            <button
              type="button"
              onClick={() => setMobileGuidesOpen((v) => !v)}
              aria-expanded={mobileGuidesOpen}
              className={`w-full flex items-center justify-between text-base font-medium py-2.5 ${
                guidesActive ? "text-teal border-b-2 border-teal" : "text-ink/80"
              }`}
            >
              Guides
              <svg
                viewBox="0 0 20 20"
                className={`w-4 h-4 transition-transform ${mobileGuidesOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 7.5l5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {mobileGuidesOpen && (
              <div className="pb-2.5 pl-3 flex flex-col gap-1">
                <NavLink
                  to="/guides"
                  end
                  onClick={() => setOpen(false)}
                  className="text-sm font-semibold text-deep py-1.5"
                >
                  All guides
                </NavLink>
                {guideLevels.map((level) => (
                  <NavLink
                    key={level}
                    to={`/guides?level=${encodeURIComponent(level)}`}
                    onClick={() => setOpen(false)}
                    className="text-sm text-ink/70 py-1.5"
                  >
                    {level}
                  </NavLink>
                ))}
              </div>
            )}
          </div>

          {links.slice(1).map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `text-base font-medium py-2.5 border-b border-teal/5 ${
                  isActive ? "text-teal border-b-2 border-teal" : "text-ink/80"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}
