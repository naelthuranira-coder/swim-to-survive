import { useEffect, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 480);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className="no-print fixed bottom-24 md:bottom-8 right-5 md:right-8 z-40 w-11 h-11 rounded-full bg-teal text-sand shadow-[0_10px_25px_-8px_rgba(14,58,69,0.5)] flex items-center justify-center hover:bg-deep transition-colors"
    >
      <svg viewBox="0 0 20 20" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2">
        <path d="M10 15V5M5 9l5-5 5 5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}
