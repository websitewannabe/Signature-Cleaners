import { Link } from "wouter";
import { Shirt, Car, Footprints } from "lucide-react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { getServices } from "@/lib/queryClient"; // Added import

import { Helmet } from "react-helmet-async";

const services = getServices(); // Replaced with static data retrieval

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
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
            image: "https://signaturecleaners.com/src/images/logo.png",
            logo: "https://signaturecleaners.com/src/images/logo.png",
            description:
              "Signature Cleaners provides professional dry cleaning, wash and fold, wedding gown preservation, and household item care with pickup and delivery in Bucks County.",
            address: {
              "@type": "PostalAddress",
              streetAddress: "123 Main Street",
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

      {/* Hero Section */}
      <section className="relative py-40">
        <div className="absolute inset-0 bg-[url('/src/images/cleaners.gif')] bg-cover bg-center bg-no-repeat"></div>
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
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Dry Cleaning */}
            <div className="group bg-[#790003] shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full overflow-hidden">
              <div className="h-40 bg-[url('/src/images/cleaners.gif')] bg-cover bg-center bg-no-repeat flex-shrink-0 overflow-hidden transition-transform duration-300 group-hover:scale-105"></div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex-grow flex flex-col space-y-3">
                  <h3 className="text-xl font-semibold text-white">
                    Professional Dry Cleaning
                  </h3>
                  <div className="w-12 h-0.5 bg-[#181818]"></div>
                  <p className="text-white line-clamp-3 flex-grow">
                    State-of-the-art dry cleaning services for all your delicate
                    and special garments, ensuring the highest quality care.
                  </p>
                  <Link href="/dry-cleaning" className="block">
                    <Button className="w-full bg-white text-black hover:bg-white hover:text-black transition-colors duration-300 rounded-none">
                      Learn More
                    </Button>
                  </Link>
                </div>
                <div className="mt-8 pt-4 border-t border-[#790003] flex flex-col sm:flex-row items-center gap-4">
                  <span className="text-white font-semibold text-lg">
                    From $6.99
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
              <div className="h-40 bg-[url('/src/images/wash-fold.gif')] bg-cover bg-center bg-no-repeat flex-shrink-0 overflow-hidden transition-transform duration-300 group-hover:scale-105"></div>
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
                  <Link href="/wash-fold" className="block">
                    <Button className="w-full bg-white text-black hover:bg-white hover:text-black transition-colors duration-300 rounded-none">
                      Learn More
                    </Button>
                  </Link>
                </div>
                <div className="mt-8 pt-4 border-t border-[#181818] flex flex-col sm:flex-row items-center gap-4">
                  <span className="text-white font-semibold text-lg">
                    $2.99/lb
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
              <div className="h-40 bg-[url('/src/images/wedding-gown.gif')] bg-cover bg-center bg-no-repeat flex-shrink-0 overflow-hidden transition-transform duration-300 group-hover:scale-105"></div>
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
                  <Link href="/wedding-gown" className="block">
                    <Button className="w-full bg-white text-black hover:bg-white hover:text-black transition-colors duration-300 rounded-none">
                      Learn More
                    </Button>
                  </Link>
                </div>
                <div className="mt-8 pt-4 border-t border-[#181818] flex flex-col sm:flex-row items-center gap-4">
                  <span className="text-white font-semibold text-lg">
                    From $99.99
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
              <div className="h-40 bg-[url('/src/images/household-items.gif')] bg-cover bg-center bg-no-repeat flex-shrink-0 overflow-hidden transition-transform duration-300 group-hover:scale-105"></div>
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
                  <Link href="/clean-household-items" className="block">
                    <Button className="w-full bg-white text-black hover:bg-white hover:text-black transition-colors duration-300 rounded-none">
                      Learn More
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
            {/* Alterations & Tailoring */}
            <div className="group bg-[#790003] shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full overflow-hidden">
              <div className="h-40 bg-[url('/src/images/tailoring.gif')] bg-cover bg-center bg-no-repeat flex-shrink-0 overflow-hidden transition-transform duration-300 group-hover:scale-105"></div>
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
                  <Link href="/alteration-tailoring" className="block">
                    <Button className="w-full bg-white text-black hover:bg-white hover:text-black transition-colors duration-300 rounded-none">
                      Learn More
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
              <div className="h-40 bg-[url('/src/images/delivery.gif')] bg-cover bg-center bg-no-repeat flex-shrink-0 overflow-hidden transition-transform duration-300 group-hover:scale-105"></div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex-grow flex flex-col space-y-3">
                  <h3 className="text-xl font-semibold text-white">Delivery</h3>
                  <div className="w-12 h-0.5 bg-[#181818]"></div>
                  <p className="text-white line-clamp-3 flex-grow">
                    Clean clothes, delivered to your door — convenience you can
                    count on. Our reliable pickup and delivery service fits
                    seamlessly into your schedule.
                  </p>
                  <Link href="/delivery" className="block">
                    <Button className="w-full bg-white text-black hover:bg-white hover:text-black transition-colors duration-300 rounded-none">
                      Learn More
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
              <div className="h-40 bg-[url('/src/images/shoe-repair.gif')] bg-cover bg-center bg-no-repeat flex-shrink-0 overflow-hidden transition-transform duration-300 group-hover:scale-105"></div>
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
                  <Link href="/shoe-repair" className="block">
                    <Button className="w-full bg-white text-black hover:bg-white hover:text-black transition-colors duration-300 rounded-none">
                      Learn More
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

      {/* Locations Section */}
      <section className="py-16 bg-[#181818]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">
              Locations We Pick Up & Deliver
            </h2>
            <p className="mt-4 text-lg text-white/80 max-w-3xl mx-auto">
              We service the following areas in Bucks County and surrounding
              regions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="bg-neutral-200 rounded-lg overflow-hidden h-[400px] shadow-md">
              {/* Placeholder for Google Maps - Replace with actual map component */}
              <div className="h-full w-full bg-neutral-200 flex items-center justify-center">
                <span className="text-neutral-500">Service Area Map</span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                <div className="space-y-2">
                  <p className="text-neutral-900">Buckingham</p>
                  <p className="text-neutral-900">Carversville</p>
                  <p className="text-neutral-900">Chalfont</p>
                  <p className="text-neutral-900">Doylestown</p>
                  <p className="text-neutral-900">Dublin</p>
                  <p className="text-neutral-900">Fountainville</p>
                  <p className="text-neutral-900">Furlong</p>
                  <p className="text-neutral-900">Holland</p>
                  <p className="text-neutral-900">Ivyland</p>
                  <p className="text-neutral-900">Jamison</p>
                  <p className="text-neutral-900">Lahaska</p>
                  <p className="text-neutral-900">Morrisville</p>
                  <p className="text-neutral-900">New Hope</p>
                </div>
                <div className="space-y-2">
                  <p className="text-neutral-900">Newtown</p>
                  <p className="text-neutral-900">Ottsville</p>
                  <p className="text-neutral-900">Perkasie</p>
                  <p className="text-neutral-900">Pipersville</p>
                  <p className="text-neutral-900">Point Pleasant</p>
                  <p className="text-neutral-900">Richboro</p>
                  <p className="text-neutral-900">Southampton</p>
                  <p className="text-neutral-900">Trevose</p>
                  <p className="text-neutral-900">Warminster</p>
                  <p className="text-neutral-900">Warrington</p>
                  <p className="text-neutral-900">Washington Crossing</p>
                  <p className="text-neutral-900">Yardley</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-[url('/src/images/Background.png')] bg-cover bg-center bg-no-repeat"></div>
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
