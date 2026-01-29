"use client";

import React from "react";
import { CheckCircle } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-8xl font-black mb-4 text-slate-900 tracking-tighter">
            Privacy <span className="text-brand">Policy</span>
          </h1>
          <p className="text-slate-400 font-black uppercase tracking-widest text-xs">
            Last Updated: {new Date().toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        {/* Policy Card */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200">
          {/* Sticky Navigation */}
          <div className="sticky top-0 z-10 bg-white/80 backdrop-blur-md px-6 py-6 border-b border-slate-100 flex flex-wrap gap-4">
            {[
              "Overview",
              "Information",
              "Usage",
              "Sharing",
              "Cookies",
              "Security",
              "Rights",
            ].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="px-4 py-2 text-xs font-black uppercase tracking-widest rounded-full bg-slate-50 text-slate-500 hover:bg-brand hover:text-white transition-all duration-300"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Content */}
          <div className="p-6 sm:p-8 md:p-10 space-y-10">
            {/* Introduction */}
            <section id="overview" className="scroll-mt-24">
              <div className="flex items-start gap-6">
                <div className="text-brand mt-1 p-3 bg-brand/10 rounded-xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl font-black text-slate-900 mb-6 uppercase tracking-tight">
                    Welcome to Our Privacy Policy
                  </h2>
                  <p className="mb-6 leading-relaxed text-slate-600 font-medium">
                    Nexflow Technologies (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates
                    https://nexflow.tech. We are committed to protecting your
                    privacy and ensuring the security of your personal
                    information.
                  </p>
                  <div className="bg-slate-50 rounded-2xl p-6 border-l-8 border-brand shadow-sm">
                    <p className="font-bold text-slate-700 italic">
                      By accessing our Website or using our services, you agree
                      to these terms. If you disagree, please refrain from using
                      our Website.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Information We Collect */}
            <section id="information" className="scroll-mt-24">
              <div className="flex items-start gap-6">
                <div className="text-brand mt-1 p-3 bg-brand/10 rounded-xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl font-black text-slate-900 mb-8 uppercase tracking-tight">
                    1. Information We Collect
                  </h2>

                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Personal Information */}
                    <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:border-brand/30 transition-all duration-500 shadow-sm">
                      <h3 className="font-black text-xs uppercase tracking-widest text-brand mb-6 flex items-center gap-3">
                        <div className="p-2 bg-brand/10 rounded-lg">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        Personal Information
                      </h3>
                      <ul className="space-y-4 text-slate-600 font-bold">
                        {[
                          "Name",
                          "Email address",
                          "Phone number",
                          "Company name",
                          "Job title",
                          "Billing details",
                          "Contact form data",
                        ].map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span className="text-brand mt-0.5">
                              <CheckCircle size={16} />
                            </span>
                            <span className="text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Non-Personal Information */}
                    <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:border-brand/30 transition-all duration-500 shadow-sm">
                      <h3 className="font-black text-xs uppercase tracking-widest text-brand mb-6 flex items-center gap-3">
                        <div className="p-2 bg-brand/10 rounded-lg">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        Non-Personal Information
                      </h3>
                      <ul className="space-y-4 text-slate-600 font-bold">
                        {[
                          "Browser type",
                          "IP address",
                          "Pages visited",
                          "Visit time/date",
                          "Referring site",
                          "Cookies & tracking",
                        ].map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span className="text-brand mt-0.5">
                              <CheckCircle size={16} />
                            </span>
                            <span className="text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* How We Use Information */}
            <section id="usage" className="scroll-mt-24">
              <div className="flex items-start gap-6">
                <div className="text-brand mt-1 p-3 bg-brand/10 rounded-xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl font-black text-slate-900 mb-6 uppercase tracking-tight">
                    2. How We Use Your Information
                  </h2>
                  <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 shadow-sm">
                    <ul className="grid sm:grid-cols-2 gap-4">
                      {[
                        {
                          icon: "💻",
                          text: "Provide and improve our services",
                        },
                        {
                          icon: "📞",
                          text: "Respond to inquiries and support",
                        },
                        {
                          icon: "💰",
                          text: "Process transactions and invoices",
                        },
                        {
                          icon: "📧",
                          text: "Send marketing communications (opt-in)",
                        },
                        {
                          icon: "📊",
                          text: "Analyze website traffic and behavior",
                        },
                        { icon: "⚖️", text: "Comply with legal obligations" },
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-4 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm group hover:border-brand/30 transition-all">
                          <span className="text-2xl p-2 bg-slate-50 rounded-xl group-hover:bg-brand/10 transition-colors">{item.icon}</span>
                          <span className="text-slate-600 font-bold text-sm mt-2">{item.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Sharing Information */}
            <section id="sharing" className="scroll-mt-24">
              <div className="flex items-start gap-6">
                <div className="text-brand mt-1 p-3 bg-brand/10 rounded-xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                    />
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl font-black text-slate-900 mb-6 uppercase tracking-tight">
                    3. Sharing of Information
                  </h2>
                  <p className="mb-8 leading-relaxed text-slate-600 font-medium">
                    We do not sell or rent your personal information. However,
                    we may share data with:
                  </p>

                  <div className="space-y-4">
                    {[
                      {
                        title: "Service Providers",
                        description:
                          "Third-party vendors assisting in operations (e.g., payment processors, hosting providers).",
                        icon: "🛠️",
                      },
                      {
                        title: "Legal Compliance",
                        description:
                          "If required by law (e.g., court orders, fraud prevention).",
                        icon: "⚖️",
                      },
                      {
                        title: "Business Transfers",
                        description:
                          "In case of mergers, acquisitions, or asset sales.",
                        icon: "🏢",
                      },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="bg-slate-50 rounded-3xl p-8 flex gap-6 items-start border border-slate-100 hover:border-brand/30 transition-all duration-500 shadow-sm"
                      >
                        <div className="text-2xl">{item.icon}</div>
                        <div>
                          <h3 className="font-black text-xs uppercase tracking-widest text-brand mb-2">
                            {item.title}
                          </h3>
                          <p className="text-slate-600 font-bold text-sm leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Cookies */}
            <section id="cookies" className="scroll-mt-24">
              <div className="flex items-start gap-6">
                <div className="text-brand mt-1 p-3 bg-brand/10 rounded-xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                    />
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl font-black text-slate-900 mb-6 uppercase tracking-tight">
                    4. Cookies & Tracking
                  </h2>
                  <div className="bg-slate-50 rounded-3xl p-8 mb-6 border border-slate-100 shadow-sm">
                    <p className="mb-6 text-slate-900 font-black uppercase tracking-widest text-[10px]">
                      We use cookies and similar technologies to:
                    </p>
                    <ul className="space-y-2 pl-5">
                      {[
                        "Enhance user experience",
                        "Analyze website performance",
                        "Deliver targeted ads (if applicable)",
                      ].map((item, index) => (
                        <li
                          key={index}
                          className="relative text-slate-600 font-bold text-sm before:absolute before:-left-5 before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-brand"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-brand/5 border border-brand/20 rounded-2xl p-6">
                    <p className="text-slate-700 font-bold italic flex items-start gap-3">
                       <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mt-0.5 flex-shrink-0"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>
                        You can manage cookie preferences via your browser
                        settings.
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Data Security */}
            <section id="security" className="scroll-mt-24">
              <div className="flex items-start gap-6">
                <div className="text-brand mt-1 p-3 bg-brand/10 rounded-xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl font-black text-slate-900 mb-6 uppercase tracking-tight">
                    5. Data Security
                  </h2>
                  <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 shadow-sm">
                    <p className="text-slate-900 font-black uppercase tracking-widest text-[10px] mb-6">
                      We implement industry-standard security measures
                      including:
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {[
                        { icon: "🔒", text: "SSL encryption" },
                        { icon: "🛡️", text: "Secure servers" },
                        { icon: "🔑", text: "Access controls" },
                        { icon: "🔄", text: "Regular audits" },
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-4 bg-white rounded-2xl p-4 border border-slate-100 shadow-sm group hover:border-brand/30 transition-all"
                        >
                          <span className="text-xl p-2 bg-slate-50 rounded-xl group-hover:bg-brand/10 transition-colors">{item.icon}</span>
                          <span className="text-slate-600 font-bold text-sm tracking-tight">{item.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Your Rights */}
            <section id="rights" className="scroll-mt-24">
              <div className="flex items-start gap-6">
                <div className="text-brand mt-1 p-3 bg-brand/10 rounded-xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl font-black text-slate-900 mb-6 uppercase tracking-tight">
                    6. Your Rights
                  </h2>
                  <p className="mb-8 leading-relaxed text-slate-600 font-medium">
                    Depending on your location, you may have the following
                    rights regarding your personal data:
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 mb-6">
                    {[
                      { icon: "👁️", text: "Access your data" },
                      { icon: "✏️", text: "Correct inaccuracies" },
                      { icon: "🗑️", text: "Request deletion" },
                      { icon: "📧", text: "Opt out of marketing" },
                      { icon: "⛔", text: "Restrict processing" },
                      { icon: "📤", text: "Data portability" },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="bg-white rounded-2xl p-5 flex items-center gap-4 hover:border-brand/30 transition-all border border-slate-100 shadow-sm group"
                      >
                        <span className="text-xl p-2 bg-slate-50 group-hover:bg-brand/10 rounded-xl transition-colors">{item.icon}</span>
                        <span className="text-slate-600 font-bold text-sm">{item.text}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-slate-900 rounded-2xl p-8 border-l-8 border-brand shadow-xl">
                    <p className="text-white font-bold leading-relaxed mb-4 italic">
                      To exercise these rights, please contact us at:
                    </p>
                    <span className="font-black text-brand text-xl tracking-tight">
                        privacy@nexflow.tech
                    </span>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
