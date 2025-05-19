import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Link as RouterLink } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function BuckinghamPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Dry Cleaning in Buckingham Township, PA | Signature Cleaners</title>
        <meta
          name="description"
          content="Signature Cleaners offers expert dry cleaning, free pickup & delivery, and laundry services in Buckingham Township, PA."
        />
        <link
          rel="canonical"
          href="https://www.mysignaturecleaners.com/buckingham"
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-[url('/images/hero.png')] bg-cover bg-center bg-no-repeat"></div>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight tracking-tight">
              Professional Dry Cleaning in Buckingham Township
            </h1>
            <p className="mt-6 text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
              Proudly serving Buckingham Township with trusted dry cleaning for decades.
            </p>
            <div className="mt-10">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <RouterLink to="/schedule">Schedule Pickup in Buckingham</RouterLink>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-3">Eco-friendly cleaning solutions</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-3">Free pickup and delivery in Buckingham Township</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-3">Family-owned and operated since 1985</span>
                </li>
              </ul>
            </div>
            <div>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-3">Expert garment care and attention to detail</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-3">Proudly serving Bucks County</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-3">Trusted by local residents for over 30 years</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Sections */}
      <section className="py-16 bg-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {/* Expert Dry Cleaning */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-[#1A1E23] mb-6">Expert Dry Cleaning Services</h2>
                <p className="text-lg text-neutral-600 mb-8">
                  Trust your garments to Buckingham Township's premier dry cleaning service. We use the latest cleaning
                  methods and eco-friendly solutions to ensure your clothes look their best.
                </p>
                <Button asChild size="lg" className="bg-[#790003] hover:bg-[#F6AE2D]">
                  <RouterLink to="/all-services/dry-cleaning">Learn More</RouterLink>
                </Button>
              </div>
              <div className="order-first md:order-last">
                <img
                  src="/images/interior-cleaning.gif"
                  alt="Dry Cleaning Service"
                  className="rounded-lg shadow-lg w-full h-[400px] object-cover"
                />
              </div>
            </div>

            {/* Wedding Gown Preservation */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-first">
                <img
                  src="/images/wedding-gown.gif"
                  alt="Wedding Gown Preservation"
                  className="rounded-lg shadow-lg w-full h-[400px] object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-[#1A1E23] mb-6">Wedding Gown Preservation</h2>
                <p className="text-lg text-neutral-600 mb-8">
                  Preserve your cherished wedding gown with our expert preservation service. We use museum-quality
                  techniques to ensure your dress remains beautiful for generations.
                </p>
                <Button asChild size="lg" className="bg-[#790003] hover:bg-[#F6AE2D]">
                  <RouterLink to="/all-services/wedding-gown">Learn More</RouterLink>
                </Button>
              </div>
            </div>

            {/* Free Pickup & Delivery */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-[#1A1E23] mb-6">Free Pickup & Delivery</h2>
                <p className="text-lg text-neutral-600 mb-8">
                  Enjoy the convenience of our free pickup and delivery service throughout Buckingham Township.
                  Schedule online and let us handle the rest.
                </p>
                <Button asChild size="lg" className="bg-[#790003] hover:bg-[#F6AE2D]">
                  <RouterLink to="/schedule">Schedule Pickup</RouterLink>
                </Button>
              </div>
              <div className="order-first md:order-last">
                <img
                  src="/images/delivery.gif"
                  alt="Pickup and Delivery Service"
                  className="rounded-lg shadow-lg w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map & Testimonials */}
      <section className="py-16 bg-[#181818]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="bg-neutral-200 rounded-lg overflow-hidden h-[400px] shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24334.07952178715!2d-75.0885647598699!3d40.31035335918647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3e28c5f1d17fd%3A0x210b0876bb3a4587!2sBuckingham%20Township%2C%20PA!5e0!3m2!1sen!2sus!4v0000000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
            <div className="bg-neutral-800 rounded-lg p-8">
              <div className="mb-6">
                <img
                  src="/images/signature-cleaners-logo-white.png"
                  alt="Signature Cleaners Logo"
                  className="h-12"
                />
              </div>
              <p className="italic mb-4 text-white">
                "Signature Cleaners always delivers quality and fast service. The pickup and delivery are a game changer!"
              </p>
              <p className="font-semibold text-white">– Emily R., Buckingham Township</p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {/* Professional Wash & Fold */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-[#1A1E23] mb-6">Professional Wash & Fold</h2>
                <p className="text-lg text-neutral-600 mb-8">
                  Let us handle your laundry with our expert wash and fold service. Perfect for busy Buckingham
                  Township residents who value their time.
                </p>
                <Button asChild size="lg" className="bg-[#790003] hover:bg-[#F6AE2D]">
                  <RouterLink to="/all-services/wash-fold">Learn More</RouterLink>
                </Button>
              </div>
              <div className="order-first md:order-last">
                <img
                  src="/images/wash-fold.gif"
                  alt="Wash and Fold Service"
                  className="rounded-lg shadow-lg w-full h-[400px] object-cover"
                />
              </div>
            </div>

            {/* Expert Alterations */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-first">
                <img
                  src="/images/tailoring.gif"
                  alt="Alterations and Tailoring"
                  className="rounded-lg shadow-lg w-full h-[400px] object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-[#1A1E23] mb-6">Expert Alterations & Tailoring</h2>
                <p className="text-lg text-neutral-600 mb-8">
                  Our skilled tailors ensure your garments fit perfectly. From simple hemming to complex alterations,
                  we've got you covered.
                </p>
                <Button asChild size="lg" className="bg-[#790003] hover:bg-[#F6AE2D]">
                  <RouterLink to="/all-services/alteration-tailoring">Learn More</RouterLink>
                </Button>
              </div>
            </div>

            {/* Shoe Repair */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-[#1A1E23] mb-6">Professional Shoe Repair</h2>
                <p className="text-lg text-neutral-600 mb-8">
                  Extend the life of your favorite footwear with our expert shoe repair services. Available for
                  Buckingham Township residents.
                </p>
                <Button asChild size="lg" className="bg-[#790003] hover:bg-[#F6AE2D]">
                  <RouterLink to="/all-services/shoe-repair">Learn More</RouterLink>
                </Button>
              </div>
              <div className="order-first md:order-last">
                <img
                  src="/images/shoe-repair.gif"
                  alt="Shoe Repair Service"
                  className="rounded-lg shadow-lg w-full h-[400px] object-cover"
                />
              </div>
            </div>

            {/* Household Items */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-first">
                <img
                  src="/images/household-items.gif"
                  alt="Household Items Cleaning"
                  className="rounded-lg shadow-lg w-full h-[400px] object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-[#1A1E23] mb-6">Household Items Cleaning</h2>
                <p className="text-lg text-neutral-600 mb-8">
                  From delicate curtains to bulky comforters, we clean all types of household items with
                  specialized care.
                </p>
                <Button asChild size="lg" className="bg-[#790003] hover:bg-[#F6AE2D]">
                  <RouterLink to="/all-services/clean-household-items">Learn More</RouterLink>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#1A1E23] mb-6">About Buckingham Township, PA</h2>
            <p className="text-lg text-neutral-600 leading-relaxed">
              Buckingham Township is one of the oldest and most picturesque areas in Bucks County, Pennsylvania.
              Known for its rolling farmlands, historic homes, and tight-knit community, Buckingham blends rural
              charm with elegant country living. Residents enjoy peaceful neighborhoods, great schools, and quick
              access to Doylestown and New Hope.
            </p>
            <p className="text-lg text-neutral-600 leading-relaxed mt-4">
              At Signature Cleaners, we're proud to serve Buckingham Township with expert dry cleaning and laundry
              services. Whether you're commuting to Philadelphia or working from home, our free pickup and delivery
              ensure your wardrobe and household items are always in excellent condition.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-[#181818]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Frequently Asked Questions – Buckingham Township, PA
          </h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-white/20">
                <AccordionTrigger className="text-left text-white">
                  Do you offer same-day dry cleaning in Buckingham Township?
                </AccordionTrigger>
                <AccordionContent className="text-white/80">
                  Not at this time, but we offer next-day service with early drop-off or pickup.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-white/20">
                <AccordionTrigger className="text-left text-white">
                  Is pickup and delivery available for homes in Buckingham?
                </AccordionTrigger>
                <AccordionContent className="text-white/80">
                  Yes! Free pickup and delivery is available throughout Buckingham Township—just schedule online or
                  by phone.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-white/20">
                <AccordionTrigger className="text-left text-white">
                  Where are the Buckingham service areas?
                </AccordionTrigger>
                <AccordionContent className="text-white/80">
                  We serve the entire township, including Forest Grove, Holicong, and Pineville.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border-white/20">
                <AccordionTrigger className="text-left text-white">
                  Do you clean wedding gowns in Buckingham?
                </AccordionTrigger>
                <AccordionContent className="text-white/80">
                  Yes. We provide pickup, preservation, and delivery for wedding gowns throughout Buckingham
                  Township.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border-white/20">
                <AccordionTrigger className="text-left text-white">
                  Can I schedule wash & fold in Buckingham?
                </AccordionTrigger>
                <AccordionContent className="text-white/80">
                  Absolutely. Our professional wash & fold laundry service is fully available to Buckingham
                  residents.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-[url('/images/Background.png')] bg-cover bg-center bg-no-repeat"></div>
        <div className="absolute inset-0 bg-[#790003]/80"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Visit Us or Schedule a Pickup in Buckingham Township Today
          </h2>
          <p className="text-xl text-white/90 mb-8">Experience the Signature Cleaners difference.</p>
          <Button asChild size="lg" className="bg-white hover:bg-[#F6AE2D] text-black px-12 py-6 text-lg">
            <RouterLink to="/schedule">Schedule Pickup</RouterLink>
          </Button>
        </div>
      </section>
    </div>
  );
}