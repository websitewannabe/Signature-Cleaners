import { generatePageMetadata } from "@/lib/metadata";
import HeroSection from "@/components/HeroSection";
import ServiceQuoteForm from "@/components/ServiceQuoteForm";
import MobileCardSlider from "@/components/MobileCardSlider";
import Image from "next/image";
import Link from "next/link";
import {
  BedDouble,
  Blinds,
  SquareStack,
  Bath,
  Sofa,
  UtensilsCrossed,
} from "lucide-react";

export const metadata = generatePageMetadata({
  title: "Household Cleaning at Signature Cleaners Doylestown",
  description:
    "Expert cleaning for comforters, blankets, draperies, curtains, rugs, and household textiles in Doylestown, PA. Starting at $39.95.",
  canonical: "/all-services/clean-household-items",
});

const items = [
  {
    icon: BedDouble,
    title: "Comforters & Blankets",
    description:
      "Deep cleaning for down comforters, quilts, and blankets of all sizes and materials.",
  },
  {
    icon: Blinds,
    title: "Draperies & Curtains",
    description:
      "Professional cleaning that restores the beauty of your window treatments without shrinkage.",
  },
  {
    icon: SquareStack,
    title: "Rugs & Mats",
    description:
      "Area rugs and decorative mats are carefully cleaned to remove dirt, allergens, and stains.",
  },
  {
    icon: Bath,
    title: "Towels & Linens",
    description:
      "Restore softness and freshness to towels, sheets, and bed linens with professional laundering.",
  },
  {
    icon: Sofa,
    title: "Decorative Pillows",
    description:
      "Throw pillows and decorative cushions are cleaned and refreshed while maintaining their shape.",
  },
  {
    icon: UtensilsCrossed,
    title: "Table Linens",
    description:
      "Tablecloths, napkins, and runners are expertly cleaned and pressed for flawless entertaining.",
  },
];

export default function CleanHouseholdItemsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Household Items Cleaning",
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
      "Expert cleaning for comforters, blankets, draperies, curtains, rugs, and household textiles.",
    offers: {
      "@type": "Offer",
      price: "39.95",
      priceCurrency: "USD",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "39.95",
        priceCurrency: "USD",
        unitText: "per item",
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
        image="/images/householdItems.webp"
        imageAlt="Household items cleaning at Signature Cleaners"
        title="Household Items Cleaning"
        subtitle="Expert care for your home textiles and specialty items."
        ctaHref="#quote-form"
      />

      {/* Overview + Quote Form */}
      <section id="quote-form" className="section-padding bg-black text-white" style={{ scrollMarginTop: "80px" }}>
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-serif text-3xl font-bold tracking-tight md:text-4xl">
                A Cleaner Home,{" "}
                <span className="text-primary">Professionally Done</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-white">
                Your home textiles deserve the same level of care as your finest
                garments. From bulky comforters that won&apos;t fit in a home
                washer to delicate draperies and heirloom table linens, Signature
                Cleaners has the equipment and expertise to clean them properly.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-white">
                We remove embedded dirt, allergens, and stains while preserving the
                fabric&apos;s color, texture, and integrity. Your items come back
                fresh, clean, and ready to brighten your home.
              </p>
              <p className="mt-6 font-serif text-2xl font-bold text-primary">
                Starting at $39.95
              </p>
            </div>
            <div>
              <ServiceQuoteForm service="Household Items" title="Schedule a Cleaning" buttonText="Schedule Cleaning" subtitle="Tell us about your household items cleaning needs." />
            </div>
          </div>
        </div>
      </section>

      {/* Items Grid */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <h2 className="mb-12 text-center font-serif text-3xl font-bold tracking-tight text-zinc-900 md:text-4xl">
            What We Clean
          </h2>
          {/* Mobile: Auto-sliding cards */}
          <MobileCardSlider light>
            {items.map((item) => (
              <div key={item.title} className="border border-zinc-200 bg-zinc-50 p-8 transition-all duration-500 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10" style={{ borderRadius: "7px" }}>
                <item.icon className="mb-4 h-8 w-8 text-primary" />
                <h3 className="mb-2 font-serif text-lg font-bold text-zinc-900">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-zinc-600">
                  {item.description}
                </p>
              </div>
            ))}
          </MobileCardSlider>

          {/* Desktop: Grid layout */}
          <div className="hidden gap-6 sm:grid sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <div key={item.title} className="border border-zinc-200 bg-zinc-50 p-8 transition-all duration-500 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10" style={{ borderRadius: "7px" }}>
                <item.icon className="mb-4 h-8 w-8 text-primary" />
                <h3 className="mb-2 font-serif text-lg font-bold text-zinc-900">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-zinc-600">
                  {item.description}
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
            Refresh Your Entire Home
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-200">
            From comforters to curtains, we make your home textiles look and feel
            brand new. Schedule a pickup today.
          </p>
          <div className="mt-8">
            <Link href="#quote-form" className="inline-flex items-center justify-center bg-white px-8 py-3 text-sm font-semibold text-accent transition-colors hover:bg-primary hover:text-white rounded-[7px]">Schedule a Pickup →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
