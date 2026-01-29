"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Cookie, X, Check } from "lucide-react";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleConsent = (type: "accepted" | "declined") => {
    localStorage.setItem("cookie-consent", type);
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="fixed bottom-8 left-6 right-6 md:left-auto md:right-12 md:w-[450px] z-[9999]"
        >
          <div className="bg-slate-900/90 backdrop-blur-2xl border border-white/10 p-8 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.3)] relative overflow-hidden group">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand/20 blur-[60px] rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-brand/30 transition-colors" />
            
            <div className="relative z-10">
              <div className="flex items-start gap-6 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-brand/20 flex items-center justify-center text-brand shrink-0">
                  <Cookie size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-black text-white uppercase tracking-tighter mb-2">Cookies & Privacy</h4>
                  <p className="text-slate-400 text-sm font-medium leading-relaxed">
                    We use cookies to enhance your experience, analyze site traffic, and deliver personalized elite digital strategies. By clicking "Accept All", you agree to our use of cookies.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4">
                <button
                  onClick={() => handleConsent("accepted")}
                  className="w-full sm:flex-1 bg-white text-slate-950 px-6 py-4 rounded-full text-xs font-black uppercase tracking-widest hover:bg-brand hover:text-white transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                >
                  <Check size={14} className="group-hover:scale-110 transition-transform" />
                  Accept All
                </button>
                <button
                  onClick={() => handleConsent("declined")}
                  className="w-full sm:w-auto bg-white/5 text-slate-400 hover:text-white px-8 py-4 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300 border border-white/5 hover:border-white/20"
                >
                  Decline
                </button>
              </div>

              <div className="mt-6 text-center">
                <Link 
                  href="/PrivacyPolicy" 
                  className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 hover:text-brand transition-colors"
                >
                  View Cookie Policy
                </Link>
              </div>
            </div>

            <button 
              onClick={() => setIsVisible(false)}
              className="absolute top-6 right-6 text-slate-500 hover:text-white transition-colors"
            >
              <X size={18} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
