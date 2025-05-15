import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "wouter";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

export default function DeliveryPage() {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <link
          rel="canonical"
          href="https://www.mysignaturecleaners.com/all-services/delivery"
        />
        <title>Free Pickup & Delivery | Signature Cleaners</title>
        <meta
          name="description"
          content="Signature Cleaners offers free laundry and dry cleaning pickup & delivery across Bucks County. Schedule your service with convenient text notifications and flexible timing."
        />
        <meta
          name="keywords"
          content="laundry delivery, dry cleaning delivery, free pickup, residential laundry service, office garment delivery, Signature Cleaners, Bucks County laundry service"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Signature Cleaners",
            url: "https://signaturecleaners.com/delivery",
            image: "https://signaturecleaners.com/src/images/logo.png",
            logo: "https://signaturecleaners.com/src/images/logo.png",
            description:
              "Signature Cleaners provides free pickup and delivery services for dry cleaning and laundry in Doylestown and surrounding Bucks County areas. Flexible scheduling and reliable text updates included.",
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
              name: "Pickup & Delivery Options",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Home Pickup",
                    description:
                      "Pickup and return directly from your front door.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Office Pickup",
                    description:
                      "Convenient service to and from your workplace.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "24/7 Scheduling",
                    description:
                      "Request service any time with our online booking system.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Text Notifications",
                    description:
                      "Receive real-time updates when your items are picked up and delivered.",
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
                "Perkasie",
                "Jamison",
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
        <div className="absolute inset-0 bg-[url('/images/delivery.gif')] bg-cover bg-center bg-no-repeat bg-fixed"></div>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mt-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Free Pickup & Delivery
            </h1>
            <p className="mt-6 text-xl text-white text-opacity-90 max-w-3xl mx-auto">
              Professional dry cleaning and laundry delivered to your door
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", path: "/" },
              { label: "Services", path: "/all-services/all-services" },
              {
                label: "Delivery",
                path: "/all-services/delivery",
                current: true,
              },
            ]}
          />
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Why Choose Signature Cleaners?
              </h2>
              <p className="text-lg text-white/90 mb-6">
                Getting your garments cleaned has never been easier. With our
                convenient pickup and delivery service, Signature Cleaners
                brings expert care straight to your doorstep—at home or the
                office. Our professional team ensures your items are handled
                with care from start to finish, offering scheduled pickups,
                real-time tracking, and prompt returns. Whether you’re managing
                a busy family or a packed professional calendar, our delivery
                service saves you time without compromising quality. It's
                garment care on your terms—seamless, reliable, and stress-free.
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
                    30+ Years of Expert Care Experience
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
                    Eco-Friendly Cleaning Solutions
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
                    Guaranteed Satisfaction on Every Order
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
                    Free Pickup & Delivery Across Bucks County
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
                    Real-Time Order Tracking & Updates
                  </span>
                </li>
              </ul>
              <div className="space-y-6 mt-8 mb-8">
                <div className="grid grid-cols-4 gap-6">
                  {[
                    {
                      name: "Home",
                      icon: (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                        />
                      ),
                      details:
                        "Enjoy free pickup and delivery straight from your doorstep, scheduled at your convenience.",
                    },
                    {
                      name: "Office",
                      icon: (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                        />
                      ),
                      details:
                        "We offer workplace delivery and pickup to keep your business attire fresh and ready.",
                    },
                    {
                      name: "24/7",
                      icon: (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      ),
                      details:
                        "With flexible 24/7 scheduling, you can request pickups and deliveries that work with your busy life.",
                    },
                    {
                      name: "Reliable",
                      icon: (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      ),
                      details:
                        "We guarantee on-time, trackable pickups and deliveries with text message updates.",
                    },
                  ].map((service) => (
                    <button
                      key={service.name}
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
                        className={`w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto transition-all duration-300 ${
                          selectedService === service.name
                            ? "scale-110 ring-2 ring-[#F6AE2D]"
                            : "hover:scale-105"
                        }`}
                      >
                        <svg
                          className="w-12 h-12 text-[#790003]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          {service.icon}
                        </svg>
                      </div>
                      <span
                        className={`block mt-2 text-sm text-white/90 transition-all duration-300 ${
                          selectedService === service.name ? "font-bold" : ""
                        }`}
                      >
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
                      [
                        {
                          name: "Home",
                          details:
                            "Enjoy free pickup and delivery straight from your doorstep, scheduled at your convenience.",
                        },
                        {
                          name: "Office",
                          details:
                            "We offer workplace delivery and pickup to keep your business attire fresh and ready.",
                        },
                        {
                          name: "24/7",
                          details:
                            "With flexible 24/7 scheduling, you can request pickups and deliveries that work with your busy life.",
                        },
                        {
                          name: "Reliable",
                          details:
                            "We guarantee on-time, trackable pickups and deliveries with text message updates.",
                        },
                      ].find((s) => s.name === selectedService)?.details}
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
                    placeholder="Tell us about your delivery needs..."
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
              1024: { slidesPerView: 3 },
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
                </div>
              </Link>
            </SwiperSlide>

            <SwiperSlide>
              <Link href="/all-services/wash-fold" className="block">
                <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-6 h-full flex flex-col items-center min-h-[220px]">
                  <div className="w-16 h-16 bg-[#F8F5F0] rounded-full flex items-center justify-center mx-auto mb-4">
                    <img
                      src="/icons/regularWash.svg"
                      alt="Wash & Fold"
                      className="w-8 h-8"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-center text-neutral-900 mb-2">
                    Wash & Fold
                  </h3>
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
                </div>
              </Link>
            </SwiperSlide>

            <SwiperSlide>
              <Link
                href="/all-services/clean-household-items"
                className="block"
              >
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
                </div>
              </Link>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-[url('/images/Background.png')] bg-cover bg-center bg-no-repeat"></div>
        <div className="absolute inset-0 bg-[#790003]/80"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Ready to experience our delivery service?
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

      <Footer />
    </div>
  );
}
