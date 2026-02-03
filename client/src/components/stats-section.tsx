import { motion } from "framer-motion";
import { Users, Rocket, Trophy, Target } from "lucide-react";

const teamStats = [
  { label: "Engineers", value: "40+", icon: Users },
  { label: "Products Launched", value: "150+", icon: Rocket },
  { label: "Awards Won", value: "12", icon: Trophy },
  { label: "Success Rate", value: "98%", icon: Target },
];

export function StatsSection() {
  return (
    <section className="pb-32 bg-background relative overflow-hidden">
      <div className="container px-6 mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {teamStats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center group"
            >
              <div className="mb-6 inline-flex p-4 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                <stat.icon className="w-8 h-8" />
              </div>
              <div className="text-5xl font-display font-black text-white mb-2 tracking-tighter">
                {stat.value}
              </div>
              <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-bold">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
