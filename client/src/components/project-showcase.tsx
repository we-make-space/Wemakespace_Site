import { motion } from "framer-motion";
import { Link } from "wouter";
import hivesImage from "@assets/generated_images/luxurious-modern-digital-real-estate-interface_1.png";
import fashnectImage from "@assets/generated_images/vibrant-social-commerce-mobile-interface_1.png";

const platforms = [
  {
    title: "Hives",
    subtitle: "Real Estate Ecosystem",
    description: "High-performance spatial platform for high-stakes property development and management.",
    image: hivesImage,
    tags: ["Real Estate", "Spatial UI"],
    href: "/stack"
  },
  {
    title: "Fashnect",
    subtitle: "Social Ecommerce",
    description: "The next generation of style discovery. A high-performance digital ecosystem for creators.",
    image: fashnectImage,
    tags: ["Ecommerce", "Resonance"],
    href: "/stack"
  }
];

export function ProjectShowcase() {
  return (
    <section id="platforms" className="py-40 bg-background relative">
      <div className="container px-6 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Ecosystem Leaders</span>
            <h2 className="text-6xl md:text-8xl font-display font-black tracking-tighter uppercase leading-[0.85]">
              Flagship <br/><span className="text-primary italic">Platforms.</span>
            </h2>
          </div>
          <Link href="/stack">
            <button className="text-lg font-bold tracking-widest uppercase hover:text-primary transition-colors border-b-2 border-primary pb-2 flex items-center gap-4 group">
              Explore the Stack
              <motion.span animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>→</motion.span>
            </button>
          </Link>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {platforms.map((platform, i) => (
            <Link key={i} href={platform.href}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-[3rem] aspect-[16/10] mb-8 bg-muted border border-white/5">
                  <motion.img
                    src={platform.image}
                    alt={platform.title}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-12">
                    <p className="text-white text-xl font-light max-w-sm">
                      {platform.description}
                    </p>
                  </div>
                  <div className="absolute top-8 right-8 bg-white/10 backdrop-blur-xl border border-white/20 px-6 py-2 rounded-full text-white text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                    View Platform
                  </div>
                </div>
                
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-4xl font-display font-black uppercase tracking-tighter mb-2 group-hover:text-primary transition-colors">
                      {platform.title}
                    </h3>
                    <p className="text-xl text-muted-foreground font-light">{platform.subtitle}</p>
                  </div>
                  <div className="flex gap-3">
                    {platform.tags.map(tag => (
                      <span key={tag} className="text-[10px] uppercase tracking-widest font-black border border-primary/20 bg-primary/5 text-primary px-4 py-1.5 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
