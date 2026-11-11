import { PrivacyPage } from "@/components/pages/privacy";

export const metadata = {
  title: "Privacy Policy",
  description: "Data security, encryption, and privacy practices for Wemakespace software and digital platforms.",
  openGraph: {
    images: ["/og-images/og-privacy.png"],
  },
};

export default function Privacy() {
  return <PrivacyPage />;
}
