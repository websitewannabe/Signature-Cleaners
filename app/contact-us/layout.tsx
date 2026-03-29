import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Signature Cleaners in Doylestown, PA",
  description:
    "Get in touch with Signature Cleaners at 1456 Ferry Road, Doylestown, PA. Call (215) 345-1470 or fill out our contact form for a free quote on dry cleaning services.",
  alternates: {
    canonical: "https://www.mysignaturecleaners.com/contact-us",
  },
  openGraph: {
    title: "Contact Signature Cleaners in Doylestown, PA",
    description:
      "Get in touch with Signature Cleaners at 1456 Ferry Road, Doylestown, PA. Call (215) 345-1470 or fill out our contact form for a free quote on dry cleaning services.",
    url: "https://www.mysignaturecleaners.com/contact-us",
    type: "website",
    locale: "en_US",
    siteName: "Signature Cleaners",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
