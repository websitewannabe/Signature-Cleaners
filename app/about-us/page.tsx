import Image from "next/image";
import Link from "next/link";
import { generatePageMetadata } from "@/lib/metadata";
import HeroSection from "@/components/HeroSection";
import QuoteButton from "@/components/QuoteButton";
import {
  Award,
  Leaf,
  Clock,
  Search,
  Droplets,
  Sparkles,
  ShieldCheck,
  Scissors,
} from "lucide-react";

export const metadata = generatePageMetadata({
  title: "Our Story at Signature Cleaners in Doylestown, PA",
  description:
    "Learn about Signature Cleaners, our history, team, and commitment to quality dry cleaning in Bucks County. 20+ years of trusted garment care.",
  keywords: [
    "about Signature Cleaners",
    "Doylestown dry cleaners history",
    "Bucks County garment care",
    "dry cleaning team Doylestown",
  ],
  canonical: "/about-us",
});

const cities = [
  "Buckingham",
  "Carversville",
  "Chalfont",
  "Doylestown",
  "Dublin",
  "Fountainville",
  "Furlong",
  "Holland",
  "Ivyland",
  "Jamison",
  "Lahaska",
  "Morrisville",
  "New Hope",
  "Newtown",
  "Ottsville",
  "Perkasie",
  "Pipersville",
  "Point Pleasant",
  "Richboro",
  "Southampton",
  "Warminster",
  "Warrington",
  "Washington Crossing",
  "Yardley",
];

const stats = [
  { value: "20+", label: "Years Experience" },
  { value: "10k+", label: "Happy Customers" },
  { value: "24h", label: "Fast Turnaround" },
  { value: "10+", label: "Services" },
];

const values = [
  {
    icon: Award,
    title: "Quality First",
    description:
      "Every garment is inspected, treated, and finished to the highest standards using top-of-the-line equipment and time-tested techniques.",
  },
  {
    icon: Leaf,
    title: "Environmental Responsibility",
    description:
      "We invest in energy-efficient equipment and eco-friendly cleaning solutions that are gentle on fabrics and the environment.",
  },
  {
    icon: Clock,
    title: "Customer Convenience",
    description:
      "With rush orders, free pickup and delivery, and a central Doylestown location, we make garment care as effortless as possible.",
  },
];

