import { generatePageMetadata } from "@/lib/metadata";
import HeroSection from "@/components/HeroSection";
import QuoteButton from "@/components/QuoteButton";
import Image from "next/image";
import Link from "next/link";
import {
  AirVent,
  Sparkles,
  Gem,
  Shirt,
  Footprints,
  Home,
  Car,
} from "lucide-react";

export const metadata = generatePageMetadata({
  title: "Our Services at Signature Cleaners Doylestown, PA",
  description:
    "Explore Signature Cleaners' full range of services: dry cleaning, wash & fold, wedding gown preservation, alterations, shoe repair, and more in Doylestown, PA.",
  canonical: "/all-services/all-services",
});

const services = [
  {
    icon: AirVent,
    name: "Dry Cleaning",
    price: "$9.95+",
    description:
      "Expert care for suits, dresses, and delicate garments with eco-friendly solvents and professional pressing.",
    href: "/all-services/dry-cleaning",
  },
  {
    icon: Sparkles,
    name: "Wash & Fold",
    price: "$2.95/lb",
    description:
      "Convenient per-pound laundry service with professional washing, drying, and neatly folded results.",
    href: "/all-services/wash-fold",
  },
  {
    icon: Gem,
    name: "Wedding Gown",
    price: "$325+",
    description:
      "Museum-quality cleaning and preservation to protect your cherished gown for generations.",
    href: "/all-services/wedding-gown",
  },
  {
    icon: Shirt,
    name: "Alterations",
    price: "$24.99+",
    description:
      "Professional tailoring and alterations including hemming, fit adjustments, and repairs.",
    href: "/all-services/alteration-tailoring",
  },
  {
    icon: Footprints,
    name: "Shoe Repair",
    price: "$24.99+",
    description:
      "Expert shoe repair including heel replacement, sole repair, and leather conditioning.",
    href: "/all-services/shoe-repair",
  },
  {
    icon: Home,
    name: "Household Items",
    price: "$39.95+",
    description:
      "Cleaning for comforters, draperies, rugs, and other household textiles with expert care.",
    href: "/all-services/clean-household-items",
  },
  {
    icon: Car,
    name: "Delivery",
    price: "Free",
    description:
      "Free pickup and delivery throughout Bucks County with convenient scheduling.",
    href: "/all-services/delivery",
  },
];

export default function AllServicesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Signature Cleaners Full Service Garment Care",
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
      "Full range of garment care services including dry cleaning, wash & fold, wedding gown preservation, alterations, shoe repair, household items cleaning, and free delivery.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <HeroSection
        image="/images/interior.webp"
        imageAlt="Signature Cleaners interior showcasing full service garment care"
        title="Our Services"
        subtitle="Full range of garment care from everyday cleaning to museum-quality preservation."
      />

      {/* Overview */}
      <section className="section-padding bg-black text-white">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-3xl font-bold tracking-tight md:text-4xl">
              Everything Your Wardrobe Needs,{" "}
              <span className="text-primary">Under One Roof</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-white">
              From everyday dry cleaning to museum-quality wedding gown
              preservation, Signature Cleaners provides the full spectrum of
              garment care. Each service is delivered with meticulous attention
              to detail, eco-friendly practices, and the personal touch that has
              made us Doylestown&apos;s most trusted cleaners.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.name}
                href={service.href}
                className="group border border-zinc-200 bg-zinc-50 p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10"
                style={{ borderRadius: "7px" }}
              >
                <div className="mb-4 flex items-center justify-between">
                  <service.icon className="h-8 w-8 text-primary" />
                  <span className="font-serif text-xl font-bold text-primary">
                    {service.price}
                  </span>
                </div>
                <h3 className="mb-2 font-serif text-xl font-bold text-zinc-900">
                  {service.name}
                </h3>
                <p className="text-sm leading-relaxed text-zinc-600">
                  {service.description}
                </p>
                <span className="mt-4 inline-block text-sm font-medium text-primary transition-colors group-hover:text-primary">
                  Learn more &rarr;
                </span>
              </Link>
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
            Ready to Experience the Difference?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-200">
            Schedule a pickup today and discover why Doylestown trusts Signature
            Cleaners for all their garment care needs.
          </p>
          <div className="mt-8">
            <Link href="/schedule" className="inline-flex items-center justify-center bg-white px-8 py-3 text-sm font-semibold text-accent transition-colors hover:bg-primary hover:text-white rounded-[7px]">Schedule a Pickup →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
