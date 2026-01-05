import { motion } from "framer-motion";
import { CheckCircle2, Clock, Globe2, ShieldCheck } from "lucide-react";

const features = [
  {
    title: "Global Compliance",
    desc: "Adhering to regional data sovereignty and privacy standards worldwide.",
    icon: Globe2
  },
  {
    title: "Zero Trust Security",
    desc: "Rigorous identity verification for every user and device interaction.",
    icon: ShieldCheck
  },
  {
    title: "Self-Healing Infra",
    desc: "Automated recovery and scaling without manual intervention.",
    icon: Clock
  },
  {
    title: "Quality Guaranteed",
    desc: "Rigorous automated testing and code quality benchmarks.",
    icon: CheckCircle2
  }
];

export function TrustSection() {
  return (
    <section className="py-32 bg-black relative overflow-hidden">
      <div className="container px-6 mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-5xl md:text-6xl font-display font-black text-white leading-none tracking-tighter mb-8">
              Reliability <br/>
              <span className="text-primary italic">Engineered.</span>
            </h2>
            <p className="text-xl text-muted-foreground font-light leading-relaxed mb-12">
              We build systems that don't just work—they endure. Our focus on 
              resilience ensures your digital space is always available.
            </p>
            <div className="space-y-6">
              {features.map((f, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4 items-start p-6 rounded-2xl bg-white/5 border border-white/10"
                >
                  <f.icon className="w-6 h-6 text-primary shrink-0" />
                  <div>
                    <h3 className="text-white font-bold mb-1">{f.title}</h3>
                    <p className="text-sm text-muted-foreground">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="relative aspect-square">
            <div className="absolute inset-0 bg-primary/20 blur-[120px] rounded-full animate-pulse" />
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
              className="relative w-full h-full border-2 border-dashed border-white/10 rounded-full flex items-center justify-center"
            >
               <div className="w-3/4 h-3/4 border-2 border-primary/20 rounded-full animate-reverse-spin" />
            </motion.div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-7xl font-display font-black text-white">99.99</div>
                <div className="text-primary font-bold tracking-[0.3em] uppercase text-sm">Uptime SLA</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
