"use client";

import { InlineWidget } from "react-calendly";
import { Check } from "lucide-react";

const MeetingForm = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 pt-32 pb-12 px-4 leading-relaxed">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-8xl font-black mb-6 tracking-tighter">
            Let&apos;s <span className="text-brand">Strategize</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium">
            Book a 30-minute consultation call with our team to discuss your business goals and how we can help you achieve them.
          </p>
        </div>

        <div className="bg-slate-50 rounded-3xl border border-slate-200 p-6 md:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1 space-y-8">
              <div className="space-y-4">
                <h3 className="text-3xl font-black text-slate-900 tracking-tight">Why book a call?</h3>
                <ul className="space-y-3">
                  {[
                    "Free digital audit of your current presence",
                    "Personalized strategy recommendations",
                    "Clear roadmap for growth",
                    "No-obligation consulting",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="text-brand mt-1 flex-shrink-0" size={20} strokeWidth={3} />
                      <span className="text-slate-600 font-bold">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-8 bg-brand/5 rounded-2xl border border-brand/10">
                <p className="text-lg italic text-slate-600 font-medium">
                  &quot;Nexflow turned our digital marketing around in just one call. Their insights were immediately actionable.&quot;
                </p>
                <p className="mt-4 font-black text-slate-900 border-t border-brand/10 pt-4">- Dr. Khan, BellClinix</p>
              </div>
            </div>

            <div className="lg:col-span-2 h-[750px] rounded-2xl overflow-hidden bg-white shadow-xl border border-slate-100">
              <InlineWidget 
                url="https://calendly.com/nexflowtechnologies/30min" 
                styles={{ height: '100%' }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetingForm;
