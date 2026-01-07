import { motion } from "framer-motion";
import { Link } from "wouter";
import { useState } from "react";
import { ContactModal } from "./contact-modal";
import { ArrowRight } from "lucide-react";

interface FooterProps {
  showCTA?: boolean;
}

export function Footer({ showCTA = false }: FooterProps) {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <footer className="bg-foreground text-background py-16 relative overflow-hidden">
      {/* Dynamic CTA Section */}
      {showCTA && (
        <div className="container px-6 mx-auto mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-primary p-12 md:p-24 rounded-[3rem] text-primary-foreground flex flex-col md:flex-row items-center justify-between gap-12 group"
          >
            <div className="max-w-2xl">
              <h2 className="text-5xl md:text-7xl font-display font-black tracking-tighter uppercase leading-none mb-8">
                Ready to <br/><span className="italic">Resonate?</span>
              </h2>
              <p className="text-xl md:text-2xl font-light opacity-90 leading-tight">
                We're currently accepting high-impact projects for Q1 2026. Let's build something extraordinary together.
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsContactOpen(true)}
              className="bg-white text-primary px-12 py-6 rounded-full font-black text-xl uppercase tracking-widest hover:shadow-2xl transition-all flex items-center gap-4 whitespace-nowrap"
            >
              Start Project <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      )}

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />

      <div className="container px-6 mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-display font-bold mb-6">
              Wemakespace<span className="text-primary">.</span>
            </h2>
            <p className="text-neutral-400 max-w-sm">
              Making room for you. Creating sustainable, beautiful, and functional spaces for the modern world.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Sitemap</h4>
            <ul className="space-y-2 text-neutral-400">
              <li><Link href="/stack" className="hover:text-primary transition-colors cursor-pointer">Platforms</Link></li>
              <li><Link href="/solutions" className="hover:text-primary transition-colors cursor-pointer">Solutions</Link></li>
              <li><Link href="/cases" className="hover:text-primary transition-colors cursor-pointer">Case Studies</Link></li>
              <li><Link href="/vision" className="hover:text-primary transition-colors cursor-pointer">Vision</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Studio</h4>
            <ul className="space-y-2 text-neutral-400">
              <li><Link href="/vision" className="hover:text-primary transition-colors cursor-pointer">Our Studio</Link></li>
              <li><Link href="/team" className="hover:text-primary transition-colors cursor-pointer">Team</Link></li>
              <li><Link href="/cases" className="hover:text-primary transition-colors cursor-pointer">Insights</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center text-sm text-neutral-500">
          <p>© 2026 Wemakespace. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy">
              <a className="hover:text-neutral-300">Privacy Policy</a>
            </Link>
            <Link href="/terms">
              <a className="hover:text-neutral-300">Terms of Service</a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
