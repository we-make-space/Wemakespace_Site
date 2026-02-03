/**
 * Icon mapping utility
 * Maps icon name strings from database to Lucide React icons
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
};

/**
 * Get a Lucide icon component by name
 * Returns a default icon if the name is not found
 */
export function getIconByName(name: string | null | undefined): LucideIcon {
  if (!name) return Terminal; // Default icon
  return iconMap[name] || Terminal;
}

/**
 * Get all available icon names
 */
export function getAvailableIconNames(): string[] {
  return Object.keys(iconMap);
}
