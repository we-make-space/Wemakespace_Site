import { useEffect } from "react";
import { useLocation } from "wouter";

/**
 * Scrolls to top when the route changes.
 * Fixes the issue where pages open scrolled to the bottom.
 */
export function ScrollOnRouteChange() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}
