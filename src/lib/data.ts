import React from "react";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Calculator, 
  BarChart2, 
  Users, 
  TrendingUp, 
  Clock, 
  Award,
  ShoppingCart,
  DollarSign,
  Heart,
  GraduationCap,
  UtensilsCrossed,
  Clapperboard,
  Building,
  Home,
  Briefcase,
  Truck,
  Monitor,
  Shield,
  Car,
  Linkedin,
  Facebook,
  Instagram,
  Zap,
  Sparkles,
  Target,
  Megaphone,
  Search,
  Smartphone,
  Layers,
  Palette,
  Code,
  Twitter,
  Github
} from "lucide-react";

// Import assets
import anas from "../assets/Anas.jpg";
import bellClinix from "../assets/bellclinix-logo.svg";
import swiftTakeoffs from "../assets/swift-logo.webp";
import paradisePipes from "../assets/paradise-logo.svg";
import a from "../assets/Bellclinix-mobile.webp";
import b from "../assets/bellclinix-combine.webp";
import c from "../assets/bellclinix-laptop1.webp";
import d from "../assets/bellclinix-laptop.webp";
import mobile from "../assets/paradise-mobile.webp";
import combine from "../assets/paradise-combine.webp";
import paradise1 from "../assets/paradise-1.webp";
import paradise2 from "../assets/paradise-2.webp";
import swift from "../assets/swift-mobile.webp";
import swift2 from "../assets/swift-combine.webp";
import swift3 from "../assets/swift-laptop.webp";
import swift4 from "../assets/swift-laptop2.webp";

export interface NavLink {
  id: number | string;
  title: string;
  href: string;
  submenu?: NavLink[];
}

export const navLinks: NavLink[] = [
  { id: 1, title: "Home", href: "/" },
  { id: 2, title: "About", href: "/about" },
  {
    id: 3,
    title: "Services",
    href: "/services",
    submenu: [
      { id: "s1", title: "SEO Optimization", href: "/services/seo-optimization" },
      { id: "s2", title: "ASO Optimization", href: "/services/app-store-optimization" },
      { id: "s3", title: "Social Media Marketing", href: "/services/social-media-marketing" },
      { id: "s4", title: "PPC Campaigns", href: "/services/ppc-campaigns" },
      { id: "s5", title: "AI Image Processing", href: "/services/ai-image-processing" },
      { id: "s6", title: "Branding", href: "/services/branding" },
      { id: "s7", title: "Web Development", href: "/services/web-development" },
      { id: "s8", title: "App Development", href: "/services/app-development" },
      { id: "s9", title: "UI/UX Design", href: "/services/ui-ux-design" },
      { id: "s10", title: "Affiliate Marketing", href: "/services/affiliate-marketing" },
      { id: "s11", title: "Deployment & Automations", href: "/services/deployment-automations" },
      { id: "s12", title: "CMS & E-commerce", href: "/services/cms-ecommerce" },
    ],
  },
  { id: 4, title: "Portfolio", href: "/Portfolio" },
  {
    id: 5,
    title: "Resources",
    href: "/Resources",
    submenu: [
      { id: "c1", title: "Calculate ROI", href: "/saas-roi" },
      { id: "c2", title: "Analyze Funnel", href: "/funnel-audit" },
    ],
  },
  { id: 6, title: "Blog", href: "/blog" },
  { id: 7, title: "Contact", href: "/contact" },
];

export interface ContactInfo {
  icon: React.ReactNode;
  title: string;
  value: string;
  link: string;
}

export const contactInfo: ContactInfo[] = [
  {
    icon: React.createElement(Phone, { size: 20 }),
    title: "Phone",
    value: "+1 (678) 825 6967",
    link: "tel:+16788256967",
  },
  {
    icon: React.createElement(Mail, { size: 20 }),
    title: "Email",
    value: "info@nexflow.tech",
    link: "mailto:info@nexflow.tech",
  },
  {
    icon: React.createElement(MapPin, { size: 20 }),
    title: "Address",
    value: "8 The Green #6092 Dover, DE, 19901",
    link: "https://maps.app.goo.gl/sayfjTES4qa3jY5F7",
  },
];

export interface ResourceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  cta: string;
  href: string;
  accent: string;
}

export const resources: ResourceItem[] = [
  {
    title: "SaaS ROI Calculator",
    description: "Measure your software investment returns with precision",
    icon: React.createElement(Calculator, { className: "text-[#3ea69b]", size: 32 }),
    cta: "Calculate ROI",
    href: "/saas-roi",
    accent: "from-[#3ea69b]/10 to-[#3ea69b]/5",
  },
  {
    title: "Funnel Audit",
    description: "Discover leaks in your conversion pipeline",
    icon: React.createElement(BarChart2, { className: "text-[#3f4e58]", size: 32 }),
    cta: "Analyze Funnel",
    href: "/funnel-audit",
    accent: "from-[#3f4e58]/10 to-[#3f4e58]/5",
  },
];

export interface Testimonial {
  id: number;
  name: string;
  company: string;
  quote: string;
  role: string;
}

export const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Zain Ul Abedin",
    company: "Swift Takeoffs Inc.",
    quote: "NexFlow Technologies has been instrumental in elevating our digital presence. Their work on our website, SEO, SMM, and paid media was strategic, efficient, and results-driven. We saw a clear boost in traffic, engagement, and qualified leads. Highly professional team — reliable, responsive, and truly aligned with our business goals.",
    role: "Founder & CEO",
  },
  {
    id: 2,
    name: "Dr Khan",
    company: "BellClinix",
    quote: "Working with NexFlow Technologies has been a game-changer for The Bell Clinix. Their expertise in website development, SEO, social media, and paid advertising helped us build a strong digital presence and connect with more patients. They're strategic, reliable, and deeply understand the dynamics of healthcare marketing.",
    role: "Founder",
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    company: "Paradise Pipes",
    quote: "NexFlow Technologies transformed our vision into a sleek, modern website with exceptional UI/UX. Their development team delivered a fast, functional, and visually impressive platform that truly reflects our brand. Professional, efficient, and design-focused — highly recommended.",
    role: "Marketing Director",
  },
];

export interface Stat {
  id: number;
  value: string;
  label: string;
  icon: React.ReactNode;
}

export const stats: Stat[] = [
  { id: 1, value: "93%", label: "Client Retention", icon: React.createElement(Users, { size: 24 }) },
  { id: 2, value: "287%", label: "Average ROI", icon: React.createElement(TrendingUp, { size: 24 }) },
  { id: 3, value: "24/7", label: "Support", icon: React.createElement(Clock, { size: 24 }) },
  { id: 4, value: "500+", label: "Projects Completed", icon: React.createElement(Award, { size: 24 }) },
];

export interface Domain {
  name: string;
  icon: any;
  color: string;
}

export const domains: Domain[] = [
  { name: "eCommerce", icon: ShoppingCart, color: "#3FA69B" },
  { name: "Fintech", icon: DollarSign, color: "#36958B" },
  { name: "Healthcare", icon: Heart, color: "#2D847B" },
  { name: "Education", icon: GraduationCap, color: "#3FA69B" },
  { name: "Social Networking", icon: Users, color: "#36958B" },
  { name: "Hospitality", icon: UtensilsCrossed, color: "#2D847B" },
  { name: "Entertainment", icon: Clapperboard, color: "#3FA69B" },
  { name: "Government", icon: Building, color: "#36958B" },
  { name: "Real Estate", icon: Home, color: "#2D847B" },
  { name: "Business", icon: Briefcase, color: "#3FA69B" },
  { name: "Logistics", icon: Truck, color: "#36958B" },
  { name: "Tech & IT", icon: Monitor, color: "#2D847B" },
  { name: "Non-Profit", icon: Shield, color: "#3FA69B" },
  { name: "Automotive", icon: Car, color: "#36958B" },
  { name: "Travel & Tourism", icon: MapPin, color: "#2D847B" },
];

export interface PortfolioItemSummary {
  id: number;
  slug: string;
  title: string;
  website: string;
  category: string;
  image: any;
  services: string[];
  results: { label: string; value: string }[];
  highlights: string[];
}

export const portfolioData: PortfolioItemSummary[] = [
  {
    id: 1,
    slug: "bell-clinix",
    title: "BellClinix",
    website: "bellclinix.com",
    category: "Healthcare",
    image: bellClinix,
    services: ["Web Dev", "SEO", "PPC"],
    results: [
      { label: "Traffic", value: "3.2x" },
      { label: "Leads", value: "210%" },
      { label: "ROI", value: "5.1x" },
    ],
    highlights: ["Elevated with HIPAA-compliant responsive design", "Ranked #1 for 15+ medical keywords", "Optimized lead gen with 28% PPC conversion"],
  },
  {
    id: 2,
    slug: "swift-takeoffs",
    title: "SwiftTakeoffs",
    website: "swifttakeoffs.com",
    category: "Estimating Agency",
    image: swiftTakeoffs,
    services: ["Web Dev", "SEO", "PPC"],
    results: [
      { label: "Revenue", value: "320%" },
      { label: "Traffic", value: "4.8x" },
      { label: "ROAS", value: "6.3x" },
    ],
    highlights: ["Elevated e-commerce platform with 42% lower abandonment", "Ranked top 3 for aviation equipment keywords", "Optimized $50k/month PPC with 650% return"],
  },
  {
    id: 3,
    slug: "paradise-pipes",
    title: "Paradise Pipes",
    website: "paradisepipes.com",
    category: "Luxury Retail",
    image: paradisePipes,
    services: ["Web Dev", "SEO", "PPC"],
    results: [
      { label: "Leads", value: "180%" },
      { label: "Traffic", value: "2.7x" },
      { label: "ROI", value: "4.5x" },
    ],
    highlights: ["Elevated with award-winning luxury web design", "Ranked for 120+ plumbing keywords nationally", "Optimized PPC with 22% CTR luxury audience"],
  },
];

export interface Feature {
  icon: any;
  title: string;
  description: string;
  color: string;
}

export const features: Feature[] = [
  { icon: Award, title: "Award-Winning", description: "Recognized for creative campaigns that drive results.", color: "from-[var(--main-theme-color)] to-[#2D7E74]" },
  { icon: BarChart2, title: "Data-Driven", description: "Campaigns crafted with real insights for real ROI.", color: "from-purple-500 to-indigo-600" },
  { icon: Users, title: "Expert Team", description: "Top-tier talent with deep industry experience.", color: "from-amber-500 to-orange-500" },
  { icon: Zap, title: "Rapid Launch", description: "Fast execution to capitalize on market timing.", color: "from-pink-500 to-rose-500" },
  { icon: Sparkles, title: "Innovation", description: "Constantly evolving to keep you ahead.", color: "from-blue-400 to-cyan-500" },
  { icon: Target, title: "Precise Targeting", description: "Laser-focused segmentation for max efficiency.", color: "from-violet-500 to-purple-600" },
];

