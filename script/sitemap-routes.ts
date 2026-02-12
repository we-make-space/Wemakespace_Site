/**
 * Fetches all sitemap routes including dynamic ones from Supabase.
 * Run at build time - requires VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY.
 */
import { createClient } from "@supabase/supabase-js";

const SITE_URL = process.env.VITE_SITE_URL || "https://wemakespace.org";

const staticRoutes = [
  "/",
  "/stack",
  "/solutions",
  "/vision",
  "/cases",
  "/event",
  "/privacy",
  "/terms",
  "/contact",
];

export async function getSitemapRoutes(): Promise<string[]> {
  const url = process.env.VITE_SUPABASE_URL;
  const key = process.env.VITE_SUPABASE_ANON_KEY;

  const routes = [...staticRoutes];

  if (url && key) {
    try {
      const supabase = createClient(url, key);

      const { data: solutions } = await supabase
        .from("solutions")
        .select("slug")
        .not("slug", "is", null);

      const { data: articles } = await supabase
        .from("articles")
        .select("id")
        .eq("published", true);

      if (solutions?.length) {
        routes.push(...solutions.map((s) => `/solutions/${s.slug}`));
      }
      if (articles?.length) {
        routes.push(...articles.map((a) => `/insights/${a.id}`));
      }
    } catch (err) {
      console.warn("[sitemap] Could not fetch dynamic routes from Supabase:", err);
    }
  }

  return routes;
}
