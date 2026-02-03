// src/store/navigation.ts
import { useEffect, useRef } from "react";
import { useLocation } from "wouter";

let previousPath: string | null = null;

export function useBackNavigation() {
  const [location] = useLocation();
  const currentPath = useRef(location);

  useEffect(() => {
    previousPath = currentPath.current;
    currentPath.current = location;
  }, [location]);

  return previousPath;
}
