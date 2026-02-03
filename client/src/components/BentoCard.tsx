import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { BentoItem } from "@/lib/content";
import { getIconByName } from "@/lib/icons";

interface BentoCardProps {
  item: BentoItem;
  index: number;
}

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      type: "spring",
      stiffness: 100,
    },
  }),
};

export function BentoCard({ item, index }: BentoCardProps) {
  const Icon = getIconByName(item.icon_name);
  const isLarge = item.col_span >= 2 || item.row_span >= 2;
  const category = item.category || "Product";
  const linkUrl = item.link_url || "#";
  const imageUrl = item.image_url || "/placeholder-image.png";

  const cardContent = (
    <>
      <div className="absolute inset-0 z-0">
        <img
          src={imageUrl}
          alt={item.title}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-300 group-hover:opacity-90" />
      </div>

      <div className="relative z-10 flex h-full flex-col justify-end p-6 md:p-8 text-white">
        <div className="mb-auto flex justify-between items-start">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur-md border border-white/20">
            <Icon className="w-3 h-3" />
            {category}
          </span>
          
          <div className="rounded-full bg-white/10 p-2 opacity-0 -translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 backdrop-blur-md">
            <ArrowUpRight className="w-5 h-5 text-white" />
          </div>
        </div>

        <div className="space-y-2 translate-y-2 transition-transform duration-300 group-hover:translate-y-0">
          <h3 className={cn(
            "font-display font-bold leading-tight tracking-tight",
            isLarge ? "text-3xl md:text-4xl" : "text-xl md:text-2xl"
          )}>
            {item.title}
          </h3>
          {item.description && (
            <p className={cn(
              "text-white/70 line-clamp-2 leading-relaxed font-light",
              isLarge ? "text-lg" : "text-sm"
            )}>
              {item.description}
            </p>
          )}
        </div>
      </div>
    </>
  );

  return (
    <motion.div
      variants={itemVariants}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className={cn(
        "group relative overflow-hidden rounded-3xl bg-card border border-border/50",
        "transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5 hover:border-border/80",
        isLarge ? "md:col-span-2 md:row-span-2" : "col-span-1 row-span-1"
      )}
    >
      {linkUrl && linkUrl !== "#" ? (
        <a
          href={linkUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block h-full w-full"
        >
          {cardContent}
        </a>
      ) : (
        <div className="block h-full w-full">
          {cardContent}
        </div>
      )}
    </motion.div>
  );
}
