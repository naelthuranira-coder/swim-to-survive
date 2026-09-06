import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "watersafe-hub:progress";

type ProgressStore = Record<string, Record<number, boolean>>;

function loadStore(): ProgressStore {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as ProgressStore) : {};
  } catch {
    return {};
  }
}

function saveStore(store: ProgressStore) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
  } catch {
    // localStorage unavailable (private mode, etc.) — progress just won't persist.
  }
}

/** Read the full progress store, for dashboards like "My Swim Guide". */
export function readAllProgress(): ProgressStore {
  return loadStore();
}

export function useGuideProgress(slug: string) {
  const [store, setStore] = useState<ProgressStore>(() => loadStore());

  useEffect(() => {
    setStore(loadStore());
  }, [slug]);

  const toggleStep = useCallback(
    (stepIndex: number) => {
      setStore((prev) => {
        const guideProgress = { ...(prev[slug] ?? {}) };
        guideProgress[stepIndex] = !guideProgress[stepIndex];
        const next = { ...prev, [slug]: guideProgress };
        saveStore(next);
        return next;
      });
    },
    [slug]
  );

  const isStepDone = useCallback(
    (stepIndex: number) => Boolean(store[slug]?.[stepIndex]),
    [store, slug]
  );

  const completedCount = useCallback(
    (totalSteps: number) => {
      const guideProgress = store[slug] ?? {};
      let count = 0;
      for (let i = 0; i < totalSteps; i++) {
        if (guideProgress[i]) count++;
      }
      return count;
    },
    [store, slug]
  );

  return { isStepDone, toggleStep, completedCount };
}
