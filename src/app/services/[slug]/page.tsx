import ServicesDetail from "@/components/ServiceComponent/ServicesDetail";
import { ServicesData } from "@/lib/data";
import { Metadata } from "next";

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = ServicesData.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found",
      description: "The requested service could not be found.",
    };
  }

  return {
    title: service.title,
    description: service.description || `Explore our ${service.title} services at Nexflow. Elite digital strategies tailored for growth.`,
    openGraph: {
      title: `${service.title} | Nexflow Technologies`,
      description: service.description,
      images: [
        {
          url: "/og-image.jpg",
          alt: service.title,
        },
      ],
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  return <ServicesDetail slug={slug} />;
}

export async function generateStaticParams() {
  return ServicesData.map((service) => ({
    slug: service.slug,
  }));
}
