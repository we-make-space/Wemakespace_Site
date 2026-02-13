import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Box } from "lucide-react";

export function IconicProject() {
  return (
    <section className="py-8 min-[375px]:py-12 sm:py-16 md:py-24 lg:py-32 xl:py-40 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] md:w-[800px] md:h-[800px] bg-primary/5 blur-[100px] sm:blur-[120px] md:blur-[150px] rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      
      <div className="container px-3 min-[375px]:px-4 sm:px-6 mx-auto max-w-[100vw] relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-col items-center text-center mb-6 min-[375px]:mb-8 sm:mb-12 md:mb-16 lg:mb-20 w-full"
          >
            <span className="px-3 sm:px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-[10px] sm:text-xs font-bold uppercase tracking-[0.15em] sm:tracking-widest mb-3 sm:mb-4 md:mb-6 backdrop-blur-md flex items-center gap-1.5 sm:gap-2">
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" /> Iconic Release 2026
            </span>
            <h2 className="text-2xl min-[375px]:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-display font-black text-foreground leading-[0.95] sm:leading-none tracking-tighter max-w-[90vw] sm:max-w-none">
              Introducing <span className="text-primary italic">Fashnect.</span>
            </h2>
          </motion.div>

          <div className="w-full flex justify-center items-center overflow-hidden">
            <div className="relative group w-full max-w-[calc(100vw-2rem)] min-[375px]:max-w-[calc(100vw-2.5rem)] sm:max-w-[calc(100vw-3rem)] md:max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative rounded-xl min-[375px]:rounded-[1.25rem] sm:rounded-[1.5rem] md:rounded-[2rem] lg:rounded-[3rem] xl:rounded-[4rem] overflow-hidden border border-foreground/10 aspect-video md:aspect-[21/9] bg-muted shadow-xl sm:shadow-2xl bg-orange-400 min-h-[140px] min-[375px]:min-h-[180px] sm:min-h-[220px] md:min-h-0"
              >
                <img 
                  src="/fashnect_image_vendor.png" 
                  alt="Fashnect Interface" 
                  className="absolute inset-0 w-full h-full object-cover object-center opacity-80 group-hover:scale-105 transition-transform duration-1000"
                />
            
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent sm:from-background sm:via-transparent sm:to-transparent opacity-80 sm:opacity-60" />
            
            <div className="absolute bottom-0 left-0 right-0 p-3 min-[375px]:p-4 sm:p-6 md:p-10 lg:p-12 xl:p-20 flex flex-col md:flex-row justify-between items-stretch md:items-end gap-3 min-[375px]:gap-4 sm:gap-6 md:gap-8">
              <div className="max-w-xl text-left min-w-0">
                <div className="flex items-center gap-3 mb-2 sm:mb-4 invisible">
                  <Box className="w-6 h-6 text-primary" />
                  <span className="text-muted-foreground font-mono text-sm tracking-widest uppercase font-bold">Social E-commerce App</span>
                </div>
                <h3 className="text-lg min-[375px]:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-display font-bold text-foreground mb-1.5 min-[375px]:mb-2 sm:mb-4 md:mb-6 leading-tight">
                  Buy, Sell, Express - fashnect.
                </h3>
                <p className="text-xs min-[375px]:text-sm sm:text-base md:text-lg lg:text-xl text-foreground font-light leading-snug sm:leading-relaxed line-clamp-2 sm:line-clamp-none">
                  We’re creating a platform that works like your favorite marketplace — but feels like your favorite social app.
                </p>
              </div>
              
              <a
                href="https://fashnect.com"
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] sm:min-h-[48px] bg-foreground text-background px-4 min-[375px]:px-5 sm:px-6 md:px-8 lg:px-12 py-2.5 min-[375px]:py-3 sm:py-4 md:py-5 lg:py-6 rounded-full font-black text-[11px] min-[375px]:text-xs sm:text-sm md:text-base lg:text-xl uppercase tracking-[0.1em] sm:tracking-widest flex items-center justify-center gap-1.5 min-[375px]:gap-2 sm:gap-4 hover:bg-primary hover:text-white transition-all shadow-2xl shrink-0"
              >
                Learn More
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              </a>
            </div>
          </motion.div>
          
              {/* Decorative floating badges */}
              {/* <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-10 -right-10 bg-primary p-8 rounded-[2rem] shadow-2xl hidden lg:block"
              >
                <span className="text-primary-foreground font-black text-2xl tracking-tighter">98% User <br/> Friendly</span>
              </motion.div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
