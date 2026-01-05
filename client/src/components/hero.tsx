import { motion, useScroll, useTransform } from "framer-motion";
import softwareHero from "@assets/generated_images/futuristic_digital_workspace_with_floating_ui_elements..png";
import { Code, Sparkles, Cpu } from "lucide-react";
import { useRef, useState } from "react";
import { ContactModal } from "./contact-modal";

export function Hero() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const yTranslate = useTransform(scrollYProgress, [0, 0.5], [0, -100]);

  return (
    <section ref={targetRef} className="relative min-h-[85vh] sm:min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20 pb-8">
      {/* Parallax Background */}
      <motion.div style={{ opacity, scale }} className="absolute inset-0 z-0">
        <img
          src={"Bg.png"}
          alt="Digital Engineering"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-90 scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/60 to-background" />
      </motion.div>

      <div className="container relative z-10 px-4 sm:px-6 mx-auto max-w-[100vw]">
        <motion.div 
          style={{ y: yTranslate, opacity }}
          className="max-w-5xl mx-auto text-center space-y-4 sm:space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.span 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-bold uppercase tracking-[0.2em] mb-12 backdrop-blur-2xl shadow-[0_0_20px_rgba(255,94,54,0.1)]"
            >
              <Sparkles className="w-4 h-4 animate-pulse" /> Next-Gen Software Company
            </motion.span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-black text-foreground leading-[0.85] tracking-tighter mb-4 sm:mb-8">
              <span className="block overflow-hidden">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                  className="block"
                >
                  We build
                </motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
                  className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] animate-gradient-x block"
                >
                  what's next.
                </motion.span>
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground/80 max-w-3xl mx-auto leading-snug sm:leading-tight font-light tracking-tight px-1"
          >
            Engineering seamless digital experiences.
            We build high-performance products for people, platforms, and the future.
          </motion.p>

          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 pt-8"
          >
            <motion.button 
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsContactOpen(true)}
              className="w-full sm:w-auto px-8 sm:px-12 py-3 sm:py-6 bg-primary text-primary-foreground rounded-full font-black text-lg sm:text-xl hover:shadow-[0_0_50px_-10px_rgba(255,94,54,0.6)] transition-all flex items-center justify-center gap-4 group relative overflow-hidden"
            >
              <span className="relative z-10">Start Building</span>
              <Code className="w-6 h-6 group-hover:rotate-[360deg] transition-transform duration-700 relative z-10" />
              <motion.div 
                className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"
                initial={false}
              />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05, background: "rgba(var(--foreground),0.1)" }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 sm:px-12 py-3 sm:py-6 bg-foreground/5 border border-foreground/10 text-foreground rounded-full font-black text-lg sm:text-xl transition-all backdrop-blur-3xl flex items-center justify-center gap-4 group"
            >
              View Stack
              <Cpu className="w-6 h-6 group-hover:scale-125 transition-transform" />
            </motion.button>
          </motion.div> */}
        </motion.div>
      </div>

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      
      {/* Animated Code Grid Lines */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent)]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#FF5E3615_1px,transparent_1px),linear-gradient(to_bottom,#FF5E3615_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground/40 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-primary/50 to-transparent" />
      </motion.div>
    </section>
  );
}
