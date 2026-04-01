import { generatePageMetadata } from "@/lib/metadata";
import HeroSection from "@/components/HeroSection";
import QuoteButton from "@/components/QuoteButton";
import ServiceQuoteForm from "@/components/ServiceQuoteForm";
import MobileCardSlider from "@/components/MobileCardSlider";
import Image from "next/image";
import Link from "next/link";
import {
  Leaf,
  Clock,
  Droplets,
  Sparkles,
  ShieldCheck,
  Timer,
} from "lucide-react";

export const metadata = generatePageMetadata({
  title: "Dry Cleaning Services at Signature Cleaners Doylestown",
  description:
    "Expert dry cleaning for suits, dresses, shirts, and delicate garments in Doylestown, PA. Same-day service available. Eco-friendly solvents.",
  canonical: "/all-services/dry-cleaning",
});

const benefits = [
  {
    icon: Leaf,
    title: "Eco-Friendly Solvents",
    description:
      "We use environmentally responsible cleaning solvents that are gentle on your garments and the planet.",
  },
  {
    icon: Clock,
    title: "Same-Day Service",
    description:
      "Drop off in the morning and pick up the same evening. Perfect for last-minute needs.",
  },
  {
    icon: Droplets,
    title: "Expert Stain Removal",
    description:
      "Our specialists tackle even the toughest stains with proven techniques and professional-grade solutions.",
  },
  {
    icon: Sparkles,
    title: "Delicate Garment Specialists",
    description:
      "Silk, cashmere, wool, and other fine fabrics receive the specialized attention they deserve.",
  },
  {
    icon: ShieldCheck,
    title: "Professional Pressing",
    description:
      "Every garment is expertly pressed and finished to look its absolute best.",
  },
  {
    icon: Timer,
    title: "24-Hour Turnaround",
    description:
      "Standard service with next-day turnaround ensures your garments are ready when you need them.",
  },
];

const process = [
  { step: "1", title: "Inspection", description: "Each garment is carefully inspected for stains, damage, and care label requirements." },
  { step: "2", title: "Pre-Treatment", description: "Stains and problem areas receive targeted pre-treatment before cleaning." },
  { step: "3", title: "Cleaning", description: "Garments are cleaned with eco-friendly solvents matched to their fabric type." },
  { step: "4", title: "Quality Check", description: "Post-clean inspection ensures every stain is removed and the garment is flawless." },
  { step: "5", title: "Pressing", description: "Professional pressing restores shape, crispness, and a polished appearance." },
  { step: "6", title: "Packaging", description: "Garments are carefully hung or folded and protected for pickup or delivery." },
];

export default function DryCleaningPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Professional Dry Cleaning",
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
      "Expert dry cleaning for suits, dresses, shirts, and delicate garments with eco-friendly solvents and same-day service available.",
    offers: {
      "@type": "Offer",
      price: "9.95",
      priceCurrency: "USD",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "9.95",
        priceCurrency: "USD",
        unitText: "per garment",
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
        image="/images/interior-two.webp"
        imageAlt="Professional dry cleaning services at Signature Cleaners"
        title="Professional Dry Cleaning"
        subtitle="Expert care for your finest garments with eco-friendly solvents."
        ctaHref="#quote-form"
      />

      {/* Overview + Quote Form */}
      <section id="quote-form" className="section-padding bg-black text-white" style={{ scrollMarginTop: "80px" }}>
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-serif text-3xl font-bold tracking-tight md:text-4xl">
                Garment Care You Can{" "}
                <span className="text-primary">Trust</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-white">
                At Signature Cleaners, dry cleaning is more than a process. It&apos;s
                a craft. Our experienced team treats every garment with the
                individual attention it deserves, from everyday business attire to
                your most prized designer pieces.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-white">
                We use eco-friendly solvents that are tough on stains but gentle on
                fabrics, ensuring your clothing looks and feels its best every
                time. With same-day service available, we work around your
                schedule.
              </p>
              <p className="mt-6 font-serif text-2xl font-bold text-primary">
                Starting at $9.95
              </p>
            </div>
            <div>
              <ServiceQuoteForm service="Dry Cleaning" title="Schedule Dry Cleaning" buttonText="Schedule Dry Cleaning" subtitle="Tell us about your dry cleaning needs." />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <h2 className="mb-12 text-center font-serif text-3xl font-bold tracking-tight text-zinc-900 md:text-4xl">
            Why Choose Our Dry Cleaning
          </h2>
          {/* Mobile: Auto-sliding cards */}
          <MobileCardSlider light>
            {benefits.map((benefit) => (
              <div key={benefit.title} className="border border-zinc-200 bg-zinc-50 p-8 transition-all duration-500 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10" style={{ borderRadius: "7px" }}>
                <benefit.icon className="mb-4 h-8 w-8 text-primary" />
                <h3 className="mb-2 font-serif text-lg font-bold text-zinc-900">
                  {benefit.title}
                </h3>
                <p className="text-sm leading-relaxed text-zinc-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </MobileCardSlider>

          {/* Desktop: Grid layout */}
          <div className="hidden gap-6 sm:grid sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="border border-zinc-200 bg-zinc-50 p-8 transition-all duration-500 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10" style={{ borderRadius: "7px" }}>
                <benefit.icon className="mb-4 h-8 w-8 text-primary" />
                <h3 className="mb-2 font-serif text-lg font-bold text-zinc-900">
                  {benefit.title}
                </h3>
                <p className="text-sm leading-relaxed text-zinc-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-zinc-950 text-white">
        <div className="container-wide">
          <h2 className="mb-12 text-center font-serif text-3xl font-bold tracking-tight md:text-4xl">
            Our <span className="text-primary">Process</span>
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {process.map((item) => (
              <div key={item.step} className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-accent font-serif text-lg font-bold text-white">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-white/80">
                    {item.description}
                  </p>
                </div>
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
            Your Garments Deserve the Best
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-200">
            Experience professional dry cleaning that keeps your wardrobe looking
            impeccable. Schedule a pickup today.
          </p>
          <div className="mt-8">
            <Link href="#quote-form" className="inline-flex items-center justify-center bg-white px-8 py-3 text-sm font-semibold text-accent transition-colors hover:bg-primary hover:text-white rounded-[7px]">Schedule a Pickup →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
