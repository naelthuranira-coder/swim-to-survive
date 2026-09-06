import { useEffect, useRef, useState } from "react";

/**
 * Tracks the rendered width of an element so components can size children
 * (e.g. a fixed-viewBox SVG) to fit the available space instead of using a
 * hardcoded pixel width. Updates on resize, orientation change, and any
 * layout change picked up by ResizeObserver (covers Android's dynamic
 * viewport changes when the browser chrome shows/hides).
 */
export function useElementWidth<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const update = () => setWidth(el.clientWidth);
    update();

    if (typeof ResizeObserver !== "undefined") {
      const observer = new ResizeObserver(() => update());
      observer.observe(el);
      return () => observer.disconnect();
    }

    // Fallback for environments without ResizeObserver.
    window.addEventListener("resize", update);
    window.addEventListener("orientationchange", update);
    return () => {
      window.removeEventListener("resize", update);
      window.removeEventListener("orientationchange", update);
    };
  }, []);

  return { ref, width };
}
