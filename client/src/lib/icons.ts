/**
 * Icon mapping utility
 * Maps icon name strings from database to Lucide React icons.
 * Supports PascalCase, snake_case, and "Space Case" from DB.
 */

import {
  BookOpen,
  Lightbulb,
  Building2,
  Megaphone,
  Tag,
  Home as HomeIcon,
  ShoppingBag,
  Globe,
  Shield,
  Zap,
  Cpu,
  Terminal,
  Database,
  ShieldCheck,
  ArrowUpRight,
  Rocket,
  Sparkles,
  MessageSquare,
  Briefcase,
  Github,
  Twitter,
  Linkedin,
  Code2,
  BrainCircuit,
  GraduationCap,
  Compass,
  Newspaper,
  FileText,
  PenTool,
  Rss,
  Layers,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  // PascalCase (primary keys)
  Code2,
  BrainCircuit,
  GraduationCap,
  Compass,
  BookOpen,
  Lightbulb,
  Building2,
  Megaphone,
  Tag,
  HomeIcon,
  Home: HomeIcon,
  ShoppingBag,
  Globe,
  Shield,
  Zap,
  Cpu,
  Terminal,
  Database,
  ShieldCheck,
  ArrowUpRight,
  Rocket,
  Sparkles,
  MessageSquare,
  Briefcase,
  Github,
  Twitter,
  Linkedin,
  Newspaper,
  FileText,
  PenTool,
  Rss,
  Layers,
  // Blog/category-friendly aliases (snake_case from DB)
  Book_Open: BookOpen,
  Light_bulb: Lightbulb,
  Building_2: Building2,
  Message_square: MessageSquare,
  Shield_check: ShieldCheck,
  Arrow_up_right: ArrowUpRight,
  Code_2: Code2,
  Brain_circuit: BrainCircuit,
  Graduation_cap: GraduationCap,
  File_text: FileText,
  Pen_tool: PenTool,
};

/**
 * Normalize icon name from DB (e.g. "book_open", "Book Open") to PascalCase for lookup
 */
function normalizeIconName(name: string): string {
  const cleaned = name.trim().replace(/[\s_-]+/g, " ");
  return cleaned
    .split(" ")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
    .join("");
}

/**
 * Get a Lucide icon component by name
 * Returns a default icon if the name is not found.
 * Handles PascalCase, snake_case, and space-separated names from the database.
 */
export function getIconByName(name: string | null | undefined): LucideIcon {
  if (!name || typeof name !== "string") return BookOpen;
  const trimmed = name.trim();
  if (!trimmed) return BookOpen;
  // Direct lookup first
  if (iconMap[trimmed]) return iconMap[trimmed];
  // Normalize and try again (snake_case / "Space Case" -> PascalCase)
  const normalized = normalizeIconName(trimmed);
  if (iconMap[normalized]) return iconMap[normalized];
  return BookOpen;
}

/**
 * Get all available icon names
 */
export function getAvailableIconNames(): string[] {
  return Object.keys(iconMap);
}
