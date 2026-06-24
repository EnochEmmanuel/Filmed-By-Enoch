import { useState } from "react";
import { Mail, Film, Laptop, Camera, Layers, Instagram, Disc } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import Projects from "./components/Projects";
import Toolkit from "./components/Toolkit";
import BookingForm from "./components/BookingForm";
import Blog from "./components/Blog";
import Testimonials from "./components/Testimonials";
import WhatsAppChat from "./components/WhatsAppChat";
import VideoPlayer from "./components/VideoPlayer";

export default function App() {
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
    <div className="min-h-screen bg-[#050505] text-[#F5F5F5] font-sans overflow-x-hidden selection:bg-white selection:text-black">
      {/* Dynamic Header Overlay */}
      <header className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between px-6 py-6 md:px-12 pointer-events-auto bg-gradient-to-b from-black/80 to-transparent">
        {/* Logo Mark */}
        <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => handleScrollToElement("site-hero")}>
          <Disc className="h-4 w-4 text-white/50 animate-[spin_12s_linear_infinite]" />
          <span className="text-xs font-light tracking-[0.25em] text-white uppercase">
            FILMED BY <span className="font-serif italic lowercase tracking-normal text-white/40">enoch</span>
          </span>
        </div>

        {/* Minimal Nav links */}
        <nav className="hidden md:flex items-center gap-5 xl:gap-8 text-[10px] font-mono tracking-[0.2em] uppercase text-white/40">
          <button
            onClick={() => handleScrollToElement("gallery-section")}
            className="hover:text-white transition cursor-pointer"
          >
            Feed
          </button>
          <button
            onClick={() => handleScrollToElement("projects-section-anchor")}
            className="hover:text-white transition cursor-pointer"
          >
            Campaigns
          </button>
          <button
            onClick={() => handleScrollToElement("toolkit-section")}
            className="hover:text-white transition cursor-pointer"
          >
            Toolkit
          </button>
          <button
            onClick={() => handleScrollToElement("booking-section")}
            className="hover:text-white transition cursor-pointer"
          >
            Estimates
          </button>
          <button
            onClick={() => handleScrollToElement("blog-section")}
            className="hover:text-white transition cursor-pointer"
          >
            Insights
          </button>
          <button
            onClick={() => handleScrollToElement("testimonials-section")}
            className="hover:text-white transition cursor-pointer"
          >
            Reviews
          </button>
        </nav>

        {/* Dynamic CTA */}
        <button
          onClick={() => handleScrollToElement("booking-section")}
          className="rounded-sm bg-white text-black px-5 py-2.5 text-[10px] font-bold tracking-widest hover:bg-[#E0E0E0] active:scale-97 transition-all cursor-pointer shadow-md uppercase"
        >
          Book Shoot
        </button>
      </header>

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

      {/* 4. Agile Toolkit Spec Grids */}
      <Toolkit />

      {/* 5. Campaign Cost Estimator */}
      <BookingForm />

      {/* 5b. Written Insights & Mobile Cinema Guides */}
      <Blog />

      {/* 5c. Verified Client Testimonials */}
      <Testimonials />

      {/* 6. Footer & Quick Contacts Block */}
      <footer className="bg-[#050505] border-t border-white/5 py-16 px-6 md:px-12 text-white/40 text-xs text-center md:text-left">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-stretch justify-between gap-12">
          
          <div className="flex flex-col gap-4 md:max-w-md">
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <Disc className="h-4 w-4 text-white/30" />
              <span className="text-xs font-light tracking-[0.25em] text-white uppercase">
                FILMED BY <span className="font-serif italic lowercase tracking-normal text-white/40">enoch</span>
              </span>
            </div>
            <p className="text-white/30 font-sans leading-relaxed text-xs">
              Innovative mobile videographer specialized in high-volume social reels, lifestyle campaigns, and raw event captures. Transforming transient motion into durable, cinematic narratives.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 text-left">
            <div className="flex flex-col gap-3">
              <span className="text-[10px] font-mono tracking-widest text-white/30 uppercase font-semibold">CHANNELS</span>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-white transition"
              >
                <Instagram className="h-3.5 w-3.5" />
                <span>Instagram Profile</span>
              </a>
              <a
                href="mailto:agucreatives@gmail.com"
                className="flex items-center gap-1.5 hover:text-white transition"
              >
                <Mail className="h-3.5 w-3.5" />
                <span>E-Mail Desk</span>
              </a>
            </div>

            <div className="flex flex-col gap-3">
              <span className="text-[10px] font-mono tracking-widest text-white/30 uppercase font-semibold">RESOURCES</span>
              <button
                onClick={() => handleScrollToElement("gallery-section")}
                className="text-left text-white/40 hover:text-white transition cursor-pointer"
              >
                Video Feed
              </button>
              <button
                onClick={() => handleScrollToElement("projects-section-anchor")}
                className="text-left text-white/40 hover:text-white transition cursor-pointer"
              >
                Strategy Case Studies
              </button>
              <button
                onClick={() => handleScrollToElement("blog-section")}
                className="text-left text-white/40 hover:text-white transition cursor-pointer"
              >
                Written Insights
              </button>
              <button
                onClick={() => handleScrollToElement("testimonials-section")}
                className="text-left text-white/40 hover:text-white transition cursor-pointer"
              >
                Client Reviews
              </button>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl border-t border-white/5 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[9px] font-mono text-white/20 tracking-wider">
          <p>© {new Date().getFullYear()} FILMED BY ENOCH. ALL RIGHTS RESERVED.</p>
          <p className="tracking-widest uppercase">DESIGNED &amp; ENGINEERED IN ELEGANT DARK</p>
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
