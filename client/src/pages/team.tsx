import { motion } from "framer-motion";
import { Nav } from "@/components/nav";
import { SEO } from "@/components/seo";
import { Footer } from "@/components/footer";
import { Github, Twitter, Linkedin, Globe, Mail } from "lucide-react";

const team = [
  {
    name: "Alex Rivera",
    role: "Founding Partner & Creative Director",
    bio: "Visionary behind our platform architecture, bridging the gap between high-performance engineering and modern product design.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop",
    social: { twitter: "#", linkedin: "#", github: "#" }
  },
  {
    name: "Sarah Chen",
    role: "Head of Engineering",
    bio: "Specialized in low-latency distributed systems and complex UI infrastructure.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop",
    social: { twitter: "#", linkedin: "#", github: "#" }
  },
  {
    name: "Marcus Thorne",
    role: "Product Experience Lead",
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
      <SEO title="Our Team" description="The engineering and product team building Wemakespace software, platforms, and digital solutions." />
      <Nav />
      
      <main className="pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-24 md:pb-40">
        <div className="container px-4 sm:px-6 mx-auto max-w-[100vw]">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mb-16 sm:mb-24 md:mb-32"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-display font-black tracking-tighter uppercase leading-none mb-4 sm:mb-6 md:mb-8">
              The <span className="text-primary italic">Architects.</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-muted-foreground font-light leading-relaxed">
              We are a multidisciplinary collective of engineers, designers, and strategists obsessed with the intersection of space and software.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-12">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-xl sm:rounded-2xl mb-4 sm:mb-6 bg-muted">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4 sm:p-6">
                    <div className="flex gap-2 sm:gap-4">
                      <a href={member.social.twitter} className="min-w-[44px] min-h-[44px] flex items-center justify-center text-white hover:text-primary transition-colors" aria-label="Twitter"><Twitter size={20} /></a>
                      <a href={member.social.linkedin} className="min-w-[44px] min-h-[44px] flex items-center justify-center text-white hover:text-primary transition-colors" aria-label="LinkedIn"><Linkedin size={20} /></a>
                      <a href={member.social.github} className="min-w-[44px] min-h-[44px] flex items-center justify-center text-white hover:text-primary transition-colors" aria-label="GitHub"><Github size={20} /></a>
                    </div>
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-display font-bold uppercase tracking-tighter mb-1 group-hover:text-primary transition-colors">
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
            className="mt-16 sm:mt-24 md:mt-40 p-6 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl border border-primary/20 bg-primary/5 text-center"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold uppercase tracking-tighter mb-4 sm:mb-6">Want to join the resonance?</h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto px-1">
              We're always looking for extraordinary talent to help us define the next digital era.
            </p>
            <button className="min-h-[48px] px-6 sm:px-8 py-3 sm:py-4 bg-primary text-white rounded-full font-bold uppercase tracking-widest hover:scale-105 transition-transform text-sm sm:text-base">
              View Openings
            </button>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
