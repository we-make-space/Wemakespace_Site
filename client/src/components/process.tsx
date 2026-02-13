import { motion } from "framer-motion";

const steps = [
  { title: "Consult", desc: "Understanding your technical needs and vision." },
  { title: "Design", desc: "Crafting a bespoke concept using 3D modeling." },
  { title: "Refine", desc: "Iterating until the harmony is perfect." },
  { title: "Execute", desc: "Bringing the vision to life with precision." }
];

export function Process() {
  return (
    <section className="py-24 bg-secondary/5">
      <div className="container px-6 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold">The Way We Work</h2>
        </div>
        <div className="grid md:grid-cols-4 gap-12 relative">
          <div className="hidden md:block absolute top-1/4 left-0 w-full h-px bg-primary/10 -z-10" />
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 rounded-full bg-background border-2 border-primary/20 flex items-center justify-center font-display font-bold text-xl mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                {i + 1}
              </div>
              <h3 className="text-lg font-bold mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
