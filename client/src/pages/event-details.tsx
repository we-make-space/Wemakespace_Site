import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, MapPin, Sparkles } from "lucide-react";

const EVENT = {
  title: "Getting started: As a Software Engineer 1.0",
  tagline: "A comprehensive guide to becoming a successful Software Engineer 1.",
  date: "Friday • April 25, 2025",
  time: "07:00 PM – 9:30 PM",
  location: "Microsoft Teams",
  description:
    "This workshop is designed to help you get started as a Software Engineer 1.0. We will cover the basics of software engineering and how to become a successful Software Engineer 1.0.",
  agenda: [
    { time: "07:00", item: "Opening keynote" },
    { time: "07:15", item: "Introduction to the workshop" },
    { time: "07:30", item: "Workshop content" },
    { time: "08:30", item: "Q&A" },
    { time: "09:00", item: "Closing" },
  ],
};

export default function EventDetails() {
  return (
    <div className="min-h-screen bg-background text-foreground" data-testid="page-event-details">
      <header className="relative overflow-hidden" data-testid="header-event-details">
        <div
          className="absolute inset-0 -z-10 opacity-70"
          style={{
            background:
              "radial-gradient(1200px 600px at 10% 20%, rgba(255,94,54,0.20), transparent 55%), radial-gradient(900px 520px at 70% 10%, rgba(255,94,54,0.14), transparent 55%)",
          }}
        />
        <div className="container mx-auto px-6 py-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            data-testid="link-back-home"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back
          </Link>
        </div>
      </header>

      <section className="container mx-auto px-6 pb-16" data-testid="section-event-details">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5"
          >
            <div className="rounded-3xl overflow-hidden shine-border grain-overlay bg-card" data-testid="card-event-image">
              <div className="relative">
                <img
                  src="/Wms_event.png"
                  alt="Event hero"
                  className="w-full aspect-[4/3] object-cover object-top"
                  data-testid="img-event-hero"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(180deg, rgba(0,0,0,0) 30%, rgba(0,0,0,0.35) 100%)",
                  }}
                />
                <div className="absolute left-5 bottom-5" data-testid="badge-event-highlight">
                  <div className="inline-flex items-center gap-2 rounded-full bg-background/80 dark:bg-background/20 backdrop-blur px-3 py-1 text-xs border border-border">
                    <Sparkles className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                    2025 Highlights
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="lg:col-span-7"
          >
            <h1
              className="text-4xl md:text-5xl font-display font-bold leading-[1.02]"
              data-testid="text-event-title"
            >
              {EVENT.title}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground" data-testid="text-event-tagline">
              {EVENT.tagline}
            </p>

            <div className="mt-7 grid sm:grid-cols-3 gap-3" data-testid="grid-event-meta">
              <div className="rounded-2xl border border-border bg-card px-4 py-3" data-testid="card-event-date">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" aria-hidden="true" />
                  Date
                </div>
                <div className="mt-1 font-medium" data-testid="text-event-date">
                  {EVENT.date}
                </div>
              </div>
              <div className="rounded-2xl border border-border bg-card px-4 py-3" data-testid="card-event-time">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" aria-hidden="true" />
                  Time
                </div>
                <div className="mt-1 font-medium" data-testid="text-event-time">
                  {EVENT.time}
                </div>
              </div>
              <div
                className="rounded-2xl border border-border bg-card px-4 py-3"
                data-testid="card-event-location"
              >
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                  Location
                </div>
                <div className="mt-1 font-medium" data-testid="text-event-location">
                  {EVENT.location}
                </div>
              </div>
            </div>

            <p className="mt-7 leading-relaxed text-muted-foreground" data-testid="text-event-description">
              {EVENT.description}
            </p>

            <div className="mt-10 rounded-3xl border border-border bg-card p-6" data-testid="card-event-agenda">
              <h2 className="text-xl font-display font-semibold" data-testid="text-agenda-title">
                Agenda highlights
              </h2>
              <div className="mt-5 space-y-3" data-testid="list-agenda">
                {EVENT.agenda.map((a) => (
                  <div
                    key={a.time}
                    className="flex items-start gap-4 rounded-2xl border border-border/60 bg-background/50 dark:bg-background/20 px-4 py-3"
                    data-testid={`row-agenda-${a.time}`}
                  >
                    <div className="font-mono text-sm text-primary" data-testid={`text-agenda-time-${a.time}`}>
                      {a.time}
                    </div>
                    <div className="font-medium" data-testid={`text-agenda-item-${a.time}`}>
                      {a.item}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3" data-testid="row-event-cta">
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-shadow"
                data-testid="button-register"
              >
                Register interest
              </a>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="inline-flex items-center justify-center rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium hover:bg-muted/60 transition-colors"
                data-testid="button-add-calendar"
              >
                Add to calendar
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
