import { SolutionsPage } from "@/components/pages/solutions";

export const metadata = {
  title: "Solutions",
  description: "We solve complex engineering challenges for forward-thinking companies.",
  openGraph: {
    images: ["/og-images/og-solutions.png"],
  },
};

export default function Solutions() {
  return <SolutionsPage />;
}
