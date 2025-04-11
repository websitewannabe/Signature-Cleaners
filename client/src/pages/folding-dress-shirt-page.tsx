
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "wouter";
import { useState } from "react";

export default function FoldingDressShirtPage() {
  const [selectedService, setSelectedService] = useState<string | null>(null);
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
              Folding Dress Shirt Services
            </h1>
            <p className="mt-6 text-xl text-white text-opacity-90 max-w-3xl mx-auto">
              Professional dress shirt care with meticulous attention to detail
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
                Expert Dress Shirt Care
              </h2>
              <p className="text-lg text-white/90 mb-6">
                Our professional dress shirt service ensures your shirts look crisp,
                clean, and professionally finished. Each shirt receives individual
                attention with our specialized process.
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
                    Professional pressing and starching
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
                    Hand-finished collars and cuffs
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
                    Premium hangers or boxed packaging
                  </span>
                </li>
              </ul>
              <div className="space-y-6 mt-8 mb-8">
                <div className="grid grid-cols-4 gap-6">
                  {[
                    {
                      name: 'Pressing',
                      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />,
                      details: "Each shirt is expertly pressed to eliminate wrinkles and restore a crisp, clean appearance."
                    },
                    {
                      name: 'Starching',
                      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />,
                      details: "We offer customizable starch levels to match your comfort and style preferences."
                    },
                    {
                      name: 'Packaging',
                      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />,
                      details: "Choose from premium hanger presentation or boxed packaging for travel or storage."
                    },
                    {
                      name: '24h Service',
                      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />,
                      details: "Need it fast? Our express 24-hour turnaround ensures your shirts are ready when you are."
                    }
                  ].map((service) => (
                    <button
                      key={service.name}
                      onClick={() => {
                        if (selectedService === service.name) {
                          setSelectedService(null);
                        } else {
                          setSelectedService(service.name);
                        }
                      }}
                      className="text-center focus:outline-none"
                    >
                      <div className={`w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto transition-all duration-300 ${
                        selectedService === service.name ? 'scale-110 ring-2 ring-[#F6AE2D]' : 'hover:scale-105'
                      }`}>
                        <svg className="w-12 h-12 text-[#790003]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          {service.icon}
                        </svg>
                      </div>
                      <span className={`block mt-2 text-sm text-white/90 transition-all duration-300 ${
                        selectedService === service.name ? 'font-bold' : ''
                      }`}>
                        {service.name}
                      </span>
                    </button>
                  ))}
                </div>
                
                <div className={`overflow-hidden transition-all duration-300 ${selectedService ? 'max-h-48' : 'max-h-0'}`}>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white/90">
                    {selectedService && [
                      {
                        name: 'Pressing',
                        details: "Each shirt is expertly pressed to eliminate wrinkles and restore a crisp, clean appearance."
                      },
                      {
                        name: 'Starching',
                        details: "We offer customizable starch levels to match your comfort and style preferences."
                      },
                      {
                        name: 'Packaging',
                        details: "Choose from premium hanger presentation or boxed packaging for travel or storage."
                      },
                      {
                        name: '24h Service',
                        details: "Need it fast? Our express 24-hour turnaround ensures your shirts are ready when you are."
                      }
                    ].find(s => s.name === selectedService)?.details}
                  </div>
                </div>
              </div>
              <Link href="/schedule">
                <Button className="bg-[#790003] hover:bg-[#F6AE2D] text-white px-8 py-6">
                  Schedule Service
                </Button>
              </Link>
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
                    placeholder="Tell us about your dress shirt service needs..."
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

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-neutral-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1">
              <AccordionTrigger>What is your turnaround time?</AccordionTrigger>
              <AccordionContent>
                Standard service is 24-48 hours. Same-day service is available
                for orders received before 9 AM.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>Do you offer starch options?</AccordionTrigger>
              <AccordionContent>
                Yes, we offer light, medium, and heavy starch options to meet
                your preferences.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>How are shirts packaged?</AccordionTrigger>
              <AccordionContent>
                Shirts can be returned on hangers or professionally folded and
                boxed according to your preference.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-[url('/src/images/Background.png')] bg-cover bg-center bg-no-repeat"></div>
        <div className="absolute inset-0 bg-[#790003]/80"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Ready for perfectly pressed shirts?
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
