import { motion } from "framer-motion";
import { Link } from "wouter";
import { useState } from "react";
import { ContactModal } from "./contact-modal";
import { Mail, ArrowRight, Instagram, Linkedin, Twitter } from "lucide-react";
import newsletterImage from "@assets/stock_images/modern_futuristic_te_6e525343.jpg";
import { WemakeSpaceLogo } from "./wemakespaceLogo";
// import { VERSION } from "@/lib/version";

interface FooterProps {
  showCTA?: boolean;
}

export function Footer({ showCTA = false }: FooterProps) {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [email, setEmail] = useState("");

  return (
    <footer className="bg-foreground text-background py-8 min-[375px]:py-10 sm:py-14 md:py-16 relative overflow-hidden">
      {/* Newsletter CTA Section */}
      {showCTA && (
        <div className="container px-3 min-[375px]:px-4 sm:px-6 mx-auto mb-10 min-[375px]:mb-16 sm:mb-24 md:mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-primary/10 border border-primary/20 p-4 min-[375px]:p-5 sm:p-6 md:p-8 lg:p-12 rounded-[1.5rem] min-[375px]:rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3rem] text-foreground flex flex-col md:flex-row items-center gap-4 min-[375px]:gap-6 sm:gap-8 md:gap-12 overflow-hidden relative"
          >
            <div className="absolute inset-0 opacity-10 z-0">
              <img src={newsletterImage} alt="Newsletter Background" className="w-full h-full object-cover" />
            </div>
            
            <div className="relative z-10 flex-1 w-full text-center md:text-left">
              <h2 className="text-xl min-[375px]:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-black tracking-tighter uppercase leading-tight mb-2 min-[375px]:mb-3 sm:mb-6">
                Stay in the <br/><span className="text-primary italic">loop.</span>
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl font-light text-muted-foreground leading-snug max-w-xl">
                Get the latest insights, product updates, and industry trends delivered to your inbox.
              </p>
            </div>

            <div className="relative z-10 w-full md:w-auto md:min-w-[280px] lg:min-w-[320px]">
              <div className="flex flex-col gap-3 sm:gap-4">
                <div className="relative">
                  <input 
                    type="email" 
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-background border border-white/10 rounded-full py-3 sm:py-4 px-4 sm:px-6 text-foreground text-sm sm:text-base focus:border-primary outline-none transition-colors min-h-[48px]"
                  />
                  <Mail className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full md:w-auto min-h-[48px] bg-primary text-white py-3 sm:py-4 rounded-full font-black text-sm sm:text-base uppercase tracking-widest hover:shadow-xl transition-all flex items-center justify-center gap-3"
                >
                  Subscribe <ArrowRight size={18} />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />

      <div className="container px-3 min-[375px]:px-4 sm:px-6 mx-auto max-w-[100vw]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 min-[375px]:gap-8 sm:gap-10 md:gap-12 mb-6 min-[375px]:mb-8 sm:mb-12">
          <div className="sm:col-span-2 flex flex-col items-start gap-4 sm:gap-6">
            <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-6">
              <WemakeSpaceLogo className={"rounded shrink-0"} size={28} />
              <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-bold">
                Wemakespace<span className="text-primary">.</span>
              </h2>
            </div>
            <p className="text-neutral-400 text-sm sm:text-base max-w-sm">
              Making room for you. Creating sustainable, beautiful, and functional applications for the modern world.
            </p>
            <div className="flex items-center gap-3 mt-4">
              <span className="text-neutral-500 text-sm mr-2">Follow us</span>
              <a
                href="https://www.instagram.com/wemakespace1/"
                title="Instagram"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-white/5 transition-colors text-neutral-400 hover:text-primary"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://x.com/wemakespace1?s=21"
                title="Twitter"
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-white/5 transition-colors text-neutral-400 hover:text-primary"
              >
                <Twitter size={18} />
              </a>
              <a
                href="https://www.linkedin.com/company/wemakespace/"
                title="LinkedIn"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-white/5 transition-colors text-neutral-400 hover:text-primary"
              >
                <Linkedin size={18} />
              </a>
            </div>
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
              <li><Link href="/contact" className="hover:text-primary transition-colors cursor-pointer">Contact Us</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-6 sm:pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs sm:text-sm text-neutral-500 text-center md:text-left">
          <p>Copyright © {new Date().getFullYear()} Wemakespace LLC. All rights reserved. {/* <span className="text-neutral-600" title="Site version">v{VERSION}</span> */}</p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
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
