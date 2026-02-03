import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { useTestimonials } from "@/hooks/use-content";

export function Testimonials() {
  const { data: testimonials = [], isLoading } = useTestimonials();

  if (isLoading) {
    return (
      <section className="py-24 bg-accent/90">
        <div className="container px-6 mx-auto">
          <div className="text-center">
            <p className="text-muted-foreground">Loading testimonials...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-accent/90">
      <div className="container px-6 mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
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
                {t.avatar_url ? (
                  <img
                    src={t.avatar_url}
                    alt={t.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                    {t.avatar_initials || t.author.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase()}
                  </div>
                )}
                <div>
                  <h4 className="font-bold text-foreground">{t.author}</h4>
                  {t.role && (
                    <p className="text-sm text-muted-foreground">{t.role}</p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
