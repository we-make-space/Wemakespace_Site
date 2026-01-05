import { motion } from "framer-motion";
import { Code2, BrainCircuit, GraduationCap, Compass } from "lucide-react";

const features = [
  {
    title: "Web & Mobile Applications",
    desc: "Design and development of scalable, high-performance web and mobile applications tailored to real business needs.",
    icon: Code2
  },
  {
    title: "AI-Powered Solutions",
    desc: "Intelligent applications powered by machine learning and automation to enhance decision-making and user experience.",
    icon: BrainCircuit
  },
  {
    title: "Software Training & Bootcamps",
    desc: "Hands-on training programs designed to equip individuals and teams with practical, industry-ready skills.",
    icon: GraduationCap
  },
  {
    title: "Technology Advisory & Strategy",
    desc: "Guidance on architecture, product direction, and technology decisions that drive long-term growth.",
    icon: Compass
  }
];

export function TrustSection() {
  return (
    <section className="py-16 sm:py-24 md:py-32 bg-black relative overflow-hidden">
      <div className="container px-4 sm:px-6 mx-auto max-w-[100vw]">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 lg:gap-20 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-black text-white leading-tight tracking-tighter mb-4 sm:mb-8">
              What We <br />
              <span className="text-primary">Build & Deliver.</span>
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-muted-foreground font-light leading-relaxed mb-6 sm:mb-12">
              WeMakeSpace provides end-to-end technology services focused on
              building robust digital products, empowering talent, and guiding
              businesses through modern technological challenges.
            </p>

            <div className="space-y-4 sm:space-y-6">
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-3 sm:gap-4 items-start p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10"
                >
                  <f.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary shrink-0 mt-0.5" />
                  <div className="min-w-0">
                    <h3 className="text-white font-bold mb-1 text-sm sm:text-base">{f.title}</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-snug">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative aspect-square max-h-[280px] sm:max-h-[340px] md:max-h-none mx-auto lg:mx-0 w-full order-first lg:order-none">
            <div className="absolute inset-0 bg-primary/20 blur-[120px] rounded-full animate-pulse" />

            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
              className="relative w-full h-full border-2 border-dashed border-white/10 rounded-full flex items-center justify-center"
            >
              <div className="w-3/4 h-3/4 border-2 border-primary/20 rounded-full animate-reverse-spin" />
            </motion.div>

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center px-2">
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-black text-white">
                  Services
                </div>
                <div className="text-primary font-bold tracking-[0.2em] sm:tracking-[0.3em] uppercase text-xs sm:text-sm mt-1">
                  Built To Scale
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
