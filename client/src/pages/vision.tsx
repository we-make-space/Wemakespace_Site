import { motion } from "framer-motion";
import { Nav } from "@/components/nav";
import { SEO } from "@/components/seo";
import { getOgImageUrl } from "@/lib/og-images";
import { Button } from "@/components/ui/button";
import { Eye, Target, Rocket, Users, MessageCircle, Twitter, Linkedin, Github, Instagram } from "lucide-react";
import { Footer } from "@/components/footer";

const leaders = [
  {
    name: "Theophilus Owusu Adjei",
    role: "Co-founder & Chief Executive Officer",
    image: "/lencer.png",
    bio: "Visionary leader focused on the intersection of human experience and digital architecture.",
    message: "We don't just build software; we create the spaces where the future lives.",
    social: { instagram: "https://www.instagram.com/theolencer/", linkedin: "https://www.linkedin.com/in/theophilus-owusu-adjei-4a1802250/", github: "https://github.com/TheoLencer1" }
  },
  {
    name: "Bubunamawu Kofi Adiko",
    role: "Co-founder & Chief Technoogy Officer",
    image: "/bubu.png",
    bio: "Engineering pioneer with a passion for distributed systems and neural-latency synchronization.",
    message: "Performance is not a feature—it's the foundation of everything we dream.",
    social: { instagram: "https://www.instagram.com/bubuadico/", linkedin: "https://www.linkedin.com/in/bubuadiko/", github: "https://github.com/BubuAdico" }
  },
  {
    name: "Ephraim Adinyira",
    role: "Co-founder & Chief Operations Officer",
    image: "/Ephraim.png",
    bio: "Minimalist designer dedicated to crafting digital interfaces that feel as natural as physical space.",
    message: "Design is the invisible hand that makes complex technology feel like magic.",
    social: { instagram: "https://www.instagram.com/ephardi_young/", linkedin: "#", github: "#" }
  },
  {
    name: "Desmond Asamoah",
    role: "Chief Product Officer",
    image: "desmond.png",
    bio: "Operational strategist ensuring seamless delivery of complex digital transformations.",
    message: "Scale is about more than numbers; it's about the quality of the room we build.",
    social: { instagram: "https://www.instagram.com/kwasi_asamoah18/", linkedin: "https://www.linkedin.com/in/desmond-asamoah-15b61a1b7/", github: "https://github.com/waltob123" }
  },
  {
    name: "Eunice Asamoah",
    role: "Secretary",
    image: "Eunice.png",
    bio: "Infrastructure expert specializing in zero-latency global delivery and edge computing.",
    message: "Engineering excellence is the prerequisite for digital freedom.",
    social: { instagram: "https://www.instagram.com/asanb_1/", linkedin: "https://www.linkedin.com/in/asamoah-eunice-1b917634b/", github: "#" }
  }
];

