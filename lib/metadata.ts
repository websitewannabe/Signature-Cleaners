import type { Metadata } from "next";

export const siteConfig = {
  name: "Signature Cleaners",
  url: "https://www.mysignaturecleaners.com",
  description:
    "Top-rated dry cleaning in Doylestown, PA. Expert dry cleaning, wash and fold, tailoring, and free pickup and delivery throughout Bucks County.",
  keywords: [
    "dry cleaning near me",
    "laundry service near me",
    "Doylestown dry cleaners",
    "Bucks County dry cleaning",
    "dry cleaning pickup delivery",
    "wash and fold near me",
    "tailoring near me",
    "garment care Doylestown",
    "best dry cleaners Doylestown",
    "wedding gown preservation",
    "shoe repair Doylestown",
  ],
  authors: [{ name: "Signature Cleaners" }],
  creator: "Signature Cleaners",
  openGraph: {
    type: "website" as const,
    locale: "en_US",
    siteName: "Signature Cleaners",
  },
  twitter: {
    card: "summary_large_image" as const,
    creator: "@signatureclean",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large" as const,
      "max-snippet": -1,
    },
  },
};

interface PageMetadataProps {
  title: string;
  description: string;
  keywords?: string[];
  noIndex?: boolean;
  canonical?: string;
  openGraph?: Partial<Metadata["openGraph"]>;
}

export function generatePageMetadata({
  title,
  description,
  keywords = [],
  noIndex = false,
  canonical,
  openGraph,
}: PageMetadataProps): Metadata {
  const mergedKeywords = [...siteConfig.keywords, ...keywords];

  return {
    title,
    description,
    keywords: mergedKeywords,
    authors: siteConfig.authors,
    creator: siteConfig.creator,
    robots: noIndex
      ? { index: false, follow: false }
      : siteConfig.robots,
    alternates: {
      canonical: canonical
        ? `${siteConfig.url}${canonical}`
        : undefined,
    },
    openGraph: {
      title,
      description,
      url: canonical
        ? `${siteConfig.url}${canonical}`
        : siteConfig.url,
      ...siteConfig.openGraph,
      ...openGraph,
    },
    twitter: {
      ...siteConfig.twitter,
      title,
      description,
    },
  };
}
