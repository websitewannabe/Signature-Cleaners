import { Link } from "wouter";
import { Shirt, Car, Footprints } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { getServices } from "@/lib/queryClient"; // Added import
import { useState } from "react";
import { Helmet } from "react-helmet-async";

const services = getServices(); // Replaced with static data retrieval

export default function ServicesPage() {
  const [mapLoaded, setMapLoaded] = useState(false);
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <link
          rel="canonical"
          href="https://www.mysignaturecleaners.com/all-services/all-services"
        />
        <title>
          Services | Signature Cleaners – Dry Cleaning, Wash & Fold, Tailoring
        </title>
        <meta
          name="description"
          content="Explore Signature Cleaners’ services including dry cleaning, wash & fold, tailoring, household item cleaning, wedding gown preservation, and shoe repair across Bucks County."
        />
        <meta
          name="keywords"
          content="dry cleaning, wash and fold, tailoring, household cleaning, wedding gown preservation, shoe repair, garment care, laundry service, Signature Cleaners, Bucks County laundry"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Signature Cleaners",
            url: "https://signaturecleaners.com/services",
            image: "https://signaturecleaners.com/images/logo.png",
            logo: "https://signaturecleaners.com/images/logo.png",
            description:
              "Signature Cleaners offers expert garment care and delivery services throughout Bucks County.",
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
              name: "Garment Care Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Professional Dry Cleaning",
                    description:
                      "Dry cleaning for suits, dresses, coats, and delicates.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Wash & Fold",
                    description: "Everyday laundry services billed per pound.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Wedding Gown Preservation",
                    description:
                      "Careful cleaning and boxing of wedding dresses for lifelong preservation.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Household Item Cleaning",
                    description:
                      "Comforters, blankets, and decor cleaned with care.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Tailoring & Alterations",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Shoe Repair",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Pickup & Delivery",
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
                "New Hope",
                "Newtown",
                "Yardley",
                "Richboro",
                "Perkasie",
                "Southampton",
              ],
            },
          })}
        </script>
      </Helmet>

      <Header />

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://signaturecleaners.com",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Services",
              item: "https://signaturecleaners.com/all-services/all-services",
            },
          ],
        })}
      </script>

      {/* Hero Section */}
      <section className="relative py-40">
        <div className="absolute inset-0 bg-[url('/images/cleaners.gif')] bg-cover bg-center bg-no-repeat"></div>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mt-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Our Services
            </h1>
            <p className="mt-6 text-xl text-white text-opacity-90 max-w-3xl mx-auto">
              Discover our comprehensive range of cleaning and garment care
              services
            </p>
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
          <div className="mb-6">
            <Breadcrumbs
              items={[
                { label: "Home", path: "/" },
                {
                  label: "Services",
                  path: "/all-services/all-services",
                  current: true,
                },
              ]}
            />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Dry Cleaning */}
            <div className="group bg-[#790003] shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full overflow-hidden">
              <div className="h-40 bg-[url('/images/interior-two.webp')] bg-cover bg-center bg-no-repeat flex-shrink-0 overflow-hidden transition-transform duration-300 group-hover:scale-105"></div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex-grow flex flex-col space-y-3">
                  <h3 className="text-xl font-semibold text-white">
                    Dry Cleaning
                  </h3>
                  <div className="w-12 h-0.5 bg-[#181818]"></div>
                  <p className="text-white line-clamp-3 flex-grow">
                    Signature Cleaners offers expert garment care and delivery
                    services throughout Bucks County.
                  </p>
                  <Link href="/all-services/dry-cleaning" className="block">
                    <Button className="w-full bg-white text-black hover:bg-white hover:text-black transition-colors duration-300 rounded-none">
                      Why Dry Cleaning
                    </Button>
                  </Link>
                </div>
                <div className="mt-8 pt-4 border-t border-black flex flex-col sm:flex-row items-center gap-4">
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
              <div className="h-40 bg-[url('/images/washFold.webp')] bg-cover bg-center bg-no-repeat flex-shrink-0 overflow-hidden transition-transform duration-300 group-hover:scale-105"></div>
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
                      Laundry Made Easy
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
              <div className="h-40 bg-[url('/images/weddingGown.webp')] bg-cover bg-center bg-no-repeat flex-shrink-0 overflow-hidden transition-transform duration-300 group-hover:scale-105"></div>
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
                      Gown Care Guide
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
              <div className="h-40 bg-[url('/images/householdItems.webp')] bg-cover bg-center bg-no-repeat flex-shrink-0 overflow-hidden transition-transform duration-300 group-hover:scale-105"></div>
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
                      Clean Your Homewear
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
            {/* Alterations & Tailoring */}
            <div className="group bg-[#790003] shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full overflow-hidden">
              <div className="h-40 bg-[url('/images/tailor.webp')] bg-cover bg-center bg-no-repeat flex-shrink-0 overflow-hidden transition-transform duration-300 group-hover:scale-105"></div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex-grow flex flex-col space-y-3">
                  <h3 className="text-xl font-semibold text-white">
                    Alterations & Tailoring
                  </h3>
                  <div className="w-12 h-0.5 bg-[#181818]"></div>
                  <p className="text-white line-clamp-3 flex-grow">
                    Perfect fit, perfected style — our expert tailoring brings
                    your garments to life.
                  </p>
                  <Link
                    href="/all-services/alteration-tailoring"
                    className="block"
                  >
                    <Button className="w-full bg-white text-black hover:bg-white hover:text-black transition-colors duration-300 rounded-none">
                      Perfect the Fit
                    </Button>
                  </Link>
                </div>
                <div className="mt-8 pt-4 border-t border-[#181818] flex flex-col sm:flex-row items-center gap-4">
                  <span className="text-white font-semibold text-lg">
                    From $24.99
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
            {/* Delivery */}
            <div className="group bg-[#790003] shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full overflow-hidden">
              <div className="h-40 bg-[url('/images/delivery.webp')] bg-cover bg-center bg-no-repeat flex-shrink-0 overflow-hidden transition-transform duration-300 group-hover:scale-105"></div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex-grow flex flex-col space-y-3">
                  <h3 className="text-xl font-semibold text-white">Delivery</h3>
                  <div className="w-12 h-0.5 bg-[#181818]"></div>
                  <p className="text-white line-clamp-3 flex-grow">
                    Clean clothes, delivered to your door — convenience you can
                    count on.
                  </p>
                  <Link href="/all-services/delivery" className="block">
                    <Button className="w-full bg-white text-black hover:bg-white hover:text-black transition-colors duration-300 rounded-none">
                      Pickup & Delivery
                    </Button>
                  </Link>
                </div>
                <div className="mt-8 pt-4 border-t border-[#181818] flex flex-col sm:flex-row items-center gap-4">
                  <span className="text-white font-semibold text-lg">
                    From $24.99
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
            {/* Shoe Repair */}
            <div className="group bg-[#790003] shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full overflow-hidden">
              <div className="h-40 bg-[url('/images/shoeRepair.webp')] bg-cover bg-center bg-no-repeat flex-shrink-0 overflow-hidden transition-transform duration-300 group-hover:scale-105"></div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex-grow flex flex-col space-y-3">
                  <h3 className="text-xl font-semibold text-white">
                    Shoe Repair
                  </h3>
                  <div className="w-12 h-0.5 bg-[#181818]"></div>
                  <p className="text-white line-clamp-3 flex-grow">
                    Step into confidence with expert shoe repair that restores
                    and revives.
                  </p>
                  <Link href="/all-services/shoe-repair" className="block">
                    <Button className="w-full bg-white text-black hover:bg-white hover:text-black transition-colors duration-300 rounded-none">
                      Fix Your Footwear
                    </Button>
                  </Link>
                </div>
                <div className="mt-8 pt-4 border-t border-[#181818] flex flex-col sm:flex-row items-center gap-4">
                  <span className="text-white font-semibold text-lg">
                    From $24.99
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-[url('/images/Background.webp')] bg-cover bg-center bg-no-repeat"></div>
        <div className="absolute inset-0 bg-[#790003]/70"></div>
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

const PriceItem = ({ item, price }: { item: string; price: string }) => (
  <li className="flex justify-between">
    <span>{item}</span>
    <span className="font-semibold">{price}</span>
  </li>
);
