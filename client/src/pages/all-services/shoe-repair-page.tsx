import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Helmet } from "react-helmet-async";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "wouter";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function ShoeRepairPage() {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [mapLoaded, setMapLoaded] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <link
          rel="canonical"
          href="https://www.mysignaturecleaners.com/all-services/shoe-repair"
        />
        <title>Shoe Repair Services | Signature Cleaners</title>
        <meta
          name="description"
          content="Extend the life of your shoes with professional repair services from Signature Cleaners. We offer heel replacement, sole repair, polishing, and stretching."
        />
        <meta
          name="keywords"
          content="shoe repair, sole replacement, heel repair, shoe polishing, shoe stretching, footwear restoration, Signature Cleaners, Bucks County shoe service"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Signature Cleaners",
            url: "https://signaturecleaners.com/shoe-repair",
            image: "https://signaturecleaners.com/src/images/logo.png",
            logo: "https://signaturecleaners.com/src/images/logo.png",
            description:
              "Signature Cleaners offers expert shoe repair services including sole and heel replacement, color restoration, polishing, and stretching. Bring life back to your favorite footwear.",
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
              name: "Shoe Repair Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Heel Repair",
                    description:
                      "Professional heel replacement for dress shoes, boots, and casual styles.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Sole Replacement",
                    description:
                      "Durable sole repairs for improved comfort, grip, and longevity.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Polishing & Restoration",
                    description:
                      "Revive color, finish, and softness with premium leather polishing.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Shoe Stretching",
                    description:
                      "Improve fit and relieve tightness without damaging the material.",
                  },
                },
              ],
            },
            areaServed: {
              "@type": "Place",
              name: [
                "Doylestown",
                "New Hope",
                "Newtown",
                "Warminster",
                "Perkasie",
                "Furlong",
                "Richboro",
                "Jamison",
                "Southampton",
                "Warrington",
              ],
            },
          })}
        </script>
      </Helmet>

      <Header />

      {/* Hero Section */}
      <section className="relative py-40">
        <div className="absolute inset-0 bg-[url('/images/shoe-repair.gif')] bg-cover bg-center bg-no-repeat"></div>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mt-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Professional Shoe Repair
            </h1>
            <p className="mt-6 text-xl text-white text-opacity-90 max-w-3xl mx-auto">
              Expert shoe repair and restoration services
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
                label: "Shoe Repair",
                path: "/all-services/shoe-repair",
                current: true,
              },
            ]}
          />
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Expert Shoe Care Services
              </h2>
              <p className="text-lg text-white/90 mb-6">
                Your shoes carry you through life—make sure they’re in top
                condition. At Signature Cleaners, our skilled cobblers offer
                comprehensive shoe repair services designed to extend the life
                and appearance of your favorite footwear. From restoring worn
                soles and heels to polishing scuffed leather and adjusting fit
                through stretching, we handle every pair with expert care.
                Whether it's high-end dress shoes, everyday favorites, or
                delicate designer styles, we bring craftsmanship and precision
                to every stitch and shine.
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
                    Professional sole replacement
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
                    Heel repair and replacement
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
                    Color restoration and polishing
                  </span>
                </li>
              </ul>
              <div className="space-y-6 mt-8 mb-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {[
                    {
                      name: "Heels",
                      type: "img",
                      icon: "/icons/heel.svg",
                      details:
                        "We specialize in heel repair and replacement for all types of shoes, restoring stability, comfort, and appearance.",
                    },
                    {
                      name: "Soles",
                      type: "img",
                      icon: "/icons/shoes.svg",
                      details:
                        "Worn-out soles are replaced with durable materials to extend the life of your shoes and improve traction.",
                    },
                    {
                      name: "Polish",
                      type: "img",
                      icon: "/icons/polish.svg",
                      details:
                        "Our polishing service restores shine, color, and softness to your footwear with premium finishing products.",
                    },
                    {
                      name: "Stretching",
                      type: "img",
                      icon: "/icons/stretching.svg",
                      details:
                        "Tight shoes? We offer professional stretching to improve fit without damaging the material or structure.",
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
                        {service.type === "svg" ? (
                          <svg
                            className="w-12 h-12 text-[#790003]"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            {service.icon}
                          </svg>
                        ) : (
                          <img
                            src={service.icon}
                            alt={`${service.name} icon`}
                            className="w-12 h-12"
                          />
                        )}
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
                          name: "Heels",
                          details:
                            "We specialize in heel repair and replacement for all types of shoes, restoring stability, comfort, and appearance.",
                        },
                        {
                          name: "Soles",
                          details:
                            "Worn-out soles are replaced with durable materials to extend the life of your shoes and improve traction.",
                        },
                        {
                          name: "Polish",
                          details:
                            "Our polishing service restores shine, color, and softness to your footwear with premium finishing products.",
                        },
                        {
                          name: "Stretching",
                          details:
                            "Tight shoes? We offer professional stretching to improve fit without damaging the material or structure.",
                        },
                      ].find((s) => s.name === selectedService)?.details}
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-neutral-100 rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-neutral-900 mb-6">
                Schedule Shoe Repair
              </h3>
              <form
                className="space-y-4"
                data-netlify="true"
                name="contact"
                method="POST"
                netlify-honeypot="bot-field"
              >
                <input type="hidden" name="form-name" value="contact" />
                <p className="hidden">
                  <label>
                    Don't fill this out if you're human:{" "}
                    <input name="bot-field" />
                  </label>
                </p>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">
                    Full Name
                  </label>
                  <Input
                    name="name"
                    placeholder="Your name"
                    className="w-full"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">
                    Phone Number
                  </label>
                  <Input
                    name="phone"
                    type="tel"
                    placeholder="(215) 555-0123"
                    className="w-full"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">
                    Email
                  </label>
                  <Input
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    className="w-full"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">
                    Address
                  </label>
                  <Textarea
                    name="address"
                    placeholder="Your pickup address"
                    className="min-h-[100px] w-full"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">
                    Message
                  </label>
                  <Textarea
                    name="message"
                    placeholder="Additional notes or special instructions..."
                    className="min-h-[100px] w-full"
                  />
                </div>

                <Button
                  className="w-full bg-[#790003] hover:bg-[#F6AE2D] text-white"
                  aria-label="Learn more about our shoe repair services"
                >
                  Learn About Shoe Repair Services
                </Button>
              </form>

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
                    placeholder="Tell us about your shoe repair needs..."
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

            <SwiperSlide>
              <Link href="/all-services/delivery" className="block">
                <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-6 h-full flex flex-col items-center min-h-[220px]">
                  <div className="w-16 h-16 bg-[#F8F5F0] rounded-full flex items-center justify-center mx-auto mb-4">
                    <img
                      src="/icons/bubbles.svg"
                      alt="Delivery Service"
                      className="w-8 h-8 text-[#790003]"
                      style={{
                        filter:
                          "invert(11%) sepia(82%) saturate(3575%) hue-rotate(345deg) brightness(87%) contrast(109%)",
                      }}
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-center text-neutral-900 mb-2">
                    Delivery Service
                  </h3>
                </div>
              </Link>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-[url('/images/Background.webp')] bg-cover bg-center bg-no-repeat"></div>
        <div className="absolute inset-0 bg-[#790003]/80"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Ready to repair your favorite shoes?
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
            <div
              className="bg-neutral-200 rounded-lg overflow-hidden h-[400px] shadow-md cursor-pointer"
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
                  className="w-full h-full object-cover"
                />
              )}
            </div>

            <div className="rounded-lg p-8 h-[400px] overflow-y-auto">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-2 auto-rows-auto">
                <div className="space-y-2">
                  <Link
                    href="/buckingham"
                    className="text-white hover:text-[#F6AE2D] transition-colors flex items-center"
                  >
                    <span className="mr-2">•</span>Buckingham
                  </Link>
                  <Link
                    href="/carversville"
                    className="text-white hover:text-[#F6AE2D] transition-colors flex items-center"
                  >
                    <span className="mr-2">•</span>Carversville
                  </Link>
                  <Link
                    href="/chalfont"
                    className="text-white hover:text-[#F6AE2D] transition-colors flex items-center"
                  >
                    <span className="mr-2">•</span>Chalfont
                  </Link>
                  <Link
                    href="/doylestown"
                    className="text-white hover:text-[#F6AE2D] transition-colors flex items-center"
                  >
                    <span className="mr-2">•</span>Doylestown
                  </Link>
                  <Link
                    href="/dublin"
                    className="text-white hover:text-[#F6AE2D] transition-colors flex items-center"
                  >
                    <span className="mr-2">•</span>Dublin
                  </Link>
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
