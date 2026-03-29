import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { cityData } from "@/lib/city-data";
import HeroSection from "@/components/HeroSection";
import { Truck, Clock, Award, Sparkles, ShieldCheck, Shirt, Scissors } from "lucide-react";

const services = [
  { name: "Dry Cleaning", href: "/all-services/dry-cleaning", icon: Sparkles },
  { name: "Wash & Fold", href: "/all-services/wash-fold", icon: Shirt },
  { name: "Alterations & Tailoring", href: "/all-services/alteration-tailoring", icon: Scissors },
  { name: "Wedding Gown Preservation", href: "/all-services/wedding-gown", icon: Award },
  { name: "Shoe Repair", href: "/all-services/shoe-repair", icon: ShieldCheck },
  { name: "Household Items", href: "/all-services/clean-household-items", icon: Clock },
  { name: "Pickup & Delivery", href: "/all-services/delivery", icon: Truck },
];

export function generateStaticParams() {
  return Object.keys(cityData).map((city) => ({ city }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city: slug } = await params;
  const city = cityData[slug];

  if (!city) {
    return { title: "City Not Found at Signature Cleaners" };
  }

  return {
    title: city.seo.title,
    description: city.seo.description,
    keywords: city.seo.keywords,
    alternates: {
      canonical: `https://www.mysignaturecleaners.com/${slug}`,
    },
    openGraph: {
      title: city.seo.title,
      description: city.seo.description,
      url: `https://www.mysignaturecleaners.com/${slug}`,
      type: "website",
      locale: "en_US",
      siteName: "Signature Cleaners",
    },
    twitter: {
      card: "summary_large_image",
      title: city.seo.title,
      description: city.seo.description,
    },
  };
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city: slug } = await params;
  const city = cityData[slug];

  if (!city) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "DryCleaningOrLaundry"],
    name: "Signature Cleaners",
    url: `https://www.mysignaturecleaners.com/${slug}`,
    image: "https://www.mysignaturecleaners.com/images/interior.webp",
    logo: "https://www.mysignaturecleaners.com/images/logo.png",
    description: city.seo.description,
    telephone: "+1-215-345-1470",
    email: "customerservice@mysignaturecleaners.com",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1456 Ferry Road #10",
      addressLocality: "Doylestown",
      addressRegion: "PA",
      postalCode: "18901",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "40.310005",
      longitude: "-75.129097",
    },
    areaServed: {
      "@type": "Place",
      name: `${city.name}, PA`,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "15:00",
      },
    ],
  };

  return (
    <>
      {/* Hero */}
      <HeroSection
        image="/images/theTeam.webp"
        imageAlt={`Signature Cleaners team serving ${city.name}, PA`}
        title={`Dry Cleaning in ${city.name}`}
        subtitle={city.subtitle}
      />

      {/* About Section with Bellhop Logo */}
      <section className="section-padding bg-black text-white">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
                Serving {city.name}, PA
              </p>
              <h2 className="font-serif text-3xl font-bold tracking-tight md:text-4xl">
                About Our Service in{" "}
                <span className="text-primary">{city.name}</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-white">
                {city.about}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/schedule" className="btn-primary">
                  Schedule a Pickup →
                </Link>
                <Link href="/contact-us" className="btn-outline">
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/images/full_logo_with_bellhop.png"
                alt="Signature Cleaners bellhop logo"
                width={400}
                height={400}
                className="w-full max-w-[350px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-zinc-950 text-white">
        <div className="container-wide">
          <div className="mb-12 text-center">
            <h2 className="font-serif text-3xl font-bold tracking-tight md:text-4xl">
              Services Available in{" "}
              <span className="text-primary">{city.name}</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-white/80">
              We offer a full range of professional garment care services for{" "}
              {city.name} residents with free pickup and delivery.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link key={service.href} href={service.href}>
                <div className="card-luxury group flex items-center gap-4 transition-colors hover:border-primary/30">
                  <service.icon className="h-6 w-6 flex-shrink-0 text-primary" />
                  <h3 className="font-serif text-lg font-semibold text-white group-hover:text-primary transition-colors">
                    {service.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Section with Van Image */}
      <section className="section-padding bg-black text-white">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[7px]">
              <Image
                src="/images/Red_van_outfront.jpg"
                alt="Signature Cleaners delivery van serving Bucks County"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="font-serif text-3xl font-bold tracking-tight md:text-4xl">
                Free Pickup &{" "}
                <span className="text-primary">Delivery</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-white">
                We bring Signature Cleaners directly to your door in {city.name}.
                Our free pickup and delivery service runs twice weekly throughout
                Bucks County. Simply schedule a time, leave your garments in one
                of our complimentary bags, and we take care of the rest.
              </p>
              <div className="mt-6 flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <Truck className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">Free Delivery</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">Twice Weekly</span>
                </div>
              </div>
              <div className="mt-8">
                <Link href="/all-services/delivery" className="btn-primary">
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-zinc-950 text-white">
        <div className="container-wide">
          <h2 className="mb-12 text-center font-serif text-3xl font-bold tracking-tight md:text-4xl">
            Frequently Asked{" "}
            <span className="text-primary">Questions</span>
          </h2>
          <div className="mx-auto max-w-3xl">
            {city.faq.map((item, i) => (
              <div key={i} className="border-b border-white/[0.06] py-5">
                <h3 className="mb-2 font-medium text-white">{item.question}</h3>
                <p className="text-sm leading-relaxed text-white/80">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 md:py-28">
        <Image
          src="/images/Storefront_nighttime.jpg"
          alt="Signature Cleaners storefront at night"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-accent/80" />
        <div className="container-wide relative z-10 text-center">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-white md:text-5xl">
            Ready for Premium Dry Cleaning in {city.name}?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-200">
            Join thousands of satisfied customers across Bucks County who trust
            Signature Cleaners with their garment care.
          </p>
          <div className="mt-8">
            <Link href="/schedule" className="inline-flex items-center justify-center bg-white px-8 py-3 text-sm font-semibold text-accent transition-colors hover:bg-primary hover:text-white rounded-[7px]">
              Schedule a Pickup →
            </Link>
          </div>
        </div>
      </section>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
