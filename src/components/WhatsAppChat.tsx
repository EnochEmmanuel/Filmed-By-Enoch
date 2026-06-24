import React, { useState, useEffect } from "react";
import { MessageSquare, Send, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function WhatsAppChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [showNotification, setShowNotification] = useState(false);

  // Trigger a soft notification pulse of the bubble 4 seconds after entering, to engage users.
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNotification(true);
    }, 4500);
    return () => clearTimeout(timer);
  }, []);

  const handleSend = () => {
    if (!message.trim()) return;
    const phone = "2438159873014"; // Standard elegant mockup number or direct professional link
    const encodedText = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phone}?text=${encodedText}`;
    
    try {
      const w = window.open(whatsappUrl, "_blank", "noopener,noreferrer");
      if (!w) {
        // Fallback if blocked
        window.location.href = whatsappUrl;
      }
    } catch (e) {
      console.warn("Direct window.open blocked by sandbox, attempting anchor click fallback:", e);
      try {
        const link = document.createElement("a");
        link.href = whatsappUrl;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } catch (err) {
        console.error("All window open mechanisms blocked:", err);
        window.location.href = whatsappUrl;
      }
    }

    setIsOpen(false);
    setMessage("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  const selectSuggestedPrompt = (prompt: string) => {
    setMessage(prompt);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end font-sans">
      <AnimatePresence>
        {/* Chat Widget Tray */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: "spring", damping: 20 }}
            className="mb-4 w-80 overflow-hidden rounded-sm border border-white/5 bg-[#111] shadow-2xl"
            id="whatsapp-panel"
            style={{ pointerEvents: "auto" }}
          >
            {/* Header */}
            <div className="bg-[#0a0a0a] border-b border-white/5 p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
                    alt="Enoch"
                    className="h-10 w-10 rounded-sm object-cover border border-white/10"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-white/60 ring-2 ring-[#111]" />
                </div>
                <div>
                  <h5 className="text-xs font-semibold text-white tracking-wide">Enoch</h5>
                  <p className="text-[9px] text-white/40 font-mono tracking-widest">FILMED BY ENOCH • ONLINE</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/40 hover:text-white transition cursor-pointer"
                id="whatsapp-close"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Content area */}
            <div className="bg-[#111] p-4 min-h-[160px] flex flex-col justify-between gap-3">
              <div className="bg-white/5 border border-white/5 rounded-sm p-3 text-xs text-white/70">
                <span className="text-white/30 font-semibold block mb-1">Enoch:</span>
                "Yo! Specializing in cinematic brand assets, lifestyle captures, and active social content. Drop me a line below and let's structure your project!"
              </div>

              {/* Sample pre-coded prompts */}
              <div className="flex flex-col gap-1.5">
                <p className="text-[9px] text-white/30 font-mono uppercase tracking-widest">TAP A STARTER SUGGESTION:</p>
                <button
                  onClick={() => selectSuggestedPrompt("Hey Enoch, I'd like to book a commercial brand shoot!")}
                  className="w-full text-left bg-white/5 hover:bg-white/10 border border-white/5 text-[11px] text-white/70 rounded-sm p-2 transition cursor-pointer"
                >
                  💼 Product Brand Campaigns
                </button>
                <button
                  onClick={() => selectSuggestedPrompt("Let's talk about lifestyle operations & TikTok reel content.")}
                  className="w-full text-left bg-white/5 hover:bg-white/10 border border-white/5 text-[11px] text-white/70 rounded-sm p-2 transition cursor-pointer"
                >
                  🚀 High-Volume Reels
                </button>
              </div>
            </div>

            {/* Input bar */}
            <div className="p-3 bg-[#0a0a0a] border-t border-white/5 flex items-center gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type your brief or query..."
                className="w-full bg-[#111] border border-white/5 rounded-sm px-3 py-2 text-xs text-white placeholder-white/30 focus:outline-none focus:border-white/20"
                id="whatsapp-msg-input"
              />
              <button
                onClick={handleSend}
                className="bg-white hover:bg-[#E0E0E0] text-black rounded-sm p-2 transition cursor-pointer flex-shrink-0"
                id="whatsapp-send-btn"
              >
                <Send className="h-3.5 w-3.5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Launcher Bubble */}
      <div className="relative">
        {showNotification && !isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            className="absolute right-16 bottom-2 bg-white/10 text-white font-mono text-[9px] tracking-widest uppercase rounded-sm py-1.5 px-3 shadow-lg whitespace-nowrap border border-white/10"
            id="chat-tooltip"
          >
            BRIEF ME⚡
          </motion.div>
        )}

        <button
          onClick={() => {
            setIsOpen(!isOpen);
            setShowNotification(false);
          }}
          className="bg-white text-black hover:bg-[#E0E0E0] rounded-sm p-4 shadow-2xl transition hover:rotate-2 border border-white/10 hover:scale-[1.03] active:scale-95 cursor-pointer z-50 relative"
          aria-label="Contact Enoch on WhatsApp"
          id="whatsapp-launcher-bubble"
        >
          <MessageSquare className="h-5 w-5 stroke-[2]" />
        </button>
      </div>
    </div>
  );
}