export interface MainPortfolioItem {
  id: number;
  slug: string;
  image: any;
  projecTYpe: string;
  projectName: string;
  clientName: string;
  websiteLink: string;
  services: string[];
  images: any[];
  images2: any[];
  typographyColorScheme: {
    palette: string[];
    primaryFont: { weight: string; label: string };
    secondaryFont: { weight: string; label: string };
  };
  projectDetails: string;
  features: string[];
  mobileResponsivenessImage: any;
}

export const mainportfolioData: MainPortfolioItem[] = [
  {
    id: 1,
    slug: "bell-clinix",
    image: bellClinix,
    projecTYpe: "Medical Billing",
    projectName: "Bell Clinix",
    clientName: "Bell Clinix",
    websiteLink: "https://bellclinix.com/",
    services: ["Brand Design", "Website Design", "Websie Development"],
    images: [a],
    images2: [b, c, d],
    typographyColorScheme: {
      palette: ["#000F14", "#0030D0", "#1C45DB", "#F7F7F7", "#15116B", "#442098", "#53CEF4"],
      primaryFont: { weight: "700", label: "Plus Jakarta Sans" },
      secondaryFont: { weight: "300", label: "Plus Jakarta Sans" },
    },
    projectDetails: "We designed and developed the complete brand identity and website for BellClinix.com, delivering a modern, user-friendly experience that reflects their commitment to advanced healthcare solutions. From visual branding to responsive web design, our team ensured a seamless digital presence aligned with their vision.",
    features: ["Responsive patient-first design", "Integrated appointment booking system", "HIPAA-compliant patient portal", "Service catalog with detailed descriptions"],
    mobileResponsivenessImage: "https://source.unsplash.com/featured/?mobile,healthcare",
  },
  {
    id: 2,
    slug: "swift-takeoffs",
    image: swiftTakeoffs,
    projecTYpe: "Construction agency",
    projectName: "Swift Takeoffs",
    clientName: "Swift Takeoffs",
    websiteLink: "https://swifttakeoffs.com/",
    services: ["Brand Design", "Website Design", "Websie Development"],
    images: [swift],
    images2: [swift2, swift3, swift4],
    typographyColorScheme: {
      palette: ["#1B1B1F", "#2F80ED", "#56CCF2", "#F2F2F2", "#333333", "#4F4F4F", "#828282"],
      primaryFont: { weight: "600", label: "Inter" },
      secondaryFont: { weight: "400", label: "Inter" },
    },
    projectDetails: "We built SwiftTakeoffs.com from the ground up, incorporating features to support fast, accurate construction takeoff services. With a dynamic interface and robust functionality, the platform enhances the project estimation process for contractors and developers alike.",
    features: ["Dynamic flight scheduling system", "Interactive map integration", "Customer account management", "Responsive booking experience"],
    mobileResponsivenessImage: "https://source.unsplash.com/featured/?mobile,aviation",
  },
  {
    id: 3,
    slug: "paradise-pipes",
    image: paradisePipes,
    projecTYpe: "Company Profile",
    projectName: "Paradise Pipes",
    clientName: "Paradise Pipes",
    websiteLink: "http://paradisepipes.com/",
    services: ["Brand Design", "Website Design", "Websie Development"],
    images: [mobile],
    images2: [combine, paradise1, paradise2],
    typographyColorScheme: {
      palette: ["#202124", "#FF6F00", "#FFD600", "#FFFFFF", "#757575", "#424242", "#BDBDBD"],
      primaryFont: { weight: "700", label: "Montserrat" },
      secondaryFont: { weight: "300", label: "Montserrat" },
    },
    projectDetails: "We developed ParadisePipes.com with an emphasis on their industrial product line, showcasing their pipes and fittings catalog effectively. The brand identity and digital presence were refined to communicate trust and industry relevance.",
    features: ["Custom product filtering system", "Secure payment processing", "Customer reviews integration", "Mobile-first shopping experience"],
    mobileResponsivenessImage: "https://source.unsplash.com/featured/?mobile,ecommerce",
  },
];

export const faqsData = [
  { question: "Why is digital marketing important for my business?", answer: "Digital marketing allows businesses to reach and engage with a wider audience, generate leads, drive website traffic, and increase brand visibility. It provides measurable results and enables businesses to adapt strategies based on insights." },
  { question: "How can digital marketing help improve my website's visibility?", answer: "Digital marketing strategies such as SEO and paid advertising can help your website rank higher on search engines and attract more visitors." },
  { question: "How long does it take to see results from digital marketing efforts?", answer: "The timeline varies depending on the strategy, but SEO may take months while paid advertising yields faster results." },
  { question: "How do you measure the success of digital marketing campaigns?", answer: "Success can be measured by tracking KPIs like website traffic, conversion rates, and ROI through analytics tools." },
  { question: "What digital marketing services does Nexflow offer?", answer: "Nexflow offers a comprehensive suite of digital marketing services including SEO, paid advertising, social media marketing, content marketing, email campaigns, and analytics reporting to help businesses achieve their marketing goals." },
];

export const footerData = {
  company: {
    name: "Nexflow",
    description: "Empowering businesses with cutting-edge digital solutions and innovative marketing strategies to drive growth and success in the digital age.",
    socialLinks: [
      { name: "LinkedIn", url: "https://www.linkedin.com/company/nexflow-technologies/posts/?feedView=all", icon: React.createElement(Linkedin, { size: 18 }) },
      { name: "Facebook", url: "https://www.facebook.com/profile.php?id=61567677611133", icon: React.createElement(Facebook, { size: 18 }) },
      { name: "Instagram", url: "https://www.instagram.com/nexflowtechnologies/", icon: React.createElement(Instagram, { size: 18 }) },
    ],
  },
  links: [
    { id: 1, title: "Home", href: "/" },
    { id: 2, title: "About", href: "/about" },
    { id: 3, title: "Services", href: "/services" },
    { id: 4, title: "Blog", href: "/blog" },
    { id: 5, title: "Contact", href: "/contact" },
    { id: 6, title: "Resources", href: "/resources" },
  ],
  services: ["SEO Optimization", "Social Media Marketing", "Content Creation", "Paid Advertising", "Deployment & Automations", "CMS & E-commerce"],
  contact: [
    { icon: React.createElement(Mail, { size: 18, className: "text-[var(--main-theme-color)]" }), text: "info@nexflow.tech" },
    { icon: React.createElement(Phone, { size: 18, className: "text-[var(--main-theme-color)]" }), text: "+1 (678) 825 6967" },
    { icon: React.createElement(MapPin, { size: 18, className: "text-[var(--main-theme-color)]" }), text: { title: "USA", lines: ["8 The Green #6092", "Dover, DE, 19901"] } },
    { icon: React.createElement(MapPin, { size: 18, className: "text-[var(--main-theme-color)]" }), text: { title: "Pakistan", lines: ["56-G, Gulberg III", "Lahore, Pakistan"] } },
  ],
  legalLinks: [
    { title: "Privacy Policy", url: "/PrivacyPolicy" },
    { title: "Terms of Service", url: "/Terms" },
    { title: "Cookies Policy", url: "/CookiesPolicy" },
  ],
};

export const processSteps = [
  { id: 1, title: "Discovery", description: "We analyze your business goals and market position" },
  { id: 2, title: "Strategy", description: "We create a tailored plan to achieve your objectives" },
  { id: 3, title: "Execution", description: "We implement campaigns across your chosen channels" },
  { id: 4, title: "Optimization", description: "We continuously refine for maximum performance" },
];

export const founderData = {
  name: "Anas Khan",
  role: "Founder & Managing Director",
  bio: "Visionary leader with a passion for integrating cutting-edge technology into scalable business models. Anas is dedicated to powering growth through innovation and precision.",
  image: anas,
  socials: [
    { name: "LinkedIn", href: "https://linkedin.com/in/anaskhaan", icon: Linkedin },
    { name: "Twitter", href: "https://twitter.com/anaskhaan", icon: Twitter },
  ]
};

export const teamMembers = [
  {
    id: 1,
    name: "Anas Khan",
    role: "Founder & Cloud Infrastructure Lead",
    category: "Infrastructure",
    image: anas,
    socials: [
      { name: "LinkedIn", href: "https://linkedin.com/in/anaskhaan", icon: Linkedin },
      { name: "Twitter", href: "https://twitter.com/anaskhaan", icon: Twitter },
    ]
  },
  {
    id: 2,
    name: "Zain Ul Abedin",
    role: "Chief Executive Officer (CEO)",
    category: "Executive",
    image: null,
    socials: [
      { name: "LinkedIn", href: "#", icon: Linkedin },
      { name: "Twitter", href: "#", icon: Twitter },
    ]
  },
  {
    id: 3,
    name: "Ali Hussain Khan",
    role: "Chief Technology Officer (CTO)",
    category: "Technology",
    image: null,
    socials: [
      { name: "LinkedIn", href: "#", icon: Linkedin },
      { name: "Github", href: "#", icon: Github },
    ]
  },
  {
    id: 4,
    name: "Muhammad Awais",
    role: "Head of HR & Management",
    category: "Operations",
    image: null,
    socials: [
      { name: "LinkedIn", href: "#", icon: Linkedin },
      { name: "Twitter", href: "#", icon: Twitter },
    ]
  },
  {
    id: 5,
    name: "Sami Sharief",
    role: "Direct Head Finance & Ads",
    category: "Finance",
    image: null,
    socials: [
      { name: "LinkedIn", href: "#", icon: Linkedin },
      { name: "Twitter", href: "#", icon: Twitter },
    ]
  },
  {
    id: 6,
    name: "Muhammad Musab",
    role: "Head of SEO & SMM",
    category: "Marketing",
    image: null,
    socials: [
      { name: "LinkedIn", href: "#", icon: Linkedin },
      { name: "Github", href: "#", icon: Github },
    ]
  },
  {
    id: 7,
    name: "Mashhood Rehman",
    role: "Web Guru / Team Lead",
    category: "Engineering",
    image: null,
    socials: [
      { name: "LinkedIn", href: "#", icon: Linkedin },
      { name: "Twitter", href: "#", icon: Twitter },
    ]
  },
  {
    id: 8,
    name: "Afaq Khalid",
    role: "Backend Architect",
    category: "Core Systems",
    image: null,
    socials: [
      { name: "LinkedIn", href: "#", icon: Linkedin },
      { name: "Github", href: "#", icon: Github },
    ]
  },
  {
    id: 9,
    name: "Tufail Yousaf",
    role: "Senior Graphic Designer",
    category: "Creative",
    image: null,
    socials: [
      { name: "LinkedIn", href: "#", icon: Linkedin },
      { name: "Instagram", href: "#", icon: Instagram },
    ]
  },
];

