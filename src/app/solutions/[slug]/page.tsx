import { SolutionDetailPage } from "@/components/pages/solution-detail";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return {
    title: slug ? `${slug.charAt(0).toUpperCase() + slug.slice(1)}` : "Platform",
  };
}

export default function SolutionDetail({ params }: { params: Promise<{ slug: string }> }) {
  return <SolutionDetailPage params={params} />;
}
