/**
 * Content fetching utilities using Supabase
 * All data is fetched directly from Supabase, so changes in the dashboard
 * will reflect immediately on the website
 */

import { supabase } from "./supabase";

// Types
export interface ArticleCategory {
  id: string;
  slug: string;
  name: string;
  icon_name: string | null;
  created_at: string;
  updated_at: string;
}

export interface Article {
  id: string;
  category_id: string | null;
  title: string;
  excerpt: string | null;
  content: string | null;
  author: string | null;
  author_role: string | null;
  publish_date: string | null;
  read_time: string | null;
  image_url: string | null;
  featured: boolean;
  published: boolean;
  created_at: string;
  updated_at: string;
  order_index: number;
  category?: ArticleCategory;
}

export interface Platform {
  id: string;
  slug: string;
  name: string;
  tagline: string | null;
  description: string | null;
  hero_image_url: string | null;
  image_url: string | null;
  color_gradient: string | null;
  app_link: string | null;
  app_type: string | null;
  features: string[];
  created_at: string;
  updated_at: string;
  order_index: number;
  sections?: PlatformSection[];
}

export interface PlatformSection {
  id: string;
  platform_id: string;
  title: string;
  content: string | null;
  icon_name: string | null;
  order_index: number;
  created_at: string;
  updated_at: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string | null;
  bio: string | null;
  image_url: string | null;
  social_twitter: string | null;
  social_linkedin: string | null;
  social_github: string | null;
  created_at: string;
  updated_at: string;
  order_index: number;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string | null;
  avatar_initials: string | null;
  avatar_url: string | null;
  created_at: string;
  updated_at: string;
  order_index: number;
}

export interface Solution {
  id: string;
  slug: string;
  title: string;
  description: string | null;
  icon_name: string | null;
  created_at: string;
  updated_at: string;
  order_index: number;
}

export interface BentoItem {
  id: string;
  title: string;
  description: string | null;
  icon_name: string | null;
  col_span: number;
  row_span: number;
  bg_class: string | null;
  color_class: string | null;
  created_at: string;
  updated_at: string;
  order_index: number;
}

export interface Feature {
  id: string;
  title: string;
  description: string | null;
  created_at: string;
  updated_at: string;
  order_index: number;
}

// Fetch functions

export async function getArticleCategories(): Promise<ArticleCategory[]> {
  const { data, error } = await supabase
    .from("article_categories")
    .select("*")
    .order("name");

  if (error) {
    console.error("Error fetching article categories:", error);
    return [];
  }

  return data || [];
}

export async function getArticles(): Promise<Article[]> {
  const { data, error } = await supabase
    .from("articles")
    .select(`
      *,
      category:article_categories(*)
    `)
    .eq("published", true)
    .order("order_index", { ascending: true })
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching articles:", error);
    return [];
  }

  return data || [];
}

export async function getArticleById(id: string): Promise<Article | null> {
  const { data, error } = await supabase
    .from("articles")
    .select(`
      *,
      category:article_categories(*)
    `)
    .eq("id", id)
    .eq("published", true)
    .single();

  if (error) {
    console.error("Error fetching article:", error);
    return null;
  }

  return data;
}

export async function getPlatforms(): Promise<Platform[]> {
  const { data, error } = await supabase
    .from("platforms")
    .select("*")
    .order("order_index", { ascending: true });

  if (error) {
    console.error("Error fetching platforms:", error);
    return [];
  }

  // Fetch sections for each platform
  const platformsWithSections = await Promise.all(
    (data || []).map(async (platform) => {
      const { data: sections } = await supabase
        .from("platform_sections")
        .select("*")
        .eq("platform_id", platform.id)
        .order("order_index", { ascending: true });

      return {
        ...platform,
        sections: sections || [],
        features: (platform.features || []) as string[],
      };
    })
  );

  return platformsWithSections;
}

export async function getPlatformBySlug(slug: string): Promise<Platform | null> {
  const { data, error } = await supabase
    .from("platforms")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error) {
    console.error("Error fetching platform:", error);
    return null;
  }

  if (!data) return null;

  // Fetch sections
  const { data: sections } = await supabase
    .from("platform_sections")
    .select("*")
    .eq("platform_id", data.id)
    .order("order_index", { ascending: true });

  return {
    ...data,
    sections: sections || [],
    features: (data.features || []) as string[],
  };
}

export async function getTeamMembers(): Promise<TeamMember[]> {
  const { data, error } = await supabase
    .from("team_members")
    .select("*")
    .order("order_index", { ascending: true });

  if (error) {
    console.error("Error fetching team members:", error);
    return [];
  }

  return data || [];
}

export async function getTestimonials(): Promise<Testimonial[]> {
  const { data, error } = await supabase
    .from("testimonials")
    .select("*")
    .order("order_index", { ascending: true });

  if (error) {
    console.error("Error fetching testimonials:", error);
    return [];
  }

  return data || [];
}

export async function getSolutions(): Promise<Solution[]> {
  const { data, error } = await supabase
    .from("solutions")
    .select("*")
    .order("order_index", { ascending: true });

  if (error) {
    console.error("Error fetching solutions:", error);
    return [];
  }

  return data || [];
}

export async function getBentoItems(): Promise<BentoItem[]> {
  const { data, error } = await supabase
    .from("bento_items")
    .select("*")
    .order("order_index", { ascending: true });

  if (error) {
    console.error("Error fetching bento items:", error);
    return [];
  }

  return data || [];
}

export async function getFeatures(): Promise<Feature[]> {
  const { data, error } = await supabase
    .from("features")
    .select("*")
    .order("order_index", { ascending: true });

  if (error) {
    console.error("Error fetching features:", error);
    return [];
  }

  return data || [];
}
