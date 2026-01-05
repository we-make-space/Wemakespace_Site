import { motion } from "framer-motion";
import { Shield, Zap, Globe, Lock, Cpu, Cloud } from "lucide-react";

const stats = [
  { label: "Requests / Sec", value: "2.4M+", icon: Zap },
  { label: "Global Nodes", value: "140+", icon: Globe },
  { label: "Data Secured", value: "12PB", icon: Shield },
];

export function TechSpecs() {
  return (
    <section className="py-40 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#FF5E3605,transparent)]" />
      
      <div className="container px-6 mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-12">
            <motion.div
              initial={ { opacity: 0, y: 20 } }
              whileInView={ { opacity: 1, y: 0 } }
              viewport={ { once: true } }
            >
              <h2 className="text-5xl md:text-7xl font-display font-black text-white leading-none tracking-tighter mb-8">
                Extreme <span className="text-primary italic">Performance.</span>
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed">
                Our infrastructure is built to handle the most demanding workloads with zero compromise on speed or security.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-3 gap-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={ { opacity: 0, y: 20 } }
                  whileInView={ { opacity: 1, y: 0 } }
                  viewport={ { once: true } }
                  transition={ { delay: i * 0.1 } }
                  className="space-y-2"
                >
                  <stat.icon className="w-6 h-6 text-primary mb-4" />
                  <div className="text-4xl font-display font-bold text-white tracking-tighter">{stat.value}</div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-bold">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: Lock, title: "End-to-End Encryption" },
              { icon: Cpu, title: "Custom Silicon Opt" },
              { icon: Cloud, title: "Multi-Cloud Mesh" },
              { icon: Zap, title: "Instant Hydration" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={ { opacity: 0, scale: 0.9 } }
                whileInView={ { opacity: 1, scale: 1 } }
                viewport={ { once: true } }
                transition={ { delay: i * 0.1 } }
                whileHover={ { scale: 1.05, background: "rgba(255,94,54,0.05)" } }
                className="p-8 rounded-[2rem] border border-white/5 bg-white/5 backdrop-blur-xl group transition-all"
              >
                <item.icon className="w-10 h-10 text-primary mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-bold text-white leading-tight">{item.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
