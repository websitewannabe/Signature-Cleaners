import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function DeliveryPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative py-28">
        <div className="absolute inset-0 bg-[url('/src/images/delivery.gif')] bg-cover bg-center bg-no-repeat"></div>
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

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-neutral-900 mb-6">
                Convenient Pickup & Delivery Service
              </h2>
              <p className="text-lg text-neutral-600 mb-6">
                Let us handle your garment care with our premium pickup and
                delivery service. We make it easy to keep your wardrobe fresh
                and clean without leaving your home or office.
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
                    Free pickup and delivery
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
                    Flexible scheduling options
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
                    Text notifications for pickup and delivery
                  </span>
                </li>
              </ul>
              <Link href="/schedule">
                <Button className="bg-[#790003] hover:bg-[#F6AE2D] text-white px-8 py-6">
                  Schedule Pickup
                </Button>
              </Link>
            </div>
            <div className="bg-neutral-100 rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-neutral-900 mb-6">
                Service Areas
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-2 border-b border-neutral-200">
                  <span className="text-neutral-600">Buckingham</span>
                  <span className="font-semibold">Free</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-neutral-200">
                  <span className="text-neutral-600">Doylestown</span>
                  <span className="font-semibold">Free</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-neutral-200">
                  <span className="text-neutral-600">New Hope</span>
                  <span className="font-semibold">Free</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-neutral-200">
                  <span className="text-neutral-600">Newtown</span>
                  <span className="font-semibold">Free</span>
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
            Ready to experience our premium delivery service?
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
