import { generatePageMetadata } from "@/lib/metadata";
import HeroSection from "@/components/HeroSection";
import ServiceQuoteForm from "@/components/ServiceQuoteForm";
import MobileCardSlider from "@/components/MobileCardSlider";
import Image from "next/image";
import Link from "next/link";
import {
  Footprints,
  Layers,
  Droplets,
  Wrench,
  Sparkles,
  RefreshCw,
} from "lucide-react";

export const metadata = generatePageMetadata({
  title: "Shoe Repair at Signature Cleaners Doylestown",
  description:
    "Expert shoe repair services in Doylestown, PA. Heel replacement, sole repair, leather conditioning, and restoration starting at $24.99.",
  canonical: "/all-services/shoe-repair",
});

const services = [
  {
    icon: Footprints,
    title: "Heel Replacement",
    description:
      "Worn-down heels are replaced with quality materials to restore your shoes' original height and stability.",
  },
  {
    icon: Layers,
    title: "Sole Repair",
    description:
      "Cracked or worn soles are repaired or replaced to extend the life of your favorite shoes.",
  },
  {
    icon: Droplets,
    title: "Leather Conditioning",
    description:
      "Premium conditioning treatments restore moisture, prevent cracking, and bring leather back to life.",
  },
  {
    icon: Wrench,
    title: "Stitching Repair",
    description:
      "Loose or broken stitching is carefully repaired to keep your shoes sturdy and looking great.",
  },
  {
    icon: Sparkles,
    title: "Polish & Shine",
    description:
      "Professional polishing restores color and brings a brilliant shine to dress shoes and boots.",
  },
  {
    icon: RefreshCw,
    title: "Full Restoration",
    description:
      "Complete restoration service that brings even the most worn shoes back to near-original condition.",
  },
];

export default function ShoeRepairPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Professional Shoe Repair",
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
      "Expert shoe repair including heel replacement, sole repair, leather conditioning, and full restoration.",
    offers: {
      "@type": "Offer",
      price: "24.99",
      priceCurrency: "USD",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "24.99",
        priceCurrency: "USD",
        unitText: "per repair",
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
        image="/images/shoeRepair.webp"
        imageAlt="Professional shoe repair at Signature Cleaners"
        title="Shoe Repair"
        subtitle="Professional restoration to extend the life of your favorite footwear."
        ctaHref="#quote-form"
      />

      {/* Overview + Quote Form */}
      <section id="quote-form" className="section-padding bg-black text-white" style={{ scrollMarginTop: "80px" }}>
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-serif text-3xl font-bold tracking-tight md:text-4xl">
                Give Your Shoes a{" "}
                <span className="text-primary">Second Life</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-white">
                Quality footwear is an investment worth protecting. Our skilled
                cobblers bring years of experience to every repair, from simple
                heel replacements to full restorations that make old favorites look
                new again.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-white">
                Whether it&apos;s a beloved pair of leather dress shoes, everyday
                boots, or designer heels, we have the tools and expertise to extend
                their life and restore their beauty.
              </p>
              <p className="mt-6 font-serif text-2xl font-bold text-primary">
                Starting at $24.99
              </p>
            </div>
            <div>
              <ServiceQuoteForm service="Shoe Repair" title="Schedule a Shoe Repair" buttonText="Schedule Shoe Repair" subtitle="Tell us about your shoe repair needs." />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <h2 className="mb-12 text-center font-serif text-3xl font-bold tracking-tight text-zinc-900 md:text-4xl">
            Repair Services
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
            Don&apos;t Replace, Repair
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-200">
            Save money and extend the life of your favorite shoes. Schedule a
            quote for your repair today.
          </p>
          <div className="mt-8">
            <Link href="#quote-form" className="inline-flex items-center justify-center bg-white px-8 py-3 text-sm font-semibold text-accent transition-colors hover:bg-primary hover:text-white rounded-[7px]">Schedule a Pickup →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
