import Link from "next/link";
import { NotFoundPage } from "@/components/pages/not-found";

export const metadata = {
  title: "Page Not Found",
  description: "404 - Page not found. Return to Wemakespace tech and software platform.",
};

export default function NotFound() {
  return <NotFoundPage />;
}
