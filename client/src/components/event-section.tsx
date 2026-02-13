import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowUpRight, Calendar, MapPin, Sparkles } from "lucide-react";

const NEXT_EVENT = {
  title: "Getting started: As a Software Engineer 1.0",
  subtitle: "A comprehensive guide to becoming a successful Software Engineer 1.",
  date: "Friday • April 25, 2025",
  location: "Microsoft Teams",
  blurb:
    "This workshop is designed to help you get started as a Software Engineer 1.0. We will cover the basics of software engineering and how to become a successful Software Engineer 1.0.",
};

export function EventSection() {
  return (
    <section className="relative py-8 min-[375px]:py-12 sm:py-16 md:py-24 overflow-hidden" data-testid="section-event">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(1200px 700px at 10% 30%, rgba(255,94,54,0.18), transparent 55%), radial-gradient(900px 520px at 70% 0%, rgba(255,94,54,0.14), transparent 55%)",
        }}
      />

      <div className="container px-3 min-[375px]:px-4 sm:px-6 mx-auto max-w-[100vw]">
        <div className="grid lg:grid-cols-12 gap-6 min-[375px]:gap-8 sm:gap-10 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: 0.55, ease: [0.2, 0.8, 0.2, 1] }}
            className="lg:col-span-5"
          >
            <div className="relative">
              <div
                className="absolute -inset-6 rounded-[2rem] blur-3xl"
                style={{
                  background:
                    "radial-gradient(55% 55% at 30% 40%, rgba(255,94,54,0.28), rgba(255,94,54,0) 65%)",
                }}
              />

              <div
                className="rounded-[2rem] overflow-hidden bg-card border border-border shadow-2xl shine-border grain-overlay"
                data-testid="card-event-preview"
              >
                <div className="relative aspect-[4/3] w-full min-h-0">
                  <img
                    src="/Wms_event.png"
                    alt="Next event preview"
                    className="absolute inset-0 h-full w-full object-cover object-top"
                    data-testid="img-event-preview"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: "linear-gradient(180deg, rgba(0,0,0,0) 35%, rgba(0,0,0,0.45) 100%)",
                    }}
                  />

                  <div className="absolute left-5 top-5" data-testid="badge-event-next">
                    <div className="inline-flex items-center gap-2 rounded-full bg-background/85 dark:bg-background/15 backdrop-blur px-3 py-1 text-xs border border-border">
                      <Sparkles className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                      2025 Highlight
                    </div>
                  </div>
                </div>

                <div className="p-3 min-[375px]:p-4 sm:p-5 md:p-6 lg:p-7">
                  <div className="flex items-center justify-between gap-3" data-testid="row-event-title">
                    <h2 className="text-lg min-[375px]:text-xl sm:text-2xl md:text-3xl font-display font-bold leading-tight">
                      {NEXT_EVENT.title}
                    </h2>
                    <div className="hidden sm:flex items-center justify-center h-10 w-10 rounded-full bg-primary/10 text-primary">
                      <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
                    </div>
                  </div>

                  <p className="mt-3 text-muted-foreground" data-testid="text-event-subtitle">
                    {NEXT_EVENT.subtitle}
                  </p>

                  <div className="mt-4 sm:mt-5 flex flex-wrap gap-2 sm:gap-3" data-testid="row-event-meta">
                    <div className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-border bg-background/70 dark:bg-background/10 px-2.5 sm:px-3 py-1 text-xs sm:text-sm">
                      <Calendar className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary shrink-0" aria-hidden="true" />
                      <span data-testid="text-event-date">{NEXT_EVENT.date}</span>
                    </div>
                    <div className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-border bg-background/70 dark:bg-background/10 px-2.5 sm:px-3 py-1 text-xs sm:text-sm">
                      <MapPin className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary shrink-0" aria-hidden="true" />
                      <span data-testid="text-event-location" className="truncate max-w-[140px] min-[375px]:max-w-[180px] sm:max-w-none">{NEXT_EVENT.location}</span>
                    </div>
                  </div>

                  <p className="mt-3 sm:mt-5 text-sm sm:text-base leading-relaxed text-muted-foreground line-clamp-3 sm:line-clamp-none" data-testid="text-event-blurb">
                    {NEXT_EVENT.blurb}
                  </p>

                  <div className="mt-7">
                    <Link
                      href="/event"
                      className="group inline-flex items-center gap-2 text-sm font-medium text-foreground"
                      data-testid="link-event-details"
                    >
                      <span className="relative">
                        View full details
                        <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100" />
                      </span>
                      <ArrowUpRight
                        className="h-4 w-4 text-primary transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        aria-hidden="true"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="lg:col-span-7 space-y-6 sm:space-y-8 md:space-y-10">
            <div>
              <p
                className="text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.22em] text-muted-foreground"
                data-testid="text-event-kicker"
              >
                Recap
              </p>
              <h2
                className="mt-2 sm:mt-3 text-xl min-[375px]:text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-display font-bold leading-[1.08]"
                data-testid="text-event-heading"
              >
                Recap of our 
                <span className="text-primary italic"> 2025 Highlights</span>
              </h2>
              <p className="mt-2 sm:mt-4 text-base sm:text-lg text-muted-foreground" data-testid="text-event-lede">
                We've had a great year and we're looking forward to what's next.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5" data-testid="grid-event-points">
              {[
                {
                  title: "Built for momentum",
                  desc: "Workshop on getting started as a Software Engineer 1.0",
                },
                {
                  title: "Industry Insights",
                  desc: "Insights from industry experts on the future of software engineering",
                },
                {
                  title: "Hands-on Learning",
                  desc: "Hands-on learning from the workshop",
                },
                {
                  title: "Networking",
                  desc: "Networking opportunities with other attendees",
                },
              ].map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ delay: i * 0.07 }}
                  className="rounded-2xl sm:rounded-3xl border border-border bg-card p-4 sm:p-5 md:p-6 hover:shadow-xl hover:shadow-primary/5 transition-shadow"
                  data-testid={`card-event-point-${i}`}
                >
                  <h3 className="text-base sm:text-lg font-semibold" data-testid={`text-event-point-title-${i}`}>
                    {p.title}
                  </h3>
                  <p
                    className="mt-1.5 sm:mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground"
                    data-testid={`text-event-point-desc-${i}`}
                  >
                    {p.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
