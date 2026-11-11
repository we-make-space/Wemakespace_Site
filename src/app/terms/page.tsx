import { TermsPage } from "@/components/pages/terms";

export const metadata = {
  title: "Terms of Service",
  description: "Terms of service for Wemakespace software, platforms, and digital products.",
  openGraph: {
    images: ["/og-images/og-terms.png"],
  },
};

export default function Terms() {
  return <TermsPage />;
}
