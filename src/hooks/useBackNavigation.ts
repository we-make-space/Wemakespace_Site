"use client";

import { useCallback } from "react";
import { useRouter } from "next/navigation";

/**
 * Returns a function that navigates back in history, or to the fallback path
 * if there's no history (e.g. user opened link in new tab).
 */
export function useBackNavigation(fallbackPath: string = "/") {
  const router = useRouter();

  return useCallback(() => {
    if (typeof window !== "undefined" && window.history.length > 1) {
      window.history.back();
    } else {
      router.push(fallbackPath);
    }
  }, [fallbackPath, router]);
}
