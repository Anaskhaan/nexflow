import bellClinix from "../../assets/bellclinix-logo.svg";
import swiftTakeoffs from "../../assets/swift-logo.webp";
import paradisePipes from "../../assets/paradise-logo.svg";
import a from "../../assets/Bellclinix-mobile.webp";
import b from "../../assets/bellclinix-combine.webp";
import c from "../../assets/bellclinix-laptop1.webp";
import d from "../../assets/bellclinix-laptop.webp";
import mobile from "../../assets/paradise-mobile.webp";
import combine from "../../assets/paradise-combine.webp";
import paradise1 from "../../assets/paradise-1.webp";
import paradise2 from "../../assets/paradise-2.webp";
import swift from "../../assets/swift-mobile.webp";
import swift2 from "../../assets/swift-combine.webp";
import swift3 from "../../assets/swift-laptop.webp";
import swift4 from "../../assets/swift-laptop2.webp";
import BellClinix from "../../assets/bellclinix-logo.svg";
import SwiftTakeoffs from "../../assets/swift-logo.webp";
import ParadisePipe from "../../assets/paradise-logo.svg";
import { Icons } from "../../assets/Icons";
import { IMAGES } from "../../assets/Images";
// import logo from "../assets/logo.svg";

export const navLinks = [
  { id: 1, title: "Home", href: "/" },
  { id: 2, title: "About", href: "/About" },
  {
    id: 3,
    title: "Services",
    href: "/Services",
    submenu: [
      { id: "s1", title: "Web Development", href: "/services/web-development" },
      { id: "s2", title: "App Development", href: "/services/app-development" },
      { id: "s3", title: "UI/UX Design", href: "/services/ui-ux-designing" },
      { id: "s4", title: "Branding", href: "/services/branding" },
      {
        id: "s5",
        title: "SEO Optimization",
        href: "/services/seo-optimization",
      },
      {
        id: "s6",
        title: "ASO Optimization",
        href: "/services/app-store-optimization",
      },
      {
        id: "s7",
        title: "Social Media Marketing",
        href: "/services/social-media-marketing",
      },
      { id: "s8", title: "PPC Campaigns", href: "/services/ppc-campaigns" },
      {
        id: "s9",
        title: "AI Image Processing",
        href: "/services/ai-image-processing",
      },
    ],
  },
  { id: 4, title: "Portfolio", href: "/Portfolio" },
  {
    id: 5,
    title: "Resources",
    href: "/Resources",
    submenu: [
      { id: "c1", title: "Calculate ROI", href: "/SaasRoi" },
      { id: "c2", title: "Analyze Funnel", href: "/FunnelAudit" },
    ],
  },
  { id: 6, title: "Contact", href: "/Contact" },
];

export const contactInfo = [
  {
    icon: <Icons.Phone size={20} />,
    title: "Phone",
    value: "+1 (678) 825 6967",
    link: "tel:+16788256967",
  },
  {
    icon: <Icons.Mail size={20} />,
    title: "Email",
    value: "info@nexflow.tech",
    link: "mailto:info@nexflow.tech",
  },
  {
    icon: <Icons.MapPin size={20} />,
    title: "Address",
    value: "8 The Green #6092 Dover, DE, 19901",
    link: "https://maps.google.com",
  },
];

export const resources = [
  {
    title: "SaaS ROI Calculator",
    description: "Measure your software investment returns with precision",
    icon: <Icons.Calculator className="text-[#3ea69b]" size={32} />,
    cta: "Calculate ROI",
    href: "/SaasRoi",
    accent: "from-[#3ea69b]/10 to-[#3ea69b]/5",
  },
  {
    title: "Funnel Audit",
    description: "Discover leaks in your conversion pipeline",
    icon: <Icons.BarChart2 className="text-[#3f4e58]" size={32} />,
    cta: "Analyze Funnel",
    href: "/FunnelAudit",
    accent: "from-[#3f4e58]/10 to-[#3f4e58]/5",
  },
];

export const testimonialData = [
  {
    id: 1,
    name: "Zain Ul Abedin",
    company: "Swift Takeoffs Inc.",
    quote:
      "NexFlow Technologies has been instrumental in elevating our digital presence. Their work on our website, SEO, SMM, and paid media was strategic, efficient, and results-driven. We saw a clear boost in traffic, engagement, and qualified leads. Highly professional team — reliable, responsive, and truly aligned with our business goals.",
    role: "Founder & CEO",
  },
  {
    id: 2,
    name: "Dr Khan",
    company: "BellClinix",
    quote:
      "Working with NexFlow Technologies has been a game-changer for The Bell Clinix. Their expertise in website development, SEO, social media, and paid advertising helped us build a strong digital presence and connect with more patients. They're strategic, reliable, and deeply understand the dynamics of healthcare marketing.",
    role: "Founder",
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    company: "Paradise Pipes",
    quote:
      "NexFlow Technologies transformed our vision into a sleek, modern website with exceptional UI/UX. Their development team delivered a fast, functional, and visually impressive platform that truly reflects our brand. Professional, efficient, and design-focused — highly recommended.",
    role: "Marketing Director",
  },
];

export const stats = [
  {
    id: 1,
    value: "93%",
    label: "Client Retention",
    icon: <Icons.Users size={24} />,
  },
  {
    id: 2,
    value: "287%",
    label: "Average ROI",
    icon: <Icons.TrendingUp size={24} />,
  },
  { id: 3, value: "24/7", label: "Support", icon: <Icons.Clock size={24} /> },
  {
    id: 4,
    value: "500+",
    label: "Projects Completed",
    icon: <Icons.Award size={24} />,
  },
];

export const domains = [
  {
    name: "eCommerce",
    icon: Icons.ShoppingCart,
    color: "#3FA69B",
  },
  {
    name: "Fintech",
    icon: Icons.DollarSign,
    color: "#36958B",
  },
  {
    name: "Healthcare",
    icon: Icons.Heart,
    color: "#2D847B",
  },
  {
    name: "Education",
    icon: Icons.GraduationCap,
    color: "#3FA69B",
  },
  {
    name: "Social Networking",
    icon: Icons.Users,
    color: "#36958B",
  },
  {
    name: "Hospitality",
    icon: Icons.UtensilsCrossed,
    color: "#2D847B",
  },
  {
    name: "Entertainment",
    icon: Icons.Clapperboard,
    color: "#3FA69B",
  },
  {
    name: "Government",
    icon: Icons.Building,
    color: "#36958B",
  },
  {
    name: "Real Estate",
    icon: Icons.Home,
    color: "#2D847B",
  },
  {
    name: "Business",
    icon: Icons.Briefcase,
    color: "#3FA69B",
  },
  {
    name: "Logistics",
    icon: Icons.Truck,
    color: "#36958B",
  },
  {
    name: "Tech & IT",
    icon: Icons.Monitor,
    color: "#2D847B",
  },
  {
    name: "Non-Profit",
    icon: Icons.Shield,
    color: "#3FA69B",
  },
  {
    name: "Automotive",
    icon: Icons.Car,
    color: "#36958B",
  },
  {
    name: "Travel & Tourism",
    icon: Icons.MapPin,
    color: "#2D847B",
  },
];

