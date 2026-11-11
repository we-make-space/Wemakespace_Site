import { VisionPage } from "@/components/pages/vision";

export const metadata = {
  title: "Vision",
  description: "Defining the architectural standards of the next digital era.",
  openGraph: {
    images: ["/og-images/og-vision.png"],
  },
};

export default function Vision() {
  return <VisionPage />;
}
