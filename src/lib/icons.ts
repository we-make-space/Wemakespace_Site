/**
 * Icon mapping utility - Maps icon name strings from database to Lucide React icons.
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

function normalizeIconName(name: string): string {
  const cleaned = name.trim().replace(/[\s_-]+/g, " ");
  return cleaned
    .split(" ")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
    .join("");
}

export function getIconByName(name: string | null | undefined): LucideIcon {
  if (!name || typeof name !== "string") return BookOpen;
  const trimmed = name.trim();
  if (!trimmed) return BookOpen;
  if (iconMap[trimmed]) return iconMap[trimmed];
  const normalized = normalizeIconName(trimmed);
  if (iconMap[normalized]) return iconMap[normalized];
  return BookOpen;
}

export function getAvailableIconNames(): string[] {
  return Object.keys(iconMap);
}
