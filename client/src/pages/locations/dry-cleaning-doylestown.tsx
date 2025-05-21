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

export default function DryCleaningDoylestownPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <link
          rel="canonical"
          href="https://www.mysignaturecleaners.com/dry-cleaning-doylestown"
        />
        <title>Professional Dry Cleaning in Doylestown, PA | Signature Cleaners</title>
        <meta
          name="description"
          content="Premium dry cleaning services in Doylestown, PA. Expert care for suits, dresses, business attire, and delicate garments with eco-friendly cleaning methods."
        />
        <meta
          name="keywords"
          content="dry cleaning Doylestown, professional dry cleaner, eco-friendly dry cleaning, Doylestown garment care, premium dry cleaning services"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "DryCleaningOrLaundry",
            name: "Signature Cleaners - Doylestown Dry Cleaning",
            url: "https://www.mysignaturecleaners.com/dry-cleaning-doylestown",
            logo: "https://www.mysignaturecleaners.com/images/logo.png",
            description:
              "Premium dry cleaning services in Doylestown, PA with expert care for all garment types, including suits, dresses, business attire, and delicate fabrics.",
            address: {
              "@type": "PostalAddress",
              streetAddress: "1456 Ferry Rd UNIT 100",
              addressLocality: "Doylestown",
              addressRegion: "PA",
              postalCode: "18901",
              addressCountry: "US",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 40.1893,
              longitude: -75.1509
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
        <div className="absolute inset-0 bg-[url('/images/dry-cleaning-hero.jpg')] bg-cover bg-center bg-no-repeat"></div>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mt-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Premium Dry Cleaning in Doylestown, PA
            </h1>
            <p className="mt-6 text-xl text-white text-opacity-90 max-w-3xl mx-auto">
              Expert care for your finest garments with eco-friendly cleaning methods
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
                At Signature Cleaners, we've been Doylestown's trusted dry cleaning experts for over 20 years. Our state-of-the-art facility and experienced professionals ensure your garments receive the highest quality care available in Bucks County.
              </p>
              <p className="text-lg text-white/90 mb-6">
                We understand that your clothing is an investment, which is why we utilize advanced, environmentally-friendly cleaning processes that are gentle on fabrics yet tough on stains and odors. From everyday business attire to special occasion wear, our Doylestown dry cleaning specialists treat each item with precision and attention to detail.
              </p>

              <h3 className="text-2xl font-bold text-white mb-4 mt-8">
                Our Doylestown Dry Cleaning Services
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
                    <strong>Executive Wear:</strong> Suits, dress shirts, blouses, dress pants, and business attire
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
                    <strong>Formal & Evening Wear:</strong> Gowns, tuxedos, cocktail dresses, and special occasion garments
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
                    <strong>Specialty Fabrics:</strong> Silk, cashmere, wool, linen, and other delicate materials
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
                    <strong>Seasonal Garments:</strong> Winter coats, sweaters, summer linens, and seasonal wardrobes
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
                    <strong>Stain Removal:</strong> Expert treatment for tough stains, spills, and spots on all fabric types
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
                    <strong>Wedding Gown Preservation:</strong> Specialized cleaning and preservation for bridal gowns
                  </span>
                </li>
              </ul>
              <div className="mt-8">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/schedule">Schedule Dry Cleaning Pickup in Doylestown</Link>
                </Button>
              </div>
            </div>
            <div className="bg-neutral-100 rounded-lg p-8">
              <div className="mb-6 text-center">
                <h3 className="text-2xl font-bold text-neutral-900">The Signature Cleaning Difference</h3>
                <p className="text-neutral-600 mt-2">Why Doylestown residents choose our dry cleaning services</p>
              </div>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary/10 rounded-lg p-3 mr-4">
                    <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900">Eco-Friendly Processes</h4>
                    <p className="text-neutral-600 mt-1">We use environmentally safe, non-toxic solvents and cleaning methods that are better for your garments and for our Doylestown community.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 rounded-lg p-3 mr-4">
                    <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900">Hand-Finished Quality</h4>
                    <p className="text-neutral-600 mt-1">Every garment receives a thorough inspection and meticulous hand-finishing for impeccable results that machine processing simply cannot achieve.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 rounded-lg p-3 mr-4">
                    <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900">Convenient Service</h4>
                    <p className="text-neutral-600 mt-1">Our complimentary pickup and delivery throughout Doylestown saves you time, with flexible scheduling options that fit your busy lifestyle.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 rounded-lg p-3 mr-4">
                    <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900">Expert Stain Removal</h4>
                    <p className="text-neutral-600 mt-1">Our specialists are trained in advanced stain removal techniques to handle even the most stubborn spots without damaging delicate fabrics.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 border-t border-neutral-200 pt-6">
                <h4 className="font-semibold text-neutral-900 mb-2">Our Doylestown Guarantee</h4>
                <p className="text-neutral-600">If you're not completely satisfied with our dry cleaning service, we will reclean the item at no additional charge. Your complete satisfaction is our priority.</p>
              </div>
              
              <div className="mt-6">
                <Button className="w-full bg-primary hover:bg-primary/90" size="lg" asChild>
                  <Link href="/schedule">Try Our Premium Dry Cleaning</Link>
                </Button>
                <p className="text-center text-neutral-600 text-sm mt-2">New customers receive 20% off their first order!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#F8F5F0]">
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(70%_50%_at_50%_50%,#fff_0%,transparent_100%)]"></div>
          <div className="absolute inset-0 opacity-25 bg-[repeating-linear-gradient(45deg,transparent,transparent_50px,rgba(0,0,0,0.05)_50px,rgba(0,0,0,0.05)_100px)]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(248,245,240,0.1)_0%,rgba(248,245,240,0.2)_100%)]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
              Our Doylestown Dry Cleaning Process
            </h2>
            <p className="mt-4 text-xl text-neutral-600 max-w-3xl mx-auto">
              Meticulous care for your garments from drop-off to delivery
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8 mt-12">
            <div className="relative">
              <div className="absolute -top-4 -left-4 bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg">1</div>
              <div className="bg-white p-6 rounded-lg shadow-sm h-full">
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">Inspection</h3>
                <p className="text-neutral-600">
                  Each garment undergoes a thorough examination for stains, damage, and specific cleaning requirements. Special instructions are noted for personalized care.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -top-4 -left-4 bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg">2</div>
              <div className="bg-white p-6 rounded-lg shadow-sm h-full">
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">Pre-Treatment</h3>
                <p className="text-neutral-600">
                  Spots and stains receive specialized pre-treatment with fabric-appropriate solutions, ensuring effective removal without damaging the material.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -top-4 -left-4 bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg">3</div>
              <div className="bg-white p-6 rounded-lg shadow-sm h-full">
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">Cleaning</h3>
                <p className="text-neutral-600">
                  We use eco-friendly cleaning agents in our state-of-the-art machines, providing superior cleaning while being gentle on fabrics and the environment.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -top-4 -left-4 bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg">4</div>
              <div className="bg-white p-6 rounded-lg shadow-sm h-full">
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">Finishing</h3>
                <p className="text-neutral-600">
                  Expert pressing and hand-finishing restore your garments to their best appearance, with attention to details like collars, cuffs, and pleats.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -top-4 -left-4 bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg">5</div>
              <div className="bg-white p-6 rounded-lg shadow-sm h-full">
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">Quality Check</h3>
                <p className="text-neutral-600">
                  A final inspection ensures every item meets our rigorous standards before being packaged for pickup or delivery to your Doylestown location.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map & Location Section */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              Visit Our Doylestown Location
            </h2>
            <p className="mt-4 text-xl text-white/80 max-w-3xl mx-auto">
              Conveniently located on Ferry Road for all your dry cleaning needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-white rounded-lg overflow-hidden">
              <div className="aspect-video w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.482010904663!2d-75.15086792397547!3d40.189290671502185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6a858a3fdc5bb%3A0xf09ea81c7bc38535!2sSignature%20Cleaners!5e0!3m2!1sen!2sus!4v1714582748851!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4">Signature Cleaners Doylestown</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg className="h-6 w-6 text-primary mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <h4 className="font-semibold">Address</h4>
                    <p className="text-white/80">1456 Ferry Rd UNIT 100<br />Doylestown, PA 18901</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <svg className="h-6 w-6 text-primary mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h4 className="font-semibold">Hours</h4>
                    <p className="text-white/80">Monday - Friday: 7:00 AM - 7:00 PM<br />Saturday: 8:00 AM - 5:00 PM<br />Sunday: Closed</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <svg className="h-6 w-6 text-primary mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <h4 className="font-semibold">Contact</h4>
                    <p className="text-white/80">Phone: (215) 345-1470<br />Email: info@mysignaturecleaners.com</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 flex flex-wrap gap-4">
                <Button asChild className="bg-primary hover:bg-primary/90">
                  <Link href="/schedule">Schedule Pickup</Link>
                </Button>
                <Button asChild variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                  <a href="https://maps.google.com/?q=1456+Ferry+Rd+UNIT+100,+Doylestown,+PA+18901" target="_blank" rel="noopener noreferrer">Get Directions</a>
                </Button>
              </div>
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
              What Doylestown Customers Say
            </h2>
            <p className="mt-4 text-xl text-neutral-600 max-w-3xl mx-auto">
              Testimonials from our satisfied dry cleaning clients
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <div className="h-12 w-12 rounded-full bg-neutral-200 flex items-center justify-center text-neutral-800 font-bold">
                    MB
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold">Michael B.</h4>
                  <p className="text-sm text-neutral-500">Doylestown Professional</p>
                </div>
              </div>
              <p className="text-neutral-600">
                "As an attorney, my appearance matters. Signature Cleaners keeps my suits and dress shirts impeccable. They've saved several garments from what I thought were permanent stains, and their pickup service at my Doylestown office is incredibly convenient. Highly recommended for professionals!"
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
                    JT
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold">Jennifer T.</h4>
                  <p className="text-sm text-neutral-500">Doylestown Resident</p>
                </div>
              </div>
              <p className="text-neutral-600">
                "I brought in my mother's vintage silk dress that had yellowed with age, thinking it was beyond repair. The team at Signature Cleaners restored it beautifully! Their attention to detail and care with delicate fabrics is exceptional. They've earned a customer for life at their Doylestown location."
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
                    KR
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold">Kevin R.</h4>
                  <p className="text-sm text-neutral-500">Doylestown Business Owner</p>
                </div>
              </div>
              <p className="text-neutral-600">
                "What sets Signature Cleaners apart is consistency. I've been using them for five years at their Doylestown location, and they deliver perfect results every time. My cashmere sweaters and wool suits always come back looking and feeling better than new. Their eco-friendly approach is important to me too."
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
              Common questions about our Doylestown dry cleaning services
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-white/20">
              <AccordionTrigger className="text-left text-white">
                How long does dry cleaning take at your Doylestown location?
              </AccordionTrigger>
              <AccordionContent className="text-white/80">
                Our standard turnaround time is 2-3 business days. We also offer same-day service for items dropped off before 9:00 AM, and next-day service for items received by 4:00 PM. For specialty items or extensive stain removal, additional time may be needed. Our Doylestown location can provide a specific timeframe when you drop off your items.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2" className="border-white/20">
              <AccordionTrigger className="text-left text-white">
                What makes your dry cleaning process eco-friendly?
              </AccordionTrigger>
              <AccordionContent className="text-white/80">
                Our Doylestown facility uses environmentally safe, biodegradable solvents that are free from harsh chemicals found in traditional dry cleaning. We've invested in energy-efficient equipment that reduces water and electricity usage. Additionally, we use recyclable garment bags and hangers, and our stain removal products are biodegradable and phosphate-free to minimize environmental impact.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3" className="border-white/20">
              <AccordionTrigger className="text-left text-white">
                Do you offer pickup and delivery in Doylestown?
              </AccordionTrigger>
              <AccordionContent className="text-white/80">
                Yes! We offer complimentary pickup and delivery throughout Doylestown and surrounding areas. You can schedule service through our website or by calling our Doylestown location. We have flexible time windows available, and you can establish regular pickup schedules for your convenience. Our service extends to homes, offices, and businesses throughout Bucks County.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4" className="border-white/20">
              <AccordionTrigger className="text-left text-white">
                How do you handle delicate or specialty fabrics?
              </AccordionTrigger>
              <AccordionContent className="text-white/80">
                Our Doylestown specialists are trained in proper techniques for cleaning delicate fabrics like silk, cashmere, linen, and wool. We adjust our cleaning methods, solvents, and finishing techniques based on the specific requirements of each fabric type. For particularly delicate items, we offer hand-cleaning options that provide extra gentle care while still achieving excellent results.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5" className="border-white/20">
              <AccordionTrigger className="text-left text-white">
                What if I'm not satisfied with the cleaning results?
              </AccordionTrigger>
              <AccordionContent className="text-white/80">
                Customer satisfaction is our top priority at our Doylestown location. If you're not completely satisfied with our dry cleaning results, please return the item within 7 days of pickup, and we'll reclean it at no additional charge. For issues beyond recleaning, our manager will work with you to find an appropriate resolution. We stand behind the quality of our work and value your continued business.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Call To Action */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Experience Premium Dry Cleaning in Doylestown
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Join our many satisfied Doylestown customers who trust us with their finest garments
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
              <Link href="/schedule">Schedule Pickup in Doylestown</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
              <Link href="/contact-us">Contact Our Team</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}