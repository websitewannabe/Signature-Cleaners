import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

export default function ServicesPage() {
  const { data: services, isLoading } = useQuery({
    queryKey: ["/api/services"],
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative py-28">
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

      {/* Services */}
      <section className="py-16 bg-[#090A0C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {isLoading ? (
            <div className="flex justify-center items-center py-12">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services &&
                services.map((service) => (
                  <div
                    key={service.id}
                    className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full overflow-hidden"
                  >
                    <div className="h-52 bg-neutral-200 flex-shrink-0 overflow-hidden">
                      <img
                        src={service.imageUrl}
                        alt={service.name}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex-grow space-y-3">
                        <h3 className="text-xl font-semibold text-neutral-900">
                          {service.name}
                        </h3>
                        <div className="w-12 h-0.5 bg-[#790003]/10"></div>
                        <p className="text-neutral-600 line-clamp-3">
                          {service.description}
                        </p>
                      </div>
                      <div className="mt-8 pt-4 border-t border-neutral-100 flex flex-col sm:flex-row items-center gap-4">
                        <span className="text-[#790003] font-semibold text-lg">
                          {service.price}
                        </span>
                        <Link
                          href="/schedule"
                          className="w-full sm:w-auto sm:ml-auto"
                        >
                          <Button className="w-full bg-[#790003] hover:bg-[#F6AE2D] text-white font-medium transition-colors duration-300">
                            Book Now
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          )}
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
      <section className="relative py-16">
        <div className="absolute inset-0 bg-[url('/src/images/Background.png')] bg-cover bg-center bg-no-repeat"></div>
        <div className="absolute inset-0 bg-[#790003]/70"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to simplify your laundry routine?
          </h2>
          <Link href="/schedule">
            <Button
              size="lg"
              className="bg-white hover:bg-[#F6AE2D] text-black px-8"
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
