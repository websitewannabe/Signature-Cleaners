import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Helmet } from "react-helmet-async";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "wouter";
import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function WashFoldPage() {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const services = [
    {
      name: "Regular Wash",
      details:
        "Perfect for your daily wear—our regular wash uses optimal temperature settings and gentle cycles for a deep yet safe clean.",
    },
    {
      name: "Delicates",
      details:
        "We use fabric-safe, fragrance-free detergents and low-agitation methods to clean your most delicate garments with care.",
    },
    {
      name: "Bedding",
      details:
        "Sheets, pillowcases, and duvet covers are washed separately to ensure a fresh, soft, and hygienic finish.",
    },
    {
      name: "Towels",
      details:
        "Towels are laundered for absorbency and fluffiness, using softeners only when needed to avoid buildup.",
    },
  ];
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <link
          rel="canonical"
          href="https://www.mysignaturecleaners.com/all-services/wash-fold"
        />
        <title>Wash & Fold Laundry Service | Signature Cleaners</title>
        <meta
          name="description"
          content="Get your everyday laundry done right with Signature Cleaners' professional Wash & Fold service. Safe for regular, delicate, and household items. Pickup & delivery available."
        />
        <meta
          name="keywords"
          content="wash and fold, laundry service, regular wash, delicate laundry, towel washing, bedding cleaning, Signature Cleaners, Bucks County laundry pickup"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Signature Cleaners",
            url: "https://signaturecleaners.com/wash-fold",
            image: "https://signaturecleaners.com/src/images/logo.png",
            logo: "https://signaturecleaners.com/src/images/logo.png",
            description:
              "Signature Cleaners offers a full-service wash and fold experience with expert sorting, premium detergents, and folding for regular laundry, delicates, towels, and bedding.",
            address: {
              "@type": "PostalAddress",
              streetAddress: "1456 Ferry Road #10",
              addressLocality: "Doylestown",
              addressRegion: "PA",
              postalCode: "18901",
              addressCountry: "US",
            },
            telephone: "+1-215-345-1470",
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Wash & Fold Laundry Options",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Regular Wash",
                    description:
                      "Everyday laundry washed with color-safe temperature and gentle cycles.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Delicates",
                    description:
                      "Low-agitation, fragrance-free care for sensitive fabrics.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Bedding",
                    description:
                      "Separate washing of sheets, duvets, and pillowcases for softness and hygiene.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Towel Service",
                    description:
                      "Towels laundered for absorbency, fluffiness, and cleanliness.",
                  },
                },
              ],
            },
            areaServed: {
              "@type": "Place",
              name: [
                "Doylestown",
                "Furlong",
                "Warrington",
                "Warminster",
                "Jamison",
                "Perkasie",
                "New Hope",
                "Newtown",
                "Richboro",
                "Yardley",
              ],
            },
          })}
        </script>
      </Helmet>

      <Header />

      {/* Hero Section */}
      <section className="relative py-40">
        <div className="absolute inset-0 bg-[url('/src/images/wash-fold.gif')] bg-cover bg-center bg-no-repeat"></div>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mt-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Professional Wash & Fold Service
            </h1>
            <p className="mt-6 text-xl text-white text-opacity-90 max-w-3xl mx-auto">
              Expert care for your everyday laundry needs
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", path: "/" },
              { label: "Services", path: "/all-services/all-services" },
              {
                label: "Wash & Fold",
                path: "/all-services/wash-fold",
                current: true,
              },
            ]}
          />
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Professional Laundry Service
              </h2>
              <p className="text-lg text-white/90 mb-6">
                Life gets busy, and laundry shouldn’t slow you down. Our Wash &
                Fold service is designed to give you more time back in your week
                by handling your everyday laundry with care and precision.
                Whether it’s a mountain of clothes or just your weekly
                essentials, our team ensures each item is washed with premium
                detergents, dried with optimal settings, and folded neatly to
                your preferences. From delicates and bedding to workout gear and
                towels, Signature Cleaners provides a convenient, high-quality
                laundry solution tailored to your routine.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-white mt-1 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="ml-3 text-white/90">
                    Professional sorting by color and fabric
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-white mt-1 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="ml-3 text-white/90">
                    Premium detergents and fabric softeners
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-white mt-1 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="ml-3 text-white/90">
                    Expert folding and packaging
                  </span>
                </li>
              </ul>
              <div className="space-y-6">
                <div className="grid grid-cols-4 gap-6">
                  {[
                    {
                      name: "Regular Wash",
                      icon: (
                        <img
                          src="/icons/regularWash.svg"
                          alt="Regular Wash"
                          className="w-12 h-12"
                        />
                      ),
                      details:
                        "Perfect for your daily wear—our regular wash uses optimal temperature settings and gentle cycles for a deep yet safe clean.",
                    },
                    {
                      name: "Delicates",
                      icon: (
                        <img
                          src="/icons/delicates.svg"
                          alt="Regular Wash"
                          className="w-12 h-12"
                        />
                      ),
                      details:
                        "We use fabric-safe, fragrance-free detergents and low-agitation methods to clean your most delicate garments with care.",
                    },
                    {
                      name: "Bedding",
                      icon: (
                        <img
                          src="/icons/blanket.svg"
                          alt="Regular Wash"
                          className="w-12 h-12"
                        />
                      ),
                      details:
                        "Sheets, pillowcases, and duvet covers are washed separately to ensure a fresh, soft, and hygienic finish.",
                    },
                    {
                      name: "Towels",
                      icon: (
                        <img
                          src="/icons/towel.svg"
                          alt="Regular Wash"
                          className="w-12 h-12"
                        />
                      ),
                      details:
                        "Towels are laundered for absorbency and fluffiness, using softeners only when needed to avoid buildup.",
                    },
                  ].map((service, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        if (selectedService === service.name) {
                          setSelectedService(null);
                        } else {
                          setSelectedService(service.name);
                        }
                      }}
                      className="text-center focus:outline-none"
                    >
                      <div
                        className={`w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto transition-all duration-300 ${selectedService === service.name ? "scale-110 ring-2 ring-[#F6AE2D]" : "hover:scale-105"}`}
                      >
                        {service.icon}
                      </div>
                      <span className="block mt-2 text-sm text-white/90">
                        {service.name}
                      </span>
                    </button>
                  ))}
                </div>

                <div
                  className={`overflow-hidden transition-all duration-300 ${selectedService ? "max-h-48" : "max-h-0"}`}
                >
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white/90">
                    {selectedService &&
                      services.find((s) => s.name === selectedService)?.details}
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-neutral-100 rounded-lg p-8">
              <div className="w-full h-[763px]">
                <iframe
                  src="https://bv6w3pwoi5y.typeform.com/to/q9sU2p56"
                  style={{ width: "100%", height: "100%", border: "0" }}
                  allow="camera; microphone; autoplay; encrypted-media;"
                  data-qa="iframe-container"
                  data-remove-element-on-mobile="true"
                  data-disable-scroll="true"
                  loading="lazy"
                />
              </div>

              {/* <h3 className="text-2xl font-semibold text-neutral-900 mb-6">
                Contact Us
              </h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">
                    Name
                  </label>
                  <Input placeholder="Your name" className="w-full" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">
                    Email
                  </label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">
                    Phone
                  </label>
                  <Input
                    type="tel"
                    placeholder="(555) 123-4567"
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">
                    Message
                  </label>
                  <Textarea
                    placeholder="Tell us about your laundry needs..."
                    className="min-h-[100px] w-full"
                  />
                </div>
                <Button className="w-full bg-[#790003] hover:bg-[#F6AE2D] text-white">
                  Send Message
                </Button>
              </form> */}
            </div>
          </div>
        </div>
      </section>

      {/* Explore Our Other Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#790003] mb-4">
              Explore Our Other Services
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              More ways we can help keep your wardrobe and home at their best
            </p>
          </div>

          <Swiper
            className="services-carousel"
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            loop={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
          >
            <SwiperSlide>
              <Link href="/all-services/dry-cleaning" className="block">
                <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-6 h-full flex flex-col items-center min-h-[220px]">
                  <div className="w-16 h-16 bg-[#F8F5F0] rounded-full flex items-center justify-center mx-auto mb-4">
                    <img
                      src="/icons/suit.svg"
                      alt="Dry Cleaning"
                      className="w-8 h-8"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-center text-neutral-900 mb-2">
                    Dry Cleaning
                  </h3>
                  <p className="text-neutral-600 text-center">
                    Expert care for your fine garments and delicate fabrics
                  </p>
                </div>
              </Link>
            </SwiperSlide>

            <SwiperSlide>
              <Link href="/all-services/alteration-tailoring" className="block">
                <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-6 h-full flex flex-col items-center min-h-[220px]">
                  <div className="w-16 h-16 bg-[#F8F5F0] rounded-full flex items-center justify-center mx-auto mb-4">
                    <img
                      src="/icons/fitting.svg"
                      alt="Alterations & Tailoring"
                      className="w-8 h-8"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-center text-neutral-900 mb-2">
                    Alterations & Tailoring
                  </h3>
                  <p className="text-neutral-600 text-center">
                    Expert fitting and garment modifications
                  </p>
                </div>
              </Link>
            </SwiperSlide>

            <SwiperSlide>
              <Link href="/all-services/wedding-gown" className="block">
                <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-6 h-full flex flex-col items-center min-h-[220px]">
                  <div className="w-16 h-16 bg-[#F8F5F0] rounded-full flex items-center justify-center mx-auto mb-4">
                    <img
                      src="/icons/dress.svg"
                      alt="Wedding Gowns"
                      className="w-8 h-8"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-center text-neutral-900 mb-2">
                    Wedding Gowns
                  </h3>
                  <p className="text-neutral-600 text-center">
                    Specialized care for your precious wedding dress
                  </p>
                </div>
              </Link>
            </SwiperSlide>

            <SwiperSlide>
              <Link href="/all-services/shoe-repair" className="block">
                <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-6 h-full flex flex-col items-center min-h-[220px]">
                  <div className="w-16 h-16 bg-[#F8F5F0] rounded-full flex items-center justify-center mx-auto mb-4">
                    <img
                      src="/icons/shoes.svg"
                      alt="Shoe Repair"
                      className="w-8 h-8"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-center text-neutral-900 mb-2">
                    Shoe Repair
                  </h3>
                  <p className="text-neutral-600 text-center">
                    Professional restoration and repair services
                  </p>
                </div>
              </Link>
            </SwiperSlide>

            <SwiperSlide>
              <Link href="/all-services/clean-household-items" className="block">
                <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-6 h-full flex flex-col items-center min-h-[220px]">
                  <div className="w-16 h-16 bg-[#F8F5F0] rounded-full flex items-center justify-center mx-auto mb-4">
                    <img
                      src="/icons/comforter.svg"
                      alt="Household Items"
                      className="w-8 h-8"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-center text-neutral-900 mb-2">
                    Household Items
                  </h3>
                  <p className="text-neutral-600 text-center">
                    Cleaning for your home textiles and furnishings
                  </p>
                </div>
              </Link>
            </SwiperSlide>

            <SwiperSlide>
              <Link href="/all-services/delivery" className="block">
                <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-6 h-full flex flex-col items-center min-h-[220px]">
                  <div className="w-16 h-16 bg-[#F8F5F0] rounded-full flex items-center justify-center mx-auto mb-4">
                    <img
                      src="/icons/bubbles.svg"
                      alt="Delivery Service"
                      className="w-8 h-8"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-center text-neutral-900 mb-2">
                    Delivery Service
                  </h3>
                  <p className="text-neutral-600 text-center">
                    Convenient pickup and delivery to your door
                  </p>
                </div>
              </Link>
            </SwiperSlide>
          </Swiper>

            <Link href="/all-services/alteration-tailoring" className="group">
              <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-6 h-full flex flex-col items-center min-h-[220px]">
                <div className="w-16 h-16 bg-[#F8F5F0] rounded-full flex items-center justify-center mx-auto mb-4">
                  <img
                    src="/icons/fitting.svg"
                    alt="Alterations & Tailoring"
                    className="w-8 h-8"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-xl font-semibold text-center text-neutral-900 mb-2">
                  Alterations & Tailoring
                </h3>
                <p className="text-neutral-600 text-center">
                  Professional fitting and garment modifications
                </p>
              </div>
            </Link>

            <Link href="/all-services/wedding-gown" className="group">
              <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-6 h-full flex flex-col items-center min-h-[220px]">
                <div className="w-16 h-16 bg-[#F8F5F0] rounded-full flex items-center justify-center mx-auto mb-4">
                  <img
                    src="/icons/dress.svg"
                    alt="Wedding Gowns"
                    className="w-8 h-8"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-xl font-semibold text-center text-neutral-900 mb-2">
                  Wedding Gowns
                </h3>
                <p className="text-neutral-600 text-center">
                  Specialized care for your precious wedding dress
                </p>
              </div>
            </Link>

            <Link href="/all-services/shoe-repair" className="group">
              <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-6 h-full flex flex-col items-center min-h-[220px]">
                <div className="w-16 h-16 bg-[#F8F5F0] rounded-full flex items-center justify-center mx-auto mb-4">
                  <img
                    src="/icons/shoes.svg"
                    alt="Shoe Repair"
                    className="w-8 h-8"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-xl font-semibold text-center text-neutral-900 mb-2">
                  Shoe Repair
                </h3>
                <p className="text-neutral-600 text-center">
                  Professional restoration and repair services
                </p>
              </div>
            </Link>

            <Link href="/all-services/clean-household-items" className="group">
              <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-6 h-full flex flex-col items-center min-h-[220px]">
                <div className="w-16 h-16 bg-[#F8F5F0] rounded-full flex items-center justify-center mx-auto mb-4">
                  <img
                    src="/icons/comforter.svg"
                    alt="Household Items"
                    className="w-8 h-8"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-xl font-semibold text-center text-neutral-900 mb-2">
                  Household Items
                </h3>
                <p className="text-neutral-600 text-center">
                  Cleaning for your home textiles and furnishings
                </p>
              </div>
            </Link>

            <Link href="/all-services/delivery" className="group">
              <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-6 h-full flex flex-col items-center min-h-[220px]">
                <div className="w-16 h-16 bg-[#F8F5F0] rounded-full flex items-center justify-center mx-auto mb-4">
                  <img
                    src="/icons/bubbles.svg"
                    alt="Delivery Service"
                    className="w-8 h-8"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-xl font-semibold text-center text-neutral-900 mb-2">
                  Delivery Service
                </h3>
                <p className="text-neutral-600 text-center">
                  Convenient pickup and delivery to your door
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 relative overflow-hidden">
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
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
              How It Works
            </h2>
            <p className="mt-4 text-xl text-neutral-600 max-w-3xl mx-auto">
              Our convenient process makes it easy to get your clothes cleaned
              without disrupting your schedule.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="bg-white rounded-full h-24 w-24 flex items-center justify-center mx-auto shadow-md mb-4">
                <span className="text-primary text-3xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900">
                Schedule
              </h3>
              <p className="mt-2 text-neutral-600">
                Book your pickup online or by phone
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white rounded-full h-24 w-24 flex items-center justify-center mx-auto shadow-md mb-4">
                <span className="text-primary text-3xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900">Pickup</h3>
              <p className="mt-2 text-neutral-600">
                We collect your garments from your door
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white rounded-full h-24 w-24 flex items-center justify-center mx-auto shadow-md mb-4">
                <span className="text-primary text-3xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900">Clean</h3>
              <p className="mt-2 text-neutral-600">
                Your items receive expert care
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white rounded-full h-24 w-24 flex items-center justify-center mx-auto shadow-md mb-4">
                <span className="text-primary text-3xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900">
                Deliver
              </h3>
              <p className="mt-2 text-neutral-600">
                We return your fresh, clean garments
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link href="/schedule">
              <Button className="bg-[#790003] hover:bg-[#F6AE2D] text-white font-medium px-6 py-3 rounded-md shadow-md hover:shadow-lg transition duration-300">
                Get Started Now
              </Button>
            </Link>
          </div>
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
              <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-2">
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
                </div>
                <div className="space-y-2">
                  <p className="text-white flex items-center">
                    <span className="mr-2">•</span>Ivyland
                  </p>
                  <p className="text-white flex items-center">
                    <span className="mr-2">•</span>Jamison
                  </p>
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
                </div>
                <div className="space-y-2">
                  <p className="text-white flex items-center">
                    <span className="mr-2">•</span>Pipersville
                  </p>
                  <p className="text-white flex items-center">
                    <span className="mr-2">•</span>Point Pleasant
                  </p>
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

      {/* CTA Section */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-[url('/src/images/Background.png')] bg-cover bg-center bg-no-repeat"></div>
        <div className="absolute inset-0 bg-[#790003]/80"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Ready to simplify your laundry routine?
          </h2>
          <Link href="/schedule">
            <Button
              size="lg"
              className="bg-white hover:bg-[#F6AE2D] text-black px-12 py-6 text-lg"
            >
              Schedule a Pickup
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
