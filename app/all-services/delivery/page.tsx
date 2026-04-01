import { generatePageMetadata } from "@/lib/metadata";
import HeroSection from "@/components/HeroSection";
import ServiceQuoteForm from "@/components/ServiceQuoteForm";
import MobileCardSlider from "@/components/MobileCardSlider";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  CalendarCheck,
  Repeat,
  Building2,
  ShoppingBag,
  Bell,
} from "lucide-react";

export const metadata = generatePageMetadata({
  title: "Free Pickup & Delivery at Signature Cleaners Doylestown, PA",
  description:
    "Free pickup and delivery dry cleaning service throughout Bucks County. Convenient scheduling and reliable service from Signature Cleaners.",
  canonical: "/all-services/delivery",
});

const benefits = [
  {
    icon: MapPin,
    title: "Free Throughout Bucks County",
    description:
      "Our delivery service covers all of Bucks County at absolutely no extra charge to you.",
  },
  {
    icon: CalendarCheck,
    title: "Convenient Scheduling",
    description:
      "Choose the pickup and delivery times that work best for your schedule.",
  },
  {
    icon: Repeat,
    title: "Twice Weekly Service",
    description:
      "Regular pickup and delivery routes run twice a week so your garments are always fresh.",
  },
  {
    icon: Building2,
    title: "Home or Office Delivery",
    description:
      "We deliver wherever is most convenient, including your front door, office lobby, or anywhere in between.",
  },
  {
    icon: ShoppingBag,
    title: "Signature Bags Provided",
    description:
      "We provide complimentary garment bags for easy, organized pickup and drop-off.",
  },
  {
    icon: Bell,
    title: "Real-Time Updates",
    description:
      "Receive notifications when your garments are picked up, cleaned, and ready for delivery.",
  },
];

const serviceAreas = [
  "Doylestown",
  "New Hope",
  "Newtown",
  "Yardley",
  "Langhorne",
  "Warrington",
  "Chalfont",
  "Perkasie",
  "Quakertown",
  "Buckingham",
  "Solebury",
  "Plumstead",
  "Warminster",
  "Ivyland",
  "Richboro",
  "Furlong",
];

export default function DeliveryPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Free Pickup & Delivery",
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
      name: "Bucks County, PA",
    },
    description:
      "Free pickup and delivery dry cleaning service throughout Bucks County with convenient scheduling and real-time updates.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description: "Free pickup and delivery service",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <HeroSection
        image="/images/vans_outfront.jpg"
        imageAlt="Signature Cleaners delivery vans out front"
        title="Pickup & Delivery"
        subtitle="We come to you with free pickup and delivery throughout Bucks County."
        ctaHref="#quote-form"
      />

      {/* Overview + Quote Form */}
      <section id="quote-form" className="section-padding bg-black text-white" style={{ scrollMarginTop: "80px" }}>
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-serif text-3xl font-bold tracking-tight md:text-4xl">
                Dry Cleaning That{" "}
                <span className="text-primary">Comes to You</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-white">
                Why drive to the cleaners when the cleaners can come to you? Our
                free pickup and delivery service brings Signature Cleaners&apos;
                exceptional quality straight to your doorstep, whether that&apos;s
                home, work, or anywhere else in Bucks County.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-white">
                Simply schedule a pickup, leave your garments in one of our
                complimentary Signature bags, and we&apos;ll take care of the rest.
                You&apos;ll receive real-time updates throughout the process and
                have your freshly cleaned garments delivered right back to you.
              </p>
              <p className="mt-6 font-serif text-2xl font-bold text-primary">
                Always Free
              </p>
            </div>
            <div>
              <ServiceQuoteForm service="Pickup & Delivery" title="Schedule a Pickup" buttonText="Schedule Pickup" subtitle="Tell us where and when to pick up your garments." />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="section-padding bg-black text-white">
        <div className="container-wide">
          <h2 className="mb-12 text-center font-serif text-3xl font-bold tracking-tight md:text-4xl">
            How Our Delivery Works
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

      {/* Service Areas */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <h2 className="mb-12 text-center font-serif text-3xl font-bold tracking-tight text-zinc-900 md:text-4xl">
            Service <span className="text-primary">Areas</span>
          </h2>
          <div className="mx-auto max-w-4xl">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
              {serviceAreas.map((city) => (
                <div
                  key={city}
                  className="flex items-center gap-2 text-zinc-700"
                >
                  <MapPin className="h-4 w-4 flex-shrink-0 text-primary" />
                  <span>{city}</span>
                </div>
              ))}
            </div>
            <p className="mt-8 text-center text-sm text-zinc-500">
              Don&apos;t see your area? Contact us and we may still be able to
              serve you.
            </p>
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
            Schedule Your Free Pickup Today
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-200">
            Experience the convenience of professional dry cleaning delivered to
            your door at no extra cost.
          </p>
          <div className="mt-8">
            <Link href="#quote-form" className="inline-flex items-center justify-center bg-white px-8 py-3 text-sm font-semibold text-accent transition-colors hover:bg-primary hover:text-white rounded-[7px]">Schedule a Pickup →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
