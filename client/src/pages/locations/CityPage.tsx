import { useParams } from "wouter";
import { Helmet } from "react-helmet-async";
import { cityData } from "@/data/cityData";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function CityPage() {
  const params = useParams();
  const citySlug = params.city;
  const city = cityData[citySlug];

  if (!city) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl">City not found</h1>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{city.seo.title}</title>
        <meta name="description" content={city.seo.description} />
        <meta name="keywords" content={city.seo.keywords} />
        <link rel="canonical" href={city.seo.canonical} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-[url('/images/Background.png')] bg-cover bg-center bg-no-repeat"></div>
        <div className="absolute inset-0 bg-[#790003]/80"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {city.title}
          </h1>
          <p className="text-xl text-white mb-8">
            {city.subtitle}
          </p>
          <Link href="/schedule">
            <Button size="lg" className="bg-white hover:bg-[#F6AE2D] text-black px-12 py-6 text-lg">
              Schedule Pickup in {city.name}
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
              <p className="text-lg font-medium">Free pickup and delivery in {city.name}</p>
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

      {/* Map & Testimonials */}
      <section className="py-16 bg-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-neutral-100 rounded-lg overflow-hidden h-[400px]">
              <iframe
                src={city.mapEmbedUrl}
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
                  <p className="italic mb-2">"The convenience of their pickup service is amazing. Living in {city.name}, it's made my life so much easier!"</p>
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

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">About {city.name}</h2>
          <div className="prose max-w-none">
            <p className="mb-4">{city.about}</p>
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
            {city.faq.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-[url('/images/Background.png')] bg-cover bg-center bg-no-repeat"></div>
        <div className="absolute inset-0 bg-[#790003]/80"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Visit Us or Schedule a Pickup in {city.name} Today
          </h2>
          <p className="text-xl text-white mb-8">
            Experience the Signature Cleaners difference.
          </p>
          <Link href="/schedule">
            <Button size="lg" className="bg-white hover:bg-[#F6AE2D] text-black px-12 py-6 text-lg">
              Schedule Pickup
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}