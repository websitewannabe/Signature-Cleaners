import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Helmet } from "react-helmet-async";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "wouter";
import { useState } from "react";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";

export default function WeddingGownPage() {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <link
          rel="canonical"
          href="https://www.mysignaturecleaners.com/all-services/wedding-gown"
        />
        <title>Wedding Gown Cleaning & Preservation | Signature Cleaners</title>
        <meta
          name="description"
          content="Preserve your wedding gown with expert care from Signature Cleaners. We use museum-quality materials and techniques to clean and store gowns for generations."
        />
        <meta
          name="keywords"
          content="wedding gown cleaning, wedding dress preservation, bridal dress care, anti-yellowing fabric treatment, gown boxing, Signature Cleaners, Bucks County bridal services"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Signature Cleaners",
            url: "https://signaturecleaners.com/wedding-gown",
            image: "https://signaturecleaners.com/src/images/logo.png",
            logo: "https://signaturecleaners.com/src/images/logo.png",
            description:
              "Signature Cleaners offers professional wedding gown cleaning and preservation services using safe, museum-quality methods to protect cherished bridal garments for years to come.",
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
              name: "Wedding Gown Preservation Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Gown Inspection",
                    description:
                      "Detailed fabric, beadwork, and seam inspection before preservation.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Bridal Dress Cleaning",
                    description:
                      "Gentle fabric-safe cleaning to remove stains and residue from the gown.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Documentation",
                    description:
                      "Before-and-after documentation with high-resolution images and condition notes.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Gown Preservation",
                    description:
                      "Archival-quality storage using acid-free tissue and anti-yellowing packaging.",
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
                "Jamison",
                "Warrington",
                "Furlong",
                "Warminster",
                "Yardley",
                "Perkasie",
                "Richboro",
              ],
            },
          })}
        </script>
      </Helmet>

      <Header />

      {/* Hero Section */}
      <section className="relative py-40">
        <div className="absolute inset-0 bg-[url('/images/wedding-gown.gif')] bg-cover bg-center bg-no-repeat"></div>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mt-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Wedding Gown Cleaning & Preservation
            </h1>
            <p className="mt-6 text-xl text-white text-opacity-90 max-w-3xl mx-auto">
              Expert care to preserve your cherished memories
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
                label: "Wedding Gown",
                path: "/all-services/wedding-gown",
                current: true,
              },
            ]}
          />
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Professional Wedding Gown Care
              </h2>
              <p className="text-lg text-white/90 mb-6">
                Your wedding gown is more than just a dress — it’s a treasured
                memory. At Signature Cleaners, we treat each gown with the care
                it deserves, using delicate, museum-grade preservation
                techniques to safeguard its beauty for decades. Whether you're
                saving it as a keepsake, passing it down, or simply protecting
                your investment, our specialists carefully clean, inspect, and
                package your gown to prevent yellowing, moisture damage, and
                fabric degradation. Trust us to help preserve one of the most
                meaningful garments you'll ever wear.
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
                    Detailed inspection and documentation
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
                    Museum-quality preservation materials
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
                    Anti-yellowing and oxidation protection
                  </span>
                </li>
              </ul>
              {/* Service Icons with Dynamic Dropdown */}
              <div className="space-y-6 mt-8 mb-8">
                <div className="grid grid-cols-4 gap-6">
                  {[
                    {
                      name: "Inspection",
                      icon: (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      ),
                      details:
                        "Every gown begins with a detailed inspection to assess fabric, stitching, and embellishments to guide safe preservation.",
                    },
                    {
                      name: "Cleaning",
                      icon: (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                        />
                      ),
                      details:
                        "We use delicate, fabric-safe cleaning techniques to remove stains, oils, and residues without damaging the gown.",
                    },
                    {
                      name: "Documentation",
                      icon: (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      ),
                      details:
                        "High-resolution photos and condition notes are recorded before and after treatment for your peace of mind.",
                    },
                    {
                      name: "Preservation",
                      icon: (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                        />
                      ),
                      details:
                        "Your gown is carefully packaged using museum-quality materials to prevent yellowing, oxidation, and damage over time.",
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
                        <svg
                          className="w-12 h-12 text-[#790003]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          {service.icon}
                        </svg>
                      </div>
                      <span className="block mt-2 text-sm text-white/90">
                        {service.name}
                      </span>
                    </button>
                  ))}
                </div>

                {/* Dynamic Dropdown */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${selectedService ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}
                >
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-white/90">
                    {selectedService &&
                      [
                        "Inspection",
                        "Cleaning",
                        "Documentation",
                        "Preservation",
                      ]
                        .map((name) => {
                          if (name === selectedService) {
                            const service = [
                              {
                                name: "Inspection",
                                details:
                                  "Every gown begins with a detailed inspection to assess fabric, stitching, and embellishments to guide safe preservation.",
                              },
                              {
                                name: "Cleaning",
                                details:
                                  "We use delicate, fabric-safe cleaning techniques to remove stains, oils, and residues without damaging the gown.",
                              },
                              {
                                name: "Documentation",
                                details:
                                  "High-resolution photos and condition notes are recorded before and after treatment for your peace of mind.",
                              },
                              {
                                name: "Preservation",
                                details:
                                  "Your gown is carefully packaged using museum-quality materials to prevent yellowing, oxidation, and damage over time.",
                              },
                            ].find((s) => s.name === name);
                            return service?.details;
                          }
                          return null;
                        })
                        .filter(Boolean)}
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-neutral-100 rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-neutral-900 mb-6">
                Schedule Wedding Gown Service
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
                  aria-label="Learn more about our wedding gown cleaning and preservation services"
                >
                  Learn About Wedding Gown Care
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
                    placeholder="Tell us about your wedding gown..."
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
            Preserve your precious memories
          </h2>
          <Link href="/schedule">
            <Button
              size="lg"
              className="bg-white hover:bg-[#F6AE2D] text-black px-12 py-6 text-lg"
            >
              Schedule a Consultation
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
                title="Signature Cleaners Wedding Gown Service Location Map"
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
