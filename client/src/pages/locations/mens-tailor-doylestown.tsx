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

export default function MensTailorDoylestownPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <link
          rel="canonical"
          href="https://www.mysignaturecleaners.com/mens-tailor-doylestown"
        />
        <title>Custom Men's Tailoring in Doylestown | Signature Cleaners</title>
        <meta
          name="description"
          content="Expert men's tailoring services in Doylestown, PA. From custom suits to alterations, our skilled tailors deliver perfect fit and style for every occasion."
        />
        <meta
          name="keywords"
          content="men's tailor near me, custom suits Doylestown, men's alterations Doylestown PA, suit tailoring, Doylestown men's tailoring, best tailor in Doylestown"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ClothingStore",
            "additionalType": "TailorShop",
            name: "Signature Cleaners - Doylestown Men's Tailoring",
            url: "https://www.mysignaturecleaners.com/mens-tailor-doylestown",
            logo: "https://www.mysignaturecleaners.com/images/logo.png",
            description:
              "Expert men's tailoring services in Doylestown, PA, offering custom suits, professional alterations, and style consultations.",
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
            priceRange: "$$$",
            makesOffer: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Custom Suit Tailoring",
                  description: "Bespoke and made-to-measure suits crafted for Doylestown gentlemen"
                }
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Suit Alterations",
                  description: "Professional alterations for optimal fit on existing suits"
                }
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Shirt Tailoring",
                  description: "Custom and altered dress shirts for perfect fit"
                }
              }
            ]
          })}
        </script>
      </Helmet>

      <Header />

      {/* Hero Section */}
      <section className="relative py-40">
        <div className="absolute inset-0 bg-[url('/images/mens-tailoring.jpg')] bg-cover bg-center bg-no-repeat"></div>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mt-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Custom Men's Tailoring in Doylestown
            </h1>
            <p className="mt-6 text-xl text-white text-opacity-90 max-w-3xl mx-auto">
              Exceptional craftsmanship and personalized service for the modern gentleman
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/schedule">Schedule Consultation</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
                <Link href="/contact-us">Contact Our Doylestown Tailors</Link>
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
                Doylestown's Premier Men's Tailoring Service
              </h2>
              <p className="text-lg text-white/90 mb-6">
                At Signature Cleaners, we bring over three decades of tailoring excellence to Doylestown gentlemen who appreciate impeccable craftsmanship and personalized service. Our master tailors combine time-honored techniques with modern styling to create garments that reflect your unique personality and lifestyle.
              </p>
              <p className="text-lg text-white/90 mb-6">
                Whether you require a custom-made suit for a special occasion, alterations to your existing wardrobe, or style advice for professional attire, our Doylestown tailoring team delivers precision and attention to detail with every stitch.
              </p>

              <h3 className="text-2xl font-bold text-white mb-4 mt-8">
                Our Doylestown Men's Tailoring Services
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
                    <strong>Custom Suit Creation:</strong> Made-to-measure and bespoke suits crafted from premium fabrics with multiple fittings to ensure perfect proportions.
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
                    <strong>Suit Alterations:</strong> Expert adjustments to jacket sleeves, trouser length, waist suppression, and other modifications for optimal fit.
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
                    <strong>Shirt Tailoring:</strong> Custom dress shirts and alterations that account for shoulder width, sleeve length, and torso fit for comfort and style.
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
                    <strong>Tuxedo and Formal Wear:</strong> Specialized formalwear tailoring for weddings, galas, and special events in the Doylestown area.
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
                    <strong>Style Consultation:</strong> Professional guidance on fabric selection, style options, and wardrobe building for Doylestown professionals.
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
                    <strong>Repairs & Restoration:</strong> Expert repairs for damaged garments and restoration of vintage or heritage pieces.
                  </span>
                </li>
              </ul>
              <div className="mt-8">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/schedule">Schedule Tailoring Consultation in Doylestown</Link>
                </Button>
              </div>
            </div>
            <div className="bg-neutral-100 rounded-lg p-8">
              <div className="mb-6 text-center">
                <h3 className="text-2xl font-bold text-neutral-900">Doylestown Tailoring Services</h3>
                <p className="text-neutral-600 mt-2">Quality craftsmanship for the discerning gentleman</p>
              </div>
              <div className="space-y-6">
                <div className="border-b border-neutral-200 pb-4">
                  <div className="flex justify-between mb-2">
                    <h4 className="text-lg font-semibold text-neutral-900">Suit Alterations</h4>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span className="text-neutral-600">Jacket Sleeve Adjustment</span>
                      <span className="font-semibold text-neutral-900">$35 - $45</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-neutral-600">Trouser Hemming</span>
                      <span className="font-semibold text-neutral-900">$25 - $30</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-neutral-600">Waist Adjustment</span>
                      <span className="font-semibold text-neutral-900">$35 - $45</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-neutral-600">Jacket Suppression</span>
                      <span className="font-semibold text-neutral-900">$50 - $75</span>
                    </li>
                  </ul>
                </div>
                
                <div className="border-b border-neutral-200 pb-4">
                  <div className="flex justify-between mb-2">
                    <h4 className="text-lg font-semibold text-neutral-900">Shirt Services</h4>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span className="text-neutral-600">Sleeve Shortening</span>
                      <span className="font-semibold text-neutral-900">$25 - $30</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-neutral-600">Collar Adjustment</span>
                      <span className="font-semibold text-neutral-900">$25 - $35</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-neutral-600">Custom Shirt (Starting)</span>
                      <span className="font-semibold text-neutral-900">$125+</span>
                    </li>
                  </ul>
                </div>
                
                <div className="border-b border-neutral-200 pb-4">
                  <div className="flex justify-between mb-2">
                    <h4 className="text-lg font-semibold text-neutral-900">Custom Garments</h4>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span className="text-neutral-600">Made-to-Measure Suit</span>
                      <span className="font-semibold text-neutral-900">From $895</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-neutral-600">Bespoke Suit</span>
                      <span className="font-semibold text-neutral-900">From $1,495</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-neutral-600">Custom Tuxedo</span>
                      <span className="font-semibold text-neutral-900">From $1,295</span>
                    </li>
                  </ul>
                </div>
                
                <div className="mt-6 bg-primary/10 p-4 rounded-md">
                  <h4 className="font-semibold text-neutral-900 mb-2">The Doylestown Gentleman's Experience</h4>
                  <p className="text-neutral-700">Our Doylestown tailoring consultations include personalized measurements, style assessment, and fabric selection guidance. We offer private appointments to ensure undivided attention to your specific needs.</p>
                </div>
              </div>
              <div className="mt-6">
                <Button className="w-full bg-primary hover:bg-primary/90" size="lg" asChild>
                  <Link href="/contact-us">Schedule Tailoring Consultation</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tailoring Process Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#F8F5F0]">
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(70%_50%_at_50%_50%,#fff_0%,transparent_100%)]"></div>
          <div className="absolute inset-0 opacity-25 bg-[repeating-linear-gradient(45deg,transparent,transparent_50px,rgba(0,0,0,0.05)_50px,rgba(0,0,0,0.05)_100px)]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(248,245,240,0.1)_0%,rgba(248,245,240,0.2)_100%)]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
              The Doylestown Tailoring Process
            </h2>
            <p className="mt-4 text-xl text-neutral-600 max-w-3xl mx-auto">
              Crafting the perfect garment through meticulous attention to detail
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mt-12">
            <div className="relative">
              <div className="absolute -top-4 -left-4 bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg">1</div>
              <div className="bg-white p-6 rounded-lg shadow-sm h-full">
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">Initial Consultation</h3>
                <p className="text-neutral-600">
                  Meet with our Doylestown master tailor to discuss your style preferences, intended use, and specific requirements. We'll guide you through fabric options, design elements, and customization possibilities.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -top-4 -left-4 bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg">2</div>
              <div className="bg-white p-6 rounded-lg shadow-sm h-full">
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">Precise Measurements</h3>
                <p className="text-neutral-600">
                  Our Doylestown tailors take over 30 detailed measurements to create your unique fitting profile, considering your posture, shoulder slope, and other physical characteristics that affect garment fit.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -top-4 -left-4 bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg">3</div>
              <div className="bg-white p-6 rounded-lg shadow-sm h-full">
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">Fittings</h3>
                <p className="text-neutral-600">
                  For custom garments, you'll return to our Doylestown location for 1-3 fittings where we adjust and refine the garment to ensure perfect fit and comfort before final completion.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -top-4 -left-4 bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg">4</div>
              <div className="bg-white p-6 rounded-lg shadow-sm h-full">
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">Final Delivery</h3>
                <p className="text-neutral-600">
                  Receive your completed garment with a final fitting assessment. We'll provide care instructions and offer complimentary minor adjustments within 30 days for Doylestown customers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              Master Tailoring Expertise in Doylestown
            </h2>
            <p className="mt-4 text-xl text-white/80 max-w-3xl mx-auto">
              Why discerning Doylestown gentlemen choose our tailoring services
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg">
              <div className="h-12 w-12 rounded-full bg-primary/20 text-primary flex items-center justify-center mb-4">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Master Craftsmen</h3>
              <p className="text-white/80">
                Our Doylestown tailoring team brings over 30 years of combined experience and traditional European training. Each garment receives meticulous attention from tailors who have dedicated their careers to perfecting their craft.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg">
              <div className="h-12 w-12 rounded-full bg-primary/20 text-primary flex items-center justify-center mb-4">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Premium Materials</h3>
              <p className="text-white/80">
                We source exceptional fabrics from renowned mills in Italy, England, and Scotland, offering Doylestown clients access to the same premium materials used by luxury menswear brands worldwide.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg">
              <div className="h-12 w-12 rounded-full bg-primary/20 text-primary flex items-center justify-center mb-4">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Personalized Service</h3>
              <p className="text-white/80">
                Unlike chain retailers, our Doylestown tailors take time to understand your lifestyle, preferences, and specific needs. We maintain detailed client records for consistent service and build lasting relationships with Doylestown professionals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#F8F5F0]">
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(70%_50%_at_50%_50%,#fff_0%,transparent_100%)]"></div>
          <div className="absolute inset-0 opacity-25 bg-[repeating-linear-gradient(45deg,transparent,transparent_50px,rgba(0,0,0,0.05)_50px,rgba(0,0,0,0.05)_100px)]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(248,245,240,0.1)_0%,rgba(248,245,240,0.2)_100%)]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
              What Doylestown Clients Say
            </h2>
            <p className="mt-4 text-xl text-neutral-600 max-w-3xl mx-auto">
              Testimonials from satisfied Doylestown gentlemen
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <div className="h-12 w-12 rounded-full bg-neutral-200 flex items-center justify-center text-neutral-800 font-bold">
                    JC
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold">James Cooper</h4>
                  <p className="text-sm text-neutral-500">Attorney, Doylestown</p>
                </div>
              </div>
              <p className="text-neutral-600">
                "As an attorney in Doylestown, my appearance matters. The team at Signature Cleaners transformed my off-the-rack suits into garments that look completely custom. Their attention to subtle details like adjusting the jacket shoulder and properly tapering the trousers has completely changed how my suits fit and feel. Worth every penny."
              </p>
              <div className="mt-4 flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-5 w-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <div className="h-12 w-12 rounded-full bg-neutral-200 flex items-center justify-center text-neutral-800 font-bold">
                    DT
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold">David Thompson</h4>
                  <p className="text-sm text-neutral-500">Business Owner, Doylestown</p>
                </div>
              </div>
              <p className="text-neutral-600">
                "I commissioned a custom suit for my wedding in Doylestown, and the experience was exceptional from start to finish. The fabric selection process was educational, the fittings were thorough, and the final product exceeded my expectations. My groomsmen were so impressed they all had alterations done to their rental tuxedos. True professionals who understand the art of tailoring."
              </p>
              <div className="mt-4 flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-5 w-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <div className="h-12 w-12 rounded-full bg-neutral-200 flex items-center justify-center text-neutral-800 font-bold">
                    RM
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold">Robert Mitchell</h4>
                  <p className="text-sm text-neutral-500">Physician, Doylestown</p>
                </div>
              </div>
              <p className="text-neutral-600">
                "After losing weight, I needed my entire wardrobe altered. The tailors at Signature Cleaners' Doylestown location walked me through which garments were worth altering and which should be replaced. Their honest approach saved me money, and the alterations they did perform were perfect. They've earned a customer for life."
              </p>
              <div className="mt-4 flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-5 w-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-xl text-white/80 max-w-3xl mx-auto">
              Common questions about our Doylestown men's tailoring services
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-white/20">
              <AccordionTrigger className="text-left text-white">
                What is the difference between made-to-measure and bespoke tailoring?
              </AccordionTrigger>
              <AccordionContent className="text-white/80">
                At our Doylestown tailoring studio, made-to-measure suits begin with existing patterns that are adjusted to your measurements, offering customization in fabric, certain style details, and fit. Bespoke tailoring, however, creates a unique pattern exclusively for you from scratch, allowing complete customization of every aspect of the garment with multiple fittings. Bespoke involves more handwork and offers the highest level of personalization for Doylestown gentlemen.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2" className="border-white/20">
              <AccordionTrigger className="text-left text-white">
                How long does the custom tailoring process take in Doylestown?
              </AccordionTrigger>
              <AccordionContent className="text-white/80">
                For Doylestown clients, our standard timeframe for made-to-measure suits is 4-6 weeks from initial consultation to final delivery. Bespoke suits typically require 8-10 weeks due to the additional handwork and multiple fittings involved. For alterations to existing garments, most can be completed within 7-10 days, with rush services available. During wedding season (May-September), we recommend planning further ahead as our Doylestown tailors' schedules fill up quickly.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3" className="border-white/20">
              <AccordionTrigger className="text-left text-white">
                What should I bring to my first tailoring consultation?
              </AccordionTrigger>
              <AccordionContent className="text-white/80">
                For your initial visit to our Doylestown tailoring studio, we recommend bringing examples of garments you currently like the fit of, even if they're from different brands. For alterations, bring the exact shoes you'll wear with the garment, as heel height affects trouser length. If you're commissioning a suit for a specific occasion, bring any relevant details about the event. Pictures of styles you admire are also helpful for communicating your preferences to our Doylestown tailors.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4" className="border-white/20">
              <AccordionTrigger className="text-left text-white">
                Do you offer fabric samples to take home?
              </AccordionTrigger>
              <AccordionContent className="text-white/80">
                Yes, our Doylestown tailoring studio allows clients to borrow fabric swatches to view in different lighting conditions and compare with other items in your wardrobe. We have hundreds of premium fabric options from renowned mills, and our tailors can advise on which fabrics are best suited to your needs based on season, wear occasion, and personal preferences. We recommend viewing samples in natural daylight for the most accurate color assessment.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5" className="border-white/20">
              <AccordionTrigger className="text-left text-white">
                Do you provide alterations for garments purchased elsewhere?
              </AccordionTrigger>
              <AccordionContent className="text-white/80">
                Absolutely! Our Doylestown tailors regularly alter garments purchased from department stores, online retailers, and other clothiers. In fact, many Doylestown gentlemen find that combining moderately-priced off-the-rack purchases with our expert alterations creates an excellent value. We can work with most garments, though some limitations exist for items with insufficient seam allowance or certain construction methods. We'll always provide an honest assessment of what's possible.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Call To Action */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Experience Exceptional Tailoring in Doylestown
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Elevate your wardrobe with custom tailoring that reflects your unique style and personality
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
              <Link href="/schedule">Schedule Tailoring Consultation</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
              <Link href="/contact-us">Contact Our Master Tailors</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}