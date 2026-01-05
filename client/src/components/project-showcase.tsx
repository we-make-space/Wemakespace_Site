import { motion } from "framer-motion";
import { Link } from "wouter";
import { usePlatforms } from "@/hooks/use-content";

export function ProjectShowcase() {
  const { data: platforms = [], isLoading } = usePlatforms();
  return (
    <section id="platforms" className="py-16 sm:py-24 md:py-32 lg:py-40 bg-background relative">
      <div className="container px-4 sm:px-6 mx-auto max-w-[100vw]">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 sm:mb-16 md:mb-24 gap-4 sm:gap-6 md:gap-8">
          <div className="max-w-2xl">
            <span className="text-primary font-bold uppercase tracking-widest text-xs sm:text-sm mb-2 sm:mb-4 block">Our products</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-display font-black tracking-tighter uppercase leading-[0.9]">
              Flagship <br/><span className="text-primary italic">Platforms.</span>
            </h2>
          </div>
          <Link href="/stack">
            <a className="min-h-[44px] inline-flex items-center text-base sm:text-lg font-bold tracking-widest uppercase hover:text-primary transition-colors border-b-2 border-primary pb-2 gap-2 sm:gap-4 group">
              Explore the apps
              <motion.span animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>→</motion.span>
            </a>
          </Link>
        </div>

        {isLoading ? (
          <div className="text-center py-12 sm:py-20">
            <p className="text-muted-foreground text-sm sm:text-base">Loading platforms...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16">
            {platforms.slice(0, 2).map((platform, i) => (
              <Link key={platform.id} href={`/solutions/${platform.slug}`}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="group cursor-pointer"
                >
                  <div className="relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3rem] aspect-[16/10] mb-4 sm:mb-6 md:mb-8 bg-muted border border-white/5">
                    {platform.image_url && (
                      <motion.img
                        src={platform.image_url}
                        alt={platform.name}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                      />
                    )}
                    {platform.description && (
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4 sm:p-6 md:p-12">
                        <p className="text-white text-sm sm:text-base md:text-xl font-light max-w-sm">
                          {platform.description}
                        </p>
                      </div>
                    )}
                    <div className="absolute top-3 right-3 sm:top-6 sm:right-6 md:top-8 md:right-8 bg-white/10 backdrop-blur-xl border border-white/20 px-3 py-1.5 sm:px-6 sm:py-2 rounded-full text-white text-[10px] sm:text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                      View Platform
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row justify-between items-start gap-2 sm:gap-0">
                    <div className="min-w-0">
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-black uppercase tracking-tighter mb-1 sm:mb-2 group-hover:text-primary transition-colors">
                        {platform.name}
                      </h3>
                      {platform.tagline && (
                        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground font-light">{platform.tagline}</p>
                      )}
                    </div>
                    {platform.features && platform.features.length > 0 && (
                      <div className="flex gap-3 flex-wrap">
                        {platform.features.slice(0, 2).map((tag: string) => (
                          <span key={tag} className="text-[10px] uppercase tracking-widest font-black border border-primary/20 bg-primary/5 text-primary px-4 py-1.5 rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
