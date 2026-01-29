import PortfolioDetails from "@/components/PortfolioComponents/PortfolioDetails";
import { mainportfolioData } from "@/lib/data";

interface PortfolioPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return mainportfolioData.map((project) => ({
    slug: project.slug,
  }));
}

export default async function PortfolioItemPage({ params }: PortfolioPageProps) {
  const { slug } = await params;
  return <PortfolioDetails slug={slug} />;
}
