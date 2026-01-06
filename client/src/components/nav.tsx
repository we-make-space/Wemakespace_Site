import { motion, useScroll, useSpring } from "framer-motion";
import { Link } from "wouter";
import { Menu, X, Terminal } from "lucide-react";
import { useState, useEffect } from "react";
import { ThemeToggle } from "./theme-provider";

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);
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

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
      scrolled ? "py-4" : "py-8"
    }`}>
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          className={`relative flex items-center justify-between px-8 h-20 rounded-full border transition-all duration-500 ${
            scrolled 
              ? "bg-black/40 backdrop-blur-2xl border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]" 
              : "bg-transparent border-transparent"
          }`}
        >
          <Link href="/">
            <a className="group flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
                <Terminal className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-2xl font-display font-black text-foreground tracking-tighter">
                Wemakespace<span className="text-primary">.</span>
              </span>
            </a>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">
            {[
              { name: "Platforms", path: "/stack" },
              { name: "Solutions", path: "/solutions" },
              { name: "Insights", path: "/cases" },
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
            
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-primary-foreground px-8 py-3 rounded-full text-sm font-black uppercase tracking-widest hover:shadow-[0_0_30px_rgba(255,94,54,0.4)] transition-all"
            >
              Start Project
            </motion.button>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <button
              className="w-12 h-12 flex items-center justify-center text-foreground"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
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
        className="fixed inset-0 bg-background/95 backdrop-blur-3xl z-[90] md:hidden flex flex-col items-center justify-center gap-12"
      >
        {[
          { name: "Platforms", path: "/stack" },
          { name: "Solutions", path: "/solutions" },
          { name: "Insights", path: "/cases" },
          { name: "Vision", path: "/vision" }
        ].map((item, i) => (
          <Link key={item.name} href={item.path}>
            <motion.a
              initial={ { opacity: 0, y: 20 } }
              animate={isOpen ? { opacity: 1, y: 0 } : {}}
              transition={ { delay: i * 0.1 } }
              className="text-5xl font-display font-black text-foreground hover:text-primary transition-colors cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </motion.a>
          </Link>
        ))}
        <button className="mt-8 bg-primary text-primary-foreground px-12 py-5 rounded-full text-xl font-black uppercase tracking-widest">
          Get Started
        </button>
      </motion.div>
    </nav>
  );
}
