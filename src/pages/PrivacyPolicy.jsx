export function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Animated Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-300">
            Privacy Policy
          </h1>
          <p className="text-blue-200 font-mono text-sm">
            Last Updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        {/* Policy Card */}
        <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden border border-gray-700/30">
          {/* Sticky Navigation */}
          <div className="sticky top-0 z-10 bg-gray-800/80 backdrop-blur-sm px-6 py-4 border-b border-gray-700/30 flex flex-wrap gap-3">
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
                className="px-3 py-1 text-sm rounded-full bg-gray-700/50 hover:bg-blue-500/20 hover:text-blue-300 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Content */}
          <div className="p-6 sm:p-8 md:p-10 space-y-10">
            {/* Introduction */}
            <section id="overview" className="scroll-mt-20">
              <div className="flex items-start gap-4">
                <div className="text-blue-400 mt-1">
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
                  <h2 className="text-2xl font-bold text-blue-300 mb-4">
                    Welcome to Our Privacy Policy
                  </h2>
                  <p className="mb-4 leading-relaxed text-gray-300">
                    Nexflow Technologies ("we," "us," or "our") operates
                    https://nexflow.tech . We are committed to protecting your
                    privacy and ensuring the security of your personal
                    information.
                  </p>
                  <div className="bg-gray-700/50 rounded-lg p-4 border-l-4 border-blue-500">
                    <p className="font-medium text-blue-200 italic">
                      By accessing our Website or using our services, you agree
                      to these terms. If you disagree, please refrain from using
                      our Website.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Information We Collect */}
            <section id="information" className="scroll-mt-20">
              <div className="flex items-start gap-4">
                <div className="text-teal-400 mt-1">
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
                  <h2 className="text-2xl font-bold text-teal-300 mb-6">
                    1. Information We Collect
                  </h2>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Personal Information */}
                    <div className="bg-gray-700/30 rounded-xl p-5 border border-gray-600/30 hover:border-teal-400/30 transition-colors">
                      <h3 className="font-semibold text-lg text-teal-200 mb-3 flex items-center gap-2">
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
                        Personal Information
                      </h3>
                      <ul className="space-y-2 text-gray-300">
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
                            <span className="text-teal-400 mt-0.5">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Non-Personal Information */}
                    <div className="bg-gray-700/30 rounded-xl p-5 border border-gray-600/30 hover:border-teal-400/30 transition-colors">
                      <h3 className="font-semibold text-lg text-teal-200 mb-3 flex items-center gap-2">
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
                        Non-Personal Information
                      </h3>
                      <ul className="space-y-2 text-gray-300">
                        {[
                          "Browser type",
                          "IP address",
                          "Pages visited",
                          "Visit time/date",
                          "Referring site",
                          "Cookies & tracking",
                        ].map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span className="text-teal-400 mt-0.5">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* How We Use Information */}
            <section id="usage" className="scroll-mt-20">
              <div className="flex items-start gap-4">
                <div className="text-purple-400 mt-1">
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
                  <h2 className="text-2xl font-bold text-purple-300 mb-4">
                    2. How We Use Your Information
                  </h2>
                  <div className="bg-gray-700/40 rounded-lg p-5">
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
                        <li key={index} className="flex items-start gap-3">
                          <span className="text-xl">{item.icon}</span>
                          <span className="text-gray-300">{item.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Sharing Information */}
            <section id="sharing" className="scroll-mt-20">
              <div className="flex items-start gap-4">
                <div className="text-yellow-400 mt-1">
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
                  <h2 className="text-2xl font-bold text-yellow-300 mb-4">
                    3. Sharing of Information
                  </h2>
                  <p className="mb-4 leading-relaxed text-gray-300">
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
                        className="bg-gray-700/30 rounded-lg p-4 flex gap-4 items-start border border-gray-600/30 hover:border-yellow-400/30 transition-colors"
                      >
                        <div className="text-2xl">{item.icon}</div>
                        <div>
                          <h3 className="font-semibold text-yellow-200">
                            {item.title}
                          </h3>
                          <p className="text-gray-300">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Cookies */}
            <section id="cookies" className="scroll-mt-20">
              <div className="flex items-start gap-4">
                <div className="text-pink-400 mt-1">
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
                  <h2 className="text-2xl font-bold text-pink-300 mb-4">
                    4. Cookies & Tracking
                  </h2>
                  <div className="bg-gray-700/40 rounded-lg p-5 mb-4">
                    <p className="mb-3 text-gray-300">
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
                          className="relative text-gray-300 before:absolute before:-left-5 before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-pink-400"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-pink-900/20 border border-pink-800/50 rounded-lg p-4">
                    <p className="text-pink-200 flex items-start gap-2">
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
            <section id="security" className="scroll-mt-20">
              <div className="flex items-start gap-4">
                <div className="text-green-400 mt-1">
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
                  <h2 className="text-2xl font-bold text-green-300 mb-4">
                    5. Data Security
                  </h2>
                  <div className="bg-gray-700/40 rounded-lg p-5 border border-gray-600/30">
                    <p className="text-gray-300 mb-4">
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
                          className="flex items-center gap-3 bg-gray-700/50 rounded-lg p-3"
                        >
                          <span className="text-xl">{item.icon}</span>
                          <span className="text-gray-300">{item.text}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 bg-green-900/20 border border-green-800/50 rounded-lg p-3">
                      <p className="text-green-200 text-sm">
                        <strong>Note:</strong> While we take extensive measures,
                        no online transmission is 100% secure.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Your Rights */}
            <section id="rights" className="scroll-mt-20">
              <div className="flex items-start gap-4">
                <div className="text-red-400 mt-1">
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
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-red-300 mb-4">
                    6. Your Rights
                  </h2>
                  <p className="mb-4 leading-relaxed text-gray-300">
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
                        className="bg-gray-700/40 rounded-lg p-4 flex items-center gap-3 hover:bg-red-900/20 transition-colors border border-gray-600/30 hover:border-red-400/30"
                      >
                        <span className="text-xl">{item.icon}</span>
                        <span className="text-gray-300">{item.text}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-gray-700/50 rounded-lg p-4 border-l-4 border-red-500">
                    <p className="text-red-200">
                      To exercise these rights, please contact us at{" "}
                      <span className="font-mono bg-gray-800/50 px-2 py-1 rounded">
                        privacy@nexflow.tech
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Contact Section */}
            <section className="mt-12 bg-gradient-to-r from-blue-900/40 to-purple-900/40 rounded-xl p-6 sm:p-8 border border-blue-700/30">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">
                Contact Us
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-blue-200 mb-3">
                    Nexflow Technologies
                  </h3>
                  <address className="not-italic text-gray-300 space-y-2">
                    <p className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-blue-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      privacy@nexflow.tech
                    </p>
                    <p className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-blue-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                        />
                      </svg>
                      https://nexflow.tech
                    </p>
                  </address>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-purple-200 mb-3">
                    Policy Updates
                  </h3>
                  <p className="text-gray-300 mb-4">
                    We may update this Privacy Policy periodically. The revised
                    version will be posted here with an updated date.
                  </p>
                  <div className="bg-gray-800/50 rounded-lg p-3 text-sm text-gray-400">
                    <p>
                      Thank you for trusting Nexflow Technologies with your
                      information.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
