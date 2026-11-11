import { ArticleDetailPage } from "@/components/pages/article-detail";

export default function ArticleDetail({ params }: { params: Promise<{ id: string }> }) {
  return <ArticleDetailPage params={params} />;
}
