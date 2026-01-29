import { caseStudyData } from "@/components/Helper/caseStudyData";
import CaseStudyDetailClient from "@/components/CaseStudyDetailClient";

interface CaseStudyPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { id } = await params;
  const study = caseStudyData.find((item) => item.id.toString() === id);

  if (!study) {
    return (
      <div className="min-h-screen bg-white text-slate-900 flex items-center justify-center">
        <h2 className="text-3xl font-black tracking-tighter">Case study not found</h2>
      </div>
    );
  }

  return <CaseStudyDetailClient study={study} />;
}

export async function generateStaticParams() {
  return caseStudyData.map((study) => ({
    id: study.id.toString(),
  }));
}
