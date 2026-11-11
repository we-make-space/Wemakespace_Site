import { CasesPage } from "@/components/pages/cases";

export const metadata = {
  title: "Updates & Releases",
  description: "Tech updates, product releases, and engineering insights from Wemakespace.",
  openGraph: {
    images: ["/og-images/og-cases.png"],
  },
};

export default function Cases() {
  return <CasesPage />;
}
