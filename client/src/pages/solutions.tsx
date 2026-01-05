import { motion } from "framer-motion";
import { CheckCircle2, Clock, Globe2, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, BrainCircuit, GraduationCap, Compass, Layers, Zap, Shield, BarChart } from "lucide-react";
import { ServiceCard } from "@/components/ServiceCard";
import { SEO } from "@/components/seo";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

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


export default function Solutions() {
  return (
    <>
          {/* Services Grid Section */}
          <SEO title="Solutions" description="We solve complex engineering challenges for forward-thinking companies." />
          <Nav />

          <section id="services" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-card/30 relative">
          <div className="max-w-7xl mx-auto w-full box-border">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12 sm:mb-16 md:mb-24"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black font-display mb-4 sm:mb-6 tracking-tighter">
                Our Core <span className="text-primary italic">Services</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-light px-1">
                We don't just build software; we engineer high-performance systems. Our code is optimized for speed, efficiency, and massive scale from day one.
              </p>
            </motion.div>
  
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
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
        <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-background">
          <div className="max-w-7xl mx-auto w-full box-border">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 md:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black font-display mb-6 sm:mb-8 tracking-tighter">
                  Why We Are <span className="text-primary italic">Different</span>
                </h2>
                <div className="space-y-5 sm:space-y-6 md:space-y-8">
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1.5 sm:mb-2">Uncompromising Performance</h3>
                    <p className="text-muted-foreground font-light leading-relaxed">
                      We don't just build software; we engineer high-performance systems. Our code is optimized for speed, efficiency, and massive scale from day one.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1.5 sm:mb-2">Zero-Trust by Default</h3>
                    <p className="text-muted-foreground font-light leading-relaxed">
                      Security isn't an afterthought. Every line of code we write follows the strictest security protocols, ensuring your data remains yours.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1.5 sm:mb-2">Future-Proof Architecture</h3>
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
                className="relative aspect-square rounded-[2rem] sm:rounded-[3rem] overflow-hidden bg-muted border border-border min-h-[200px]"
              >
                <img
                  src="https://images.unsplash.com/photo-1621609764095-b32bbe35cf3a?w=800&auto=format&fit=crop&q=80"
                  alt="Fast deployment"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/40 to-background/70" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 animate-pulse mix-blend-overlay" aria-hidden />
                <div className="absolute inset-0 flex items-center justify-center p-6 sm:p-8 md:p-12">
                  <div className="text-center relative z-10">
                    <div className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-primary mb-2 sm:mb-4 italic drop-shadow-sm">10X</div>
                    <div className="text-sm sm:text-base md:text-lg font-bold uppercase tracking-widest text-foreground drop-shadow-sm">Faster Deployment</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

        </section>
      <Footer />
    </>
  );
}


// https://images.unsplash.com/photo-1621609764095-b32bbe35cf3a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDc5fHx8ZW58MHx8fHx8


// import { motion } from "framer-motion";
// import { Nav } from "@/components/nav";
// import { SEO } from "@/components/seo";
// import { Link } from "wouter";
// import { ArrowRight, MessageSquare, Briefcase } from "lucide-react";
// import { useSolutions } from "@/hooks/use-content";
// import { getIconByName } from "@/lib/icons";

// import { Footer } from "@/components/footer";

// export default function Solutions() {
//   const { data: solutions = [], isLoading } = useSolutions();

//   return (
//     <div className="min-h-screen bg-background text-foreground">
//       <SEO title="Solutions" description="We solve complex engineering challenges for forward-thinking companies." />
//       <Nav />
//       <main className="pt-32 pb-20 container px-6 mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="max-w-4xl mb-32"
//         >
//           <h1 className="text-6xl md:text-8xl font-display font-black tracking-tighter mb-8 uppercase">
//             Digital <span className="text-primary italic">Solutions.</span>
//           </h1>
//           <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed max-w-2xl">
//             We solve complex engineering challenges for forward-thinking companies.
//           </p>
//         </motion.div>

//         {isLoading ? (
//           <div className="text-center py-20">
//             <p className="text-muted-foreground">Loading solutions...</p>
//           </div>
//         ) : (
//           <div className="grid md:grid-cols-2 gap-12">
//             {solutions.map((solution, i) => {
//               const Icon = getIconByName(solution.icon_name);
//               return (
//                 <motion.div
//                   key={solution.id}
//                   initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   viewport={{ once: true }}
//                   className="group p-12 rounded-[3.5rem] border border-foreground/5 bg-foreground/5 hover:bg-foreground/10 transition-all duration-500"
//                 >
//                   <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-8 group-hover:rotate-12 transition-transform">
//                     <Icon className="w-8 h-8 text-primary-foreground" />
//                   </div>
//                   <h3 className="text-3xl font-bold font-display mb-4">{solution.title}</h3>
//                   {solution.description && (
//                     <p className="text-xl text-muted-foreground leading-relaxed mb-8">{solution.description}</p>
//                   )}
//                   <Link href={`/solutions/${solution.slug}`}>
//                     <a className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-sm group-hover:gap-4 transition-all">
//                       Learn More <ArrowRight className="w-4 h-4" />
//                     </a>
//                   </Link>
//                 </motion.div>
//               );
//             })}
//           </div>
//         )}

//         <section className="mt-40 text-center">
//           <div className="max-w-3xl mx-auto space-y-12">
//             <h2 className="text-4xl md:text-6xl font-display font-black">Let's talk about your vision.</h2>
//             <div className="flex flex-col sm:flex-row justify-center gap-8">
//               <button className="px-10 py-5 bg-foreground text-background rounded-full font-black text-lg uppercase tracking-widest flex items-center justify-center gap-4 hover:scale-105 transition-all">
//                 <Briefcase className="w-5 h-5" /> Hire the Studio
//               </button>
//               <button className="px-10 py-5 border border-foreground/20 text-foreground rounded-full font-black text-lg uppercase tracking-widest flex items-center justify-center gap-4 hover:bg-foreground/5 transition-all">
//                 <MessageSquare className="w-5 h-5" /> Send a Message
//               </button>
//             </div>
//           </div>
//         </section>
//       </main>
//       <Footer />
//     </div>
//   );
// }

