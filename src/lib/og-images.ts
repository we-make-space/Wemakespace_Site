/**
 * Per-page Open Graph (OG) images for social sharing.
 */

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://wemakespace.org";

/** Default fallback when no page-specific image exists */
const DEFAULT_OG_IMAGE = "/og-images/og-default.png";

/** Fallback to existing image until og-images are added */
const FALLBACK_OG_IMAGE = "/wemakespacelogoparty.png";

/** Map page slugs to OG image paths (relative to public, so they start with /) */
export const OG_IMAGES: Record<string, string> = {
  home: "/og-images/og-home.png",
  contact: "/og-images/og-contact.png",
  platforms: "/og-images/og-platforms.png",
  stack: "/og-images/og-platforms.png",
  solutions: "/og-images/og-solutions.png",
  vision: "/og-images/og-vision.png",
  team: "/og-images/og-vision.png",
  cases: "/og-images/og-cases.png",
  blog: "/og-images/og-cases.png",
  privacy: "/og-images/og-privacy.png",
  terms: "/og-images/og-terms.png",
  event: "/og-images/og-event.png",
  "solution-detail": "/og-images/og-solutions.png",
  "article-detail": "/og-images/og-cases.png",
  "not-found": "/og-default.png",
};

/**
 * Get the absolute URL for an OG image.
 */
export function getOgImageUrl(pageKey?: string, customImage?: string): string {
  if (customImage) {
    return customImage.startsWith("http") ? customImage : `${SITE_URL}${customImage.startsWith("/") ? "" : "/"}${customImage}`;
  }
  const path = (pageKey && OG_IMAGES[pageKey]) || FALLBACK_OG_IMAGE;
  return `${SITE_URL}${path}`;
}

export { SITE_URL };
