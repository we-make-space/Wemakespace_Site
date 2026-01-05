import { motion } from "framer-motion";
import softwareHero from "@assets/generated_images/futuristic_digital_workspace_with_floating_ui_elements..png";
import { ArrowRight, Code, Sparkles, Cpu } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={softwareHero}
          alt="Digital Engineering"
          className="w-full h-full object-cover opacity-60 scale-110 blur-[2px]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div>

      <div className="container relative z-10 px-6 mx-auto">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-8 backdrop-blur-md">
              <Sparkles className="w-4 h-4" /> Next-Gen Software Studio
            </span>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-extrabold text-foreground leading-[0.85] tracking-tight">
              We build <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] animate-gradient-x">
                digital space.
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light"
          >
            Engineering seamless digital experiences. We create high-performance 
            software that makes room for your business to scale.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <button className="w-full sm:w-auto px-10 py-5 bg-primary text-primary-foreground rounded-2xl font-bold text-lg hover:shadow-[0_0_40px_-10px_rgba(255,94,54,0.5)] transition-all hover:-translate-y-1 flex items-center justify-center gap-3 group">
              Start Building
              <Code className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            </button>
            <button className="w-full sm:w-auto px-10 py-5 bg-white/5 border border-white/10 text-foreground rounded-2xl font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-xl flex items-center justify-center gap-3">
              View Stack
              <Cpu className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </div>
      
      {/* Animated Code Grid Lines */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20 [mask-image:radial-gradient(ellipse_at_center,black,transparent)]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>
    </section>
  );
}
