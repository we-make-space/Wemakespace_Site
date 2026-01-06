import { motion } from "framer-motion";
import { Nav } from "@/components/nav";
import { Terminal, Shield, Zap, Globe, Cpu, Database, Layout, Search, Mail, ArrowRight } from "lucide-react";

import { Footer } from "@/components/footer";

export default function Stack() {
  const stackItems = [
    { name: "React 19", category: "Frontend", icon: Layout, color: "text-blue-400" },
    { name: "Tailwind v4", category: "Design", icon: Zap, color: "text-primary" },
    { name: "Framer Motion", category: "Animation", icon: Globe, color: "text-purple-400" },
    { name: "TypeScript", category: "Language", icon: Terminal, color: "text-blue-600" },
    { name: "Wouter", category: "Routing", icon: Search, color: "text-green-400" },
    { name: "Lucide", category: "Icons", icon: Cpu, color: "text-orange-400" },
    { name: "Radix UI", category: "Primitives", icon: Shield, color: "text-yellow-400" },
    { name: "TanStack Query", category: "Data", icon: Database, color: "text-red-400" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main className="pt-32 pb-20 container px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl"
        >
          <h1 className="text-6xl md:text-8xl font-display font-black tracking-tighter mb-8 uppercase">
            The <span className="text-primary italic">Stack</span> we trust.
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed mb-20 max-w-2xl">
            We use a curated selection of next-generation tools to build high-performance digital spaces.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stackItems.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10, borderColor: "rgba(var(--primary), 0.5)" }}
              className="p-8 rounded-[2.5rem] border border-foreground/5 bg-foreground/5 backdrop-blur-3xl group transition-all"
            >
              <item.icon className={`w-12 h-12 mb-6 ${item.color} group-hover:scale-110 transition-transform`} />
              <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">{item.category}</div>
              <h3 className="text-2xl font-bold font-display">{item.name}</h3>
            </motion.div>
          ))}
        </div>

        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-40 p-12 md:p-24 rounded-[4rem] bg-primary text-primary-foreground relative overflow-hidden"
        >
          <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-6xl font-display font-black leading-none mb-6">Ready to scale your next project?</h2>
              <p className="text-xl opacity-80 font-light">Join the elite software teams building with Wemakespace.</p>
            </div>
            <button className="px-12 py-6 bg-foreground text-background rounded-full font-black text-xl uppercase tracking-widest hover:scale-105 transition-all flex items-center gap-4">
              Contact Us <Mail className="w-6 h-6" />
            </button>
          </div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/20 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
        </motion.section>
      </main>
      <Footer />
    </div>
  );
}