export default function Vision() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO title="Vision" description="Defining the architectural standards of the next digital era." image={getOgImageUrl("vision")} />
      <Nav />
      <main className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20">
        {/* Hero Section */}
        <section className="w-full box-border px-4 sm:px-6 mx-auto mb-16 sm:mb-24 md:mb-40 max-w-[100vw]">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-display font-black tracking-tighter mb-4 sm:mb-6 md:mb-8 uppercase leading-[0.9]">
                Our <span className="text-primary italic">Vision.</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-muted-foreground font-light leading-tight max-w-2xl">
                Defining the architectural standards of the next digital era.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Vision & Mission Grid */}
        <section className="w-full box-border px-4 sm:px-6 mx-auto mb-20 sm:mb-40 md:mb-60 max-w-[100vw]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              className="group relative rounded-[2rem] sm:rounded-[3rem] md:rounded-[4rem] overflow-hidden border border-foreground/10 shadow-xl shadow-black/10 min-h-[320px] sm:min-h-[380px]"
            >
              <div className="absolute inset-0">
                <img
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=80"
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  aria-hidden
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="relative z-10 flex flex-col justify-end p-6 sm:p-8 md:p-12 lg:p-16 min-h-[320px] sm:min-h-[380px]">
                <motion.div
                  initial={{ scale: 0.9, opacity: 0.8 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  className="mb-4 sm:mb-6"
                >
                  <Eye className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 text-primary drop-shadow-sm transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6" />
                </motion.div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-3 sm:mb-6 text-foreground drop-shadow-sm">
                  The Vision
                </h2>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed font-light max-w-lg">
                  To drive innovation through software solutions that transform industries and empower individuals.
                </p>
              </div>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              className="group relative rounded-[2rem] sm:rounded-[3rem] md:rounded-[4rem] overflow-hidden border border-foreground/10 shadow-xl shadow-black/10 min-h-[320px] sm:min-h-[380px]"
            >
              <div className="absolute inset-0">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80"
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  aria-hidden
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/95 to-primary/80" />
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="relative z-10 flex flex-col justify-end p-6 sm:p-8 md:p-12 lg:p-16 min-h-[320px] sm:min-h-[380px]">
                <motion.div
                  initial={{ scale: 0.9, opacity: 0.8 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  className="mb-4 sm:mb-6"
                >
                  <Target className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 text-primary-foreground drop-shadow-sm transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6" />
                </motion.div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-3 sm:mb-6 text-primary-foreground drop-shadow-sm">
                  The Mission
                </h2>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-primary-foreground/90 leading-relaxed font-light max-w-lg">
                  We develop cutting-edge software and equip people and businesses with the skills and resources they need to thrive in technology, design, and marketing.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Leadership Section */}
        <section className="bg-muted py-16 sm:py-24 md:py-40 border-y border-foreground/5">
          <div className="w-full box-border px-4 sm:px-6 mx-auto max-w-[100vw]">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12 sm:mb-16 md:mb-24"
            >
              <span className="text-primary font-mono text-xs sm:text-sm tracking-[0.3em] uppercase mb-2 sm:mb-4 block">The Architects</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-black tracking-tighter uppercase">Our Leadership</h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
              {leaders.map((leader, i) => (
                <motion.div
                  key={leader.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="group"
                >
                  <div className="relative aspect-[3/4] rounded-[2rem] sm:rounded-[3rem] overflow-hidden mb-4 sm:mb-6 md:mb-8 border border-foreground/10">
                    <img 
                      src={leader.image} 
                      alt={leader.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4 sm:p-6">
                      <div className="flex gap-3 sm:gap-4">
                        <a href={leader.social.instagram} className="min-w-[44px] min-h-[44px] flex items-center justify-center text-white hover:text-primary transition-colors" aria-label="Instagram"><Instagram size={20} /></a>
                        <a href={leader.social.linkedin} className="min-w-[44px] min-h-[44px] flex items-center justify-center text-white hover:text-primary transition-colors" aria-label="LinkedIn"><Linkedin size={20} /></a>
                        <a href={leader.social.github} className="min-w-[44px] min-h-[44px] flex items-center justify-center text-white hover:text-primary transition-colors" aria-label="GitHub"><Github size={20} /></a>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-1 sm:space-y-2">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-bold">{leader.name}</h3>
                    <p className="text-primary font-mono text-[10px] sm:text-xs uppercase tracking-widest mb-2 sm:mb-4">{leader.role}</p>
                    <p className="text-muted-foreground text-xs sm:text-sm font-light leading-relaxed mb-4 sm:mb-6 italic line-clamp-3 sm:line-clamp-none">"{leader.message}"</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Public Message */}
        <section className="w-full box-border px-4 sm:px-6 mx-auto py-16 sm:py-24 md:py-40 lg:py-60 text-center max-w-[100vw]">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto space-y-6 sm:space-y-8 md:space-y-12"
          >
            <div className="flex justify-center mb-4 sm:mb-8">
              <MessageCircle className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 text-primary" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold leading-tight px-1">
              A message from Us to the community.
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground font-light leading-relaxed px-1">
              At Wemakespace, we believe that the best digital products are born from a culture of radical transparency, extreme engineering discipline, and a deep respect for the end user's time. We are building the room for you to succeed, one pixel and one line of code at a time.
            </p>

            {/* <div className="pt-12">
              <button className="px-12 py-6 bg-foreground text-background rounded-full font-black text-xl uppercase tracking-widest hover:scale-105 hover:bg-primary hover:text-white transition-all">
                Join our Journey
              </button>
            </div> */}


          </motion.div>
        </section>
      {/* <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto relative rounded-[3rem] overflow-hidden bg-primary p-16 md:p-24 text-center shadow-2xl shadow-primary/30">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.2),transparent)] pointer-events-none" />
          
          <div className="relative z-10">
            <h2 className="text-5xl md:text-8xl font-black font-display mb-8 text-primary-foreground tracking-tighter">
              Start the <br/>Revolution.
            </h2>
            <p className="text-xl md:text-2xl text-primary-foreground/80 max-w-2xl mx-auto mb-12 font-medium">
              Join the elite circle of enterprises redefining what's possible in the digital age.
            </p>
            <Button size="lg" className="h-20 px-12 rounded-full bg-background text-foreground hover:bg-background/90 text-2xl font-black shadow-xl transition-all hover:scale-105 active:scale-95">
              Contact Us Today
            </Button>
          </div>
        </div>
      </section> */}
      </main>
      <Footer />
    </div>
  );
}
