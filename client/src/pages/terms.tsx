import { motion } from "framer-motion";
import { Nav } from "@/components/nav";
import { SEO } from "@/components/seo";
import { Footer } from "@/components/footer";
import { Scale, FileText, Gavel, AlertCircle } from "lucide-react";

export default function Terms() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO title="Terms of Service" description="The rules of engagement for Wemakespace platforms." />
      <Nav />
      <main className="pt-32 pb-40">
        <div className="container px-6 mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8 mb-20"
          >
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center border border-primary/20">
              <Scale className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-black tracking-tighter uppercase leading-none">
              Terms of <br/><span className="text-primary italic">Service.</span>
            </h1>
            <p className="text-muted-foreground uppercase tracking-widest text-xs font-bold">Last Updated: January 07, 2026</p>
          </motion.div>

          <div className="prose prose-invert prose-xl max-w-none font-light leading-relaxed text-muted-foreground
            prose-headings:text-foreground prose-headings:font-display prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tighter
            prose-h2:text-4xl prose-h3:text-2xl prose-strong:text-primary">
            
            <h2>1. Acceptance of Terms</h2>
            <p>By accessing or using Wemakespace platforms, including AetherOS, Hives, and Fashnect, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.</p>

            <h2>2. License to Use</h2>
            <p>Wemakespace grants you a personal, non-exclusive, non-transferable license to use our software for its intended purpose. Any attempt to reverse-engineer, decompile, or bypass our security protocols is a violation of this license.</p>

            <h2>3. Intellectual Property</h2>
            <p>All spatial designs, proprietary algorithms, brand assets, and the unique "Resonance" engine are the exclusive property of Wemakespace. Unauthorized use of our IP is strictly prohibited.</p>

            <h2>4. Service Availability</h2>
            <p>While we strive for 99.99% uptime, Wemakespace services are provided "as is." We are not liable for any temporary service interruptions required for critical system maintenance or global updates.</p>

            <h2>5. User Conduct</h2>
            <p>Users are expected to maintain the integrity of our digital spaces. We reserve the right to suspend accounts that engage in malicious activity, harassment, or any behavior that compromises the spatial experience for others.</p>

            <h2>6. Governing Law</h2>
            <p>These terms are governed by the laws of the jurisdiction in which Wemakespace operates, without regard to conflict of law principles.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
