import bellClinix from "../../assets/bellclinix.png";
import swiftTakeoffs from "../../assets/swifttakeoffs.png";
import paradisePipes from "../../assets/paradisepipe.png";
export const ServicesData = [
  {
    id: 1,
    title: "Social Media Marketing",
    description:
      "Elevate your brand presence across all platforms with strategic content and engagement.",
    icon: "Megaphone",
    benefits: [
      "Increased brand awareness and recognition",
      "Higher engagement rates and community building",
      "Targeted audience reach with demographic precision",
      "Improved customer loyalty and retention",
      "Real-time feedback and market insights",
    ],
    color: "#3FA69B",
    details:
      "Our social media marketing services help you establish a commanding presence on platforms like Facebook, Instagram, Twitter, LinkedIn, and TikTok. We create platform-specific content calendars, implement engagement strategies, and conduct competitor analysis to position your brand effectively. Our team manages community interactions, develops viral campaigns, and provides detailed analytics reports to continuously refine your social strategy.",
    process: [
      "Platform audit and strategy development",
      "Content creation and calendar planning",
      "Community management and engagement",
      "Paid social campaign management",
      "Performance tracking and optimization",
    ],
    timeframe: "Results typically visible within 30-90 days",
    pricing: "Starting at $1,200/month depending on platform coverage",
  },
  {
    id: 2,
    title: "SEO Optimization",
    description:
      "Boost your visibility and climb search rankings with data-driven SEO strategies.",
    icon: "TrendingUp",
    benefits: [
      "Improved search engine rankings for targeted keywords",
      "Higher organic traffic and reduced dependency on paid advertising",
      "Better conversion rates through qualified traffic",
      "Enhanced website usability and user experience",
      "Competitive advantage in your industry",
    ],
    color: "#36958B",
    details:
      "Our comprehensive SEO services include thorough technical audits, strategic keyword research, competitor analysis, and content optimization. We implement white-hat link building strategies, optimize your site architecture, and improve page speed for better rankings. Our approach focuses on sustainable growth through evergreen SEO practices that adapt to algorithm changes while maintaining your ranking position.",
    process: [
      "Comprehensive website audit and keyword research",
      "On-page optimization and content enhancement",
      "Technical SEO implementation",
      "Strategic link building and off-page optimization",
      "Regular performance reporting and strategy adjustment",
    ],
    timeframe:
      "Initial improvements in 2-3 months, significant results in 6-12 months",
    pricing:
      "Starting at $1,500/month based on site complexity and competition",
  },
  {
    id: 3,
    title: "Web Development",
    description:
      "Create stunning, responsive websites that convert visitors into customers.",
    icon: "Globe",
    benefits: [
      "Mobile-optimized design with responsive functionality",
      "Fast loading speeds and performance optimization",
      "Intuitive user experience with clear navigation paths",
      "SEO-friendly architecture built from the ground up",
      "Secure and scalable codebase for future growth",
    ],
    color: "#2D847B",
    details:
      "We develop custom websites that combine aesthetic appeal with functional excellence. Our development process emphasizes clean code, performance optimization, and user-centric design principles. Each site is built with scalability in mind, allowing your digital presence to grow with your business. We implement robust security measures, optimized database structures, and ensure compliance with web standards across all browsers.",
    process: [
      "Discovery and requirements gathering",
      "Wireframing and design mockups",
      "Frontend and backend development",
      "Testing across devices and browsers",
      "Deployment and post-launch support",
    ],
    timeframe: "4-12 weeks depending on project complexity",
    pricing: "Starting at $5,000 for custom websites",
  },
  {
    id: 4,
    title: "Digital Marketing",
    description:
      "Comprehensive digital strategies to grow your business and maximize ROI.",
    icon: "BarChart",
    benefits: [
      "Holistic marketing approach across multiple channels",
      "Data-driven campaign optimization for maximum ROI",
      "Consistent brand messaging across all touchpoints",
      "Trackable results with transparent reporting",
      "Competitive analysis and market positioning",
    ],
    color: "#3FA69B",
    details:
      "Our digital marketing services encompass the full spectrum of online promotion, from search and social to email and content marketing. We build integrated campaigns that work together to create a cohesive customer journey. Using advanced analytics and A/B testing, we continuously refine your marketing mix to improve performance and reduce cost-per-acquisition across all channels.",
    process: [
      "Marketing audit and goal setting",
      "Strategy development and channel selection",
      "Campaign creation and implementation",
      "Performance tracking and analytics setup",
      "Ongoing optimization and scaling",
    ],
    timeframe: "Campaign setup within 2-3 weeks, ongoing management monthly",
    pricing: "Starting at $2,500/month for multi-channel campaigns",
  },
  {
    id: 5,
    title: "Branding",
    description:
      "Develop a distinctive brand identity that resonates with your target audience.",
    icon: "Palette",
    benefits: [
      "Cohesive visual identity across all business touchpoints",
      "Stronger brand recognition and recall",
      "Enhanced customer trust and perceived value",
      "Clear differentiation from competitors",
      "Consistent messaging that connects emotionally",
    ],
    color: "#36958B",
    details:
      "Our branding services help you define, create, and maintain a compelling brand presence. We start with deep market research and positioning strategy before developing visual elements like logos, color palettes, and typography. Our comprehensive brand guidelines ensure consistency across all applications, from digital assets to physical materials, creating a unified experience that builds recognition and loyalty.",
    process: [
      "Brand discovery and market research",
      "Brand strategy and positioning",
      "Visual identity development",
      "Brand guidelines and asset creation",
      "Implementation across touchpoints",
    ],
    timeframe: "4-8 weeks for complete brand development",
    pricing: "Starting at $3,500 for brand identity packages",
  },
  {
    id: 6,
    title: "UI/UX Designing",
    description:
      "Create intuitive user experiences that delight customers and boost conversions.",
    icon: "Layout",
    benefits: [
      "Improved user satisfaction and reduced bounce rates",
      "Streamlined user journeys that increase conversions",
      "Accessible designs that reach wider audiences",
      "Data-informed layouts based on user behavior",
      "Consistent experience across devices and platforms",
    ],
    color: "#2D847B",
    details:
      "Our UI/UX design services focus on creating intuitive, enjoyable experiences that guide users naturally toward desired actions. We combine aesthetics with functionality through extensive user research, information architecture planning, and interactive prototyping. Our iterative approach incorporates usability testing and user feedback to continuously refine interfaces that not only look beautiful but perform exceptionally well.",
    process: [
      "User research and persona development",
      "Information architecture and user flow mapping",
      "Wireframing and interactive prototyping",
      "Visual design and UI component creation",
      "Usability testing and design refinement",
    ],
    timeframe: "2-6 weeks depending on project scope",
    pricing: "Starting at $4,000 for complete UX/UI projects",
  },
];

