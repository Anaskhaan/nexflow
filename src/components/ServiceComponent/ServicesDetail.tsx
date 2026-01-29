"use client";

import Link from "next/link";
import { ServicesData } from "@/lib/data";
import TechStack from "./TechStack";
import DomainDiversity from "./DomainDiversity";
import ServiceDetailHero from "./ServiceDetailHero";
import ProblemSolution from "./ProblemSolution";
import SocialProof from "./SocialProof";
import ProcessTimeline from "./ProcessTimeline";
import PricingPackages from "./PricingPackages";
import ServiceFAQ from "./ServiceFAQ";
import { Zap, ArrowRight } from "lucide-react";

interface ServicesDetailProps {
  slug: string;
}

const ServicesDetail = ({ slug }: ServicesDetailProps) => {
  const service = ServicesData.find((s) => s.slug === slug);

  if (!service)
    return (
      <div className="min-h-screen bg-white text-slate-900 flex items-center justify-center">
        <h2 className="text-2xl font-bold">Service not found</h2>
      </div>
    );

  return (
    <div className="min-h-screen bg-white">
      {/* 1. Hero Section - Awareness */}
      <ServiceDetailHero
        title={service.title}
        hook={service.hook}
        description={service.description}
        color={service.color}
        icon={service.icon}
      />

      {/* 2. Problem & Solution Section - Interest */}
      <ProblemSolution
        painPoints={service.painPoints}
        agitation={service.agitation}
        solution={service.solution}
        color={service.color}
      />

      {/* 3. Social Proof Section - Trust */}
      <SocialProof
        proof={service.proof}
        color={service.color}
      />

      {/* 4. Process Section - Logic */}
      <ProcessTimeline
        process={service.process}
        color={service.color}
      />

      {/* 5. Tech Stack Section - Authority */}
      {service.techStack && (
        <div className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <TechStack service={service} />
          </div>
        </div>
      )}

      {/* 6. Domain Diversity Section - Expertise */}
      {service.slug === "web-development" && (
        <div className="py-20 px-4 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <DomainDiversity />
          </div>
        </div>
      )}

      {/* 7. Pricing & Packages - Consideration */}
      <PricingPackages
        packages={service.packages}
        pricing={service.pricing}
        color={service.color}
        guarantee={service.guarantee}
      />

      {/* 8. FAQ Section - Objection Handling */}
      <ServiceFAQ
        faqs={service.faqs}
        color={service.color}
      />

      {/* 9. Related Services - Upsell/Cross-sell */}
      <div className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-black mb-12 text-slate-900 tracking-tight text-center">
            Explore More Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ServicesData.filter((s) => s.slug !== service.slug)
              .slice(0, 3)
              .map((relatedService) => {
                const RelatedIcon = relatedService.icon;
                return (
                  <Link
                    key={relatedService.slug}
                    href={`/services/${relatedService.slug}`}
                    className="bg-slate-50 border border-slate-200 rounded-3xl p-8 hover:shadow-xl transition-all group flex flex-col h-full"
                  >
                    <div className="flex items-center mb-6">
                      {RelatedIcon && (
                        <div
                          className="w-12 h-12 rounded-2xl flex items-center justify-center mr-4 shadow-sm group-hover:scale-110 transition-transform"
                          style={{ backgroundColor: relatedService.color }}
                        >
                          <RelatedIcon size={24} color="white" />
                        </div>
                      )}
                      <h3 className="text-xl font-bold text-slate-900">
                        {relatedService.title}
                      </h3>
                    </div>
                    <p className="text-slate-600 mb-8 font-medium flex-grow">
                      {relatedService.description}
                    </p>
                    <div
                      className="flex items-center text-sm font-bold transition-all group-hover:translate-x-2"
                      style={{ color: relatedService.color }}
                    >
                      View Details <ArrowRight size={16} className="ml-2" />
                    </div>
                  </Link>
                );
              })}
          </div>
        </div>
      </div>
      
      {/* Sticky Bottom CTA for Mobile */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] md:hidden">
        <Link href="/contact">
          <button 
            className="w-full py-4 rounded-full font-bold text-white shadow-2xl flex items-center justify-center gap-2"
            style={{ backgroundColor: service.color }}
          >
            Start Your Project <ArrowRight size={18} />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ServicesDetail;
