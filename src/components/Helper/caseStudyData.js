import casestudy1 from "../../assets/casestudy1.svg";

// Example data structure in Helper/caseStudyData.js
export const caseStudyData = [
  {
    id: 1,
    category: "B2B SaaS",
    title: "Event Management Platform",
    image: casestudy1,
    overview:
      "For over three years, we have been managing Google and Bing Ads for a B2B SaaS event management software company. This ongoing partnership has allowed us to navigate and adapt to significant industry changes, particularly the surge in virtual events post-COVID-19.",
    challenges: [
      "The shift towards virtual events led to increased competition",
      "Notable rise in Cost-Per-Click (CPC) and overall advertising costs",
      "Changing customer behavior in the event management space",
    ],
    achievements: [
      {
        title: "Increased Conversion Rates",
        description:
          "Through targeted ad strategies and continuous optimization...",
      },
      {
        title: "Cost Efficiency",
        description: "Reduced the cost per conversion from $2500 to $1200...",
      },
      // ... more achievements
    ],
    conclusion:
      "Our strategic approach and continuous optimization efforts have not only mitigated the impact of rising CPCs...",
    metrics: [
      { value: "240%", label: "Increase in conversions" },
      { value: "$1200", label: "Cost per conversion" },
      { value: "3 Years", label: "Partnership duration" },
      { value: "75%", label: "Reduction in wasted spend" },
    ],
  },
  // ... more case studies
];
