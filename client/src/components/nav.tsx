import { motion, useScroll, useSpring } from "framer-motion";
import { Link } from "wouter";
import { Menu, X, Terminal } from "lucide-react";
import { useState, useEffect } from "react";
import { ThemeToggle } from "./theme-provider";
import { ContactModal } from "./contact-modal";
import { WemakeSpaceLogo } from "./wemakespaceLogo";

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 pl-[env(safe-area-inset-left)] pr-[env(safe-area-inset-right)] ${
      scrolled ? "py-2 sm:py-4" : "py-3 sm:py-6 md:py-8"
    }`}>
      <div className="container mx-auto px-3 min-[375px]:px-4 sm:px-6 max-w-[100vw]">
        <motion.div 
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          className={`relative flex items-center justify-between px-3 min-[375px]:px-4 sm:px-6 md:px-8 h-12 min-[375px]:h-14 sm:h-16 md:h-20 rounded-full border transition-all duration-500 ${
            scrolled 
              ? "bg-black/40 backdrop-blur-2xl border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]" 
              : "bg-transparent border-transparent"
          }`}
        >
          <Link href="/">
            <a className="group flex items-center gap-1.5 min-[375px]:gap-2 sm:gap-3 min-h-[44px]">
              <div className="w-8 h-8 min-[375px]:w-9 min-[375px]:h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg sm:rounded-xl flex items-center justify-center shrink-0 group-hover:rotate-12 transition-transform duration-500">
                <WemakeSpaceLogo className={"rounded"} size={28} />
              </div>
              <span className="text-base min-[375px]:text-lg sm:text-xl md:text-2xl font-display font-black text-foreground tracking-tighter truncate max-w-[110px] min-[375px]:max-w-[140px] sm:max-w-none">
                Wemakespace<span className="text-primary">.</span>
              </span>
            </a>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-10">
            {[
              { name: "Platforms", path: "/stack" },
              { name: "Services", path: "/solutions" },
              { name: "Blog", path: "/cases" },
              { name: "Vision", path: "/vision" }
            ].map((item) => (
              <Link key={item.name} href={item.path}>
                <motion.a
                  whileHover={{ y: -2 }}
                  className="text-sm font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors relative group cursor-pointer"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </motion.a>
              </Link>
            ))}
            
            <ThemeToggle />
          </div>

          <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />

          {/* Mobile Toggle - stays visible above overlay when menu is open */}
          <div className={`lg:hidden flex items-center gap-2 ${isOpen ? "relative z-[110]" : "z-[100]"}`}>
            <ThemeToggle />
            <button
              className="min-w-[44px] min-h-[44px] flex items-center justify-center text-foreground transition-transform active:scale-90 rounded-full"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X className="w-8 h-8 text-primary" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </motion.div>
      </div>

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-[101]"
        style={ { scaleX } }
      />

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: "100%" }}
        transition={{ type: "tween", duration: 0.25 }}
        className="fixed inset-0 bg-background/98 backdrop-blur-3xl z-[90] lg:hidden flex flex-col items-center justify-center gap-4 min-[375px]:gap-6 px-4 min-[375px]:px-6 overflow-y-auto pt-14 min-[375px]:pt-16 pb-10 min-[375px]:pb-12"
      >
        {[
          { name: "Platforms", path: "/stack" },
          { name: "Services", path: "/solutions" },
          { name: "Blog", path: "/cases" },
          { name: "Vision", path: "/vision" }
        ].map((item, i) => (
          <Link key={item.name} href={item.path}>
            <motion.a
              initial={ { opacity: 0, y: 20 } }
              animate={isOpen ? { opacity: 1, y: 0 } : {}}
              transition={ { delay: i * 0.1 } }
              className="text-xl min-[375px]:text-2xl sm:text-4xl md:text-5xl font-display font-black text-foreground hover:text-primary transition-colors cursor-pointer block py-2.5 min-[375px]:py-3 min-h-[44px] min-[375px]:min-h-[48px]"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </motion.a>
          </Link>
        ))}
        <ThemeToggle />
      </motion.div>
    </nav>
  );
}
