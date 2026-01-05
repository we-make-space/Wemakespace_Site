import { motion } from "framer-motion";
import iconicProject from "@assets/generated_images/futuristic_3d_interface_for_a_high-end_software_project..png";
import { ArrowRight, Sparkles, Box } from "lucide-react";

export function IconicProject() {
  return (
    <section className="py-40 bg-black relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 blur-[150px] rounded-full" />
      
      <div className="container px-6 mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center mb-20"
        >
          <span className="px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-md flex items-center gap-2">
            <Sparkles className="w-4 h-4" /> Iconic Release 2026
          </span>
          <h2 className="text-6xl md:text-8xl font-display font-black text-white leading-none tracking-tighter">
            Introducing <span className="text-primary italic">AetherOS.</span>
          </h2>
        </motion.div>

        <div className="relative group">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-[4rem] overflow-hidden border border-white/10 aspect-video md:aspect-[21/9] bg-neutral-900 shadow-2xl"
          >
            <img 
              src={iconicProject} 
              alt="AetherOS Interface" 
              className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
            
            <div className="absolute bottom-0 left-0 right-0 p-12 md:p-20 flex flex-col md:flex-row justify-between items-end gap-8">
              <div className="max-w-xl text-left">
                <div className="flex items-center gap-3 mb-4">
                  <Box className="w-6 h-6 text-primary" />
                  <span className="text-white/40 font-mono text-sm tracking-widest uppercase font-bold">Project Alpha-01</span>
                </div>
                <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                  The spatial operating system for deep tech.
                </h3>
                <p className="text-xl text-white/60 font-light leading-relaxed">
                  AetherOS redefines human-computer interaction with neural-latency synchronization and decentralized intelligence.
                </p>
              </div>
              
              <button className="bg-white text-black px-12 py-6 rounded-full font-black text-xl uppercase tracking-widest flex items-center gap-4 hover:bg-primary hover:text-white transition-all shadow-2xl">
                Explore Case Study
                <ArrowRight className="w-6 h-6" />
              </button>
            </div>
          </motion.div>
          
          {/* Decorative floating badges */}
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -top-10 -right-10 bg-primary p-8 rounded-[2rem] shadow-2xl hidden lg:block"
          >
            <span className="text-white font-black text-2xl tracking-tighter">98% Beta <br/> Efficiency</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
