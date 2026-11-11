import { StackPage } from "@/components/pages/stack";

export const metadata = {
  title: "Platforms",
  description: "Explore the Wemakespace ecosystem of high-performance digital platforms.",
  openGraph: {
    images: ["/og-images/og-platforms.png"],
  },
};

export default function Stack() {
  return <StackPage />;
}
