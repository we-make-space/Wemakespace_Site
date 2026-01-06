import { motion } from "framer-motion";
import { Nav } from "@/components/nav";
import { Eye, Target, Rocket, Users, MessageCircle, Twitter, Linkedin, Github } from "lucide-react";

const leaders = [
  {
    name: "Alex Rivera",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
    bio: "Visionary leader focused on the intersection of human experience and digital architecture.",
    message: "We don't just build software; we create the spaces where the future lives."
  },
  {
    name: "Sarah Chen",
    role: "Chief Technology Officer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop",
    bio: "Engineering pioneer with a passion for distributed systems and neural-latency synchronization.",
    message: "Performance is not a feature—it's the foundation of everything we dream."
  },
  {
    name: "Marcus Thorne",
    role: "Head of Design",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
    bio: "Minimalist designer dedicated to crafting digital interfaces that feel as natural as physical space.",
    message: "Design is the invisible hand that makes complex technology feel like magic."
  }
];

export default function Vision() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="container px-6 mx-auto mb-40">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-6xl md:text-9xl font-display font-black tracking-tighter mb-8 uppercase leading-[0.85]">
              Our <span className="text-primary italic">Vision.</span>
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground font-light leading-tight max-w-2xl">
              Defining the architectural standards of the next digital era.
            </p>
          </motion.div>
        </section>

        {/* Vision & Mission Grid */}
        <section className="container px-6 mx-auto mb-60">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-16 rounded-[4rem] bg-foreground/5 border border-foreground/5 relative overflow-hidden group"
            >
              <Eye className="w-16 h-16 text-primary mb-8 group-hover:scale-110 transition-transform duration-500" />
              <h2 className="text-4xl font-display font-bold mb-6">The Vision</h2>
              <p className="text-xl text-muted-foreground leading-relaxed font-light">
                To create a world where technology doesn't just serve people, but creates room for them to flourish, innovate, and expand their potential beyond physical boundaries.
              </p>
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[80px] rounded-full" />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-16 rounded-[4rem] bg-primary text-primary-foreground relative overflow-hidden group"
            >
              <Target className="w-16 h-16 text-white mb-8 group-hover:scale-110 transition-transform duration-500" />
              <h2 className="text-4xl font-display font-bold mb-6">The Mission</h2>
              <p className="text-xl opacity-90 leading-relaxed font-light">
                Engineering high-performance, beautiful, and secure software foundations that empower enterprises to scale their digital presence with zero compromise.
              </p>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 blur-[80px] rounded-full" />
            </motion.div>
          </div>
        </section>

        {/* Leadership Section */}
        <section className="bg-muted py-40 border-y border-foreground/5">
          <div className="container px-6 mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-24"
            >
              <span className="text-primary font-mono text-sm tracking-[0.3em] uppercase mb-4 block">The Architects</span>
              <h2 className="text-5xl md:text-7xl font-display font-black tracking-tighter uppercase">Our Leadership</h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-12">
              {leaders.map((leader, i) => (
                <motion.div
                  key={leader.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="group"
                >
                  <div className="relative aspect-[3/4] rounded-[3rem] overflow-hidden mb-8 border border-foreground/10">
                    <img 
                      src={leader.image} 
                      alt={leader.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    <div className="absolute bottom-6 left-6 right-6 flex justify-center gap-4 translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                      <button className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-primary transition-colors">
                        <Linkedin className="w-5 h-5" />
                      </button>
                      <button className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-primary transition-colors">
                        <Twitter className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-3xl font-display font-bold">{leader.name}</h3>
                    <p className="text-primary font-mono text-xs uppercase tracking-widest mb-4">{leader.role}</p>
                    <p className="text-muted-foreground font-light leading-relaxed mb-6 italic">"{leader.message}"</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Public Message */}
        <section className="container px-6 mx-auto py-60 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto space-y-12"
          >
            <div className="flex justify-center mb-8">
              <MessageCircle className="w-16 h-16 text-primary" />
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-bold leading-tight">
              A message from the studio to the community.
            </h2>
            <p className="text-2xl text-muted-foreground font-light leading-relaxed">
              At Wemakespace, we believe that the best digital products are born from a culture of radical transparency, extreme engineering discipline, and a deep respect for the end user's time. We are building the room for you to succeed, one pixel and one line of code at a time.
            </p>
            <div className="pt-12">
              <button className="px-12 py-6 bg-foreground text-background rounded-full font-black text-xl uppercase tracking-widest hover:scale-105 hover:bg-primary hover:text-white transition-all">
                Join our Journey
              </button>
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  );
}
