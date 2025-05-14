import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";

export default function DryCleaningDoylestownPage() {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const services = [
    {
      name: "Suits & Jackets",
      icon: "/icons/suit.svg",
      details:
        "Our Doylestown dry cleaning specialists treat your finest suits and jackets with exceptional care, preserving structure and finish while removing even the toughest stains.",
    },
    {
      name: "Dresses & Formal Wear",
      icon: "/icons/dress.svg",
      details:
        "From everyday dresses to elaborate formal wear, our Doylestown team provides gentle cleaning that maintains fabric integrity and preserves delicate embellishments.",
    },
    {
      name: "Shirts & Blouses",
      icon: "/icons/shirt.svg",
      details:
        "Experience perfectly pressed shirts and blouses with our Doylestown shirt service, featuring optional starch levels and meticulous attention to collars and cuffs.",
    },
    {
      name: "Outerwear & Coats",
      icon: "/icons/coat.svg",
      details:
        "Trust Doylestown's premium dry cleaners with your seasonal coats and outerwear, ensuring they remain clean, fresh, and properly maintained between seasons.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <link
          rel="canonical"
          href="https://www.mysignaturecleaners.com/dry-cleaning-doylestown"
        />
        <title>Expert Dry Cleaning Services in Doylestown, PA | Signature Cleaners</title>
        <meta
          name="description"
          content="Professional dry cleaning services in Doylestown, PA. We specialize in stain removal, garment care, and fabric preservation with convenient pickup and delivery options."
        />
        <meta
          name="keywords"
          content="dry cleaner near me, dry cleaning Doylestown PA, Doylestown garment care, stain removal Doylestown, suit cleaning Doylestown"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "DryCleaningOrLaundry",
            name: "Signature Cleaners - Doylestown Dry Cleaning",
            url: "https://www.mysignaturecleaners.com/dry-cleaning-doylestown",
            logo: "https://www.mysignaturecleaners.com/images/logo.png",
            description:
              "Expert dry cleaning services in Doylestown, PA, offering stain removal, garment care, and fabric preservation with convenient pickup and delivery.",
            address: {
              "@type": "PostalAddress",
              streetAddress: "123 Main Street",
              addressLocality: "Doylestown",
              addressRegion: "PA",
              postalCode: "18901",
              addressCountry: "US",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 40.3101,
              longitude: -75.1298
            },
            telephone: "+1-215-345-1470",
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "07:00",
                closes: "19:00"
              },
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: "Saturday",
                opens: "08:00",
                closes: "17:00"
              }
            ],
            priceRange: "$$",
            areaServed: {
              "@type": "City",
              name: "Doylestown",
            },
            sameAs: [
              "https://www.facebook.com/signaturecleaners",
              "https://www.instagram.com/signaturecleaners"
            ]
          })}
        </script>
      </Helmet>

      <Header />

      {/* Hero Section */}
      <section className="relative py-40">
        <div className="absolute inset-0 bg-[url('/images/dry-cleaning-service.jpg')] bg-cover bg-center bg-no-repeat"></div>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mt-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Expert Dry Cleaning Services in Doylestown, PA
            </h1>
            <p className="mt-6 text-xl text-white text-opacity-90 max-w-3xl mx-auto">
              Professional garment care with attention to detail and fabric-specific treatments
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/schedule">Schedule Pickup in Doylestown</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
                <Link href="/contact-us">Contact Our Doylestown Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Doylestown's Premier Dry Cleaning Service
              </h2>
              <p className="text-lg text-white/90 mb-6">
                At Signature Cleaners, we provide Doylestown residents with exceptional dry cleaning services that preserve the quality and appearance of your favorite garments. Our experienced team combines modern cleaning techniques with traditional craftsmanship to deliver superior results.
              </p>
              <p className="text-lg text-white/90 mb-6">
                Located conveniently in downtown Doylestown, our facility is equipped with state-of-the-art equipment and environmentally friendly cleaning solutions that effectively remove stains while being gentle on fabrics and the planet.
              </p>

              <h3 className="text-2xl font-bold text-white mb-4 mt-8">
                Our Doylestown Dry Cleaning Process
              </h3>
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
                    <strong>Inspection & Pre-Treatment:</strong> Each garment undergoes thorough inspection for stains and damage before specialized pre-treatments are applied.
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
                    <strong>Cleaning Process:</strong> We select appropriate solvents and methods based on fabric type, ensuring optimal cleaning without damage.
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
                    <strong>Finishing:</strong> Professional pressing and steaming restore the garment's proper shape and appearance.
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
                    <strong>Final Inspection:</strong> Each item receives a final quality check before packaging to ensure perfect results every time.
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
                    <strong>Free Doylestown Delivery:</strong> We offer convenient pickup and delivery throughout Doylestown and surrounding areas.
                  </span>
                </li>
              </ul>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Garments We Clean in Doylestown
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                  {services.map((service, index) => (
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
                        <img
                          src={service.icon}
                          alt={service.name}
                          className="w-8 h-8"
                        />
                      </div>
                      <span className="block mt-2 text-sm text-white/90">
                        {service.name}
                      </span>
                    </button>
                  ))}
                </div>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    selectedService ? "max-h-48" : "max-h-0"
                  }`}
                >
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white/90 mt-4">
                    {selectedService &&
                      services.find((s) => s.name === selectedService)?.details}
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-neutral-100 rounded-lg p-8">
              <div className="mb-6 text-center">
                <h3 className="text-2xl font-bold text-neutral-900">Schedule Doylestown Dry Cleaning</h3>
                <p className="text-neutral-600 mt-2">Fast, convenient service with free pickup and delivery in Doylestown</p>
              </div>
              <div className="w-full h-[560px]">
                <iframe
                  src="https://bv6w3pwoi5y.typeform.com/to/q9sU2p56"
                  style={{ width: "100%", height: "100%", border: "0" }}
                  allow="camera; microphone; autoplay; encrypted-media;"
                  data-qa="iframe-container"
                  data-remove-element-on-mobile="true"
                  data-disable-scroll="true"
                  loading="lazy"
                />
              </div>
              <div className="mt-6 border-t border-neutral-200 pt-6">
                <h4 className="font-semibold text-neutral-900 mb-2">Why Doylestown Customers Choose Us:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-2 text-neutral-600">15+ years of dry cleaning experience in Doylestown</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-2 text-neutral-600">Eco-friendly cleaning processes</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-2 text-neutral-600">Convenient free pickup/delivery in Doylestown</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-2 text-neutral-600">100% satisfaction guarantee on all services</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#F8F5F0]">
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(70%_50%_at_50%_50%,#fff_0%,transparent_100%)]"></div>
          <div className="absolute inset-0 opacity-25 bg-[repeating-linear-gradient(45deg,transparent,transparent_50px,rgba(0,0,0,0.05)_50px,rgba(0,0,0,0.05)_100px)]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(248,245,240,0.1)_0%,rgba(248,245,240,0.2)_100%)]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
              Benefits of Professional Dry Cleaning in Doylestown
            </h2>
            <p className="mt-4 text-xl text-neutral-600 max-w-3xl mx-auto">
              Why Doylestown residents trust Signature Cleaners with their garments
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">Extended Garment Life</h3>
              <p className="text-neutral-600">
                Our professional Doylestown dry cleaning methods extend the life of your garments by removing soil and stains that can damage fibers over time, preserving both appearance and structural integrity.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">Superior Stain Removal</h3>
              <p className="text-neutral-600">
                Our Doylestown specialists use advanced techniques and solvents that target and remove stubborn stains that home washing can't handle, from oil and grease to wine and ink.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">Perfect Finishing</h3>
              <p className="text-neutral-600">
                Our Doylestown professionals use specialized equipment to press and finish garments with precision that can't be achieved at home, restoring the original appearance and crispness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              What Doylestown Customers Say About Our Dry Cleaning
            </h2>
            <p className="mt-4 text-xl text-white/80 max-w-3xl mx-auto">
              Real reviews from local Doylestown residents
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <div className="h-12 w-12 rounded-full bg-neutral-200 flex items-center justify-center text-neutral-800 font-bold">
                    LM
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold">Laura Miller</h4>
                  <p className="text-sm text-white/70">Doylestown Township</p>
                </div>
              </div>
              <p className="text-white/80">
                "I've been using Signature Cleaners in Doylestown for my business suits for over 5 years. They consistently deliver exceptional quality and have saved several of my favorite pieces from what I thought were permanent stains. Their attention to detail sets them apart from other dry cleaners in the area."
              </p>
              <div className="mt-4 flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <div className="h-12 w-12 rounded-full bg-neutral-200 flex items-center justify-center text-neutral-800 font-bold">
                    RB
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold">Robert Brown</h4>
                  <p className="text-sm text-white/70">Doylestown Borough</p>
                </div>
              </div>
              <p className="text-white/80">
                "The pickup and delivery service that Signature Cleaners offers in Doylestown is a game-changer for my busy schedule. Their app makes it easy to schedule, and their dry cleaning quality is top-notch. My shirts have never looked better, and I appreciate their eco-friendly approach."
              </p>
              <div className="mt-4 flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <div className="h-12 w-12 rounded-full bg-neutral-200 flex items-center justify-center text-neutral-800 font-bold">
                    JD
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold">Jennifer Davis</h4>
                  <p className="text-sm text-white/70">Doylestown</p>
                </div>
              </div>
              <p className="text-white/80">
                "After a red wine disaster on my favorite white dress, I thought it was ruined forever. The team at Signature Cleaners in Doylestown worked magic and removed the stain completely! Their expertise with delicate fabrics is remarkable, and I won't trust my wardrobe to anyone else in Doylestown."
              </p>
              <div className="mt-4 flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#F8F5F0]">
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(70%_50%_at_50%_50%,#fff_0%,transparent_100%)]"></div>
          <div className="absolute inset-0 opacity-25 bg-[repeating-linear-gradient(45deg,transparent,transparent_50px,rgba(0,0,0,0.05)_50px,rgba(0,0,0,0.05)_100px)]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(248,245,240,0.1)_0%,rgba(248,245,240,0.2)_100%)]"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
              Frequently Asked Questions About Dry Cleaning in Doylestown
            </h2>
            <p className="mt-4 text-xl text-neutral-600 max-w-3xl mx-auto">
              Common questions from our Doylestown customers
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left">
                How long does dry cleaning take in Doylestown?
              </AccordionTrigger>
              <AccordionContent>
                Our standard turnaround time for dry cleaning in Doylestown is 2-3 business days. We also offer same-day and next-day service for urgent needs when you drop off early in the morning (additional fee may apply). With our convenient pickup and delivery service, we'll work with your schedule to ensure your garments are ready when you need them.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left">
                What makes your Doylestown dry cleaning different from others?
              </AccordionTrigger>
              <AccordionContent>
                Unlike other Doylestown cleaners, we use environmentally friendly solvents and processes that are gentler on fabrics while still removing tough stains. Our attention to detail includes hand-spotting, careful inspection, and professional finishing. We also offer free pickup and delivery throughout Doylestown, and our garment tracking system ensures nothing gets lost.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left">
                How do you handle stained garments in your Doylestown location?
              </AccordionTrigger>
              <AccordionContent>
                Our Doylestown stain removal specialists evaluate each stain individually, identifying its composition to determine the most effective treatment. We use specialized spotting agents and techniques based on both the stain type and fabric. For particularly challenging stains, we may apply multiple treatments. We always test treatments in inconspicuous areas first to ensure fabric safety.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left">
                Do you offer pickup and delivery in all of Doylestown?
              </AccordionTrigger>
              <AccordionContent>
                Yes, we offer free pickup and delivery service throughout Doylestown Borough, Doylestown Township, and surrounding areas including Chalfont, New Britain, Buckingham, and Plumsteadville. Our convenient scheduling system allows you to select your preferred pickup and delivery times, and we'll send you notifications when your order is on its way.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left">
                Are your dry cleaning methods safe for designer clothing?
              </AccordionTrigger>
              <AccordionContent>
                Absolutely. Our Doylestown location specializes in handling high-end and designer garments. We follow all care label instructions and use gentle cleaning processes appropriate for delicate and luxury fabrics. Our technicians are trained to recognize different fabric types and construction methods used in designer clothing, ensuring proper treatment throughout the cleaning process.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Call To Action */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Experience Doylestown's Best Dry Cleaning Services
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
            Join the hundreds of satisfied Doylestown customers who trust Signature Cleaners with their garments
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/schedule">Schedule Pickup in Doylestown</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
              <Link href="/contact-us">Contact Our Doylestown Team</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}