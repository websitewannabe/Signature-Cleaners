import Image from "next/image";
import Link from "next/link";
import { generatePageMetadata } from "@/lib/metadata";
import HeroSection from "@/components/HeroSection";
import QuoteButton from "@/components/QuoteButton";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import {
  AirVent,
  Car,
  Footprints,
  Gem,
  Home,
  Shirt,
  Sparkles,
} from "lucide-react";

export const metadata = generatePageMetadata({
  title:
    "Signature Cleaners Expert Dry Cleaning & Laundry in Doylestown, PA",
  description:
    "Top-rated dry cleaning in Doylestown, PA. Expert dry cleaning, wash and fold, tailoring, and free pickup and delivery throughout Bucks County.",
  keywords: [
    "dry cleaning near me",
    "laundry service Doylestown",
    "Bucks County dry cleaning",
  ],
  canonical: "/",
});

const services = [
  {
    name: "Dry Cleaning",
    description:
      "Expert care for suits, dresses, shirts, and delicate garments with eco-friendly solvents.",
    href: "/all-services/dry-cleaning",
    icon: AirVent,
    price: "From $9.95",
    cta: "View Our Dry Cleaning Services",
  },
  {
    name: "Wash & Fold",
    description:
      "Convenient per-pound laundry service with professional washing, drying, and folding.",
    href: "/all-services/wash-fold",
    icon: Sparkles,
    price: "$2.95/lb",
    cta: "View Our Wash & Fold Services",
  },
  {
    name: "Wedding Gown Preservation",
    description:
      "Museum-quality cleaning and preservation to keep your gown beautiful for years to come.",
    href: "/all-services/wedding-gown",
    icon: Gem,
    price: "From $325",
    cta: "View Our Gown Preservation Services",
  },
  {
    name: "Alterations & Tailoring",
    description:
      "Professional hemming, fit adjustments, and repairs with a 3-5 business day turnaround.",
    href: "/all-services/alteration-tailoring",
    icon: Shirt,
    price: "From $24.99",
    cta: "View Our Alteration Services",
  },
  {
    name: "Shoe Repair",
    description:
      "Heel replacement, sole repair, leather conditioning, and professional restoration.",
    href: "/all-services/shoe-repair",
    icon: Footprints,
    price: "From $24.99",
    cta: "View Our Shoe Repair Services",
  },
  {
    name: "Household Items",
    description:
      "Expert cleaning for comforters, blankets, draperies, curtains, rugs, and more.",
    href: "/all-services/clean-household-items",
    icon: Home,
    price: "From $39.95",
    cta: "View Our Household Cleaning Services",
  },
  {
    name: "Pickup & Delivery",
    description:
      "Free pickup and delivery throughout Bucks County. We come to you on your schedule.",
    href: "/all-services/delivery",
    icon: Car,
    price: "Free",
    cta: "Schedule a Free Pickup",
  },
];

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

