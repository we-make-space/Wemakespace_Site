import { motion } from "framer-motion";
import { Nav } from "@/components/nav";
import { SEO } from "@/components/seo";
import { Footer } from "@/components/footer";
import { Link } from "wouter";
import {
  ArrowRight,
  Clock,
  User,
} from "lucide-react";
import { useArticles, useArticleCategories } from "@/hooks/use-content";
import { getIconByName } from "@/lib/icons";
import { format } from "date-fns";
import { useState } from "react";

export default function Insights() {
  const { data: articles = [], isLoading: articlesLoading } = useArticles();
  const { data: categories = [], isLoading: categoriesLoading } =
    useArticleCategories();

  const [activeCategory, setActiveCategory] = useState<string>("all");

  // Add "All Insights"
  const allCategories = [
    { id: "all", slug: "all", name: "All Insights", icon_name: "BookOpen" },
    ...categories,
  ];

  // Filter articles
  const filteredArticles =
    activeCategory === "all"
      ? articles
      : articles.filter(
          (article) => article.category?.slug === activeCategory
        );

  const featuredArticle =
    filteredArticles.find((a) => a.featured) || filteredArticles[0];

  const otherArticles = filteredArticles.filter(
    (a) => a.id !== featuredArticle?.id
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Updates & Releases"
        description="Product updates, releases, and stories from the WeMakeSpace team."
      />

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
              Our Blog
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-8xl font-display font-black tracking-tighter uppercase leading-none mb-8"
            >
              Updates & <br />
              <span className="text-primary italic">& Releases.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-muted-foreground font-light leading-relaxed max-w-2xl"
            >
              The WeMakeSpace blog covers product updates, releases, and stories
              from our journey building modern digital products.
            </motion.p>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-4 mb-20">
            {!categoriesLoading &&
              allCategories.map((cat, i) => {
                const Icon = getIconByName(cat.icon_name);

                return (
                  <motion.button
                    key={cat.id || cat.slug}
                    onClick={() => setActiveCategory(cat.slug)}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.05 }}
                    className={`
                      flex items-center gap-3 px-8 py-4 rounded-full border transition-all
                      ${
                        activeCategory === cat.slug
                          ? "bg-primary text-white border-primary"
                          : "bg-muted border-foreground/5 hover:border-primary/50 hover:bg-primary/5"
                      }
                    `}
                  >
                    <Icon
                      className={`w-5 h-5 ${
                        activeCategory === cat.slug
                          ? "text-white"
                          : "text-muted-foreground"
                      }`}
                    />
                    <span className="font-bold uppercase tracking-widest text-xs">
                      {cat.name}
                    </span>
                  </motion.button>
                );
              })}
          </div>

          {/* Loading */}
          {(articlesLoading || categoriesLoading) && (
            <div className="text-center py-32 text-muted-foreground">
              Loading articles…
            </div>
          )}

          {/* Empty State */}
          {!articlesLoading && filteredArticles.length === 0 && (
            <div className="text-center py-32 text-muted-foreground">
              No articles in this category yet.
            </div>
          )}

          {/* Featured Article */}
          {!articlesLoading && featuredArticle && (
            <section className="mb-32">
              <Link href={`/insights/${featuredArticle.id}`}>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="relative group rounded-[4rem] overflow-hidden border border-foreground/5 aspect-[16/9] md:aspect-[21/9] bg-muted cursor-pointer"
                >
                  <img
                    src={featuredArticle.image_url || ""}
                    alt={featuredArticle.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2000ms]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />

                  <div className="absolute inset-0 p-12 flex flex-col justify-end">
                    <div className="max-w-3xl space-y-6">
                      <span className="px-4 py-1 rounded-full bg-primary text-white text-[10px] font-black uppercase tracking-[0.2em]">
                        {featuredArticle.category?.name || "Featured"}
                      </span>

                      <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tighter">
                        {featuredArticle.title}
                      </h2>

                      <p className="text-lg text-muted-foreground max-w-xl">
                        {featuredArticle.excerpt}
                      </p>

                      <div className="flex items-center gap-6 pt-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/20 flex items-center justify-center">
                            <User className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <div className="font-bold text-sm uppercase tracking-widest">
                              {featuredArticle.author}
                            </div>
                            <div className="text-xs text-muted-foreground uppercase tracking-widest">
                              {featuredArticle.author_role}
                            </div>
                          </div>
                        </div>

                        <div className="h-8 w-px bg-foreground/10" />

                        <div className="flex items-center gap-2 text-muted-foreground uppercase tracking-widest text-[10px] font-bold">
                          <Clock className="w-4 h-4" />
                          {featuredArticle.read_time || "5 min read"}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </section>
          )}

          {/* Article Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {!articlesLoading &&
              otherArticles.map((article, i) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex flex-col group"
                >
                  <Link href={`/insights/${article.id}`}>
                    <div className="cursor-pointer">
                      <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden border border-foreground/5 mb-8">
                        <img
                          src={article.image_url || ""}
                          alt={article.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-center gap-4 text-muted-foreground uppercase tracking-widest text-[10px] font-bold">
                          <span>
                            {article.publish_date
                              ? format(
                                  new Date(article.publish_date),
                                  "MMM d, yyyy"
                                )
                              : ""}
                          </span>
                        </div>

                        <h3 className="text-2xl font-display font-black uppercase tracking-tight leading-tight group-hover:text-primary transition-colors">
                          {article.title}
                        </h3>

                        <p className="text-muted-foreground line-clamp-2">
                          {article.excerpt}
                        </p>

                        <span className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs pt-4">
                          Read Article
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
