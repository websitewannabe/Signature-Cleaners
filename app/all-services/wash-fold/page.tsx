import { generatePageMetadata } from "@/lib/metadata";
import HeroSection from "@/components/HeroSection";
import ServiceQuoteForm from "@/components/ServiceQuoteForm";
import MobileCardSlider from "@/components/MobileCardSlider";
import Image from "next/image";
import Link from "next/link";
import {
  WashingMachine,
  Shirt,
  DollarSign,
  Truck,
  Timer,
  ShieldCheck,
} from "lucide-react";

export const metadata = generatePageMetadata({
  title: "Wash & Fold Service at Signature Cleaners Doylestown",
  description:
    "Convenient wash and fold laundry service at $2.95/lb in Doylestown, PA. Professional washing, drying, and folding with free pickup and delivery.",
  canonical: "/all-services/wash-fold",
});

const benefits = [
  {
    icon: WashingMachine,
    title: "Professional Washing & Drying",
    description:
      "Commercial-grade machines and premium detergents deliver a deep, thorough clean every time.",
  },
  {
    icon: Shirt,
    title: "Neatly Folded",
    description:
      "Every item is carefully sorted and folded to perfection, ready to go straight into your drawers.",
  },
  {
    icon: DollarSign,
    title: "Convenient Per-Pound Pricing",
    description:
      "Simple, transparent pricing at just $2.95 per pound with no hidden fees or surprises.",
  },
  {
    icon: Truck,
    title: "Free Pickup & Delivery",
    description:
      "We come to you throughout Bucks County at no extra charge. Laundry day has never been easier.",
  },
  {
    icon: Timer,
    title: "Quick Turnaround",
    description:
      "Most orders are completed within 24 hours so you never run out of clean clothes.",
  },
  {
    icon: ShieldCheck,
    title: "Separate Wash for Each Customer",
    description:
      "Your laundry is always washed separately and never mixed with anyone else's garments.",
  },
];

export default function WashFoldPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Wash & Fold Laundry Service",
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
      "Convenient wash and fold laundry service with professional washing, drying, and folding at $2.95 per pound.",
    offers: {
      "@type": "Offer",
      price: "2.95",
      priceCurrency: "USD",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "2.95",
        priceCurrency: "USD",
        unitText: "per pound",
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
        image="/images/washFold.webp"
        imageAlt="Wash and fold laundry service at Signature Cleaners"
        title="Wash & Fold"
        subtitle="Convenient per-pound laundry service with professional care."
        ctaHref="#quote-form"
      />

      {/* Overview + Quote Form */}
      <section id="quote-form" className="section-padding bg-black text-white" style={{ scrollMarginTop: "80px" }}>
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-serif text-3xl font-bold tracking-tight md:text-4xl">
                Laundry Done{" "}
                <span className="text-primary">Right</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-white">
                Tired of spending your weekends sorting, washing, and folding? Let
                Signature Cleaners handle it. Our wash and fold service takes the
                hassle out of laundry day with professional care at an affordable
                per-pound price.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-white">
                Each customer&apos;s laundry is washed separately using premium
                detergents, dried to perfection, and neatly folded, ready to put
                straight into your closet. With free pickup and delivery, you
                don&apos;t even have to leave home.
              </p>
              <p className="mt-6 font-serif text-2xl font-bold text-primary">
                $2.95 per pound
              </p>
            </div>
            <div>
              <ServiceQuoteForm service="Wash & Fold" title="Schedule a Wash & Fold" buttonText="Schedule Wash & Fold" subtitle="Tell us about your laundry needs." />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="section-padding bg-black text-white">
        <div className="container-wide">
          <h2 className="mb-12 text-center font-serif text-3xl font-bold tracking-tight md:text-4xl">
            The Easier Way to Do Laundry
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
            Reclaim Your Weekends
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-200">
            Let us handle the laundry while you enjoy the things that matter
            most. Schedule a pickup today.
          </p>
          <div className="mt-8">
            <Link href="#quote-form" className="inline-flex items-center justify-center bg-white px-8 py-3 text-sm font-semibold text-accent transition-colors hover:bg-primary hover:text-white rounded-[7px]">Schedule a Pickup →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
