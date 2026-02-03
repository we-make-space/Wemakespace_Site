import { motion } from "framer-motion";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
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
      <Nav />
      
      <main className="pt-32 pb-40">
        <div className="container px-6 mx-auto">
          {/* Back Button */}
            <motion.button 
              onClick={goBack}
              whileHover={{ x: -5 }}
              className="flex items-center gap-2 text-muted-foreground hover:text-primary mb-12 uppercase tracking-widest font-bold text-xs"
            >
            <ArrowLeft className="w-4 h-4" /> Back to Platforms
          </motion.button>

          {/* Hero Section */}
          <div className="grid lg:grid-cols-2 gap-20 items-center mb-40">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <span className="px-6 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-[0.2em] uppercase border border-primary/20 inline-block">
                Catch a glimpse of our product
              </span>
              <h1 className="text-6xl lg:text-7xl font-display font-black tracking-tighter uppercase leading-none">
                {platform.name}<br/>
                <span className="text-primary italic">{platform.tagline?.split(' ').slice(-1).join(' ')}</span>
              </h1>
              <p className="text-xl text-muted-foreground font-light leading-relaxed max-w-xl">
                {platform.description}
              </p>
              
              {platform.app_link && (
                <div className="pt-8">
                  <a 
                    href={platform.app_link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-4 px-10 py-5 bg-foreground text-background rounded-full font-black uppercase tracking-widest hover:scale-105 transition-all shadow-xl group"
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
                className="relative aspect-square lg:aspect-video rounded-[3rem] overflow-hidden border border-foreground/5 shadow-2xl"
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
