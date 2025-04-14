import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

export default function HomePage() {
  const { data: services, isLoading: isLoadingServices } = useQuery({
    queryKey: ["/api/services"],
  });

  const { data: testimonials, isLoading: isLoadingTestimonials } = useQuery({
    queryKey: ["/api/testimonials"],
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center">
        <div className="absolute inset-0 bg-[url('/src/images/interior.jpg')] bg-cover bg-center bg-no-repeat"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight tracking-tight">
              Care for Your Clothes.
              <br />
              Convenience for You.
            </h1>
            <p className="mt-6 text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
              Old Fashioned Service. Guaranteed.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/schedule">
                <Button className="w-full sm:w-auto bg-[#790003] hover:bg-[#F6AE2D] text-white font-semibold px-8 py-6 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center group">
                  Schedule Pickup
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-200"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  variant="outline"
                  className="w-full sm:w-auto bg-white text-black font-semibold px-8 py-6 rounded-xl shadow-lg hover:shadow-2xl hover:bg-[#F6AE2D] hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center group"
                >
                  View Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-[#0A1F44]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Services
            </h2>
            <p className="mt-4 text-xl text-neutral-800 text-white max-w-3xl mx-auto leading-relaxed">
              Experience exceptional garment care with our premium cleaning
              services, tailored to preserve and enhance your wardrobe.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Dry Cleaning */}
            <div className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full overflow-hidden">
              <div className="h-40 bg-[url('/src/images/cleaners.gif')] bg-cover bg-center bg-no-repeat flex-shrink-0 overflow-hidden transition-transform duration-300 group-hover:scale-105"></div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex-grow flex flex-col space-y-3">
                  <h3 className="text-xl font-semibold text-neutral-900">
                    Professional Dry Cleaning
                  </h3>
                  <div className="w-12 h-0.5 bg-[#790003]/10"></div>
                  <p className="text-neutral-600 line-clamp-3 flex-grow">
                    State-of-the-art dry cleaning services for all your delicate
                    and special garments, ensuring the highest quality care.
                  </p>
                  <Link href="/dry-cleaning" className="block">
                    <Button
                      variant="outline"
                      className="w-full border-[#790003] text-[#790003] hover:bg-[#790003] hover:text-white transition-colors duration-300"
                    >
                      Learn More
                    </Button>
                  </Link>
                </div>
                <div className="mt-8 pt-4 border-t border-neutral-100 flex flex-col sm:flex-row items-center gap-4">
                  <span className="text-[#790003] font-semibold text-lg">
                    From $6.99
                  </span>
                  <Link
                    href="/schedule"
                    className="w-full sm:w-auto sm:ml-auto"
                  >
                    <Button className="w-full bg-[#790003] hover:bg-[#F6AE2D] text-white font-medium transition-colors duration-300">
                      Book Now
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            {/* Wash & Fold */}
            <div className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full overflow-hidden">
              <div className="h-40 bg-[url('/src/images/wash-fold.gif')] bg-cover bg-center bg-no-repeat flex-shrink-0 overflow-hidden transition-transform duration-300 group-hover:scale-105"></div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex-grow flex flex-col space-y-3">
                  <h3 className="text-xl font-semibold text-neutral-900">
                    Wash & Fold
                  </h3>
                  <div className="w-12 h-0.5 bg-[#790003]/10"></div>
                  <p className="text-neutral-600 line-clamp-3 flex-grow">
                    Convenient wash and fold service for your everyday laundry
                    needs, saving you time and effort.
                  </p>
                  <Link href="/wash-fold" className="block">
                    <Button
                      variant="outline"
                      className="w-full border-[#790003] text-[#790003] hover:bg-[#790003] hover:text-white transition-colors duration-300"
                    >
                      Learn More
                    </Button>
                  </Link>
                </div>
                <div className="mt-8 pt-4 border-t border-neutral-100 flex flex-col sm:flex-row items-center gap-4">
                  <span className="text-[#790003] font-semibold text-lg">
                    $2.99/lb
                  </span>
                  <Link
                    href="/schedule"
                    className="w-full sm:w-auto sm:ml-auto"
                  >
                    <Button className="w-full bg-[#790003] hover:bg-[#F6AE2D] text-white font-medium transition-colors duration-300">
                      Book Now
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            {/* Wedding Gowns */}
            <div className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full overflow-hidden">
              <div className="h-40 bg-[url('/src/images/wedding-gown.gif')] bg-cover bg-center bg-no-repeat flex-shrink-0 overflow-hidden transition-transform duration-300 group-hover:scale-105"></div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex-grow flex flex-col space-y-3">
                  <h3 className="text-xl font-semibold text-neutral-900">
                    Wedding Gowns
                  </h3>
                  <div className="w-12 h-0.5 bg-[#790003]/10"></div>
                  <p className="text-neutral-600 line-clamp-3 flex-grow">
                    Specialized cleaning and preservation services for wedding
                    gowns, ensuring your precious memories last a lifetime.
                  </p>
                  <Link href="/wedding-gown" className="block">
                    <Button
                      variant="outline"
                      className="w-full border-[#790003] text-[#790003] hover:bg-[#790003] hover:text-white transition-colors duration-300"
                    >
                      Learn More
                    </Button>
                  </Link>
                </div>
                <div className="mt-8 pt-4 border-t border-neutral-100 flex flex-col sm:flex-row items-center gap-4">
                  <span className="text-[#790003] font-semibold text-lg">
                    From $99.99
                  </span>
                  <Link
                    href="/schedule"
                    className="w-full sm:w-auto sm:ml-auto"
                  >
                    <Button className="w-full bg-[#790003] hover:bg-[#F6AE2D] text-white font-medium transition-colors duration-300">
                      Book Now
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            {/* Household Items */}
            <div className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full overflow-hidden">
              <div className="h-40 bg-[url('/src/images/household-items.gif')] bg-cover bg-center bg-no-repeat flex-shrink-0 overflow-hidden transition-transform duration-300 group-hover:scale-105"></div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex-grow flex flex-col space-y-3">
                  <h3 className="text-xl font-semibold text-neutral-900">
                    Cleaning of Household Items
                  </h3>
                  <div className="w-12 h-0.5 bg-[#790003]/10"></div>
                  <p className="text-neutral-600 line-clamp-3 flex-grow">
                    Comprehensive cleaning solutions for household items
                    including comforters, blankets, and decorative pieces.
                  </p>
                  <Link href="/clean-household-items" className="block">
                    <Button
                      variant="outline"
                      className="w-full border-[#790003] text-[#790003] hover:bg-[#790003] hover:text-white transition-colors duration-300"
                    >
                      Learn More
                    </Button>
                  </Link>
                </div>
                <div className="mt-8 pt-4 border-t border-neutral-100 flex flex-col sm:flex-row items-center gap-4">
                  <span className="text-[#790003] font-semibold text-lg">
                    From $24.99
                  </span>
                  <Link
                    href="/schedule"
                    className="w-full sm:w-auto sm:ml-auto"
                  >
                    <Button className="w-full bg-[#790003] hover:bg-[#F6AE2D] text-white font-medium transition-colors duration-300">
                      Book Now
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Service Category Icons */}
          <div className="mt-12 mb-8">
            <div className="flex flex-wrap justify-center gap-8 md:gap-12">
              {/* Delivery */}
              <Link
                href="/delivery"
                className="group flex flex-col items-center"
              >
                <div
                  className="w-20 h-20 bg-[#790003] rounded-full flex items-center justify-center shadow-lg transition-transform group-hover:scale-110"
                  aria-label="Delivery Service"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                    />
                  </svg>
                </div>
                <span className="mt-2 text-white text-sm font-medium">
                  Delivery
                </span>
              </Link>

              {/* Alterations & Tailoring */}
              <Link
                href="/alteration-tailoring"
                className="group flex flex-col items-center"
              >
                <div
                  className="w-20 h-20 bg-[#790003] rounded-full flex items-center justify-center shadow-lg transition-transform group-hover:scale-110"
                  aria-label="Alterations and Tailoring Service"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <span className="mt-2 text-white text-sm font-medium">
                  Tailoring
                </span>
              </Link>

              {/* Shoe Repair */}
              <Link
                href="/shoe-repair"
                className="group flex flex-col items-center"
              >
                <div
                  className="w-20 h-20 bg-[#790003] rounded-full flex items-center justify-center shadow-lg transition-transform group-hover:scale-110"
                  aria-label="Shoe Repair Service"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                </div>
                <span className="mt-2 text-white text-sm font-medium">
                  Shoe Repair
                </span>
              </Link>
            </div>
          </div>
          <div className="mt-12 text-center">
            <Link href="/services">
              <span className="inline-flex items-center text-white hover:shadow-lg font-medium">
                View Complete Price List
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
              How It Works
            </h2>
            <p className="mt-4 text-xl text-neutral-600 max-w-3xl mx-auto">
              Our convenient process makes it easy to get your clothes cleaned
              without disrupting your schedule.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="bg-white rounded-full h-24 w-24 flex items-center justify-center mx-auto shadow-md mb-4">
                <span className="text-primary text-3xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900">
                Schedule
              </h3>
              <p className="mt-2 text-neutral-600">
                Book your pickup online or by phone
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white rounded-full h-24 w-24 flex items-center justify-center mx-auto shadow-md mb-4">
                <span className="text-primary text-3xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900">Pickup</h3>
              <p className="mt-2 text-neutral-600">
                We collect your garments from your door
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white rounded-full h-24 w-24 flex items-center justify-center mx-auto shadow-md mb-4">
                <span className="text-primary text-3xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900">Clean</h3>
              <p className="mt-2 text-neutral-600">
                Your items receive expert care
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white rounded-full h-24 w-24 flex items-center justify-center mx-auto shadow-md mb-4">
                <span className="text-primary text-3xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900">
                Deliver
              </h3>
              <p className="mt-2 text-neutral-600">
                We return your fresh, clean garments
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link href="/schedule">
              <Button className="bg-[#790003] hover:bg-[#F6AE2D] text-white font-medium px-6 py-3 rounded-md shadow-md hover:shadow-lg transition duration-300">
                Get Started Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              What Our Customers Say
            </h2>
            <p className="mt-4 text-xl text-white text-opacity-90 max-w-3xl mx-auto">
              Discover why our customers trust us with their garments.
            </p>
          </div>

          {isLoadingTestimonials ? (
            <div className="flex justify-center items-center py-12">
              <Loader2 className="h-8 w-8 animate-spin text-white" />
            </div>
          ) : (
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full max-w-5xl mx-auto px-8"
            >
              <CarouselContent>
                {testimonials &&
                  testimonials.map((testimonial) => (
                    <CarouselItem key={testimonial.id} className="md:basis-1/1">
                      <div className="bg-white rounded-lg shadow-md p-6 flex flex-col h-full mx-2">
                        <div className="flex-grow">
                          <div className="flex items-center mb-4">
                            {[...Array(5)].map((_, i) => (
                              <div
                                key={i}
                                className={`text-${i < testimonial.rating ? "[#F9A826]" : "neutral-300"}`}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-5 w-5"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                >
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                              </div>
                            ))}
                          </div>
                          <p className="text-neutral-600 text-lg">
                            "{testimonial.content}"
                          </p>
                        </div>
                        <div className="mt-6 pt-4 border-t border-neutral-100">
                          <div className="flex items-center">
                            <div className="mr-3 h-10 w-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                              {testimonial.name.charAt(0)}
                            </div>
                            <div>
                              <h4 className="font-semibold text-neutral-900">
                                {testimonial.name}
                              </h4>
                              <p className="text-sm text-neutral-500">
                                {testimonial.role}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
              </CarouselContent>
              <div className="flex justify-center gap-2 mt-4">
                <CarouselPrevious className="relative translate-y-0 left-0" />
                <CarouselNext className="relative translate-y-0 right-0" />
              </div>
            </Carousel>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-neutral-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1">
              <AccordionTrigger>How do I sign up?</AccordionTrigger>
              <AccordionContent>
                Click here or Call (215) 345-1470 – Include your sign up form
                with your name, address and phone number on your first order
                indicating that you signed up online.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>
                Where are my clothes picked up and delivered?
              </AccordionTrigger>
              <AccordionContent>
                We will pick up and deliver your clothes to your home, your
                office or to the concierge in your building.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>Is there a minimum order?</AccordionTrigger>
              <AccordionContent>
                No need to wait for a full bag of dirty clothes, we will pick up
                and deliver any amount.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-10">
              <AccordionTrigger>How do I pay for the service?</AccordionTrigger>
              <AccordionContent>
                Your dry cleaning will be charged automatically to your American
                express, Visa. Master card or Discover Card.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-11">
              <AccordionTrigger>
                How do you keep my credit card safe?
              </AccordionTrigger>
              <AccordionContent>
                We use the latest encryption and authentication services for all
                our web transactions so that your credit card information
                remains safe. If you prefer, just give us a call at (877)
                779-1269 and we can assist you via phone.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <Footer />
    </div>
  );
}
