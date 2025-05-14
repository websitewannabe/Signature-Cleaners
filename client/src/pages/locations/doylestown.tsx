import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export default function DoylestownPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Dry Cleaning in Doylestown, PA | Signature Cleaners</title>
        <meta name="description" content="Looking for expert dry cleaning in Doylestown? Signature Cleaners offers eco-friendly, same-day service with exceptional quality and care." />
        <link rel="canonical" href="https://signaturecleaners.com/doylestown/" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Signature Cleaners Doylestown",
              "image": "/images/storeFront.jpg",
              "description": "Professional dry cleaning services in Doylestown, PA",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "80 N Main St",
                "addressLocality": "Doylestown",
                "addressRegion": "PA",
                "postalCode": "18901",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 40.3137,
                "longitude": -75.1296
              },
              "url": "https://signaturecleaners.com/doylestown/",
              "telephone": "+12153400638",
              "areaServed": "Doylestown, PA"
            }
          `}
        </script>
      </Helmet>

      <Header />

      <main>
        {/* Hero Section */}
      <section className="relative py-52">
        <div className="absolute inset-0 bg-[url('/images/exterior.jpg')] bg-cover bg-center bg-no-repeat"></div>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mt-24">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Professional Dry Cleaning in Doylestown
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl">
              Your trusted local dry cleaner providing premium garment care services to the Doylestown community with exceptional attention to detail.
            </p>
            <Button asChild size="lg" className="bg-[#790003] hover:bg-[#F6AE2D]">
              <Link href="/schedule">Schedule Pickup in Doylestown</Link>
            </Button>
          </div>
        </div>
      </section>

        {/* About Services */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#1A1E23] mb-6">
              Premium Dry Cleaning Services in Doylestown
            </h2>
            <p className="text-lg text-[#424B4D] mb-6">
              At Signature Cleaners, we've been serving the Doylestown community with exceptional dry cleaning, wash-and-fold, and alteration services. Our state-of-the-art facility uses eco-friendly solvents and advanced cleaning techniques to ensure your garments receive the highest quality care.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="bg-neutral-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Dry Cleaning</h3>
                <p className="mb-4">Expert care for your finest garments using eco-friendly methods.</p>
                <Link href="/all-services/dry-cleaning">Learn More →</Link>
              </div>
              <div className="bg-neutral-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Wash & Fold</h3>
                <p className="mb-4">Professional laundry service with attention to detail.</p>
                <Link href="/all-services/wash-fold">Learn More →</Link>
              </div>
              <div className="bg-neutral-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Alterations</h3>
                <p className="mb-4">Expert tailoring and alterations for the perfect fit.</p>
                <Link href="/all-services/alteration-tailoring">Learn More →</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-neutral-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#1A1E23] mb-8">
              Why Doylestown Chooses Signature Cleaners
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-[#790003] mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-3">Same-day service available for Doylestown residents</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-[#790003] mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-3">Eco-friendly cleaning solutions</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-[#790003] mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-3">Family-owned and operated since 1985</span>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-[#790003] mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-3">Free pickup and delivery in Doylestown</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-[#790003] mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-3">Expert garment care and attention to detail</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-[#790003] mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-3">Convenient location in downtown Doylestown</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Map & Reviews */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold mb-6">Find Us in Doylestown</h2>
                <div className="aspect-video rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24349.78887179821!2d-75.13656334999999!3d40.313698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6a86748738aa9%3A0x7b5631e86d4756b7!2sDoylestown%2C%20PA!5e0!3m2!1sen!2sus!4v1647955416242!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-6">What Our Customers Say</h2>
                <div className="space-y-6">
                  <div className="bg-neutral-50 p-6 rounded-lg">
                    <p className="italic mb-4">"I am very pleased with my experience with Signer Cleaners-of Doylestown. The woman was very pleasant at the counter, I had a pair of slacks shortened and who ever did them did a very good job. (Thank you)."</p>
                    <p className="font-semibold">- Angela T., Doylestown</p>
                  </div>
                  <div className="bg-neutral-50 p-6 rounded-lg">
                    <div>
                  <h4 className="font-semibold">Scott N.</h4>
                  <p className="italic mb-4">"Very friendly staff and always quick service. Highly recommend Signature Cleaners of Doylestown"</p>
                  <p className="font-semibold">- Scott N., Doylestown</p>
                </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Areas We Serve */}
        <section className="py-16 bg-neutral-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-6">Areas We Serve Near Doylestown</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4 bg-white rounded-lg text-center">New Hope</div>
              <div className="p-4 bg-white rounded-lg text-center">Warrington</div>
              <div className="p-4 bg-white rounded-lg text-center">Chalfont</div>
              <div className="p-4 bg-white rounded-lg text-center">Buckingham</div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-[#790003] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Visit Us or Schedule a Pickup in Doylestown Today
            </h2>
            <p className="text-xl mb-8">Experience the Signature Cleaners difference</p>
            <Button asChild size="lg" className="bg-[#F6AE2D] hover:bg-white hover:text-[#790003]">
              <Link href="/schedule">Schedule Now</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}