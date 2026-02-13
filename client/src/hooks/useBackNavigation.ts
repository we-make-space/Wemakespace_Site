import { useCallback } from "react";
import { useLocation } from "wouter";

/**
 * Returns a function that navigates back in history, or to the fallback path
 * if there's no history (e.g. user opened link in new tab).
 */
export function useBackNavigation(fallbackPath: string = "/") {
  const [, setLocation] = useLocation();

  return useCallback(() => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      setLocation(fallbackPath);
    }
  }, [fallbackPath, setLocation]);
}
