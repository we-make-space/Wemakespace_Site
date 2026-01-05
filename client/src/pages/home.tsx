import { motion } from "framer-motion";
import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { BentoGrid } from "@/components/bento-grid";
import { TechSpecs } from "@/components/tech-specs";
import { StatsSection } from "@/components/stats-section";
import { TrustSection } from "@/components/trust-section";
import { Features } from "@/components/features";
import { ProjectShowcase } from "@/components/project-showcase";
import { Process } from "@/components/process";
import { Testimonials } from "@/components/testimonials";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-foreground font-sans selection:bg-primary/20 selection:text-primary overflow-x-hidden">
      <Nav />
      <main>
        <Hero />
        <BentoGrid />
        <StatsSection />
        <TrustSection />
        <TechSpecs />
        <ProjectShowcase />
        <Features />
        <Process />
        <Testimonials />
        
        {/* Extreme CTA Section */}
        <section className="py-40 px-6 container mx-auto text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,#FF5E3615,transparent)]" />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto bg-white/5 border border-white/10 rounded-[4rem] p-16 md:p-32 relative overflow-hidden backdrop-blur-3xl shadow-[0_0_100px_rgba(0,0,0,0.5)]"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
            
            <h2 className="text-6xl md:text-9xl font-display font-black text-white mb-12 tracking-tighter leading-[0.85]">
              BUILD THE <br/><span className="text-primary italic">FUTURE</span>
            </h2>
            <p className="text-2xl text-muted-foreground mb-16 max-w-2xl mx-auto font-light leading-relaxed">
              Join the ecosystem of elite engineering. Let's build your digital space together.
            </p>
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0 0 50px rgba(255,94,54,0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-white px-16 py-8 rounded-full font-black text-2xl uppercase tracking-[0.2em] shadow-[0_0_30px_rgba(255,94,54,0.3)]"
            >
              Connect Now
            </motion.button>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
