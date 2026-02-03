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
import { useArticle } from "@/hooks/use-content";
import { format } from "date-fns";

export default function ArticleDetail() {
  const { id } = useParams();
  const { data: article, isLoading } = useArticle(id || "");

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <p className="text-muted-foreground mb-4">Article not found</p>
          <Link href="/cases">
            <button className="text-primary hover:underline">Back to Insights</button>
          </Link>
        </div>
      </div>
    );
  }

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
                {article.category?.name?.replace('-', ' ') || "Article"}
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
                    <div className="text-xs text-muted-foreground uppercase tracking-widest">{article.author_role}</div>
                  </div>
                </div>
                <div className="flex items-center gap-6 ml-auto">
                  {article.publish_date && (
                  <div className="flex items-center gap-2 text-muted-foreground uppercase tracking-widest text-[10px] font-bold">
                      <Calendar className="w-4 h-4" /> {format(new Date(article.publish_date), "MMM d, yyyy")}
                  </div>
                  )}
                  {article.read_time && (
                  <div className="flex items-center gap-2 text-muted-foreground uppercase tracking-widest text-[10px] font-bold">
                      <Clock className="w-4 h-4" /> {article.read_time}
                  </div>
                  )}
                </div>
              </div>
            </motion.div>

            {article.image_url && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="aspect-video rounded-[3rem] overflow-hidden mb-20 shadow-2xl"
            >
                <img src={article.image_url} alt={article.title} className="w-full h-full object-cover" />
            </motion.div>
            )}

            {article.content && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="prose prose-invert prose-2xl max-w-none font-light leading-relaxed text-muted-foreground
                prose-headings:text-foreground prose-headings:font-display prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tighter
                prose-h3:text-3xl prose-p:mb-8 prose-strong:text-primary"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
            )}

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
