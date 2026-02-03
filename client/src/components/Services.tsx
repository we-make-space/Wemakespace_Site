import { motion } from "framer-motion";
import { CheckCircle2, Clock, Globe2, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/ServiceCard";
import { ArrowRight, Code2, BrainCircuit, GraduationCap, Compass, Layers, Zap, Shield, BarChart } from "lucide-react";

const HARDCODED_SERVICES = [
  {
    id: 1,
    title: "Web & Mobile Applications",
    description: "Scalable web and mobile applications tailored to real business needs. We use React, Next.js, and Flutter for cross-platform excellence.",
    icon: "Code2",
  },
  {
    id: 2,
    title: "AI-Powered Solutions",
    description: "Intelligent applications powered by ML and automation. From LLM integration to custom computer vision models.",
    icon: "BrainCircuit",
  },
  {
    id: 3,
    title: "Software Training & Bootcamps",
    description: "Hands-on programs that equip teams with industry-ready skills. Customized curriculum for corporate digital transformation.",
    icon: "GraduationCap",
  },
  {
    id: 4,
    title: "Technology Advisory & Strategy",
    description: "Guidance on architecture, product direction, and tech decisions. We help you navigate the complex modern landscape.",
    icon: "Compass",
  },
  {
    id: 5,
    title: "Cloud Infrastructure",
    description: "High-availability serverless and containerized architecture using AWS, GCP, and Azure. Built for 99.99% uptime.",
    icon: "Layers",
  },
  {
    id: 6,
    title: "Performance Optimization",
    description: "Deep-dive performance audits and optimization. We make your digital products lightning fast and ultra-responsive.",
    icon: "Zap",
  },
  {
    id: 7,
    title: "Cybersecurity Audits",
    description: "Comprehensive security reviews, penetration testing, and zero-trust implementation to protect your enterprise assets.",
    icon: "Shield",
  },
  {
    id: 8,
    title: "Data Analytics & BI",
    description: "Turning raw data into actionable insights with custom dashboards and advanced predictive analytics engines.",
    icon: "BarChart",
  }
];


export function Services() {
  return (
    <>
          {/* Services Grid Section */}
          <section id="services" className="py-32 px-6 bg-card/30 relative">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-24"
            >
              <h2 className="text-5xl md:text-7xl font-black font-display mb-6 tracking-tighter">
                Our Core <span className="text-primary italic">Services</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
              Deep technical expertise across the full modern stack. We design and build scalable, secure, and high-performance digital products that solve real-world problems and grow with demand.
              </p>
            </motion.div>
  
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {HARDCODED_SERVICES.map((service, idx) => (
                <ServiceCard
                  key={service.id}
                  title={service.title}
                  description={service.description}
                  iconName={service.icon}
                  index={idx}
                  />
              ))}
            </div>
          </div>
        </section>
  
        {/* Additional Info Section */}
        <section className="py-32 px-6 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-6xl font-black font-display mb-8 tracking-tighter">
                  Why We Are <span className="text-primary italic">Different</span>
                </h2>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Uncompromising Performance</h3>
                    <p className="text-muted-foreground font-light leading-relaxed">
                      We don't just build software; we engineer high-performance systems. Our code is optimized for speed, efficiency, and massive scale from day one.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Zero-Trust by Default</h3>
                    <p className="text-muted-foreground font-light leading-relaxed">
                      Security isn't an afterthought. Every line of code we write follows the strictest security protocols, ensuring your data remains yours.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Future-Proof Architecture</h3>
                    <p className="text-muted-foreground font-light leading-relaxed">
                      The tech landscape moves fast. We build architectures that are flexible enough to evolve with new technologies without costly rewrites.
                    </p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative aspect-square rounded-[3rem] overflow-hidden bg-muted border border-border"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 animate-pulse" />
                <div className="absolute inset-0 flex items-center justify-center p-12">
                  <div className="text-center">
                    <div className="text-5xl font-black font-display text-primary mb-4 italic">10X</div>
                    <div className="text-lg font-bold uppercase tracking-widest">Faster Deployment</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </>
  );
}
