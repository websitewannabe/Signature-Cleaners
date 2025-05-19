
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function BuckinghamPage() {
  return (
    <>
      <Helmet>
        <title>Professional Dry Cleaning in Buckingham Township | Signature Cleaners</title>
        <meta name="description" content="Trusted dry cleaning services in Buckingham Township. Free pickup & delivery, eco-friendly cleaning, and expert garment care. Schedule your pickup today!" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-[url('/images/Background.png')] bg-cover bg-center bg-no-repeat"></div>
        <div className="absolute inset-0 bg-[#790003]/80"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Professional Dry Cleaning in Buckingham Township
          </h1>
          <p className="text-xl text-white mb-8">
            Proudly serving Buckingham Township with trusted dry cleaning for decades.
          </p>
          <Link to="/schedule">
            <Button size="lg" className="bg-white hover:bg-[#F6AE2D] text-black px-12 py-6 text-lg">
              Schedule Pickup in Buckingham
            </Button>
          </Link>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="text-center">
              <p className="text-lg font-medium">Eco-friendly cleaning solutions</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-medium">Free pickup and delivery in Buckingham Township</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-medium">Family-owned and operated since 1985</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-medium">Expert garment care and attention to detail</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-medium">Proudly serving Bucks County</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-medium">Trusted by local residents for over 30 years</p>
            </div>
          </div>
        </div>
      </section>

      {/* First Three Services */}
      <section className="py-16 bg-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Expert Dry Cleaning Services</h3>
              <img src="/images/cleaners.gif" alt="Dry Cleaning" className="w-full h-48 object-cover mb-4 rounded" />
              <p className="mb-4">Professional care for your finest garments.</p>
              <Link to="/all-services/dry-cleaning">
                <Button variant="outline">Learn More</Button>
              </Link>
            </div>
            <div className="bg-white rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Wedding Gown Preservation</h3>
              <img src="/images/wedding-gown.gif" alt="Wedding Gown" className="w-full h-48 object-cover mb-4 rounded" />
              <p className="mb-4">Preserve your special day memories.</p>
              <Link to="/all-services/wedding-gown">
                <Button variant="outline">Learn More</Button>
              </Link>
            </div>
            <div className="bg-white rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Free Pickup & Delivery</h3>
              <img src="/images/delivery.gif" alt="Delivery" className="w-full h-48 object-cover mb-4 rounded" />
              <p className="mb-4">Convenient service at your doorstep.</p>
              <Link to="/all-services/delivery">
                <Button variant="outline">Learn More</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Map & Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-neutral-100 rounded-lg overflow-hidden h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48656.66193150027!2d-75.07559866953123!3d40.32633199999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6a89f944b9c91%3A0x8cfb89ae094fe457!2sBuckingham%2C%20PA%2018912!5e0!3m2!1sen!2sus!4v1707674821037!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="bg-neutral-100 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6">What Our Customers Say</h3>
              <div className="space-y-6">
                <div>
                  <p className="italic mb-2">"The convenience of their pickup service is amazing. Living in Buckingham, it's made my life so much easier!"</p>
                  <p className="font-medium">- Sarah M.</p>
                </div>
                <div>
                  <p className="italic mb-2">"Quality service every time. They take such great care with all my clothes."</p>
                  <p className="font-medium">- Michael R.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Four Services */}
      <section className="py-16 bg-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Professional Wash & Fold</h3>
              <img src="/images/wash-fold.gif" alt="Wash & Fold" className="w-full h-48 object-cover mb-4 rounded" />
              <Link to="/all-services/wash-fold">
                <Button variant="outline">Learn More</Button>
              </Link>
            </div>
            <div className="bg-white rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Expert Alterations & Tailoring</h3>
              <img src="/images/tailoring.gif" alt="Alterations" className="w-full h-48 object-cover mb-4 rounded" />
              <Link to="/all-services/alteration-tailoring">
                <Button variant="outline">Learn More</Button>
              </Link>
            </div>
            <div className="bg-white rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Professional Shoe Repair</h3>
              <img src="/images/shoe-repair.gif" alt="Shoe Repair" className="w-full h-48 object-cover mb-4 rounded" />
              <Link to="/all-services/shoe-repair">
                <Button variant="outline">Learn More</Button>
              </Link>
            </div>
            <div className="bg-white rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Household Items Cleaning</h3>
              <img src="/images/household-items.gif" alt="Household Items" className="w-full h-48 object-cover mb-4 rounded" />
              <Link to="/all-services/clean-household-items">
                <Button variant="outline">Learn More</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">About Buckingham Township, PA</h2>
          <div className="prose max-w-none">
            <p className="mb-4">
              Buckingham Township is one of the oldest and most picturesque areas in Bucks County, Pennsylvania. Known for its rolling farmlands, historic homes, and tight-knit community, Buckingham blends rural charm with elegant country living. Residents enjoy peaceful neighborhoods, great schools, and quick access to Doylestown and New Hope.
            </p>
            <p>
              At Signature Cleaners, we're proud to serve Buckingham Township with expert dry cleaning and laundry services. Whether you're commuting to Philadelphia or working from home, our free pickup and delivery ensure your wardrobe and household items are always in excellent condition.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Do you offer same-day service in Buckingham Township?
              </AccordionTrigger>
              <AccordionContent>
                Yes, we offer same-day service for items dropped off before 9 AM,
                Monday through Friday. Please note that some specialty items may
                require additional time.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                What areas of Buckingham do you service?
              </AccordionTrigger>
              <AccordionContent>
                We provide pickup and delivery services throughout all of Buckingham
                Township, including the surrounding communities and neighborhoods.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                How do I schedule a pickup in Buckingham?
              </AccordionTrigger>
              <AccordionContent>
                You can easily schedule a pickup through our website, mobile app, or
                by calling us directly. We'll come to your location at a time
                that's convenient for you.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
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
          <p className="text-xl text-white mb-8">
            Experience the Signature Cleaners difference.
          </p>
          <Link to="/schedule">
            <Button size="lg" className="bg-white hover:bg-[#F6AE2D] text-black px-12 py-6 text-lg">
              Schedule Pickup
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
