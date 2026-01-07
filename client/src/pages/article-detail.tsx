import { motion } from "framer-motion";
import { Nav } from "@/components/nav";
import { SEO } from "@/components/seo";
import { Footer } from "@/components/footer";
import { useParams, Link } from "wouter";
import { 
  ArrowLeft, 
  Clock, 
  User, 
  Share2,
  Calendar,
  MessageCircle
} from "lucide-react";

const articles = {
  "1": {
    category: "thought-leadership",
    title: "The Spatial Shift: Why 2D Interfaces are Becoming Obsolete",
    content: `
      <p>The history of computing has been defined by the flat screen. From the earliest command-line interfaces to the high-resolution displays of today, we have interacted with information through a glass pane. But that era is coming to a definitive end.</p>
      
      <h3>The Dimension Problem</h3>
      <p>Humans perceive the world in three dimensions. Our brains are wired to navigate physical spaces, understand depth, and manipulate objects in 3D. When we force our digital interactions into 2D, we create a cognitive load—a constant translation layer between our natural perception and the digital medium.</p>
      
      <h3>The Rise of Spatial UI</h3>
      <p>AetherOS represents our commitment to solving this translation problem. By utilizing spatial computing, we aren't just making interfaces "look 3D"—we are creating digital environments that respect the laws of physics, depth, and human spatial memory.</p>
    `,
    author: "Elena Vance",
    role: "Chief Design Officer",
    date: "May 24, 2025",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1000&auto=format&fit=crop"
  },
  "2": {
    category: "announcements",
    title: "Wemakespace Secures Series B to Accelerate AetherOS Development",
    content: `
      <p>We are thrilled to announce that Wemakespace has successfully closed a $45M Series B funding round. This investment, led by Forward Ventures with participation from existing partners, will be focused entirely on scaling our Spatial UI research and the global rollout of AetherOS.</p>
      
      <h3>What this means for our partners</h3>
      <p>This capital infusion allows us to double our engineering team and accelerate the release of our Hives and Fashnect updates. We are moving from a prototype phase to global production at a scale never before seen in the spatial computing sector.</p>
    `,
    author: "Marcus Thorne",
    role: "CEO",
    date: "June 12, 2025",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=1000&auto=format&fit=crop"
  },
  "3": {
    category: "company-thinking",
    title: "Engineering for Resonance: Our Philosophy on Human-Centric Code",
    content: `
      <p>At Wemakespace, we believe that code is not just logic—it's a medium for human experience. "Resonance" is the metric we use to measure success. Does the interface feel alive? Does it respond with the same subtle grace as a physical object?</p>
      
      <h3>The Ghost in the Machine</h3>
      <p>We spend thousands of hours perfecting micro-interactions that many users might never consciously notice. The specific bounce of a menu, the way shadows shift as you move—these are the elements that create a sense of presence and trust.</p>
    `,
    author: "David Chen",
    role: "CTO",
    date: "May 10, 2025",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop"
  },
  "4": {
    category: "blog",
    title: "Behind the Scenes: Designing the Fashnect AR Engine",
    content: `
      <p>Fabric simulation is one of the hardest problems in computer graphics. When you add the requirement of real-time performance on a mobile device, it becomes almost impossible. Almost.</p>
      
      <h3>The Thread-Level Detail</h3>
      <p>Our AR engine doesn't just overlay a texture. It simulates the physical properties of silk, denim, and leather. We've developed a custom shader system that calculates light scattering and movement physics at 60 frames per second.</p>
    `,
    author: "Sarah Jenkins",
    role: "Lead AR Engineer",
    date: "April 28, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1000&auto=format&fit=crop"
  }
};

export default function ArticleDetail() {
  const { id } = useParams();
  const article = articles[id as keyof typeof articles];

  if (!article) return <div className="min-h-screen flex items-center justify-center">Article not found</div>;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO title={article.title} description={article.title} />
      <Nav />
      
      <main className="pt-32 pb-40">
        <div className="container px-6 mx-auto">
          {/* Header */}
          <Link href="/cases">
            <motion.button 
              whileHover={{ x: -5 }}
              className="flex items-center gap-2 text-muted-foreground hover:text-primary mb-12 uppercase tracking-[0.2em] font-bold text-xs"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Insights
            </motion.button>
          </Link>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8 mb-16"
            >
              <span className="px-6 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-[0.2em] uppercase border border-primary/20 inline-block">
                {article.category.replace('-', ' ')}
              </span>
              <h1 className="text-5xl md:text-7xl font-display font-black tracking-tighter uppercase leading-[0.9]">
                {article.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-8 py-8 border-y border-foreground/5">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <User className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-bold text-sm uppercase tracking-widest">{article.author}</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-widest">{article.role}</div>
                  </div>
                </div>
                <div className="flex items-center gap-6 ml-auto">
                  <div className="flex items-center gap-2 text-muted-foreground uppercase tracking-widest text-[10px] font-bold">
                    <Calendar className="w-4 h-4" /> {article.date}
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground uppercase tracking-widest text-[10px] font-bold">
                    <Clock className="w-4 h-4" /> {article.readTime}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="aspect-video rounded-[3rem] overflow-hidden mb-20 shadow-2xl"
            >
              <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="prose prose-invert prose-2xl max-w-none font-light leading-relaxed text-muted-foreground
                prose-headings:text-foreground prose-headings:font-display prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tighter
                prose-h3:text-3xl prose-p:mb-8 prose-strong:text-primary"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            <div className="mt-20 pt-20 border-t border-foreground/5 flex items-center justify-between">
              <div className="flex gap-4">
                <button className="w-12 h-12 rounded-full border border-foreground/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                  <Share2 className="w-5 h-5" />
                </button>
                <button className="w-12 h-12 rounded-full border border-foreground/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                  <MessageCircle className="w-5 h-5" />
                </button>
              </div>
              <Link href="/cases">
                <button className="px-10 py-5 bg-foreground text-background rounded-full font-black uppercase tracking-widest text-xs hover:scale-105 transition-transform">
                  Next Article
                </button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