export const portfolioData = [
  {
    id: 1,
    slug: "bell-clinix",
    title: "BellClinix",
    website: "bellclinix.com",
    category: "Healthcare",
    image: BellClinix,
    services: ["Web Dev", "SEO", "PPC"],
    results: [
      { label: "Traffic", value: "3.2x" },
      { label: "Leads", value: "210%" },
      { label: "ROI", value: "5.1x" },
    ],
    highlights: [
      "Elevated with HIPAA-compliant responsive design",
      "Ranked #1 for 15+ medical keywords",
      "Optimized lead gen with 28% PPC conversion",
    ],
  },
  {
    id: 2,
    slug: "swift-takeoffs",
    title: "SwiftTakeoffs",
    website: "swifttakeoffs.com",
    category: "Estimating Agency",
    image: SwiftTakeoffs,
    services: ["Web Dev", "SEO", "PPC"],
    results: [
      { label: "Revenue", value: "320%" },
      { label: "Traffic", value: "4.8x" },
      { label: "ROAS", value: "6.3x" },
    ],
    highlights: [
      "Elevated e-commerce platform with 42% lower abandonment",
      "Ranked top 3 for aviation equipment keywords",
      "Optimized $50k/month PPC with 650% return",
    ],
  },
  {
    id: 3,
    slug: "paradise-pipes",
    title: "Paradise Pipes",
    website: "paradisepipes.com",
    category: "Luxury Retail",
    image: ParadisePipe,
    services: ["Web Dev", "SEO", "PPC"],
    results: [
      { label: "Leads", value: "180%" },
      { label: "Traffic", value: "2.7x" },
      { label: "ROI", value: "4.5x" },
    ],
    highlights: [
      "Elevated with award-winning luxury web design",
      "Ranked for 120+ plumbing keywords nationally",
      "Optimized PPC with 22% CTR luxury audience",
    ],
  },
];

export const features = [
  {
    icon: Icons.Award,
    title: "Award-Winning",
    description: "Recognized for creative campaigns that drive results.",
    color: "from-[var(--main-theme-color)] to-[#2D7E74]",
  },
  {
    icon: Icons.BarChart,
    title: "Data-Driven",
    description: "Campaigns crafted with real insights for real ROI.",
    color: "from-purple-500 to-indigo-600",
  },
  {
    icon: Icons.Users,
    title: "Expert Team",
    description: "Top-tier talent with deep industry experience.",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: Icons.Zap,
    title: "Rapid Launch",
    description: "Fast execution to capitalize on market timing.",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: Icons.Sparkles,
    title: "Innovation",
    description: "Constantly evolving to keep you ahead.",
    color: "from-blue-400 to-cyan-500",
  },
  {
    icon: Icons.Target,
    title: "Precise Targeting",
    description: "Laser-focused segmentation for max efficiency.",
    color: "from-violet-500 to-purple-600",
  },
];

export const mainportfolioData = [
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
      palette: [
        "#000F14",
        "#0030D0",
        "#1C45DB",
        "#F7F7F7",
        "#15116B",
        "#442098",
        "#53CEF4",
      ],
      primaryFont: {
        weight: "700",
        label: "Plus Jakarta Sans",
      },
      secondaryFont: {
        weight: "300",
        label: "Plus Jakarta Sans",
      },
    },
    projectDetails:
      "We designed and developed the complete brand identity and website for BellClinix.com, delivering a modern, user-friendly experience that reflects their commitment to advanced healthcare solutions. From visual branding to responsive web design, our team ensured a seamless digital presence aligned with their vision.",
    features: [
      "Responsive patient-first design",
      "Integrated appointment booking system",
      "HIPAA-compliant patient portal",
      "Service catalog with detailed descriptions",
    ],
    mobileResponsivenessImage:
      "https://source.unsplash.com/featured/?mobile,healthcare",
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
    images2: [swift2, swift3, swift4], // Placeholder or add actual images
    typographyColorScheme: {
      palette: [
        "#1B1B1F",
        "#2F80ED",
        "#56CCF2",
        "#F2F2F2",
        "#333333",
        "#4F4F4F",
        "#828282",
      ],
      primaryFont: {
        weight: "600",
        label: "Inter",
      },
      secondaryFont: {
        weight: "400",
        label: "Inter",
      },
    },
    projectDetails:
      "We built SwiftTakeoffs.com from the ground up, incorporating features to support fast, accurate construction takeoff services. With a dynamic interface and robust functionality, the platform enhances the project estimation process for contractors and developers alike.",
    features: [
      "Dynamic flight scheduling system",
      "Interactive map integration",
      "Customer account management",
      "Responsive booking experience",
    ],
    mobileResponsivenessImage:
      "https://source.unsplash.com/featured/?mobile,aviation",
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
    images2: [combine, paradise1, paradise2], // Placeholder or add actual images
    typographyColorScheme: {
      palette: [
        "#202124",
        "#FF6F00",
        "#FFD600",
        "#FFFFFF",
        "#757575",
        "#424242",
        "#BDBDBD",
      ],
      primaryFont: {
        weight: "700",
        label: "Montserrat",
      },
      secondaryFont: {
        weight: "300",
        label: "Montserrat",
      },
    },
    projectDetails:
      "We developed ParadisePipes.com with an emphasis on their industrial product line, showcasing their pipes and fittings catalog effectively. The brand identity and digital presence were refined to communicate trust and industry relevance.",
    features: [
      "Custom product filtering system",
      "Secure payment processing",
      "Customer reviews integration",
      "Mobile-first shopping experience",
    ],
    mobileResponsivenessImage:
      "https://source.unsplash.com/featured/?mobile,ecommerce",
  },
];
export const faqsData = [
  {
    question: "Why is digital marketing important for my business?",
    answer:
      "Digital marketing allows businesses to reach and engage with a wider audience, generate leads, drive website traffic, and increase brand visibility. It provides measurable results and enables businesses to adapt strategies based on insights.",
  },
  {
    question: "How can digital marketing help improve my website's visibility?",
    answer:
      "Digital marketing strategies such as SEO and paid advertising can help your website rank higher on search engines and attract more visitors.",
  },
  {
    question:
      "How long does it take to see results from digital marketing efforts?",
    answer:
      "The timeline varies depending on the strategy, but SEO may take months while paid advertising yields faster results.",
  },
  {
    question: "How do you measure the success of digital marketing campaigns?",
    answer:
      "Success can be measured by tracking KPIs like website traffic, conversion rates, and ROI through analytics tools.",
  },
  {
    question: "What digital marketing services does Nexflow offer?",
    answer:
      "Nexflow offers a comprehensive suite of digital marketing services including SEO, paid advertising, social media marketing, content marketing, email campaigns, and analytics reporting to help businesses achieve their marketing goals.",
  },
];

