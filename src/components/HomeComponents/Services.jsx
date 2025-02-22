import { User, Rocket, Code, Zap, BarChart, Globe } from "lucide-react";

const serviceData = [
  {
    id: 1,
    title: "Consultation",
    description: "Expert consultation for your business needs",
    longDescription: "Our team provides in-depth analysis and tailored strategies to optimize your business processes and drive growth.",
    icon: <User size={24} className="text-white" />,
    tags: ["TESTING", "ANALYZE"],
  },
  {
    id: 2,
    title: "Develop",
    description: "Cutting-edge development solutions for your projects",
    longDescription: "We leverage the latest technologies to build robust, scalable, and efficient solutions tailored to your specific needs.",
    icon: <Rocket size={24} className="text-white" />,
    tags: ["CODING", "DEPLOY"],
  },
  {
    id: 3,
    title: "Code Review",
    description: "Thorough code reviews to ensure quality and best practices",
    longDescription: "Our experts meticulously review your code to identify potential issues, improve performance, and ensure adherence to industry standards.",
    icon: <Code size={24} className="text-white" />,
    tags: ["QUALITY", "OPTIMIZE"],
  },
  {
    id: 4,
    title: "Performance",
    description: "Optimize your applications for peak performance",
    longDescription: "We fine-tune your applications to achieve maximum speed, efficiency, and reliability across all platforms and devices.",
    icon: <Zap size={24} className="text-white" />,
    tags: ["SPEED", "EFFICIENCY"],
  },
  {
    id: 5,
    title: "Analytics",
    description: "Data-driven insights to inform your business decisions",
    longDescription: "Our advanced analytics tools provide deep insights into your data, helping you make informed decisions and stay ahead of the competition.",
    icon: <BarChart size={24} className="text-white" />,
    tags: ["DATA", "INSIGHTS"],
  },
  {
    id: 6,
    title: "Global Reach",
    description: "Expand your business with our global network solutions",
    longDescription: "Leverage our extensive global network to expand your reach, enter new markets, and connect with customers worldwide.",
    icon: <Globe size={24} className="text-white" />,
    tags: ["NETWORK", "EXPAND"],
  },
];

const AnimatedServices = () => (
  <div className="w-full bg-gray-50 py-20 px-6 md:px-20">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {serviceData.map((service) => (
          <div key={service.id} className="service-card group">
            <div className="card-content">
              <div className="front">
                <div className="icon-wrapper">
                  {service.icon}
                  <div className="icon-bg" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                <div className="flex gap-2 flex-wrap">
                  {service.tags.map((tag, index) => (
                    <span key={index} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="back">
                <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-white/90 text-sm mb-6">{service.longDescription}</p>
                <button className="learn-more-btn">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <style>{`
      .service-card {
        perspective: 1000px;
        height: 320px;
      }

      .card-content {
        position: relative;
        width: 100%;
        height: 100%;
        transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        transform-style: preserve-3d;
      }

      .service-card:hover .card-content {
        transform: rotateY(180deg);
      }

      .front, .back {
        position: absolute;
        width: 100%;
        height: 100%;
        backface-visibility: hidden;
        border-radius: 1rem;
        padding: 2rem;
      }

      .front {
        background: white;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        transform: rotateY(0deg);
        transition: all 0.3s ease;
      }

      .back {
        background: #3FA69B;
        transform: rotateY(180deg);
        display: flex;
        flex-direction: column;
        justify-content: center;
      }

      .icon-wrapper {
        position: relative;
        width: 48px;
        height: 48px;
        background: #3FA69B;
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 1.5rem;
        overflow: hidden;
        transition: transform 0.3s ease;
      }

      .icon-bg {
        position: absolute;
        width: 100%;
        height: 100%;
        background: linear-gradient(45deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.2) 100%);
        transform: translateX(-100%);
        transition: transform 0.6s ease;
      }

      .service-card:hover .icon-wrapper {
        transform: scale(1.1);
      }

      .service-card:hover .icon-bg {
        transform: translateX(0);
      }

      .tag {
        display: inline-block;
        padding: 0.25rem 0.75rem;
        background: rgba(63, 166, 155, 0.1);
        color: #3FA69B;
        border-radius: 9999px;
        font-size: 0.75rem;
        font-weight: 500;
        transition: all 0.3s ease;
      }

      .service-card:hover .tag {
        background: rgba(63, 166, 155, 0.15);
      }

      .learn-more-btn {
        background: white;
        color: #3FA69B;
        padding: 0.5rem 1.5rem;
        border-radius: 9999px;
        font-weight: 500;
        transition: all 0.3s ease;
        transform: translateY(0);
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      }

      .learn-more-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
      }

      @keyframes float {
        0% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
        100% { transform: translateY(0px); }
      }

      .service-card {
        animation: float 6s ease-in-out infinite;
        animation-delay: calc(var(--delay) * 1s);
      }

      .service-card:nth-child(1) { --delay: 0; }
      .service-card:nth-child(2) { --delay: 1; }
      .service-card:nth-child(3) { --delay: 2; }
      .service-card:nth-child(4) { --delay: 3; }
      .service-card:nth-child(5) { --delay: 4; }
      .service-card:nth-child(6) { --delay: 5; }
    `}</style>
  </div>
);

export default AnimatedServices;