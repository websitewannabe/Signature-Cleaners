import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

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
      <section className="relative min-h-[80vh] flex items-center">
        <div 
          className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"
          style={{
            backgroundImage: 'url("/src/images/Background.png")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundBlendMode: "overlay",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative">
          <div data-aos="fade-up" className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight tracking-tight">
              Expert Care for Your
              <span className="block mt-2">Finest Garments</span>
            </h1>
            <p className="mt-6 text-xl md:text-2xl text-white/90 leading-relaxed">
              Premium dry cleaning with convenient pickup and delivery, trusted by thousands across the city.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <Link href="/schedule">
                <Button className="group w-full sm:w-auto bg-[#7C1716] hover:bg-[#641211] text-white font-medium px-8 py-6 rounded-md shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center">
                  <span>
                    Schedule Pickup
                    <span className="block text-sm font-normal opacity-80">Takes 60 seconds</span>
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1"
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
                  className="w-full sm:w-auto border-2 border-white/30 hover:border-white bg-white/10 hover:bg-white/20 text-white font-medium px-8 py-6 rounded-md backdrop-blur-sm transition-all duration-300"
                >
                  Explore Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div data-aos="fade-up" data-aos-delay="0" className="flex items-center justify-center text-center">
              <div>
                <div className="mb-4 text-[#7C1716]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold">100% Satisfaction Guarantee</h3>
                <p className="mt-2 text-neutral-600">Not happy? We'll make it right.</p>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="100" className="flex items-center justify-center text-center">
              <div>
                <div className="mb-4 text-[#7C1716]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold">Free Pickup & Delivery</h3>
                <p className="mt-2 text-neutral-600">At your doorstep, at your convenience.</p>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="200" className="flex items-center justify-center text-center">
              <div>
                <div className="mb-4 text-[#7C1716]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold">Next-Day Service Available</h3>
                <p className="mt-2 text-neutral-600">Quick turnaround when you need it.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-[#F6F7EB] border-t-8 border-[#7C1716]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Our Services
            </h2>
            <p className="mt-4 text-xl text-neutral-800 max-w-3xl mx-auto leading-relaxed">
              Experience exceptional garment care with our premium cleaning services, tailored to preserve and enhance your wardrobe.
            </p>
          </div>

          {isLoadingServices ? (
            <div className="flex justify-center items-center py-12">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services &&
                services.map((service, index) => (
                  <div
                    key={service.id}
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                    className="group bg-white rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1"
                  >
                    <div className="relative h-48 bg-neutral-200 overflow-hidden">
                      <img
                        src={service.imageUrl || `https://source.unsplash.com/400x300/?laundry,${service.name}`}
                        alt={service.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-black group-hover:text-[#7C1716] transition-colors duration-300">
                        {service.name}
                      </h3>
                      <p className="mt-2 text-neutral-600 line-clamp-2">
                        {service.description}
                      </p>
                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-[#7C1716] font-medium">
                          {service.price}
                        </span>
                        <Link href="/schedule">
                          <span className="flex items-center text-neutral-700 font-medium hover:text-[#7C1716] transition-colors duration-300">
                            Schedule
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 ml-1 transition-transform duration-300 group-hover:translate-x-1"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          )}

          <div className="mt-12 text-center">
            <Link href="/services">
              <span className="inline-flex items-center text-black hover:text-neutral-800 font-medium">
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
              <Button className="bg-[#44633F] hover:bg-[#385233] text-white font-medium px-6 py-3 rounded-md shadow-md hover:shadow-lg transition duration-300">
                Get Started Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 bg-[#7C1716]">
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
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials &&
                testimonials.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="bg-white rounded-lg shadow-md p-6"
                  >
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
                    <p className="text-neutral-600 mb-4">
                      "{testimonial.content}"
                    </p>
                    <div className="flex items-center">
                      <div className="mr-3 h-10 w-10 rounded-full bg-neutral-200 overflow-hidden flex items-center justify-center">
                        <span className="text-primary font-bold">
                          {testimonial.name.charAt(0)}
                        </span>
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
                ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
      
      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-neutral-200 shadow-lg md:hidden z-50">
        <Link href="/schedule">
          <Button className="w-full bg-[#7C1716] hover:bg-[#641211] text-white py-4">
            Schedule Pickup
          </Button>
        </Link>
      </div>
    </div>
  );
}