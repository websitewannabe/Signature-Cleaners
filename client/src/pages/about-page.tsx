import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-[#23282F] py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              About Signature Cleaners
            </h1>
            <p className="mt-4 text-xl text-white text-opacity-90 max-w-3xl mx-auto">
              Our story, mission, and commitment to quality garment care
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
                Our Story
              </h2>
              <p className="mt-4 text-lg text-neutral-600">
                Signature Cleaners was founded by brothers Michael and Fred
                Rosen, who share over 40 years of experience in the dry cleaning
                industry. With a family legacy rooted in garment care, they
                built their business on simple values: quality service, fair
                pricing, and a commitment to customer satisfaction.
              </p>
              <p className="mt-4 text-lg text-neutral-600">
                Director of Operations, Mark Pollock, brings expert training in
                stain removal and wedding gown preservation—two of our
                specialties. Every item is treated with care, using high-end
                equipment and eco-friendly methods. Rush orders are welcome, and
                most items can be cleaned within 24 hours.
              </p>
              <p className="mt-4 text-lg text-neutral-600">
                As the area’s only member of the Dry Cleaning and Laundry
                Institute, we stay ahead with the latest in fabric care. Whether
                it's preserving a wedding gown or removing a tough stain,
                Signature Cleaners is your trusted choice for premium garment
                care.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-primary font-bold text-2xl">15+</div>
                  <div className="text-neutral-600">Years of Experience</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-primary font-bold text-2xl">10k+</div>
                  <div className="text-neutral-600">Happy Customers</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-primary font-bold text-2xl">24h</div>
                  <div className="text-neutral-600">Fast Turnaround</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-primary font-bold text-2xl">100%</div>
                  <div className="text-neutral-600">Satisfaction Guarantee</div>
                </div>
              </div>
            </div>
            <div className="mt-10 lg:mt-0">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Signature Cleaners team"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900">
              Our Mission & Values
            </h2>
            <p className="mt-4 text-lg text-neutral-600 max-w-3xl mx-auto">
              At Signature Cleaners, we're guided by a set of core principles
              that define our approach to garment care.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-[#4DA1A9] mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12"
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
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                Quality First
              </h3>
              <p className="text-neutral-600">
                We never compromise on quality. Every garment receives
                personalized attention to ensure it's returned to you in perfect
                condition.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-[#4DA1A9] mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                Environmental Responsibility
              </h3>
              <p className="text-neutral-600">
                We use eco-friendly cleaning methods and products to minimize
                our environmental footprint while delivering exceptional
                results.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-[#4DA1A9] mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                Customer Convenience
              </h3>
              <p className="text-neutral-600">
                We design our services around your busy schedule with convenient
                pickup and delivery options, online scheduling, and responsive
                customer service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900">
              Our Cleaning Process
            </h2>
            <p className="mt-4 text-lg text-neutral-600 max-w-3xl mx-auto">
              Each garment goes through a meticulous multi-step process to
              ensure the highest quality results.
            </p>
          </div>

          <div className="space-y-8">
            <ProcessStep
              number="01"
              title="Inspection"
              description="Every item is carefully examined for stains, damage, and special care instructions."
            />
            <ProcessStep
              number="02"
              title="Stain Pre-Treatment"
              description="Specialized stain removal techniques are applied to target specific types of spots and soils."
            />
            <ProcessStep
              number="03"
              title="Professional Cleaning"
              description="We use eco-friendly solvents and detergents with state-of-the-art equipment for optimal cleaning."
            />
            <ProcessStep
              number="04"
              title="Quality Control"
              description="Each garment is inspected again to ensure all stains have been removed and the item is properly cleaned."
            />
            <ProcessStep
              number="05"
              title="Finishing"
              description="Professional pressing and packaging prepare your garments to look their very best."
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900">
              Our Leadership Team
            </h2>
            <p className="mt-4 text-lg text-neutral-600 max-w-3xl mx-auto">
              Meet the experienced professionals behind our commitment to
              excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <TeamMember
              name="Robert Thompson"
              role="Founder & CEO"
              bio="With over 30 years in the industry, Robert founded Signature Cleaners with a vision for exceptional quality and service."
            />
            <TeamMember
              name="Sarah Williams"
              role="Operations Manager"
              bio="Sarah ensures our day-to-day operations run smoothly and maintains our high quality standards."
            />
            <TeamMember
              name="Michael Chen"
              role="Customer Experience Director"
              bio="Michael leads our customer service team and develops innovative ways to enhance the Signature Cleaners experience."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#790003] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Experience the Signature Cleaners Difference
          </h2>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/schedule">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-white hover:bg-[#E89212] text-black"
              >
                Schedule a Pickup
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto bg-transparent text-white border-white hover:bg-white/10"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

const ProcessStep = ({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) => (
  <div className="flex items-start">
    <div className="flex-shrink-0 bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg mr-4">
      {number}
    </div>
    <div>
      <h3 className="text-xl font-semibold text-neutral-900 mb-2">{title}</h3>
      <p className="text-neutral-600">{description}</p>
    </div>
  </div>
);

const TeamMember = ({
  name,
  role,
  bio,
}: {
  name: string;
  role: string;
  bio: string;
}) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <div className="h-64 bg-neutral-200 flex items-center justify-center">
      <div className="bg-primary text-white rounded-full w-24 h-24 flex items-center justify-center text-3xl font-bold">
        {name.charAt(0)}
      </div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold text-neutral-900">{name}</h3>
      <p className="text-primary font-medium mb-3">{role}</p>
      <p className="text-neutral-600">{bio}</p>
    </div>
  </div>
);
