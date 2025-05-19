import { Link } from "wouter";
import { Shirt, Car, Footprints, Shield, Leaf } from "lucide-react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";

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
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

// Static services data
const services = [
  {
    id: 1,
    name: "Professional Dry Cleaning",
    description:
      "State-of-the-art dry cleaning services for all your delicate and special garments.",
    price: "From $8.99",
    imageUrl: "/src/images/cleaners.gif",
  },
  {
    id: 2,
    name: "Wash & Fold",
    description:
      "Convenient laundry service with professional washing, drying, and folding.",
    price: "$2.99/lb",
    imageUrl: "/src/images/wash-fold.gif",
  },
  {
    id: 3,
    name: "Wedding Gowns",
    description:
      "Specialized cleaning and preservation services for wedding gowns.",
    price: "From $99.99",
    imageUrl: "/src/images/wedding-gown.gif",
  },
  {
    id: 4,
    name: "Household Items",
    description: "Comprehensive cleaning solutions for household items.",
    price: "From $24.99",
    imageUrl: "/src/images/household-items.gif",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <link rel="canonical" href="https://www.mysignaturecleaners.com/" />
        <title>
          Signature Cleaners | Expert Dry Cleaning & Laundry in Doylestown, PA
        </title>
        <meta
          name="description"
          content="Signature Cleaners provides expert dry cleaning, wash & fold, tailoring, and more with pickup and delivery throughout Doylestown, PA and Bucks County."
        />
        <meta
          name="keywords"
          content="dry cleaning, wash and fold, laundry service, garment care, wedding gown cleaning, tailoring, Doylestown cleaners, Bucks County laundry"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Signature Cleaners",
            url: "https://signaturecleaners.com",
            image: "https://signaturecleaners.com/src/images/interior.jpg",
            logo: "https://signaturecleaners.com/src/images/logo.png",
            description:
              "Signature Cleaners offers expert dry cleaning, laundry, tailoring, and garment care with pickup and delivery services throughout Bucks County, PA.",
            telephone: "+1-215-345-1470",
            address: {
              "@type": "PostalAddress",
              streetAddress: "1456 Ferry Road #10",
              addressLocality: "Doylestown",
              addressRegion: "PA",
              postalCode: "18901",
              addressCountry: "US",
            },
            openingHours: "Mo-Fr 08:00-18:00",
            areaServed: {
              "@type": "Place",
              name: [
                "Doylestown",
                "New Hope",
                "Newtown",
                "Warrington",
                "Furlong",
                "Richboro",
                "Warminster",
                "Buckingham",
                "Yardley",
                "Jamison",
              ],
            },
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
      <section className="relative min-h-[85vh] flex items-center">
        <div className="absolute inset-0 bg-[url('/src/images/interior.jpg')] bg-cover bg-center bg-no-repeat"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight tracking-tight">
              Doylestown’s Trusted Dry Cleaner
            </h1>
            <p className="mt-6 text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
              Old Fashioned Service. Guaranteed.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/schedule">
                <Button className=" hover:bg-[#F6AE2D] text-white px-4 py-2 rounded transition-colors duration-200 text-sm tracking-wider uppercase">
                  Schedule Pickup
                </Button>
              </Link>
              <Link href="/all-services/all-services">
                <Button className=" hover:bg-[#F6AE2D] text-white px-4 py-2 rounded transition-colors duration-200 text-sm tracking-wider uppercase">
                  View Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#F8F5F0]">
          {/* Primary radial gradient for soft light effect */}
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(70%_50%_at_50%_50%,#fff_0%,transparent_100%)]"></div>

          {/* Parallel diagonal streaks */}
          <div className="absolute inset-0 opacity-25 bg-[repeating-linear-gradient(45deg,transparent,transparent_50px,rgba(0,0,0,0.05)_50px,rgba(0,0,0,0.05)_100px)]"></div>

          {/* Soft overlay gradient */}
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(248,245,240,0.1)_0%,rgba(248,245,240,0.2)_100%)]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#790003] mb-4">
              Our Services
            </h2>
            <p className="mt-4 text-xl text-neutral-800 text-[#790003]/80 max-w-3xl mx-auto leading-relaxed">
              Experience exceptional garment care with our premium cleaning
              services, tailored to preserve and enhance your wardrobe.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Dry Cleaning */}
            <div className="group bg-[#790003] shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full overflow-hidden">
              <div className="h-40 bg-[url('/images/interior-two.jpg')] bg-cover bg-center bg-no-repeat flex-shrink-0 overflow-hidden transition-transform duration-300 group-hover:scale-105"></div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex-grow flex flex-col space-y-3">
                  <h3 className="text-xl font-semibold text-white">
                    Dry Cleaning
                  </h3>
                  <div className="w-12 h-0.5 bg-[#181818]"></div>
                  <p className="text-white line-clamp-3 flex-grow">
                    State-of-the-art dry cleaning services for all your delicate
                    and special garments, ensuring the highest quality care.
                  </p>
                  <Link href="/all-services/dry-cleaning" className="block">
                    <Button className="w-full bg-white text-black hover:bg-white hover:text-black transition-colors duration-300 rounded-none">
                      Learn More
                    </Button>
                  </Link>
                </div>
                <div className="mt-8 pt-4 border-t border-[#790003] flex flex-col sm:flex-row items-center gap-4">
                  <span className="text-white font-semibold text-lg">
                    From $9.95
                  </span>
                  <Link
                    href="/schedule"
                    className="w-full sm:w-auto sm:ml-auto"
                  >
                    <Button className="w-full bg-[#790003] hover:bg-[#F6AE2D] text-white font-medium transition-colors duration-300 rounded-none">
                      Book Now
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            {/* Wash & Fold */}
            <div className="group bg-[#790003] shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full overflow-hidden">
              <div className="h-40 bg-[url('/images/washFold.jpg')] bg-cover bg-center bg-no-repeat flex-shrink-0 overflow-hidden transition-transform duration-300 group-hover:scale-105"></div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex-grow flex flex-col space-y-3">
                  <h3 className="text-xl font-semibold text-white">
                    Wash & Fold
                  </h3>
                  <div className="w-12 h-0.5 bg-[#181818]"></div>
                  <p className="text-white line-clamp-3 flex-grow">
                    Convenient wash and fold service for your everyday laundry
                    needs, saving you time and effort.
                  </p>
                  <Link href="/all-services/wash-fold" className="block">
                    <Button className="w-full bg-white text-black hover:bg-white hover:text-black transition-colors duration-300 rounded-none">
                      Learn More
                    </Button>
                  </Link>
                </div>
                <div className="mt-8 pt-4 border-t border-[#181818] flex flex-col sm:flex-row items-center gap-4">
                  <span className="text-white font-semibold text-lg">
                    $2.95/lb
                  </span>
                  <Link
                    href="/schedule"
                    className="w-full sm:w-auto sm:ml-auto"
                  >
                    <Button className="w-full bg-[#790003] hover:bg-[#F6AE2D] text-white font-medium transition-colors duration-300 rounded-none">
                      Book Now
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            {/* Wedding Gowns */}
            <div className="group bg-[#790003] shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full overflow-hidden">
              <div className="h-40 bg-[url('/images/weddingGown.jpg')] bg-cover bg-center bg-no-repeat flex-shrink-0 overflow-hidden transition-transform duration-300 group-hover:scale-105"></div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex-grow flex flex-col space-y-3">
                  <h3 className="text-xl font-semibold text-white">
                    Wedding Gowns
                  </h3>
                  <div className="w-12 h-0.5 bg-[#181818]"></div>
                  <p className="text-white line-clamp-3 flex-grow">
                    Specialized cleaning and preservation services for wedding
                    gowns, ensuring your precious memories last a lifetime.
                  </p>
                  <Link href="/all-services/wedding-gown" className="block">
                    <Button className="w-full bg-white text-black hover:bg-white hover:text-black transition-colors duration-300 rounded-none">
                      Learn More
                    </Button>
                  </Link>
                </div>
                <div className="mt-8 pt-4 border-t border-[#181818] flex flex-col sm:flex-row items-center gap-4">
                  <span className="text-white font-semibold text-lg">
                    From $325
                  </span>
                  <Link
                    href="/schedule"
                    className="w-full sm:w-auto sm:ml-auto"
                  >
                    <Button className="w-full bg-[#790003] hover:bg-[#F6AE2D] text-white font-medium transition-colors duration-300 rounded-none">
                      Book Now
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            {/* Household Items */}
            <div className="group bg-[#790003] shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full overflow-hidden">
              <div className="h-40 bg-[url('/images/householdItems.jpg')] bg-cover bg-center bg-no-repeat flex-shrink-0 overflow-hidden transition-transform duration-300 group-hover:scale-105"></div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex-grow flex flex-col space-y-3">
                  <h3 className="text-xl font-semibold text-white">
                    Cleaning of Household Items
                  </h3>
                  <div className="w-12 h-0.5 bg-[#181818]"></div>
                  <p className="text-white line-clamp-3 flex-grow">
                    Comprehensive cleaning solutions for household items
                    including comforters, blankets, and decorative pieces.
                  </p>
                  <Link
                    href="/all-services/clean-household-items"
                    className="block"
                  >
                    <Button className="w-full bg-white text-black hover:bg-white hover:text-black transition-colors duration-300 rounded-none">
                      Learn More
                    </Button>
                  </Link>
                </div>
                <div className="mt-8 pt-4 border-t border-[#181818] flex flex-col sm:flex-row items-center gap-4">
                  <span className="text-white font-semibold text-lg">
                    From $39.95
                  </span>
                  <Link
                    href="/schedule"
                    className="w-full sm:w-auto sm:ml-auto"
                  >
                    <Button className="w-full bg-[#790003] hover:bg-[#F6AE2D] text-white font-medium transition-colors duration-300 rounded-none">
                      Book Now
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Service Category Icons */}
          <div className="mt-12 mb-8">
            <div className="flex flex-wrap justify-center gap-8 md:gap-12">
              {/* Delivery */}
              <Link
                href="/all-services/delivery"
                className="group flex flex-col items-center"
              >
                <div
                  className="w-20 h-20 flex items-center justify-center transition-transform group-hover:scale-110"
                  aria-label="Delivery Service"
                >
                  <Car className="h-12 w-12 text-[#790003]" />
                </div>
                <span className="mt-2 text-black text-sm font-medium">
                  Delivery
                </span>
              </Link>

              {/* Alterations & Tailoring */}
              <Link
                href="/all-services/alteration-tailoring"
                className="group flex flex-col items-center"
              >
                <div
                  className="w-20 h-20 flex items-center justify-center transition-transform group-hover:scale-110"
                  aria-label="Alterations and Tailoring Service"
                >
                  <Shirt className="h-12 w-12 text-[#790003]" />
                </div>
                <span className="mt-2 text-black text-sm font-medium">
                  Tailoring
                </span>
              </Link>

              {/* Shoe Repair */}
              <Link
                href="/all-services/shoe-repair"
                className="group flex flex-col items-center"
              >
                <div
                  className="w-20 h-20 flex items-center justify-center transition-transform group-hover:scale-110"
                  aria-label="Shoe Repair Service"
                >
                  <Footprints className="h-12 w-12 text-[#790003]" />
                </div>
                <span className="mt-2 text-black text-sm font-medium">
                  Shoe Repair
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-[#790003] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,#fff_0%,transparent_60%)]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Choose Signature Cleaners?
            </h2>
            <div className="w-24 h-1 bg-[#F6AE2D] mx-auto mt-6 mb-8"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-lg transform hover:-translate-y-1 transition-all duration-300">
              <div className="w-16 h-16 bg-[#790003] rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4 text-center">
                Expert Care
              </h3>
              <p className="text-white/90 text-center">
                Decades of expertise combined with cutting-edge eco-friendly
                cleaning technology for unparalleled results.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-lg transform hover:-translate-y-1 transition-all duration-300">
              <div className="w-16 h-16 bg-[#790003] rounded-full flex items-center justify-center mx-auto mb-6">
                <Leaf className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4 text-center">
                Eco-Friendly
              </h3>
              <p className="text-white/90 text-center">
                Committed to preserving your wardrobe while protecting our
                environment with sustainable practices.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-lg transform hover:-translate-y-1 transition-all duration-300">
              <div className="w-16 h-16 bg-[#790003] rounded-full flex items-center justify-center mx-auto mb-6">
                <Car className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4 text-center">
                Convenient Service
              </h3>
              <p className="text-white/90 text-center">
                Door-to-door delivery with meticulous attention to detail,
                valuing your time as much as your garments.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link href="/schedule">
              <Button className="bg-white hover:bg-[#F6AE2D] text-black font-medium px-6 py-3 shadow-md hover:shadow-lg transition duration-300">
                Get Started Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 bg-[#F8F5F0] overflow-hidden relative">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          {/* Primary radial gradient for soft light effect */}
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(70%_50%_at_50%_50%,#fff_0%,transparent_100%)]"></div>

          {/* Parallel diagonal streaks */}
          <div className="absolute inset-0 opacity-25 bg-[repeating-linear-gradient(45deg,transparent,transparent_50px,rgba(0,0,0,0.05)_50px,rgba(0,0,0,0.05)_100px)]"></div>

          {/* Soft overlay gradient */}
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(248,245,240,0.1)_0%,rgba(248,245,240,0.2)_100%)]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="md:hidden mb-8">
            <div className="relative h-[300px] rounded-lg overflow-hidden shadow-xl">
              <img
                src="/images/theTeam.jpg"
                alt="Signature Cleaners Team"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#790003] mb-4">
              About Signature Cleaners
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              A trusted name in premium garment care, delivering quality and
              convenience to our community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <p className="text-neutral-700 leading-relaxed">
                Signature Cleaners was founded on simple principles: provide a
                quality product, deliver excellent customer service, and offer
                fair pricing.
              </p>
              <p className="text-neutral-700 leading-relaxed">
                With decades of experience, the team brings a deep understanding
                of fabric care and stain removal. Every garment is treated with
                personal care using top-of-the-line equipment to ensure high
                standards of cleanliness and presentation.
              </p>
              <Link href="/about-us" className="inline-block">
                <Button className="bg-[#790003] hover:bg-[#F6AE2D] text-white">
                  Learn More About Us
                </Button>
              </Link>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl hidden md:block">
              <img
                src="/images/theTeam.jpg"
                alt="Signature Cleaners Team"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="hidden md:grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-[#790003] mb-4">
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
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                Quality First
              </h3>
              <p className="text-neutral-600">
                We never compromise on quality. Every garment receives
                personalized attention.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-[#790003] mb-4">
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
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                Environmental Responsibility
              </h3>
              <p className="text-neutral-600">
                Eco-friendly cleaning methods that reduce environmental
                footprint while delivering exceptional results.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-[#790003] mb-4">
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
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">
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
      <section id="testimonials" className="py-20 bg-[#181818]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#FFFFFF] mb-4">
              What Our Customers Say
            </h2>
            <p className="mt-4 text-xl text-[#FFFFFF]/80 max-w-3xl mx-auto">
              Discover why our customers trust us with their garments.
            </p>
          </div>

          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full max-w-6xl mx-auto"
          >
            <CarouselContent>
              <CarouselItem className="md:basis-1/3 px-4">
                <div className="bg-[#000000] shadow-lg p-8 flex flex-col h-full transform transition-all duration-300 hover:shadow-xl">
                  <div className="flex-grow">
                    <div className="text-[#FFFFFF] text-4xl mb-6">"</div>
                    <div className="flex items-center mb-4">
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
                    <p className="text-neutral-400 text-lg">
                      "The staff is so helpful and even brought out my items to
                      my car since my baby was sleeping. Can’t thank them enough
                      for their service. Highly recommend for any laundering you
                      need."
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-[#790003]">
                    <div className="flex items-center">
                      <div className="mr-3 h-10 w-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
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

              <CarouselItem className="md:basis-1/3 px-4">
                <div className="bg-[#000000] shadow-lg p-8 flex flex-col h-full transform transition-all duration-300 hover:shadow-xl">
                  <div className="flex-grow">
                    <div className="text-[#FFFFFF] text-4xl mb-6">"</div>
                    <div className="flex items-center mb-4">
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
                    <p className="text-neutral-400 text-lg">
                      "I needed two Dresses pressed on short notice and
                      signature cleaners had the best reviews. Now I know why!
                      They were accommodating, quick, and so so welcoming and
                      kind. Finding places like this is rare these days! Highly
                      recommend."
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-[#790003]">
                    <div className="flex items-center">
                      <div className="mr-3 h-10 w-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
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

              <CarouselItem className="md:basis-1/3 px-4">
                <div className="bg-[#000000] shadow-lg p-8 flex flex-col h-full transform transition-all duration-300 hover:shadow-xl">
                  <div className="flex-grow">
                    <div className="text-[#FFFFFF] text-4xl mb-6">"</div>
                    <div className="flex items-center mb-4">
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
                    <p className="text-neutral-400 text-lg">
                      "People are the best part of this business. Always
                      friendly and more than helpful "
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-[#790003]">
                    <div className="flex items-center">
                      <div className="mr-3 h-10 w-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
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

              <CarouselItem className="md:basis-1/3 px-4">
                <div className="bg-[#000000] shadow-lg p-8 flex flex-col h-full transform transition-all duration-300 hover:shadow-xl">
                  <div className="flex-grow">
                    <div className="text-[#FFFFFF] text-4xl mb-6">"</div>
                    <div className="flex items-center mb-4">
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
                    <p className="text-neutral-400 text-lg">
                      "Great pick up and delivery service and high quality dry
                      cleaning and ladies blouse ironing. Excellent alteration
                      services and superb customer service from Joan! "
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-[#790003]">
                    <div className="flex items-center">
                      <div className="mr-3 h-10 w-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
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

              <CarouselItem className="md:basis-1/3 px-4">
                <div className="bg-[#000000] shadow-lg p-8 flex flex-col h-full transform transition-all duration-300 hover:shadow-xl">
                  <div className="flex-grow">
                    <div className="text-[#FFFFFF] text-4xl mb-6">"</div>
                    <div className="flex items-center mb-4">
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
                    <p className="text-neutral-400 text-lg">
                      "I received my robe the very next day, it was a happy
                      unexpected. Thank you so much. Always do a great job!!"
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-[#790003]">
                    <div className="flex items-center">
                      <div className="mr-3 h-10 w-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
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
            <div className="flex justify-center gap-8 mt-8">
              <CarouselPrevious className="relative translate-y-0 left-0 h-10 w-10 border-[#5E0B15] text-[#5E0B15] hover:bg-[#5E0B15] hover:text-white transition-colors duration-300" />
              <CarouselNext className="relative translate-y-0 right-0 h-10 w-10 border-[#5E0B15] text-[#5E0B15] hover:bg-[#5E0B15] hover:text-white transition-colors duration-300" />
            </div>
          </Carousel>
          <div className="text-center mt-8">
            <a
              href="https://reviews.reviewmydrycleaner.com/signature-cleaners-at-doylestown-372957952"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FFFFFF] hover:text-[#F6AE2D] transition-colors text-lg font-medium"
            >
              View all reviews
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#F8F5F0]">
          {/* Primary radial gradient for soft light effect */}
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(70%_50%_at_50%_50%,#fff_0%,transparent_100%)]"></div>

          {/* Parallel diagonal streaks */}
          <div className="absolute inset-0 opacity-25 bg-[repeating-linear-gradient(45deg,transparent,transparent_50px,rgba(0,0,0,0.05)_50px,rgba(0,0,0,0.05)_100px)]"></div>

          {/* Soft overlay gradient */}
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(248,245,240,0.1)_0%,rgba(248,245,240,0.2)_100%)]"></div>
        </div>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <h2 className="text-2xl font-bold text-neutral-900 mb-8 text-center">
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
      <section className="py-16 bg-[#181818]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">
              Locations We Pick Up & Deliver
            </h2>
            <p className="mt-4 text-lg text-white max-w-3xl mx-auto">
              We service the following areas in Bucks County and surrounding
              regions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="bg-neutral-200 rounded-lg overflow-hidden h-[400px] shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d194626.6239363241!2d-75.43258756718754!3d40.3414365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c402caed310f67%3A0x4739bde141ae22d1!2sSignature%20Cleaners%20at%20Doylestown!5e0!3m2!1sen!2sus!4v1747319798707!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="rounded-lg p-8 h-[400px] overflow-y-auto">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-2 auto-rows-auto">
                <div className="grid-cols-subgrid col-span-1">
                <div className="space-y-2">
                  <p className="text-white flex items-center">
                    <span className="mr-2">•</span>Buckingham
                  </p>
                  <p className="text-white flex items-center">
                    <span className="mr-2">•</span>Carversville
                  </p>
                  <p className="text-white flex items-center">
                    <span className="mr-2">•</span>Chalfont
                  </p>
                  <Link
                    href="/doylestown"
                    className="text-white hover:text-[#F6AE2D] transition-colors flex items-center"
                  >
                    <span className="mr-2">•</span>Doylestown
                  </Link>
                  <p className="text-white flex items-center">
                    <span className="mr-2">•</span>Dublin
                  </p>
                  <p className="text-white flex items-center">
                    <span className="mr-2">•</span>Fountainville
                  </p>
                  <p className="text-white flex items-center">
                    <span className="mr-2">•</span>Furlong
                  </p>
                  <p className="text-white flex items-center">
                    <span className="mr-2">•</span>Holland
                  </p>
                  <p className="text-white flex items-center">
                    <span className="mr-2">•</span>Ivyland
                  </p>
                  <p className="text-white flex items-center">
                    <span className="mr-2">•</span>Jamison
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-white flex items-center">
                    <span className="mr-2">•</span>Lahaska
                  </p>
                  <p className="text-white flex items-center">
                    <span className="mr-2">•</span>Morrisville
                  </p>
                  <p className="text-white flex items-center">
                    <span className="mr-2">•</span>New Hope
                  </p>
                  <p className="text-white flex items-center">
                    <span className="mr-2">•</span>Newtown
                  </p>
                  <p className="text-white flex items-center">
                    <span className="mr-2">•</span>Ottsville
                  </p>
                  <p className="text-white flex items-center">
                    <span className="mr-2">•</span>Perkasie
                  </p>
                  <p className="text-white flex items-center">
                    <span className="mr-2">•</span>Pipersville
                  </p>
                  <p className="text-white flex items-center">
                    <span className="mr-2">•</span>Point Pleasant
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-white flex items-center">
                    <span className="mr-2">•</span>Richboro
                  </p>
                  <p className="text-white flex items-center">
                    <span className="mr-2">•</span>Southampton
                  </p>
                  <p className="text-white flex items-center">
                    <span className="mr-2">•</span>Trevose
                  </p>
                  <p className="text-white flex items-center">
                    <span className="mr-2">•</span>Warminster
                  </p>
                  <p className="text-white flex items-center">
                    <span className="mr-2">•</span>Warrington
                  </p>
                  <p className="text-white flex items-center">
                    <span className="mr-2">•</span>Washington Crossing
                  </p>
                  <p className="text-white flex items-center">
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
