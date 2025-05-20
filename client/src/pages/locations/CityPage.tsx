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
        <div className="absolute inset-0 bg-[url('/images/Background.png')] bg-cover bg-center bg-no-repeat"></div>
        <div className="absolute inset-0 bg-[#790003]/80"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {city.title}
          </h1>
          <p className="text-xl text-white mb-8">{city.subtitle}</p>
          <Link href="/schedule">
            <Button size="lg" className="bg-white hover:bg-[#F6AE2D] text-black px-12 py-6 text-lg">
              Schedule Pickup in {city.name}
            </Button>
          </Link>
        </div>
      </section>

      {/* Services Z-Pattern Layout */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {/* Dry Cleaning */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2">
              <div className="h-[400px] bg-[url('/images/interior-two.jpg')] bg-cover bg-center bg-no-repeat rounded-lg"></div>
            </div>
            <div className="w-full md:w-1/2 space-y-4">
              <h2 className="text-3xl font-bold">Dry Cleaning in {city.name}</h2>
              <p className="text-lg text-gray-600">Professional dry cleaning services with expert care for your garments.</p>
              <Link href="/services/dry-cleaning">
                <Button size="lg" className="bg-[#790003] hover:bg-[#F6AE2D] text-white" aria-label={`Learn more about dry cleaning services in ${city.name}`}>
                  Learn More About Dry Cleaning
                </Button>
              </Link>
            </div>
          </div>

          {/* Wash & Fold */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="w-full md:w-1/2">
              <div className="h-[400px] bg-[url('/images/washFold.jpg')] bg-cover bg-center bg-no-repeat rounded-lg"></div>
            </div>
            <div className="w-full md:w-1/2 space-y-4">
              <h2 className="text-3xl font-bold">Wash & Fold in {city.name}</h2>
              <p className="text-lg text-gray-600">Convenient wash and fold service for your everyday laundry needs.</p>
              <Link href="/services/wash-fold">
                <Button size="lg" className="bg-[#790003] hover:bg-[#F6AE2D] text-white" aria-label={`Learn more about wash and fold services in ${city.name}`}>
                  Learn More About Wash & Fold
                </Button>
              </Link>
            </div>
          </div>

          {/* Alterations & Tailoring */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2">
              <div className="h-[400px] bg-[url('/images/tailor.jpg')] bg-cover bg-center bg-no-repeat rounded-lg"></div>
            </div>
            <div className="w-full md:w-1/2 space-y-4">
              <h2 className="text-3xl font-bold">Alterations & Tailoring in {city.name}</h2>
              <p className="text-lg text-gray-600">Expert tailoring and alterations for the perfect fit.</p>
              <Link href="/services/alterations-tailoring">
                <Button size="lg" className="bg-[#790003] hover:bg-[#F6AE2D] text-white" aria-label={`Learn more about alterations and tailoring services in ${city.name}`}>
                  Learn More About Alterations
                </Button>
              </Link>
            </div>
          </div>

          {/* Wedding Gown Services */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="w-full md:w-1/2">
              <div className="h-[400px] bg-[url('/images/weddingGown.jpg')] bg-cover bg-center bg-no-repeat rounded-lg"></div>
            </div>
            <div className="w-full md:w-1/2 space-y-4">
              <h2 className="text-3xl font-bold">Wedding Gown Services in {city.name}</h2>
              <p className="text-lg text-gray-600">Specialized cleaning and preservation for wedding gowns.</p>
              <Link href="/services/wedding-gown">
                <Button size="lg" className="bg-[#790003] hover:bg-[#F6AE2D] text-white" aria-label={`Learn more about wedding gown services in ${city.name}`}>
                  Learn More About Wedding Services
                </Button>
              </Link>
            </div>
          </div>

          {/* Shoe Repair */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2">
              <div className="h-[400px] bg-[url('/images/shoeRepair.jpg')] bg-cover bg-center bg-no-repeat rounded-lg"></div>
            </div>
            <div className="w-full md:w-1/2 space-y-4">
              <h2 className="text-3xl font-bold">Shoe Repair in {city.name}</h2>
              <p className="text-lg text-gray-600">Professional shoe repair and restoration services.</p>
              <Link href="/services/shoe-repair">
                <Button size="lg" className="bg-[#790003] hover:bg-[#F6AE2D] text-white" aria-label={`Learn more about shoe repair services in ${city.name}`}>
                  Learn More About Shoe Repair
                </Button>
              </Link>
            </div>
          </div>

          {/* Household Items */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="w-full md:w-1/2">
              <div className="h-[400px] bg-[url('/images/householdItems.jpg')] bg-cover bg-center bg-no-repeat rounded-lg"></div>
            </div>
            <div className="w-full md:w-1/2 space-y-4">
              <h2 className="text-3xl font-bold">Household Item Cleaning in {city.name}</h2>
              <p className="text-lg text-gray-600">Professional cleaning for comforters, drapes, and more.</p>
              <Link href="/services/household-cleaning">
                <Button size="lg" className="bg-[#790003] hover:bg-[#F6AE2D] text-white" aria-label={`Learn more about household item cleaning services in ${city.name}`}>
                  Learn More About Household Cleaning
                </Button>
              </Link>
            </div>
          </div>

          {/* Pickup & Delivery */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2">
              <div className="h-[400px] bg-[url('/images/delivery.jpg')] bg-cover bg-center bg-no-repeat rounded-lg"></div>
            </div>
            <div className="w-full md:w-1/2 space-y-4">
              <h2 className="text-3xl font-bold">Pickup & Delivery in {city.name}</h2>
              <p className="text-lg text-gray-600">Free pickup and delivery service throughout {city.name}.</p>
              <Link href="/services/delivery">
                <Button size="lg" className="bg-[#790003] hover:bg-[#F6AE2D] text-white" aria-label={`Learn more about pickup and delivery services in ${city.name}`}>
                  Learn More About Delivery Service
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
            {/* Dry Cleaning */}
            <div className="group bg-[#790003] shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full overflow-hidden">
              <div className="h-40 bg-[url('/images/interior-two.jpg')] bg-cover bg-center bg-no-repeat"></div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-white">Dry Cleaning in {city.name}</h3>
                <div className="w-12 h-0.5 bg-[#181818] my-4"></div>
                <p className="text-white mb-6">Professional dry cleaning services with expert care for your garments.</p>
                <Link href="/all-services/dry-cleaning" className="mt-auto">
                  <Button className="w-full bg-white text-black hover:bg-[#F6AE2D]">Learn More</Button>
                </Link>
              </div>
            </div>

            {/* Wash & Fold */}
            <div className="group bg-[#790003] shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full overflow-hidden">
              <div className="h-40 bg-[url('/images/washFold.jpg')] bg-cover bg-center bg-no-repeat"></div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-white">Wash & Fold in {city.name}</h3>
                <div className="w-12 h-0.5 bg-[#181818] my-4"></div>
                <p className="text-white mb-6">Convenient wash and fold service for your everyday laundry needs.</p>
                <Link href="/all-services/wash-fold" className="mt-auto">
                  <Button className="w-full bg-white text-black hover:bg-[#F6AE2D]">Learn More</Button>
                </Link>
              </div>
            </div>

            {/* Alterations & Tailoring */}
            <div className="group bg-[#790003] shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full overflow-hidden">
              <div className="h-40 bg-[url('/images/tailor.jpg')] bg-cover bg-center bg-no-repeat"></div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-white">Alterations & Tailoring in {city.name}</h3>
                <div className="w-12 h-0.5 bg-[#181818] my-4"></div>
                <p className="text-white mb-6">Expert tailoring and alterations for the perfect fit.</p>
                <Link href="/all-services/alteration-tailoring" className="mt-auto">
                  <Button className="w-full bg-white text-black hover:bg-[#F6AE2D]">Learn More</Button>
                </Link>
              </div>
            </div>

            {/* Wedding Gowns */}
            <div className="group bg-[#790003] shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full overflow-hidden">
              <div className="h-40 bg-[url('/images/weddingGown.jpg')] bg-cover bg-center bg-no-repeat"></div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-white">Wedding Gown Services in {city.name}</h3>
                <div className="w-12 h-0.5 bg-[#181818] my-4"></div>
                <p className="text-white mb-6">Specialized cleaning and preservation for wedding gowns.</p>
                <Link href="/all-services/wedding-gown" className="mt-auto">
                  <Button className="w-full bg-white text-black hover:bg-[#F6AE2D]">Learn More</Button>
                </Link>
              </div>
            </div>

            {/* Shoe Repair */}
            <div className="group bg-[#790003] shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full overflow-hidden">
              <div className="h-40 bg-[url('/images/shoeRepair.jpg')] bg-cover bg-center bg-no-repeat"></div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-white">Shoe Repair in {city.name}</h3>
                <div className="w-12 h-0.5 bg-[#181818] my-4"></div>
                <p className="text-white mb-6">Professional shoe repair and restoration services.</p>
                <Link href="/all-services/shoe-repair" className="mt-auto">
                  <Button className="w-full bg-white text-black hover:bg-[#F6AE2D]">Learn More</Button>
                </Link>
              </div>
            </div>

            {/* Household Items */}
            <div className="group bg-[#790003] shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full overflow-hidden">
              <div className="h-40 bg-[url('/images/householdItems.jpg')] bg-cover bg-center bg-no-repeat"></div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-white">Household Item Cleaning in {city.name}</h3>
                <div className="w-12 h-0.5 bg-[#181818] my-4"></div>
                <p className="text-white mb-6">Professional cleaning for comforters, drapes, and more.</p>
                <Link href="/all-services/clean-household-items" className="mt-auto">
                  <Button className="w-full bg-white text-black hover:bg-[#F6AE2D]">Learn More</Button>
                </Link>
              </div>
            </div>

            {/* Delivery */}
            <div className="group bg-[#790003] shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full overflow-hidden">
              <div className="h-40 bg-[url('/images/delivery.jpg')] bg-cover bg-center bg-no-repeat"></div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-white">Pickup & Delivery in {city.name}</h3>
                <div className="w-12 h-0.5 bg-[#181818] my-4"></div>
                <p className="text-white mb-6">Free pickup and delivery service throughout {city.name}.</p>
                <Link href="/all-services/delivery" className="mt-auto">
                  <Button className="w-full bg-white text-black hover:bg-[#F6AE2D]">Learn More</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

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
        <div className="absolute inset-0 bg-[url('/images/Background.png')] bg-cover bg-center bg-no-repeat"></div>
        <div className="absolute inset-0 bg-[#790003]/70"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Ready to experience premium garment care in {city.name}?
          </h2>
          <Link href="/schedule">
            <Button size="lg" className="bg-white hover:bg-[#F6AE2D] text-black px-12 py-6 text-lg">
              Schedule a Pickup
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}