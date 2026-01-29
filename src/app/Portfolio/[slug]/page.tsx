import PortfolioDetails from "@/components/PortfolioComponents/PortfolioDetails";
import { mainportfolioData } from "@/lib/data";
import { Metadata } from "next";

interface PortfolioPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: PortfolioPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = mainportfolioData.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
      description: "The requested portfolio project could not be found.",
    };
  }

  return {
    title: `${project.projectName} Case Study`,
    description: `Nexflow's success story with ${project.projectName}. Discover how we achieved exceptional results through data-driven strategy and design.`,
    openGraph: {
      title: `${project.projectName} | Nexflow Success Story`,
      description: `Nexflow's success story with ${project.projectName}.`,
      images: [
        {
          url: typeof project.image === 'string' ? project.image : project.image?.src || "/og-image.jpg",
          alt: project.projectName,
        },
      ],
    },
  };
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
