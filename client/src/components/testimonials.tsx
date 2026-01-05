import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Wemakespace completely redefined how we interact with our office. The flow is now natural and inspiring.",
    author: "Sarah Chen",
    role: "CEO, Nexa Design",
    avatar: "SC"
  },
  {
    quote: "Their eye for detail and spatial harmony is unmatched. Truly the best in the industry.",
    author: "Marcus Thorne",
    role: "Founder, Thorne Living",
    avatar: "MT"
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-accent/30">
      <div className="container px-6 mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative p-10 rounded-3xl bg-background border border-border/50 shadow-sm hover:shadow-md transition-shadow"
            >
              <Quote className="w-10 h-10 text-primary/20 absolute top-8 right-8" />
              <p className="text-xl md:text-2xl font-medium mb-8 leading-relaxed italic">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                  {t.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-foreground">{t.author}</h4>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
