import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { BentoGrid } from "@/components/bento-grid";
import { Features } from "@/components/features";
import { Testimonials } from "@/components/testimonials";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20 selection:text-primary">
      <Nav />
      <main>
        <Hero />
        <BentoGrid />
        <Features />
        <Testimonials />
        
        {/* Simple CTA Section */}
        <section className="py-24 px-6 container mx-auto text-center">
          <div className="max-w-3xl mx-auto bg-neutral-100 dark:bg-neutral-900 rounded-[2.5rem] p-12 md:p-20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-secondary" />
            
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">
              Ready to make space?
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-xl mx-auto">
              Let's discuss your next project. We're currently accepting new commissions for 2026.
            </p>
            <button className="bg-foreground text-background px-8 py-4 rounded-full font-semibold text-lg hover:bg-foreground/90 transition-transform hover:scale-105">
              Contact Us
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
