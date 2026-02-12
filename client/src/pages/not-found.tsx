import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";
import { WemakeSpaceLogo } from "@/components/wemakespaceLogo";
import { SEO } from "@/components/seo";
import { getOgImageUrl } from "@/lib/og-images";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-background p-4 sm:p-6 overflow-hidden relative">
      <SEO title="Page Not Found" description="404 - Page not found. Return to Wemakespace tech and software platform." image={getOgImageUrl("not-found")} />
      {/* Background Decorative Elements - smaller on mobile to avoid overflow */}
      <div className="absolute top-1/4 left-1/4 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[500px] md:h-[500px] bg-primary/10 rounded-full blur-[80px] sm:blur-[100px] md:blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[150px] h-[150px] sm:w-[250px] sm:h-[250px] md:w-[400px] md:h-[400px] bg-secondary/10 rounded-full blur-[60px] sm:blur-[80px] md:blur-[100px] -z-10" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <span className="inline-block py-2 px-4 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold tracking-[0.2em] uppercase mb-8 text-primary">
            Error 404
          </span>
          <div className="flex justify-center mb-8">
            <WemakeSpaceLogo className={"rounded"} size={53} />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-black font-display mb-4 sm:mb-6 md:mb-8 leading-[0.95] tracking-tighter text-foreground px-1">
            Lost in <br />
            <span className="text-primary italic">Space.</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-lg mx-auto mb-8 sm:mb-10 md:mb-12 font-light leading-relaxed px-2">
            The digital coordinates you're looking for don't exist. Let's get you back to the main hub.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Link href="/">
            <Button size="lg" className="h-16 px-10 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 text-xl font-black shadow-2xl shadow-primary/20 w-full sm:w-auto transition-all hover:scale-105 active:scale-95">
              <Home className="mr-2 w-6 h-6" />
              Go Home
            </Button>
          </Link>
          <Button 
            onClick={() => window.history.back()}
            size="lg" 
            variant="outline" 
            className="h-16 px-10 rounded-full border-border hover:bg-muted text-xl font-bold w-full sm:w-auto group transition-all"
          >
            <ArrowLeft className="mr-2 w-6 h-6 group-hover:-translate-x-2 transition-transform" />
            Go Back
          </Button>
        </motion.div>
      </motion.div>

      {/* Decorative SVG or element */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none -z-20"
      >
        <div className="text-[4rem] sm:text-[6rem] md:text-[10rem] lg:text-[20rem] xl:text-[40rem] font-display font-black tracking-tighter select-none">
          404
        </div>
      </motion.div>
    </div>
  );
}
