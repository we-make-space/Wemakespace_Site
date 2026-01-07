import { motion } from "framer-motion";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { useParams, Link } from "wouter";
import { 
  ArrowLeft, 
  ExternalLink, 
  Download, 
  Globe, 
  Shield, 
  Zap, 
  Cpu 
} from "lucide-react";

const platformContent = {
  hives: {
    name: "Hives",
    tagline: "The Future of Real Estate",
    heroImage: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2000&auto=format&fit=crop",
    description: "Hives is a premium real estate ecosystem designed to bridge the gap between property discovery and institutional-grade investment management. Built on our proprietary spatial engine, Hives allows users to explore properties in high-fidelity 3D environments while accessing real-time market data and predictive analytics.",
    sections: [
      {
        title: "Immersive Discovery",
        content: "Forget static photos. Hives utilizes advanced photogrammetry to create digital twins of every property. Walk through your future home from anywhere in the world with zero latency.",
        icon: Globe
      },
      {
        title: "Smart Valuation Engine",
        content: "Our AI-driven valuation models analyze over 200 data points including historical trends, local development plans, and even environmental factors to provide the most accurate asset pricing on the market.",
        icon: Cpu
      }
    ],
    appLink: "https://hives.wemakespace.com",
    appType: "web"
  },
  fashnect: {
    name: "Fashnect",
    tagline: "Social Commerce Reimagined",
    heroImage: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2000&auto=format&fit=crop",
    description: "Fashnect is where high-fashion meets high-tech. It's more than a marketplace; it's a social discovery platform where creators, brands, and enthusiasts converge. By integrating augmented reality with social connectivity, Fashnect makes digital shopping feel human again.",
    sections: [
      {
        title: "AR Virtual Try-on",
        content: "See how the latest collections look on you instantly. Our low-latency AR engine provides hyper-realistic fabric simulation and fit visualization directly in your browser or mobile app.",
        icon: Zap
      },
      {
        title: "Social Ecosystem",
        content: "Build your style profile, follow your favorite designers, and shop curated collections from the people you trust. Fashnect turns shopping into a shared experience.",
        icon: Shield
      }
    ],
    appLink: "https://fashnect.wemakespace.com/download",
    appType: "download"
  }
};

export default function SolutionDetail() {
  const { slug } = useParams();
  const content = platformContent[slug as keyof typeof platformContent];

  if (!content) return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <Link href="/stack">
        <a className="text-primary hover:underline">Platform not found. Return to Platforms</a>
      </Link>
    </div>
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      
      <main className="pt-32 pb-40">
        <div className="container px-6 mx-auto">
          {/* Back Button */}
          <Link href="/stack">
            <motion.button 
              whileHover={{ x: -5 }}
              className="flex items-center gap-2 text-muted-foreground hover:text-primary mb-12 uppercase tracking-widest font-bold text-xs"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Platforms
            </motion.button>
          </Link>

          {/* Hero Section */}
          <div className="grid lg:grid-cols-2 gap-20 items-center mb-40">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <span className="px-6 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-[0.2em] uppercase border border-primary/20 inline-block">
                Platform Insight
              </span>
              <h1 className="text-6xl lg:text-8xl font-display font-black tracking-tighter uppercase leading-none">
                {content.name}<br/>
                <span className="text-primary italic">{content.tagline.split(' ').slice(-1)}</span>
              </h1>
              <p className="text-xl text-muted-foreground font-light leading-relaxed max-w-xl">
                {content.description}
              </p>
              
              <div className="pt-8">
                <a 
                  href={content.appLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-4 px-10 py-5 bg-foreground text-background rounded-full font-black uppercase tracking-widest hover:scale-105 transition-all shadow-xl group"
                >
                  {content.appType === 'download' ? (
                    <>Download App <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" /></>
                  ) : (
                    <>Launch Platform <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></>
                  )}
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative aspect-square lg:aspect-video rounded-[3rem] overflow-hidden border border-foreground/5 shadow-2xl"
            >
              <img 
                src={content.heroImage} 
                alt={content.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </motion.div>
          </div>

          {/* Detailed Sections */}
          <div className="grid md:grid-cols-2 gap-12">
            {content.sections.map((section, i) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="p-12 rounded-[2.5rem] bg-muted border border-foreground/5 space-y-6 group hover:border-primary/20 transition-colors"
              >
                <div className="w-16 h-16 bg-background rounded-2xl flex items-center justify-center border border-foreground/5 text-primary group-hover:scale-110 transition-transform">
                  <section.icon className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-display font-black uppercase tracking-tight">{section.title}</h3>
                <p className="text-muted-foreground leading-relaxed font-light text-lg">
                  {section.content}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
