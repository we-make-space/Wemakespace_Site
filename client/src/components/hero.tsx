import { motion } from "framer-motion";
import heroImage from "@assets/generated_images/abstract_3d_architectural_spatial_composition_with_orange_and_neutral_tones..png";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Abstract Spatial Design"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background/95" />
      </div>

      <div className="container relative z-10 px-6 mx-auto">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-primary/20 bg-primary/10 text-primary text-sm font-semibold mb-6 backdrop-blur-sm">
              Reimagining Spaces
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-foreground leading-[0.9] tracking-tighter">
              Making room <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                for you
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            We transform ordinary environments into extraordinary experiences. 
            Spatial design that breathes, functions, and inspires.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold text-lg hover:bg-primary/90 transition-transform hover:scale-105 flex items-center justify-center gap-2 group">
              Start Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-background/50 border border-input text-foreground rounded-full font-semibold text-lg hover:bg-background/80 transition-colors backdrop-blur-sm">
              View Portfolio
            </button>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative floating elements */}
      <motion.div 
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-10 hidden md:block"
      >
        <div className="w-24 h-24 rounded-2xl border-2 border-primary/20 backdrop-blur-sm" />
      </motion.div>
      
      <motion.div 
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-40 right-10 hidden md:block"
      >
        <div className="w-32 h-32 rounded-full border-2 border-secondary/30 backdrop-blur-sm" />
      </motion.div>
    </section>
  );
}
