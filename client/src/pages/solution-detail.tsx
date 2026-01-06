import { motion } from "framer-motion";
import { Nav } from "@/components/nav";
import { useParams, useLocation } from "wouter";
import { 
  Rocket, Cpu, Shield, Zap, 
  ArrowLeft, CheckCircle2, Server, 
  Globe, Lock, Database, Code, 
  Layout, Sparkles, MessageSquare 
} from "lucide-react";

const solutionDetails = {
  "saas-platforms": {
    title: "SaaS Platforms",
    icon: Rocket,
    desc: "Building scalable, multi-tenant cloud applications.",
    features: [
      "Multi-tenant Architecture",
      "Dynamic Subscription Engines",
      "Real-time Analytics Dashboards",
      "Automated Provisioning Systems"
    ],
    detailed: "We specialize in engineering robust SaaS architectures that scale horizontally. From complex billing systems to distributed data isolation, our platforms are built for growth.",
    stats: { performance: "99.99%", latency: "<50ms", scale: "Unlimited" }
  },
  "ai-integration": {
    title: "AI Integration",
    icon: Cpu,
    desc: "Injecting machine learning into existing workflows.",
    features: [
      "Custom LLM fine-tuning",
      "Predictive Analytics Models",
      "Computer Vision Systems",
      "Automated Decision Engines"
    ],
    detailed: "Moving beyond simple API calls, we integrate deep intelligence into your core business logic. We build custom models that learn from your unique data streams.",
    stats: { accuracy: "98.5%", processing: "Real-time", training: "Weekly" }
  },
  "enterprise-infrastructure": {
    title: "Enterprise Infrastructure",
    icon: Shield,
    desc: "High-security distributed systems.",
    features: [
      "Zero-trust Security Models",
      "Distributed Mesh Networks",
      "Compliance Automation (SOC2/GDPR)",
      "Hybrid-cloud Orchestration"
    ],
    detailed: "Mission-critical systems require uncompromising stability. We design resilient infrastructure that protects your most sensitive data while maintaining peak performance.",
    stats: { security: "Tier 4", uptime: "SLA backed", encryption: "E2E AES-256" }
  },
  "real-time-sync": {
    title: "Real-time Sync",
    icon: Zap,
    desc: "Low-latency data synchronization at scale.",
    features: [
      "Edge-to-Edge Propagation",
      "Conflict-free Replicated Data (CRDTs)",
      "Websocket Mesh Networks",
      "Offline-first Architecture"
    ],
    detailed: "Eliminate lag entirely. Our real-time engines ensure that every user across the globe stays in perfect synchronization, even under extreme load or intermittent connectivity.",
    stats: { sync: "Global", latency: "10-20ms", concurrency: "1M+" }
  }
};

export default function SolutionDetail() {
  const params = useParams();
  const [, setLocation] = useLocation();
  const slug = params.slug || "";
  const data = solutionDetails[slug as keyof typeof solutionDetails];

  if (!data) return null;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main className="pt-32 pb-20 container px-6 mx-auto">
        <motion.button
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => setLocation("/solutions")}
          className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-12 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Solutions
        </motion.button>

        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="w-20 h-20 bg-primary/10 rounded-[2rem] border border-primary/20 flex items-center justify-center mb-8">
              <data.icon className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-black tracking-tighter mb-8 uppercase">
              {data.title}<span className="text-primary">.</span>
            </h1>
            <p className="text-2xl text-muted-foreground font-light leading-relaxed mb-12">
              {data.detailed}
            </p>

            <div className="grid sm:grid-cols-3 gap-8 py-12 border-y border-foreground/5 mb-12">
              {Object.entries(data.stats).map(([key, value]) => (
                <div key={key}>
                  <div className="text-3xl font-display font-bold text-primary mb-1 uppercase tracking-tighter">{value}</div>
                  <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-bold">{key}</div>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold uppercase tracking-widest mb-6">Core Capabilities</h3>
              <div className="grid gap-4">
                {data.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-4 p-6 rounded-2xl bg-foreground/5 border border-foreground/5 group hover:border-primary/30 transition-all">
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                    <span className="text-lg font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="sticky top-40 p-12 rounded-[4rem] bg-muted border border-foreground/5 overflow-hidden group"
          >
            <div className="relative z-10 space-y-8">
              <div className="flex items-center gap-3">
                <Sparkles className="w-6 h-6 text-primary" />
                <span className="font-mono text-sm uppercase tracking-[0.2em] font-bold">Implementation Roadmap</span>
              </div>
              <h2 className="text-4xl font-display font-bold">Ready to deploy?</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our elite engineering team can integrate {data.title} into your stack in as little as 4 weeks.
              </p>
              
              <div className="pt-8 space-y-4">
                <button className="w-full py-6 bg-primary text-primary-foreground rounded-full font-black text-xl uppercase tracking-widest flex items-center justify-center gap-4 hover:scale-[1.02] transition-all">
                  Book a Consult <MessageSquare className="w-6 h-6" />
                </button>
                <button className="w-full py-6 border border-foreground/20 text-foreground rounded-full font-black text-xl uppercase tracking-widest flex items-center justify-center gap-4 hover:bg-foreground/5 transition-all">
                  Request Whitepaper
                </button>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-[100px] rounded-full group-hover:bg-primary/10 transition-colors" />
          </motion.div>
        </div>
      </main>
    </div>
  );
}