const faqs = [
  {
    q: "How do I sign up?",
    a: 'Call (215) 345-1470 and include your name, address, and phone number on your first order indicating that you signed up online.',
  },
  {
    q: "Where are my clothes picked up and delivered?",
    a: "We will pick up and deliver your clothes to your home, your office, or to the concierge in your building.",
  },
  {
    q: "Is there a minimum order?",
    a: "No need to wait for a full bag of dirty clothes. We will pick up and deliver any amount.",
  },
  {
    q: "How do I pay for the service?",
    a: "Your dry cleaning will be charged automatically to your American Express, Visa, Mastercard, or Discover card.",
  },
  {
    q: "Do you offer same-day service?",
    a: "Yes! Drop off before 10 AM for same-day service at our Doylestown location.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex h-[100vh] flex-col justify-end">
        <Image
          src="/images/interior-hero.webp"
          alt="Signature Cleaners interior showcasing professional garment care in Doylestown"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

        <div className="container-wide relative z-10 pb-[210px] md:pb-[230px]">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-primary/60" />
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-primary">
              Old Fashioned Service. Guaranteed.
            </p>
          </div>
          <h1 className="heading-xl mb-6 max-w-3xl text-white">
            Doylestown&apos;s Best{" "}
            <span className="text-primary">Old Fashion</span> Dry Cleaner
          </h1>
          <p className="mb-10 max-w-xl text-base leading-relaxed text-white">
            Expert dry cleaning, tailoring, and garment care with free pickup
            &amp; delivery throughout Bucks County. 20+ years of trusted
            service.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/schedule" className="btn-primary">
              Schedule a Pickup
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 h-4 w-4"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
            </Link>
            <Link href="/all-services/all-services" className="btn-outline">
              View Services
            </Link>
          </div>
        </div>

        {/* Stats Bar - inside hero */}
        <div className="relative z-10 border-t border-white/10 bg-black/50 backdrop-blur-sm">
          <div className="container-wide grid grid-cols-2 gap-6 py-6 md:grid-cols-4 md:gap-0 md:divide-x md:divide-white/10">
            {[
              { value: "20+", label: "Years of Experience" },
              { value: "10k+", label: "Happy Customers" },
              { value: "24h", label: "Fast Turnaround" },
              { value: "10+", label: "Cleaning Services" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-serif text-3xl font-bold text-primary">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs font-medium uppercase tracking-widest text-white/80">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="mb-16 text-center">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-primary">
              What We Offer
            </p>
            <h2 className="heading-xl mb-5 text-zinc-900">
              Our <span className="text-primary">Services</span>
            </h2>
            <hr className="divider-gold mb-6" />
            <p className="mx-auto max-w-2xl text-zinc-600">
              From everyday dry cleaning to museum-quality wedding gown
              preservation, we handle every garment with expert care.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link key={service.href} href={service.href}>
                <div className="group flex h-full flex-col border border-zinc-200 bg-zinc-50 p-8 transition-all duration-500 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10" style={{ borderRadius: "7px" }}>
                  <service.icon className="mb-5 h-7 w-7 text-primary transition-colors group-hover:text-primary-light" />
                  <h3 className="mb-2 font-serif text-lg font-semibold text-zinc-900">
                    {service.name}
                  </h3>
                  <p className="mb-5 hidden text-sm leading-relaxed text-zinc-600 sm:block">
                    {service.description}
                  </p>
                  <div className="mt-auto space-y-4 pt-5 border-t border-zinc-200">
                    <span className="block text-xs font-semibold uppercase tracking-wider text-primary">
                      {service.price}
                    </span>
                    <span className="inline-flex items-center text-sm font-semibold text-zinc-900 transition-colors group-hover:text-primary">
                      {service.cta} &rarr;
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding border-t border-white/[0.06] bg-zinc-950">
        <div className="container-wide">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="relative aspect-[4/3] max-h-[400px] overflow-hidden" style={{ borderRadius: "7px" }}>
              <Image
                src="/images/theTeam.webp"
                alt="The Signature Cleaners team in Doylestown"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div>
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-primary">
                Our Story
              </p>
              <h2 className="heading-xl mb-6">
                About <span className="text-primary">Signature Cleaners</span>
              </h2>
              <hr className="divider-gold mb-6" />
              <p className="mb-4 text-base leading-relaxed text-white">
                Bucks County&apos;s most trusted dry cleaning service since 1995,
                serving Doylestown, New Hope, Newtown, and surrounding areas.
              </p>
              <p className="mb-4 text-base leading-relaxed text-white/80">
                Signature Cleaners was founded on simple principles: provide a
                quality product, deliver excellent customer service, and make the
                process convenient for busy families.
              </p>
              <p className="mb-8 text-base leading-relaxed text-white/80">
                With decades of experience, our team brings a deep understanding
                of fabric care and stain removal. Every garment is treated with
                the utmost care and attention to detail.
              </p>
              <Link href="/about-us" className="btn-primary">
                Learn More About Us
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 md:py-20">
        <Image
          src="/images/Background.webp"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-accent/85" />
        <div className="container-wide relative text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-white/60">
            Get Started Today
          </p>
          <h2 className="heading-xl mb-6 text-white">
            Ready to simplify your laundry routine?
          </h2>
          <hr className="mx-auto my-6 h-px w-16 border-0 bg-white/30" />
          <p className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-white/70">
            Join 10,000+ satisfied customers who trust Signature Cleaners with
            their garment care.
          </p>
          <Link
            href="/schedule"
            className="inline-flex items-center justify-center rounded-[7px] bg-white px-10 py-3.5 text-sm font-semibold uppercase tracking-widest text-accent transition-all duration-300 hover:bg-primary hover:text-white"
          >
            Schedule a Pickup →
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="mb-16 text-center">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-primary">
              Testimonials
            </p>
            <h2 className="heading-xl mb-5 text-zinc-900">
              What Our <span className="text-primary">Customers</span> Say
            </h2>
            <hr className="divider-gold" />
          </div>
          <TestimonialCarousel />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="mb-16 text-center">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-primary">
              Common Questions
            </p>
            <h2 className="heading-xl mb-5">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            <hr className="divider-gold" />
          </div>
          <div className="mx-auto max-w-3xl space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="border-b border-white/[0.06] py-5"
              >
                <h3 className="mb-2 font-medium text-white">{faq.q}</h3>
                <p className="text-sm leading-relaxed text-white/80">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section-padding border-t border-white/[0.06] bg-zinc-950">
        <div className="container-wide">
          <div className="mb-16 text-center">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-primary">
              Coverage Area
            </p>
            <h2 className="heading-xl mb-5">
              Areas <span className="text-primary">We Serve</span>
            </h2>
            <hr className="divider-gold mb-6" />
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
                  className="flex items-center py-1.5 text-white/80 transition-colors hover:text-primary"
                >
                  <span className="mr-2 text-primary/40">&bull;</span>
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
              "https://www.mysignaturecleaners.com/images/interior.webp",
            logo: "https://www.mysignaturecleaners.com/images/logo.png",
            description:
              "Top-rated dry cleaning service in Doylestown, PA. Expert dry cleaning, laundry, tailoring, and garment care with free pickup and delivery throughout Bucks County.",
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