export const portfolioData = [
  {
    id: 1,
    image: bellClinix,
    projectName: "Bell Clinix",
    clientName: "Bell Clinix",
    websiteLink: "https://bellclinix.com/",
    images: [
      "https://source.unsplash.com/featured/?clinic,healthcare",
      "https://source.unsplash.com/featured/?hospital,medical",
      "https://source.unsplash.com/featured/?doctor,patient",
    ],
    typographyColorScheme:
      "https://source.unsplash.com/featured/?typography,colors",
    projectDetails:
      "A modern healthcare website with intuitive appointment scheduling and patient portal integration.",
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
    image: swiftTakeoffs,

    id: 2,
    projectName: "Swift Takeoffs",
    clientName: "Swift Takeoffs",
    websiteLink: "https://swifttakeoffs.com/",
    images: [
      "https://source.unsplash.com/featured/?airplane,flight",
      "https://source.unsplash.com/featured/?airport,travel",
      "https://source.unsplash.com/featured/?skyline,aviation",
    ],
    typographyColorScheme:
      "https://source.unsplash.com/featured/?typography,aviation",
    projectDetails:
      "Aviation services platform with real-time flight tracking and booking capabilities.",
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
    image: paradisePipes,

    id: 3,
    projectName: "Paradise Pipes",
    clientName: "Paradise Pipes",
    websiteLink: "http://paradisepipes.com/",
    images: [
      "https://source.unsplash.com/featured/?ecommerce,shop",
      "https://source.unsplash.com/featured/?products,store",
      "https://source.unsplash.com/featured/?market,commerce",
    ],
    typographyColorScheme:
      "https://source.unsplash.com/featured/?typography,ecommerce",
    projectDetails:
      "E-commerce platform for premium smoking accessories with detailed product catalogs.",
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
