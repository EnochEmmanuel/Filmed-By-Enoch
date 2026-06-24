import { useState, useEffect } from "react";
import { Mail, Film, Laptop, Camera, Layers, Instagram, Disc, Sun, Moon, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import Projects from "./components/Projects";
import BookingForm from "./components/BookingForm";
import Blog from "./components/Blog";
import Testimonials from "./components/Testimonials";
import WhatsAppChat from "./components/WhatsAppChat";
import VideoPlayer from "./components/VideoPlayer";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const stored = localStorage.getItem("theme");
    return stored ? stored === "dark" : true;
  });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  // Cinematic Overlay Movie Player Controller
  const [playerConfig, setPlayerConfig] = useState<{
    isOpen: boolean;
    url: string;
    title: string;
    aspectRatio: "portrait" | "landscape";
  }>({
    isOpen: false,
    url: "",
    title: "",
    aspectRatio: "landscape",
  });

  const handleOpenPlayer = (url: string, title: string, aspectRatio: "portrait" | "landscape" = "landscape") => {
    setPlayerConfig({
      isOpen: true,
      url,
      title,
      aspectRatio,
    });
  };

  const handleClosePlayer = () => {
    setPlayerConfig((prev) => ({ ...prev, isOpen: false }));
  };

  const handleScrollToElement = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={`min-h-screen bg-bg-primary text-text-primary font-sans overflow-x-hidden selection:bg-accent-custom selection:text-accent-fg transition-colors duration-300`}>
      {/* Dynamic Header Overlay (Floating Gen Z Glass Pill) */}
      <header className="fixed top-4 left-1/2 -translate-x-1/2 z-40 flex items-center justify-between w-[92%] max-w-5xl px-5 py-3 rounded-full bg-bg-card/75 backdrop-blur-md border border-border-custom shadow-lg transition-all">
        {/* Logo Mark */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => { handleScrollToElement("site-hero"); setIsMobileMenuOpen(false); }}>
          <Disc className="h-4 w-4 text-accent-custom animate-[spin_12s_linear_infinite]" />
          <span className="text-[11px] font-bold tracking-widest text-text-primary uppercase font-mono">
            ENOCH<span className="text-text-muted font-normal lowercase tracking-normal font-serif">.film</span>
          </span>
        </div>

        {/* Minimal Nav links */}
        <nav className="hidden md:flex items-center gap-6 text-[10px] font-mono tracking-wider uppercase text-text-secondary">
          <button
            onClick={() => handleScrollToElement("gallery-section")}
            className="hover:text-text-primary transition cursor-pointer"
          >
            Feed
          </button>
          <button
            onClick={() => handleScrollToElement("projects-section-anchor")}
            className="hover:text-text-primary transition cursor-pointer"
          >
            Campaigns
          </button>
          <button
            onClick={() => handleScrollToElement("booking-section")}
            className="hover:text-text-primary transition cursor-pointer"
          >
            Estimates
          </button>
          <button
            onClick={() => handleScrollToElement("blog-section")}
            className="hover:text-text-primary transition cursor-pointer"
          >
            Insights
          </button>
          <button
            onClick={() => handleScrollToElement("testimonials-section")}
            className="hover:text-text-primary transition cursor-pointer"
          >
            Reviews
          </button>
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          {/* Theme Toggle Button */}
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2 rounded-full hover:bg-bg-secondary transition-all cursor-pointer border border-border-custom flex items-center justify-center text-text-secondary hover:text-text-primary"
            aria-label="Toggle Theme"
          >
            {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          {/* Book Shoot Button (hidden on tiny mobile, visible sm+) */}
          <button
            onClick={() => handleScrollToElement("booking-section")}
            className="hidden sm:inline-block rounded-full bg-accent-custom text-accent-fg px-4 py-2 text-[10px] font-bold tracking-wider hover:bg-accent-hover transition-all cursor-pointer shadow-sm uppercase font-display"
          >
            Book Shoot
          </button>

          {/* Hamburger Menu Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-full hover:bg-bg-secondary transition-all cursor-pointer border border-border-custom flex md:hidden items-center justify-center text-text-secondary hover:text-text-primary"
            aria-label="Toggle Mobile Menu"
          >
            {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </header>

      {/* Elegant Dropdown Drawer for Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-20 left-1/2 -translate-x-1/2 z-40 w-[92%] max-w-5xl p-6 rounded-2xl bg-bg-card/95 backdrop-blur-xl border border-border-custom shadow-2xl flex flex-col gap-5 md:hidden"
          >
            <div className="flex flex-col gap-3 font-mono text-[10px] tracking-widest text-text-muted uppercase font-bold border-b border-border-custom/40 pb-2">
              NAVIGATE SECTIONS
            </div>
            <nav className="flex flex-col gap-4 text-xs font-mono tracking-wider uppercase text-text-secondary">
              <button
                onClick={() => {
                  handleScrollToElement("gallery-section");
                  setIsMobileMenuOpen(false);
                }}
                className="hover:text-text-primary text-left py-2 border-b border-border-custom/30 transition-colors"
              >
                Feed
              </button>
              <button
                onClick={() => {
                  handleScrollToElement("projects-section-anchor");
                  setIsMobileMenuOpen(false);
                }}
                className="hover:text-text-primary text-left py-2 border-b border-border-custom/30 transition-colors"
              >
                Campaigns
              </button>
              <button
                onClick={() => {
                  handleScrollToElement("booking-section");
                  setIsMobileMenuOpen(false);
                }}
                className="hover:text-text-primary text-left py-2 border-b border-border-custom/30 transition-colors"
              >
                Estimates
              </button>
              <button
                onClick={() => {
                  handleScrollToElement("blog-section");
                  setIsMobileMenuOpen(false);
                }}
                className="hover:text-text-primary text-left py-2 border-b border-border-custom/30 transition-colors"
              >
                Insights
              </button>
              <button
                onClick={() => {
                  handleScrollToElement("testimonials-section");
                  setIsMobileMenuOpen(false);
                }}
                className="hover:text-text-primary text-left py-2 border-b border-border-custom/30 transition-colors"
              >
                Reviews
              </button>
            </nav>
            <button
              onClick={() => {
                handleScrollToElement("booking-section");
                setIsMobileMenuOpen(false);
              }}
              className="w-full text-center rounded-full bg-accent-custom text-accent-fg py-3 text-xs font-bold tracking-wider hover:bg-accent-hover transition-all cursor-pointer shadow-md uppercase font-display"
            >
              Book Shoot Now
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 1. Immersive Hero Background */}
      <Hero
        onPlayShowreel={(url, title) => handleOpenPlayer(url, title, "landscape")}
        onNavigateToProjects={() => handleScrollToElement("projects-section-anchor")}
        onNavigateToContact={() => handleScrollToElement("booking-section")}
      />

      {/* 2. Live Interaction Video Gallery */}
      <Gallery onPlayVideo={handleOpenPlayer} />

      {/* 3. Deep-Dive Strategy Projects Section */}
      <Projects onPlayVideo={handleOpenPlayer} />

      {/* 5. Campaign Cost Estimator */}
      <BookingForm />

      {/* 5b. Written Insights & Mobile Cinema Guides */}
      <Blog />

      {/* 5c. Verified Client Testimonials */}
      <Testimonials />

      {/* 6. Footer & Quick Contacts Block */}
      <footer className="bg-bg-secondary border-t border-border-custom py-16 px-6 md:px-12 text-text-secondary text-xs text-center md:text-left transition-colors">
        <div className="mx-auto max-w-5xl flex flex-col md:flex-row items-stretch justify-between gap-12">
          
          <div className="flex flex-col gap-4 md:max-w-md">
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <Disc className="h-4 w-4 text-accent-custom" />
              <span className="text-xs font-bold tracking-[0.25em] text-text-primary uppercase font-mono">
                FILMED BY ENOCH
              </span>
            </div>
            <p className="text-text-muted font-sans leading-relaxed text-xs">
              Innovative mobile videographer specialized in high-volume social reels, lifestyle campaigns, and raw event captures. Transforming transient motion into durable, cinematic narratives.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 text-left">
            <div className="flex flex-col gap-3">
              <span className="text-[10px] font-mono tracking-widest text-text-muted uppercase font-bold">CHANNELS</span>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-text-primary transition"
              >
                <Instagram className="h-3.5 w-3.5" />
                <span>Instagram Profile</span>
              </a>
              <a
                href="mailto:agucreatives@gmail.com"
                className="flex items-center gap-1.5 hover:text-text-primary transition"
              >
                <Mail className="h-3.5 w-3.5" />
                <span>E-Mail Desk</span>
              </a>
            </div>

            <div className="flex flex-col gap-3">
              <span className="text-[10px] font-mono tracking-widest text-text-muted uppercase font-bold">RESOURCES</span>
              <button
                onClick={() => handleScrollToElement("gallery-section")}
                className="text-left text-text-secondary hover:text-text-primary transition cursor-pointer"
              >
                Video Feed
              </button>
              <button
                onClick={() => handleScrollToElement("projects-section-anchor")}
                className="text-left text-text-secondary hover:text-text-primary transition cursor-pointer"
              >
                Case Studies
              </button>
              <button
                onClick={() => handleScrollToElement("blog-section")}
                className="text-left text-text-secondary hover:text-text-primary transition cursor-pointer"
              >
                Written Insights
              </button>
              <button
                onClick={() => handleScrollToElement("testimonials-section")}
                className="text-left text-text-secondary hover:text-text-primary transition cursor-pointer"
              >
                Reviews
              </button>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-5xl border-t border-border-custom mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[9px] font-mono text-text-dim tracking-wider">
          <p>© {new Date().getFullYear()} FILMED BY ENOCH. ALL RIGHTS RESERVED.</p>
          <p className="tracking-widest uppercase">EASY EXPORT &amp; PRODUCTION DEPLOYED</p>
        </div>
      </footer>

      {/* 7. Persistent WhatsApp Contact Panel Widget */}
      <WhatsAppChat />

      {/* 8. Full-screen Cinema Overlay Mode Player */}
      <VideoPlayer
        isOpen={playerConfig.isOpen}
        onClose={handleClosePlayer}
        videoUrl={playerConfig.url}
        title={playerConfig.title}
        aspectRatio={playerConfig.aspectRatio}
      />
    </div>
  );
}
