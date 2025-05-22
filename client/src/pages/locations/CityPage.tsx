import { useParams } from "wouter";
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { cityData } from "@/data/cityData";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Shirt, Car, Footprints, Gem, AirVent } from "lucide-react";

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
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>{city.seo.title}</title>
        <meta name="description" content={city.seo.description} />
        <meta name="keywords" content={city.seo.keywords} />
        <link rel="canonical" href={city.seo.canonical} />
      </Helmet>

      <Header />

      {/* Hero Section */}
      <section className="relative py-40">
        <div className="absolute inset-0 bg-[url('/images/Background.webp')] bg-cover bg-center bg-no-repeat"></div>
        <div className="absolute inset-0 bg-[#790003]/80"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {city.title}
          </h1>
          <p className="text-xl text-white mb-8">{city.subtitle}</p>
          <Link href="/schedule">
            <Button
              size="lg"
              className="bg-white hover:bg-[#F6AE2D] text-black px-12 py-6 text-lg"
            >
              Schedule Pickup in {city.name}
            </Button>
          </Link>
        </div>
      </section>

      {/* Services Z-Pattern Sections */}
      {[
        {
          title: `Dry Cleaning in ${city.name}`,
          description:
            "Professional dry cleaning services with expert care for your garments.",
          image: "/images/interior-two.webp",
          link: "/all-services/dry-cleaning",
        },
        {
          title: `Wash & Fold in ${city.name}`,
          description:
            "Convenient wash and fold service for your everyday laundry needs.",
          image: "/images/washFold.webp",
          link: "/all-services/wash-fold",
        },
        {
          title: `Alterations & Tailoring in ${city.name}`,
          description: "Expert tailoring and alterations for the perfect fit.",
          image: "/images/tailor.webp",
          link: "/all-services/alteration-tailoring",
        },
        {
          title: `Wedding Gown Services in ${city.name}`,
          description:
            "Specialized cleaning and preservation for wedding gowns.",
          image: "/images/weddingGown.webp",
          link: "/all-services/wedding-gown",
        },
        {
          title: `Shoe Repair in ${city.name}`,
          description: "Professional shoe repair and restoration services.",
          image: "/images/shoeRepair.webp",
          link: "/all-services/shoe-repair",
        },
        {
          title: `Household Item Cleaning in ${city.name}`,
          description:
            "Professional cleaning for comforters, drapes, and more.",
          image: "/images/householdItems.webp",
          link: "/all-services/clean-household-items",
        },
        {
          title: `Pickup & Delivery in ${city.name}`,
          description: `Free pickup and delivery service throughout ${city.name}.`,
          image: "/images/delivery.webp",
          link: "/all-services/delivery",
        },
      ].map((service, index) => {
        const isReversed = index % 2 === 1;
        return (
          <section key={index} className="py-16 bg-white">
            <div
              className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row ${isReversed ? "md:flex-row-reverse" : ""} items-center gap-10`}
            >
              <div className="md:w-1/2">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-80 object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-4 text-[#790003]">
                  {service.title}
                </h2>
                <p className="mb-6 text-neutral-700">{service.description}</p>
                <Link href={service.link}>
                  <Button className="bg-[#790003] text-white hover:bg-[#F6AE2D]">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        );
      })}

      {/* Map & About Section */}
      <section className="py-16 bg-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-neutral-100 rounded-lg overflow-hidden h-[400px]">
              <iframe
                title={`Signature Cleaners location in ${city.name}`}
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
              <h2 className="text-3xl font-bold mb-6">About {city.name}</h2>
              <p className="text-neutral-600">{city.about}</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
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

      {/* CTA Section */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-[url('/images/Background.webp')] bg-cover bg-center bg-no-repeat"></div>
        <div className="absolute inset-0 bg-[#790003]/70"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Ready to experience premium garment care in {city.name}?
          </h2>
          <Link href="/schedule">
            <Button
              size="lg"
              className="bg-white hover:bg-[#F6AE2D] text-black px-12 py-6 text-lg"
            >
              Schedule a Pickup
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
