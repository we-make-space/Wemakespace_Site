/**
 * React Query hooks for content fetching
 */

import { useQuery } from "@tanstack/react-query";
import {
  getArticles,
  getArticleById,
  getArticleCategories,
  getPlatforms,
  getPlatformBySlug,
  getTeamMembers,
  getTestimonials,
  getSolutions,
  getBentoItems,
  getFeatures,
  type Article,
  type ArticleCategory,
  type Platform,
  type TeamMember,
  type Testimonial,
  type Solution,
  type BentoItem,
  type Feature,
} from "@/lib/content";

export function useArticles() {
  return useQuery<Article[]>({
    queryKey: ["articles"],
    queryFn: getArticles,
    staleTime: 1000 * 60 * 5, // 5 minutes - allows updates from dashboard to show within 5 minutes
  });
}

export function useArticle(id: string) {
  return useQuery<Article | null>({
    queryKey: ["article", id],
    queryFn: () => getArticleById(id),
    enabled: !!id,
    staleTime: 1000 * 60 * 5,
  });
}

export function useArticleCategories() {
  return useQuery<ArticleCategory[]>({
    queryKey: ["article-categories"],
    queryFn: getArticleCategories,
    staleTime: 1000 * 60 * 10, // Categories change less frequently
  });
}

export function usePlatforms() {
  return useQuery<Platform[]>({
    queryKey: ["platforms"],
    queryFn: getPlatforms,
    staleTime: 1000 * 60 * 5,
  });
}

export function usePlatform(slug: string) {
  return useQuery<Platform | null>({
    queryKey: ["platform", slug],
    queryFn: () => getPlatformBySlug(slug),
    enabled: !!slug,
    staleTime: 1000 * 60 * 5,
  });
}

export function useTeamMembers() {
  return useQuery<TeamMember[]>({
    queryKey: ["team-members"],
    queryFn: getTeamMembers,
    staleTime: 1000 * 60 * 10,
  });
}

export function useTestimonials() {
  return useQuery<Testimonial[]>({
    queryKey: ["testimonials"],
    queryFn: getTestimonials,
    staleTime: 1000 * 60 * 5,
  });
}

export function useSolutions() {
  return useQuery<Solution[]>({
    queryKey: ["solutions"],
    queryFn: getSolutions,
    staleTime: 1000 * 60 * 5,
  });
}

export function useBentoItems() {
  return useQuery<BentoItem[]>({
    queryKey: ["bento-items"],
    queryFn: getBentoItems,
    staleTime: 1000 * 60 * 10,
  });
}

export function useFeatures() {
  return useQuery<Feature[]>({
    queryKey: ["features"],
    queryFn: getFeatures,
    staleTime: 1000 * 60 * 10,
  });
}
