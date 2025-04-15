import { Link } from "wouter";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { getServices } from "@/lib/queryClient"; // Added import

const services = getServices(); // Replaced with static data retrieval

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col">
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
      <section id="services" className="py-16 bg-[#022349]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Services
            </h2>
            <p className="mt-4 text-xl text-neutral-800 text-white max-w-3xl mx-auto leading-relaxed">
              Experience exceptional garment care with our premium cleaning
              services, tailored to preserve and enhance your wardrobe.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Dry Cleaning */}
            <div className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full overflow-hidden">
              <div className="h-40 bg-[url('/src/images/cleaners.gif')] bg-cover bg-center bg-no-repeat flex-shrink-0 overflow-hidden transition-transform duration-300 group-hover:scale-105"></div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex-grow flex flex-col space-y-3">
                  <h3 className="text-xl font-semibold text-neutral-900">
                    Professional Dry Cleaning
                  </h3>
                  <div className="w-12 h-0.5 bg-[#790003]/10"></div>
                  <p className="text-neutral-600 line-clamp-3 flex-grow">
                    State-of-the-art dry cleaning services for all your delicate
                    and special garments, ensuring the highest quality care.
                  </p>
                  <Link href="/dry-cleaning" className="block">
                    <Button
                      variant="outline"
                      className="w-full border-[#790003] text-[#790003] hover:bg-[#790003] hover:text-white transition-colors duration-300"
                    >
                      Learn More
                    </Button>
                  </Link>
                </div>
                <div className="mt-8 pt-4 border-t border-neutral-100 flex flex-col sm:flex-row items-center gap-4">
                  <span className="text-[#790003] font-semibold text-lg">
                    From $6.99
                  </span>
                  <Link
                    href="/schedule"
                    className="w-full sm:w-auto sm:ml-auto"
                  >
                    <Button className="w-full bg-burgundy hover:bg-gold text-ivory font-medium transition-colors duration-300">
                      Book Now
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            {/* Wash & Fold */}
            <div className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full overflow-hidden">
              <div className="h-40 bg-[url('/src/images/wash-fold.gif')] bg-cover bg-center bg-no-repeat flex-shrink-0 overflow-hidden transition-transform duration-300 group-hover:scale-105"></div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex-grow flex flex-col space-y-3">
                  <h3 className="text-xl font-semibold text-neutral-900">
                    Wash & Fold
                  </h3>
                  <div className="w-12 h-0.5 bg-[#790003]/10"></div>
                  <p className="text-neutral-600 line-clamp-3 flex-grow">
                    Convenient wash and fold service for your everyday laundry
                    needs, saving you time and effort.
                  </p>
                  <Link href="/wash-fold" className="block">
                    <Button
                      variant="outline"
                      className="w-full border-[#790003] text-[#790003] hover:bg-[#790003] hover:text-white transition-colors duration-300"
                    >
                      Learn More
                    </Button>
                  </Link>
                </div>
                <div className="mt-8 pt-4 border-t border-neutral-100 flex flex-col sm:flex-row items-center gap-4">
                  <span className="text-[#790003] font-semibold text-lg">
                    $2.99/lb
                  </span>
                  <Link
                    href="/schedule"
                    className="w-full sm:w-auto sm:ml-auto"
                  >
                    <Button className="w-full bg-burgundy hover:bg-gold text-ivory font-medium transition-colors duration-300">
                      Book Now
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            {/* Wedding Gowns */}
            <div className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full overflow-hidden">
              <div className="h-40 bg-[url('/src/images/wedding-gown.gif')] bg-cover bg-center bg-no-repeat flex-shrink-0 overflow-hidden transition-transform duration-300 group-hover:scale-105"></div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex-grow flex flex-col space-y-3">
                  <h3 className="text-xl font-semibold text-neutral-900">
                    Wedding Gowns
                  </h3>
                  <div className="w-12 h-0.5 bg-[#790003]/10"></div>
                  <p className="text-neutral-600 line-clamp-3 flex-grow">
                    Specialized cleaning and preservation services for wedding
                    gowns, ensuring your precious memories last a lifetime.
                  </p>
                  <Link href="/wedding-gown" className="block">
                    <Button
                      variant="outline"
                      className="w-full border-[#790003] text-[#790003] hover:bg-[#790003] hover:text-white transition-colors duration-300"
                    >
                      Learn More
                    </Button>
                  </Link>
                </div>
                <div className="mt-8 pt-4 border-t border-neutral-100 flex flex-col sm:flex-row items-center gap-4">
                  <span className="text-[#790003] font-semibold text-lg">
                    From $99.99
                  </span>
                  <Link
                    href="/schedule"
                    className="w-full sm:w-auto sm:ml-auto"
                  >
                    <Button className="w-full bg-burgundy hover:bg-gold text-ivory font-medium transition-colors duration-300">
                      Book Now
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            {/* Household Items */}
            <div className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full overflow-hidden">
              <div className="h-40 bg-[url('/src/images/household-items.gif')] bg-cover bg-center bg-no-repeat flex-shrink-0 overflow-hidden transition-transform duration-300 group-hover:scale-105"></div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex-grow flex flex-col space-y-3">
                  <h3 className="text-xl font-semibold text-neutral-900">
                    Cleaning of Household Items
                  </h3>
                  <div className="w-12 h-0.5 bg-[#790003]/10"></div>
                  <p className="text-neutral-600 line-clamp-3 flex-grow">
                    Comprehensive cleaning solutions for household items
                    including comforters, blankets, and decorative pieces.
                  </p>
                  <Link href="/clean-household-items" className="block">
                    <Button
                      variant="outline"
                      className="w-full border-[#790003] text-[#790003] hover:bg-[#790003] hover:text-white transition-colors duration-300"
                    >
                      Learn More
                    </Button>
                  </Link>
                </div>
                <div className="mt-8 pt-4 border-t border-neutral-100 flex flex-col sm:flex-row items-center gap-4">
                  <span className="text-[#790003] font-semibold text-lg">
                    From $24.99
                  </span>
                  <Link
                    href="/schedule"
                    className="w-full sm:w-auto sm:ml-auto"
                  >
                    <Button className="w-full bg-burgundy hover:bg-gold text-ivory font-medium transition-colors duration-300">
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
                href="/delivery"
                className="group flex flex-col items-center"
              >
                <div
                  className="w-20 h-20 bg-[#790003] rounded-full flex items-center justify-center shadow-lg transition-transform group-hover:scale-110"
                  aria-label="Delivery Service"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                    />
                  </svg>
                </div>
                <span className="mt-2 text-white text-sm font-medium">
                  Delivery
                </span>
              </Link>

              {/* Alterations & Tailoring */}
              <Link
                href="/alteration-tailoring"
                className="group flex flex-col items-center"
              >
                <div
                  className="w-20 h-20 bg-[#790003] rounded-full flex items-center justify-center shadow-lg transition-transform group-hover:scale-110"
                  aria-label="Alterations and Tailoring Service"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <span className="mt-2 text-white text-sm font-medium">
                  Tailoring
                </span>
              </Link>

              {/* Shoe Repair */}
              <Link
                href="/shoe-repair"
                className="group flex flex-col items-center"
              >
                <div
                  className="w-20 h-20 bg-[#790003] rounded-full flex items-center justify-center shadow-lg transition-transform group-hover:scale-110"
                  aria-label="Shoe Repair Service"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                </div>
                <span className="mt-2 text-white text-sm font-medium">
                  Shoe Repair
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Price List */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900">Price List</h2>
            <p className="mt-4 text-lg text-neutral-600 max-w-3xl mx-auto">
              Below is our standard pricing for common items. Contact us for
              special items or bulk pricing.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-x divide-y divide-neutral-200">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-4">
                  Dry Cleaning
                </h3>
                <ul className="space-y-3">
                  <PriceItem item="Shirts/Blouses" price="$6.99" />
                  <PriceItem item="Pants/Slacks" price="$8.99" />
                  <PriceItem item="Skirts (Basic)" price="$8.99" />
                  <PriceItem item="Dresses (Simple)" price="$14.99" />
                  <PriceItem item="Suits (2 Piece)" price="$24.99" />
                  <PriceItem item="Coats" price="$19.99" />
                  <PriceItem item="Formal Gowns" price="From $29.99" />
                </ul>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-4">
                  Wash & Fold
                </h3>
                <ul className="space-y-3">
                  <PriceItem item="Regular Laundry" price="$2.99/lb" />
                  <PriceItem item="Comforters (Twin)" price="$24.99" />
                  <PriceItem item="Comforters (Queen)" price="$29.99" />
                  <PriceItem item="Comforters (King)" price="$34.99" />
                  <PriceItem item="Blankets" price="$19.99" />
                  <PriceItem item="Bed Sheets (Set)" price="$14.99" />
                  <PriceItem item="Duvet Covers" price="$19.99" />
                </ul>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-4">
                  Alterations & Repairs
                </h3>
                <ul className="space-y-3">
                  <PriceItem item="Hem Pants" price="$14.99" />
                  <PriceItem item="Waist Adjustment" price="$19.99" />
                  <PriceItem item="Replace Zipper" price="From $16.99" />
                  <PriceItem item="Patch Repair" price="From $12.99" />
                  <PriceItem item="Button Replacement" price="$3.99 each" />
                  <PriceItem item="Dress Shortening" price="From $24.99" />
                  <PriceItem item="Custom Alterations" price="By Quote" />
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-neutral-600 mb-4">
              Need a service not listed here? Contact us for a custom quote.
            </p>
            <Link href="/contact">
              <Button
                variant="outline"
                className="bg-white border-2 border-primary hover:bg-neutral-50 text-primary"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900">
              Locations We Pick Up & Deliver
            </h2>
            <p className="mt-4 text-lg text-neutral-600 max-w-3xl mx-auto">
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