/**
 * Per-page Open Graph (OG) images for social sharing.
 * When a URL is shared (e.g. /contact), the preview image will be unique to that page.
 *
 * Add your images to: public/og-images/
 * Recommended size: 1200×630px
 *
 * To add a new page image:
 * 1. Create og-{page}.png in public/og-images/
 * 2. Add the mapping below
 */

const SITE_URL = import.meta.env.VITE_SITE_URL || "https://wemakespace.org";

/** Default fallback when no page-specific image exists */
const DEFAULT_OG_IMAGE = "/og-images/og-default.png";

/** Fallback to existing image until og-images are added */
const FALLBACK_OG_IMAGE = "/wemakespacelogoparty.png";

/** Map page slugs to OG image paths (relative to public, so they start with /) */
export const OG_IMAGES: Record<string, string> = {
  home: "/og-images/og-home.png",
  contact: "/og-images/og-contact.png",
  platforms: "/og-images/og-platforms.png",
  stack: "/og-images/og-platforms.png", // alias
  solutions: "/og-images/og-solutions.png",
  vision: "/og-images/og-vision.png",
  team: "/og-images/og-vision.png", // can add og-team.png later
  cases: "/og-images/og-cases.png",
  blog: "/og-images/og-cases.png", // alias
  privacy: "/og-images/og-privacy.png",
  terms: "/og-images/og-terms.png",
  event: "/og-images/og-event.png",
  "solution-detail": "/og-images/og-solutions.png",
  "article-detail": "/og-images/og-cases.png",
  "not-found": "/og-default.png", // use fallback for 404
};

/**
 * Get the absolute URL for an OG image.
 * Social platforms require absolute URLs for preview images.
 */
export function getOgImageUrl(pageKey?: string, customImage?: string): string {
  if (customImage) {
    return customImage.startsWith("http") ? customImage : `${SITE_URL}${customImage.startsWith("/") ? "" : "/"}${customImage}`;
  }
  const path = (pageKey && OG_IMAGES[pageKey]) || FALLBACK_OG_IMAGE;
  return `${SITE_URL}${path}`;
}

export { SITE_URL };
