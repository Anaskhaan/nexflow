// src/config/seoConfig.js
export const SEO_DATA = {
  home: {
    title: "NexFlow Tech | AI & Automation Solutions for Scalable Growth",
    description: "Cutting-edge AI solutions for business growth",
    keywords: "AI, automation, business solutions",
  },
  about: {
    title: "About NexFlow | Our Mission & Team",
    description: "Learn about our vision and expert team",
    noindex: false,
  },
  leadMagnet: {
    title: "AI Automation | NexFlow Tech",
    noindex: true, // Will auto-inject noindex meta tag
  },
  // Add all other pages...
};

// Optional: Helper function for dynamic pages (case studies/blog posts)
export const getSeoConfig = (pageKey, dynamicData = {}) => {
  const base = SEO_DATA[pageKey] || {};
  return { ...base, ...dynamicData };
};

// implementation
//  <Helmet>
//         <title>{SEO_DATA.about.title}</title>
//         <meta name="description" content={SEO_DATA.about.description} />
//         {SEO_DATA.about.noindex && (
//           <meta name="robots" content="noindex,nofollow" />
//         )}
//       </Helmet>
