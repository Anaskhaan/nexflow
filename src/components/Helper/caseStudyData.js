import casestudy1 from "../../assets/1.webp";
import casestudy2 from "../../assets/1-2.webp";
import casestudy3 from "../../assets/2.webp";
import casestudy4 from "../../assets/3.webp";
import casestudy5 from "../../assets/4.webp";
import casestudy6 from "../../assets/4-1.webp";
import casestudy7 from "../../assets/5.webp";
import casestudy8 from "../../assets/6.webp";
import casestudy9 from "../../assets/7.webp";
import casestudy10 from "../../assets/8.webp";

export const caseStudyData = [
  {
    id: 1,
    category: "B2B SaaS",
    title: "Event Management Platform",
    image: casestudy1,
    image2: casestudy2,
    overview:
      "For over three years, we have been managing Google and Bing Ads for a B2B SaaS event management software company. This ongoing partnership has allowed us to navigate and adapt to significant industry changes, particularly the surge in virtual events post-COVID-19.",
    challenges: [
      "The shift towards virtual events led to increased competition",
      "Notable rise in Cost-Per-Click (CPC) and overall advertising costs",
      "Changing customer behavior in the event management space",
    ],
    achievements: [
      {
        title: "Increased Conversion Rates (CVR)",
        description:
          "Through targeted ad strategies and continuous optimization, we significantly improved the conversion rates.",
      },
      {
        title: "Cost Efficiency",
        description:
          "We reduced the cost per conversion from $2500 to $1200 over the past three years.",
      },
      {
        title: "Budget Optimization",
        description:
          "By focusing on more relevant keywords, we enhanced budget efficiency, ensuring that ad spend was directed towards high-performing keywords.",
      },
      {
        title: "Improved Conversion Rate Optimization (CRO)",
        description:
          " Implemented advanced CRO techniques to maximize the effectiveness of landing pages and ad copy.",
      },
    ],
    conclusion:
      "Our strategic approach and continuous optimization efforts have not only mitigated the impact of rising CPCs but also delivered substantial improvements in conversion rates and cost efficiency. This case study highlights our ability to adapt to industry changes and drive successful outcomes for our clients.",
    metrics: [
      { value: "240%", label: "Increase in conversions" },
      { value: "$1200", label: "Cost per conversion" },
      { value: "3 Years", label: "Partnership duration" },
      { value: "75%", label: "Reduction in wasted spend" },
    ],
  },
  {
    id: 2,
    category: "B2B SaaS",
    title: "Bing Ads and Efficiencies in Spend",
    image: casestudy3,
    overview:
      "Initially, we allocated over $50,000 per month to Bing Ads. However, we observed that this channel was not yielding a satisfactory number of closed deals. In response, we reallocated our budget in 2023, shifting our focus to LinkedIn Ads.",
    challenges: [
      "High ad spend with low return on Bing",
      "Poor closed deal volume",
    ],
    achievements: [
      {
        title: "Lower Cost per Conversion",
        description: "Reduced cost per conversion from $2,600 to $600.",
      },
      {
        title: "Improved Conversion Rates",
        description:
          "Enhanced CVR through precise keyword targeting on LinkedIn.",
      },
    ],
    conclusion:
      "This strategic reallocation of budget from Bing Ads to LinkedIn Ads not only optimized our advertising spend but also resulted in a substantial improvement in both cost efficiency and conversion rates.",
    metrics: [
      { value: "$600", label: "Cost per conversion (LinkedIn)" },
      { value: "$50K to $10-12K", label: "Monthly spend shift" },
    ],
  },
  {
    id: 3,
    category: "B2B SaaS",
    title: "LinkedIn Ad Campaign Optimization",
    image: casestudy4,
    overview:
      "We managed LinkedIn ad campaigns for the event management software industry, focusing on creative testing, audience refinement, and remarketing.",
    challenges: [
      "Identifying the most effective creatives",
      "Optimizing audiences for relevance",
    ],
    achievements: [
      {
        title: "Effective Remarketing",
        description:
          "Remarketing campaigns yielded the highest number of conversions with cost per conversion as low as $800.",
      },
    ],
    conclusion:
      "Our strategic approach to LinkedIn ad campaigns, especially the focus on remarketing, proved to be highly effective.",
    metrics: [{ value: "$800", label: "Cost per conversion (remarketing)" }],
  },
  {
    id: 4,
    category: "B2B SaaS",
    title: "Lead Aggregator Ad Scaling",
    image: casestudy5,
    image2: casestudy6,
    overview:
      "We scaled lead generation campaigns across various B2B SaaS products like HRM and CRM software, focusing on cost control and intent-driven targeting.",
    challenges: ["CPCs as high as $200", "Highly competitive ad environment"],
    achievements: [
      {
        title: "20x Scale",
        description: "Grew monthly spend from $4K to $100K within two years.",
      },
      {
        title: "CPC Reduction",
        description: "CRO and long-tail keywords lowered average CPC.",
      },
      {
        title: "Competitor Bidding",
        description: "Captured leads from competitor brand terms.",
      },
    ],
    conclusion:
      "Our strategic use of SKAGs and long-tail keywords helped scale spend while maintaining efficiency.",
    metrics: [
      { value: "$100K", label: "Monthly ad spend" },
      { value: "20x", label: "Campaign scale" },
    ],
  },
  {
    id: 5,
    category: "Commercial Services",
    title: "Commercial Roofing Lead Generation",
    image: casestudy7,
    overview:
      "The client needed to generate commercial roofing leads via Google Ads, excluding residential projects.",
    challenges: [
      "Zero starting visibility",
      "Targeting commercial-only roofing queries",
    ],
    achievements: [
      {
        title: "3x Lead Volume",
        description:
          "Consolidating campaigns by location helped cut costs and boost lead flow.",
      },
    ],
    conclusion:
      "Our restructuring and keyword strategy significantly improved lead volume while controlling costs.",
    metrics: [{ value: "3x", label: "Lead volume increase" }],
  },
  {
    id: 6,
    category: "Commercial Services",
    title: "Commercial HVAC Lead Generation",
    image: casestudy8,
    overview:
      "We focused on lead generation for commercial HVAC services through Google Ads, excluding residential leads.",
    challenges: [
      "Low existing volume",
      "Need for tight geographic budget control",
    ],
    achievements: [
      {
        title: "3x Lead Volume",
        description:
          "Campaign restructuring and SKAG usage helped triple qualified leads.",
      },
    ],
    conclusion:
      "Our targeting and campaign optimization helped drive more qualified commercial HVAC leads at scale.",
    metrics: [{ value: "3x", label: "Lead volume increase" }],
  },
  {
    id: 7,
    category: "Commercial Services",
    title: "Commercial Solar Lead Generation",
    image: casestudy9,
    overview:
      "We focused on increasing qualified commercial solar project leads through Google Ads.",
    challenges: ["Low lead volume", "Avoiding residential search traffic"],
    achievements: [
      {
        title: "3x Lead Volume",
        description:
          "Optimizing for high-intent keywords boosted quality and quantity.",
      },
    ],
    conclusion:
      "Our Google Ads strategy effectively scaled lead volume and improved efficiency.",
    metrics: [{ value: "3x", label: "Lead volume increase" }],
  },
  {
    id: 8,
    category: "Freight & Logistics",
    title: "Freight Forwarding Lead Gen Transformation",
    image: casestudy10,
    overview:
      "This long-term client needed scalable lead gen across the MENA region for freight and parcel forwarding services.",
    challenges: [
      "Broad service types and geography",
      "Irrelevant search traffic",
    ],
    achievements: [
      {
        title: "5x ROAS",
        description:
          "Return on Ad Spend increased fivefold through landing page and ad testing.",
      },
      {
        title: "10x Website Traffic",
        description: "Major growth in site visits and visibility regionally.",
      },
      {
        title: "Lower CPC",
        description:
          "SEM landing pages and negatives list reduced spend waste.",
      },
      {
        title: "Higher Conversion Rates",
        description:
          "Conversion-focused design and ad copy boosted performance.",
      },
    ],
    conclusion:
      "A combination of keyword targeting, localized ads, and landing page optimization delivered outstanding results across MENA.",
    metrics: [
      { value: "5x", label: "Return on Ad Spend" },
      { value: "10x", label: "Website traffic increase" },
    ],
  },
];