export interface TechItem {
  name: string;
  icon: string;
  description: string;
}

export interface TechStack {
  categories: string[];
  technologies: {
    [key: string]: TechItem[];
  };
}

export interface ServiceDetail {
  id: number;
  slug: string;
  title: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  icon: any;
  color: string;
  domainExpertise: { name: string; icon: any; description?: string }[];
  benefits: string[];
  details: string;
  process: string[];
  timeframe: string;
  pricing: string;
  techStack?: TechStack;
  // Sales Funnel Fields
  hook: string; // Attention-grabbing headline
  painPoints: string[]; // Customer problems (3-4)
  agitation: string; // What happens if not solved
  solution: string; // How we solve it
  proof: {
    metric: string;
    description: string;
  }[]; // Social proof stats
  faqs: {
    question: string;
    answer: string;
  }[];
  packages?: {
    name: string;
    price: string;
    features: string[];
    popular?: boolean;
  }[];
  guarantee?: string; // Risk reversal statement
}

export interface CaseStudy {
  id: number;
  category: string;
  title: string;
  summary: string;
  tags?: string[];
}

export const caseStudy: CaseStudy[] = [
  {
    id: 1,
    category: "B2B SAAS",
    title: "Maximizing Ad Performance for Event Software",
    summary: "How we helped a B2B SaaS event management company cut cost-per-conversion by over 50% while boosting conversion rates through continuous Google & Bing Ads optimization.",
    tags: ["Google Ads", "Bing Ads", "CRO"]
  },
  {
    id: 2,
    category: "B2B SaaS",
    title: "Shifting Ad Spend from Bing to LinkedIn",
    summary: "How we cut cost-per-conversion by over 75% by reallocating a $50K Bing Ads budget to a more targeted LinkedIn Ads strategy focused on the US market.",
    tags: ["LinkedIn Ads", "Strategy"]
  },
  {
    id: 3,
    category: "B2B SAAS",
    title: "Driving Conversions with LinkedIn Remarketing",
    summary: "Through creative and audience testing, we leveraged LinkedIn remarketing to achieve conversion costs as low as $800—delivering superior campaign efficiency.",
    tags: ["LinkedIn", "Remarketing"]
  },
  {
    id: 4,
    category: "B2B SAAS",
    title: "Scaling Lead Gen for SaaS Aggregator",
    summary: "We scaled ad spend from $4K to $100K/month for a SaaS aggregator using SKAGs, branded terms, and CRO to cut CPCs and increase lead quality.",
    tags: ["Scaling", "PPC"]
  },
  {
    id: 5,
    category: "COMMERCIAL SERVICES",
    title: "3x More Leads for Commercial Roofing",
    summary: "With keyword refinement and campaign consolidation, we tripled lead volume for commercial roofing while improving cost-efficiency across locations.",
    tags: ["Roofing", "Lead Gen"]
  },
  {
    id: 6,
    category: "COMMERCIAL SERVICES",
    title: "Scaling Commercial HVAC Lead Gen",
    summary: "Targeted Google Ads for commercial HVAC services led to 3x more leads and better ROI through optimized SKAG structures and location-based refinements.",
    tags: ["HVAC", "Google Ads"]
  },
  {
    id: 7,
    category: "COMMERCIAL SERVICES",
    title: "Boosting Leads for Commercial Solar Projects",
    summary: "By focusing on high-intent commercial solar keywords, we tripled lead volume and improved efficiency through strategic campaign restructuring.",
    tags: ["Solar", "Restructuring"]
  },
  {
    id: 8,
    category: "LOGISTICS & E-COMMERCE",
    title: "5x ROAS for Freight Forwarding Client",
    summary: "Our long-term strategy drove a 5x ROAS and 10x site traffic for a MENA-region logistics provider through precise SEM campaigns and CRO.",
    tags: ["Logistics", "ROAS"]
  },
];

export interface CaseStudyAchievement {
  title: string;
  description: string;
}

export interface CaseStudyMetric {
  value: string;
  label: string;
}

export interface CaseStudyDetail extends CaseStudy {
  image: any;
  image2?: any;
  overview: string;
  challenges: string[];
  achievements: CaseStudyAchievement[];
  conclusion: string;
  metrics?: CaseStudyMetric[];
}

import casestudy1 from "../assets/1.webp";
import casestudy2 from "../assets/1-2.webp";
import casestudy3 from "../assets/2.webp";
import casestudy4 from "../assets/3.webp";
import casestudy5 from "../assets/4.webp";
import casestudy6 from "../assets/4-1.webp";
import casestudy7 from "../assets/5.webp";
import casestudy8 from "../assets/6.webp";
import casestudy9 from "../assets/7.webp";
import casestudy10 from "../assets/8.webp";

export const caseStudyData: CaseStudyDetail[] = [
  {
    id: 1,
    category: "B2B SaaS",
    title: "Event Management Platform",
    summary: "How we helped a B2B SaaS event management company cut cost-per-conversion by over 50% while boosting conversion rates through continuous Google & Bing Ads optimization.",
    image: casestudy1,
    image2: casestudy2,
    overview: "For over three years, we have been managing Google and Bing Ads for a B2B SaaS event management software company. This ongoing partnership has allowed us to navigate and adapt to significant industry changes, particularly the surge in virtual events post-COVID-19.",
    challenges: [
      "The shift towards virtual events led to increased competition",
      "Notable rise in Cost-Per-Click (CPC) and overall advertising costs",
      "Changing customer behavior in the event management space",
    ],
    achievements: [
      { title: "Increased Conversion Rates (CVR)", description: "Through targeted ad strategies and continuous optimization, we significantly improved the conversion rates." },
      { title: "Cost Efficiency", description: "We reduced the cost per conversion from $2500 to $1200 over the past three years." },
      { title: "Budget Optimization", description: "By focusing on more relevant keywords, we enhanced budget efficiency." },
    ],
    conclusion: "Our strategic approach and continuous optimization efforts have not only mitigated the impact of rising CPCs but also delivered substantial improvements.",
    metrics: [
      { value: "240%", label: "Increase in conversions" },
      { value: "$1200", label: "Cost per conversion" },
    ],
  },
  // ... more detailed data can be added as needed
];

