"use client";

import React from "react";

const CookiesPolicy = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden p-8 sm:p-12 relative border border-slate-100">
        <div
          className="absolute top-0 left-0 w-full h-2 bg-brand"
        ></div>

        <div className="mb-12 text-center border-b border-slate-100 pb-10">
          <h1
            className="text-4xl sm:text-6xl font-black mb-4 tracking-tighter text-slate-900"
          >
            Cookies <span className="text-brand">Policy</span>
          </h1>
          <p className="text-sm font-black uppercase tracking-widest text-slate-400">
            Last Updated:{" "}
            {new Date().toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>

        <div className="space-y-10">
          <Section
            title=""
            content={
              <p className="leading-relaxed text-slate-600 font-medium">
                At{" "}
                <span className="font-bold text-slate-900 border-b-2 border-brand/20">
                  NexFlow Technologies
                </span>{" "}
                (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), we use cookies to enhance your
                experience on{" "}
                <a
                  href="https://nexflow.tech"
                  className="text-brand font-bold hover:underline"
                >
                  nexflow.tech
                </a>
                . This policy explains how we use cookies and your choices.
              </p>
            }
          />

          <Section
            title="1. What Are Cookies?"
            content={
              <p className="leading-relaxed text-slate-600 font-medium">
                Cookies are small text files stored on your device when you
                visit websites. They help websites remember information about
                your visit, which can improve functionality, analyze traffic
                patterns, and personalize your experience.
              </p>
            }
          />

          <Section
            title="2. How We Use Cookies"
            content={
              <ul className="space-y-3 mt-3">
                {[
                  {
                    title: "Essential Cookies",
                    desc: "Required for basic functionality like page navigation and secure areas of the website.",
                  },
                  {
                    title: "Analytics Cookies",
                    desc: "Help us understand how visitors interact with our website.",
                  },
                  {
                    title: "Marketing Cookies",
                    desc: "Used to track advertising effectiveness and deliver relevant ads.",
                  },
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start group bg-slate-50 p-6 rounded-2xl border border-slate-100">
                    <span className="inline-block mt-1 mr-4 text-brand group-hover:scale-125 transition-transform">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                        <circle cx="10" cy="10" r="4" />
                      </svg>
                    </span>
                    <div>
                      <h3 className="font-black text-slate-900 uppercase tracking-widest text-xs mb-1">
                        {item.title}
                      </h3>
                      <p className="text-slate-600 text-sm font-medium">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            }
          />

          <Section
            title="3. Managing Cookies"
            content={
              <p className="leading-relaxed text-slate-600 font-medium">
                You have control over cookies through your browser settings.
                Disabling essential cookies may affect website functionality.
              </p>
            }
          />

          <Section
            title="4. Contact Information"
            content={
              <p className="leading-relaxed text-slate-600 font-medium">
                For questions about our cookie usage, contact us at{" "}
                <a href="mailto:contact@nexflow.tech" className="text-brand font-bold underline">
                  contact@nexflow.tech
                </a>
              </p>
            }
          />
        </div>
      </div>
    </div>
  );
};

interface SectionProps {
  title: string;
  content: React.ReactNode;
}

const Section = ({ title, content }: SectionProps) => (
  <div className="mb-10">
    {title && (
      <h2 className="text-xl sm:text-2xl font-black mb-6 tracking-tight flex items-center text-slate-900 uppercase">
        <span className="w-8 h-1 rounded-full mr-4 bg-brand"></span>
        {title}
      </h2>
    )}
    <div className="text-slate-600">{content}</div>
  </div>
);

export default CookiesPolicy;
