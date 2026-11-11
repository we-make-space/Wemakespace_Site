"use client";

import { motion } from "framer-motion";
import { Nav } from "@/components/nav";
import { SEO } from "@/components/seo";
import { getOgImageUrl } from "@/lib/og-images";
import { Footer } from "@/components/footer";
import { MapPin, Mail, Phone, Calendar, Building2, Globe, MessageCircle, ArrowRight } from "lucide-react";
import { useBackNavigation } from "@/hooks/useBackNavigation";

const COMPANY = {
  name: "Wemakespace LLC",
  tagline: "Making room for you.",
  established: "14/02/2025",
  email: "wemakespace1@gmail.com",
  emailInquiries: "contact@wemakespace.org",
  phone: "+233 54 206 8078",
  phoneAlt: "+233 54 412 1741",
  address: "Sunyani, Ghana",
  addressLine2: "Adjacent Twene Amanfo · Sunyani",
  officeImage: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
};

const CARD_IMAGES = {
  email: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?w=600&auto=format&fit=crop&q=80",
  business: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&auto=format&fit=crop&q=80",
  phone: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=600&auto=format&fit=crop&q=80",
  company: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&auto=format&fit=crop&q=80",
  established: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=80",
  location: "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=600&auto=format&fit=crop&q=80",
};

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } } };
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

export function ContactPage() {
  const goBack = useBackNavigation("/");
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO title="Contact Us" description="Contact Wemakespace for web, mobile, AI, and Web3 development. Talk to our engineering team." image={getOgImageUrl("contact")} />
      <Nav />

      <main className="pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-24 md:pb-40">
        <section className="relative w-full box-border px-4 sm:px-6 mx-auto mb-16 sm:mb-24 md:mb-32 max-w-[100vw] overflow-hidden rounded-2xl sm:rounded-3xl">
          <div className="absolute inset-0 -z-10">
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&auto=format&fit=crop&q=80" alt="" className="w-full h-full object-cover opacity-25 min-h-[280px]" aria-hidden />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent" />
          </div>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="relative z-10 max-w-4xl py-8 sm:py-12">
            <span className="inline-block px-4 sm:px-6 py-1.5 sm:py-2 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-bold tracking-[0.2em] uppercase border border-primary/20 mb-4 sm:mb-6">
              Get in touch
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-display font-black tracking-tighter uppercase leading-[0.9] mb-4 sm:mb-6">
              Contact <span className="text-primary italic">Us.</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground font-light max-w-2xl">
              We&apos;d love to hear from you. Reach out for partnerships, projects, or just to say hello.
            </p>
          </motion.div>
        </section>

        <section className="w-full box-border px-4 sm:px-6 mx-auto mb-20 sm:mb-28 max-w-[100vw]">
          <div className="max-w-6xl mx-auto">
            <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {[
                { img: CARD_IMAGES.email, icon: Mail, title: "Email", value: COMPANY.email, sub: "General inquiries", href: `mailto:${COMPANY.email}` },
                { img: CARD_IMAGES.business, icon: MessageCircle, title: "Business", value: COMPANY.emailInquiries, sub: "Partnerships & projects", href: `mailto:${COMPANY.emailInquiries}` },
                { img: CARD_IMAGES.phone, icon: Phone, title: "Phone", value: COMPANY.phone, sub: COMPANY.phoneAlt, href: null },
                { img: CARD_IMAGES.company, icon: Building2, title: "Company", value: COMPANY.name, sub: COMPANY.tagline, href: null },
                { img: CARD_IMAGES.established, icon: Calendar, title: "Established", value: `Est. ${COMPANY.established}`, sub: null, href: null },
                { img: CARD_IMAGES.location, icon: Globe, title: "Location", value: COMPANY.address, sub: COMPANY.addressLine2, href: null },
              ].map((card) => {
                const content = (
                  <>
                    <img src={card.img} alt="" className="absolute inset-0 w-full h-full object-cover opacity-15 group-hover:opacity-25 group-hover:scale-105 transition-all duration-500" aria-hidden />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/95 to-background/80" />
                    <div className="relative z-10 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform border border-primary/20">
                      <card.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="relative z-10 min-w-0">
                      <h3 className="font-display font-bold uppercase tracking-tight text-sm text-muted-foreground mb-1">{card.title}</h3>
                      <p className="font-medium text-foreground group-hover:text-primary transition-colors truncate">{card.value}</p>
                      {card.sub && <p className="text-xs text-muted-foreground mt-1">{card.sub}</p>}
                    </div>
                  </>
                );
                const className = "group relative flex items-start gap-4 p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-background border border-foreground/10 overflow-hidden min-h-[140px] hover:border-primary/30 transition-colors duration-300";
                return card.href ? (
                  <motion.a key={card.title} href={card.href} variants={item} whileHover={{ y: -4 }} className={`${className} cursor-pointer`}>
                    {content}
                  </motion.a>
                ) : (
                  <motion.div key={card.title} variants={item} whileHover={{ y: -4 }} className={className}>
                    {content}
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        <section className="w-full box-border px-4 sm:px-6 mx-auto mb-20 sm:mb-28 max-w-[100vw]">
          <div className="max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8 sm:mb-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-black tracking-tighter uppercase mb-2">
                Where we <span className="text-primary italic">are</span>
              </h2>
              <p className="text-muted-foreground font-light">Based in {COMPANY.address}. We work remotely with clients and partners worldwide.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="relative rounded-2xl sm:rounded-3xl md:rounded-[2.5rem] overflow-hidden border border-foreground/10 aspect-[16/10] sm:aspect-[21/9] max-h-[400px] sm:max-h-[420px]">
              <img src={COMPANY.officeImage} alt="Wemakespace — our space" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3 text-foreground">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-display font-bold uppercase tracking-tight">{COMPANY.address}</p>
                    <p className="text-sm text-muted-foreground">{COMPANY.addressLine2}</p>
                  </div>
                </div>
                <a href="https://www.google.com/maps/search/?api=1&query=Sunyani+Ghana" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 min-h-[48px] px-5 py-3 rounded-full bg-primary text-primary-foreground font-bold text-sm uppercase tracking-widest hover:bg-primary/90 transition-colors">
                  Open in Maps <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="w-full box-border px-4 sm:px-6 mx-auto max-w-[100vw]">
          <div className="max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative rounded-2xl sm:rounded-3xl bg-foreground/5 border border-foreground/10 p-8 sm:p-10 md:p-12 text-center overflow-hidden">
              <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&auto=format&fit=crop&q=80" alt="" className="absolute inset-0 w-full h-full object-cover opacity-10" aria-hidden />
              <div className="relative z-10">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-bold uppercase tracking-tighter mb-3">Prefer to send a message?</h2>
                <p className="text-muted-foreground font-light mb-6 max-w-xl mx-auto">Email us directly and we&apos;ll get back to you as soon as we can.</p>
                <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
                  <motion.a href="mailto:wemakespace1@gmail.com" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-flex items-center gap-2 min-h-[48px] px-6 py-3 rounded-full bg-primary text-primary-foreground font-bold text-sm uppercase tracking-widest hover:bg-primary/90 transition-colors">
                    Send us an email <ArrowRight className="w-4 h-4" />
                  </motion.a>
                  <button type="button" onClick={goBack} className="inline-flex items-center gap-2 min-h-[48px] px-6 py-3 rounded-full border border-foreground/20 font-bold text-sm uppercase tracking-widest hover:bg-foreground/5 transition-colors">
                    Back to Home
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
