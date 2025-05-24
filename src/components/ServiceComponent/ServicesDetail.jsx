import { Link, useParams } from "react-router-dom";
import { ServicesData } from "../Helper/Data";
import {
  Megaphone,
  TrendingUp,
  Globe,
  BarChart,
  Palette,
  Layout,
  ArrowRight,
  Clock,
  DollarSign,
  Check,
} from "lucide-react";

// Updated icons object to include all icons
const icons = {
  Megaphone,
  TrendingUp,
  Globe,
  BarChart,
  Palette,
  Layout,
};

const ServicesDetail = () => {
  const { slug } = useParams();
  const service = ServicesData.find((s) => s.slug === slug);

  if (!service)
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <h2 className="text-2xl font-bold">Service not found</h2>
      </div>
    );

  const IconComponent = icons[service.icon];

  return (
    <div className="min-h-screen bg-black text-white py-24">
      <div className="max-w-5xl mx-auto px-4">
        {/* Hero Section with Gradient Border */}
        <div
          className="relative p-0.5 rounded-2xl overflow-hidden mb-12"
          style={{
            background: `linear-gradient(45deg, ${service.color}, #2D847B, ${service.color})`,
          }}
        >
          <div className="bg-black rounded-2xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row md:items-center">
              <div className="mb-6 md:mb-0 md:mr-8">
                {IconComponent && (
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
                    style={{ backgroundColor: service.color }}
                  >
                    <IconComponent size={40} color="white" />
                  </div>
                )}
                <h1
                  className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent"
                  style={{
                    backgroundImage: `linear-gradient(90deg, white, ${service.color})`,
                  }}
                >
                  {service.title}
                </h1>
                <p className="text-xl text-gray-300 max-w-xl">
                  {service.description}
                </p>
              </div>
              <div className="flex-shrink-0 ml-auto">
                <button
                  className="px-8 py-4 rounded-full font-bold transition-all hover:shadow-lg flex items-center"
                  style={{ backgroundColor: service.color }}
                >
                  <Link to="/contact">Get Started</Link>
                  <ArrowRight className="ml-2" size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - About & Timeline */}
          <div className="lg:col-span-2 space-y-10">
            {/* About Section */}
            <div className="bg-black border border-gray-800 rounded-xl p-8 hover:border-gray-700 transition-all">
              <h2
                className="text-2xl font-bold mb-6"
                style={{ color: service.color }}
              >
                About This Service
              </h2>
              <p className="text-gray-300 leading-relaxed">{service.details}</p>
            </div>

            {/* Process Section */}
            {service.process && (
              <div className="bg-black border border-gray-800 rounded-xl p-8 hover:border-gray-700 transition-all">
                <h2
                  className="text-2xl font-bold mb-6"
                  style={{ color: service.color }}
                >
                  Our Process
                </h2>
                <div className="space-y-6">
                  {service.process.map((step, index) => (
                    <div key={index} className="flex">
                      <div className="mr-4 flex-shrink-0">
                        <div
                          className="flex items-center justify-center w-10 h-10 rounded-full text-white font-bold"
                          style={{ backgroundColor: service.color }}
                        >
                          {index + 1}
                        </div>
                      </div>
                      <div>
                        <p className="text-gray-300 text-lg">{step}</p>
                        {index < service.process.length - 1 && (
                          <div className="ml-5 h-6 border-l border-gray-700"></div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Sidebar Info */}
          <div className="space-y-8">
            {/* Benefits Card */}
            <div className="bg-black border border-gray-800 rounded-xl p-8 hover:border-gray-700 transition-all">
              <h2
                className="text-2xl font-bold mb-6"
                style={{ color: service.color }}
              >
                Key Benefits
              </h2>
              <ul className="space-y-4">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex">
                    <Check
                      size={20}
                      style={{ color: service.color }}
                      className="mr-3 flex-shrink-0 mt-1"
                    />
                    <span className="text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Timeline & Pricing Card */}
            <div className="bg-black border border-gray-800 rounded-xl p-8 hover:border-gray-700 transition-all">
              {service.timeframe && (
                <div className="mb-8">
                  <div className="flex items-center mb-3">
                    <Clock
                      size={20}
                      style={{ color: service.color }}
                      className="mr-2"
                    />
                    <h3
                      className="text-xl font-bold"
                      style={{ color: service.color }}
                    >
                      Timeline
                    </h3>
                  </div>
                  <p className="text-gray-300 ml-7">{service.timeframe}</p>
                </div>
              )}

              {service.pricing && (
                <div>
                  <div className="flex items-center mb-3">
                    <DollarSign
                      size={20}
                      style={{ color: service.color }}
                      className="mr-2"
                    />
                    <h3
                      className="text-xl font-bold"
                      style={{ color: service.color }}
                    >
                      Investment
                    </h3>
                  </div>
                  <p className="text-gray-300 ml-7">{service.pricing}</p>
                </div>
              )}
            </div>

            {/* CTA Card */}
            <div
              className="rounded-xl p-8 text-center"
              style={{
                background: `linear-gradient(135deg, rgba(63, 166, 155, 0.15), rgba(45, 132, 123, 0.3))`,
              }}
            >
              <h3 className="text-2xl font-bold mb-4 text-white">
                Ready to elevate your business?
              </h3>
              <p className="text-gray-300 mb-6">
                Schedule a free consultation with our experts today.
              </p>
              <Link to="/contact">
                <button
                  className="w-full px-6 py-4 rounded-full font-bold text-white transition-all hover:shadow-lg"
                  style={{ backgroundColor: service.color }}
                >
                  Schedule Consultation
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Related Services - Optional Section */}
        <div className="mt-16">
          <h2
            className="text-2xl font-bold mb-8"
            style={{ color: service.color }}
          >
            Explore Related Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ServicesData.filter((s) => s.slug !== service.slug)
              .slice(0, 3)
              .map((relatedService) => {
                const RelatedIcon = icons[relatedService.icon];
                return (
                  <div
                    key={relatedService.slug}
                    className="bg-black border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-all group cursor-pointer"
                  >
                    <div className="flex items-center mb-4">
                      {RelatedIcon && (
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center mr-3"
                          style={{ backgroundColor: relatedService.color }}
                        >
                          <RelatedIcon size={20} color="white" />
                        </div>
                      )}
                      <h3 className="text-xl font-bold text-white">
                        {relatedService.title}
                      </h3>
                    </div>
                    <p className="text-gray-300 mb-4 text-sm">
                      {relatedService.description}
                    </p>
                    <Link
                      to={`/services/${relatedService.slug}`}
                      className="flex items-center text-sm font-medium transition-all group-hover:translate-x-1"
                      style={{ color: relatedService.color }}
                    >
                      Learn more <ArrowRight size={14} className="ml-1" />
                    </Link>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesDetail;
