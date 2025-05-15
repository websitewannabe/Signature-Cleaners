import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export default function DoylestownPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Dry Cleaning in Doylestown, PA | Signature Cleaners</title>
        <meta
          name="description"
          content="Looking for expert dry cleaning in Doylestown? Signature Cleaners offers eco-friendly, same-day service with exceptional quality and care."
        />
        <link
          rel="canonical"
          href="https://www.mysignaturecleaners.com/doylestown"
        />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Signature Cleaners Doylestown",
              "image": "/images/exterior.jpg",
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
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Proudly serving the Doylestown community with trusted dry
                cleaning for decades.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-[#790003] hover:bg-[#F6AE2D]"
              >
                <Link href="/schedule">Schedule Pickup in Doylestown</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* About Services */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#1A1E23] mb-6">
              Premium Dry Cleaning in Doylestown
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg
                      className="h-6 w-6 text-[#790003] mt-1"
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
                    <span className="ml-3">
                      Same-day service available for Doylestown residents
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-6 w-6 text-[#790003] mt-1"
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
                    <span className="ml-3">
                      Eco-friendly cleaning solutions
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-6 w-6 text-[#790003] mt-1"
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
                    <span className="ml-3">
                      Family-owned and operated since 1985
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg
                      className="h-6 w-6 text-[#790003] mt-1"
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
                    <span className="ml-3">
                      Free pickup and delivery in Doylestown
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-6 w-6 text-[#790003] mt-1"
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
                    <span className="ml-3">
                      Expert garment care and attention to detail
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-6 w-6 text-[#790003] mt-1"
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
                    <span className="ml-3">
                      Convenient location in downtown Doylestown
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Dry Cleaning Service */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-[#1A1E23] mb-6">
                  Expert Dry Cleaning Services
                </h2>
                <p className="text-lg text-neutral-600 mb-8">
                  Experience premium garment care with our state-of-the-art dry
                  cleaning services. We treat each item with precision and care,
                  ensuring your clothes look and feel their best.
                </p>
                <Button
                  asChild
                  size="lg"
                  className="bg-[#790003] hover:bg-[#F6AE2D]"
                >
                  <Link href="/all-services/dry-cleaning">Learn More</Link>
                </Button>
              </div>
              <div className="order-first md:order-last">
                <img
                  src="/images/interior.jpg"
                  alt="Dry Cleaning Service"
                  className="rounded-lg shadow-lg w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Wedding Gown Service */}
        <section className="py-16 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-first">
                <img
                  src="/images/weddingGown.jpg"
                  alt="Wedding Gown Service"
                  className="rounded-lg shadow-lg w-full h-[400px] object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-[#1A1E23] mb-6">
                  Wedding Gown Preservation
                </h2>
                <p className="text-lg text-neutral-600 mb-8">
                  Trust us with your precious wedding gown. Our specialized
                  preservation process ensures your dress remains as beautiful
                  as the day you wore it.
                </p>
                <Button
                  asChild
                  size="lg"
                  className="bg-[#790003] hover:bg-[#F6AE2D]"
                >
                  <Link href="/all-services/wedding-gown">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Delivery Service */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-[#1A1E23] mb-6">
                  Free Pickup & Delivery
                </h2>
                <p className="text-lg text-neutral-600 mb-8">
                  Enjoy the convenience of our complimentary pickup and delivery
                  service throughout Doylestown. Schedule your service with just
                  a few clicks.
                </p>
                <Button
                  asChild
                  size="lg"
                  className="bg-[#790003] hover:bg-[#F6AE2D]"
                >
                  <Link href="/all-services/delivery">Schedule Pickup</Link>
                </Button>
              </div>
              <div className="order-first md:order-last">
                <img
                  src="/images/delivery.jpg"
                  alt="Delivery Service"
                  className="rounded-lg shadow-lg w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Map & Reviews */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold mb-6">
                  Find Us in Doylestown
                </h2>
                <div className="aspect-video rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d194626.6239363241!2d-75.43258756718754!3d40.3414365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c402caed310f67%3A0x4739bde141ae22d1!2sSignature%20Cleaners%20at%20Doylestown!5e0!3m2!1sen!2sus!4v1747319798707!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-6">
                  What Our Customers Say
                </h2>
                <div className="space-y-6">
                  <div className="bg-neutral-50 p-6 rounded-lg">
                    <p className="italic mb-4">
                      "I am very pleased with my experience with Signature
                      Cleaners-of Doylestown. The woman was very pleasant at the
                      counter, I had a pair of slacks shortened and who ever did
                      them did a very good job. (Thank you)."
                    </p>
                    <p className="font-semibold">- Angela T., Doylestown</p>
                  </div>
                  <div className="bg-neutral-50 p-6 rounded-lg">
                    <div>
                      <h4 className="font-semibold">Scott N.</h4>
                      <p className="italic mb-4">
                        "Very friendly staff and always quick service. Highly
                        recommend Signature Cleaners of Doylestown"
                      </p>
                      <p className="font-semibold">- Scott N., Doylestown</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Wash & Fold Service */}
        <section className="py-16 bg-neutral-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-[#1A1E23] mb-6">
                  Professional Wash & Fold
                </h2>
                <p className="text-lg text-neutral-600 mb-8">
                  Experience hassle-free laundry service with our professional
                  wash and fold. We handle everything from everyday wear to
                  delicate fabrics with expert care.
                </p>
                <Button
                  asChild
                  size="lg"
                  className="bg-[#790003] hover:bg-[#F6AE2D]"
                >
                  <Link href="/all-services/wash-fold">Learn More</Link>
                </Button>
              </div>
              <div className="order-first md:order-last">
                <img
                  src="/images/washFold.jpg"
                  alt="Wash & Fold Service"
                  className="rounded-lg shadow-lg w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Alterations & Tailoring */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-first">
                <img
                  src="/images/tailor.jpg"
                  alt="Alterations & Tailoring"
                  className="rounded-lg shadow-lg w-full h-[400px] object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-[#1A1E23] mb-6">
                  Expert Alterations & Tailoring
                </h2>
                <p className="text-lg text-neutral-600 mb-8">
                  Our skilled tailors ensure your garments fit perfectly. From
                  simple hemming to complex alterations, we provide precise
                  craftsmanship for all your tailoring needs.
                </p>
                <Button
                  asChild
                  size="lg"
                  className="bg-[#790003] hover:bg-[#F6AE2D]"
                >
                  <Link href="/all-services/alteration-tailoring">
                    Learn More
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Shoe Repair */}
        <section className="py-16 bg-neutral-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-[#1A1E23] mb-6">
                  Professional Shoe Repair
                </h2>
                <p className="text-lg text-neutral-600 mb-8">
                  Extend the life of your favorite footwear with our expert shoe
                  repair services. From heel replacement to sole repair, we
                  restore your shoes to like-new condition.
                </p>
                <Button
                  asChild
                  size="lg"
                  className="bg-[#790003] hover:bg-[#F6AE2D]"
                >
                  <Link href="/all-services/shoe-repair">Learn More</Link>
                </Button>
              </div>
              <div className="order-first md:order-last">
                <img
                  src="/images/shoeRepair.jpg"
                  alt="Shoe Repair Service"
                  className="rounded-lg shadow-lg w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Household Items Cleaning */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-first">
                <img
                  src="/images/householdItems.jpg"
                  alt="Household Items Cleaning"
                  className="rounded-lg shadow-lg w-full h-[400px] object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-[#1A1E23] mb-6">
                  Household Items Cleaning
                </h2>
                <p className="text-lg text-neutral-600 mb-8">
                  From delicate curtains to bulky comforters, we clean all types
                  of household items with specialized care to maintain their
                  quality and extend their life.
                </p>
                <Button
                  asChild
                  size="lg"
                  className="bg-[#790003] hover:bg-[#F6AE2D]"
                >
                  <Link href="/all-services/clean-household-items">
                    Learn More
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* About Doylestown */}
        <section className="py-16 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-[#1A1E23]">
              About Doylestown, PA
            </h2>
            <p className="text-lg text-[#424B4D] mt-4">
              Doylestown, the charming county seat of Bucks County, stands as a
              testament to the perfect blend of historic preservation and modern
              vitality. This walkable downtown hub captivates visitors and
              residents alike with its beautifully preserved architecture,
              thriving small businesses, and renowned cultural institutions
              including the Mercer Museum, Fonthill Castle, and the James A.
              Michener Art Museum. The strong sense of community and small-town
              atmosphere make it one of Pennsylvania's most desirable places to
              live. For over three decades, Signature Cleaners has been proud to
              serve the residents of this vibrant town, contributing to its
              legacy of quality local services and helping to keep Doylestown
              looking its best, one garment at a time.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-neutral-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-[#1A1E23] mb-6">
              Frequently Asked Questions – Doylestown, PA
            </h2>
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  Do you offer same-day dry cleaning in Doylestown?
                </AccordionTrigger>
                <AccordionContent>
                  Yes! We offer same-day dry cleaning for orders dropped off
                  before 10 AM at our Doylestown location.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>
                  Is pickup and delivery available for homes in Doylestown?
                </AccordionTrigger>
                <AccordionContent>
                  Absolutely. We provide free pickup and delivery to residents
                  throughout the Doylestown borough and surrounding
                  neighborhoods.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>
                  Where is your Doylestown location?
                </AccordionTrigger>
                <AccordionContent>
                  We're conveniently located at 1456 Ferry Road #10, Doylestown,
                  PA 18901.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>
                  Do you clean wedding gowns in Doylestown?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, our Doylestown facility specializes in wedding gown
                  preservation and restoration. We treat each gown with the
                  utmost care.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger>
                  Can I schedule services online if I live in Doylestown?
                </AccordionTrigger>
                <AccordionContent>
                  Definitely. Use our online scheduling tool to book any of our
                  services, including pickup, for Doylestown residents.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-[#790003] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Visit Us or Schedule a Pickup in Doylestown Today
            </h2>
            <p className="text-xl mb-8">
              Experience the Signature Cleaners difference
            </p>
            <Button
              asChild
              size="lg"
              className="bg-[#F6AE2D] hover:bg-white hover:text-[#790003]"
            >
              <Link href="/contact-us">Contact Us</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
