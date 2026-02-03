import { motion } from "framer-motion";
import { Link } from "wouter";
import { useState } from "react";
import { ContactModal } from "./contact-modal";
import { Mail, ArrowRight } from "lucide-react";
import newsletterImage from "@assets/stock_images/modern_futuristic_te_6e525343.jpg";
import { WemakeSpaceLogo } from "./wemakespaceLogo";

interface FooterProps {
  showCTA?: boolean;
}

export function Footer({ showCTA = false }: FooterProps) {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [email, setEmail] = useState("");

  return (
    <footer className="bg-foreground text-background py-16 relative overflow-hidden">
      {/* Newsletter CTA Section */}
      {showCTA && (
        <div className="container px-6 mx-auto mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-primary/10 border border-primary/20 p-8 md:p-12 rounded-[3rem] text-foreground flex flex-col md:flex-row items-center gap-12 overflow-hidden relative"
          >
            <div className="absolute inset-0 opacity-10 z-0">
              <img src={newsletterImage} alt="Newsletter Background" className="w-full h-full object-cover" />
            </div>
            
            <div className="relative z-10 flex-1">
              <h2 className="text-4xl md:text-6xl font-display font-black tracking-tighter uppercase leading-none mb-6">
                Stay in the <br/><span className="text-primary italic">Resonance.</span>
              </h2>
              <p className="text-lg md:text-xl font-light text-muted-foreground leading-tight max-w-xl">
                Get the latest insights on spatial UI, high-performance ecosystems, and digital architecture delivered to your inbox.
              </p>
            </div>

            <div className="relative z-10 w-full md:w-auto min-w-[320px]">
              <div className="flex flex-col gap-4">
                <div className="relative">
                  <input 
                    type="email" 
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-background border border-white/10 rounded-full py-4 px-6 text-foreground focus:border-primary outline-none transition-colors"
                  />
                  <Mail className="absolute right-6 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-primary text-white py-4 rounded-full font-black uppercase tracking-widest hover:shadow-xl transition-all flex items-center justify-center gap-3"
                >
                  Subscribe <ArrowRight size={18} />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />

      <div className="container px-6 mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2 flex flex-col items-start gap-6">
            <div className="flex items-center gap-3 mb-6">
              <WemakeSpaceLogo className={"rounded"} size={33} />
              <h2 className="text-3xl font-display font-bold">
                Wemakespace<span className="text-primary">.</span>
              </h2>
          </div>
            <p className="text-neutral-400 max-w-sm">
              Making room for you. Creating sustainable, beautiful, and functional spaces for the modern world.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Sitemap</h4>
            <ul className="space-y-2 text-neutral-400">
              <li><Link href="/stack" className="hover:text-primary transition-colors cursor-pointer">Our Platforms</Link></li>
              <li><Link href="/solutions" className="hover:text-primary transition-colors cursor-pointer">Our Services</Link></li>
              <li><Link href="/vision" className="hover:text-primary transition-colors cursor-pointer">Our Vision</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-neutral-400">
              <li><Link href="/cases" className="hover:text-primary transition-colors cursor-pointer">Blog</Link></li>
              <li><Link href="/event" className="hover:text-primary transition-colors cursor-pointer">Event Details</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center text-sm text-neutral-500">
          <p>© {new Date().getFullYear()} Wemakespace LLC. All rights reserved.</p>
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
