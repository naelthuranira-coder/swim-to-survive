import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const STORAGE_KEY = "watersafe-hub:cookie-consent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (!stored) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  function respond(value: "accepted" | "declined") {
    try {
      window.localStorage.setItem(STORAGE_KEY, value);
    } catch {
      // localStorage unavailable — banner will just show again next visit.
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie notice"
      className="no-print fixed inset-x-0 bottom-0 z-50 border-t border-teal/15 bg-deep text-sand"
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-4 flex flex-wrap items-center gap-4">
        <p className="text-sm text-sand/80 leading-relaxed flex-1 min-w-[240px]">
          We use cookies to remember your guide progress on this device and understand how the
          site is used. See our{" "}
          <Link to="/privacy-policy" className="underline font-semibold hover:text-sand">
            privacy policy
          </Link>{" "}
          for details.
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            type="button"
            onClick={() => respond("declined")}
            className="border-2 border-sand/25 text-sand font-semibold px-5 py-2.5 rounded-full text-sm hover:border-sand/50 transition-colors"
          >
            Decline
          </button>
          <button
            type="button"
            onClick={() => respond("accepted")}
            className="bg-gold text-deep font-semibold px-5 py-2.5 rounded-full text-sm hover:bg-sand transition-colors"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