export const ServicesData: ServiceDetail[] = [
  // MARKETING SERVICES
  {
    id: 1,
    slug: "seo-optimization",
    title: "SEO Optimization",
    description: "Boost your organic visibility and rank higher on search engines with strategic SEO",
    metaTitle: "Expert SEO Optimization Services | Rank Higher on Google",
    metaDescription: "Drive organic traffic and dominate search rankings with our data-driven SEO strategies. Proven results for businesses across all industries.",
    icon: Search,
    color: "#3FA69B",
    hook: "Stop Losing Customers to Your Competitors on Google",
    painPoints: [
      "Your website is invisible when potential customers search for your services",
      "Competitors are stealing your traffic and revenue every single day",
      "You're spending high amounts on ads with diminishing returns",
      "Your current organic traffic is low-quality and doesn't convert"
    ],
    agitation: "Every day you're not on page 1, you're losing potential customers to competitors who are. The average first-page result gets 10x more clicks than page 2. That's revenue walking away from your business.",
    solution: "We build SEO strategies that don't just chase rankings—we capture high-intent traffic that converts. Our data-driven approach combines technical excellence, compelling content, and strategic authority building to put you in front of your customers exactly when they need you.",
    proof: [
      { metric: "250%", description: "Average increase in organic traffic within 6 months" },
      { metric: "87%", description: "of clients reach the first page for priority keywords" },
      { metric: "4.2x", description: "Average ROI reported by our long-term SEO partners" }
    ],
    faqs: [
      { question: "How long until I see results?", answer: "SEO is a marathon, not a sprint. While initial technical fixes show impact in weeks, significant ranking shifts usually take 3-6 months depending on competition." },
      { question: "Do you guarantee #1 rankings?", answer: "No ethical SEO agency can guarantee a #1 spot because search algorithms change. However, we guarantee a data-driven strategy that consistently improves visibility and conversions." },
      { question: "Will my site be penalized?", answer: "Never. we only use 'White Hat' SEO techniques that follow search engine guidelines, ensuring long-term safety and growth for your domain." }
    ],
    domainExpertise: [
      { name: "eCommerce", icon: ShoppingCart, description: "Product page optimization and category rankings" },
      { name: "Healthcare", icon: Heart, description: "Local SEO for medical practices" },
      { name: "Real Estate", icon: Home, description: "Location-based search dominance" },
      { name: "Tech & IT", icon: Monitor, description: "Technical SEO and SaaS visibility" },
    ],
    benefits: [
      "Sustainable organic growth that compounds over time",
      "Higher high-intent traffic that actually converts into sales",
      "Improved brand authority and industry credibility",
      "Enhanced user experience through site speed and structure",
      "Comprehensive monthly reporting with clear, actionable insights",
      "Technical SEO auditing to prevent crawl errors and indexing issues",
      "Content strategy that addresses every stage of the buyer journey",
    ],
    details: "In today's digital landscape, being found online isn't optional—it's essential. We craft custom SEO strategies that go beyond basic keyword stuffing. Our approach combines technical excellence, compelling content, and strategic link building to position your brand exactly where your customers are searching. We don't just chase rankings; we build sustainable organic growth that compounds over time. Every strategy is tailored to your unique business goals, competitive landscape, and target audience.",
    process: [
      "Comprehensive technical SEO audit and competitor analysis",
      "In-depth keyword research and content gap identification",
      "On-page optimization and technical site enhancements",
      "High-quality content strategy and production",
      "Strategic authority building through backlink acquisition",
      "Continuous performance monitoring and iterative optimization",
    ],
    timeframe: "3-6 months for significant results",
    pricing: "Starting at $1,500/month",
    techStack: {
      categories: ["Analytics", "Research", "Technical", "Monitoring"],
      technologies: {
        Analytics: [
          { name: "Google Analytics 4", icon: "📊", description: "Advanced traffic and conversion tracking" },
          { name: "Google Search Console", icon: "🔍", description: "Search performance monitoring" },
          { name: "Looker Studio", icon: "📈", description: "Custom reporting dashboards" },
        ],
        Research: [
          { name: "SEMrush", icon: "🎯", description: "Keyword research and competitor analysis" },
          { name: "Ahrefs", icon: "🔗", description: "Backlink analysis and content research" },
          { name: "Moz Pro", icon: "📍", description: "Domain authority tracking" },
        ],
        Technical: [
          { name: "Screaming Frog", icon: "🕷️", description: "Technical SEO auditing" },
          { name: "PageSpeed Insights", icon: "⚡", description: "Performance optimization" },
          { name: "Schema Markup", icon: "🏷️", description: "Structured data implementation" },
        ],
        Monitoring: [
          { name: "Rank Tracker", icon: "📊", description: "Daily ranking monitoring" },
          { name: "Google Trends", icon: "📈", description: "Search trend analysis" },
        ],
      },
    },
    guarantee: "30-Day Money Back Quality Guarantee",
  },
  {
    id: 2,
    slug: "app-store-optimization",
    title: "ASO Optimization",
    description: "Maximize app downloads with optimized store presence and visibility",
    metaTitle: "App Store Optimization (ASO) Services | Boost App Downloads",
    metaDescription: "Increase app visibility and downloads with expert ASO strategies for iOS and Android. Data-driven optimization that drives results.",
    icon: Smartphone,
    color: "#36958B",
    hook: "Don't Let Your App Get Lost in a Sea of 5 Million Apps",
    painPoints: [
      "High user acquisition costs are eating your marketing budget",
      "Your app is buried deep in search results for relevant keywords",
      "Low conversion rates from store view to actual install",
      "User reviews and ratings are dragging down your ranking potential"
    ],
    agitation: "The top 3 apps in any search result capture over 60% of all downloads. If you're not in those spots, you're paying for every user you get, while your competitors get them for free through organic search.",
    solution: "We transform your app store presence with a clinical, data-driven ASO strategy. By optimizing metadata, creative assets, and user sentiment, we've helped apps increase organic downloads by over 150% without increasing ad spend.",
    proof: [
      { metric: "180%", description: "Average increase in organic app installs" },
      { metric: "35%", description: "Improvement in Store Listing Conversion Rate" },
      { metric: "Top 5", description: "Rankings achieved for targeted primary keywords" }
    ],
    faqs: [
      { question: "Is ASO better than Apple Search Ads?", answer: "They work best together. ASO provides the long-term organic foundation that makes your paid ads more effective and cheaper over time." },
      { question: "Does ASO work for both iOS and Android?", answer: "Yes, but the algorithms differ significantly. We tailor our optimization strategy specifically for the nuances of both the App Store and Google Play." },
      { question: "How often should metadata be updated?", answer: "We recommend updating metadata every 4-6 weeks based on seasonal trends, keyword performance data, and competitor movements." }
    ],
    domainExpertise: [
      { name: "Gaming", icon: Clapperboard, description: "Mobile game discovery optimization" },
      { name: "Fintech", icon: DollarSign, description: "Financial app visibility" },
      { name: "Healthcare", icon: Heart, description: "Health & fitness app rankings" },
      { name: "eCommerce", icon: ShoppingCart, description: "Shopping app conversions" },
    ],
    benefits: [
      "Drastic reduction in Average Cost Per Install (CPI)",
      "Continuous organic user growth without ongoing ad spend",
      "Higher quality users with better long-term retention rates",
      "Improved brand visibility across global app marketplaces",
      "Data-backed creative optimization for icons and screenshots",
      "Keyword strategy that targets high-volume, low-competition terms",
      "Review and rating management strategy to boost social proof",
    ],
    details: "Your app deserves to be discovered. In a marketplace with millions of apps competing for attention, we craft ASO strategies that make your app stand out. We focus on both search visibility and conversion rate optimization, ensuring that when users find your app, they actually install it. Our approach is iterative and data-driven, leveraging advanced tools to monitor rankings and competitor movements in real-time.",
    process: [
      "Initial app store audit and competitor benchmarking",
      "Extensive keyword research and localization strategy",
      "Title, subtitle, and description optimization",
      "Creative asset A/B testing (Icons, Screenshots, Video)",
      "Review management and rating improvement strategy",
      "Post-update analysis and iterative keywords refinement",
    ],
    timeframe: "4-8 weeks for initial optimization",
    pricing: "Starting at $1,200/month",
    guarantee: "Verified Ranking Improvement Guarantee",
  },
  {
    id: 3,
    slug: "social-media-marketing",
    title: "Social Media Marketing",
    description: "Build a loyal community and drive engagement across all social platforms",
    metaTitle: "Social Media Marketing Agency | Build Your Brand Online",
    metaDescription: "Transform your social presence with strategic content, community engagement, and data-driven campaigns across all major platforms.",
    icon: Megaphone,
    color: "#2D847B",
    hook: "Is Your Brand Just Posting, or Are You Actually Connecting?",
    painPoints: [
      "Your social media feels like a ghost town with zero engagement",
      "You're struggling to create consistent, high-quality content",
      "You have no clear strategy or ROI from your social efforts",
      "Managing multiple platforms is overwhelming and time-consuming"
    ],
    agitation: "71% of consumers who have a positive experience with a brand on social media are likely to recommend it to others. If your social presence is flat, you're not just losing followers—you're losing the most powerful marketing tool: organic word-of-mouth.",
    solution: "We turn social media from a chore into a growth engine. Our team handles everything from platform strategy and content production to community management and paid social. We focus on building authentic connections that drive real business results, not just vanity metrics.",
    proof: [
      { metric: "350%", description: "Average increase in brand engagement rates" },
      { metric: "15k+", description: "Targeted followers grown for client accounts organically" },
      { metric: "24/7", description: "Active community management and response time" }
    ],
    faqs: [
      { question: "Which platforms should I be on?", answer: "Not all platforms are right for every business. We analyze where your target audience hangs out and focus our energy there for maximum impact." },
      { question: "Who creates the content?", answer: "Our in-house creative team of designers, videographers, and copywriters handle everything from concept to final post production." },
      { question: "How do you measure success?", answer: "We look beyond likes. We track meaningful engagement, website click-throughs, and actual lead generation from social channels." }
    ],
    domainExpertise: [
      { name: "eCommerce", icon: ShoppingCart, description: "Shoppable posts and influencer partnerships" },
      { name: "Hospitality", icon: UtensilsCrossed, description: "Restaurant and hotel engagement" },
      { name: "Real Estate", icon: Home, description: "Property marketing and lead generation" },
      { name: "Fashion", icon: Heart, description: "Brand storytelling and influencer partnerships" },
    ],
    benefits: [
      "Consistent, professional brand voice across all channels",
      "Dramatic increase in brand awareness and recall",
      "Direct line of communication with your target audience",
      "Custom-made content (Reels, Carousels, Stories) that trends",
      "Reduced workload by delegating social tasks to experts",
      "Strategic influencer outreach and partnership management",
      "Paid social integration for accelerated growth and sales",
    ],
    details: "Social media isn't just about posting—it's about building relationships. We create authentic connections between your brand and your audience through strategic content and active community management. From viral TikToks to professional LinkedIn thought leadership, we tailor our approach to each platform's unique culture and algorithms.",
    process: [
      "Account audit and audience persona development",
      "Content strategy and platform-specific roadmap",
      "Creative production (Design, Video, Copywriting)",
      "Daily community management and engagement",
      "Performance tracking and monthly strategy review",
      "Viral trend monitoring and rapid-response content",
    ],
    timeframe: "Ongoing monthly engagement",
    pricing: "Starting at $1,800/month",
    techStack: {
      categories: ["Management", "Design", "Analytics", "Scheduling"],
      technologies: {
        Management: [
          { name: "Meta Business Suite", icon: "📱", description: "Facebook & Instagram management" },
          { name: "LinkedIn Campaign Manager", icon: "💼", description: "B2B social marketing" },
          { name: "TikTok Ads Manager", icon: "🎵", description: "Short-form video campaigns" },
        ],
        Design: [
          { name: "Canva Pro", icon: "🎨", description: "Social media graphics" },
          { name: "Adobe Creative Suite", icon: "🖼️", description: "Professional design assets" },
          { name: "CapCut", icon: "🎬", description: "Video editing and production" },
        ],
        Analytics: [
          { name: "Sprout Social", icon: "📊", description: "Cross-platform analytics" },
          { name: "Hootsuite Insights", icon: "📈", description: "Social listening and reporting" },
        ],
        Scheduling: [
          { name: "Buffer", icon: "⏰", description: "Content scheduling and publishing" },
          { name: "Later", icon: "📅", description: "Visual content planning" },
        ],
      },
    },
    guarantee: "Full Social Account Refresh in 14 Days",
  },
  {
    id: 4,
    slug: "ppc-campaigns",
    title: "PPC Campaigns",
    description: "Drive targeted traffic and conversions with optimized paid advertising",
    metaTitle: "PPC Management Services | Google Ads & Paid Search Experts",
    metaDescription: "Maximize ROI with expert PPC campaign management. Google Ads, Facebook Ads, and LinkedIn Ads optimized for performance.",
    icon: Zap,
    color: "#3FA69B",
    hook: "Every Dollar of Your Ad Spend Should Work Harder",
    painPoints: [
      "You're burning through your ad budget with zero leads to show for it",
      "Your cost per acquisition is higher than your profit margin",
      "You're getting clicks, but your landing pages aren't converting",
      "You have no idea which keywords are actually driving revenue"
    ],
    agitation: "For most businesses, 61% of ad spend is wasted on non-converting traffic. If you're not optimizing every bid, every ad, and every landing page, you're literally handing your profit to Google and Meta.",
    solution: "We build performance-driven PPC campaigns that obsess over ROI. From strategic keyword selection and high-converting ad copy to landing page optimization and forensic tracking, we ensure every cent of your budget is working to grow your bottom line.",
    proof: [
      { metric: "450%", description: "Average increase in Return on Ad Spend (ROAS)" },
      { metric: "32%", description: "Reduction in average Cost Per Lead (CPL)" },
      { metric: "6x", description: "Average revenue growth for our e-commerce clients" }
    ],
    faqs: [
      { question: "How much should my ad budget be?", answer: "We recommend starting with at least $1,500-$2,000 per month to gather enough data for effective optimization." },
      { question: "How quickly will I see leads?", answer: "Unlike SEO, PPC is instant. You can start seeing traffic and potential leads within 24-48 hours of campaign launch." },
      { question: "Which platform is best for me?", answer: "We analyze your audience behavior—Google is great for intent-based search, while Meta is powerful for audience-based discovery." }
    ],
    domainExpertise: [
      { name: "B2B SaaS", icon: Monitor, description: "Lead generation and demo bookings" },
      { name: "eCommerce", icon: ShoppingCart, description: "Product sales and ROAS optimization" },
      { name: "Professional Services", icon: Briefcase, description: "High-value client acquisition" },
      { name: "Education", icon: GraduationCap, description: "Student enrollment campaigns" },
    ],
    benefits: [
      "Immediate, high-intent traffic from day one",
      "Precise audience targeting and segmentation",
      "Optimized ad spend with focus on profit, not just clicks",
      "Continuous A/B testing of ad creative and landing pages",
      "Full transparency with real-time ROI tracking",
      "Strategic retargeting to win back lost visitors",
      "Custom landing page design for maximum conversion",
    ],
    details: "Performance-focused PPC management that treats your budget like our own. We combine deep data analysis with creative psychology to craft ad campaigns that capture attention and drive action. Our iterative approach means constant testing and refining to ensure your campaigns only get better over time.",
    process: [
      "Goal setting and audience persona research",
      "Campaign structure and keyword strategy development",
      "Ad creative production and landing page optimization",
      "Campaign launch and data gathering phase",
      "Continuous bid management and ad refinement",
      "Performance scaling and deep analytics reporting",
    ],
    timeframe: "2-4 weeks for setup, then ongoing",
    pricing: "Starting at $2,000/month + ad spend",
    techStack: {
      categories: ["Platforms", "Analytics", "Optimization", "Creative"],
      technologies: {
        Platforms: [
          { name: "Google Ads", icon: "🎯", description: "Search, Display, Shopping, YouTube" },
          { name: "Meta Ads", icon: "📘", description: "Facebook & Instagram advertising" },
          { name: "LinkedIn Ads", icon: "💼", description: "B2B lead generation" },
          { name: "Microsoft Advertising", icon: "🔷", description: "Bing search ads" },
        ],
        Analytics: [
          { name: "Google Analytics 4", icon: "📊", description: "Conversion tracking and attribution" },
          { name: "Google Tag Manager", icon: "🏷️", description: "Event tracking setup" },
          { name: "Looker Studio", icon: "📈", description: "Custom PPC dashboards" },
        ],
        Optimization: [
          { name: "Optmyzr", icon: "⚡", description: "Automated bid management" },
          { name: "SEMrush Ads", icon: "🎯", description: "Competitor ad intelligence" },
        ],
        Creative: [
          { name: "Canva", icon: "🎨", description: "Display ad creation" },
          { name: "Unbounce", icon: "🚀", description: "Landing page optimization" },
        ],
      },
    },
    guarantee: "Positive ROI Trend in 60 Days or Less",
  },
  {
    id: 5,
    slug: "ai-image-processing",
    title: "AI Image Processing",
    description: "Transform visuals with cutting-edge AI-powered image enhancement",
    metaTitle: "AI Image Processing Services | Advanced Visual Enhancement",
    metaDescription: "Leverage AI technology for image enhancement, background removal, upscaling, and automated visual processing at scale.",
    icon: Layers,
    color: "#36958B",
    hook: "Process Thousands of Perfect Visuals in Seconds, Not Days",
    painPoints: [
      "Manual image editing is slowing down your content pipeline",
      "Inconsistent image quality is hurting your brand credibility",
      "Low-resolution assets are unusable for high-quality marketing",
      "Removing backgrounds and retouching is expensive and slow"
    ],
    agitation: "In e-commerce, high-quality images can increase conversion rates by up to 94%. If your visuals are grainy, inconsistent, or slow to produce, you're losing sales to competitors who have a faster, cleaner visual pipeline.",
    solution: "We build custom, AI-powered image processing engines that handle everything from enhancement and upscaling to background removal and color correction at an enterprise scale. You get studio-quality results at a fraction of the cost and time.",
    proof: [
      { metric: "90%", description: "Reduction in manual editing time and costs" },
      { metric: "4k+", description: "Images processed per hour with our AI pipelines" },
      { metric: "100%", description: "Visual consistency across entire product catalogs" }
    ],
    faqs: [
      { question: "Can the AI handle complex backgrounds?", answer: "Yes, our advanced models can precisely isolate subjects even in complex scenes like hair or transparent objects." },
      { question: "What is the turnaround time?", answer: "Processing is near-instant. Most batch jobs are completed within minutes of upload." },
      { question: "Is the quality as good as a human editor?", answer: "For 95% of use cases, our AI outperforms human speed with indistinguishable quality. We include a human QA step for the final 5%." }
    ],
    domainExpertise: [
      { name: "eCommerce", icon: ShoppingCart, description: "Product image enhancement and consistency" },
      { name: "Real Estate", icon: Home, description: "Property photo optimization" },
      { name: "Media", icon: Clapperboard, description: "Content production workflows" },
      { name: "Marketing", icon: Megaphone, description: "Campaign visual assets" },
    ],
    benefits: [
      "Enterprise-scale image processing capabilities",
      "Studio-quality enhancement and upscaling",
      "Near-instant background removal and replacement",
      "Automated quality assurance and consistency",
      "Significant cost savings on manual post-production",
      "Seamless API integration with your existing systems",
      "Custom-tailored AI models for your specific niche",
    ],
    details: "Visual content is the cornerstone of digital engagement, and quality matters. We harness the power of artificial intelligence to transform your images at scale. Whether you need to enhance product photos, remove backgrounds, upscale low-resolution images, or process thousands of visuals consistently, our AI-powered solutions deliver professional results in a fraction of the time.",
    process: [
      "Initial requirements analysis and model selection",
      "AI pipeline architecture and customization",
      "Integration with your system or manual batch setup",
      "Automated processing with real-time status tracking",
      "Final quality assurance and human review",
      "Continuous model training for improved results",
    ],
    timeframe: "2-4 weeks for full implementation",
    pricing: "Custom pricing based on volume",
    techStack: {
      categories: ["AI Models", "Processing", "Integration", "Storage"],
      technologies: {
        "AI Models": [
          { name: "Stable Diffusion", icon: "🎨", description: "Image generation and enhancement" },
          { name: "DALL-E API", icon: "🖼️", description: "Creative image generation" },
          { name: "Remove.bg API", icon: "✂️", description: "Background removal" },
        ],
        Processing: [
          { name: "TensorFlow", icon: "🧠", description: "Custom ML model training" },
          { name: "OpenCV", icon: "👁️", description: "Computer vision processing" },
          { name: "PIL/Pillow", icon: "🖼️", description: "Image manipulation" },
        ],
        Integration: [
          { name: "REST APIs", icon: "🔌", description: "Seamless system integration" },
          { name: "Python Scripts", icon: "🐍", description: "Automated workflows" },
          { name: "AWS Lambda", icon: "☁️", description: "Serverless processing" },
        ],
        Storage: [
          { name: "AWS S3", icon: "💾", description: "Scalable image storage" },
          { name: "Cloudinary", icon: "☁️", description: "Image CDN and optimization" },
        ],
      },
    },
    guarantee: "100% Quality & Speed SLA Guarantee",
  },
  // BRANDING
  {
    id: 6,
    slug: "branding",
    title: "Branding",
    description: "Build a powerful brand identity that stands out and connects with your audience",
    metaTitle: "Brand Identity Design Services | Create Your Unique Brand",
    metaDescription: "Craft a memorable brand identity with our comprehensive branding services. Logo design, brand guidelines, and visual identity systems.",
    icon: Palette,
    color: "#2D847B",
    hook: "Your Brand is Either Memorable or Invisible. There is No In-Between.",
    painPoints: [
      "Your company feels 'generic' and struggles to stand out from competitors",
      "Your visual identity is outdated and doesn't reflect your actual quality",
      "Inconsistent branding across different platforms is confusing your customers",
      "You lack a clear brand story that connects emotionally with your audience"
    ],
    agitation: "A weak brand is the silent killer of growth. If customers can't distinguish you from the competition, you're forced to compete on price alone. That's a race to the bottom that high-quality businesses can't afford to win.",
    solution: "We craft 'Next-Gen' brand identities that command attention and build instant trust. Through deep strategy and world-class design, we create a cohesive visual and narrative ecosystem that turns your business into a recognizable leader in your industry.",
    proof: [
      { metric: "100%", description: "Custom-crafted visual identity systems" },
      { metric: "50+", description: "Brands successfully launched or refreshed this year" },
      { metric: "Top 1%", description: "Creative design rankings for our industry niche" }
    ],
    faqs: [
      { question: "What do I get in a branding package?", answer: "Complete visual identity: Logo system, typography, color palette, brand patterns, and a comprehensive Brand Guidelines document." },
      { question: "How long does the process take?", answer: "A full brand identity takes 6-10 weeks. We believe in deep research and iterative refinement to ensure long-term success." },
      { question: "Do you help with brand naming?", answer: "Yes, we offer strategic naming services for startups or products looking for a name that captures their essence and is legally available." }
    ],
    domainExpertise: [
      { name: "Startups", icon: Zap, description: "Brand creation from scratch" },
      { name: "Tech Companies", icon: Monitor, description: "Modern, innovative brand identities" },
      { name: "Retail", icon: ShoppingCart, description: "Consumer-focused brand positioning" },
      { name: "Professional Services", icon: Briefcase, description: "Trust-building brand systems" },
    ],
    benefits: [
      "Command higher prices by building a premium brand perception",
      "Create instant trust and recognition in your marketplace",
      "Attract better talent who want to work for a 'cool' brand",
      "Ensure total visual consistency across every single touchpoint",
      "Professional-grade logo systems for all digital and print needs",
      "Strategic brand messaging that speaks directly to your ideal client",
      "A scalable design system that grows with your company",
    ],
    details: "Your brand is more than a logo—it's the emotional connection you create with your audience. We craft brand identities that tell your unique story and resonate deeply with your target market. Through strategic research, creative exploration, and meticulous design, we develop comprehensive brand systems that work across every touchpoint.",
    process: [
      "Brand discovery workshops and competitive landscape analysis",
      "Brand strategy development and market positioning",
      "Visual identity exploration and concept moodboarding",
      "Primary and secondary logo design and refinement",
      "Complete brand guidelines and digital asset creation",
      "Brand rollout support and implementation consulting",
    ],
    timeframe: "6-10 weeks for complete brand identity",
    pricing: "Starting at $5,000",
    techStack: {
      categories: ["Design", "Prototyping", "Collaboration", "Delivery"],
      technologies: {
        Design: [
          { name: "Adobe Illustrator", icon: "🎨", description: "Vector logo design" },
          { name: "Adobe Photoshop", icon: "🖼️", description: "Visual mockups and assets" },
          { name: "Figma", icon: "🎯", description: "Collaborative design system" },
        ],
        Prototyping: [
          { name: "Adobe InDesign", icon: "📄", description: "Brand guideline documentation" },
          { name: "Sketch", icon: "✏️", description: "UI design and prototyping" },
        ],
        Collaboration: [
          { name: "Miro", icon: "🗂️", description: "Brand strategy workshops" },
          { name: "Notion", icon: "📝", description: "Project documentation" },
        ],
        Delivery: [
          { name: "Brandfolder", icon: "📁", description: "Digital asset management" },
          { name: "Google Drive", icon: "☁️", description: "File sharing and storage" },
        ],
      },
    },
    guarantee: "100% Unique Design & Copyright Transfer",
  },
  // DEVELOPMENT SERVICES
  {
    id: 7,
    slug: "web-development",
    title: "Web Development",
    description: "Create stunning, high-performance websites that drive results",
    metaTitle: "Custom Web Development Services | Build Your Perfect Website",
    metaDescription: "Professional web development with modern technologies. Fast, scalable, and beautiful websites tailored to your business needs.",
    icon: Code,
    color: "#3FA69B",
    hook: "Your Website Should Be Your Best 24/7 Salesperson",
    painPoints: [
      "Your current website is slow, outdated, and embarrassing to share",
      "It looks terrible on mobile devices where most of your users are",
      "You're struggling to make simple updates without a developer",
      "The site doesn't generate actual leads or sales for your business"
    ],
    agitation: "Slow websites kill conversions. A 1-second delay in page load time means a 7% reduction in conversions. If your site isn't fast, secure, and beautiful, you're practically inviting your visitors to click away to your competitors.",
    solution: "We build high-performance, 'Next-Gen' web experiences using the latest technologies (React, Next.js, TypeScript). Our websites are lightning-fast, pixel-perfect, and engineered for one purpose: to convert visitors into loyal customers.",
    proof: [
      { metric: "<1s", description: "Average page load time for our Next.js websites" },
      { metric: "99.9%", description: "Uptime and reliability for our hosted solutions" },
      { metric: "100+", description: "Custom web applications launched successfully" }
    ],
    faqs: [
      { question: "Will my website be mobile-friendly?", answer: "Absolutely. We follow a 'Mobile-First' design philosophy, ensuring your site looks and functions perfectly on every device." },
      { question: "Can I update the content myself?", answer: "Yes, we typically integrate a Headless CMS (like Sanity or Contentful) so you can manage your content with ease." },
      { question: "How long does a website take to build?", answer: "A custom high-performance website typically takes 6-12 weeks from strategy to launch." }
    ],
    domainExpertise: [
      { name: "eCommerce", icon: ShoppingCart, description: "Online stores and marketplaces" },
      { name: "SaaS", icon: Monitor, description: "Web applications and platforms" },
      { name: "Corporate", icon: Building, description: "Enterprise websites and portals" },
      { name: "Healthcare", icon: Heart, description: "HIPAA-compliant medical platforms" },
    ],
    benefits: [
      "Lightning-fast performance that wins on Google and with users",
      "Crystal-clear user journeys that maximize conversion rates",
      "Scalable architecture that grows naturally with your business",
      "Enhanced security with modern encryption and best practices",
      "SEO-optimized structure built into the foundation",
      "Intuitive CMS integration for easy content management",
      "Responsive design that looks stunning on every screen size",
    ],
    details: "In the digital age, your website is often the first impression you make. We build web experiences that don't just look stunning—they perform exceptionally. Our development process combines cutting-edge technology with user-centered design to create websites that engage visitors and drive conversions.",
    process: [
      "Strategic discovery and detailed requirements planning",
      "User experience architecture and interactive prototyping",
      "Next-generation UI design and visual storytelling",
      "High-performance development (Next.js, React, Tailwind)",
      "Rigorous quality assurance and cross-device testing",
      "Seamless deployment and ongoing performance monitoring",
    ],
    timeframe: "6-12 weeks for standard websites",
    pricing: "Starting at $8,000",
    techStack: {
      categories: ["Frontend", "Backend", "Database", "Deployment"],
      technologies: {
        Frontend: [
          { name: "React", icon: "⚛️", description: "Component-based UI development" },
          { name: "Next.js", icon: "▲", description: "Server-side rendering and optimization" },
          { name: "TypeScript", icon: "📘", description: "Type-safe development" },
          { name: "Tailwind CSS", icon: "🎨", description: "Utility-first styling" },
        ],
        Backend: [
          { name: "Node.js", icon: "🟢", description: "JavaScript runtime" },
          { name: "Express", icon: "🚂", description: "Web application framework" },
          { name: "Python/Django", icon: "🐍", description: "Robust backend development" },
        ],
        Database: [
          { name: "PostgreSQL", icon: "🐘", description: "Relational database" },
          { name: "MongoDB", icon: "🍃", description: "NoSQL database" },
          { name: "Redis", icon: "🔴", description: "Caching and sessions" },
        ],
        Deployment: [
          { name: "Vercel", icon: "▲", description: "Serverless deployment" },
          { name: "AWS", icon: "☁️", description: "Cloud infrastructure" },
          { name: "Docker", icon: "🐳", description: "Containerization" },
        ],
      },
    },
    guarantee: "1-Year Performance & Security Guarantee",
  },
  {
    id: 8,
    slug: "app-development",
    title: "App Development",
    description: "Build powerful, intuitive mobile applications for iOS and Android",
    metaTitle: "Custom Mobile App Development | iOS & Android Experts",
    metaDescription: "Transform your ideas into powerful mobile applications. Expert iOS and Android development using React Native and Flutter for high performance.",
    icon: Smartphone,
    color: "#2D847B",
    hook: "The World is Mobile. Is Your Business in Your Customers' Pockets?",
    painPoints: [
      "You have a great idea but don't know how to build a scalable mobile app",
      "Your current app is buggy, slow, and receiving poor user reviews",
      "You're struggling with high development costs for separate iOS and Android versions",
      "Your app lacks the modern features and performance users now expect"
    ],
    agitation: "Users delete 30% of apps within 24 hours if they encounter a single performance issue. If your mobile experience isn't seamless, you're not just losing users—you're damaging your brand's reputation in the most personal marketplace: the smartphone.",
    solution: "We build high-performance mobile applications that users love. Utilizing modern cross-platform frameworks (React Native, Flutter), we deliver native-quality experiences for both iOS and Android from a single codebase, saving you time and money without compromising on quality.",
    proof: [
      { metric: "4.8/5", description: "Average App Store rating for our developed applications" },
      { metric: "50%", description: "Reduction in development costs via cross-platform mastery" },
      { metric: "1M+", description: "Combined downloads for apps built by our core team" }
    ],
    faqs: [
      { question: "React Native or Native development?", answer: "We specialize in React Native and Flutter, which provide 99% of native performance while allowing for much faster development and shared logic." },
      { question: "Will you help with App Store submission?", answer: "Yes, we handle the entire submission process, including metadata, screenshots, and navigating the review guidelines for both stores." },
      { question: "Do you provide ongoing app maintenance?", answer: "Absolutely. Mobile OS updates (iOS/Android) happen constantly. We offer maintenance plans to ensure your app stays compatible and secure." }
    ],
    domainExpertise: [
      { name: "Fintech", icon: DollarSign, description: "Secure, high-performance financial apps" },
      { name: "Social Media", icon: Megaphone, description: "Real-time engagement and community apps" },
      { name: "Healthcare", icon: Heart, description: "Patient portals and wellness applications" },
      { name: "Delivery", icon: Truck, description: "Logistics and real-time tracking systems" },
    ],
    benefits: [
      "Native-quality performance on both iOS and Android platforms",
      "Faster time-to-market with smart cross-platform development",
      "Cloud-synced data for a seamless multi-device experience",
      "Advanced features like Push Notifications and Offline mode",
      "Rigorous security standards for user data protection",
      "Seamless integration with your existing APIs and databases",
      "User-centric design that prioritizes retention and engagement",
    ],
    details: "Your app needs to do more than just function—it needs to thrive. We build mobile applications that combine powerful functionality with intuitive design. Our cross-platform expertise allows us to build for both iOS and Android simultaneously, ensuring feature parity and a consistent experience for all users. From fintech security to social media speed, we tailor our development to your specific industry requirements.",
    process: [
      "Discovery discovery and technical feasibility analysis",
      "UX wireframing and interactive mobile prototyping",
      "Agile development with regular sprint demonstrations",
      "Cross-device testing and performance benchmarking",
      "Store submission and launch marketing support",
      "Post-launch monitoring and feature iterations",
    ],
    timeframe: "12-20 weeks for a feature-rich app",
    pricing: "Starting at $15,000",
    techStack: {
      categories: ["Frameworks", "Language", "State Mgmt", "Infrastructure"],
      technologies: {
        Frameworks: [
          { name: "React Native", icon: "⚛️", description: "High-performance cross-platform apps" },
          { name: "Flutter", icon: "🐦", description: "Beautiful, expressive mobile UIs" },
          { name: "Expo", icon: "♾️", description: "Rapid development & deployment" },
        ],
        Language: [
          { name: "TypeScript", icon: "📘", description: "Strictly typed app logic" },
          { name: "Dart", icon: "🎯", description: "Powering Flutter applications" },
        ],
        "State Mgmt": [
          { name: "Redux / Toolkit", icon: "🌀", description: "Predictable state containers" },
          { name: "Zustand", icon: "🐻", description: "Lightweight state management" },
        ],
        Infrastructure: [
          { name: "Firebase", icon: "🔥", description: "Real-time DB & Authentication" },
          { name: "Supabase", icon: "⚡", description: "Open source Firebase alternative" },
          { name: "GraphQL", icon: "📊", description: "Efficient data fetching" },
        ],
      },
    },
    guarantee: "180-Day Post-Launch Bug-Free Guarantee",
  },
  {
    id: 9,
    slug: "ui-ux-design",
    title: "UI/UX Design",
    description: "Design intuitive, beautiful user experiences that users love",
    metaTitle: "Expert UI/UX Design Services | Beautiful & Intuitive Products",
    metaDescription: "Create user-centered designs that drive engagement. Professional UI/UX services including wireframing, prototyping, and user research.",
    icon: Monitor,
    color: "#3FA69B",
    hook: "In a World of Friction, Be the Seamless Solution",
    painPoints: [
      "Your users are confused and dropping off before completing tasks",
      "The product looks 'dated' and doesn't reflect your innovative vision",
      "High support costs due to non-intuitive interface design",
      "You're making design decisions based on guesses, not user data"
    ],
    agitation: "Good design is invisible, but bad design is everywhere. If your product is hard to use, users won't blame themselves—they'll blame you, and then they'll go to a competitor who makes their lives easier. Aesthetic is the hook, but UX is the retention.",
    solution: "We build human-centered design systems that bridge the gap between business goals and user needs. Our iterative process combines deep empathy with data-backed design principles to create digital products that aren't just beautiful—they're incredibly effective.",
    proof: [
      { metric: "40%", description: "Average increase in user retention after redesign" },
      { metric: "2x", description: "Improvement in task completion speed for users" },
      { metric: "100%", description: "Focus on accessible, inclusive design standards" }
    ],
    faqs: [
      { question: "What is the difference between UI and UX?", answer: "UX (User Experience) is how a product works and how users feel using it. UI (User Interface) is how it looks—the colors, fonts, and visual polish." },
      { question: "Do you conduct user testing?", answer: "Always. We test our prototypes with real or proxy users to validate our assumptions and refine the flow before a single line of code is written." },
      { question: "Can you design for both web and mobile?", answer: "Yes, we specialize in creating responsive design systems that adapt perfectly to browsers, smartphones, and tablets." }
    ],
    domainExpertise: [
      { name: "SaaS", icon: Monitor, description: "Dashboard and workflow optimization" },
      { name: "eCommerce", icon: ShoppingCart, description: "Conversion-optimized checkout flows" },
      { name: "Fintech", icon: DollarSign, description: "Trust-building and data visualization" },
      { name: "Admin", icon: Briefcase, description: "Internal tool and management systems" },
    ],
    benefits: [
      "Significant reduction in user friction and drop-off rates",
      "Increased perceived value of your brand and product",
      "Clear, data-driven design rationale for every element",
      "Scalable design systems that speed up future development",
      "Inclusive design that ensures accessibility for all users",
      "Interactive prototypes to test ideas before building",
      "Deeply researched user personas and journey maps",
    ],
    details: "Design is a problem-solving tool. We go beyond aesthetics to understand your users' motivations, pain points, and behaviors. By combining user research with modern visual design, we create products that are both intuitive and beautiful. Our goal is to make every interaction a delight, turning casual users into brand advocates.",
    process: [
      "User research and stakeholder discovery workshops",
      "Information architecture and detailed user flow mapping",
      "Low-fidelity wireframing and structural validation",
      "High-fidelity UI design and visual system creation",
      "Interactive prototyping and iterative user testing",
      "Developer handoff documentation and design auditing",
    ],
    timeframe: "4-12 weeks depending on product scope",
    pricing: "Starting at $4,000",
    techStack: {
      categories: ["Design", "Prototyping", "Testing", "Collaboration"],
      technologies: {
        Design: [
          { name: "Figma", icon: "🎯", description: "Industry-standard UI design & systems" },
          { name: "Adobe XD", icon: "🎨", description: "Visual design & experience prototyping" },
        ],
        Prototyping: [
          { name: "Protopie", icon: "🥧", description: "Advanced high-fidelity interactions" },
          { name: "Framers", icon: "⚡", description: "Interactive component prototyping" },
        ],
        Testing: [
          { name: "Maze", icon: "🌀", description: "Rapid remote user testing" },
          { name: "HotJar", icon: "🔥", description: "User behavior and heat mapping" },
        ],
        Collaboration: [
          { name: "Zeplin", icon: "🔌", description: "Seamless designer-developer handoff" },
          { name: "FigJam", icon: "🗺️", description: "Collaborative whiteboarding & flows" },
        ],
      },
    },
    guarantee: "Unlimited Revision Guarantee on Initial Concepts",
  },
  {
    id: 10,
    slug: "affiliate-marketing",
    title: "Affiliate Marketing",
    description: "Scale your revenue with high-performance partner networks and publisher management",
    metaTitle: "Affiliate Marketing Agency | Scalable Performance Marketing",
    metaDescription: "Drive massive sales through expert affiliate marketing management. We handle publishers, advertisers, and networks like Awin and Impact.",
    icon: TrendingUp,
    color: "#2D847B",
    hook: "Scale Your Revenue with an Army of Performance-Based Partners",
    painPoints: [
      "You're struggling to acquire customers at a profitable cost",
      "Managing individual influencers and publishers is a technical nightmare",
      "You're worried about affiliate fraud and low-quality traffic",
      "You lack the network connections to reach top-tier publishers"
    ],
    agitation: "Relying solely on your own marketing team limits your reach. $17 Billion is spent on affiliate marketing globally for a reason—it works. If you're not leveraging the power of thousands of publishers, you're leaving a massive chunk of the market to your competitors.",
    solution: "We build and manage enterprise-grade affiliate programs that drive results. From recruiting high-authority publishers to managing advertiser relationships and optimizing platform settings on Awin or Impact, we handle the entire ecosystem so you only pay for actual performance.",
    proof: [
      { metric: "25%", description: "Average contribution of affiliate sales to total revenue" },
      { metric: "4:1", description: "Average Return on Ad Spend (ROAS) for our top programs" },
      { metric: "500+", description: "Active premium publishers in our direct network" }
    ],
    faqs: [
      { question: "What is the difference between Publisher and Advertiser?", answer: "An Advertiser (you) is the company selling the product. A Publisher (affiliate) is the partner who promotes your product in exchange for a commission on sales." },
      { question: "Which affiliate networks do you support?", answer: "We specialize in Tier-1 networks like Awin, Impact, ShareASale, and CJ Affiliate, ensuring your brand is on the most reputable platforms." },
      { question: "How do you prevent affiliate fraud?", answer: "We use advanced tracking tools and manual vetting processes to ensure only high-quality, authentic traffic and sales are rewarded." }
    ],
    domainExpertise: [
      { name: "eCommerce", icon: ShoppingCart, description: "High-volume product sales" },
      { name: "SaaS", icon: Monitor, description: "Subscription-based growth models" },
      { name: "Fintech", icon: DollarSign, description: "High-LTV customer acquisition" },
      { name: "Retail", icon: Building, description: "Brand-aligned publisher matching" },
    ],
    benefits: [
      "Pay-per-performance model eliminates wasted marketing spend",
      "Access to thousands of niche publishers and influencers",
      "Complete management of network platforms (Awin, Impact, etc.)",
      "Detailed reporting on publisher performance and attribution",
      "Strategic commission structuring for maximum profitability",
      "Automated payout and compliance management systems",
      "Continuous recruitment of top-performing affiliate partners",
    ],
    details: "Affiliate marketing is the ultimate performance-based channel. We act as the bridge between your brand (the Advertiser) and a global network of Publishers. We handle everything from the initial network setup and technical integration to daily publisher communication and creative asset management. Our goal is to create a self-sustaining revenue engine that scales with your business.",
    process: [
      "Network selection and technical platform integration",
      "Program policy development and commission strategy",
      "Active publisher recruitment and vetting process",
      "Creative asset production (banners, deep links, feeds)",
      "Daily program management and performance optimization",
      "Fraud monitoring and payout reconciliation",
    ],
    timeframe: "4-6 weeks for initial program launch",
    pricing: "Starting at $2,500/month + network fees",
    techStack: {
      categories: ["Networks", "Tracking", "Analytics", "Communication"],
      technologies: {
        Networks: [
          { name: "Awin", icon: "🌐", description: "Global affiliate network management" },
          { name: "Impact.com", icon: "🚀", description: "Partnership automation platform" },
          { name: "ShareASale", icon: "🤝", description: "Mid-market affiliate growth" },
        ],
        Tracking: [
          { name: "Impact Radius", icon: "📊", description: "Multi-touch attribution tracking" },
          { name: "Post Affiliate Pro", icon: "🛡️", description: "Custom affiliate tracking systems" },
        ],
        Analytics: [
          { name: "Affluent", icon: "📈", description: "Unified affiliate data dashboard" },
          { name: "Google Analytics 4", icon: "📊", description: "E-commerce conversion tracking" },
        ],
        Communication: [
          { name: "Slack", icon: "💬", description: "Direct publisher communication" },
          { name: "Mailchimp", icon: "📧", description: "Affiliate newsletter automation" },
        ],
      },
    },
    guarantee: "First 50 Managed Sales Guarantee",
  },
  {
    id: 11,
    slug: "deployment-automations",
    title: "Deployment & Automations",
    description: "Streamline your release cycles and automate repetitive tasks with enterprise-grade CI/CD and DevOps solutions",
    metaTitle: "DevOps & Automation Services | High-Performance CI/CD Solutions",
    metaDescription: "Accelerate your development with automated deployments, CI/CD pipelines, and infrastructure as code. Reduce errors and scale faster.",
    icon: Zap,
    color: "#2D847B",
    hook: "Human Error is the #1 Cause of Downtime. Automate the Risk Away.",
    painPoints: [
      "Manual deployments are slow, risky, and prone to human error",
      "Developers spend more time managing servers than writing code",
      "Your infrastructure is a 'black box' that nobody knows how to scale",
      "Lack of consistent staging and testing environments leads to production bugs"
    ],
    agitation: "High-performing DevOps teams successfully deploy 208x more frequently and have a 7x lower change failure rate. If you're still deploying manually, you're not just slow—you're dangerous to your own uptime and scalability.",
    solution: "We architect 'Zero-Touch' deployment pipelines and automated infrastructure that scales with a single line of code. By implementing robust CI/CD, Infrastructure as Code (IaC), and automated testing, we empower your team to ship faster and sleep better.",
    proof: [
      { metric: "85%", description: "Reduction in manual deployment time and overhead" },
      { metric: "<5 min", description: "Average time from code commit to staging deployment" },
      { metric: "Zero", description: "Downtime achieved during major production migrations" }
    ],
    faqs: [
      { question: "Do you support AWS/Google Cloud/Azure?", answer: "Yes, we are platform-agnostic and have deep expertise across all major cloud providers and local infrastructure." },
      { question: "What is Infrastructure as Code (IaC)?", answer: "It's the process of managing and provisioning your servers through machine-readable definition files (like Terraform), rather than manual configuration." },
      { question: "How does automation improve security?", answer: "Automation removes the chance of misconfigured security groups or 'shadow IT', ensuring every environment follows strict, audited policies." }
    ],
    domainExpertise: [
      { name: "SaaS", icon: Monitor, description: "Scalable cloud-native architectures" },
      { name: "Fintech", icon: DollarSign, description: "Secure, audited deployment pipelines" },
      { name: "eCommerce", icon: ShoppingCart, description: "High-traffic auto-scaling systems" },
      { name: "Enterprise", icon: Building, description: "Legacy system modernization and automation" },
    ],
    benefits: [
      "Rapid release cycles that outpace your competition",
      "Drastic reduction in production bugs and deployment failures",
      "Auto-scaling infrastructure that handles traffic spikes gracefully",
      "Lower operational costs through resource optimization",
      "Audit-ready security and compliance by design",
      "Consistent environments across Dev, Staging, and Production",
      "Improved developer productivity and happiness",
    ],
    details: "Modern engineering requires more than just code—it requires a robust delivery engine. We help you transition from manual, fragile processes to automated, resilient systems. Whether you're looking to migrate to the cloud, implement CI/CD for the first time, or optimize your existing DevOps stack, our team provides the architectural expertise to make it happen.",
    process: [
      "Infrastructure audit and bottleneck identification",
      "CI/CD pipeline design and security hardening",
      "Infrastructure as Code (Terraform/CloudFormation) implementation",
      "Automated testing and monitoring integration",
      "Migration and zero-downtime deployment setup",
      "Team training and documentation handoff",
    ],
    timeframe: "4-8 weeks for core infrastructure automation",
    pricing: "Starting at $3,500/month or Project-based",
    techStack: {
      categories: ["Cloud", "CI/CD", "Automation", "Monitoring"],
      technologies: {
        Cloud: [
          { name: "AWS", icon: "☁️", description: "Scalable cloud infrastructure" },
          { name: "Google Cloud", icon: "🌐", description: "Advanced data and compute tools" },
          { name: "Azure", icon: "💎", description: "Enterprise cloud solutions" },
        ],
        "CI/CD": [
          { name: "GitHub Actions", icon: "🚀", description: "Automated test & deploy pipelines" },
          { name: "GitLab CI", icon: "🦊", description: "Integrated DevOps lifecycle" },
          { name: "Jenkins", icon: "👔", description: "Extensible automation server" },
        ],
        Automation: [
          { name: "Terraform", icon: "🏗️", description: "Infrastructure as Code (IaC)" },
          { name: "Docker & K8s", icon: "🐳", description: "Container orchestration" },
          { name: "Ansible", icon: "🤖", description: "Configuration management" },
        ],
        Monitoring: [
          { name: "Datadog", icon: "🐕", description: "Full-stack observability" },
          { name: "Prometheus", icon: "🔥", description: "Metrics and alerting" },
          { name: "New Relic", icon: "📈", description: "Application performance monitoring" },
        ],
      },
    },
    guarantee: "Unlimited Infrastructure Support for 90 Days",
  },
  {
    id: 12,
    slug: "cms-ecommerce",
    title: "CMS & E-commerce",
    description: "Launch high-converting Shopify and WordPress experiences with custom-crafted themes and elite performance optimization",
    metaTitle: "Shopify & WordPress Experts | Custom Themes & E-commerce Solutions",
    metaDescription: "Elevate your online presence with expert Shopify and WordPress development. Custom themes, deep customization, and speed optimization that drives sales.",
    icon: ShoppingCart,
    color: "#3FA69B",
    hook: "Generic Templates Kill Conversion. Your Brand Deserves a Custom Engine.",
    painPoints: [
      "Your store looks exactly like your competitors' because of a generic theme",
      "The site is slow, glitchy, and frustrating for mobile shoppers",
      "You're limited by 'off-the-shelf' features that don't fit your workflow",
      "Poor performance and SEO are costing you thousands in lost sales daily"
    ],
    agitation: "A 100ms delay in website load time can hurt conversion rates by 7%. If your Shopify or WordPress site is bogged down by heavy templates and redundant apps, you're not just losing speed—you're handing your customers to the competition.",
    solution: "We build lightweight, high-performance 'Nex-Gen' engines for Shopify and WordPress. From bespoke Liquid/PHP theme development to surgical speed optimization and advanced API integrations, we turn CMS platforms into powerful growth machines tailored specifically to your brand.",
    proof: [
      { metric: "95+", description: "Average Google PageSpeed/Lighthouse score achieved" },
      { metric: "2x", description: "Average increase in mobile conversion rates for refreshed stores" },
      { metric: "300+", description: "Custom Shopify sections and WordPress blocks developed" }
    ],
    faqs: [
      { question: "Can you migrate my existing store?", answer: "Yes, we handle seamless migrations from any platform to Shopify or WordPress while preserving all SEO juice and customer data." },
      { question: "Do you build custom themes from scratch?", answer: "Absolutely. We avoid heavy bloated themes and build lightweight, custom-coded solutions that give you total creative control." },
      { question: "How do you improve speed?", answer: "We use surgical optimization: image compression, code minification, app/plugin auditing, and advanced caching strategies to ensure sub-second loads." }
    ],
    domainExpertise: [
      { name: "eCommerce", icon: ShoppingCart, description: "Shopify Plus and headless Shopify solutions" },
      { name: "Publishing", icon: Layers, description: "High-traffic WordPress news and content hubs" },
      { name: "Luxury Brands", icon: Palette, description: "Premium, pixel-perfect visual experiences" },
      { name: "B2B", icon: Building, description: "Complex catalog management and wholesale portals" },
    ],
    benefits: [
      "Bespoke theme design that commands attention and trust",
      "Lightning-fast load times that satisfy both users and Google",
      "Total control over features with custom plugins and apps",
      "Mobile-first checkout experiences that maximize ROI",
      "Scalable infrastructure that handles massive holiday traffic spikes",
      "Deep SEO integration for better organic ranking and visibility",
      "Intuitive admin controls customized for your internal team",
    ],
    details: "Shopify and WordPress are powerful, but only when used correctly. Most businesses get stuck with slow, generic themes that hinder growth. We break those limits by providing expert engineering on top of these world-class platforms. Whether you need a high-end Shopify Plus store or a lightning-fast WordPress experience, our focus is on performance, conversion, and surgical customization.",
    process: [
      "Platform audit and competitive UX research",
      "Custom UI/UX design and interactive prototyping",
      "Bespoke theme development (Shopify Liquid / WordPress PHP)",
      "App/Plugin integration and automation setup",
      "Surgical performance and SEO optimization",
      "Final migration, QA, and high-impact launch",
    ],
    timeframe: "4-10 weeks for full custom implementations",
    pricing: "Starting at $4,500",
    techStack: {
      categories: ["Platforms", "Frontend", "Optimization", "Integrations"],
      technologies: {
        Platforms: [
          { name: "Shopify PLUS", icon: "🛍️", description: "Enterprise E-commerce power" },
          { name: "WordPress", icon: "🌐", description: "World-leading CMS flexibility" },
          { name: "WooCommerce", icon: "🛒", description: "Integrated WP commerce" },
        ],
        Frontend: [
          { name: "Liquid", icon: "💧", description: "Shopify's powerful templating engine" },
          { name: "PHP / Gutenberg", icon: "🐘", description: "Modern WordPress development" },
          { name: "Tailwind CSS", icon: "🎨", description: "Utility-first performance styling" },
        ],
        Optimization: [
          { name: "Core Web Vitals", icon: "⚡", description: "Google-aligned speed metrics" },
          { name: "Cloudflare", icon: "☁️", description: "Advanced CDN and security" },
          { name: "WP Rocket / Nitro", icon: "🚀", description: "Surgical caching solutions" },
        ],
        Integrations: [
          { name: "Klaviyo", icon: "📧", description: "Retention marketing automation" },
          { name: "Recharge", icon: "🔄", description: "Subscription revenue systems" },
          { name: "Zapier", icon: "🔌", description: "Cross-platform data automation" },
        ],
      },
    },
    guarantee: "100% Speed & Mobile-Ready Guarantee",
  },
];

