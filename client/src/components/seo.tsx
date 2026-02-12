import { useEffect } from "react";

interface SEOProps {
  title?: string;
  description?: string;
  /** Absolute URL for OG image (e.g. from getOgImageUrl). Social platforms require full URLs. */
  image?: string;
  type?: string;
}

function setMetaTag(
  propertyOrName: "property" | "name",
  key: string,
  value: string
) {
  const selector =
    propertyOrName === "property"
      ? `meta[property="${key}"]`
      : `meta[name="${key}"]`;
  let el = document.querySelector(selector);
  if (el) {
    el.setAttribute("content", value);
  } else {
    el = document.createElement("meta");
    el.setAttribute(propertyOrName, key);
    el.setAttribute("content", value);
    document.head.appendChild(el);
  }
}

export function SEO({
  title,
  description = "Wemakespace is an extraordinary digital studio specializing in spatial UI and high-performance software ecosystems.",
  image,
  type = "website",
}: SEOProps) {
  useEffect(() => {
    const siteName = "Wemakespace";
    const fullTitle = title ? `${title} | ${siteName}` : siteName;

    document.title = fullTitle;

    setMetaTag("property", "og:title", fullTitle);
    setMetaTag("name", "twitter:title", fullTitle);
    setMetaTag("property", "og:description", description);
    setMetaTag("name", "twitter:description", description);
    setMetaTag("property", "og:type", type);

    // og:url — canonical URL for this page (needed for correct preview per URL)
    const canonicalUrl =
      typeof window !== "undefined"
        ? `${window.location.origin}${window.location.pathname}`
        : "";
    if (canonicalUrl) {
      setMetaTag("property", "og:url", canonicalUrl);
    }

    if (image) {
      setMetaTag("property", "og:image", image);
      setMetaTag("name", "twitter:image", image);
    }
  }, [title, description, image, type]);

  return null;
}
