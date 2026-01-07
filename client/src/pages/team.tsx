import { motion } from "framer-motion";
import { Nav } from "@/components/nav";
import { SEO } from "@/components/seo";
import { Footer } from "@/components/footer";
import { Github, Twitter, Linkedin, Globe, Mail } from "lucide-react";

const team = [
  {
    name: "Alex Rivera",
    role: "Founding Partner & Creative Director",
    bio: "Visionary behind the Resonance engine, bridging the gap between high-performance engineering and spatial aesthetics.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop",
    social: { twitter: "#", linkedin: "#", github: "#" }
  },
  {
    name: "Sarah Chen",
    role: "Head of Engineering",
    bio: "Architect of AetherOS, specialized in low-latency distributed systems and complex spatial UI infrastructure.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop",
    social: { twitter: "#", linkedin: "#", github: "#" }
  },
  {
    name: "Marcus Thorne",
    role: "Spatial Experience Lead",
    bio: "Defining the next generation of digital commerce through Fashnect and immersive interaction models.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop",
    social: { twitter: "#", linkedin: "#", github: "#" }
  },
  {
    name: "Elena Rodriguez",
    role: "Product Strategy",
    bio: "Driving the evolution of Hives, transforming how the world interacts with high-stakes real estate ecosystems.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop",
    social: { twitter: "#", linkedin: "#", github: "#" }
  }
];

export default function Team() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-primary">
      <SEO title="Our Team" description="Meet the architects and engineers behind Wemakespace." />
      <Nav />
      
      <main className="pt-32 pb-40">
        <div className="container px-6 mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mb-32"
          >
            <h1 className="text-6xl md:text-8xl font-display font-black tracking-tighter uppercase leading-none mb-8">
              The <span className="text-primary italic">Architects.</span>
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground font-light leading-relaxed">
              We are a multidisciplinary collective of engineers, designers, and strategists obsessed with the intersection of space and software.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl mb-6 bg-muted">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                    <div className="flex gap-4">
                      <a href={member.social.twitter} className="text-white hover:text-primary transition-colors"><Twitter size={20} /></a>
                      <a href={member.social.linkedin} className="text-white hover:text-primary transition-colors"><Linkedin size={20} /></a>
                      <a href={member.social.github} className="text-white hover:text-primary transition-colors"><Github size={20} /></a>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-display font-bold uppercase tracking-tighter mb-1 group-hover:text-primary transition-colors">
                  {member.name}
                </h3>
                <p className="text-sm font-bold uppercase tracking-widest text-primary/80 mb-4">{member.role}</p>
                <p className="text-muted-foreground text-sm font-light leading-relaxed">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-40 p-12 rounded-3xl border border-primary/20 bg-primary/5 text-center"
          >
            <h2 className="text-4xl font-display font-bold uppercase tracking-tighter mb-6">Want to join the resonance?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              We're always looking for extraordinary talent to help us define the next digital era.
            </p>
            <button className="bg-primary text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:scale-105 transition-transform">
              View Openings
            </button>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
