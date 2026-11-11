"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Nav } from "@/components/nav";
import { SEO } from "@/components/seo";
import { getOgImageUrl } from "@/lib/og-images";
import { Footer } from "@/components/footer";
import { ArrowRight, Zap, Shield, Sparkles, ChevronRight } from "lucide-react";
import { usePlatforms } from "@/hooks/use-content";
import { getIconByName } from "@/lib/icons";
import Image from "next/image";

export function StackPage() {
  const { data: platforms = [], isLoading } = usePlatforms();
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-primary">
      <SEO
        title="Platforms"
        description="Explore the Wemakespace ecosystem of high-performance digital platforms."
        image={getOgImageUrl("platforms")}
      />
      <Nav />

      <main className="pt-24 sm:pt-28 md:pt-32">
        <section className="container px-4 sm:px-6 mx-auto mb-16 sm:mb-24 md:mb-32 max-w-[100vw]">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative min-h-[60vh] sm:h-[70vh] md:h-[80vh] rounded-[2rem] sm:rounded-[3rem] md:rounded-[4rem] overflow-hidden bg-muted border border-foreground/5 flex flex-col items-center justify-center text-center p-4 sm:p-6 md:p-12 group"
          >
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/generated_images/futuristic_3d_spatial_user_interface_mockup.png"
                alt="Wemakespace platform interface"
                fill
                className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-[2000ms]"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background z-10" />
            </div>

            <div className="relative z-20 space-y-3 sm:space-y-4 md:space-y-6 max-w-4xl">
              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="px-4 sm:px-6 py-1.5 sm:py-2 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-bold tracking-[0.2em] uppercase border border-primary/20 backdrop-blur-xl inline-block"
              >
                Upcoming Release
              </motion.span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-display font-black tracking-tighter leading-[0.9] uppercase text-foreground">
                Fashnect <br /> <span className="text-primary italic">Social E-commerce.</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed px-1">
                A bespoke platform that blends the best of social media and online marketplaces, crafted for the modern digital shopper.
              </p>
              <div className="pt-4 sm:pt-6 md:pt-8">
                <a
                  href="https://fashnect.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center min-h-[48px] px-6 sm:px-8 md:px-12 py-4 sm:py-5 md:py-6 bg-foreground text-background rounded-full font-black text-base sm:text-lg md:text-xl uppercase tracking-widest hover:scale-105 transition-all shadow-2xl gap-2 sm:gap-4 group"
                >
                  Learn More <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-2 transition-transform" />
                </a>
              </div>
            </div>
          </motion.div>
        </section>

        <section className="container px-4 sm:px-6 mx-auto mb-20 sm:mb-32 md:mb-40 max-w-[100vw]">
          <div className="mb-10 sm:mb-16 md:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-black tracking-tighter uppercase mb-3 sm:mb-6">
              Our Platforms
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground font-light max-w-xl">
              Bespoke ecosystems engineered for specific industries.
            </p>
          </div>

          {isLoading ? (
            <div className="text-center py-12 sm:py-20">
              <p className="text-muted-foreground text-sm sm:text-base">Loading platforms...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              {platforms.map((platform, i) => {
                const Icon = getIconByName(platform.icon_svg ?? platform.name);
                return (
                  <motion.div
                    key={platform.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 }}
                    className="relative group overflow-hidden rounded-[2rem] sm:rounded-[3rem] md:rounded-[3.5rem] border border-foreground/5 bg-muted aspect-[4/5] md:aspect-auto md:min-h-[500px] lg:h-[700px] flex flex-col"
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${platform.color_gradient || "from-blue-500/20 to-cyan-500/20"} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
                    />

                    <div className="p-4 sm:p-6 md:p-8 lg:p-12 relative z-10 flex flex-col h-full">
                      <div className="flex justify-between items-start mb-4 sm:mb-6 md:mb-8">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-background rounded-xl sm:rounded-2xl flex items-center justify-center border border-foreground/5 shrink-0">
                          <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary" />
                        </div>
                        <Link
                          href={`/solutions/${platform.slug}`}
                          className="min-w-[44px] min-h-[44px] w-10 h-10 sm:w-12 sm:h-12 bg-background rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-primary hover:text-white z-20"
                        >
                          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                        </Link>
                      </div>

                      <div className="mt-auto space-y-2 sm:space-y-3 md:space-y-4">
                        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-black tracking-tighter uppercase">
                          {platform.name}
                        </h3>
                        <p className="text-primary font-mono text-xs sm:text-sm uppercase tracking-widest font-bold">
                          {platform.tagline}
                        </p>
                        <p className="text-sm sm:text-base md:text-lg text-muted-foreground font-light leading-relaxed max-w-sm line-clamp-3 sm:line-clamp-none">
                          {platform.description}
                        </p>
                        <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-2 sm:pt-4">
                          {(platform.features || []).map((f: string) => (
                            <span
                              key={f}
                              className="px-4 py-1.5 rounded-full bg-background/50 border border-foreground/5 text-xs font-bold uppercase tracking-widest text-muted-foreground"
                            >
                              {f}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {platform.image_url && (
                      <div className="absolute right-0 bottom-0 w-2/3 h-2/3 translate-x-10 translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-1000 ease-out">
                        <img
                          src={platform.image_url}
                          alt={platform.name}
                          className="w-full h-full object-cover rounded-tl-[4rem] border-t border-l border-foreground/10"
                        />
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}
