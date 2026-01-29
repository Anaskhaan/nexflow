"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { 
  Calculator, 
  ArrowRight, 
  CheckCircle2, 
  Lock, 
  TrendingUp, 
  DollarSign, 
  Users, 
  RefreshCcw,
  Mail,
  User,
  Phone,
  ArrowLeft
} from "lucide-react";

interface FormData {
  price: string;
  margin: string;
  churn: string;
  mktSpend: string;
  adSpend: string;
  newCust: string;
  activationCost: string;
  convRate: string;
  numReps: string;
  salary: string;
  commission: string;
}

interface Results {
  cac: string;
  ltv: string;
  ratio: string;
  roi: string;
  payback: string;
  note: string;
}

export default function ROIcalculator() {
  const [model, setModel] = useState<"PLG" | "SUB">("PLG");
  const [formData, setFormData] = useState<FormData>({
    price: "",
    margin: "80",
    churn: "",
    mktSpend: "",
    adSpend: "",
    newCust: "",
    activationCost: "0",
    convRate: "10",
    numReps: "3",
    salary: "4000",
    commission: "5",
  });
  
  const [results, setResults] = useState<Results | null>(null);
  const [isGated, setIsGated] = useState(false);
  const [userInfo, setUserInfo] = useState({ name: "", email: "", phone: "" });
  const [isSending, setIsSending] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const processCalculation = (e: React.FormEvent) => {
    e.preventDefault();

    const price = parseFloat(formData.price) || 0;
    const margin = (parseFloat(formData.margin) || 80) / 100;
    const churn = (parseFloat(formData.churn) || 0) / 100;
    const mkt = parseFloat(formData.mktSpend) || 0;
    const ads = parseFloat(formData.adSpend) || 0;
    const newC = parseFloat(formData.newCust) || 0;

    if (!newC || !churn) {
      alert("Please enter both churn rate and number of new customers for accurate forecasting.");
      return;
    }

    let extra = 0, note = "";
    if (model === "PLG") {
      const act = parseFloat(formData.activationCost) || 0;
      extra = act * newC;
      note = `Activation Cost: $${act} per new user`;
    } else {
      const reps = parseFloat(formData.numReps) || 0;
      const sal = parseFloat(formData.salary) || 0;
      const com = (parseFloat(formData.commission) || 0) / 100;
      extra = (reps * sal) + (com * price * newC);
      note = `Sales Cost: ${reps} reps + ${com * 100}% commission`;
    }

    const cac = (mkt + ads + extra) / newC;
    const ltv = (price * margin) / churn;
    const ratio = ltv / cac;
    const payback = cac / price;
    const roi = ((ltv - cac) / cac) * 100;

    setResults({
      cac: `$${cac.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
      ltv: `$${ltv.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
      ratio: `${ratio.toFixed(2)}:1`,
      roi: `${roi.toFixed(1)}%`,
      payback: `${payback.toFixed(1)} months`,
      note,
    });

    setIsGated(true);
  };

  const handleFinalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
        {
          user_name: userInfo.name,
          user_email: userInfo.email,
          user_phone: userInfo.phone,
          ...formData,
          model_type: model,
          ...results,
          date: new Date().toLocaleString(),
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ""
      );

      setIsSubmitted(true);
      setIsGated(false);
    } catch (error: any) {
      console.error("Submission failed detail:", {
        message: error?.text || error?.message || "Unknown error",
        status: error?.status,
        error: error
      });
      alert(`Submission failed: ${error?.text || "Please check your network and try again."}`);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="py-24 px-6 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Block */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand/5 border border-brand/10 text-brand text-xs font-black uppercase tracking-widest">
            <Calculator size={14} /> SaaS Intelligence
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter uppercase leading-none">
            Growth <span className="text-brand italic serif">Forecaster</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto font-medium text-lg">
            Enter your metrics below to unlock deep insights into your SaaS unit economics and ROI potential.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Form Area */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:col-span-8 bg-slate-50 border border-slate-100 p-8 md:p-12 rounded-[2.5rem] shadow-sm relative overflow-hidden"
          >
            {/* Background design */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand/5 rounded-full blur-3xl -mr-32 -mt-32" />
            
            <div className="relative z-10">
              <div className="flex bg-white p-1.5 rounded-2xl border border-slate-200 w-fit mb-12 shadow-sm">
                <button 
                  onClick={() => setModel("PLG")}
                  className={`px-8 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${model === "PLG" ? "bg-brand text-white shadow-lg" : "text-slate-400 hover:text-slate-600"}`}
                >
                  Product-Led
                </button>
                <button 
                  onClick={() => setModel("SUB")}
                  className={`px-8 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${model === "SUB" ? "bg-brand text-white shadow-lg" : "text-slate-400 hover:text-slate-600"}`}
                >
                  Sales-Led
                </button>
              </div>

              <form onSubmit={processCalculation} className="space-y-10">
                <div className="grid md:grid-cols-3 gap-8">
                  <InputBlock label="Avg. Monthly Price" name="price" value={formData.price} onChange={handleInputChange} icon={<DollarSign size={16}/>} placeholder="0.00" />
                  <InputBlock label="Gross Margin %" name="margin" value={formData.margin} onChange={handleInputChange} icon={<span>%</span>} placeholder="80" />
                  <InputBlock label="Monthly Churn %" name="churn" value={formData.churn} onChange={handleInputChange} icon={<span>%</span>} placeholder="0.00" />
                  <InputBlock label="Marketing Spend" name="mktSpend" value={formData.mktSpend} onChange={handleInputChange} icon={<DollarSign size={16}/>} placeholder="0.00" />
                  <InputBlock label="Ad Spend" name="adSpend" value={formData.adSpend} onChange={handleInputChange} icon={<DollarSign size={16}/>} placeholder="0.00" />
                  <InputBlock label="New Customers" name="newCust" value={formData.newCust} onChange={handleInputChange} icon={<Users size={16}/>} placeholder="0" />
                </div>

                <div className="pt-8 border-t border-slate-200">
                  <h3 className="text-xs font-black text-brand uppercase tracking-[0.2em] mb-8">Model Specific Inputs</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {model === "PLG" ? (
                      <>
                        <InputBlock label="Activation Cost" name="activationCost" value={formData.activationCost} onChange={handleInputChange} icon={<DollarSign size={16}/>} placeholder="0.00" />
                        <InputBlock label="Free-to-Paid %" name="convRate" value={formData.convRate} onChange={handleInputChange} icon={<span>%</span>} placeholder="10" />
                      </>
                    ) : (
                      <>
                        <InputBlock label="Number of Reps" name="numReps" value={formData.numReps} onChange={handleInputChange} icon={<Users size={16}/>} placeholder="3" />
                        <InputBlock label="Avg. Salary / Rep" name="salary" value={formData.salary} onChange={handleInputChange} icon={<DollarSign size={16}/>} placeholder="4000" />
                        <InputBlock label="Commission %" name="commission" value={formData.commission} onChange={handleInputChange} icon={<span>%</span>} placeholder="5" />
                      </>
                    )}
                  </div>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-slate-900 text-white py-6 rounded-2xl font-black text-sm uppercase tracking-[0.2em] hover:bg-brand transition-all duration-300 flex items-center justify-center gap-3 shadow-xl hover:shadow-brand/20 group"
                >
                  Generate Growth Report <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </motion.div>

          {/* Side Info / Placeholder */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-slate-900 p-10 rounded-[2.5rem] text-white space-y-6">
              <h4 className="text-xl font-black uppercase tracking-tight">Why this matters?</h4>
              <p className="text-slate-400 text-sm leading-relaxed font-medium">
                Unit economics are the bedrock of any scalable SaaS. This tool helps you visualize the balance between acquisition costs and average lifetime value.
              </p>
              <ul className="space-y-4 text-xs font-bold uppercase tracking-widest text-slate-500">
                <li className="flex items-center gap-3"><CheckCircle2 size={16} className="text-brand" /> Accurate CAC Modeling</li>
                <li className="flex items-center gap-3"><CheckCircle2 size={16} className="text-brand" /> Real-time LTV Ratios</li>
                <li className="flex items-center gap-3"><CheckCircle2 size={16} className="text-brand" /> Payback Period Insights</li>
              </ul>
            </div>
            
            <div className="p-8 border-2 border-dashed border-slate-200 rounded-[2.5rem] flex flex-col items-center text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-400">
                <TrendingUp size={24} />
              </div>
              <p className="text-sm font-black uppercase tracking-tight text-slate-400">Ready for scale?</p>
            </div>
          </div>
        </div>

        {/* Results Overlay (Gating) */}
        <AnimatePresence>
          {isGated && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center px-6 bg-slate-900/40 backdrop-blur-xl"
            >
              <motion.div 
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                className="bg-white max-w-lg w-full rounded-[3rem] p-10 md:p-14 shadow-2xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand/10 rounded-full blur-3xl -mr-16 -mt-16" />
                
                <button 
                  onClick={() => setIsGated(false)}
                  className="absolute top-8 left-8 text-slate-400 hover:text-slate-900 transition-colors flex items-center gap-2 text-[10px] font-black uppercase tracking-widest"
                >
                  <ArrowLeft size={12} /> Edit Numbers
                </button>

                <div className="text-center space-y-6 relative z-10 pt-8">
                  <div className="w-20 h-20 bg-brand/10 rounded-3xl flex items-center justify-center mx-auto text-brand">
                    <Lock size={32} />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-3xl font-black text-slate-900 tracking-tighter uppercase leading-none">Unlock Findings</h3>
                    <p className="text-slate-500 font-medium text-sm">We've calculated your results & potential. Enter your details to receive the full report & unlock the dashboard.</p>
                  </div>

                  <form onSubmit={handleFinalSubmit} className="space-y-4 pt-4">
                    <div className="space-y-4">
                      <div className="relative">
                        <User className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                        <input 
                          type="text" 
                          required 
                          placeholder="Full Name" 
                          value={userInfo.name}
                          onChange={(e) => setUserInfo({...userInfo, name: e.target.value})}
                          className="w-full pl-14 pr-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand"
                        />
                      </div>
                      <div className="relative">
                        <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                        <input 
                          type="email" 
                          required 
                          placeholder="Work Email" 
                          value={userInfo.email}
                          onChange={(e) => setUserInfo({...userInfo, email: e.target.value})}
                          className="w-full pl-14 pr-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand"
                        />
                      </div>
                      <div className="relative">
                        <Phone className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                        <input 
                          type="tel" 
                          placeholder="Phone (Optional)" 
                          value={userInfo.phone}
                          onChange={(e) => setUserInfo({...userInfo, phone: e.target.value})}
                          className="w-full pl-14 pr-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand"
                        />
                      </div>
                    </div>
                    <button 
                      type="submit"
                      disabled={isSending}
                      className="w-full bg-slate-900 text-white py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-brand transition-all shadow-lg hover:shadow-brand/20 disabled:opacity-50"
                    >
                      {isSending ? "Processing..." : "View My Report Now"}
                    </button>
                  </form>
                </div>
              </motion.div>
            </motion.div>
          )}

          {/* Final Results Dashboard */}
          {isSubmitted && results && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-24 p-12 md:p-16 bg-slate-900 rounded-[3rem] text-white relative overflow-hidden shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand/20 via-transparent to-transparent opacity-40" />
              <div className="absolute top-0 right-0 p-12">
                <button 
                  onClick={() => {setIsSubmitted(false); setResults(null);}} 
                  className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-white transition-colors"
                >
                  <RefreshCcw size={12} /> Recalculate
                </button>
              </div>

              <div className="relative z-10 grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-3 pb-8 border-b border-white/10 mb-8 flex items-center justify-between">
                  <div>
                    <h3 className="text-3xl md:text-5xl font-black tracking-tighter uppercase leading-none mb-2">ROI Forecasted</h3>
                    <p className="text-slate-400 text-sm font-medium">Calculated based on your {model} metrics.</p>
                  </div>
                  <div className="w-16 h-16 rounded-3xl bg-brand/10 flex items-center justify-center text-brand">
                    <TrendingUp size={32} />
                  </div>
                </div>

                <MetricDisplay label="Customer Acquisition Cost" value={results.cac} sub="Ideal: Under $100" />
                <MetricDisplay label="Customer Lifetime Value" value={results.ltv} sub="Total revenue potential" />
                <MetricDisplay label="LTV:CAC Ratio" value={results.ratio} sub="Success: 3:1 or higher" isHighlight />
                <MetricDisplay label="Projected ROI" value={results.roi} sub="Efficiency multiplier" />
                <MetricDisplay label="Payback Period" value={results.payback} sub="Time to profitability" />
                
                <div className="flex flex-col justify-end">
                  <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">Economies Insight</p>
                    <p className="text-sm font-medium leading-relaxed italic">"{results.note}"</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}

function InputBlock({ label, name, value, onChange, icon, placeholder }: any) {
  return (
    <div className="flex flex-col gap-3">
      <label className="text-[10px] font-black text-slate-400 tracking-[0.2em] uppercase">{label}</label>
      <div className="relative group">
        <div className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-brand transition-colors text-xs font-bold">
          {icon}
        </div>
        <input 
          type="number" 
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required
          className="w-full px-5 py-4 bg-white border border-slate-200 rounded-2xl text-slate-900 font-bold focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all placeholder:text-slate-200"
        />
      </div>
    </div>
  );
}

function MetricDisplay({ label, value, sub, isHighlight }: any) {
  return (
    <div className="space-y-3">
      <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{label}</p>
      <div className="space-y-1">
        <h4 className={`text-4xl md:text-5xl font-black tracking-tighter leading-none ${isHighlight ? "text-brand" : "text-white"}`}>{value}</h4>
        <p className="text-xs text-slate-400 font-medium pl-1">{sub}</p>
      </div>
    </div>
  );
}
