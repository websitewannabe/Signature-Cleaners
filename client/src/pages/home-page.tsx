import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Loader2, CheckCircle, Truck, Clock } from "lucide-react";

export default function HomePage() {
  const { data: services, isLoading: isLoadingServices } = useQuery({
    queryKey: ["/api/services"],
  });

  const { data: testimonials, isLoading: isLoadingTestimonials } = useQuery({
    queryKey: ["/api/testimonials"],
  });

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section
        className="relative min-h-[80vh] flex items-center"
        style={{
          backgroundImage: 'url("/src/images/Background.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative">
          <div className="max-w-2xl" data-aos="fade-up">
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight tracking-tight">
              Premium Care for Your Garments
            </h1>
            <p className="mt-6 text-xl md:text-2xl text-white/90 leading-relaxed">
              Trusted dry cleaning with fast pickup & delivery across the city.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-6">
              <div className="flex flex-col items-center sm:items-start">
                <Link href="/schedule">
                  <Button className="w-full sm:w-auto bg-white hover:bg-white/90 text-[#44633F] font-medium px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    Schedule Pickup
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-2"
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
                <span className="text-white/80 text-sm mt-2">Takes 60 seconds</span>
              </div>
              <Link href="/services">
                <Button
                  variant="outline"
                  className="w-full sm:w-auto border-2 hover:bg-white/10 text-white font-medium px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Our Services
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
            <div className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-sm" data-aos="fade-up" data-aos-delay="0">
              <div className="flex-shrink-0">
                <CheckCircle className="h-8 w-8 text-[#44633F]" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">100% Satisfaction Guarantee</h3>
                <p className="text-neutral-600">Love your cleaned garments or we'll make it right</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-sm" data-aos="fade-up" data-aos-delay="100">
              <div className="flex-shrink-0">
                <Truck className="h-8 w-8 text-[#44633F]" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Free Pickup & Delivery</h3>
                <p className="text-neutral-600">Convenient service at your doorstep</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-sm" data-aos="fade-up" data-aos-delay="200">
              <div className="flex-shrink-0">
                <Clock className="h-8 w-8 text-[#44633F]" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Next-Day Turnaround</h3>
                <p className="text-neutral-600">Quick service when you need it most</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-neutral-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Experience exceptional garment care with our premium cleaning services
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
                    className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="h-48 bg-neutral-200">
                      <img
                        src={service.imageUrl}
                        alt={service.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-neutral-900">
                        {service.name}
                      </h3>
                      <p className="mt-2 text-neutral-600">
                        {service.description}
                      </p>
                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-neutral-900 font-medium">
                          {service.price}
                        </span>
                        <Link href="/schedule">
                          <span className="text-[#44633F] hover:text-[#385233] font-medium flex items-center">
                            Schedule
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 ml-1"
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
        </div>
      </section>

      {/* CTA Strip */}
      <section className="bg-[#7C1716] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" data-aos="fade-up">
            Looking for reliable dry cleaning?
          </h2>
          <p className="text-xl text-white/90 mb-8" data-aos="fade-up" data-aos-delay="100">
            Schedule your first pickup today and experience the difference.
          </p>
          <Link href="/schedule">
            <Button
              className="bg-white hover:bg-white/90 text-[#7C1716] font-medium px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Get Started
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}