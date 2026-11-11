import { HomePage } from "@/components/pages/home";

export const metadata = {
  title: "Home",
  description:
    "Building high-performance software for web, mobile, AI, and Web3. We engineer digital products and platforms.",
  openGraph: {
    images: ["/wemakespacelogoparty.png"],
  },
};

export default function Home() {
  return <HomePage />;
}
