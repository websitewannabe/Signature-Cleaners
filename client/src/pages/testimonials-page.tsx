import { useQuery } from "@tanstack/react-query";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Loader2, CheckCircle } from "lucide-react";

export default function TestimonialsPage() {
  const { data: testimonials, isLoading } = useQuery({
    queryKey: ["/api/testimonials"],
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-[#23282F] py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Customer Testimonials
            </h1>
            <p className="mt-4 text-xl text-white text-opacity-90 max-w-3xl mx-auto">
              See what our customers have to say about their experience with
              Signature Cleaners
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {isLoading ? (
            <div className="flex justify-center items-center py-12">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials &&
                testimonials.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="bg-white border border-neutral-200 rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300"
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
                    <div className="flex flex-col h-full">
                      <p className="text-neutral-600 mb-auto italic flex-grow">
                        "{testimonial.content}"
                      </p>
                      <div className="flex items-center mt-4 pt-4 border-t border-neutral-100">
                        <div className="mr-3 h-10 w-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                          {testimonial.name.charAt(0)}
                        </div>
                        <div>
                          <h4 className="font-semibold text-neutral-900 line-clamp-1">
                            {testimonial.name}
                          </h4>
                          <p className="text-sm text-neutral-500">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

              {/* Additional testimonials since we only have 3 from the API */}
              <div className="bg-white border border-neutral-200 rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="text-[#F9A826]">
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
                <div className="flex flex-col h-full">
                  <p className="text-neutral-600 mb-auto italic flex-grow">
                    "I was in a very tight spot with needed my uniform dry cleaned
                    in less than 2 days. Not only did they get it done within a
                    few hours, but they were amazing to talk to while I was in
                    there. I highly recommend them and wouldn’t take my uniforms
                    anywhere else!"
                  </p>
                  <div className="flex items-center mt-4 pt-4 border-t border-neutral-100">
                    <div className="mr-3 h-10 w-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                      D
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-900">
                        Dan Divalerio
                      </h4>
                      <p className="text-sm text-neutral-500">Customer</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-neutral-200 rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className={`text-${i < 5 ? "[#F9A826]" : "neutral-300"}`}
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
                <div className="flex flex-col h-full">
                  <p className="text-neutral-600 mb-auto italic flex-grow">
                    "Took my husband's clothes in, that he needed in a pinch, for
                    work. They got them cleaned and pressed quickly. Price was
                    more than reasonable. Best of all there was no trace of the
                    ink stains left when done. And, the staff were all friendly.""
                  </p>
                  <div className="flex items-center mt-4 pt-4 border-t border-neutral-100">
                    <div className="mr-3 h-10 w-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                      M
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-900">
                        Mary Beth McDowell
                      </h4>
                      <p className="text-sm text-neutral-500">Customer</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-neutral-200 rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className={`text-${i < 5 ? "[#F9A826]" : "neutral-300"}`}
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
                <div className="flex flex-col h-full">
                  <p className="text-neutral-600 mb-auto italic flex-grow">
                    "The customer service was absolutely amazing. I needed to have
                    a suit jacket repaired and cleaned, with short lead time. They
                    came through with high quality - on time! I highly recommend
                    their service "
                  </p>
                  <div className="flex items-center mt-4 pt-4 border-t border-neutral-100">
                    <div className="mr-3 h-10 w-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                      M
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-900">
                        Mark Schulz
                      </h4>
                      <p className="text-sm text-neutral-500">Customer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Satisfaction Guarantee */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center">
                <div className="text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-32 w-32"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>
              <div className="md:w-2/3 md:pl-8">
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                  Our 100% Satisfaction Guarantee
                </h3>
                <p className="text-neutral-600 mb-4">
                  At Signature Cleaners, we stand behind the quality of our
                  work. If you're not completely satisfied with our service,
                  we'll make it right—guaranteed.
                </p>
                <ul className="space-y-2 mb-6">
                  <GuaranteeItem text="If you're not happy with our cleaning, we'll redo it at no extra charge" />
                  <GuaranteeItem text="Any item damaged during our cleaning process will be repaired or replaced" />
                  <GuaranteeItem text="On-time pickup and delivery or your next order is discounted" />
                </ul>
                <Link href="/contact">
                  <Button className="bg-[#790003] hover:bg-primary-dark text-white">
                    Contact Us With Questions
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#790003] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Join Our Happy Customers Today
          </h2>
          <Link href="/schedule">
            <Button
              size="lg"
              className="bg-white hover:bg-[#E89212] text-black"
            >
              Schedule Your First Pickup
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

const GuaranteeItem = ({ text }: { text: string }) => (
  <li className="flex items-start">
    <CheckCircle className="h-5 w-5 text-[#4DA1A9] mr-2 mt-0.5 flex-shrink-0" />
    <span>{text}</span>
  </li>
);