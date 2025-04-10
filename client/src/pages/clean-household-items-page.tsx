import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function CleanHouseholdItemsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative py-40">
        <div className="absolute inset-0 bg-[url('/src/images/household-items.gif')] bg-cover bg-center bg-no-repeat"></div>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mt-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Household Items Cleaning
            </h1>
            <p className="mt-6 text-xl text-white text-opacity-90 max-w-3xl mx-auto">
              Professional cleaning for your home's textiles and furnishings
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-neutral-900 mb-6">
                Expert Care for Your Home Items
              </h2>
              <p className="text-lg text-neutral-600 mb-6">
                Trust our expert cleaning service for your valuable household
                items. We use specialized cleaning techniques and gentle yet
                effective solutions to restore and protect your home textiles.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-primary mt-1 flex-shrink-0"
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
                  <span className="ml-3 text-neutral-600">
                    Specialized cleaning for delicate materials
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-primary mt-1 flex-shrink-0"
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
                  <span className="ml-3 text-neutral-600">
                    Stain removal and deep cleaning
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-primary mt-1 flex-shrink-0"
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
                  <span className="ml-3 text-neutral-600">
                    Professional handling and packaging
                  </span>
                </li>
              </ul>
              <Link href="/schedule">
                <Button className="bg-[#790003] hover:bg-[#F6AE2D] text-white px-8 py-6">
                  Schedule Service
                </Button>
              </Link>
            </div>
            <div className="bg-neutral-100 rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-neutral-900 mb-6">
                Service Pricing
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-2 border-b border-neutral-200">
                  <span className="text-neutral-600">
                    Comforters (Any Size)
                  </span>
                  <span className="font-semibold">From $29.99</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-neutral-200">
                  <span className="text-neutral-600">Blankets</span>
                  <span className="font-semibold">From $24.99</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-neutral-200">
                  <span className="text-neutral-600">Curtains (Per Panel)</span>
                  <span className="font-semibold">From $19.99</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-neutral-200">
                  <span className="text-neutral-600">Area Rugs</span>
                  <span className="font-semibold">From $39.99</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16">
        <div className="absolute inset-0 bg-[url('/src/images/Background.png')] bg-cover bg-center bg-no-repeat"></div>
        <div className="absolute inset-0 bg-[#790003]/80"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to refresh your home items?
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