export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: {
    name: string;
    role: string;
    image?: any;
  };
  category: string;
  readTime: string;
  image: string;
  content: string[]; // Array of strings to handle paragraphs
  tags: string[];
}

export const BlogData: BlogPost[] = [
  {
    id: 1,
    slug: "scaling-your-saas-with-devops",
    title: "How DevOps Can 10x Your SaaS Development Speed",
    excerpt: "Discover the hidden bottlenecks in your development cycle and how automated CI/CD pipelines can transform your engineering velocity.",
    date: "Jan 28, 2026",
    author: {
      name: "Anas",
      role: "Lead Engineer",
      image: anas
    },
    category: "Engineering",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200",
    tags: ["DevOps", "CI/CD", "AWS", "Automation"],
    content: [
      "In the competitive world of SaaS, speed is your greatest asset. But for many companies, the deployment process is a manual, fragile mess that causes more downtime than innovation.",
      "DevOps isn't just a set of tools—it's a culture of automation. By implementing robust CI/CD (Continuous Integration and Continuous Deployment) pipelines, we've seen teams go from weekly deployments to shipping 20+ times a day without breaking a sweat.",
      "The first pillar of this transformation is Infrastructure as Code (IaC). Using tools like Terraform, we define your cloud environment in code, making it reproducible, version-controlled, and instantly scalable.",
      "Combined with automated testing and monitoring, your team can focus on what matters: building features that your customers love, rather than babysitting servers."
    ]
  },
  {
    id: 2,
    slug: "modern-seo-strategies-2026",
    title: "SEO in 2026: Why Quality Content Wins Over Hacks",
    excerpt: "Search engines have evolved. Learn why high-intent, strategic content is now the only way to dominate the search rankings.",
    date: "Jan 25, 2026",
    author: {
      name: "Nexflow Team",
      role: "Growth Strategy",
    },
    category: "Marketing",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&q=80&w=1200",
    tags: ["SEO", "Content Marketing", "Strategy"],
    content: [
      "The days of keyword stuffing and backlink spam are long gone. Search engines now prioritize one thing above all else: User Intent.",
      "Modern SEO is about creating content that actually solves a problem for your visitor. This means deeper research, better data, and more engaging storytelling.",
      "We focus on 'Topical Authority'—building clusters of content that signal to search engines that you are the absolute expert in your niche. This approach not only drives traffic but builds trust before the user even clicks your CTA.",
      "Technical SEO remains the foundation (speed, mobile-readiness, schema markup), but content is the engine that drives your organic growth."
    ]
  },
  {
    id: 3,
    slug: "shopify-custom-themes-vs-market",
    title: "Custom Shopify Themes: Why Templates Are Costing You Sales",
    excerpt: "Find out why generic Shopify templates might be the silent killer of your e-commerce growth and how bespoke themes drive ROI.",
    date: "Jan 22, 2026",
    author: {
      name: "Nexflow Design",
      role: "UI/UX Specialist",
    },
    category: "E-commerce",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1200",
    tags: ["Shopify", "E-commerce", "Conversion", "UX"],
    content: [
      "Generic templates are built to be everything to everyone. The result? Massive code bloat that slows down your store and a visual identity that looks just like your competitors.",
      "A custom Shopify theme is built with surgical precision. We code only what you need, ensuring lightning-fast load times and a user interface designed specifically for your target audience.",
      "When we build bespoke themes, we focus on the checkout journey. Every pixel is optimized to reduce friction and encourage that final click. The result isn't just a better-looking store—it's a significant boost in your bottom line.",
      "By leveraging Shopify Plus features and advanced Liquid customization, we empower your brand to scale without the technical limits of off-the-shelf themes."
    ]
  }
];
