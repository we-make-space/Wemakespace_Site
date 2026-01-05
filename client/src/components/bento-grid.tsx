import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Terminal, Cpu, Globe, Zap, ShieldCheck, Database, ArrowUpRight } from "lucide-react";

const bentoItems = [
  {
    title: "Core Infrastructure",
    description: "Cloud-native architecture designed for 99.9% uptime with global edge distribution.",
    icon: Database,
    className: "md:col-span-2 md:row-span-2",
    bg: "bg-primary/10 border-primary/20 hover:border-primary/50",
    color: "text-primary"
  },
  {
    title: "Edge Delivery",
    description: "Low-latency content delivery networks.",
    icon: Globe,
    className: "md:col-span-1 md:row-span-2", // Made this medium size
    bg: "bg-secondary/10 border-secondary/20 hover:border-secondary/50",
    color: "text-secondary"
  },
  {
    title: "AI & ML",
    description: "Intelligent automation and predictive analytics.",
    icon: Cpu,
    className: "md:col-span-1 md:row-span-2", // Changed to medium size (2 rows)
    bg: "bg-white/5 border-white/10 hover:border-white/30",
    color: "text-white"
  },
  {
    title: "Secure Auth",
    description: "Enterprise-grade identity management.",
    icon: ShieldCheck,
    className: "md:col-span-1 md:row-span-1",
    bg: "bg-white/5 border-white/10 hover:border-white/30",
    color: "text-white"
  },
  {
    title: "Real-time Sync",
    description: "Distributed databases with instant state synchronization.",
    icon: Zap,
    className: "md:col-span-1 md:row-span-1",
    bg: "bg-secondary/5 border-white/10 hover:border-primary/30",
    color: "text-secondary"
  },
];

export function BentoGrid() {
  return (
    <section id="services" className="py-40 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/10 blur-[150px] -translate-x-1/2 -translate-y-1/2 rounded-full" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary/10 blur-[150px] translate-x-1/2 translate-y-1/2 rounded-full" />

      <div className="container px-6 mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h2 className="text-6xl md:text-8xl font-display font-black mb-8 leading-[0.85] uppercase tracking-tighter">
              The <span className="text-primary animate-pulse italic">Architecture</span> <br/> of Tomorrow.
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-xl font-light">
              Modular components designed for extreme scale and velocity.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-8 h-auto md:h-[1000px]">
          {bentoItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              whileHover={{ y: -10 }}
              className={cn(
                "group relative p-12 rounded-[3rem] border overflow-hidden transition-all duration-700",
                item.className,
                item.bg
              )}
            >
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div className={cn("p-5 bg-black/50 rounded-[1.5rem] backdrop-blur-2xl border border-white/10", item.color)}>
                    <item.icon className="w-10 h-10" />
                  </div>
                  <ArrowUpRight className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-3xl font-bold text-white leading-none tracking-tighter">{item.title}</h3>
                  <p className="text-muted-foreground text-lg leading-snug font-light">{item.description}</p>
                </div>
              </div>
              <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-primary/20 blur-[120px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
