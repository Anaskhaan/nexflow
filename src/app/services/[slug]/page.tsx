import ServicesDetail from "@/components/ServiceComponent/ServicesDetail";
import { ServicesData } from "@/lib/data";

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
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
