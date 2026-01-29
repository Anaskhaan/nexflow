"use client";

import React from "react";

const Terms = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 relative">
          <h1 className="text-4xl md:text-8xl font-black mb-4 text-slate-900 tracking-tighter">
            Terms of <span className="text-brand">Service</span>
          </h1>
          <p className="text-slate-400 font-black uppercase tracking-widest text-xs">
            Effective Date: {new Date().toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        {/* Main content container */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200">
          {/* Sticky navigation */}
          <div className="sticky top-0 z-10 bg-white/80 backdrop-blur-md px-6 py-6 border-b border-slate-100 flex flex-wrap gap-4">
            {[
              "Introduction",
              "Accounts",
              "Services",
              "Payments",
              "Content",
              "Termination",
              "Liability",
              "Changes",
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

          {/* Content sections */}
          <div className="p-6 sm:p-8 md:p-10 space-y-12">
            {/* Introduction */}
            <section id="introduction" className="scroll-mt-24">
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
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl font-black text-slate-900 mb-6 uppercase tracking-tight">
                    Welcome to Nexflow Technologies
                  </h2>
                  <p className="mb-6 leading-relaxed text-slate-600 font-medium">
                    These Terms of Service (&quot;Terms&quot;) govern your access to and
                    use of Nexflow Technologies&apos; website, products, and
                    services (&quot;Services&quot;). By accessing or using our Services,
                    you agree to be bound by these Terms.
                  </p>
                  <div className="bg-slate-50 rounded-2xl p-6 border-l-8 border-brand shadow-sm">
                    <p className="font-bold text-slate-700 italic">
                      If you do not agree to these Terms, you may not use our
                      Services. We may modify these Terms at any time, and
                      such changes will be effective when posted.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Accounts */}
            <section id="accounts" className="scroll-mt-24">
              <div className="flex items-start gap-6">
                <div className="p-3 bg-brand/10 rounded-xl text-brand mt-1">
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
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl font-black text-slate-900 mb-8 uppercase tracking-tight">
                    1. User Accounts
                  </h2>

                  <div className="space-y-6">
                    <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 shadow-sm">
                      <h3 className="font-black text-xs uppercase tracking-widest text-brand mb-6">
                        Account Creation
                      </h3>
                      <ul className="space-y-4 text-slate-600 font-bold text-sm">
                        <li className="relative before:absolute before:-left-5 before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-brand">
                          You must provide accurate and complete information
                          when creating an account
                        </li>
                        <li className="relative before:absolute before:-left-5 before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-brand">
                          You are responsible for maintaining the
                          confidentiality of your account credentials
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Services */}
            <section id="services" className="scroll-mt-24">
              <div className="flex items-start gap-6">
                <div className="p-3 bg-brand/10 rounded-xl text-brand mt-1">
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
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl font-black text-slate-900 mb-6 uppercase tracking-tight">
                    2. Our Services
                  </h2>
                  <p className="text-slate-600 font-medium leading-relaxed">
                    Nexflow Technologies provides web development, social
                    media marketing, SEO, and related digital services as
                    described on our website.
                  </p>
                </div>
              </div>
            </section>

            {/* Payments */}
            <section id="payments" className="scroll-mt-24">
              <div className="flex items-start gap-6">
                <div className="p-3 bg-brand/10 rounded-xl text-brand mt-1">
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
                      d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl font-black text-slate-900 mb-6 uppercase tracking-tight">
                    3. Payments & Billing
                  </h2>
                  <p className="text-slate-600 font-medium leading-relaxed">
                    All prices are in USD unless otherwise specified. You agree to pay all charges for purchased services.
                  </p>
                </div>
              </div>
            </section>

            {/* Content */}
            <section id="content" className="scroll-mt-24">
              <div className="flex items-start gap-6">
                <div className="p-3 bg-brand/10 rounded-xl text-brand mt-1">
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
                      d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                    />
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl font-black text-slate-900 mb-6 uppercase tracking-tight">
                    4. User Content
                  </h2>
                  <p className="text-slate-600 font-medium leading-relaxed">
                    You retain ownership of any content you submit through
                    our Services (&quot;User Content&quot;).
                  </p>
                </div>
              </div>
            </section>

             {/* Termination */}
            <section id="termination" className="scroll-mt-24">
              <div className="flex items-start gap-6">
                <div className="p-3 bg-brand/10 rounded-xl text-brand mt-1">
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
                      d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                    />
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl font-black text-slate-900 mb-6 uppercase tracking-tight">
                    5. Termination
                  </h2>
                  <p className="text-slate-600 font-medium leading-relaxed">
                    We may suspend or terminate your access to Services for violations of these Terms.
                  </p>
                </div>
              </div>
            </section>

            {/* Liability */}
            <section id="liability" className="scroll-mt-24">
              <div className="flex items-start gap-6">
                <div className="p-3 bg-brand/10 rounded-xl text-brand mt-1">
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
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl font-black text-slate-900 mb-6 uppercase tracking-tight">
                    6. Disclaimers & Liability
                  </h2>
                  <p className="text-slate-600 font-medium leading-relaxed">
                    Our Services are provided &quot;as is&quot; without warranties of any kind.
                  </p>
                </div>
              </div>
            </section>

            {/* Changes */}
            <section id="changes" className="scroll-mt-24">
              <div className="flex items-start gap-6">
                <div className="p-3 bg-brand/10 rounded-xl text-brand mt-1">
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
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl font-black text-slate-900 mb-6 uppercase tracking-tight">
                    7. Changes to Terms
                  </h2>
                   <p className="text-slate-600 font-medium leading-relaxed">
                    We may modify these Terms at any time. Your continued use constitutes acceptance.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
