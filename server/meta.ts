/**
 * Server-side SEO meta for Open Graph / Twitter cards.
 * Social crawlers (Facebook, Twitter, LinkedIn, etc.) do NOT run JavaScript.
 * They only read the initial HTML. We must inject correct meta tags on the server.
 */

const SITE_URL = process.env.VITE_SITE_URL || "https://wemakespace.org";

const FALLBACK_OG_IMAGE = `${SITE_URL}/wemakespacelogoparty.png`;

/** Map path patterns to { title, description, image } */
const PAGE_META: Array<{
  path: string | RegExp;
  title: string;
  description: string;
  image: string;
}> = [
  { path: "/", title: "Home", description: "Building high-performance software for web, mobile, AI, and Web3. We engineer digital products and platforms.", image: `${SITE_URL}/og-images/og-home.png` },
  { path: "/contact", title: "Contact", description: "Get in touch with Wemakespace. We build high-performance software for web, mobile, AI, and Web3.", image: `${SITE_URL}/og-images/og-contact.png` },
  { path: "/stack", title: "Platforms", description: "Explore the Wemakespace ecosystem of high-performance digital platforms.", image: `${SITE_URL}/og-images/og-platforms.png` },
  { path: "/solutions", title: "Solutions", description: "We solve complex engineering challenges for forward-thinking companies.", image: `${SITE_URL}/og-images/og-solutions.png` },
  { path: /^\/solutions\/[^/]+$/, title: "Solutions", description: "We solve complex engineering challenges for forward-thinking companies.", image: `${SITE_URL}/og-images/og-solutions.png` },
  { path: "/vision", title: "Vision", description: "Defining the architectural standards of the next digital era.", image: `${SITE_URL}/og-images/og-vision.jpeg` },
  { path: "/cases", title: "Blog", description: "Insights, case studies, and updates from Wemakespace.", image: `${SITE_URL}/og-images/og-cases.png` },
  { path: /^\/insights\/[^/]+$/, title: "Blog", description: "Insights, case studies, and updates from Wemakespace.", image: `${SITE_URL}/og-images/og-cases.png` },
  { path: "/privacy", title: "Privacy Policy", description: "Data security, encryption, and privacy practices for Wemakespace software and digital platforms.", image: `${SITE_URL}/og-images/og-privacy.png` },
  { path: "/terms", title: "Terms of Service", description: "Terms of service for Wemakespace software, platforms, and digital products.", image: `${SITE_URL}/og-images/og-terms.png` },
  { path: "/event", title: "Event", description: "Wemakespace events and workshops.", image: `${SITE_URL}/og-images/og-event.png` },
];

export function getMetaForPath(pathname: string): { title: string; description: string; image: string } {
  const path = pathname.replace(/\?.*$/, "").replace(/\/$/, "") || "/";
  for (const meta of PAGE_META) {
    if (typeof meta.path === "string" && meta.path === path) {
      return { ...meta };
    }
    if (meta.path instanceof RegExp && meta.path.test(path)) {
      return { ...meta };
    }
  }
  return {
    title: "Page Not Found",
    description: "404 - Page not found. Return to Wemakespace tech and software platform.",
    image: FALLBACK_OG_IMAGE,
  };
}

export function injectMetaTags(html: string, pathname: string): string {
  const cleanPath = pathname.replace(/\?.*$/, "").replace(/\/$/, "") || "/";
  const { title, description, image } = getMetaForPath(pathname);
  const fullTitle = `${title} | Wemakespace`;
  const canonicalUrl = `${SITE_URL}${cleanPath === "/" ? "" : cleanPath}`;

  const faviconUrl = `${SITE_URL}/favicon.png`;
  const replacements: Array<[RegExp, string]> = [
    [/href="\/favicon\.png"/g, `href="${escapeHtml(faviconUrl)}"`],
    [/<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/i, `<meta property="og:title" content="${escapeHtml(fullTitle)}" />`],
    [/<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/?>/i, `<meta name="twitter:title" content="${escapeHtml(fullTitle)}" />`],
    [/<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/i, `<meta property="og:description" content="${escapeHtml(description)}" />`],
    [/<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/?>/i, `<meta name="twitter:description" content="${escapeHtml(description)}" />`],
    [/<meta\s+property="og:image"\s+content="[^"]*"\s*\/?>/i, `<meta property="og:image" content="${escapeHtml(image)}" />`],
    [/<meta\s+name="twitter:image"\s+content="[^"]*"\s*\/?>/i, `<meta name="twitter:image" content="${escapeHtml(image)}" />`],
    [/<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/i, `<meta property="og:url" content="${escapeHtml(canonicalUrl)}" />`],
    [/<title>[^<]*<\/title>/i, `<title>${escapeHtml(fullTitle)}</title>`],
  ];

  let result = html;
  for (const [regex, replacement] of replacements) {
    result = result.replace(regex, replacement);
  }
  return result;
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
