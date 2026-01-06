import { motion } from "framer-motion";
import { Nav } from "@/components/nav";
import { Link } from "wouter";
import { Terminal, Shield, Zap, Globe, Cpu, Database, Mail, ArrowRight, MessageSquare, Briefcase, Rocket } from "lucide-react";

export default function Solutions() {
  const solutions = [
    { 
      title: "SaaS Platforms", 
      slug: "saas-platforms",
      icon: Rocket, 
      desc: "Building scalable, multi-tenant cloud applications." 
    },
    { 
      title: "AI Integration", 
      slug: "ai-integration",
      icon: Cpu, 
      desc: "Injecting machine learning into existing workflows." 
    },
    { 
      title: "Enterprise Infrastructure", 
      slug: "enterprise-infrastructure",
      icon: Shield, 
      desc: "High-security distributed systems." 
    },
    { 
      title: "Real-time Sync", 
      slug: "real-time-sync",
      icon: Zap, 
      desc: "Low-latency data synchronization at scale." 
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main className="pt-32 pb-20 container px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mb-32"
        >
          <h1 className="text-6xl md:text-8xl font-display font-black tracking-tighter mb-8 uppercase">
            Digital <span className="text-primary italic">Solutions.</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed max-w-2xl">
            We solve complex engineering challenges for forward-thinking companies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {solutions.map((solution, i) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group p-12 rounded-[3.5rem] border border-foreground/5 bg-foreground/5 hover:bg-foreground/10 transition-all duration-500"
            >
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-8 group-hover:rotate-12 transition-transform">
                <solution.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-3xl font-bold font-display mb-4">{solution.title}</h3>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">{solution.desc}</p>
              <Link href={`/solutions/${solution.slug}`}>
                <a className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-sm group-hover:gap-4 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </a>
              </Link>
            </motion.div>
          ))}
        </div>

        <section className="mt-40 text-center">
          <div className="max-w-3xl mx-auto space-y-12">
            <h2 className="text-4xl md:text-6xl font-display font-black">Let's talk about your vision.</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-8">
              <button className="px-10 py-5 bg-foreground text-background rounded-full font-black text-lg uppercase tracking-widest flex items-center justify-center gap-4 hover:scale-105 transition-all">
                <Briefcase className="w-5 h-5" /> Hire the Studio
              </button>
              <button className="px-10 py-5 border border-foreground/20 text-foreground rounded-full font-black text-lg uppercase tracking-widest flex items-center justify-center gap-4 hover:bg-foreground/5 transition-all">
                <MessageSquare className="w-5 h-5" /> Send a Message
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
