import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { Shirt, Car, Footprints } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";

export default function DryCleaningPage() {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const services = [
    {
      name: "Suits",
      icon: "/images/suit.svg",
      details:
        "Expert cleaning and pressing for business suits, preserving structure and finish while removing tough stains.",
    },
    {
      name: "Dresses",
      icon: "./images/dress.svg",
      details:
        "Delicate cleaning for formal wear and dresses, maintaining fabric integrity and embellishments.",
    },
    {
      name: "Shirts",
      icon: "/icons/shirt.svg",
      details:
        "Professional laundering and pressing for dress shirts, ensuring crisp collars and cuffs.",
    },
    {
      name: "Pants",
      icon: "./images/pants.svg",
      details:
        "Thorough cleaning and precise creasing for trousers and slacks.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <link
          rel="canonical"
          href="https://www.mysignaturecleaners.com/all-services/dry-cleaning"
        />
        <title>Dry Cleaning Services | Signature Cleaners</title>
        <meta
          name="description"
          content="Experience expert dry cleaning at Signature Cleaners. We offer stain removal, pressing, and gentle care for suits, dresses, shirts, and more across Bucks County."
        />
        <meta
          name="keywords"
          content="dry cleaning, professional garment care, suit cleaning, dress cleaning, shirt pressing, stain removal, Signature Cleaners, Bucks County laundry service"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Signature Cleaners",
            url: "https://signaturecleaners.com/dry-cleaning",
            image: "https://signaturecleaners.com/src/images/logo.png",
            logo: "https://signaturecleaners.com/src/images/logo.png",
            description:
              "Signature Cleaners offers professional dry cleaning services for delicate and high-end garments including suits, dresses, and shirts, serving Bucks County with pickup and delivery options.",
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
              name: "Dry Cleaning Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Suit Cleaning",
                    description:
                      "Business suit cleaning and pressing with stain removal and fabric preservation.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Dress Cleaning",
                    description:
                      "Delicate care and finishing for casual to formal dresses.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Shirt Cleaning",
                    description:
                      "Laundering, starching, and collar/cuff care for button-down shirts.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Pants Cleaning",
                    description:
                      "Professional care for slacks and trousers including crease definition and pressing.",
                  },
                },
              ],
            },
            areaServed: {
              "@type": "Place",
              name: [
                "Doylestown",
                "New Hope",
                "Perkasie",
                "Jamison",
                "Warminster",
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
        <div className="absolute inset-0 bg-[url('/images/cleaners.gif')] bg-cover bg-center bg-no-repeat"></div>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mt-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Professional Dry Cleaning
            </h1>
            <p className="mt-6 text-xl text-white text-opacity-90 max-w-3xl mx-auto">
              Expert care for your finest garments using advanced cleaning
              techniques
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
              { label: "Dry Cleaning", path: "/all-services/dry-cleaning", current: true }
            ]}
          />
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Premium Dry Cleaning Service
              </h2>
              <p className="text-lg text-white/90 mb-6">
                Our state-of-the-art dry cleaning process ensures your garments
                receive the highest quality care. We specialize in treating
                delicate fabrics and preserving the color and texture of your
                clothing.
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
                    Expert stain removal techniques
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
                    Gentle care for delicate fabrics
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
                    Professional pressing and finishing
                  </span>
                </li>
              </ul>
              <div className="space-y-6">
                <div className="grid grid-cols-4 gap-6">
                  {[
                    {
                      name: "Suits",
                      icon: (
                        <img
                          src="/icons/suit.svg"
                          alt="Suits"
                          className="w-12 h-12"
                        />
                      ),
                      details:
                        "Expert cleaning and pressing for business suits, preserving structure and finish while removing tough stains.",
                    },
                    {
                      name: "Dresses",
                      icon: (
                        <img
                          src="/icons/dress.svg"
                          alt="Dresses"
                          className="w-12 h-12"
                        />
                      ),
                      details:
                        "Delicate care for all dress types, from casual to formal wear, ensuring fabric integrity and perfect finish.",
                    },
                    {
                      name: "Shirts",
                      icon: (
                        <img
                          src="/icons/shirt.svg"
                          alt="Shirts"
                          className="w-12 h-12"
                        />
                      ),
                      details:
                        "Professional laundering with optional starch levels, precise pressing, and careful attention to collars and cuffs.",
                    },
                    {
                      name: "Pants",
                      icon: (
                        <img
                          src="/icons/pants.svg"
                          alt="Pants"
                          className="w-12 h-12"
                        />
                      ),
                      details:
                        "Thorough cleaning and precise pressing for all types of pants, ensuring perfect creases and wrinkle-free results.",
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
                  className={`overflow-hidden transition-all duration-300 ${
                    selectedService ? "max-h-48" : "max-h-0"
                  }`}
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
        <div className="absolute inset-0 bg-[url('/images/Background.png')] bg-cover bg-center bg-no-repeat"></div>
        <div className="absolute inset-0 bg-[#790003]/80"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Ready to refresh your wardrobe?
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