import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Schedule a Pickup at Signature Cleaners Doylestown",
  description:
    "Schedule a free dry cleaning pickup and delivery in Bucks County, PA. Signature Cleaners offers convenient service right to your door.",
  alternates: {
    canonical: "https://www.mysignaturecleaners.com/schedule",
  },
  openGraph: {
    title: "Schedule a Pickup at Signature Cleaners Doylestown",
    description:
      "Schedule a free dry cleaning pickup and delivery in Bucks County, PA. Signature Cleaners offers convenient service right to your door.",
    url: "https://www.mysignaturecleaners.com/schedule",
    type: "website",
    locale: "en_US",
    siteName: "Signature Cleaners",
  },
};

export default function ScheduleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
