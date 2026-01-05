import { motion } from "framer-motion";
import textureImage from "@assets/generated_images/close-up_of_high-end_architectural_materials_and_textures..png";

export function Features() {
  const items = [
    { title: "Sustainability", desc: "Materials chosen for longevity and planet impact." },
    { title: "Smart Integration", desc: "Technology hidden within beautiful design." },
    { title: "Ergonomics", desc: "Built around human comfort and productivity." }
  ];

  return (
    <section className="py-24 overflow-hidden">
      <div className="container px-6 mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="flex-1 relative group"
          >
            <div className="absolute -inset-4 bg-primary/20 rounded-3xl blur-2xl group-hover:bg-primary/30 transition-colors" />
            <img 
              src={textureImage} 
              alt="Material Textures" 
              className="relative rounded-3xl shadow-2xl object-cover aspect-[4/3] w-full"
            />
          </motion.div>
          
          <div className="flex-1 space-y-10">
            <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight">
              Crafted with <br/><span className="text-primary italic">intention.</span>
            </h2>
            <div className="space-y-8">
              {items.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-6"
                >
                  <div className="text-primary font-display text-4xl font-bold opacity-20">0{i+1}</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
