import { generatePageMetadata } from "@/lib/metadata";
import HeroSection from "@/components/HeroSection";
import ServiceQuoteForm from "@/components/ServiceQuoteForm";
import MobileCardSlider from "@/components/MobileCardSlider";
import Image from "next/image";
import Link from "next/link";
import {
  Scissors,
  ArrowDownUp,
  Wrench,
  CircleDot,
  Layers,
  Ruler,
} from "lucide-react";

export const metadata = generatePageMetadata({
  title: "Alterations & Tailoring at Signature Cleaners Doylestown",
  description:
    "Professional alterations and tailoring in Doylestown, PA. Hemming, fit adjustments, and repairs starting at $24.99 with 3-5 business day turnaround.",
  canonical: "/all-services/alteration-tailoring",
});

const services = [
  {
    icon: Scissors,
    title: "Hemming",
    description:
      "Precise hemming for pants, skirts, and dresses to achieve the perfect length every time.",
  },
  {
    icon: ArrowDownUp,
    title: "Taking In / Letting Out",
    description:
      "Expert adjustments to fit changes in your body, ensuring your garments always feel comfortable.",
  },
  {
    icon: Wrench,
    title: "Zipper Replacement",
    description:
      "Broken zipper? We replace zippers on jackets, pants, dresses, and more with seamless results.",
  },
  {
    icon: CircleDot,
    title: "Button Repair",
    description:
      "Missing or loose buttons are replaced and secured with matching or upgraded options.",
  },
  {
    icon: Layers,
    title: "Lining Repair",
    description:
      "Torn or worn linings are expertly repaired or replaced to restore your garment's structure.",
  },
  {
    icon: Ruler,
    title: "Custom Fitting",
    description:
      "Off-the-rack doesn't mean off-the-mark. We tailor garments for a custom, flattering fit.",
  },
];

export default function AlterationTailoringPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Alterations & Tailoring",
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
      "Professional alterations and tailoring including hemming, fit adjustments, zipper replacement, and custom fitting.",
    offers: {
      "@type": "Offer",
      price: "24.99",
      priceCurrency: "USD",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "24.99",
        priceCurrency: "USD",
        unitText: "per alteration",
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
        image="/images/tailor.webp"
        imageAlt="Professional alterations and tailoring at Signature Cleaners"
        title="Alterations & Tailoring"
        subtitle="Expert fitting and repairs to make every garment perfect."
        ctaHref="#quote-form"
      />

      {/* Overview + Quote Form */}
      <section id="quote-form" className="section-padding bg-black text-white" style={{ scrollMarginTop: "80px" }}>
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-serif text-3xl font-bold tracking-tight md:text-4xl">
                The Perfect Fit,{" "}
                <span className="text-primary">Every Time</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-white">
                Whether you need a simple hem or a complete garment transformation,
                our skilled tailors deliver precision alterations that make every
                piece in your wardrobe feel like it was made just for you. From
                everyday clothing to special occasion wear, we handle it all.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-white">
                With a typical turnaround of 3 to 5 business days, you won&apos;t
                have to wait long to enjoy your perfectly fitted garments. Rush
                service is also available when you need it.
              </p>
              <div className="mt-6 flex flex-wrap gap-6">
                <p className="font-serif text-2xl font-bold text-primary">
                  Starting at $24.99
                </p>
                <p className="font-serif text-2xl font-bold text-primary">
                  3-5 Business Days
                </p>
              </div>
            </div>
            <div>
              <ServiceQuoteForm service="Alterations & Tailoring" title="Schedule an Alteration" buttonText="Schedule Alteration" subtitle="Tell us about your alteration or tailoring needs." />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <h2 className="mb-12 text-center font-serif text-3xl font-bold tracking-tight text-zinc-900 md:text-4xl">
            Alteration Services
          </h2>
          {/* Mobile: Auto-sliding cards */}
          <MobileCardSlider light>
            {services.map((service) => (
              <div key={service.title} className="border border-zinc-200 bg-zinc-50 p-8 transition-all duration-500 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10" style={{ borderRadius: "7px" }}>
                <service.icon className="mb-4 h-8 w-8 text-primary" />
                <h3 className="mb-2 font-serif text-lg font-bold text-zinc-900">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-zinc-600">
                  {service.description}
                </p>
              </div>
            ))}
          </MobileCardSlider>

          {/* Desktop: Grid layout */}
          <div className="hidden gap-6 sm:grid sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.title} className="border border-zinc-200 bg-zinc-50 p-8 transition-all duration-500 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10" style={{ borderRadius: "7px" }}>
                <service.icon className="mb-4 h-8 w-8 text-primary" />
                <h3 className="mb-2 font-serif text-lg font-bold text-zinc-900">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-zinc-600">
                  {service.description}
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
            Make Every Garment Fit Perfectly
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-200">
            From quick fixes to custom tailoring, our experts are ready to help.
            Schedule a pickup today.
          </p>
          <div className="mt-8">
            <Link href="#quote-form" className="inline-flex items-center justify-center bg-white px-8 py-3 text-sm font-semibold text-accent transition-colors hover:bg-primary hover:text-white rounded-[7px]">Schedule a Pickup →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
