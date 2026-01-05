import { motion } from "framer-motion";
import { useState } from "react";
import { Nav } from "@/components/nav";
import { SEO } from "@/components/seo";
import { Hero } from "@/components/hero";
import { BentoGrid } from "@/components/bento-grid";
import { TechSpecs } from "@/components/tech-specs";
import { StatsSection } from "@/components/stats-section";
import { IconicProject } from "@/components/iconic-project";
import { TrustSection } from "@/components/trust-section";
import { Features } from "@/components/features";
import { ProjectShowcase } from "@/components/project-showcase";
import { Process } from "@/components/process";
import { Testimonials } from "@/components/testimonials";
import { Footer } from "@/components/footer";
import { ContactModal } from "@/components/contact-modal";
import { EventSection } from "@/components/event-section";
// import { BentoCard } from "@/components/BentoCard";
import { useBentoItems } from "@/hooks/use-content";
import { BentoCard } from "@/components/BentoCard";

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const { data: bentoItems = [] } = useBentoItems();
  return (
    <div className="min-h-screen bg-black text-foreground font-sans selection:bg-primary/20 selection:text-primary overflow-x-hidden">
      <SEO title="Home" description="Building the future of spatial computing and digital resonance." />
      <Nav />
      <main>
        <Hero />
        <IconicProject />
        <TrustSection />
        <BentoGrid />
        {/* <StatsSection /> */}
        <ProjectShowcase />
        {/* <TechSpecs /> */}
        <EventSection />
        {/* <Features /> */}
        {/* <BentoCard /> */}
        {/* <Process /> */}
        <Testimonials />
        
        {/* Final CTA / Connect Section */}
        <section className="py-16 sm:py-24 md:py-32 lg:py-40 px-4 sm:px-6 container mx-auto text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,#FF5E3615,transparent)]" />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto bg-white/5 border border-white/10 rounded-[2rem] sm:rounded-[3rem] md:rounded-[4rem] p-6 sm:p-10 md:p-16 lg:p-24 xl:p-32 relative overflow-hidden backdrop-blur-3xl shadow-[0_0_100px_rgba(0,0,0,0.5)]"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
            
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-display font-black text-white mb-6 sm:mb-12 tracking-tighter leading-[0.9]">
              BUILD THE <br/><span className="text-primary italic">FUTURE</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 sm:mb-12 md:mb-16 max-w-2xl mx-auto font-light leading-relaxed px-1">
              We specialize in engineering high-performance digital ecosystems. If it's useful, we build it well and connect it to the world.
            </p>
            
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 sm:gap-6">
              <motion.button 
                whileHover={{ scale: 1.02, boxShadow: "0 0 50px rgba(255,94,54,0.5)" }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsContactOpen(true)}
                className="w-full sm:w-auto min-h-[48px] bg-primary text-white px-6 sm:px-12 md:px-16 py-4 sm:py-6 md:py-8 rounded-full font-black text-base sm:text-lg md:text-xl uppercase tracking-[0.15em] sm:tracking-[0.2em] shadow-[0_0_30px_rgba(255,94,54,0.3)]"
              >
                Connect Now
              </motion.button>
              
              <motion.button 
                whileHover={{ scale: 1.02, background: "rgba(255,255,255,0.1)" }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsContactOpen(true)}
                className="w-full sm:w-auto min-h-[48px] bg-white/5 border border-white/10 text-white px-6 sm:px-12 md:px-16 py-4 sm:py-6 md:py-8 rounded-full font-black text-base sm:text-lg md:text-xl uppercase tracking-[0.15em] sm:tracking-[0.2em] backdrop-blur-xl"
              >
                Start Project
              </motion.button>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer showCTA={true} />
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  );
}
