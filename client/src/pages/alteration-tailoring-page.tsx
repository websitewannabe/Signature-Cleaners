
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

export default function AlterationTailoringPage() {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  
  const services = [
    {
      name: 'Hemming',
      details: "We provide clean, precise hemming for pants, skirts, and dresses—tailored to your preferred length and finish."
    },
    {
      name: 'Resizing',
      details: "Whether you've sized up or down, we expertly resize garments to ensure a perfect, flattering fit."
    },
    {
      name: 'Fitting',
      details: "Our tailors specialize in accurate body measurements and advanced fitting techniques for custom results."
    },
    {
      name: 'Repairs',
      details: "From torn seams to broken zippers, we restore your clothing with high-quality, durable repairs."
    }
  ];
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative py-40">
        <div className="absolute inset-0 bg-[url('/src/images/tailoring.gif')] bg-cover bg-center bg-no-repeat"></div>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mt-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Alterations & Tailoring
            </h1>
            <p className="mt-6 text-xl text-white text-opacity-90 max-w-3xl mx-auto">
              Expert alterations and custom tailoring for the perfect fit
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
                Professional Tailoring Services
              </h2>
              <p className="text-lg text-white/90 mb-6">
                Trust our expert tailors for precise alterations and custom fitting services.
                We handle everything from simple hemming to complete garment reconstruction
                with meticulous attention to detail.
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
                    Expert measurements and fitting
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
                    Custom garment adjustments
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
                    Professional finishing
                  </span>
                </li>
              </ul>
              {/* Service Icons with Dynamic Dropdown */}
              <div className="space-y-6 mt-8 mb-8">
                <div className="grid grid-cols-4 gap-6">
                  {[
                    {
                      name: 'Hemming',
                      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M17.8 12a9 9 0 10-11.6 0" />,
                      details: "We provide clean, precise hemming for pants, skirts, and dresses—tailored to your preferred length and finish."
                    },
                    {
                      name: 'Resizing',
                      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />,
                      details: "Whether you've sized up or down, we expertly resize garments to ensure a perfect, flattering fit."
                    },
                    {
                      name: 'Fitting',
                      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />,
                      details: "Our tailors specialize in accurate body measurements and advanced fitting techniques for custom results."
                    },
                    {
                      name: 'Repairs',
                      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />,
                      details: "From torn seams to broken zippers, we restore your clothing with high-quality, durable repairs."
                    }
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
                      <div className={`w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto transition-all duration-300 ${selectedService === service.name ? 'scale-110 ring-2 ring-[#F6AE2D]' : 'hover:scale-105'}`}>
                        <svg className="w-12 h-12 text-[#790003]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          {service.icon}
                        </svg>
                      </div>
                      <span className="block mt-2 text-sm text-white/90">{service.name}</span>
                    </button>
                  ))}
                </div>
                
                {/* Dynamic Dropdown */}
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    selectedService ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-white/90">
                    {selectedService && services.find(s => s.name === selectedService)?.details}
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
                    placeholder="Tell us about your alteration needs..."
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
              <AccordionTrigger>How long do alterations take?</AccordionTrigger>
              <AccordionContent>
                Standard alterations typically take 3-5 business days. Rush service is
                available for an additional fee. Complex alterations may require more time.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>Do I need an appointment for fittings?</AccordionTrigger>
              <AccordionContent>
                While walk-ins are welcome, we recommend scheduling an appointment for
                fittings to ensure dedicated attention from our tailors.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>What types of garments do you alter?</AccordionTrigger>
              <AccordionContent>
                We work on all types of clothing including suits, dresses, formal wear,
                casual wear, and leather garments.
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
            Ready to perfect your fit?
          </h2>
          <Link href="/schedule">
            <Button
              size="lg"
              className="bg-white hover:bg-[#F6AE2D] text-black px-12 py-6 text-lg"
            >
              Schedule a Fitting
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
