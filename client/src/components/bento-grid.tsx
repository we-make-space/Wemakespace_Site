import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { LayoutGrid, Box, Layers, Zap, Maximize, ArrowUpRight } from "lucide-react";

const bentoItems = [
  {
    title: "Spatial Planning",
    description: "Optimizing flow and function in every square foot.",
    icon: LayoutGrid,
    className: "md:col-span-2 md:row-span-2",
    bg: "bg-neutral-100 dark:bg-neutral-900",
  },
  {
    title: "Interior Architecture",
    description: "Structural beauty meets practical living.",
    icon: Box,
    className: "md:col-span-1 md:row-span-1",
    bg: "bg-primary/5 border-primary/20",
  },
  {
    title: "3D Visualization",
    description: "See your future space in photorealistic detail.",
    icon: Layers,
    className: "md:col-span-1 md:row-span-1",
    bg: "bg-secondary/10 border-secondary/20",
  },
  {
    title: "Fast Turnaround",
    description: "From concept to blueprint in record time.",
    icon: Zap,
    className: "md:col-span-1 md:row-span-1",
    bg: "bg-neutral-50 dark:bg-neutral-800",
  },
  {
    title: "Scalable Solutions",
    description: "Designs that grow with your needs.",
    icon: Maximize,
    className: "md:col-span-2 md:row-span-1",
    bg: "bg-neutral-100 dark:bg-neutral-900",
  },
];

export function BentoGrid() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container px-6 mx-auto">
        <div className="max-w-2xl mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Designed for impact.
          </h2>
          <p className="text-xl text-muted-foreground">
            We combine aesthetic precision with functional clarity to create spaces that work as good as they look.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-4 h-auto md:h-[800px]">
          {bentoItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={cn(
                "group relative p-8 rounded-3xl border border-border overflow-hidden transition-all hover:shadow-lg",
                item.className,
                item.bg
              )}
            >
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div className="p-3 bg-background rounded-2xl shadow-sm">
                    <item.icon className="w-6 h-6 text-foreground" />
                  </div>
                  <ArrowUpRight className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors opacity-0 group-hover:opacity-100" />
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
              
              {/* Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
