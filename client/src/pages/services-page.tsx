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
      <section className="bg-[#23282F] py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Our Services
            </h1>
            <p className="mt-4 text-xl text-white text-opacity-90 max-w-3xl mx-auto">
              Discover our comprehensive range of cleaning and garment care
              services
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
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
                    className="bg-white border border-neutral-200 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300"
                  >
                    <div className="h-48 bg-neutral-200">
                      <img
                        src={service.imageUrl}
                        alt={service.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-neutral-900">
                        {service.name}
                      </h3>
                      <p className="mt-2 text-neutral-600">
                        {service.description}
                      </p>
                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-primary font-medium">
                          {service.price}
                        </span>
                        <Link href="/schedule">
                          <Button
                            size="sm"
                            className="bg-[#790003] hover:bg-[#5a0002] text-white"
                          >
                            Schedule
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
      <section className="py-16 bg-neutral-50">
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

      {/* CTA */}
      <section className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Experience Premium Cleaning?
          </h2>
          <Link href="/schedule">
            <Button
              size="lg"
              className="bg-[#F9A826] hover:bg-[#E89212] text-white px-8"
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
