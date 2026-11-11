import { ContactPage } from "@/components/pages/contact";

export const metadata = {
  title: "Contact Us",
  description: "Contact Wemakespace for web, mobile, AI, and Web3 development. Talk to our engineering team.",
  openGraph: {
    images: ["/og-images/og-contact.png"],
  },
};

export default function Contact() {
  return <ContactPage />;
}
