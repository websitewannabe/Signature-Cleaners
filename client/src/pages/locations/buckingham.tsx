
import { Link } from "wouter";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Helmet } from "react-helmet-async";
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
        <title>Professional Dry Cleaning in Buckingham Township, PA | Signature Cleaners</title>
        <meta
          name="description"
          content="Expert dry cleaning, laundry, and pickup/delivery services in Buckingham Township, PA. Schedule now with Signature Cleaners."
        />
      </Helmet>

      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-[#790003]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Premium Dry Cleaning Services in Buckingham Township
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Expert garment care with free pickup and delivery throughout Buckingham Township
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/schedule">
                <Button className="bg-white text-[#790003] hover:bg-[#F6AE2D] hover:text-white w-full sm:w-auto">
                  Schedule Pickup
                </Button>
              </Link>
              <Link href="/all-services/all-services">
                <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#790003] w-full sm:w-auto">
                  View Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-[#790003] mb-4">
              About Buckingham Township, PA
            </h2>
            <p className="text-lg text-neutral-600 mb-6">
              Buckingham Township is one of the oldest and most picturesque areas in Bucks County, Pennsylvania. Known for its rolling farmlands, historic homes, and tight-knit community, Buckingham blends rural charm with elegant country living. Residents enjoy peaceful neighborhoods, great schools, and quick access to Doylestown and New Hope.
            </p>
            <p className="text-lg text-neutral-600">
              At Signature Cleaners, we're proud to serve Buckingham Township with expert dry cleaning and laundry services. Whether you're commuting to Philadelphia or working from home, our free pickup and delivery ensure your wardrobe and household items are always in excellent condition.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-neutral-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-neutral-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Do you offer same-day dry cleaning in Buckingham Township?
              </AccordionTrigger>
              <AccordionContent>
                Not at this time, but we offer next-day service with early drop-off or pickup.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>
                Is pickup and delivery available for homes in Buckingham?
              </AccordionTrigger>
              <AccordionContent>
                Yes! Free pickup and delivery is available throughout Buckingham Township—just schedule online or by phone.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>
                Where are the Buckingham service areas?
              </AccordionTrigger>
              <AccordionContent>
                We serve the entire township, including Forest Grove, Holicong, and Pineville.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>
                Do you clean wedding gowns in Buckingham?
              </AccordionTrigger>
              <AccordionContent>
                Yes. We provide pickup, preservation, and delivery for wedding gowns throughout Buckingham Township.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>
                Can I schedule wash & fold in Buckingham?
              </AccordionTrigger>
              <AccordionContent>
                Absolutely. Our professional wash & fold laundry service is fully available to Buckingham residents.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-neutral-100 rounded-lg overflow-hidden h-[400px] shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48656.66057447547!2d-75.13290561064453!3d40.325851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6a8e751ac7717%3A0x6c9a2a13cb9ee8eb!2sBuckingham%20Township%2C%20PA!5e0!3m2!1sen!2sus!4v1747672095359!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#790003]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Visit Us or Schedule a Pickup in Buckingham Township Today
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Experience the Signature Cleaners difference.
          </p>
          <Link href="/schedule">
            <Button className="bg-white text-[#790003] hover:bg-[#F6AE2D] hover:text-white">
              Schedule Pickup
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
