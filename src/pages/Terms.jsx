import { Helmet } from "react-helmet-async";

export function Terms() {
  return (
    <>
      <Helmet>
        <title>Terms and Conditions | Nexflow Technologies</title>
        <meta
          name="description"
          content="Read the Terms and Conditions for Nexflow Technologies. By using our services, you agree to the terms outlined in this document, which governs the use of our products, services, and website."
        />
        <link rel="canonical" href="https://nexflow.tech/terms" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header with decorative elements */}
          <div className="text-center mb-12 relative">
            <div className="absolute -top-6 -left-6 w-16 h-16 rounded-full bg-blue-500/20 blur-xl"></div>
            <div className="absolute -bottom-6 -right-6 w-16 h-16 rounded-full bg-purple-500/20 blur-xl"></div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-300">
              Terms of Service
            </h1>
            <p className="text-orange-200 font-mono text-sm">
              Effective Date: {new Date().toLocaleDateString()}
            </p>
          </div>

          {/* Main content container */}
          <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden border border-gray-700/30">
            {/* Sticky navigation */}
            <div className="sticky top-0 z-10 bg-gray-800/80 backdrop-blur-sm px-6 py-4 border-b border-gray-700/30 flex flex-wrap gap-3">
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
                  className="px-3 py-1 text-sm rounded-full bg-gray-700/50 hover:bg-orange-500/20 hover:text-orange-300 transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Content sections */}
            <div className="p-6 sm:p-8 md:p-10 space-y-12">
              {/* Introduction */}
              <section id="introduction" className="scroll-mt-20">
                <div className="flex items-start gap-4">
                  <div className="text-amber-400 mt-1">
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
                    <h2 className="text-2xl font-bold text-amber-300 mb-4">
                      Welcome to Nexflow Technologies
                    </h2>
                    <p className="mb-4 leading-relaxed text-gray-300">
                      These Terms of Service ("Terms") govern your access to and
                      use of Nexflow Technologies' website, products, and
                      services ("Services"). By accessing or using our Services,
                      you agree to be bound by these Terms.
                    </p>
                    <div className="bg-gray-700/50 rounded-lg p-4 border-l-4 border-amber-500">
                      <p className="font-medium text-amber-200 italic">
                        If you do not agree to these Terms, you may not use our
                        Services. We may modify these Terms at any time, and
                        such changes will be effective when posted.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Accounts */}
              <section id="accounts" className="scroll-mt-20">
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
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-blue-300 mb-6">
                      1. User Accounts
                    </h2>

                    <div className="space-y-6">
                      <div className="bg-gray-700/30 rounded-xl p-5 border border-gray-600/30">
                        <h3 className="font-semibold text-lg text-blue-200 mb-3">
                          Account Creation
                        </h3>
                        <ul className="space-y-2 text-gray-300 pl-5">
                          <li className="relative before:absolute before:-left-5 before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-blue-400">
                            You must provide accurate and complete information
                            when creating an account
                          </li>
                          <li className="relative before:absolute before:-left-5 before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-blue-400">
                            You are responsible for maintaining the
                            confidentiality of your account credentials
                          </li>
                          <li className="relative before:absolute before:-left-5 before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-blue-400">
                            You must be at least 18 years old to create an
                            account
                          </li>
                        </ul>
                      </div>

                      <div className="bg-gray-700/30 rounded-xl p-5 border border-gray-600/30">
                        <h3 className="font-semibold text-lg text-blue-200 mb-3">
                          Account Responsibilities
                        </h3>
                        <ul className="space-y-2 text-gray-300 pl-5">
                          <li className="relative before:absolute before:-left-5 before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-blue-400">
                            You are responsible for all activities that occur
                            under your account
                          </li>
                          <li className="relative before:absolute before:-left-5 before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-blue-400">
                            You must immediately notify us of any unauthorized
                            use of your account
                          </li>
                          <li className="relative before:absolute before:-left-5 before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-blue-400">
                            We reserve the right to suspend or terminate
                            accounts that violate these Terms
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Services */}
              <section id="services" className="scroll-mt-20">
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
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-green-300 mb-4">
                      2. Our Services
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div className="bg-gray-700/30 rounded-xl p-5 border border-gray-600/30 hover:border-green-400/30 transition-colors">
                        <h3 className="font-semibold text-lg text-green-200 mb-3 flex items-center gap-2">
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
                          Service Description
                        </h3>
                        <p className="text-gray-300">
                          Nexflow Technologies provides web development, social
                          media marketing, SEO, and related digital services as
                          described on our website.
                        </p>
                      </div>

                      <div className="bg-gray-700/30 rounded-xl p-5 border border-gray-600/30 hover:border-green-400/30 transition-colors">
                        <h3 className="font-semibold text-lg text-green-200 mb-3 flex items-center gap-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                              clipRule="evenodd"
                            />
                          </svg>
                          Service Modifications
                        </h3>
                        <p className="text-gray-300">
                          We reserve the right to modify or discontinue any
                          Service at any time without notice. We are not liable
                          for any modification or discontinuance.
                        </p>
                      </div>
                    </div>

                    <div className="bg-gray-700/40 rounded-lg p-5">
                      <h3 className="font-semibold text-lg text-green-200 mb-3">
                        Service Limitations
                      </h3>
                      <ul className="space-y-3 text-gray-300">
                        {[
                          "Services are provided 'as is' without warranties of any kind",
                          "Results may vary based on individual circumstances",
                          "We don't guarantee specific outcomes from our services",
                          "You're responsible for providing accurate information for service delivery",
                        ].map((item, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <span className="text-green-400 mt-1">
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
              </section>

              {/* Payments */}
              <section id="payments" className="scroll-mt-20">
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
                        d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-purple-300 mb-4">
                      3. Payments & Billing
                    </h2>

                    <div className="space-y-6">
                      <div className="bg-gray-700/30 rounded-xl p-5 border border-gray-600/30">
                        <h3 className="font-semibold text-lg text-purple-200 mb-3">
                          Pricing & Payments
                        </h3>
                        <ul className="space-y-2 text-gray-300 pl-5">
                          <li className="relative before:absolute before:-left-5 before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-purple-400">
                            All prices are in USD unless otherwise specified
                          </li>
                          <li className="relative before:absolute before:-left-5 before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-purple-400">
                            You agree to pay all charges for purchased services
                          </li>
                          <li className="relative before:absolute before:-left-5 before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-purple-400">
                            We use third-party payment processors and don't
                            store your payment details
                          </li>
                        </ul>
                      </div>

                      <div className="bg-gray-700/30 rounded-xl p-5 border border-gray-600/30">
                        <h3 className="font-semibold text-lg text-purple-200 mb-3">
                          Refunds & Cancellations
                        </h3>
                        <ul className="space-y-2 text-gray-300 pl-5">
                          <li className="relative before:absolute before:-left-5 before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-purple-400">
                            Refund policies vary by service and are outlined at
                            purchase
                          </li>
                          <li className="relative before:absolute before:-left-5 before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-purple-400">
                            Custom work may be non-refundable once development
                            begins
                          </li>
                          <li className="relative before:absolute before:-left-5 before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-purple-400">
                            Subscription services can typically be canceled
                            anytime
                          </li>
                        </ul>
                      </div>

                      <div className="bg-purple-900/20 rounded-lg p-4 border border-purple-800/50">
                        <p className="text-purple-200 flex items-start gap-2">
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
                            For specific payment questions, please contact our
                            billing team at billing@nexflow.tech
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Content */}
              <section id="content" className="scroll-mt-20">
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
                        d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-pink-300 mb-4">
                      4. User Content
                    </h2>

                    <div className="space-y-6">
                      <div className="bg-gray-700/30 rounded-xl p-5 border border-gray-600/30">
                        <h3 className="font-semibold text-lg text-pink-200 mb-3">
                          Your Content
                        </h3>
                        <p className="mb-3 text-gray-300">
                          You retain ownership of any content you submit through
                          our Services ("User Content"). By submitting User
                          Content, you grant us:
                        </p>
                        <ul className="space-y-2 text-gray-300 pl-5">
                          <li className="relative before:absolute before:-left-5 before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-pink-400">
                            A worldwide, non-exclusive license to use,
                            reproduce, and display your content to provide our
                            Services
                          </li>
                          <li className="relative before:absolute before:-left-5 before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-pink-400">
                            The right to use your content in anonymized form for
                            marketing and case studies (unless otherwise agreed)
                          </li>
                        </ul>
                      </div>

                      <div className="bg-gray-700/30 rounded-xl p-5 border border-gray-600/30">
                        <h3 className="font-semibold text-lg text-pink-200 mb-3">
                          Content Restrictions
                        </h3>
                        <p className="mb-3 text-gray-300">
                          You agree not to submit any content that:
                        </p>
                        <ul className="space-y-2 text-gray-300 pl-5">
                          {[
                            "Violates any law or third-party rights",
                            "Contains viruses or malicious code",
                            "Is defamatory, obscene, or harassing",
                            "Contains false or misleading information",
                            "Infringes intellectual property rights",
                          ].map((item, index) => (
                            <li
                              key={index}
                              className="relative before:absolute before:-left-5 before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-pink-400"
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Termination */}
              <section id="termination" className="scroll-mt-20">
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
                        d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                      />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-red-300 mb-4">
                      5. Termination
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-gray-700/30 rounded-xl p-5 border border-gray-600/30">
                        <h3 className="font-semibold text-lg text-red-200 mb-3">
                          By You
                        </h3>
                        <p className="text-gray-300">
                          You may stop using our Services at any time. For
                          subscription services, you may need to formally cancel
                          to stop billing.
                        </p>
                      </div>

                      <div className="bg-gray-700/30 rounded-xl p-5 border border-gray-600/30">
                        <h3 className="font-semibold text-lg text-red-200 mb-3">
                          By Us
                        </h3>
                        <p className="mb-3 text-gray-300">
                          We may suspend or terminate your access to Services if
                          you:
                        </p>
                        <ul className="space-y-2 text-gray-300 pl-5">
                          <li className="relative before:absolute before:-left-5 before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-red-400">
                            Violate these Terms
                          </li>
                          <li className="relative before:absolute before:-left-5 before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-red-400">
                            Create risk or possible legal exposure
                          </li>
                          <li className="relative before:absolute before:-left-5 before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-red-400">
                            Don't pay amounts owed
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Liability */}
              <section id="liability" className="scroll-mt-20">
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
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-yellow-300 mb-4">
                      6. Disclaimers & Liability
                    </h2>

                    <div className="space-y-6">
                      <div className="bg-gray-700/30 rounded-xl p-5 border border-gray-600/30">
                        <h3 className="font-semibold text-lg text-yellow-200 mb-3">
                          Service "As Is"
                        </h3>
                        <p className="text-gray-300">
                          Our Services are provided "as is" without warranties
                          of any kind, either express or implied. We don't
                          guarantee that:
                        </p>
                        <ul className="space-y-2 mt-3 text-gray-300 pl-5">
                          <li className="relative before:absolute before:-left-5 before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-yellow-400">
                            Services will meet all your requirements
                          </li>
                          <li className="relative before:absolute before:-left-5 before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-yellow-400">
                            Services will be uninterrupted, timely, or
                            error-free
                          </li>
                          <li className="relative before:absolute before:-left-5 before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-yellow-400">
                            Results from using our Services will be accurate or
                            reliable
                          </li>
                        </ul>
                      </div>

                      <div className="bg-gray-700/30 rounded-xl p-5 border border-gray-600/30">
                        <h3 className="font-semibold text-lg text-yellow-200 mb-3">
                          Limitation of Liability
                        </h3>
                        <p className="text-gray-300 mb-3">
                          To the maximum extent permitted by law, Nexflow
                          Technologies shall not be liable for:
                        </p>
                        <ul className="space-y-2 text-gray-300 pl-5">
                          <li className="relative before:absolute before:-left-5 before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-yellow-400">
                            Any indirect, incidental, or consequential damages
                          </li>
                          <li className="relative before:absolute before:-left-5 before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-yellow-400">
                            Loss of profits, data, or business opportunities
                          </li>
                          <li className="relative before:absolute before:-left-5 before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-yellow-400">
                            Damages related to third-party services or products
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Changes */}
              <section id="changes" className="scroll-mt-20">
                <div className="flex items-start gap-4">
                  <div className="text-cyan-400 mt-1">
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
                    <h2 className="text-2xl font-bold text-cyan-300 mb-4">
                      7. Changes to Terms
                    </h2>

                    <div className="bg-gray-700/30 rounded-xl p-5 border border-gray-600/30">
                      <p className="text-gray-300 mb-4">
                        We may modify these Terms at any time. When we do, we'll
                        update the "Effective Date" at the top of this page.
                      </p>
                      <p className="text-gray-300">
                        Your continued use of our Services after changes become
                        effective constitutes acceptance of the new Terms. If
                        you don't agree to the changes, you should stop using
                        our Services.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Contact & Final */}
              <section className="mt-12 bg-gradient-to-r from-orange-900/40 to-amber-900/40 rounded-xl p-6 sm:p-8 border border-orange-700/30">
                <h2 className="text-2xl font-bold text-white mb-6 text-center">
                  Contact Information
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold text-orange-200 mb-3">
                      Nexflow Technologies
                    </h3>
                    <address className="not-italic text-gray-300 space-y-2">
                      <p className="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-orange-400"
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
                        legal@nexflow.tech
                      </p>
                      <p className="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-orange-400"
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
                    <h3 className="text-lg font-semibold text-amber-200 mb-3">
                      Governing Law
                    </h3>
                    <p className="text-gray-300 mb-4">
                      These Terms shall be governed by and construed in
                      accordance with the laws of [Your Jurisdiction], without
                      regard to its conflict of law provisions.
                    </p>
                    <div className="bg-gray-800/50 rounded-lg p-3 text-sm text-gray-400">
                      <p>
                        Thank you for choosing Nexflow Technologies. We
                        appreciate your business.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
