import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { Button } from "@/components/ui/button";
import { Car, Search } from "lucide-react";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function HomePage() {
  const [mapLoaded, setMapLoaded] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showResults, setShowResults] = useState(false);

  const allServices = [
    { name: "Dry Cleaning", path: "/all-services/dry-cleaning" },
    { name: "Wash & Fold", path: "/all-services/wash-fold" },
    { name: "Wedding Gowns", path: "/all-services/wedding-gown" },
    { name: "Household Items", path: "/all-services/clean-household-items" },
    { name: "Delivery", path: "/all-services/delivery" },
    { name: "Tailoring", path: "/all-services/alteration-tailoring" },
    { name: "Shoe Repair", path: "/all-services/shoe-repair" },
  ];

  const handleSearchChange = (e: any) => {
    const query = e.target.value;
    setSearchQuery(query);
    setShowResults(query.length > 0);
  };

  const filteredResults = {
    services: allServices.filter((service) =>
      service.name.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Helmet>
        <link rel="canonical" href="https://www.mysignaturecleaners.com/" />
        <title>
          Signature Cleaners | Expert Dry Cleaning & Laundry in Doylestown, PA
        </title>
        <meta
          name="description"
          content="Top-rated dry cleaning near me in Doylestown, PA. Signature Cleaners provides expert dry cleaning, wash & fold, tailoring, and more with free pickup and delivery throughout Bucks County."
        />
        <meta
          name="keywords"
          content="dry cleaning near me, laundry service near me, Doylestown dry cleaners, Bucks County dry cleaning, dry cleaning pickup delivery, wash and fold near me, tailoring near me, garment care Doylestown, best dry cleaners Doylestown"
        />

        {/* Open Graph Metadata */}
        <meta
          property="og:title"
          content="Signature Cleaners | Expert Dry Cleaning & Laundry in Doylestown, PA"
        />
        <meta
          property="og:description"
          content="Signature Cleaners provides expert dry cleaning, wash & fold, tailoring, and more with pickup and delivery throughout Doylestown, PA and Bucks County."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.mysignaturecleaners.com/"
        />
        <meta
          property="og:image"
          content="https://www.mysignaturecleaners.com/images/signature-cleaners-logo-white.png"
        />
        <meta property="og:site_name" content="Signature Cleaners" />
        <meta property="og:locale" content="en_US" />

        {/* Geographic Targeting */}
        <meta name="geo.region" content="US-PA" />
        <meta name="geo.placename" content="Doylestown, PA" />
        <meta name="geo.position" content="40.310005;-75.129097" />
        <meta name="ICBM" content="40.310005, -75.129097" />
        <link
          rel="alternate"
          hrefLang="en-us"
          href="https://www.mysignaturecleaners.com/"
        />

        {/* Twitter Card Metadata */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Signature Cleaners | Expert Dry Cleaning & Laundry in Doylestown, PA"
        />
        <meta
          name="twitter:description"
          content="Signature Cleaners provides expert dry cleaning, wash & fold, tailoring, and more with pickup and delivery throughout Doylestown, PA and Bucks County."
        />
        <meta
          name="twitter:image"
          content="https://www.mysignaturecleaners.com/images/signature-cleaners-logo-white.png"
        />

        {/* FAQ Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "How do I sign up?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Click here or Call (215) 345-1470 – Include your sign up form with your name, address and phone number on your first order indicating that you signed up online.",
                },
              },
              {
                "@type": "Question",
                name: "Where are my clothes picked up and delivered?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We will pick up and deliver your clothes to your home, your office or to the concierge in your building.",
                },
              },
              {
                "@type": "Question",
                name: "Is there a minimum order?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No need to wait for a full bag of dirty clothes, we will pick up and deliver any amount.",
                },
              },
              {
                "@type": "Question",
                name: "How do I pay for the service?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Your dry cleaning will be charged automatically to your American express, Visa. Master card or Discover Card.",
                },
              },
              {
                "@type": "Question",
                name: "How do you keep my credit card safe?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We use the latest encryption and authentication services for all our web transactions so that your credit card information remains safe. If you prefer, just give us a call at (877) 779-1269 and we can assist you via phone.",
                },
              },
            ],
          })}
        </script>

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["LocalBusiness", "Laundromat", "DryCleaner"],
            name: "Signature Cleaners",
            alternateName: "Signature Cleaners of Doylestown",
            url: "https://www.mysignaturecleaners.com",
            image: "https://www.mysignaturecleaners.com/images/interior.webp",
            logo: "https://www.mysignaturecleaners.com/images/logo.png",
            description:
              "Top-rated dry cleaning service in Doylestown, PA. Signature Cleaners offers expert dry cleaning, laundry, tailoring, and garment care with free pickup and delivery services throughout Bucks County.",
            telephone: "+1-215-345-1470",
            email: "customerservice@mysignaturecleaners.com",
            priceRange: "$$",
            currenciesAccepted: "USD",
            paymentAccepted: "Cash, Credit Card, Debit Card",
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
                closes: "19:00",
              },
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: "Saturday",
                opens: "08:00",
                closes: "17:00",
              },
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: "Sunday",
                opens: "10:00",
                closes: "15:00",
              },
            ],
            areaServed: [
              {
                "@type": "City",
                name: "Doylestown, PA",
              },
              {
                "@type": "City",
                name: "New Hope, PA",
              },
              {
                "@type": "City",
                name: "Newtown, PA",
              },
              {
                "@type": "City",
                name: "Warrington, PA",
              },
              {
                "@type": "City",
                name: "Furlong, PA",
              },
              {
                "@type": "City",
                name: "Richboro, PA",
              },
              {
                "@type": "City",
                name: "Warminster, PA",
              },
              {
                "@type": "City",
                name: "Buckingham, PA",
              },
              {
                "@type": "City",
                name: "Yardley, PA",
              },
              {
                "@type": "City",
                name: "Jamison, PA",
              },
            ],
            serviceArea: {
              "@type": "GeoCircle",
              geoMidpoint: {
                "@type": "GeoCoordinates",
                latitude: "40.310005",
                longitude: "-75.129097",
              },
              geoRadius: "16093",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.8",
              reviewCount: "127",
              bestRating: "5",
              worstRating: "1",
            },
            review: [
              {
                "@type": "Review",
                author: {
                  "@type": "Person",
                  name: "Sarah Johnson",
                },
                datePublished: "2024-01-15",
                reviewBody:
                  "Excellent dry cleaning service! They got stains out that other cleaners couldn't remove. Pickup and delivery is so convenient.",
                reviewRating: {
                  "@type": "Rating",
                  ratingValue: "5",
                  bestRating: "5",
                },
              },
            ],
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Signature Cleaners Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Dry Cleaning",
                    description:
                      "State-of-the-art dry cleaning for suits, dresses, and more.",
                    priceSpecification: {
                      "@type": "PriceSpecification",
                      priceCurrency: "USD",
                      price: "6.99",
                    },
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Wash & Fold",
                    description:
                      "Convenient wash and fold service for everyday laundry.",
                    priceSpecification: {
                      "@type": "PriceSpecification",
                      priceCurrency: "USD",
                      price: "2.99",
                      unitText: "Pound",
                    },
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Wedding Gown Cleaning",
                    description:
                      "Preservation and detailed cleaning of wedding gowns.",
                    priceSpecification: {
                      "@type": "PriceSpecification",
                      priceCurrency: "USD",
                      price: "99.99",
                    },
                  },
                },
              ],
            },
          })}
        </script>
      </Helmet>

      <Header />

      {/* Hero Section */}
      <section className="relative flex min-h-[85vh] items-center">
        <div className="absolute inset-0 bg-[url('/images/interior.webp')] bg-cover bg-center bg-no-repeat md:bg-[url('/images/interior-hero.webp')]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 to-transparent"></div>
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">
              Doylestown's #1 Rated Dry Cleaner Near You
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl leading-relaxed text-white/90">
              Old Fashioned Service. Guaranteed.
            </p>

            {/* Search Bar */}
            <div className="relative mx-auto mt-8 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 transform text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  placeholder="Search for services..."
                  className="w-full rounded-md border border-red-500 bg-white py-3 pl-10 pr-3 text-gray-900 placeholder-gray-500 shadow-lg focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#F6AE2D]"
                />
              </div>

              {/* Search Results */}
              {showResults && filteredResults.services.length > 0 && (
                <div className="absolute left-0 right-0 top-full z-50 mt-2 max-h-64 overflow-y-auto rounded-md border border-gray-200 bg-white shadow-lg">
                  <div className="p-2">
                    <h3 className="px-2 py-1 text-sm font-semibold text-gray-600">
                      Services
                    </h3>
                    {filteredResults.services.map((service, index) => (
                      <Link
                        key={`service-${index}`}
                        href={service.path}
                        onClick={() => setShowResults(false)}
                        className="block w-full rounded px-2 py-2 text-left text-sm text-gray-900 hover:bg-gray-100"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="/schedule" className="w-full sm:w-auto">
                <Button className="w-full rounded bg-[#790003] px-4 py-2 text-sm uppercase tracking-wider text-white transition-colors duration-200 hover:bg-[#F6AE2D] sm:w-auto">
                  Schedule Pickup
                </Button>
              </Link>
              <Link
                href="/all-services/all-services"
                className="w-full sm:w-auto"
              >
                <Button className="w-full rounded bg-white px-4 py-2 text-sm uppercase tracking-wider text-black transition-colors duration-200 hover:bg-[#790103] hover:text-white sm:w-auto">
                  View Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative overflow-hidden py-16">
        <div className="absolute inset-0 bg-[#F8F5F0]">
          {/* Primary radial gradient for soft light effect */}
          <div className="absolute inset-0 bg-[radial-gradient(70%_50%_at_50%_50%,#fff_0%,transparent_100%)] opacity-30"></div>

          {/* Parallel diagonal streaks */}
          <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_50px,rgba(0,0,0,0.05)_50px,rgba(0,0,0,0.05)_100px)] opacity-25"></div>

          {/* Soft overlay gradient */}
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(248,245,240,0.1)_0%,rgba(248,245,240,0.2)_100%)]"></div>
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-[#790003] md:text-4xl">
              Our Services
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-xl leading-relaxed text-[#790003]/80 text-neutral-800">
              Experience exceptional garment care with our premium cleaning
              services, tailored to preserve and enhance your wardrobe.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Dry Cleaning */}
            <div className="group flex h-full flex-col overflow-hidden bg-[#790003] shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="h-40 flex-shrink-0 overflow-hidden bg-[url('/images/interior-two.webp')] bg-cover bg-center bg-no-repeat transition-transform duration-300 group-hover:scale-105"></div>
              <div className="flex flex-grow flex-col p-6">
                <div className="flex flex-grow flex-col space-y-3">
                  <h3 className="text-xl font-semibold text-white">
                    Dry Cleaning
                  </h3>
                  <div className="h-0.5 w-12 bg-[#181818]"></div>
                  <p className="line-clamp-3 flex-grow text-white">
                    State-of-the-art dry cleaning services for all your delicate
                    and special garments, ensuring the highest quality care.
                  </p>
                  <Link href="/all-services/dry-cleaning" className="block">
                    <Button className="w-full rounded-none bg-white text-black transition-colors duration-300 hover:bg-white hover:text-black">
                      Dry Cleaning
                    </Button>
                  </Link>
                </div>
                <div className="mt-8 flex flex-col items-center gap-4 border-t border-[#790003] pt-4 sm:flex-row">
                  <span className="text-lg font-semibold text-white">
                    From $9.95
                  </span>
                  <Link
                    href="/schedule"
                    className="w-full sm:ml-auto sm:w-auto"
                  >
                    <Button className="w-full rounded-none bg-[#790003] font-medium text-white transition-colors duration-300 hover:bg-[#F6AE2D]">
                      Book Now
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            {/* Wash & Fold */}
            <div className="group flex h-full flex-col overflow-hidden bg-[#790003] shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="h-40 flex-shrink-0 overflow-hidden bg-[url('/images/washFold.webp')] bg-cover bg-center bg-no-repeat transition-transform duration-300 group-hover:scale-105"></div>
              <div className="flex flex-grow flex-col p-6">
                <div className="flex flex-grow flex-col space-y-3">
                  <h3 className="text-xl font-semibold text-white">
                    Wash & Fold
                  </h3>
                  <div className="h-0.5 w-12 bg-[#181818]"></div>
                  <p className="line-clamp-3 flex-grow text-white">
                    Convenient wash and fold service for your everyday laundry
                    needs, saving you time and effort.
                  </p>
                  <Link href="/all-services/wash-fold" className="block">
                    <Button className="w-full rounded-none bg-white text-black transition-colors duration-300 hover:bg-white hover:text-black">
                      Laundry Made Easy
                    </Button>
                  </Link>
                </div>
                <div className="mt-8 flex flex-col items-center gap-4 border-t border-[#181818] pt-4 sm:flex-row">
                  <span className="text-lg font-semibold text-white">
                    $2.95/lb
                  </span>
                  <Link
                    href="/schedule"
                    className="w-full sm:ml-auto sm:w-auto"
                  >
                    <Button className="w-full rounded-none bg-[#790003] font-medium text-white transition-colors duration-300 hover:bg-[#F6AE2D]">
                      Book Now
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            {/* Wedding Gowns */}
            <div className="group flex h-full flex-col overflow-hidden bg-[#790003] shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="h-40 flex-shrink-0 overflow-hidden bg-[url('/images/weddingGown.webp')] bg-cover bg-center bg-no-repeat transition-transform duration-300 group-hover:scale-105"></div>
              <div className="flex flex-grow flex-col p-6">
                <div className="flex flex-grow flex-col space-y-3">
                  <h3 className="text-xl font-semibold text-white">
                    Wedding Gowns
                  </h3>
                  <div className="h-0.5 w-12 bg-[#181818]"></div>
                  <p className="line-clamp-3 flex-grow text-white">
                    Specialized cleaning and preservation services for wedding
                    gowns, ensuring your precious memories last a lifetime.
                  </p>
                  <Link href="/all-services/wedding-gown" className="block">
                    <Button className="w-full rounded-none bg-white text-black transition-colors duration-300 hover:bg-white hover:text-black">
                      Gown Care
                    </Button>
                  </Link>
                </div>
                <div className="mt-8 flex flex-col items-center gap-4 border-t border-[#181818] pt-4 sm:flex-row">
                  <span className="text-lg font-semibold text-white">
                    From $325
                  </span>
                  <Link
                    href="/schedule"
                    className="w-full sm:ml-auto sm:w-auto"
                  >
                    <Button className="w-full rounded-none bg-[#790003] font-medium text-white transition-colors duration-300 hover:bg-[#F6AE2D]">
                      Book Now
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            {/* Household Items */}
            <div className="group flex h-full flex-col overflow-hidden bg-[#790003] shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="h-40 flex-shrink-0 overflow-hidden bg-[url('/images/householdItems.webp')] bg-cover bg-center bg-no-repeat transition-transform duration-300 group-hover:scale-105"></div>
              <div className="flex flex-grow flex-col p-6">
                <div className="flex flex-grow flex-col space-y-3">
                  <h3 className="text-xl font-semibold text-white">
                    Cleaning of Household Items
                  </h3>
                  <div className="h-0.5 w-12 bg-[#181818]"></div>
                  <p className="line-clamp-3 flex-grow text-white">
                    Comprehensive cleaning solutions for household items
                    including comforters, blankets, and decorative pieces.
                  </p>
                  <Link
                    href="/all-services/clean-household-items"
                    className="block"
                  >
                    <Button className="w-full rounded-none bg-white text-black transition-colors duration-300 hover:bg-white hover:text-black">
                      Clean Your Homewear
                    </Button>
                  </Link>
                </div>
                <div className="mt-8 flex flex-col items-center gap-4 border-t border-[#181818] pt-4 sm:flex-row">
                  <span className="text-lg font-semibold text-white">
                    From $39.95
                  </span>
                  <Link
                    href="/schedule"
                    className="w-full sm:ml-auto sm:w-auto"
                  >
                    <Button className="w-full rounded-none bg-[#790003] font-medium text-white transition-colors duration-300 hover:bg-[#F6AE2D]">
                      Book Now
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Service Category Icons */}
          <div className="mb-8 mt-12">
            <div className="flex flex-wrap justify-center gap-8 md:gap-12">
              {/* Delivery */}
              <Link
                href="/all-services/delivery"
                className="group flex flex-col items-center"
              >
                <div
                  className="flex h-20 w-20 items-center justify-center transition-transform group-hover:scale-110"
                  role="img"
                  aria-label="Delivery Service"
                >
                  <Car className="h-12 w-12 text-[#790003]" />
                </div>
                <span className="mt-2 text-sm font-medium text-black">
                  Delivery
                </span>
              </Link>

              {/* Alterations & Tailoring */}
              <Link
                href="/all-services/alteration-tailoring"
                className="group flex flex-col items-center"
              >
                <div
                  className="flex h-20 w-20 items-center justify-center transition-transform group-hover:scale-110"
                  role="img"
                  aria-label="Alterations and Tailoring Service"
                >
                  <img
                    src="/images/shirt.png"
                    alt="Tailoring"
                    className="h-12 w-12"
                  />
                </div>
                <span className="mt-2 text-sm font-medium text-black">
                  Tailoring
                </span>
              </Link>

              {/* Shoe Repair */}
              <Link
                href="/all-services/shoe-repair"
                className="group flex flex-col items-center"
              >
                <div
                  className="flex h-20 w-20 items-center justify-center transition-transform group-hover:scale-110"
                  role="img"
                  aria-label="Shoe Repair Service"
                >
                  <img
                    src="/images/shoes.png"
                    alt="Shoe Repair"
                    className="h-12 w-12"
                  />
                </div>
                <span className="mt-2 text-sm font-medium text-black">
                  Shoe Repair
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative overflow-hidden bg-[#790003] py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#fff_0%,transparent_60%)] opacity-10"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
              Why Choose Signature Cleaners?
            </h2>
            <div className="mx-auto mb-8 mt-6 h-1 w-24 bg-[#F6AE2D]"></div>
          </div>

          <div className="mb-16 grid gap-8 md:grid-cols-3">
            <div className="transform rounded-lg bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#790003]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="mb-4 text-center text-xl font-semibold text-white">
                Expert Care
              </h3>
              <p className="text-center text-white/90">
                Decades of expertise combined with cutting-edge eco-friendly
                cleaning technology for unparalleled results.
              </p>
            </div>

            <div className="transform rounded-lg bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#790003]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
              </div>
              <h3 className="mb-4 text-center text-xl font-semibold text-white">
                Eco-Friendly
              </h3>
              <p className="text-center text-white/90">
                Committed to preserving your wardrobe while protecting our
                environment with sustainable practices.
              </p>
            </div>

            <div className="transform rounded-lg bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#790003]">
                <Car className="h-8 w-8 text-white" />
              </div>
              <h3 className="mb-4 text-center text-xl font-semibold text-white">
                Convenient Service
              </h3>
              <p className="text-center text-white/90">
                Door-to-door delivery with meticulous attention to detail,
                valuing your time as much as your garments.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link href="/schedule">
              <Button className="bg-white px-6 py-3 font-medium text-black shadow-md transition duration-300 hover:bg-[#F6AE2D] hover:shadow-lg">
                Get Started Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="relative overflow-hidden bg-[#F8F5F0] py-16">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          {/* Primary radial gradient for soft light effect */}
          <div className="absolute inset-0 bg-[radial-gradient(70%_50%_at_50%_50%,#fff_0%,transparent_100%)] opacity-30"></div>

          {/* Parallel diagonal streaks */}
          <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_50px,rgba(0,0,0,0.05)_50px,rgba(0,0,0,0.05)_100px)] opacity-25"></div>

          {/* Soft overlay gradient */}
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(248,245,240,0.1)_0%,rgba(248,245,240,0.2)_100%)]"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:hidden">
            <div className="relative h-[300px] overflow-hidden rounded-lg shadow-xl">
              <img
                src="/images/theTeam.webp"
                alt="Signature Cleaners Team"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-[#790003] md:text-4xl">
              About Signature Cleaners
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-neutral-600">
              Bucks County's most trusted dry cleaning service since 1995,
              serving Doylestown, New Hope, Newtown, and surrounding communities
              with expert garment care and convenient pickup & delivery.
            </p>
          </div>

          <div className="mb-16 grid items-center gap-12 md:grid-cols-2">
            <div className="space-y-6">
              <p className="leading-relaxed text-neutral-700">
                Signature Cleaners was founded on simple principles: provide a
                quality product, deliver excellent customer service, and offer
                fair pricing.
              </p>
              <p className="leading-relaxed text-neutral-700">
                With decades of experience, the team brings a deep understanding
                of fabric care and stain removal. Every garment is treated with
                personal care using top-of-the-line equipment to ensure high
                standards of cleanliness and presentation.
              </p>
              <Link href="/about-us" className="inline-block">
                <Button className="bg-[#790003] text-white hover:bg-[#F6AE2D]">
                  Learn More About Us
                </Button>
              </Link>
            </div>
            <div className="relative hidden h-[400px] overflow-hidden rounded-lg shadow-xl md:block">
              <img
                src="/images/theTeam.webp"
                alt="Signature Cleaners Team"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="hidden gap-8 md:grid md:grid-cols-3">
            <div className="rounded-lg bg-white p-8 shadow-lg transition-shadow duration-300 hover:shadow-xl">
              <div className="mb-4 text-[#790003]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-neutral-900">
                Quality First
              </h3>
              <p className="text-neutral-600">
                We never compromise on quality. Every garment receives
                personalized attention.
              </p>
            </div>

            <div className="rounded-lg bg-white p-8 shadow-lg transition-shadow duration-300 hover:shadow-xl">
              <div className="mb-4 text-[#790003]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h.5A2.5 2.5 0 0020 5.5V3.935M3 20.488V8.212a2 2 0 011.696-1.977l5-1.039a2 2 0 01.608 0l5 1.039a2 2 0 011.696 1.977v12.276l-6.5-2.536a2 2 0 00-1.5 0L3 20.488z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-neutral-900">
                Environmental Responsibility
              </h3>
              <p className="text-neutral-600">
                Eco-friendly cleaning methods that reduce environmental
                footprint while delivering exceptional results.
              </p>
            </div>

            <div className="rounded-lg bg-white p-8 shadow-lg transition-shadow duration-300 hover:shadow-xl">
              <div className="mb-4 text-[#790003]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-neutral-900">
                Customer Convenience
              </h3>
              <p className="text-neutral-600">
                Designed for your busy schedule with convenient pickup &
                delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="bg-[#181818] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-[#FFFFFF] md:text-5xl">
              What Our Customers Say
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-xl text-[#FFFFFF]/80">
              Discover why our customers trust us with their garments.
            </p>
          </div>

          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="mx-auto w-full max-w-6xl"
          >
            <CarouselContent>
              <CarouselItem className="px-4 md:basis-1/3">
                <div className="flex h-full transform flex-col bg-[#000000] p-8 shadow-lg transition-all duration-300 hover:shadow-xl">
                  <div className="flex-grow">
                    <div className="mb-6 text-4xl text-[#FFFFFF]">"</div>
                    <div className="mb-4 flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="text-[#FFFFFF]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </div>
                      ))}
                    </div>
                    <p className="text-lg text-neutral-400">
                      "The staff is so helpful and even brought out my items to
                      my car since my baby was sleeping. Can’t thank them enough
                      for their service. Highly recommend for any laundering you
                      need."
                    </p>
                  </div>
                  <div className="mt-6 border-t border-[#790003] pt-4">
                    <div className="flex items-center">
                      <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary font-bold text-white">
                        M
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">Maggie B.</h4>
                        <p className="text-sm text-neutral-400">
                          Satisfied Customer
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>

              <CarouselItem className="px-4 md:basis-1/3">
                <div className="flex h-full transform flex-col bg-[#000000] p-8 shadow-lg transition-all duration-300 hover:shadow-xl">
                  <div className="flex-grow">
                    <div className="mb-6 text-4xl text-[#FFFFFF]">"</div>
                    <div className="mb-4 flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="text-[#FFFFFF]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </div>
                      ))}
                    </div>
                    <p className="text-lg text-neutral-400">
                      "I needed two Dresses pressed on short notice and
                      signature cleaners had the best reviews. Now I know why!
                      They were accommodating, quick, and so so welcoming and
                      kind. Finding places like this is rare these days! Highly
                      recommend."
                    </p>
                  </div>
                  <div className="mt-6 border-t border-[#790003] pt-4">
                    <div className="flex items-center">
                      <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary font-bold text-white">
                        G
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">
                          Gabrielle A.
                        </h4>
                        <p className="text-sm text-neutral-400">
                          Satisfied Customer
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>

              <CarouselItem className="px-4 md:basis-1/3">
                <div className="flex h-full transform flex-col bg-[#000000] p-8 shadow-lg transition-all duration-300 hover:shadow-xl">
                  <div className="flex-grow">
                    <div className="mb-6 text-4xl text-[#FFFFFF]">"</div>
                    <div className="mb-4 flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="text-[#FFFFFF]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </div>
                      ))}
                    </div>
                    <p className="text-lg text-neutral-400">
                      "People are the best part of this business. Always
                      friendly and more than helpful "
                    </p>
                  </div>
                  <div className="mt-6 border-t border-[#790003] pt-4">
                    <div className="flex items-center">
                      <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary font-bold text-white">
                        T
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">Tom K.</h4>
                        <p className="text-sm text-neutral-400">
                          Local Resident
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>

              <CarouselItem className="px-4 md:basis-1/3">
                <div className="flex h-full transform flex-col bg-[#000000] p-8 shadow-lg transition-all duration-300 hover:shadow-xl">
                  <div className="flex-grow">
                    <div className="mb-6 text-4xl text-[#FFFFFF]">"</div>
                    <div className="mb-4 flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="text-[#FFFFFF]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </div>
                      ))}
                    </div>
                    <p className="text-lg text-neutral-400">
                      "Great pick up and delivery service and high quality dry
                      cleaning and ladies blouse ironing. Excellent alteration
                      services and superb customer service from Joan! "
                    </p>
                  </div>
                  <div className="mt-6 border-t border-[#790003] pt-4">
                    <div className="flex items-center">
                      <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary font-bold text-white">
                        R
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">Nancy R.</h4>
                        <p className="text-sm text-neutral-400">
                          Satisfied Customer
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>

              <CarouselItem className="px-4 md:basis-1/3">
                <div className="flex h-full transform flex-col bg-[#000000] p-8 shadow-lg transition-all duration-300 hover:shadow-xl">
                  <div className="flex-grow">
                    <div className="mb-6 text-4xl text-[#FFFFFF]">"</div>
                    <div className="mb-4 flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="text-[#FFFFFF]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </div>
                      ))}
                    </div>
                    <p className="text-lg text-neutral-400">
                      "I received my robe the very next day, it was a happy
                      unexpected. Thank you so much. Always do a great job!!"
                    </p>
                  </div>
                  <div className="mt-6 border-t border-[#790003] pt-4">
                    <div className="flex items-center">
                      <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary font-bold text-white">
                        C
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">Cindy A.</h4>
                        <p className="text-sm text-neutral-400">
                          Satisfied Customer
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
            <div className="mt-8 flex justify-center gap-8">
              <CarouselPrevious className="relative left-0 h-10 w-10 translate-y-0 border-[#5E0B15] text-[#5E0B15] transition-colors duration-300 hover:bg-[#5E0B15] hover:text-white" />
              <CarouselNext className="relative right-0 h-10 w-10 translate-y-0 border-[#5E0B15] text-[#5E0B15] transition-colors duration-300 hover:bg-[#5E0B15] hover:text-white" />
            </div>
          </Carousel>
          <div className="mt-8 text-center">
            <a
              href="https://reviews.reviewmydrycleaner.com/signature-cleaners-at-doylestown-372957952"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-medium text-[#FFFFFF] transition-colors hover:text-[#F6AE2D]"
            >
              View all reviews
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative overflow-hidden py-16">
        <div className="absolute inset-0 bg-[#F8F5F0]">
          {/* Primary radial gradient for soft light effect */}
          <div className="absolute inset-0 bg-[radial-gradient(70%_50%_at_50%_50%,#fff_0%,transparent_100%)] opacity-30"></div>

          {/* Parallel diagonal streaks */}
          <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_50px,rgba(0,0,0,0.05)_50px,rgba(0,0,0,0.05)_100px)] opacity-25"></div>

          {/* Soft overlay gradient */}
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(248,245,240,0.1)_0%,rgba(248,245,240,0.2)_100%)]"></div>
        </div>
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center text-2xl font-bold text-neutral-900">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1">
              <AccordionTrigger>How do I sign up?</AccordionTrigger>
              <AccordionContent>
                Click here or Call (215) 345-1470 – Include your sign up form
                with your name, address and phone number on your first order
                indicating that you signed up online.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>
                Where are my clothes picked up and delivered?
              </AccordionTrigger>
              <AccordionContent>
                We will pick up and deliver your clothes to your home, your
                office or to the concierge in your building.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>Is there a minimum order?</AccordionTrigger>
              <AccordionContent>
                No need to wait for a full bag of dirty clothes, we will pick up
                and deliver any amount.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-10">
              <AccordionTrigger>How do I pay for the service?</AccordionTrigger>
              <AccordionContent>
                Your dry cleaning will be charged automatically to your American
                express, Visa. Master card or Discover Card.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-11">
              <AccordionTrigger>
                How do you keep my credit card safe?
              </AccordionTrigger>
              <AccordionContent>
                We use the latest encryption and authentication services for all
                our web transactions so that your credit card information
                remains safe. If you prefer, just give us a call at (877)
                779-1269 and we can assist you via phone.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Locations Section */}
      <section className="bg-[#181818] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-white">
              Locations We Pick Up & Deliver
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-white">
              We service the following areas in Bucks County and surrounding
              regions
            </p>
          </div>

          <div className="grid items-start gap-8 md:grid-cols-2">
            <div
              className="h-[400px] cursor-pointer overflow-hidden rounded-lg bg-neutral-200 shadow-md"
              onClick={() => setMapLoaded(true)}
            >
              {mapLoaded ? (
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d194626.6239363241!2d-75.43258756718754!3d40.3414365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c402caed310f67%3A0x4739bde141ae22d1!2sSignature%20Cleaners%20at%20Doylestown!5e0!3m2!1sen!2sus!4v1747319798707!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              ) : (
                <img
                  src="/images/map-placeholder.webp"
                  alt="Map of Signature Cleaners Doylestown"
                  className="h-full w-full object-cover"
                />
              )}
            </div>

            <div className="h-[400px] overflow-y-auto rounded-lg p-8">
              <div className="grid auto-rows-auto grid-cols-2 gap-x-6 gap-y-2 md:grid-cols-3">
                <div className="space-y-2">
                  <Link
                    href="/buckingham"
                    className="flex items-center text-white transition-colors hover:text-[#F6AE2D]"
                  >
                    <span className="mr-2">•</span>Buckingham
                  </Link>
                  <Link
                    href="/carversville"
                    className="flex items-center text-white transition-colors hover:text-[#F6AE2D]"
                  >
                    <span className="mr-2">•</span>Carversville
                  </Link>
                  <Link
                    href="/chalfont"
                    className="flex items-center text-white transition-colors hover:text-[#F6AE2D]"
                  >
                    <span className="mr-2">•</span>Chalfont
                  </Link>
                  <Link
                    href="/doylestown"
                    className="flex items-center text-white transition-colors hover:text-[#F6AE2D]"
                  >
                    <span className="mr-2">•</span>Doylestown
                  </Link>
                  <Link
                    href="/dublin"
                    className="flex items-center text-white transition-colors hover:text-[#F6AE2D]"
                  >
                    <span className="mr-2">•</span>Dublin
                  </Link>
                  <Link
                    href="/fountainville"
                    className="flex items-center text-white transition-colors hover:text-[#F6AE2D]"
                  >
                    <span className="mr-2">•</span>Fountainville
                  </Link>
                  <Link
                    href="/furlong"
                    className="flex items-center text-white transition-colors hover:text-[#F6AE2D]"
                  >
                    <span className="mr-2">•</span>Furlong
                  </Link>
                  <Link
                    href="/holland"
                    className="flex items-center text-white transition-colors hover:text-[#F6AE2D]"
                  >
                    <span className="mr-2">•</span>Holland
                  </Link>
                  <Link
                    href="/ivyland"
                    className="flex items-center text-white transition-colors hover:text-[#F6AE2D]"
                  >
                    <span className="mr-2">•</span>Ivyland
                  </Link>
                  <Link
                    href="/jamison"
                    className="flex items-center text-white transition-colors hover:text-[#F6AE2D]"
                  >
                    <span className="mr-2">•</span>Jamison
                  </Link>
                </div>
                <div className="space-y-2">
                  <Link
                    href="/lahaska"
                    className="flex items-center text-white transition-colors hover:text-[#F6AE2D]"
                  >
                    <span className="mr-2">•</span>Lahaska
                  </Link>
                  <Link
                    href="/morrisville"
                    className="flex items-center text-white transition-colors hover:text-[#F6AE2D]"
                  >
                    <span className="mr-2">•</span>Morrisville
                  </Link>
                  <Link
                    href="/new_hope"
                    className="flex items-center text-white transition-colors hover:text-[#F6AE2D]"
                  >
                    <span className="mr-2">•</span>New Hope
                  </Link>
                  <Link
                    href="/newtown"
                    className="flex items-center text-white transition-colors hover:text-[#F6AE2D]"
                  >
                    <span className="mr-2">•</span>Newtown
                  </Link>
                  <Link
                    href="/ottsville"
                    className="flex items-center text-white transition-colors hover:text-[#F6AE2D]"
                  >
                    <span className="mr-2">•</span>Ottsville
                  </Link>
                  <Link
                    href="/perkasie"
                    className="flex items-center text-white transition-colors hover:text-[#F6AE2D]"
                  >
                    <span className="mr-2">•</span>Perkasie
                  </Link>
                  <Link
                    href="/pipersville"
                    className="flex items-center text-white transition-colors hover:text-[#F6AE2D]"
                  >
                    <span className="mr-2">•</span>Pipersville
                  </Link>
                  <Link
                    href="/point_pleasant"
                    className="flex items-center text-white transition-colors hover:text-[#F6AE2D]"
                  >
                    <span className="mr-2">•</span>Point Pleasant
                  </Link>
                </div>
                <div className="space-y-2">
                  <Link
                    href="/richboro"
                    className="flex items-center text-white transition-colors hover:text-[#F6AE2D]"
                  >
                    <span className="mr-2">•</span>Richboro
                  </Link>
                  <Link
                    href="/southampton"
                    className="flex items-center text-white transition-colors hover:text-[#F6AE2D]"
                  >
                    <span className="mr-2">•</span>Southampton
                  </Link>
                  <p className="flex items-center text-white">
                    <span className="mr-2">•</span>Trevose
                  </p>
                  <p className="flex items-center text-white">
                    <span className="mr-2">•</span>Warminster
                  </p>
                  <p className="flex items-center text-white">
                    <span className="mr-2">•</span>Warrington
                  </p>
                  <p className="flex items-center text-white">
                    <span className="mr-2">•</span>Washington Crossing
                  </p>
                  <p className="flex items-center text-white">
                    <span className="mr-2">•</span>Yardley
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
