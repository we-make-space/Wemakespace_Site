import { motion } from "framer-motion";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Link } from "wouter";
import { 
  ShoppingBag, 
  Home as HomeIcon, 
  ArrowRight, 
  Zap, 
  Shield, 
  Sparkles,
  ChevronRight
} from "lucide-react";

import futuristicSpatialUI from "@assets/generated_images/futuristic_3d_spatial_user_interface_mockup.png";

const platforms = [
  {
    id: "hives",
    name: "Hives",
    tagline: "The Future of Real Estate",
    description: "A premium real estate ecosystem designed for seamless property discovery and investment management.",
    icon: HomeIcon,
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop",
    color: "from-blue-500/20 to-cyan-500/20",
    features: ["Virtual Tours", "Smart Valuation", "Asset Tracking"]
  },
  {
    id: "fashnect",
    name: "Fashnect",
    tagline: "Social Commerce Reimagined",
    description: "The intersection of high-fashion and social connectivity. Discover, shop, and connect in a single fluid space.",
    icon: ShoppingBag,
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1000&auto=format&fit=crop",
    color: "from-purple-500/20 to-pink-500/20",
    features: ["Social Discovery", "Instant Checkout", "Style Analytics"]
  }
];

export default function Stack() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-primary">
      <Nav />
      
      <main className="pt-32">
        {/* Apple-style Hero Section */}
        <section className="container px-6 mx-auto mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-[80vh] rounded-[4rem] overflow-hidden bg-muted border border-foreground/5 flex flex-col items-center justify-center text-center p-12 group"
          >
            <div className="absolute inset-0 z-0">
              <img 
                src={futuristicSpatialUI} 
                alt="AetherOS Spatial UI" 
                className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-[2000ms]"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background z-10" />
            </div>

            <div className="relative z-20 space-y-6 max-w-4xl">
              <motion.span 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="px-6 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-[0.2em] uppercase border border-primary/20 backdrop-blur-xl inline-block"
              >
                Featured Release
              </motion.span>
              <h1 className="text-6xl md:text-9xl font-display font-black tracking-tighter leading-[0.85] uppercase text-foreground">
                AetherOS <br/> <span className="text-primary italic">Spatial UI.</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed">
                The next frontier of digital interaction. Coming soon to all Wemakespace platforms.
              </p>
              <div className="pt-8">
                <button className="px-12 py-6 bg-foreground text-background rounded-full font-black text-xl uppercase tracking-widest hover:scale-105 transition-all shadow-2xl flex items-center gap-4 mx-auto group">
                  Learn More <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Platforms Bento Grid */}
        <section className="container px-6 mx-auto mb-40">
          <div className="mb-20">
            <h2 className="text-4xl md:text-6xl font-display font-black tracking-tighter uppercase mb-6">Our Platforms</h2>
            <p className="text-xl text-muted-foreground font-light max-w-xl">Bespoke ecosystems engineered for specific industries.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {platforms.map((platform, i) => (
              <motion.div
                key={platform.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative group overflow-hidden rounded-[3.5rem] border border-foreground/5 bg-muted aspect-[4/5] md:aspect-auto md:h-[700px] flex flex-col"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${platform.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                
                <div className="p-12 relative z-10 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-8">
                    <div className="w-16 h-16 bg-background rounded-2xl flex items-center justify-center border border-foreground/5">
                      <platform.icon className="w-8 h-8 text-primary" />
                    </div>
                    <Link href={`/solutions/${platform.id}`}>
                      <button className="w-12 h-12 bg-background rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-primary hover:text-white cursor-pointer">
                        <ChevronRight className="w-6 h-6" />
                      </button>
                    </Link>
                  </div>

                  <div className="mt-auto space-y-4">
                    <h3 className="text-4xl md:text-5xl font-display font-black tracking-tighter uppercase">{platform.name}</h3>
                    <p className="text-primary font-mono text-sm uppercase tracking-widest font-bold">{platform.tagline}</p>
                    <p className="text-lg text-muted-foreground font-light leading-relaxed max-w-sm">
                      {platform.description}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-4">
                      {platform.features.map(f => (
                        <span key={f} className="px-4 py-1.5 rounded-full bg-background/50 border border-foreground/5 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="absolute right-0 bottom-0 w-2/3 h-2/3 translate-x-10 translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-1000 ease-out">
                  <img 
                    src={platform.image} 
                    alt={platform.name}
                    className="w-full h-full object-cover rounded-tl-[4rem] border-t border-l border-foreground/10"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Feature Grid - Apple Style */}
        <section className="bg-muted py-40 border-y border-foreground/5 mb-40">
          <div className="container px-6 mx-auto">
            <div className="grid md:grid-cols-3 gap-16">
              <div className="space-y-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-2xl font-bold font-display">Extreme Velocity</h4>
                <p className="text-muted-foreground leading-relaxed font-light">
                  Built on top of React 19 and Vite for near-instant interaction and zero-latency state sync.
                </p>
              </div>
              <div className="space-y-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-2xl font-bold font-display">Secure by Design</h4>
                <p className="text-muted-foreground leading-relaxed font-light">
                  Enterprise-grade encryption and zero-trust security models integrated into every platform layer.
                </p>
              </div>
              <div className="space-y-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-2xl font-bold font-display">Bespoke Design</h4>
                <p className="text-muted-foreground leading-relaxed font-light">
                  Every interface is a custom-crafted spatial experience designed for maximum human resonance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="container px-6 mx-auto py-40 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto space-y-8"
          >
            <h2 className="text-5xl md:text-7xl font-display font-black tracking-tighter uppercase">Ready to enter the space?</h2>
            <p className="text-xl text-muted-foreground font-light">Join the elite brands building on Wemakespace.</p>
            <div className="pt-8">
              <button className="px-16 py-8 bg-primary text-primary-foreground rounded-full font-black text-2xl uppercase tracking-widest hover:scale-105 transition-all shadow-[0_0_50px_rgba(var(--primary),0.3)]">
                Get Started
              </button>
            </div>
          </motion.div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
