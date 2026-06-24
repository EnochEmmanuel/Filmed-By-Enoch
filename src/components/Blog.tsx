import { useState } from "react";
import { Clock, Tag, X, ArrowUpRight, ArrowLeft, ArrowRight, BookOpen } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface Article {
  id: string;
  title: string;
  category: "tips" | "trends" | "operations";
  categoryLabel: string;
  date: string;
  readTime: string;
  excerpt: string;
  thumbnailUrl: string;
  content: {
    heading: string;
    paragraphs: string[];
  }[];
}

const ARTICLES: Article[] = [
  {
    id: "cinematic-curves",
    title: "Cinematic Curvatures: Mastering the 3-Axis Stabilizer on Mobile Rigs",
    category: "tips",
    categoryLabel: "Tips & Techniques",
    date: "June 12, 2026",
    readTime: "6 Min Read",
    excerpt: "Unlocking organic, fluid motion in commercial campaigns requires understanding axis dampening, pacing adjustments, and the art of physical orbits.",
    thumbnailUrl: "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=800&q=80",
    content: [
      {
        heading: "01 / The Myth of Heavy Production",
        paragraphs: [
          "For years, mainstream commercial videography was gatekept by heavy equipment. The consensus was that stability required mass. However, modern agile mobile setups disprove this, enabling speeds of operation that standard cinematography can rarely duplicate.",
          "By employing specialized 3-axis stabilizers paired with targeted physical panning techniques, we capture raw, reactive footage that maintains pristine cinematic fluid motion while retaining the natural speed of social channels."
        ]
      },
      {
        heading: "02 / The Orbit Swing Trick",
        paragraphs: [
          "To replicate sweeping crane maneuvers, execute the 'Orbit Swing'. Start by pulling the gimbal tightly toward your chest, locking your elbows at a 90-degree angle. Walk in a gentle curve around your target subject, shifting your weight gradually from heel to toe to suppress vertical walking steps.",
          "The gimbal handles physical rotational stabilization, but your body serves as the fluid dampening arm. The results are butter-smooth tracking loops that keep the focus tight and immersive."
        ]
      },
      {
        heading: "03 / Neutral Density Filters: Your Shield Against Glare",
        paragraphs: [
          "To lock our mobile cameras at the cinematic shutter rule of 180 degrees (shutter speed at double the frame rate, or 1/48s for 24fps), a physical ND filter is mandatory. Applying premium polarized variables allows us to manage lens exposure on-the-fly even under harsh sunlight, preserving rich skin tones and high-fidelity HDR highlights without digital clipping."
        ]
      }
    ]
  },
  {
    id: "vertical-paradigm",
    title: "The Vertical Paradigm: Why High-Volume Reels Outperform 16:9 Cinema",
    category: "trends",
    categoryLabel: "Trend Analysis",
    date: "May 28, 2026",
    readTime: "4 Min Read",
    excerpt: "An expert analysis on the cognitive response to mobile-first frame layouts, high-retention pacing, and the key mechanics of the initial 3-second visual hook.",
    thumbnailUrl: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=800&q=80",
    content: [
      {
        heading: "01 / Attention Span Mechanics",
        paragraphs: [
          "The modern digital consumer does not wait. Analytics consistently show that 45% of audience drop-off occurs within the absolute first three seconds of scroll interaction.",
          "Traditional film structure uses slow establishment shots to craft atmosphere. In contrast, vertical social storytelling must establish the core narrative loop instantly, using rapid motion, dynamic contrast, and typographic hooks to capture intent immediately."
        ]
      },
      {
        heading: "02 / The Geometric Advantage of 9:16",
        paragraphs: [
          "Vertical formats cover over 90% of a mobile screen, forcing deep, unfragmented physical immersion. When a brand structures its campaigns in native 9:16, they occupy the complete visual field of the customer, increasing brand resonance and driving a higher click-through potential than generic horizontal banners."
        ]
      }
    ]
  },
  {
    id: "vector-accents",
    title: "Vector Infusions: Integrating Custom Graphic Elements into Real Footage",
    category: "operations",
    categoryLabel: "Operational Strategy",
    date: "May 15, 2026",
    readTime: "5 Min Read",
    excerpt: "How applying precise, non-destructive minimalist title designs, transparent vector masks, and custom branding locks in complete brand authority.",
    thumbnailUrl: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80",
    content: [
      {
        heading: "01 / Branding Meets Raw Movement",
        paragraphs: [
          "Raw mobile videography can occasionally feel too real, losing its elite editorial essence. By integrating precise Adobe Illustrator vector typography and clean post-production stamp overlays, we layer brand gravity directly over active physical movement.",
          "These vector layouts act as visual stamps—subtle margins, technical codes, or elegant lower thirds—framing real physical scenes inside a sophisticated editorial structure."
        ]
      },
      {
        heading: "02 / Creating Non-Destructive Crop Zones",
        paragraphs: [
          "When designing typography layout masks, avoid hard opacity boxes. Place coordinates, logo frames, or graphic identifiers at the corners and margins using transparent PNG formats. This ensures typography acts as a cohesive framing window rather than an obstruction."
        ]
      }
    ]
  }
];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState<"all" | "tips" | "trends" | "operations">("all");
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);

  const filteredArticles = selectedCategory === "all" 
    ? ARTICLES 
    : ARTICLES.filter(art => art.category === selectedCategory);

  const featuredArticle = ARTICLES[0]; // First article is featured

  return (
    <section className="bg-[#050505] px-6 py-24 text-[#F5F5F5] border-b border-white/5 font-sans" id="blog-section">
      <div className="mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-[10px] uppercase font-mono tracking-[0.2em] text-white/40 font-bold mb-2 block">
              05 / WRITTEN INSIGHTS
            </span>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white uppercase leading-none">
              CREATIVE <span className="italic font-serif text-white/40">INTELLIGENCE</span>
            </h2>
            <p className="text-xs text-white/30 font-mono mt-3 max-w-md uppercase tracking-wide">
              Guides, trend analyses, and tactical blueprints detailing the mechanics of agile mobile cinema.
            </p>
          </div>

          {/* Categories Tab Bar */}
          <div className="flex flex-wrap items-center gap-1 bg-[#111] border border-white/5 p-1 rounded-sm" id="blog-filters">
            {(["all", "tips", "trends", "operations"] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-[10px] font-mono tracking-widest uppercase transition-all rounded-sm cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-white/10 text-white font-medium border border-white/10"
                    : "text-white/40 hover:text-white border border-transparent"
                }`}
                id={`blog-filter-${cat}`}
              >
                {cat === "all" ? "EXPLORE ALL" : cat === "tips" ? "TIPS & TRICKS" : cat === "trends" ? "TREND ANALYSES" : "OPERATIONS"}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Post Card (Displayed only when category is 'all') */}
        {selectedCategory === "all" && featuredArticle && (
          <div className="mb-12" id="blog-featured-card">
            <div 
              onClick={() => setActiveArticle(featuredArticle)}
              className="relative overflow-hidden rounded-sm bg-[#111] border border-white/5 group hover:border-white/20 cursor-pointer shadow-xl transition-all duration-500 grid grid-cols-1 lg:grid-cols-12 min-h-[400px]"
            >
              {/* Image side */}
              <div className="lg:col-span-7 relative overflow-hidden h-64 lg:h-auto">
                <img 
                  src={featuredArticle.thumbnailUrl} 
                  alt={featuredArticle.title}
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-102 opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#111] via-transparent to-transparent" />
                <span className="absolute top-4 left-4 bg-black/80 text-white/80 border border-white/10 font-mono text-[9px] tracking-widest px-3 py-1 rounded-sm uppercase">
                  FEATURED ARTICLE
                </span>
              </div>

              {/* Text Side */}
              <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-[10px] font-mono text-white/40 mb-3">
                    <span className="uppercase tracking-widest text-[#F5F5F5]/60 font-semibold">{featuredArticle.categoryLabel}</span>
                    <span>•</span>
                    <span>{featuredArticle.date}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-light text-white uppercase group-hover:text-white transition-colors leading-[1.1] mb-4">
                    {featuredArticle.title}
                  </h3>
                  <p className="text-white/50 text-xs sm:text-sm leading-relaxed mb-6">
                    {featuredArticle.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[10px] font-mono font-semibold tracking-wider text-white/40 uppercase flex items-center gap-1.5">
                    <BookOpen className="h-3.5 w-3.5" />
                    READ ARTICLE ({featuredArticle.readTime})
                  </span>
                  <span className="h-8 w-8 rounded-sm bg-white/5 border border-white/10 group-hover:bg-white/10 flex items-center justify-center transition-colors">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Regular list grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="blog-articles-grid">
          {filteredArticles.map((article) => {
            // If showing 'all', skip the featured article in the sub-list to avoid repetition
            if (selectedCategory === "all" && article.id === featuredArticle.id) {
              return null;
            }
            return (
              <div 
                key={article.id}
                onClick={() => setActiveArticle(article)}
                className="relative overflow-hidden rounded-sm bg-[#111] border border-white/5 group hover:border-white/20 cursor-pointer shadow-lg transition-all duration-300 flex flex-col h-full"
                id={`blog-card-${article.id}`}
              >
                {/* Thumbnail */}
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={article.thumbnailUrl} 
                    alt={article.title}
                    referrerPolicy="no-referrer"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-102 opacity-60"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/20 to-black/30" />
                  
                  <span className="absolute top-4 left-4 bg-black/80 text-white/80 border border-white/10 font-mono text-[9px] tracking-widest px-2.5 py-1 rounded-sm uppercase">
                    {article.categoryLabel}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <span className="text-[9px] font-mono text-white/30 uppercase tracking-widest">{article.date}</span>
                    <h3 className="text-lg font-light text-white uppercase mt-1 leading-snug line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-white/40 text-xs mt-3 line-clamp-3 leading-relaxed">
                      {article.excerpt}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-mono">
                    <span className="text-white/40 tracking-wider font-semibold uppercase flex items-center gap-1.5">
                      <Clock className="h-3 w-3" />
                      {article.readTime}
                    </span>
                    <span className="text-white/60 group-hover:text-white flex items-center gap-1 transition-colors">
                      READ INSIGHT <ArrowRight className="h-3 w-3" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Expanded Article Reader Dialog Overlay */}
      <AnimatePresence>
        {activeArticle && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-sm overflow-y-auto"
            id="article-reader-overlay"
          >
            {/* Click outside target */}
            <div className="absolute inset-0" onClick={() => setActiveArticle(null)} />

            <motion.div
              initial={{ scale: 0.98, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.98, y: 15 }}
              transition={{ type: "spring", damping: 25, stiffness: 180 }}
              className="relative z-10 w-full max-w-3xl bg-[#111] border border-white/10 shadow-2xl rounded-sm my-8 overflow-hidden"
              id="article-reader-container"
            >
              {/* Header Cover Banner */}
              <div className="relative aspect-video sm:aspect-[2.1/1] overflow-hidden bg-black/40">
                <img 
                  src={activeArticle.thumbnailUrl} 
                  alt={activeArticle.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover opacity-50"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111] to-black/30" />
                
                {/* Float Controls */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="bg-black/80 text-white/80 border border-white/10 rounded-sm py-1 px-3 text-[10px] font-mono tracking-widest uppercase font-bold">
                    {activeArticle.categoryLabel}
                  </span>
                  <button
                    onClick={() => setActiveArticle(null)}
                    className="rounded-sm p-1.5 bg-white/5 hover:bg-white/10 text-white transition border border-white/10 cursor-pointer"
                    aria-label="Close reader"
                    id="blog-reader-close"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>

                {/* Overlaid titles */}
                <div className="absolute bottom-6 left-6 right-6 text-left">
                  <span className="text-[9px] font-mono text-white/40 tracking-widest uppercase">{activeArticle.date} • {activeArticle.readTime}</span>
                  <h1 className="text-xl sm:text-3xl font-light text-white uppercase mt-1 leading-[1.1]">
                    {activeArticle.title}
                  </h1>
                </div>
              </div>

              {/* Scrollable Article Body Content */}
              <div className="p-6 sm:p-10 max-h-[60vh] overflow-y-auto font-sans leading-relaxed text-[#F5F5F5]/80 space-y-8 select-auto text-left">
                {activeArticle.content.map((sec, i) => (
                  <div key={i} className="space-y-3">
                    <h4 className="text-xs font-mono tracking-[0.2em] uppercase text-white/50 border-b border-white/5 pb-2">
                      {sec.heading}
                    </h4>
                    {sec.paragraphs.map((para, pi) => (
                      <p key={pi} className="text-sm text-white/60 font-sans leading-relaxed">
                        {para}
                      </p>
                    ))}
                  </div>
                ))}
              </div>

              {/* Footer Specs bar */}
              <div className="bg-[#0a0a0a] p-4 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-white/30">
                <span>AUTHOR: ENOCH</span>
                <span>COMPLEX DESIGN MATRIX</span>
                <button 
                  onClick={() => setActiveArticle(null)}
                  className="text-white/60 hover:text-white tracking-widest uppercase flex items-center gap-1.5 cursor-pointer"
                >
                  <ArrowLeft className="h-3 w-3" /> CLOSE READ
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
