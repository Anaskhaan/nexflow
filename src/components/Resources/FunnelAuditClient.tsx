"use client";

import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { 
  BarChart, 
  CheckCircle, 
  ArrowRight, 
  Zap, 
  Lock, 
  Search, 
  Target, 
  TrendingUp, 
  FileText,
  MousePointer2,
  ShieldCheck
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

const FunnelAuditClient = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || loading) return;

    setLoading(true);
    setProgress(0);

    // Simulated "Scanning" intelligence sequence
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 95) return 95;
        return prev + Math.random() * 15;
      });
    }, 400);

    const templateParams = { email };

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ""
      );

      clearInterval(interval);
      setProgress(100);

      // Save email and timestamp
      localStorage.setItem("auditEmail", email);
      localStorage.setItem("auditStartTime", Date.now().toString());

      // Success Delay for UX
      setTimeout(() => {
        const link = document.createElement("a");
        link.href = "/resources/Audit-Funnel.pdf";
        link.download = "Audit-Funnel.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        router.push("/ThankYou");
      }, 800);

    } catch (error: any) {
      console.error("Audit Submission Error detail:", {
        message: error?.text || error?.message || "Unknown error",
        status: error?.status,
        error: error
      });
      alert(`Verification failed: ${error?.text || "Please check your network and try again."}`);
    } finally {
      clearInterval(interval);
      setLoading(false);
      setProgress(0);
    }
  };

  const deliveryItems = [
    { icon: Search, title: "30-Point Audit", desc: "Granular funnel analysis" },
    { icon: Target, title: "Precision Scoring", desc: "Stage-by-stage KPIs" },
    { icon: FileText, title: "PDF Blueprint", desc: "Actionable scaling steps" },
    { icon: TrendingUp, title: "Leak Detection", desc: "Identify drop-off points" },
  ];

  return (
    <div className="relative min-h-screen bg-white text-slate-900 flex items-center justify-center px-6 py-32 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand/5 rounded-full blur-[120px] -mr-64 -mt-64" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-slate-100 rounded-full blur-[120px] -ml-64 -mb-64" />

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 w-full max-w-6xl grid lg:grid-cols-2 gap-12 items-center"
      >
        {/* Left Side: Storytelling & Value */}
        <div className="space-y-12">
          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand/5 border border-brand/10 text-brand text-xs font-black uppercase tracking-widest"
            >
              <Zap size={14} /> Efficiency Engine
            </motion.div>
            <h1 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter uppercase leading-[0.85]">
              Funnel <br />
              <span className="text-brand italic serif">Intelligence</span>
            </h1>
            <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-xl">
              Stop guessing where your users are dropping off. Our proprietary 30-point audit reveals the hidden leaks in your customer journey.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {deliveryItems.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-6 bg-slate-50 rounded-3xl border border-slate-100 hover:bg-white hover:shadow-xl hover:shadow-brand/5 transition-all group"
              >
                <item.icon className="text-brand mb-4 group-hover:scale-110 transition-transform" size={24} />
                <h3 className="font-black text-slate-900 uppercase tracking-tight text-sm mb-1">{item.title}</h3>
                <p className="text-xs text-slate-500 font-medium">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Side: The Gated Engine */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-slate-900 rounded-[3rem] p-10 md:p-14 shadow-2xl relative overflow-hidden text-white"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand/10 rounded-full blur-3xl -mr-32 -mt-32" />
          
          <div className="relative z-10 space-y-10">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-4xl font-black tracking-tighter uppercase leading-none">
                Start Free <span className="text-brand">Audit</span>
              </h2>
              <p className="text-slate-400 text-sm font-medium">
                Enter your work email to trigger the Nexflow intelligence engine and download your custom blueprint.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div className="relative group">
                  <div className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-brand transition-colors">
                    <Search size={18} />
                  </div>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-14 pr-6 py-5 bg-white/5 border border-white/10 rounded-2xl text-white font-bold focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all placeholder:text-slate-600"
                  />
                </div>

                <AnimatePresence>
                  {loading && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="space-y-3 pt-2"
                    >
                      <div className="flex justify-between text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
                        <span>Analyzing Funnel...</span>
                        <span>{Math.round(progress)}%</span>
                      </div>
                      <div className="w-full bg-white/5 rounded-full h-1.5 overflow-hidden">
                        <motion.div
                          className="bg-brand h-full shadow-[0_0_15px_rgba(240,68,56,0.5)]"
                          initial={{ width: 0 }}
                          animate={{ width: `${progress}%` }}
                          transition={{ ease: "linear" }}
                        />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <button
                type="submit"
                disabled={loading || !email}
                className="w-full bg-slate-100 hover:bg-brand text-slate-900 hover:text-white py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] transition-all duration-300 flex items-center justify-center gap-3 shadow-xl hover:shadow-brand/20 disabled:opacity-40 group"
              >
                {loading ? (
                  <>Running Audit <MousePointer2 size={16} className="animate-pulse" /></>
                ) : (
                  <>Generate My Blueprint <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" /></>
                )}
              </button>
            </form>

            <div className="pt-8 border-t border-white/5 flex flex-col items-center gap-4 text-center">
              <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-500">
                <ShieldCheck size={14} className="text-brand" /> 100% Privacy Guaranteed
              </div>
              <p className="text-[9px] text-slate-600 font-medium">
                We'll never share your data. By entering your email, you agree to receive one-time audit results and our weekly scale-up newsletter.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default FunnelAuditClient;
