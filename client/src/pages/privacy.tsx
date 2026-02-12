import { motion } from "framer-motion";
import { Nav } from "@/components/nav";
import { SEO } from "@/components/seo";
import { getOgImageUrl } from "@/lib/og-images";
import { Footer } from "@/components/footer";
import { Shield, Lock, Eye, FileText } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO title="Privacy Policy" description="Data security, encryption, and privacy practices for Wemakespace software and digital platforms." image={getOgImageUrl("privacy")} />
      <Nav />
      <main className="pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-24 md:pb-40">
        <div className="container px-4 sm:px-6 mx-auto max-w-4xl w-full box-border">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4 sm:space-y-6 md:space-y-8 mb-12 sm:mb-16 md:mb-20"
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-primary/10 rounded-xl sm:rounded-2xl flex items-center justify-center border border-primary/20">
              <Shield className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-black tracking-tighter uppercase leading-none">
              Privacy <br/><span className="text-primary italic">Policy.</span>
            </h1>
            <p className="text-muted-foreground uppercase tracking-widest text-[10px] sm:text-xs font-bold">Last Updated: January 07, 2026</p>
          </motion.div>

          <div className="prose prose-invert prose-sm sm:prose-base md:prose-lg lg:prose-xl max-w-none font-light leading-relaxed text-muted-foreground
            prose-headings:text-foreground prose-headings:font-display prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tighter
            prose-h2:text-2xl sm:prose-h2:text-3xl md:prose-h2:text-4xl prose-h3:text-lg sm:prose-h3:text-xl md:prose-h3:text-2xl prose-strong:text-primary prose-p:mb-4 sm:prose-p:mb-6">
            
            <h2>1. Our Commitment to Privacy</h2>
            <p>At Wemakespace, we build spatial ecosystems that respect human boundaries. Privacy isn't just a legal requirement for us—it's a fundamental architectural principle. We believe you should always know what data is being collected and have total control over your digital footprint.</p>

            <h2>2. Data Collection & Usage</h2>
            <p>We collect only the essential information required to provide our high-performance services. This includes:</p>
            <ul>
              <li><strong>Account Information:</strong> Name, email, and authentication credentials.</li>
              <li><strong>Platform Interactions:</strong> How you move through our spatial interfaces to optimize resonance.</li>
              <li><strong>Technical Logs:</strong> Anonymous system data to ensure zero-latency performance.</li>
            </ul>

            <h2>3. Spatial Security Architecture</h2>
            <p>All data processed within AetherOS and our related platforms is protected by enterprise-grade AES-256 encryption. We utilize zero-trust security models, meaning your data is encrypted both at rest and in transit.</p>

            <h2>4. Your Rights</h2>
            <p>You have the absolute right to access, rectify, or request the deletion of your personal data at any time. We provide intuitive tools within our platform settings to manage these preferences without friction.</p>

            <h2>5. Contact Us</h2>
            <p>If you have questions about our privacy practices, please reach out to our security team at <strong>privacy@wemakespace.com</strong>.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
