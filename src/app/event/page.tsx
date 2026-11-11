import { EventDetailsPage } from "@/components/pages/event-details";

export const metadata = {
  title: "Event Details",
  description: "Getting started: As a Software Engineer 1.0 - A comprehensive guide to becoming a successful Software Engineer 1.",
  openGraph: {
    images: ["/og-images/og-event.png"],
  },
};

export default function EventDetails() {
  return <EventDetailsPage />;
}