const process = [
  {
    step: 1,
    icon: Search,
    title: "Inspection",
    description:
      "Every garment is carefully examined for stains, damage, and special care requirements before cleaning begins.",
  },
  {
    step: 2,
    icon: Droplets,
    title: "Stain Pre-Treatment",
    description:
      "Identified stains are pre-treated with specialized solutions matched to the fabric type and stain composition.",
  },
  {
    step: 3,
    icon: Sparkles,
    title: "Professional Cleaning",
    description:
      "Garments are cleaned using the optimal method for their fabric, whether dry cleaning, wet cleaning, or hand washing.",
  },
  {
    step: 4,
    icon: ShieldCheck,
    title: "Quality Control",
    description:
      "After cleaning, every item is re-inspected to ensure stains are removed and the garment meets our quality standards.",
  },
  {
    step: 5,
    icon: Scissors,
    title: "Finishing",
    description:
      "Garments are expertly pressed, steamed, and packaged for pickup or delivery, looking their absolute best.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <HeroSection
        image="/images/theTeam.webp"
        imageAlt="Signature Cleaners team"
        title="Our Story"
        subtitle="Decades of trusted garment care in the heart of Bucks County."
        useQuoteModal={false}
      />

      {/* Stats Bar */}
      <section className="border-b border-white/10 bg-zinc-900/80">
        <div className="container-wide grid grid-cols-2 gap-6 py-10 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-serif text-3xl font-bold text-primary">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-white/80">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* About Body */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl space-y-6 text-lg leading-relaxed text-white">
            <p>
              Signature Cleaners was founded on simple principles: provide a
              quality product, deliver excellent customer service, and offer fair
              pricing. With decades of experience in the industry, the team
              brings a deep understanding of fabric care and stain removal,
              including specialties like wedding gown cleaning and preservation.
              Every garment is treated with personal care and attention using
              top-of-the-line equipment to ensure the highest standards of
              cleanliness and presentation.
            </p>
            <p>
              Signature Cleaners welcomes rush orders and never makes promises
              they can&apos;t keep. Most items can be turned around in under 24
              hours, and if more time is needed, customers are notified
              immediately. Wedding gowns are preserved using museum-quality
              techniques designed to maintain their condition for years to
              come&mdash;ensuring that cherished garments stay as beautiful as
              the day they were worn.
            </p>
            <p>
              As the only member of the Dry Cleaning and Laundry Institute in
              the area, Signature Cleaners stays current on the latest fabrics
              and care methods. The team is always seeking new ways to improve
              their services, from adopting more efficient equipment to refining
              cleaning techniques. With our convenient Doylestown location,
              Signature Cleaners offers a full range of garment care
              services&mdash;from dry cleaning and tailoring to stain removal and
              shoe repair&mdash;with unmatched reliability and results.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="section-padding border-t border-white/10 bg-zinc-950">
        <div className="container-wide">
          <div className="mb-12 text-center">
            <h2 className="heading-xl mb-4">
              Mission &amp; <span className="text-primary">Values</span>
            </h2>
            <p className="mx-auto max-w-2xl text-white/80">
              The principles that guide every garment we touch and every customer
              we serve.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {values.map((value) => (
              <div key={value.title} className="card-luxury text-center">
                <value.icon className="mx-auto mb-4 h-10 w-10 text-primary" />
                <h3 className="mb-2 font-serif text-xl font-semibold text-white">
                  {value.title}
                </h3>
                <p className="text-sm text-white/80">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cleaning Process */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="mb-12 text-center">
            <h2 className="heading-xl mb-4">
              Our Cleaning{" "}
              <span className="text-primary">Process</span>
            </h2>
            <p className="mx-auto max-w-2xl text-white/80">
              A meticulous five-step process ensures every garment receives the
              care it deserves.
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-5">
            {process.map((item) => (
              <div key={item.step} className="flex flex-col">
                <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full border border-accent/30 bg-zinc-900">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="mb-1 text-center text-xs font-semibold uppercase tracking-widest text-primary">
                  Step {item.step}
                </div>
                <h3 className="mb-2 min-h-[3.5rem] text-center font-serif text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/80">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24">
        <Image
          src="/images/Background.webp"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-accent/80" />
        <div className="container-wide relative text-center">
          <h2 className="heading-xl mb-6 text-white">
            Ready to simplify your laundry routine?
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-lg text-white/80">
            Join 10,000+ satisfied customers who trust Signature Cleaners with
            their garment care.
          </p>
          <Link
            href="/schedule"
            className="inline-flex items-center justify-center rounded-[7px] bg-white px-8 py-3 text-sm font-semibold text-accent transition-colors hover:bg-primary"
          >
            Schedule a Pickup →
          </Link>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section-padding border-t border-white/10 bg-zinc-950">
        <div className="container-wide">
          <div className="mb-12 text-center">
            <h2 className="heading-xl mb-4">
              Areas <span className="text-primary">We Serve</span>
            </h2>
            <p className="mx-auto max-w-2xl text-white/80">
              We service the following areas in Bucks County and surrounding
              regions with free pickup and delivery.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-2 md:grid-cols-3 lg:grid-cols-4">
            {cities.map((city) => {
              const slug = city.toLowerCase().replace(/\s+/g, "_");
              return (
                <Link
                  key={city}
                  href={`/${slug}`}
                  className="flex items-center py-1 text-white transition-colors hover:text-primary"
                >
                  <span className="mr-2 text-primary">&bull;</span>
                  {city}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["LocalBusiness", "DryCleaningOrLaundry"],
            name: "Signature Cleaners",
            alternateName: "Signature Cleaners of Doylestown",
            url: "https://www.mysignaturecleaners.com",
            image:
              "https://www.mysignaturecleaners.com/images/theTeam.webp",
            logo: "https://www.mysignaturecleaners.com/images/logo.png",
            description:
              "Learn about Signature Cleaners, our history, team, and commitment to quality dry cleaning in Bucks County. 20+ years of trusted garment care.",
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
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                ],
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
            areaServed: cities.map((city) => ({
              "@type": "Place",
              name: city + ", PA",
            })),
          }),
        }}
      />
    </>
  );
}
