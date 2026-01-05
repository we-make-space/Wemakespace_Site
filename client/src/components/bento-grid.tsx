import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Terminal, Cpu, Globe, Zap, ShieldCheck, Database } from "lucide-react";

const bentoItems = [
  {
    title: "Core Infrastructure",
    description: "Cloud-native architecture designed for 99.9% uptime.",
    icon: Database,
    className: "md:col-span-2 md:row-span-2",
    bg: "bg-primary/5 border-primary/20",
    color: "text-primary"
  },
  {
    title: "Edge Computing",
    description: "Low-latency delivery at global scale.",
    icon: Globe,
    className: "md:col-span-1 md:row-span-1",
    bg: "bg-secondary/10 border-secondary/20",
    color: "text-secondary"
  },
  {
    title: "AI Integration",
    description: "Intelligent automation powered by LLMs.",
    icon: Cpu,
    className: "md:col-span-1 md:row-span-1",
    bg: "bg-neutral-800/50 border-white/10",
    color: "text-white"
  },
  {
    title: "Rapid Deployment",
    description: "CI/CD pipelines that move at your speed.",
    icon: Zap,
    className: "md:col-span-1 md:row-span-1",
    bg: "bg-white/5 border-white/5",
    color: "text-primary"
  },
  {
    title: "Advanced Security",
    description: "Enterprise-grade encryption and threat detection.",
    icon: ShieldCheck,
    className: "md:col-span-2 md:row-span-1",
    bg: "bg-neutral-900/50 border-white/10",
    color: "text-secondary"
  },
];

export function BentoGrid() {
  return (
    <section id="services" className="py-32 bg-background relative overflow-hidden">
      <div className="container px-6 mx-auto relative z-10">
        <div className="max-w-3xl mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-display font-black mb-8 leading-none uppercase tracking-tighter">
              The <span className="text-primary italic">Engine</span> <br/> Behind The Space.
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
              We don't just build apps; we engineer digital ecosystems that are robust, secure, and infinitely scalable.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-6 h-auto md:h-[900px]">
          {bentoItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={cn(
                "group relative p-10 rounded-[2.5rem] border overflow-hidden transition-all duration-500 hover:border-primary/50",
                item.className,
                item.bg
              )}
            >
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div className={cn("p-4 bg-background/50 rounded-2xl backdrop-blur-xl border border-white/5", item.color)}>
                    <item.icon className="w-8 h-8" />
                  </div>
                  <Terminal className="w-6 h-6 text-muted-foreground/30 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                
                <div>
                  <h3 className="text-3xl font-bold mb-4 text-foreground leading-tight tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-lg leading-snug">
                    {item.description}
                  </p>
                </div>
              </div>
              
              {/* Modern Glow Effect */}
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-primary/20 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
