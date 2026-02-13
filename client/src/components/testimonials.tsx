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
    <section className="py-8 min-[375px]:py-12 sm:py-16 md:py-24 bg-accent/90">
      <div className="container px-3 min-[375px]:px-4 sm:px-6 mx-auto max-w-[100vw]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 min-[375px]:gap-6 sm:gap-8 md:gap-12">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative p-4 min-[375px]:p-5 sm:p-6 md:p-8 lg:p-10 rounded-xl min-[375px]:rounded-2xl sm:rounded-3xl bg-background border border-border/50 shadow-sm hover:shadow-md transition-shadow"
            >
              <Quote className="w-6 h-6 min-[375px]:w-8 min-[375px]:h-8 sm:w-10 sm:h-10 text-primary/20 absolute top-3 right-3 min-[375px]:top-4 min-[375px]:right-4 sm:top-6 sm:right-6 md:top-8 md:right-8" />
              <p className="text-sm min-[375px]:text-base sm:text-lg md:text-xl lg:text-2xl font-medium mb-3 min-[375px]:mb-4 sm:mb-6 md:mb-8 leading-relaxed italic pr-6 min-[375px]:pr-8 sm:pr-10">
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