export // Footer Data
  const footerData = {
    company: {
      // logo,
      name: "Nexflow",
      description:
        "Empowering businesses with cutting-edge digital solutions and innovative marketing strategies to drive growth and success in the digital age.",
      socialLinks: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/company/nexflow-technologies/posts/?feedView=all",
          icon: <Icons.Linkedin size={18} />,
        },
        {
          name: "Facebook",
          url: "https://www.facebook.com/profile.php?id=61567677611133",
          icon: <Icons.Facebook size={18} />,
        },
        {
          name: "Instagram",
          url: "https://www.instagram.com/nexflowtechnologies/",
          icon: <Icons.Instagram size={18} />,
        },
      ],
    },
    links: [
      { id: 1, title: "Home", href: "/" },
      { id: 2, title: "About", href: "/about" },
      { id: 3, title: "Services", href: "/services" },
      { id: 4, title: "Contact", href: "/contact" },
      { id: 5, title: "Resources", href: "/resources" },
    ],
    services: [
      "SEO Optimization",
      "Social Media Marketing",
      "Content Creation",
      "Paid Advertising",
    ],
    contact: [
      {
        icon: <Icons.Mail size={18} className="text-[var(--main-theme-color)]" />,
        text: "info@nexflow.tech",
      },
      {
        icon: (
          <Icons.Phone size={18} className="text-[var(--main-theme-color)]" />
        ),
        text: "+1 (678) 825 6967",
      },
      {
        icon: (
          <Icons.MapPin size={18} className="text-[var(--main-theme-color)]" />
        ),
        text: { title: "USA", lines: ["8 The Green #6092", "Dover, DE, 19901"] },
      },
      {
        icon: (
          <Icons.MapPin size={18} className="text-[var(--main-theme-color)]" />
        ),
        text: {
          title: "Pakistan",
          lines: ["56-G, Gulberg III", "Lahore, Pakistan"],
        },
      },
    ],
    legalLinks: [
      { title: "Privacy Policy", url: "/PrivacyPolicy" },
      { title: "Terms of Service", url: "/Terms" },
      { title: "Cookies Policy", url: "/CookiesPolicy" },
    ],
  };

export const process = [
  {
    id: 1,
    title: "Discovery",
    description: "We analyze your business goals and market position",
  },
  {
    id: 2,
    title: "Strategy",
    description: "We create a tailored plan to achieve your objectives",
  },
  {
    id: 3,
    title: "Execution",
    description: "We implement campaigns across your chosen channels",
  },
  {
    id: 4,
    title: "Optimization",
    description: "We continuously refine for maximum performance",
  },
];

