import { motion } from "framer-motion";
import { Nav } from "@/components/nav";
import { SEO } from "@/components/seo";
import { Footer } from "@/components/footer";
import { Link } from "wouter";
import { 
  BookOpen, 
  Lightbulb, 
  Building2, 
  Megaphone,
  ArrowRight,
  Clock,
  User,
  Tag
} from "lucide-react";

const categories = [
  { id: "all", name: "All Insights", icon: BookOpen },
  { id: "thought-leadership", name: "Thought Leadership", icon: Lightbulb },
  { id: "company-thinking", name: "Company Thinking", icon: Building2 },
  { id: "announcements", name: "Announcements", icon: Megaphone },
  { id: "blog", name: "Blog", icon: Tag },
];

const articles = [
  {
    id: 1,
    category: "thought-leadership",
    title: "The Spatial Shift: Why 2D Interfaces are Becoming Obsolete",
    excerpt: "Exploring the fundamental transition from flat screens to immersive spatial computing environments.",
    author: "Elena Vance",
    role: "Chief Design Officer",
    date: "May 24, 2025",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 2,
    category: "announcements",
    title: "Wemakespace Secures Series B to Accelerate AetherOS Development",
    excerpt: "A new milestone in our journey to redefine human-computer interaction.",
    author: "Marcus Thorne",
    role: "CEO",
    date: "June 12, 2025",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 3,
    category: "company-thinking",
    title: "Engineering for Resonance: Our Philosophy on Human-Centric Code",
    excerpt: "How we balance extreme technical performance with emotional user resonance.",
    author: "David Chen",
    role: "CTO",
    date: "May 10, 2025",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 4,
    category: "blog",
    title: "Behind the Scenes: Designing the Fashnect AR Engine",
    excerpt: "A deep dive into the challenges of hyper-realistic fabric simulation in real-time.",
    author: "Sarah Jenkins",
    role: "Lead AR Engineer",
    date: "April 28, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1000&auto=format&fit=crop"
  }
];

export default function Insights() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO title="Insights" description="Our latest thinking on spatial UI, digital architecture, and engineering for resonance." />
      <Nav />
      
      <main className="pt-32 pb-40">
        <div className="container px-6 mx-auto">
          {/* Header */}
          <div className="max-w-4xl mb-20">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="px-6 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-[0.2em] uppercase border border-primary/20 inline-block mb-8"
            >
              Knowledge Hub
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl md:text-8xl font-display font-black tracking-tighter uppercase leading-none mb-8"
            >
              Insights <br/>
              <span className="text-primary italic">& Thinking.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-muted-foreground font-light leading-relaxed max-w-2xl"
            >
              Exploring the intersection of spatial computing, human resonance, and the future of digital ecosystems.
            </motion.p>
          </div>

          {/* Categories Grid */}
          <div className="flex flex-wrap gap-4 mb-20">
            {categories.map((cat, i) => (
              <motion.button
                key={cat.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className={`flex items-center gap-3 px-8 py-4 rounded-full border border-foreground/5 bg-muted hover:border-primary/50 hover:bg-primary/5 transition-all group`}
              >
                <cat.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                <span className="font-bold uppercase tracking-widest text-xs">{cat.name}</span>
              </motion.button>
            ))}
          </div>

          {/* Featured Post */}
          <section className="mb-32">
            <Link href={`/insights/${articles[0].id}`}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative group rounded-[4rem] overflow-hidden border border-foreground/5 aspect-[16/9] md:aspect-[21/9] bg-muted cursor-pointer"
              >
                <img 
                  src={articles[0].image} 
                  alt={articles[0].title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2000ms]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                
                <div className="absolute inset-0 p-12 flex flex-col justify-end">
                  <div className="max-w-3xl space-y-6">
                    <span className="px-4 py-1 rounded-full bg-primary text-white text-[10px] font-black uppercase tracking-[0.2em]">Featured Thought Leadership</span>
                    <h2 className="text-4xl md:text-6xl font-display font-black tracking-tighter uppercase leading-none">
                      {articles[0].title}
                    </h2>
                    <p className="text-lg text-muted-foreground font-light max-w-xl">
                      {articles[0].excerpt}
                    </p>
                    <div className="flex items-center gap-6 pt-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/20 flex items-center justify-center">
                          <User className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <div className="font-bold text-sm uppercase tracking-widest">{articles[0].author}</div>
                          <div className="text-xs text-muted-foreground uppercase tracking-widest">{articles[0].role}</div>
                        </div>
                      </div>
                      <div className="h-8 w-px bg-foreground/10" />
                      <div className="flex items-center gap-2 text-muted-foreground uppercase tracking-widest text-[10px] font-bold">
                        <Clock className="w-4 h-4" /> {articles[0].readTime}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          </section>

          {/* Article Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {articles.slice(1).map((article, i) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col group"
              >
                <Link href={`/insights/${article.id}`}>
                  <div className="cursor-pointer">
                    <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden border border-foreground/5 mb-8">
                      <img 
                        src={article.image} 
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute top-6 left-6">
                        <span className="px-4 py-1 rounded-full bg-background/80 backdrop-blur-md border border-foreground/5 text-[10px] font-black uppercase tracking-[0.2em] text-primary">
                          {article.category.replace('-', ' ')}
                        </span>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-center gap-4 text-muted-foreground uppercase tracking-widest text-[10px] font-bold">
                        <span>{article.date}</span>
                        <span className="w-1 h-1 rounded-full bg-primary" />
                        <span>{article.readTime}</span>
                      </div>
                      <h3 className="text-2xl font-display font-black uppercase tracking-tight leading-tight group-hover:text-primary transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-muted-foreground font-light leading-relaxed line-clamp-2">
                        {article.excerpt}
                      </p>
                      <button className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs pt-4 group/btn">
                        Read Article <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform" />
                      </button>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>

          {/* Newsletter Section */}
          <section className="mt-40 p-20 rounded-[4rem] bg-muted border border-foreground/5 text-center relative overflow-hidden">
            <div className="relative z-10 max-w-2xl mx-auto space-y-8">
              <h2 className="text-4xl md:text-6xl font-display font-black tracking-tighter uppercase">Stay Connected.</h2>
              <p className="text-xl text-muted-foreground font-light">
                Get our latest thinking on spatial UI and digital architecture delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="EMAIL ADDRESS"
                  className="flex-1 bg-background border border-foreground/10 px-8 py-5 rounded-full text-xs font-bold tracking-widest focus:outline-none focus:border-primary transition-colors"
                />
                <button className="bg-foreground text-background px-10 py-5 rounded-full font-black uppercase tracking-widest text-xs hover:scale-105 transition-transform">
                  Subscribe
                </button>
              </div>
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,var(--primary)_0%,transparent_70%)] opacity-5 blur-[100px]" />
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
