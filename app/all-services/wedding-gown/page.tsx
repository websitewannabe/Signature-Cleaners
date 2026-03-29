import { generatePageMetadata } from "@/lib/metadata";
import HeroSection from "@/components/HeroSection";
import ServiceQuoteForm from "@/components/ServiceQuoteForm";
import MobileCardSlider from "@/components/MobileCardSlider";
import Image from "next/image";
import Link from "next/link";
import {
  Award,
  HandMetal,
  Archive,
  ShieldCheck,
  Search,
  Gift,
} from "lucide-react";

export const metadata = generatePageMetadata({
  title: "Wedding Gown Preservation at Signature Cleaners Doylestown",
  description:
    "Museum-quality wedding gown cleaning and preservation starting at $325. Protect your cherished gown for years to come with expert care in Doylestown, PA.",
  canonical: "/all-services/wedding-gown",
});

const benefits = [
  {
    icon: Award,
    title: "Museum-Quality Preservation",
    description:
      "Your gown is preserved using archival-grade materials and techniques trusted by museums worldwide.",
  },
  {
    icon: HandMetal,
    title: "Expert Hand Cleaning",
    description:
      "Delicate fabrics, beading, and embellishments are hand-cleaned with meticulous attention to detail.",
  },
  {
    icon: Archive,
    title: "Acid-Free Storage",
    description:
      "Acid-free tissue and preservation materials prevent yellowing and fabric degradation over time.",
  },
  {
    icon: ShieldCheck,
    title: "Long-Term Protection",
    description:
      "Our preservation process protects your gown from light, moisture, and environmental damage for decades.",
  },
  {
    icon: Search,
    title: "Careful Inspection",
    description:
      "Every inch of your gown is inspected for stains, loose threads, and potential issues before and after cleaning.",
  },
  {
    icon: Gift,
    title: "Beautiful Presentation Boxing",
    description:
      "Your preserved gown is presented in an elegant display box with a viewing window.",
  },
];

export default function WeddingGownPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Wedding Gown Preservation & Cleaning",
    provider: {
      "@type": "LocalBusiness",
      name: "Signature Cleaners",
      address: {
        "@type": "PostalAddress",
        streetAddress: "46 W State St",
        addressLocality: "Doylestown",
        addressRegion: "PA",
        postalCode: "18901",
      },
    },
    areaServed: {
      "@type": "Place",
      name: "Doylestown, PA and Bucks County",
    },
    description:
      "Museum-quality wedding gown cleaning and preservation with acid-free storage and beautiful presentation boxing.",
    offers: {
      "@type": "Offer",
      price: "325",
      priceCurrency: "USD",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "325",
        priceCurrency: "USD",
        unitText: "per gown",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <HeroSection
        image="/images/weddingGown.webp"
        imageAlt="Wedding gown preservation and cleaning at Signature Cleaners"
        title="Wedding Gown Preservation"
        subtitle="Museum-quality cleaning and preservation for your most cherished garment."
        ctaHref="#quote-form"
      />

      {/* Overview + Quote Form */}
      <section id="quote-form" className="section-padding bg-black text-white" style={{ scrollMarginTop: "80px" }}>
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-serif text-3xl font-bold tracking-tight md:text-4xl">
                Protect Your Most{" "}
                <span className="text-primary">Precious Memories</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-white">
                Your wedding gown is more than a dress. It&apos;s a keepsake of
                one of the most important days of your life. At Signature
                Cleaners, we treat every gown with the reverence it deserves,
                using museum-quality preservation techniques to ensure it remains
                beautiful for generations.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-white">
                Our expert team carefully hand-cleans each gown, addressing stains
                from champagne toasts and dance floor celebrations. We then
                preserve your gown in acid-free materials and present it in an
                elegant display box that you&apos;ll be proud to keep.
              </p>
              <p className="mt-6 font-serif text-2xl font-bold text-primary">
                Starting at $325
              </p>
            </div>
            <div>
              <ServiceQuoteForm service="Wedding Gown" title="Schedule Gown Preservation" buttonText="Schedule Preservation" subtitle="Tell us about your wedding gown care needs." />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="section-padding bg-black text-white">
        <div className="container-wide">
          <h2 className="mb-12 text-center font-serif text-3xl font-bold tracking-tight md:text-4xl">
            Preservation You Can Trust
          </h2>
          {/* Mobile: Auto-sliding cards */}
          <MobileCardSlider>
            {benefits.map((benefit) => (
              <div key={benefit.title} className="card-luxury">
                <benefit.icon className="mb-4 h-8 w-8 text-primary" />
                <h3 className="mb-2 font-serif text-lg font-bold">
                  {benefit.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/80">
                  {benefit.description}
                </p>
              </div>
            ))}
          </MobileCardSlider>

          {/* Desktop: Grid layout */}
          <div className="hidden gap-6 sm:grid sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="card-luxury">
                <benefit.icon className="mb-4 h-8 w-8 text-primary" />
                <h3 className="mb-2 font-serif text-lg font-bold">
                  {benefit.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/80">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 md:py-28">
        <Image
          src="/images/Background.webp"
          alt="Signature Cleaners background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-accent/80" />
        <div className="container-wide relative z-10 text-center">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-white md:text-5xl">
            Preserve Your Happily Ever After
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-200">
            Don&apos;t let time fade your memories. Contact us today to schedule
            your wedding gown preservation.
          </p>
          <div className="mt-8">
            <Link href="#quote-form" className="inline-flex items-center justify-center bg-white px-8 py-3 text-sm font-semibold text-accent transition-colors hover:bg-primary hover:text-white rounded-[7px]">Schedule a Pickup →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