export const ServicesData = [
  {
    id: 1,
    slug: "social-media-marketing",
    title: "Social Media Marketing",
    description:
      "Grow your brand with engaging content, audience interaction, and data-driven strategies across top social platforms",
    metaTitle: "Top Social Media Marketing Agency | Boost Your Brand Online",
    metaDescription:
      "Partner with a leading social media marketing agency to enhance your online presence. Get expert strategies and tailored solutions to drive engagement and grow your brand.",
    icon: "Megaphone",
    // Add this inside your web-development service object (after techStack)
    domainExpertise: [
      {
        name: "eCommerce",
        icon: "ShoppingCart",
      },
      {
        name: "Fintech",
        icon: "DollarSign",
      },
      {
        name: "Healthcare",
        icon: "Heart",
      },
      {
        name: "Education",
        icon: "GraduationCap",
      },
      {
        name: "Real Estate",
        icon: "Home",
      },
      {
        name: "Business",
        icon: "Briefcase",
      },
    ],
    benefits: [
      "Increased brand visibility and engagement",
      "Targeted content for each platform and audience",
      "Stronger audience connections and loyalty",
      "Viral marketing and influencer collaborations",
      "Data-driven performance analysis and improvements",
    ],

    details:
      "Our NexFlow Agency offer specialized social media marketing services establish a strong presence on platforms like Facebook, Instagram, Twitter, LinkedIn, and TikTok. We create platform-specific content calendars, implement engagement strategies, and analyze competitors to position your brand effectively. Our team manages community interactions, develops viral campaigns, and provides detailed analytics to refine your social strategy for maximum impact.",
    process: [
      "Research audience, competitors, and trends to create a content plan.",
      "Design engaging posts, graphics, and videos tailored for each platform.",
      "Plan and publish content consistently for maximum reach.",
      "Engage with followers, respond to comments, and build relationships.",
      "Track results, adjust strategies, and optimize for better engagement.",
    ],
    timeframe: "Results typically visible within 30-90 days",
    pricing: "Starting at $1,200/month depending on platform coverage",
    // Add this to your ServicesData array - specifically in the web-development object

    techStack: {
      categories: ["Platforms", "Management", "Content"],
      technologies: {
        Platforms: [
          {
            name: "Meta Suite",
            icon: "https://www.vectorlogo.zone/logos/facebook/facebook-icon.svg",
            description: "Facebook & Instagram Management",
          },
          {
            name: "LinkedIn",
            icon: "https://www.vectorlogo.zone/logos/linkedin/linkedin-icon.svg",
            description: "B2B Professional Networking",
          },
          {
            name: "Twitter/X",
            icon: "https://www.vectorlogo.zone/logos/twitter/twitter-icon.svg",
            description: "Real-time Engagement",
          },
          {
            name: "TikTok",
            icon: "https://www.vectorlogo.zone/logos/tiktok/tiktok-icon.svg",
            description: "Short-form Video Trends",
          },
        ],
        Management: [
          {
            name: "Buffer",
            icon: "https://www.vectorlogo.zone/logos/buffer/buffer-icon.svg",
            description: "Social Media Scheduling",
          },
          {
            name: "Hootsuite",
            icon: "https://www.vectorlogo.zone/logos/hootsuite/hootsuite-icon.svg",
            description: "Social Stream Monitoring",
          },
          {
            name: "Sprout Social",
            icon: "https://www.vectorlogo.zone/logos/sproutsocial/sproutsocial-icon.svg",
            description: "Advanced Social Analytics",
          },
        ],
        Content: [
          {
            name: "Canva",
            icon: "https://www.vectorlogo.zone/logos/canva/canva-icon.svg",
            description: "Visual Content Creation",
          },
          {
            name: "CapCut",
            icon: "https://www.vectorlogo.zone/logos/capcut/capcut-icon.svg",
            description: "Mobile Video Editing",
          },
        ],
      },
    },
  },
  {
    id: 2,
    slug: "seo-optimization",
    title: "SEO Optimization",
    description:
      "Boost your website's ranking with keyword optimization, technical fixes, and high-quality backlinks.",
    metaTitle:
      "Trusted SEO Optimization Agency | Drive Organic Traffic & Results",
    metaDescription:
      "Partner with a top SEO optimization agency for customized solutions. Boost your rankings, increase traffic, and enhance your online presence with our proven strategies.",
    icon: "TrendingUp",
    // Add this inside your web-development service object (after techStack)
    domainExpertise: [
      {
        name: "eCommerce",
        icon: "ShoppingCart",

        description: "Online stores, payment gateways, inventory management",
      },
      {
        name: "Fintech",
        icon: "DollarSign",

        description: "Banking apps, payment systems, financial dashboards",
      },
      {
        name: "Healthcare",
        icon: "Heart",

        description: "Patient portals, telemedicine, healthcare management",
      },
      {
        name: "Education",
        icon: "GraduationCap",

        description:
          "Learning management systems, online courses, student portals",
      },
      {
        name: "Real Estate",
        icon: "Home",

        description: "Property listings, virtual tours, CRM systems",
      },
      {
        name: "Business",
        icon: "Briefcase",

        description:
          "Corporate websites, business automation, workflow systems",
      },
    ],
    benefits: [
      "Higher search engine rankings",
      "More organic traffic and leads",
      "Improved website performance and speed",
      "Sustainable, long-term growth",
      "Adapts to algorithm updates for consistency",
    ],

    details:
      "NexFlow provide SEO services drive sustainable growth by optimizing your website for higher rankings and visibility. We conduct in-depth technical audits, strategic keyword research, and competitor analysis to refine your SEO strategy. Our team enhances site architecture, improves page speed, and implements white-hat link-building techniques to boost credibility. With a focus on evergreen SEO practices, we ensure long-term success by adapting to algorithm changes while maintaining your ranking position.",
    process: [
      "Analyze website performance and research high-ranking keywords.",
      "Optimize content, meta tags, and internal linking for better ranking.",
      "Improve site speed, mobile-friendliness, and URL structures.",
      "Acquire high-quality backlinks to boost authority.",
      "Track performance and refine SEO strategies for long-term success.",
    ],
    timeframe:
      "Initial improvements in 2-3 months, significant results in 6-12 months",
    pricing:
      "Starting at $1,500/month based on site complexity and competition",
    // Add this to your ServicesData array - specifically in the web-development object

    techStack: {
      categories: ["Analysis", "Optimization", "Reporting"],
      technologies: {
        Analysis: [
          {
            name: "Ahrefs",
            icon: "https://www.vectorlogo.zone/logos/ahrefs/ahrefs-icon.svg",
            description: "Backlink & Keyword Research",
          },
          {
            name: "SEMrush",
            icon: "https://www.vectorlogo.zone/logos/semrush/semrush-icon.svg",
            description: "Market Analysis & SEO Toolkit",
          },
          {
            name: "Moz Pro",
            icon: "https://www.vectorlogo.zone/logos/moz/moz-icon.svg",
            description: "Domain Authority Tracking",
          },
        ],
        Optimization: [
          {
            name: "G Search Console",
            icon: "https://www.vectorlogo.zone/logos/google_search_console/google_search_console-icon.svg",
            description: "Search Performance Monitoring",
          },
          {
            name: "Screaming Frog",
            icon: "https://www.vectorlogo.zone/logos/screamingfrog/screamingfrog-icon.svg",
            description: "Technical SEO Auditing",
          },
          {
            name: "Yoast SEO",
            icon: "https://www.vectorlogo.zone/logos/yoast/yoast-icon.svg",
            description: "On-page Optimization Content",
          },
        ],
        Reporting: [
          {
            name: "Google Analytics",
            icon: "https://www.vectorlogo.zone/logos/google_analytics/google_analytics-icon.svg",
            description: "User Behavior Tracking",
          },
          {
            name: "Looker Studio",
            icon: "https://www.vectorlogo.zone/logos/google_looker_studio/google_looker_studio-icon.svg",
            description: "Data Visualization & Reports",
          },
        ],
      },
    },
  },
  {
    id: 3,
    slug: "web-development",
    title: "Web Development",
    description:
      "Build fast, responsive, and visually appealing websites optimized for user experience and conversions.",
    metaTitle: "Top Website Development Services | Build Your Online Presence",
    metaDescription:
      "Unlock the potential of your business with our web development services. From custom coding to full-site builds, we create responsive, high-performing websites designed to convert.",
    icon: "Globe",
    // Add this inside your web-development service object (after techStack)
    domainExpertise: [
      {
        name: "eCommerce",
        icon: "ShoppingCart",

        description: "Online stores, payment gateways, inventory management",
      },
      {
        name: "Fintech",
        icon: "DollarSign",

        description: "Banking apps, payment systems, financial dashboards",
      },
      {
        name: "Healthcare",
        icon: "Heart",

        description: "Patient portals, telemedicine, healthcare management",
      },
      {
        name: "Education",
        icon: "GraduationCap",

        description:
          "Learning management systems, online courses, student portals",
      },
      {
        name: "Real Estate",
        icon: "Home",

        description: "Property listings, virtual tours, CRM systems",
      },
      {
        name: "Business",
        icon: "Briefcase",

        description:
          "Corporate websites, business automation, workflow systems",
      },
    ],
    benefits: [
      "Mobile-friendly and fully responsive design",
      "Faster website speed and performance",
      "Seamless user experience for better engagement",
      "Custom designs tailored to brand identity",
      "SEO-friendly structure for better rankings",
    ],

    details:
      "NexFlow Dliver web development and design services create visually stunning, high-performing websites tailored to your brand's needs. We build responsive, user-friendly sites with optimized site architecture, fast loading speeds, and seamless navigation. Our SEO-driven approach ensures better search rankings, while our custom designs enhance user experience and engagement. From front-end aesthetics to back-end functionality, we craft websites that are both visually appealing and strategically optimized for long-term success.",
    process: [
      "Understand client needs, target audience, and brand vision.",
      "Create layout concepts and UI/UX design prototypes.",
      "Build the website using optimized and responsive coding practices",
      "Ensure cross-device compatibility, performance, and security.",
      "Deploy the website and provide ongoing support for updates.",
    ],
    timeframe: "4-12 weeks depending on project complexity",
    pricing: "Starting at $5,000 for custom websites",
    // Add this to your ServicesData array - specifically in the web-development object

    techStack: {
      categories: ["Frontend", "Backend", "Database", "Cloud"],
      technologies: {
        Frontend: [
          {
            name: "HTML",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
            description: "Markup language for web pages",
          },
          {
            name: "CSS",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
            description: "Styling and layout",
          },
          {
            name: "JavaScript",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
            description: "Interactive functionality",
          },
          {
            name: "React.js",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
            description: "Modern UI library",
          },
          {
            name: "Vue.js",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
            description: "Progressive framework",
          },
          {
            name: "Angular",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
            description: "Full-featured framework",
          },
          {
            name: "Next.js",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
            description: "React Framework",
          },
        ],
        Backend: [
          {
            name: "Node.js",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
            description: "JavaScript runtime",
          },
          {
            name: "Python",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
            description: "Versatile programming language",
          },
          {
            name: "PHP",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
            description: "Server-side scripting",
          },
          {
            name: "Java",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
            description: "Enterprise applications",
          },
          {
            name: "Express.js",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
            description: "Web framework",
          },
          {
            name: "Django",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
            description: "Python web framework",
          },
        ],
        Database: [
          {
            name: "MongoDB",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
            description: "NoSQL database",
          },
          {
            name: "MySQL",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
            description: "Relational database",
          },
          {
            name: "PostgreSQL",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
            description: "Advanced SQL database",
          },
          {
            name: "Redis",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
            description: "In-memory data store",
          },
          {
            name: "Firebase",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
            description: "Real-time database",
          },
          {
            name: "SQLite",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",
            description: "Lightweight database",
          },
        ],
        Cloud: [
          {
            name: "AWS",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
            description: "Cloud computing platform",
          },
          {
            name: "Google Cloud",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
            description: "Google's cloud services",
          },
          {
            name: "Azure",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
            description: "Microsoft cloud platform",
          },
          {
            name: "Docker",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
            description: "Containerization",
          },
          {
            name: "Netlify",
            icon: "https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg",
            description: "Static site hosting",
          },
          {
            name: "Vercel",
            icon: "https://www.vectorlogo.zone/logos/vercel/vercel-icon.svg",
            description: "Frontend deployment",
          },
        ],
      },
    },
  },

  {
    id: 5,
    slug: "branding",
    title: "Branding",
    description:
      "Develop a strong, memorable brand identity that builds trust and sets you apart from competitors.",
    metaTitle: "Top Branding Agency | Build & Elevate Your Brand Identity",
    metaDescription:
      "Partner with a leading branding agency to create a strong, unforgettable brand. Our tailored strategies help businesses grow, connect, and thrive in today’s competitive market.",
    icon: "Palette",
    // Add this inside your web-development service object (after techStack)
    domainExpertise: [
      {
        name: "eCommerce",
        icon: "ShoppingCart",

        description: "Online stores, payment gateways, inventory management",
      },
      {
        name: "Fintech",
        icon: "DollarSign",

        description: "Banking apps, payment systems, financial dashboards",
      },
      {
        name: "Healthcare",
        icon: "Heart",

        description: "Patient portals, telemedicine, healthcare management",
      },
      {
        name: "Education",
        icon: "GraduationCap",

        description:
          "Learning management systems, online courses, student portals",
      },
      {
        name: "Real Estate",
        icon: "Home",

        description: "Property listings, virtual tours, CRM systems",
      },
      {
        name: "Business",
        icon: "Briefcase",

        description:
          "Corporate websites, business automation, workflow systems",
      },
    ],
    benefits: [
      "Consistent and professional brand image",
      "Create a unique logo, color palette, and typography.",
      "Design marketing materials, packaging, and online assets.",
      "Develop a compelling brand story and tone of voice.",
      "Apply branding across all touchpoints for a unified presence.",
    ],

    details:
      "We create a unique and memorable identity for your business through logos, colors, and messaging that connect with your audience. Our branding strategies build trust, enhance recognition, and set you apart from competitors, ensuring a strong and lasting impact.",
    process: [
      "Define brand values, audience, and positioning.",
      "Brand strategy and positioning",
      "Visual identity development",
      "Brand guidelines and asset creation",
      "Implementation across touchpoints",
    ],
    timeframe: "4-8 weeks for complete brand development",
    pricing: "Starting at $3,500 for brand identity packages",
    // Add this to your ServicesData array - specifically in the web-development object

    techStack: {
      categories: ["Frontend", "Backend", "Database", "Cloud"],
      technologies: {
        Frontend: [
          {
            name: "HTML",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
            description: "Markup language for web pages",
          },
          {
            name: "CSS",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
            description: "Styling and layout",
          },
          {
            name: "JavaScript",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
            description: "Interactive functionality",
          },
          {
            name: "React.js",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
            description: "Modern UI library",
          },
          {
            name: "Vue.js",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
            description: "Progressive framework",
          },
          {
            name: "Angular",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
            description: "Full-featured framework",
          },
        ],
        Backend: [
          {
            name: "Node.js",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
            description: "JavaScript runtime",
          },
          {
            name: "Python",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
            description: "Versatile programming language",
          },
          {
            name: "PHP",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
            description: "Server-side scripting",
          },
          {
            name: "Java",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
            description: "Enterprise applications",
          },
          {
            name: "Express.js",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
            description: "Web framework",
          },
          {
            name: "Django",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
            description: "Python web framework",
          },
        ],
        Database: [
          {
            name: "MongoDB",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
            description: "NoSQL database",
          },
          {
            name: "MySQL",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
            description: "Relational database",
          },
          {
            name: "PostgreSQL",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
            description: "Advanced SQL database",
          },
          {
            name: "Redis",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
            description: "In-memory data store",
          },
          {
            name: "Firebase",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
            description: "Real-time database",
          },
          {
            name: "SQLite",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",
            description: "Lightweight database",
          },
        ],
        Cloud: [
          {
            name: "AWS",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
            description: "Cloud computing platform",
          },
          {
            name: "Google Cloud",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
            description: "Google's cloud services",
          },
          {
            name: "Azure",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
            description: "Microsoft cloud platform",
          },
          {
            name: "Docker",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
            description: "Containerization",
          },
          {
            name: "Netlify",
            icon: "https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg",
            description: "Static site hosting",
          },
          {
            name: "Vercel",
            icon: "https://www.vectorlogo.zone/logos/vercel/vercel-icon.svg",
            description: "Frontend deployment",
          },
        ],
      },
    },
  },
  {
    id: 6,
    slug: "ui-ux-designing",
    title: "UI/UX Designing",
    description:
      "Create user-friendly, attractive, and seamless digital experiences for better engagement and functionality.",
    metaTitle: "Expert UI and UX Design | Enhance User Experience & Interface",
    metaDescription:
      "Transform your digital presence with our UI UX design services. We craft user-centered, visually stunning designs that drive engagement and improve user satisfaction.",
    icon: "Layout",
    domainExpertise: [
      {
        name: "eCommerce",
        icon: "ShoppingCart",

        description: "Online stores, payment gateways, inventory management",
      },
      {
        name: "Fintech",
        icon: "DollarSign",

        description: "Banking apps, payment systems, financial dashboards",
      },
      {
        name: "Healthcare",
        icon: "Heart",

        description: "Patient portals, telemedicine, healthcare management",
      },
      {
        name: "Education",
        icon: "GraduationCap",

        description:
          "Learning management systems, online courses, student portals",
      },
      {
        name: "Real Estate",
        icon: "Home",

        description: "Property listings, virtual tours, CRM systems",
      },
      {
        name: "Business",
        icon: "Briefcase",

        description:
          "Corporate websites, business automation, workflow systems",
      },
    ],
    benefits: [
      "Intuitive and easy-to-navigate interfaces",
      "Better user engagement and retention",
      "Increased conversions with optimized layouts",
      "Mobile-responsive and accessible designs",
      "Enhances overall brand perception",
    ],

    details:
      "We design user-friendly, attractive, and easy-to-navigate interfaces that improve user experience. Our focus is on clean layouts, smooth interactions, and accessibility to make your website or app more engaging and functional.By prioritizing user behavior and accessibility, we deliver designs that not only look great but also improve functionality, boosting overall satisfaction and business success.",
    process: [
      "Study user behavior and needs to create a strategy.",
      "Develop low-fidelity and high-fidelity design layouts.",
      "Create visually appealing and consistent brand elements.",
      "Conduct tests to refine and improve user experience.",
      "Deliver optimized designs for development.",
    ],
    timeframe: "2-6 weeks depending on project scope",
    pricing: "Starting at $4,000 for complete UX/UI projects",
    // Add this to your ServicesData array - specifically in the web-development object

    techStack: {
      categories: ["Designing"],
      technologies: {
        Designing: [
          {
            name: "HTML",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
            description: "Markup language for web pages",
          },
          {
            name: "CSS",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
            description: "Styling and layout",
          },
          {
            name: "JavaScript",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
            description: "Interactive functionality",
          },
          {
            name: "React.js",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
            description: "Modern UI library",
          },
          {
            name: "Vue.js",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
            description: "Progressive framework",
          },
          {
            name: "Angular",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
            description: "Full-featured framework",
          },
        ],
        Backend: [
          {
            name: "Node.js",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
            description: "JavaScript runtime",
          },
          {
            name: "Python",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
            description: "Versatile programming language",
          },
          {
            name: "PHP",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
            description: "Server-side scripting",
          },
          {
            name: "Java",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
            description: "Enterprise applications",
          },
          {
            name: "Express.js",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
            description: "Web framework",
          },
          {
            name: "Django",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
            description: "Python web framework",
          },
        ],
        Database: [
          {
            name: "MongoDB",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
            description: "NoSQL database",
          },
          {
            name: "MySQL",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
            description: "Relational database",
          },
          {
            name: "PostgreSQL",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
            description: "Advanced SQL database",
          },
          {
            name: "Redis",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
            description: "In-memory data store",
          },
          {
            name: "Firebase",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
            description: "Real-time database",
          },
          {
            name: "SQLite",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",
            description: "Lightweight database",
          },
        ],
        Cloud: [
          {
            name: "AWS",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
            description: "Cloud computing platform",
          },
          {
            name: "Google Cloud",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
            description: "Google's cloud services",
          },
          {
            name: "Azure",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
            description: "Microsoft cloud platform",
          },
          {
            name: "Docker",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
            description: "Containerization",
          },
          {
            name: "Netlify",
            icon: "https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg",
            description: "Static site hosting",
          },
          {
            name: "Vercel",
            icon: "https://www.vectorlogo.zone/logos/vercel/vercel-icon.svg",
            description: "Frontend deployment",
          },
        ],
      },
    },
  },
  {
    id: 7,
    slug: "app-development",
    title: "App Development",
    description:
      "Create high-performance mobile applications with intuitive UX for iOS and Android platforms.",
    metaTitle:
      "Custom Mobile App Development | Tailored iOS & Android Solutions",
    metaDescription:
      "Get custom mobile app development services for iOS and Android. Our expert team builds high-performance, user-friendly apps that align with your business goals and enhance user engagement.",
    icon: "Smartphone",
    // Add this inside your web-development service object (after techStack)
    domainExpertise: [
      {
        name: "eCommerce",
        icon: "ShoppingCart",

        description: "Online stores, payment gateways, inventory management",
      },
      {
        name: "Fintech",
        icon: "DollarSign",

        description: "Banking apps, payment systems, financial dashboards",
      },
      {
        name: "Healthcare",
        icon: "Heart",

        description: "Patient portals, telemedicine, healthcare management",
      },
      {
        name: "Education",
        icon: "GraduationCap",

        description:
          "Learning management systems, online courses, student portals",
      },
      {
        name: "Real Estate",
        icon: "Home",

        description: "Property listings, virtual tours, CRM systems",
      },
      {
        name: "Business",
        icon: "Briefcase",

        description:
          "Corporate websites, business automation, workflow systems",
      },
    ],
    benefits: [
      "Cross-platform compatibility (iOS & Android)",
      "Optimized performance and fast loading",
      "Intuitive user interfaces",
      "Secure backend architecture",
      "Regular updates and maintenance",
    ],

    details:
      "We build custom mobile applications tailored to your business needs, using modern frameworks like React Native or Flutter for cross-platform development. Our apps feature clean code architecture, robust security, and seamless API integrations.",
    process: [
      "Requirement analysis and prototyping",
      "UI/UX design and development",
      "Backend development and API integration",
      "Quality assurance and testing",
      "Deployment and maintenance",
    ],
    timeframe: "8-16 weeks depending on complexity",
    pricing: "Starting at $15,000 for basic apps",
    // Add this to your ServicesData array - specifically in the web-development object

    techStack: {
      categories: ["Frontend", "Backend", "Database", "Cloud"],
      technologies: {
        Frontend: [
          {
            name: "HTML",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
            description: "Markup language for web pages",
          },
          {
            name: "CSS",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
            description: "Styling and layout",
          },
          {
            name: "JavaScript",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
            description: "Interactive functionality",
          },
          {
            name: "React.js",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
            description: "Modern UI library",
          },
          {
            name: "Vue.js",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
            description: "Progressive framework",
          },
          {
            name: "Angular",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
            description: "Full-featured framework",
          },
        ],
        Backend: [
          {
            name: "Node.js",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
            description: "JavaScript runtime",
          },
          {
            name: "Python",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
            description: "Versatile programming language",
          },
          {
            name: "PHP",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
            description: "Server-side scripting",
          },
          {
            name: "Java",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
            description: "Enterprise applications",
          },
          {
            name: "Express.js",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
            description: "Web framework",
          },
          {
            name: "Django",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
            description: "Python web framework",
          },
        ],
        Database: [
          {
            name: "MongoDB",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
            description: "NoSQL database",
          },
          {
            name: "MySQL",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
            description: "Relational database",
          },
          {
            name: "PostgreSQL",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
            description: "Advanced SQL database",
          },
          {
            name: "Redis",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
            description: "In-memory data store",
          },
          {
            name: "Firebase",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
            description: "Real-time database",
          },
          {
            name: "SQLite",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",
            description: "Lightweight database",
          },
        ],
        Cloud: [
          {
            name: "AWS",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
            description: "Cloud computing platform",
          },
          {
            name: "Google Cloud",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
            description: "Google's cloud services",
          },
          {
            name: "Azure",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
            description: "Microsoft cloud platform",
          },
          {
            name: "Docker",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
            description: "Containerization",
          },
          {
            name: "Netlify",
            icon: "https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg",
            description: "Static site hosting",
          },
          {
            name: "Vercel",
            icon: "https://www.vectorlogo.zone/logos/vercel/vercel-icon.svg",
            description: "Frontend deployment",
          },
        ],
      },
    },
  },
  {
    id: 8,
    slug: "ppc-campaigns",
    title: "PPC Campaigns",
    description:
      "Drive immediate traffic and conversions with precisely targeted pay-per-click advertising.",
    metaTitle:
      "Effective PPC Campaigns | Drive Targeted Traffic & Maximize ROI",
    metaDescription:
      "Boost your business with expertly managed PPC campaigns. We create targeted ads on Google, Bing, and social media to drive qualified traffic, increase conversions, and maximize your ROI.",
    icon: "MousePointerClick",
    // Add this inside your web-development service object (after techStack)
    domainExpertise: [
      {
        name: "eCommerce",
        icon: "ShoppingCart",

        description: "Online stores, payment gateways, inventory management",
      },
      {
        name: "Fintech",
        icon: "DollarSign",

        description: "Banking apps, payment systems, financial dashboards",
      },
      {
        name: "Healthcare",
        icon: "Heart",

        description: "Patient portals, telemedicine, healthcare management",
      },
      {
        name: "Education",
        icon: "GraduationCap",

        description:
          "Learning management systems, online courses, student portals",
      },
      {
        name: "Real Estate",
        icon: "Home",

        description: "Property listings, virtual tours, CRM systems",
      },
      {
        name: "Business",
        icon: "Briefcase",

        description:
          "Corporate websites, business automation, workflow systems",
      },
    ],
    benefits: [
      "Immediate visibility and traffic",
      "Highly targeted audience reach",
      "Full budget control and transparency",
      "Real-time performance tracking",
      "Scalable campaigns for growth",
    ],

    details:
      "We manage Google Ads, Microsoft Advertising, and social media PPC campaigns with strategic keyword targeting, ad copy optimization, and continuous A/B testing to maximize your advertising ROI.",
    process: [
      "Audience research and competitor analysis",
      "Keyword strategy and campaign setup",
      "Ad creative development and testing",
      "Daily monitoring and optimization",
      "Performance reporting and scaling",
    ],
    timeframe: "Campaigns launch within 5-7 days",
    pricing: "Starting at $1,000/month + ad spend",
    // Add this to your ServicesData array - specifically in the web-development object

    techStack: {
      categories: ["Frontend", "Backend", "Database", "Cloud"],
      technologies: {
        Frontend: [
          {
            name: "HTML",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
            description: "Markup language for web pages",
          },
          {
            name: "CSS",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
            description: "Styling and layout",
          },
          {
            name: "JavaScript",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
            description: "Interactive functionality",
          },
          {
            name: "React.js",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
            description: "Modern UI library",
          },
          {
            name: "Vue.js",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
            description: "Progressive framework",
          },
          {
            name: "Angular",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
            description: "Full-featured framework",
          },
        ],
        Backend: [
          {
            name: "Node.js",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
            description: "JavaScript runtime",
          },
          {
            name: "Python",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
            description: "Versatile programming language",
          },
          {
            name: "PHP",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
            description: "Server-side scripting",
          },
          {
            name: "Java",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
            description: "Enterprise applications",
          },
          {
            name: "Express.js",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
            description: "Web framework",
          },
          {
            name: "Django",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
            description: "Python web framework",
          },
        ],
        Database: [
          {
            name: "MongoDB",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
            description: "NoSQL database",
          },
          {
            name: "MySQL",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
            description: "Relational database",
          },
          {
            name: "PostgreSQL",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
            description: "Advanced SQL database",
          },
          {
            name: "Redis",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
            description: "In-memory data store",
          },
          {
            name: "Firebase",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
            description: "Real-time database",
          },
          {
            name: "SQLite",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",
            description: "Lightweight database",
          },
        ],
        Cloud: [
          {
            name: "AWS",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
            description: "Cloud computing platform",
          },
          {
            name: "Google Cloud",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
            description: "Google's cloud services",
          },
          {
            name: "Azure",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
            description: "Microsoft cloud platform",
          },
          {
            name: "Docker",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
            description: "Containerization",
          },
          {
            name: "Netlify",
            icon: "https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg",
            description: "Static site hosting",
          },
          {
            name: "Vercel",
            icon: "https://www.vectorlogo.zone/logos/vercel/vercel-icon.svg",
            description: "Frontend deployment",
          },
        ],
      },
    },
  },
  {
    id: 9,
    slug: "app-store-optimization",
    title: "App Store Optimization (ASO)",
    description:
      "Improve your mobile app's visibility and downloads in app stores.",
    metaTitle: "Top ASO Services | Improve App Visibility & Boost Downloads",
    metaDescription:
      "Maximize your app’s potential with expert ASO services. We optimize your app for better visibility, higher rankings, and increased downloads on the App Store and Google Play.",
    icon: "Smartphone",
    // Add this inside your web-development service object (after techStack)
    domainExpertise: [
      {
        name: "eCommerce",
        icon: "ShoppingCart",

        description: "Online stores, payment gateways, inventory management",
      },
      {
        name: "Fintech",
        icon: "DollarSign",

        description: "Banking apps, payment systems, financial dashboards",
      },
      {
        name: "Healthcare",
        icon: "Heart",

        description: "Patient portals, telemedicine, healthcare management",
      },
      {
        name: "Education",
        icon: "GraduationCap",

        description:
          "Learning management systems, online courses, student portals",
      },
      {
        name: "Real Estate",
        icon: "Home",

        description: "Property listings, virtual tours, CRM systems",
      },
      {
        name: "Business",
        icon: "Briefcase",

        description:
          "Corporate websites, business automation, workflow systems",
      },
    ],
    benefits: [
      "Higher app store rankings",
      "Increased organic downloads",
      "Better conversion rates",
      "Improved app visibility",
      "Competitive advantage in store searches",
    ],

    details:
      "We optimize your app's metadata, keywords, screenshots, and descriptions to maximize visibility in the Apple App Store and Google Play Store, helping you acquire more organic users.",
    process: [
      "Competitor and keyword research",
      "Title, subtitle and description optimization",
      "Screenshot and video asset optimization",
      "Review and rating management",
      "Continuous performance monitoring",
    ],
    timeframe: "Initial improvements visible in 2-4 weeks",
    pricing: "Starting at $800/month",
    // Add this to your ServicesData array - specifically in the web-development object

    techStack: {
      categories: ["ASO"],
      technologies: {
        ASO: [
          {
            name: "HTML",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
            description: "Markup language for web pages",
          },
          {
            name: "CSS",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
            description: "Styling and layout",
          },
          {
            name: "JavaScript",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
            description: "Interactive functionality",
          },
          {
            name: "React.js",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
            description: "Modern UI library",
          },
          {
            name: "Vue.js",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
            description: "Progressive framework",
          },
          {
            name: "Angular",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
            description: "Full-featured framework",
          },
        ],
        Backend: [
          {
            name: "Node.js",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
            description: "JavaScript runtime",
          },
          {
            name: "Python",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
            description: "Versatile programming language",
          },
          {
            name: "PHP",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
            description: "Server-side scripting",
          },
          {
            name: "Java",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
            description: "Enterprise applications",
          },
          {
            name: "Express.js",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
            description: "Web framework",
          },
          {
            name: "Django",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
            description: "Python web framework",
          },
        ],
        Database: [
          {
            name: "MongoDB",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
            description: "NoSQL database",
          },
          {
            name: "MySQL",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
            description: "Relational database",
          },
          {
            name: "PostgreSQL",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
            description: "Advanced SQL database",
          },
          {
            name: "Redis",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
            description: "In-memory data store",
          },
          {
            name: "Firebase",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
            description: "Real-time database",
          },
          {
            name: "SQLite",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",
            description: "Lightweight database",
          },
        ],
        Cloud: [
          {
            name: "AWS",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
            description: "Cloud computing platform",
          },
          {
            name: "Google Cloud",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
            description: "Google's cloud services",
          },
          {
            name: "Azure",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
            description: "Microsoft cloud platform",
          },
          {
            name: "Docker",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
            description: "Containerization",
          },
          {
            name: "Netlify",
            icon: "https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg",
            description: "Static site hosting",
          },
          {
            name: "Vercel",
            icon: "https://www.vectorlogo.zone/logos/vercel/vercel-icon.svg",
            description: "Frontend deployment",
          },
        ],
      },
    },
  },
  {
    id: 10,
    slug: "ai-image-processing",
    title: "AI Image Processing",
    description:
      "Implement computer vision solutions for image recognition, analysis and enhancement.",
    metaTitle:
      "AI Image Processing for Model Training | Enhance NLP & AI Models",
    metaDescription:
      "Boost your AI and NLP model training with advanced AI image processing services. Our solutions optimize data for faster training, better accuracy, and improved performance in machine learning applications.",
    icon: "Image",
    // Add this inside your web-development service object (after techStack)
    domainExpertise: [
      {
        name: "eCommerce",
        icon: "ShoppingCart",

        description: "Online stores, payment gateways, inventory management",
      },
      {
        name: "Fintech",
        icon: "DollarSign",

        description: "Banking apps, payment systems, financial dashboards",
      },
      {
        name: "Healthcare",
        icon: "Heart",

        description: "Patient portals, telemedicine, healthcare management",
      },
      {
        name: "Education",
        icon: "GraduationCap",

        description:
          "Learning management systems, online courses, student portals",
      },
      {
        name: "Real Estate",
        icon: "Home",

        description: "Property listings, virtual tours, CRM systems",
      },
      {
        name: "Business",
        icon: "Briefcase",

        description:
          "Corporate websites, business automation, workflow systems",
      },
    ],
    benefits: [
      "Automated image classification",
      "Object detection in visuals",
      "Image quality enhancement",
      "Visual search capabilities",
      "Custom computer vision solutions",
    ],

    details:
      "We develop custom deep learning models for image recognition, object detection, and image enhancement tasks using TensorFlow, PyTorch and OpenCV.",
    process: [
      "Requirement analysis and data collection",
      "Model selection and training",
      "Testing and validation",
      "API development for integration",
      "Deployment and maintenance",
    ],
    timeframe: "4-12 weeks depending on complexity",
    pricing: "Starting at $25,000 for custom solutions",
    // Add this to your ServicesData array - specifically in the web-development object

    techStack: {
      categories: ["Frontend", "Backend", "Database", "Cloud"],
      technologies: {
        Frontend: [
          {
            name: "HTML",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
            description: "Markup language for web pages",
          },
          {
            name: "CSS",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
            description: "Styling and layout",
          },
          {
            name: "JavaScript",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
            description: "Interactive functionality",
          },
          {
            name: "React.js",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
            description: "Modern UI library",
          },
          {
            name: "Vue.js",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
            description: "Progressive framework",
          },
          {
            name: "Angular",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
            description: "Full-featured framework",
          },
        ],
        Backend: [
          {
            name: "Node.js",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
            description: "JavaScript runtime",
          },
          {
            name: "Python",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
            description: "Versatile programming language",
          },
          {
            name: "PHP",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
            description: "Server-side scripting",
          },
          {
            name: "Java",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
            description: "Enterprise applications",
          },
          {
            name: "Express.js",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
            description: "Web framework",
          },
          {
            name: "Django",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
            description: "Python web framework",
          },
        ],
        Database: [
          {
            name: "MongoDB",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
            description: "NoSQL database",
          },
          {
            name: "MySQL",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
            description: "Relational database",
          },
          {
            name: "PostgreSQL",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
            description: "Advanced SQL database",
          },
          {
            name: "Redis",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
            description: "In-memory data store",
          },
          {
            name: "Firebase",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
            description: "Real-time database",
          },
          {
            name: "SQLite",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",
            description: "Lightweight database",
          },
        ],
        Cloud: [
          {
            name: "AWS",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
            description: "Cloud computing platform",
          },
          {
            name: "Google Cloud",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
            description: "Google's cloud services",
          },
          {
            name: "Azure",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
            description: "Microsoft cloud platform",
          },
          {
            name: "Docker",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
            description: "Containerization",
          },
          {
            name: "Netlify",
            icon: "https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg",
            description: "Static site hosting",
          },
          {
            name: "Vercel",
            icon: "https://www.vectorlogo.zone/logos/vercel/vercel-icon.svg",
            description: "Frontend deployment",
          },
        ],
      },
    },
  },
];
