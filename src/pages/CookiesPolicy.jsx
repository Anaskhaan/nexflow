export const CookiesPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 py-12 px-4 sm:px-6 lg:px-8">
      {/* Container with subtle glow */}
      <div className="max-w-4xl mx-auto bg-gray-800 rounded-xl shadow-2xl overflow-hidden p-6 sm:p-8 relative">
        {/* Decorative accent */}
        <div
          className="absolute top-0 left-0 w-full h-1"
          style={{
            background: "linear-gradient(90deg, #3ea69b 0%, #3f4e58 100%)",
          }}
        ></div>

        {/* Header with fade-in animation */}
        <div className="mb-10 text-center border-b border-gray-700 pb-6">
          <h1
            className="text-3xl sm:text-4xl font-bold mb-2 tracking-tight"
            style={{ color: "#3ea69b" }}
          >
            Cookies Policy
          </h1>
          <p className="text-sm opacity-80 mt-2" style={{ color: "#3f4e58" }}>
            Last Updated:
            {new Date().toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-10">
          {/* Intro */}
          <Section
            title=""
            content={
              <p className="leading-relaxed">
                At
                <span
                  className="font-semibold hover:text-[#3ea69b] transition-colors duration-200"
                  style={{ color: "#3ea69b" }}
                >
                  NexFlow Technologies
                </span>
                ("we," "us," or "our"), we use cookies to enhance your
                experience on
                <a
                  href="https://nexflow.tech"
                  className="hover:underline transition-all duration-200"
                  style={{ color: "#3ea69b" }}
                >
                  nexflow.tech
                </a>
                . This policy explains how we use cookies and your choices.
              </p>
            }
          />

          {/* What Are Cookies? */}
          <Section
            title="1. What Are Cookies?"
            content={
              <p className="leading-relaxed">
                Cookies are small text files stored on your device when you
                visit websites. They help websites remember information about
                your visit, which can improve functionality, analyze traffic
                patterns, and personalize your experience.
              </p>
            }
          />

          {/* How We Use Cookies */}
          <Section
            title="2. How We Use Cookies"
            content={
              <ul className="space-y-3 mt-3">
                {[
                  {
                    title: "Essential Cookies",
                    desc: "Required for basic functionality like page navigation and secure areas of the website.",
                    example: "Session cookies, authentication tokens",
                  },
                  {
                    title: "Analytics Cookies",
                    desc: "Help us understand how visitors interact with our website.",
                    example: "Google Analytics, Hotjar",
                  },
                  {
                    title: "Marketing Cookies",
                    desc: "Used to track advertising effectiveness and deliver relevant ads.",
                    example: "Facebook Pixel, Google Ads",
                  },
                  {
                    title: "Preference Cookies",
                    desc: "Remember your preferences like language or region settings.",
                    example: "WordPress cookies, localization settings",
                  },
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start group">
                    <span
                      className="inline-block mt-1 mr-3 text-lg group-hover:scale-110 transition-transform"
                      style={{ color: "#3ea69b" }}
                    >
                      •
                    </span>
                    <div>
                      <h3 className="font-medium" style={{ color: "#3ea69b" }}>
                        {item.title}
                      </h3>
                      <p className="text-gray-300 text-sm">{item.desc}</p>
                      {item.example && (
                        <p className="text-gray-400 text-xs mt-1">
                          Example: {item.example}
                        </p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            }
          />

          {/* Cookie Types Table */}
          <Section
            title="3. Types of Cookies We Use"
            content={
              <div className="mt-4 rounded-lg border border-gray-700 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="min-w-full">
                    <thead>
                      <tr style={{ backgroundColor: "#3f4e58" }}>
                        <th className="py-3 px-4 text-left font-medium">
                          Type
                        </th>
                        <th className="py-3 px-4 text-left font-medium">
                          Purpose
                        </th>
                        <th className="py-3 px-4 text-left font-medium">
                          Examples
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-700">
                      {[
                        [
                          "Strictly Necessary",
                          "Essential website operations",
                          "Session cookies, CSRF tokens",
                        ],
                        [
                          "Performance",
                          "Website optimization",
                          "Google Analytics, Hotjar",
                        ],
                        [
                          "Functionality",
                          "Enhanced features",
                          "Language preferences",
                        ],
                        [
                          "Targeting/Advertising",
                          "Personalized content",
                          "Facebook Pixel, Google Ads",
                        ],
                      ].map(([type, purpose, examples], idx) => (
                        <tr
                          key={idx}
                          className={
                            idx % 2 === 0
                              ? "bg-gray-800 hover:bg-gray-750"
                              : "bg-gray-750 hover:bg-gray-700"
                          }
                        >
                          <td
                            className="py-3 px-4 font-medium transition-colors duration-150"
                            style={{ color: "#3ea69b" }}
                          >
                            {type}
                          </td>
                          <td className="py-3 px-4 transition-colors duration-150">
                            {purpose}
                          </td>
                          <td className="py-3 px-4 transition-colors duration-150">
                            {examples}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            }
          />

          {/* Third-Party Cookies */}
          <Section
            title="4. Third-Party Cookies"
            content={
              <div className="space-y-3">
                <p className="leading-relaxed">
                  We use services that may set their own cookies, including:
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
                  {[
                    "Google Analytics",
                    "Facebook Pixel",
                    "Google Ads",
                    "Hotjar",
                    "LinkedIn Insights",
                    "Twitter Conversion Tracking",
                  ].map((service, idx) => (
                    <li
                      key={idx}
                      className="flex items-center bg-gray-750 rounded px-3 py-2"
                    >
                      <span
                        className="w-2 h-2 rounded-full mr-2"
                        style={{ backgroundColor: "#3ea69b" }}
                      ></span>
                      {service}
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-gray-400 mt-3">
                  These services have their own privacy policies which we
                  recommend reviewing.
                </p>
              </div>
            }
          />

          {/* Managing Cookies */}
          <Section
            title="5. Managing Cookies"
            content={
              <div className="space-y-4">
                <p className="leading-relaxed">
                  You have control over cookies through your browser settings.
                  Disabling essential cookies may affect website functionality.
                </p>

                <div className="bg-gray-750 rounded-lg p-4">
                  <h4
                    className="font-medium mb-3 text-lg"
                    style={{ color: "#3f4e58" }}
                  >
                    Browser-Specific Instructions:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {[
                      {
                        browser: "Chrome",
                        icon: "🖥️",
                        url: "https://support.google.com/chrome/answer/95647",
                      },
                      {
                        browser: "Firefox",
                        icon: "🦊",
                        url: "https://support.mozilla.org/en-US/kb/cookies",
                      },
                      {
                        browser: "Safari",
                        icon: "🍏",
                        url: "https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac",
                      },
                    ].map((item, idx) => (
                      <a
                        key={idx}
                        href={item.url}
                        className="flex flex-col items-center p-3 rounded hover:bg-gray-700 transition-colors duration-200 group"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="text-2xl mb-2">{item.icon}</span>
                        <span
                          className="font-medium text-center group-hover:underline"
                          style={{ color: "#3ea69b" }}
                        >
                          {item.browser}
                        </span>
                        <span className="text-xs text-gray-400 mt-1">
                          Settings Guide
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            }
          />

          {/* Policy Changes */}
          <Section
            title="6. Policy Updates"
            content={
              <div className="space-y-3">
                <p className="leading-relaxed">
                  We may periodically update this Cookies Policy. When we do,
                  we'll revise the "Last Updated" date at the top of this page.
                </p>
                <div
                  className="bg-gray-750 rounded-lg p-4 border-l-4"
                  style={{ borderColor: "#3f4e58" }}
                >
                  <p className="text-sm">
                    <strong>Notification:</strong> Significant changes will be
                    communicated through our website or email if you're
                    subscribed.
                  </p>
                </div>
              </div>
            }
          />

          {/* Contact */}
          <Section
            title="7. Contact Information"
            content={
              <div className="space-y-4">
                <p className="leading-relaxed">
                  For questions about our cookie usage or this policy:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <a
                    href="mailto:contact@nexflow.tech"
                    className="flex items-center p-4 bg-gray-750 rounded-lg hover:bg-gray-700 transition-colors duration-200"
                    style={{ color: "#3ea69b" }}
                  >
                    <div className="mr-4 text-2xl">📧</div>
                    <div>
                      <div className="font-medium">Email Us</div>
                      <div className="text-sm text-gray-400">
                        contact@nexflow.tech
                      </div>
                    </div>
                  </a>

                  <a
                    href="https://nexflow.tech/contact"
                    className="flex items-center p-4 bg-gray-750 rounded-lg hover:bg-gray-700 transition-colors duration-200"
                    style={{ color: "#3ea69b" }}
                  >
                    <div className="mr-4 text-2xl">🌐</div>
                    <div>
                      <div className="font-medium">Visit Website</div>
                      <div className="text-sm text-gray-400">nexflow.tech</div>
                    </div>
                  </a>
                </div>
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
};

// Reusable section component
const Section = ({ title, content }) => (
  <div>
    {title && (
      <h2
        className="text-xl sm:text-2xl font-semibold mb-4 tracking-tight flex items-center"
        style={{ color: "#ffff" }}
      >
        <span
          className="w-3 h-3 rounded-full mr-3"
          style={{ backgroundColor: "#3ea69b" }}
        ></span>
        {title}
      </h2>
    )}
    <div className="text-gray-300">{content}</div>
  </div>
);
