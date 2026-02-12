import { motion } from "framer-motion";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { SEO } from "@/components/seo";
import { getOgImageUrl } from "@/lib/og-images";
import { useParams, Link } from "wouter";
import { 
  ArrowLeft, 
  ExternalLink, 
  Download, 
} from "lucide-react";
import { usePlatform } from "@/hooks/use-content";
import { getIconByName } from "@/lib/icons";
import { useBackNavigation } from "@/hooks/useBackNavigation";


export default function SolutionDetail() {
  const { slug } = useParams();
  const { data: platform, isLoading } = usePlatform(slug || "");
  const goBack = useBackNavigation("/platforms");

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    );
  }

  if (!platform) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <p className="text-muted-foreground mb-4">Platform not found</p>
          <Link href="/stack">
            <button className="text-primary hover:underline">Return to Platforms</button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title={platform.name}
        description={platform.description || platform.tagline || undefined}
        image={
          platform.hero_image_url || platform.image_url
            ? getOgImageUrl(undefined, platform.hero_image_url || platform.image_url || undefined)
            : getOgImageUrl("solution-detail")
        }
      />
      <Nav />
      
      <main className="pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-24 md:pb-40">
        <div className="container px-4 sm:px-6 mx-auto max-w-[100vw]">
          {/* Back Button */}
            <motion.button 
              onClick={goBack}
              whileHover={{ x: -5 }}
              className="flex items-center gap-2 min-h-[44px] text-muted-foreground hover:text-primary mb-8 sm:mb-12 uppercase tracking-widest font-bold text-xs"
            >
            <ArrowLeft className="w-4 h-4" /> Back to Platforms
          </motion.button>

          {/* Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-20 items-center mb-16 sm:mb-24 md:mb-40">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-4 sm:space-y-6 md:space-y-8"
            >
              <span className="px-4 sm:px-6 py-1.5 sm:py-2 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-bold tracking-[0.2em] uppercase border border-primary/20 inline-block">
                Catch a glimpse of our product
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-black tracking-tighter uppercase leading-none">
                {platform.name}<br/>
                <span className="text-primary italic">{platform.tagline?.split(' ').slice(-1).join(' ')}</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground font-light leading-relaxed max-w-xl">
                {platform.description}
              </p>
              
              {platform.app_link && (
                <div className="pt-4 sm:pt-6 md:pt-8">
                  <a 
                    href={platform.app_link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 sm:gap-4 min-h-[48px] px-6 sm:px-10 py-4 sm:py-5 bg-foreground text-background rounded-full font-black uppercase tracking-widest hover:scale-105 transition-all shadow-xl group text-sm sm:text-base"
                  >
                    {platform.app_type === 'download' ? (
                      <>Download App <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" /></>
                    ) : (
                      <>Launch Platform <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></>
                    )}
                  </a>
                </div>
              )}
            </motion.div>

            {platform.hero_image_url && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative aspect-square lg:aspect-video rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-foreground/5 shadow-2xl"
              >
                <img 
                  src={platform.hero_image_url} 
                  alt={platform.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              </motion.div>
            )}
          </div>

          {/* Detailed Sections */}
          {/* {platform.sections && platform.sections.length > 0 && (
            <div className="grid md:grid-cols-2 gap-12">
              {platform.sections.map((section, i) => {
                const Icon = getIconByName(section.icon_name);
                return (
                  <motion.div
                    key={section.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 }}
                    className="p-12 rounded-[2.5rem] bg-muted border border-foreground/5 space-y-6 group hover:border-primary/20 transition-colors"
                  >
                    <div className="w-16 h-16 bg-background rounded-2xl flex items-center justify-center border border-foreground/5 text-primary group-hover:scale-110 transition-transform">
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-3xl font-display font-black uppercase tracking-tight">{section.title}</h3>
                    <p className="text-muted-foreground leading-relaxed font-light text-lg">
                      {section.content}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          )} */}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
