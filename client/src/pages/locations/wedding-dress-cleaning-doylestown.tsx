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

export default function WeddingDressCleaningDoylestownPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <link
          rel="canonical"
          href="https://www.mysignaturecleaners.com/wedding-dress-cleaning-doylestown"
        />
        <title>Wedding Gown Cleaning & Preservation in Doylestown | Signature Cleaners</title>
        <meta
          name="description"
          content="Trust Doylestown's wedding gown cleaning & preservation experts. We restore and preserve your wedding dress with meticulous care using specialized techniques."
        />
        <meta
          name="keywords"
          content="wedding gown preservation Doylestown, wedding dress cleaning Doylestown PA, bridal gown care Doylestown, wedding dress preservation near me"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "DryCleaningOrLaundry",
            name: "Signature Cleaners - Doylestown Wedding Gown Preservation",
            url: "https://www.mysignaturecleaners.com/wedding-dress-cleaning-doylestown",
            logo: "https://www.mysignaturecleaners.com/images/logo.png",
            description:
              "Specialized wedding gown cleaning and preservation services in Doylestown, PA. We restore and protect your precious wedding dress for generations to come.",
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
        <div className="absolute inset-0 bg-[url('/images/wedding-dress.jpg')] bg-cover bg-center bg-no-repeat"></div>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mt-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Wedding Gown Cleaning & Preservation in Doylestown
            </h1>
            <p className="mt-6 text-xl text-white text-opacity-90 max-w-3xl mx-auto">
              Preserve your treasured wedding dress for generations with Doylestown's gown care experts
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/schedule">Schedule Consultation</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
                <Link href="/contact-us">Contact Our Doylestown Specialists</Link>
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
                Doylestown's Wedding Dress Preservation Experts
              </h2>
              <p className="text-lg text-white/90 mb-6">
                At Signature Cleaners of Doylestown, we understand that your wedding gown is more than just a dress—it's a treasured keepsake filled with precious memories of one of life's most important days. Our specialized wedding gown cleaning and preservation services ensure your dress remains as beautiful as the day you wore it.
              </p>
              <p className="text-lg text-white/90 mb-6">
                Our Doylestown specialists have years of experience handling delicate wedding dresses of all fabrics and designs. We use gentle cleaning processes and museum-quality preservation techniques to protect your gown from yellowing, oxidation, and fabric deterioration.
              </p>

              <h3 className="text-2xl font-bold text-white mb-4 mt-8">
                Our Doylestown Wedding Gown Preservation Process
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
                    <strong>Detailed Assessment:</strong> Our Doylestown specialists examine every inch of your gown, identifying stains, damage, and special treatment needs.
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
                    <strong>Targeted Stain Treatment:</strong> We identify and treat specific stains with specialized solutions safe for delicate fabrics and embellishments.
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
                    <strong>Gentle Cleaning:</strong> Using environmentally friendly solvents and cleaning methods appropriate for your gown's specific fabric and embellishments.
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
                    <strong>Meticulous Pressing:</strong> Careful steaming and pressing to restore your gown's original shape and beauty.
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
                    <strong>Museum-Quality Preservation:</strong> Wrapping in acid-free tissue and placing in a specialized preservation chest that protects against light, air, and moisture.
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
                    <strong>Secure Pickup & Delivery:</strong> Convenient service throughout Doylestown and surrounding areas for this precious garment.
                  </span>
                </li>
              </ul>
              <div className="mt-8">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/schedule">Schedule Gown Preservation in Doylestown</Link>
                </Button>
              </div>
            </div>
            <div className="bg-neutral-100 rounded-lg p-8">
              <div className="mb-6 text-center">
                <h3 className="text-2xl font-bold text-neutral-900">Wedding Gown Care in Doylestown</h3>
                <p className="text-neutral-600 mt-2">Trust Doylestown's preservation specialists with your precious wedding dress</p>
              </div>
              <div className="space-y-6">
                <div className="border-b border-neutral-200 pb-4">
                  <div className="flex justify-between mb-2">
                    <h4 className="text-lg font-semibold text-neutral-900">Standard Preservation Package</h4>
                    <span className="text-primary font-semibold">$299</span>
                  </div>
                  <p className="text-neutral-600">Complete care for your wedding gown</p>
                  <ul className="mt-2 space-y-1 text-neutral-600 text-sm">
                    <li>• Detailed inspection & documentation</li>
                    <li>• Specialized stain treatment</li>
                    <li>• Gentle cleaning process</li>
                    <li>• Professional pressing</li>
                    <li>• Acid-free tissue wrapping</li>
                    <li>• Museum-quality preservation chest</li>
                  </ul>
                </div>
                
                <div className="border-b border-neutral-200 pb-4">
                  <div className="flex justify-between mb-2">
                    <h4 className="text-lg font-semibold text-neutral-900">Premium Preservation Package</h4>
                    <span className="text-primary font-semibold">$449</span>
                  </div>
                  <p className="text-neutral-600">Enhanced protection for intricate gowns</p>
                  <ul className="mt-2 space-y-1 text-neutral-600 text-sm">
                    <li>• All Standard Package features</li>
                    <li>• Advanced treatment for difficult stains</li>
                    <li>• Special care for beading & embellishments</li>
                    <li>• Reinforcement of delicate areas</li>
                    <li>• UV-protective preservation chest</li>
                    <li>• Digital documentation with photos</li>
                  </ul>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <h4 className="text-lg font-semibold text-neutral-900">Additional Services</h4>
                  </div>
                  <ul className="mt-2 space-y-2 text-neutral-600">
                    <li className="flex justify-between">
                      <span>Veil Cleaning & Preservation</span>
                      <span className="font-semibold">$75</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Rush Service (2-3 weeks)</span>
                      <span className="font-semibold">+$100</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Pickup & Delivery in Doylestown</span>
                      <span className="font-semibold">Included</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-6 bg-primary/10 p-4 rounded-md">
                  <h4 className="font-semibold text-neutral-900 mb-2">Why Preserve Your Wedding Gown?</h4>
                  <p className="text-neutral-700">Proper preservation prevents yellowing, oxidation, permanent creasing, and mold growth. Our Doylestown process ensures your gown remains beautiful for future generations.</p>
                </div>
              </div>
              <div className="mt-6">
                <Button className="w-full bg-primary hover:bg-primary/90" size="lg" asChild>
                  <Link href="/schedule">Schedule Gown Consultation</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#F8F5F0]">
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(70%_50%_at_50%_50%,#fff_0%,transparent_100%)]"></div>
          <div className="absolute inset-0 opacity-25 bg-[repeating-linear-gradient(45deg,transparent,transparent_50px,rgba(0,0,0,0.05)_50px,rgba(0,0,0,0.05)_100px)]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(248,245,240,0.1)_0%,rgba(248,245,240,0.2)_100%)]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
              Doylestown Wedding Gown Transformation
            </h2>
            <p className="mt-4 text-xl text-neutral-600 max-w-3xl mx-auto">
              See the difference our Doylestown wedding gown specialists can make
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-neutral-900 mb-4">Common Wedding Gown Issues We Fix in Doylestown</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div className="ml-3">
                    <h4 className="font-medium text-neutral-900">Hemline Soil & Stains</h4>
                    <p className="text-neutral-600 text-sm">Our Doylestown experts remove dirt, grass, and mud stains from trailing hemlines using gentle yet effective techniques.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div className="ml-3">
                    <h4 className="font-medium text-neutral-900">Food & Beverage Spills</h4>
                    <p className="text-neutral-600 text-sm">Whether it's wine, champagne, or cake, our specialized stain removal process tackles tough reception stains while preserving delicate fabrics.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div className="ml-3">
                    <h4 className="font-medium text-neutral-900">Makeup & Body Oil</h4>
                    <p className="text-neutral-600 text-sm">Our Doylestown team safely removes foundation, lipstick, and natural body oil marks without damaging fabrics or embellishments.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div className="ml-3">
                    <h4 className="font-medium text-neutral-900">Yellowing & Oxidation</h4>
                    <p className="text-neutral-600 text-sm">We reverse existing yellowing and prevent future discoloration through our specialized cleaning and preservation process.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-neutral-900 mb-4">Why Choose Our Doylestown Specialists</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div className="ml-3">
                    <h4 className="font-medium text-neutral-900">Specialized Expertise</h4>
                    <p className="text-neutral-600 text-sm">Our Doylestown gown specialists have specific training in wedding dress fabrics, construction, and embellishments, with years of experience handling precious garments.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div className="ml-3">
                    <h4 className="font-medium text-neutral-900">Museum-Quality Preservation</h4>
                    <p className="text-neutral-600 text-sm">We use archival-quality materials and techniques developed for museum textile conservation to ensure decades of protection.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div className="ml-3">
                    <h4 className="font-medium text-neutral-900">100% Satisfaction Guarantee</h4>
                    <p className="text-neutral-600 text-sm">We stand behind our work with a lifetime guarantee on our preservation. If you notice any issues with our work, we'll make it right.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div className="ml-3">
                    <h4 className="font-medium text-neutral-900">Local Doylestown Service</h4>
                    <p className="text-neutral-600 text-sm">Your precious gown never leaves our Doylestown facility, ensuring secure handling and eliminating shipping risks that national services can't avoid.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              Doylestown Brides Trust Signature Cleaners
            </h2>
            <p className="mt-4 text-xl text-white/80 max-w-3xl mx-auto">
              Read what local Doylestown brides say about our wedding gown services
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <div className="h-12 w-12 rounded-full bg-neutral-200 flex items-center justify-center text-neutral-800 font-bold">
                    AM
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold">Amanda Morrison</h4>
                  <p className="text-sm text-white/70">Doylestown</p>
                </div>
              </div>
              <p className="text-white/80">
                "After my outdoor wedding at Fonthill Castle in Doylestown, my dress was a disaster with dirt all around the hem and a red wine stain on the train. Signature Cleaners worked magic and now my dress looks brand new in its preservation box. I'm so grateful to their Doylestown team!"
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
                    JP
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold">Jessica Patel</h4>
                  <p className="text-sm text-white/70">Doylestown Township</p>
                </div>
              </div>
              <p className="text-white/80">
                "I was nervous about preserving my heavily beaded and embellished gown, but the Doylestown preservation specialists at Signature Cleaners handled it with incredible care. They took time to point out delicate areas and explain their process. The preservation chest is beautiful and I love that I can peek at my dress without damaging it."
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
                    LT
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold">Lindsey Thompson</h4>
                  <p className="text-sm text-white/70">New Britain (near Doylestown)</p>
                </div>
              </div>
              <p className="text-white/80">
                "I waited two years after my wedding to preserve my dress (big mistake!) and it had already started yellowing. The Doylestown team at Signature Cleaners reversed the yellowing and preserved it beautifully. Their pickup service was so convenient since I live just outside Doylestown. Worth every penny for the peace of mind!"
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
              Wedding Gown Preservation FAQs
            </h2>
            <p className="mt-4 text-xl text-neutral-600 max-w-3xl mx-auto">
              Common questions from Doylestown brides about our gown preservation
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left">
                When should I bring my wedding dress to your Doylestown location?
              </AccordionTrigger>
              <AccordionContent>
                Ideally, bring your gown to our Doylestown location within 6 weeks of your wedding day. The sooner we can treat stains, the more successful the results will be. However, don't worry if it's been longer – we've successfully restored and preserved gowns that are months or even years old. Our Doylestown preservation specialists have experience with challenging restoration projects.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left">
                How long does wedding gown preservation take in Doylestown?
              </AccordionTrigger>
              <AccordionContent>
                Our standard wedding gown preservation process at our Doylestown location takes approximately 4-6 weeks. This includes inspection, stain treatment, cleaning, pressing, and preservation packaging. We offer rush services (2-3 weeks) for an additional fee. Our team will provide you with updates throughout the process, and you'll receive a notification when your preserved gown is ready for pickup or delivery in Doylestown.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left">
                Can your Doylestown team handle heavily beaded or embellished gowns?
              </AccordionTrigger>
              <AccordionContent>
                Absolutely! Our Doylestown specialists are extensively trained in handling delicate beadwork, sequins, crystals, pearls, lace, and other embellishments. We use specialized techniques to protect these details during cleaning. For heavily embellished gowns, we recommend our Premium Preservation Package, which includes additional hand cleaning and reinforcement of delicate areas to ensure every detail is perfectly preserved.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left">
                Can I see my dress after it's been preserved?
              </AccordionTrigger>
              <AccordionContent>
                Yes! Unlike some preservation methods that permanently seal the gown, our preservation chests used at our Doylestown location feature a viewing window that allows you to see your dress without opening the box. If you need to open the box, you can do so without voiding our guarantee – just be sure to handle your gown with clean white cotton gloves (included with preservation) and carefully refold along the original fold lines when returning it to the chest.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left">
                Does your Doylestown location offer pickup and delivery for wedding gowns?
              </AccordionTrigger>
              <AccordionContent>
                Yes, we offer complimentary pickup and delivery for wedding gowns throughout Doylestown and surrounding areas. Our team understands the precious nature of wedding gowns and takes extra care during transportation. We use special garment bags and handling procedures to protect your gown during transit. Simply schedule your pickup online or call our Doylestown location to arrange this service.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Call To Action */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Preserve Your Wedding Memories in Doylestown
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
            Trust Doylestown's wedding gown specialists to preserve your treasured dress for generations to come
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/schedule">Schedule Gown Preservation</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
              <Link href="/contact-us">Contact Our Doylestown Specialists</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}