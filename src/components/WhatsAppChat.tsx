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
            className="mb-4 w-80 overflow-hidden rounded-2xl border border-border-custom bg-bg-card shadow-2xl"
            id="whatsapp-panel"
            style={{ pointerEvents: "auto" }}
          >
            {/* Header */}
            <div className="bg-bg-secondary border-b border-border-custom p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
                    alt="Enoch"
                    loading="lazy"
                    className="h-10 w-10 rounded-full object-cover border border-border-custom"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-[#25D366] ring-2 ring-bg-secondary animate-pulse" />
                </div>
                <div>
                  <h5 className="text-xs font-black text-text-primary tracking-wide">Enoch</h5>
                  <p className="text-[9px] text-[#25D366] font-mono tracking-widest font-bold">FILMED BY ENOCH • ONLINE</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-text-muted hover:text-text-primary transition cursor-pointer"
                id="whatsapp-close"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Content area */}
            <div className="bg-bg-card p-4 min-h-[160px] flex flex-col justify-between gap-4">
              <div className="bg-bg-secondary border border-border-custom rounded-2xl p-4 text-xs text-text-secondary leading-relaxed">
                <span className="text-text-muted font-bold block mb-1">Enoch:</span>
                "Yo! Specializing in cinematic brand assets, lifestyle captures, and active social content. Drop me a line below and let's structure your project!"
              </div>

              {/* Sample pre-coded prompts */}
              <div className="flex flex-col gap-1.5">
                <p className="text-[9px] text-text-muted font-mono uppercase tracking-widest font-bold">TAP A STARTER SUGGESTION:</p>
                <button
                  onClick={() => selectSuggestedPrompt("Hey Enoch, I'd like to book a commercial brand shoot!")}
                  className="w-full text-left bg-bg-secondary hover:bg-bg-secondary/70 border border-border-custom text-[11px] text-text-primary font-bold rounded-xl p-3 transition cursor-pointer"
                >
                  💼 Product Brand Campaigns
                </button>
                <button
                  onClick={() => selectSuggestedPrompt("Let's talk about lifestyle operations & TikTok reel content.")}
                  className="w-full text-left bg-bg-secondary hover:bg-bg-secondary/70 border border-border-custom text-[11px] text-text-primary font-bold rounded-xl p-3 transition cursor-pointer"
                >
                  🚀 High-Volume Reels
                </button>
              </div>
            </div>

            {/* Input bar */}
            <div className="p-3 bg-bg-secondary border-t border-border-custom flex items-center gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type your brief or query..."
                className="w-full bg-bg-card border border-border-custom rounded-xl px-4 py-2.5 text-xs text-text-primary placeholder-text-muted focus:outline-none focus:border-text-primary/20"
                id="whatsapp-msg-input"
              />
              <button
                onClick={handleSend}
                className="bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-xl p-2.5 transition cursor-pointer flex-shrink-0"
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
            className="absolute right-16 bottom-3 bg-bg-secondary text-text-primary font-mono text-[9px] tracking-widest uppercase rounded-full py-2 px-4 shadow-lg whitespace-nowrap border border-border-strong font-bold"
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
          className="bg-[#25D366] text-white hover:bg-[#20ba5a] rounded-full p-4 shadow-2xl transition hover:rotate-2 border border-[#20ba5a]/20 hover:scale-[1.05] active:scale-95 cursor-pointer z-50 relative flex items-center justify-center"
          aria-label="Contact Enoch on WhatsApp"
          id="whatsapp-launcher-bubble"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5 fill-current"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.863-9.864.001-2.63-1.023-5.101-2.883-6.963C16.58 1.916 14.105.891 11.474.891 6.038.891 1.612 5.316 1.61 10.753c-.001 1.701.447 3.361 1.298 4.848l-.995 3.637 3.734-.979zm11.387-5.463c-.31-.156-1.834-.905-2.119-1.01-.285-.104-.493-.156-.7.156-.207.312-.802 1.01-.983 1.218-.18.208-.362.234-.672.079-.312-.156-1.318-.486-2.51-1.549-.928-.827-1.554-1.85-1.737-2.162-.18-.312-.02-.48.137-.635.141-.14.312-.364.467-.546.156-.182.208-.312.312-.52.104-.208.052-.39-.026-.546-.078-.156-.7-1.688-.959-2.311-.252-.61-.51-.527-.7-.53l-.6-.007c-.207 0-.546.078-.832.39-.286.312-1.092 1.067-1.092 2.602 0 1.536 1.118 3.018 1.274 3.226.156.208 2.199 3.359 5.328 4.709.744.32 1.325.512 1.777.656.748.238 1.43.204 1.969.124.6-.09 1.834-.75 2.093-1.438.259-.688.259-1.276.182-1.4-.078-.125-.286-.203-.597-.36z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
