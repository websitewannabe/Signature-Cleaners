import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Home, Shirt, Car, Footprints, Gem, AirVent } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "wouter";
import { useState } from "react";

export default function DryCleaningPage() {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const services = [
    {
      name: "Suits",
      details:
        "Expert cleaning and pressing for business suits, preserving structure and finish while removing tough stains.",
    },
    {
      name: "Dresses",
      details:
        "Delicate care for all dress types, from casual to formal wear, ensuring fabric integrity and perfect finish.",
    },
    {
      name: "Shirts",
      details:
        "Professional laundering with optional starch levels, precise pressing, and careful attention to collars and cuffs.",
    },
    {
      name: "Pants",
      details:
        "Thorough cleaning and precise pressing for all types of pants, ensuring perfect creases and wrinkle-free results.",
    },
  ];

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
                  <img
                    src="/src/images/dress.svg"
                    alt="Dress icon"
                    className="h-6 w-6 text-white mt-1 flex-shrink-0"
                  />
                  <span className="ml-3 text-white/90">
                    Expert stain removal techniques
                  </span>
                </li>
                <li className="flex items-start">
                  <img
                    src="/src/images/dress.svg"
                    alt="Dress icon"
                    className="h-6 w-6 text-white mt-1 flex-shrink-0"
                  />
                  <span className="ml-3 text-white/90">
                    Gentle care for delicate fabrics
                  </span>
                </li>
                <li className="flex items-start">
                  <img
                    src="/src/images/dress.svg"
                    alt="Dress icon"
                    className="h-6 w-6 text-white mt-1 flex-shrink-0"
                  />
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
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M15 4h3a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h3m6 0v2H9V4m6 0a2 2 0 012-2h1a2 2 0 012 2v2H9V4a2 2 0 012-2h1a2 2 0 012 2v0z"
                        />
                      ),
                      details:
                        "Expert cleaning and pressing for business suits, preserving structure and finish while removing tough stains.",
                    },
                    {
                      name: "Dresses",
                      icon: (
                        <svg
                          className="w-12 h-12 text-[#790003]"
                          viewBox="0 0 512 512"
                          fill="currentColor"
                        >
                          <path d="M329.31,195.497c0-37.245,44.218-67.499,44.218-96.59c0-18.02-13.153-33.706-32.578-41.814V0h-16.289v52.39 c-4.505-0.775-9.172-1.189-13.965-1.189c-23.461,0-43.894,9.766-54.687,24.218c-10.794-14.451-31.246-24.218-54.706-24.218 c-4.794,0-9.46,0.414-13.965,1.189V0H171.05v57.092c-19.406,8.108-32.579,23.794-32.579,41.814 c0,29.091,44.219,59.345,44.219,96.59c0,116.358-88.437,104.727-88.437,265.302c0,0,16.289,18.623,74.472,18.623 c37.317,0,47.714,32.578,87.284,32.578c39.552,0,49.948-32.578,87.265-32.578c58.184,0,74.473-18.623,74.473-18.623 C417.747,300.224,329.31,311.854,329.31,195.497z" />
                        </svg>
                      ),
                      details:
                        "Delicate care for all dress types, from casual to formal wear, ensuring fabric integrity and perfect finish.",
                    },
                    {
                      name: "Shirts",
                      icon: <Shirt className="w-12 h-12 text-[#790003]" />,
                      details:
                        "Professional laundering with optional starch levels, precise pressing, and careful attention to collars and cuffs.",
                    },
                    {
                      name: "Pants",
                      icon: (
                        <img
                          src="/src/images/pants.svg"
                          alt="Pants icon"
                          className="w-12 h-12 text-[#790003]"
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

                <div
                  className={`overflow-hidden transition-all duration-300 ${selectedService ? "max-h-48" : "max-h-0"}`}
                >
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white/90">
                    {selectedService &&
                      services.find((s) => s.name === selectedService)?.details}
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-neutral-100 rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-neutral-900 mb-6">
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
                    placeholder="Tell us about your garments..."
                    className="min-h-[100px] w-full"
                  />
                </div>
                <Button className="w-full bg-[#790003] hover:bg-[#F6AE2D] text-white">
                  Send Message
                </Button>
              </form>
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

      {/* CTA Section */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-[url('/src/images/Background.png')] bg-cover bg-center bg-no-repeat"></div>
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
