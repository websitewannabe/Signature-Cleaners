import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <link
          rel="canonical"
          href="https://www.mysignaturecleaners.com/about-us"
        />
        <title>About Us | Signature Cleaners in Doylestown, PA</title>
        <meta
          name="description"
          content="Learn more about Signature Cleaners, our history, team, and commitment to high-quality dry cleaning and garment care services in Bucks County."
        />
        <meta
          name="keywords"
          content="about Signature Cleaners, dry cleaning experts, Doylestown garment care, Bucks County laundry service, wedding gown cleaning, stain removal professionals"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Signature Cleaners",
            url: "https://signaturecleaners.com/about",
            image: "https://signaturecleaners.com/src/images/theTeam.jpg",
            logo: "https://signaturecleaners.com/src/images/logo.png",
            description:
              "Signature Cleaners is a trusted garment care provider in Bucks County, offering expert dry cleaning, tailoring, shoe repair, and preservation services.",
            address: {
              "@type": "PostalAddress",
              streetAddress: "1456 Ferry Road #10",
              addressLocality: "Doylestown",
              addressRegion: "PA",
              postalCode: "18901",
              addressCountry: "US",
            },
            telephone: "+1-215-345-1470",
            founder: {
              "@type": "Person",
              name: "Robert Thompson",
            },
            employee: [
              {
                "@type": "Person",
                name: "Sarah Williams",
                jobTitle: "Operations Manager",
              },
              {
                "@type": "Person",
                name: "Michael Chen",
                jobTitle: "Customer Experience Director",
              },
            ],
            areaServed: {
              "@type": "Place",
              name: [
                "Doylestown",
                "New Hope",
                "Jamison",
                "Warrington",
                "Perkasie",
                "Yardley",
              ],
            },
          })}
        </script>
      </Helmet>

      <Header />

      {/* About Content */}
      <section className="py-40 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#F8F5F0]">
          {/* Primary radial gradient for soft light effect */}
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(70%_50%_at_50%_50%,#fff_0%,transparent_100%)]"></div>

          {/* Parallel diagonal streaks */}
          <div className="absolute inset-0 opacity-25 bg-[repeating-linear-gradient(45deg,transparent,transparent_50px,rgba(0,0,0,0.05)_50px,rgba(0,0,0,0.05)_100px)]"></div>

          {/* Soft overlay gradient */}
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(248,245,240,0.1)_0%,rgba(248,245,240,0.2)_100%)]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <h1 className="text-4xl md:text-6xl font-bold text-[#790003] text-center mb-16">
            Our Story
          </h1>
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div>
              <p className="mt-4 text-lg text-black/80">
                Signature Cleaners was founded on simple principles: provide a
                quality product, deliver excellent customer service, and offer
                fair pricing. With decades of experience in the industry, the
                team brings a deep understanding of fabric care and stain
                removal, including specialties like wedding gown cleaning and
                preservation. Every garment is treated with personal care and
                attention using top-of-the-line equipment to ensure the highest
                standards of cleanliness and presentation.
              </p>
              <p className="mt-4 text-lg text-black/80">
                Signature Cleaners welcomes rush orders and never makes promises
                they can’t keep. Most items can be turned around in under 24
                hours, and if more time is needed, customers are notified
                immediately. Wedding gowns are preserved using museum-quality
                techniques designed to maintain their condition for years to
                come—ensuring that cherished garments stay as beautiful as the
                day they were worn.
              </p>
              <p className="mt-4 text-lg text-black/80">
                As the only member of the Dry Cleaning and Laundry Institute in
                the area, Signature Cleaners stays current on the latest fabrics
                and care methods. The team is always seeking new ways to improve
                their services, from adopting more efficient equipment to
                refining cleaning techniques. With three convenient locations,
                Signature Cleaners offers a full range of garment care
                services—from dry cleaning and tailoring to stain removal and
                shoe repair—with unmatched reliability and results.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-primary font-bold text-2xl">20+</div>
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
                  <div className="text-primary font-bold text-2xl">10+</div>
                  <div className="text-neutral-600">Cleaning Services</div>
                </div>
              </div>
            </div>
            <div className="mt-10 lg:mt-0">
              <div
                className="h-[600px] w-full bg-[url('/images/theTeam.jpg')] bg-cover bg-center bg-no-repeat rounded-lg shadow-lg"
                role="img"
                aria-label="Signature Cleaners team"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 bg-[#790003]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">
              Our Mission & Values
            </h2>
            <p className="mt-4 text-lg text-white/80 max-w-3xl mx-auto">
              At Signature Cleaners, we're guided by a set of core principles
              that define our approach to garment care.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-[#790003] mb-4">
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
              <div className="text-[#790003] mb-4">
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
              <div className="text-[#790003] mb-4">
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
      <section className="py-16 bg-[#181818]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">
              Our Cleaning Process
            </h2>
            <p className="mt-4 text-lg text-white/80 max-w-3xl mx-auto">
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
      {/* <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#F8F5F0]"> */}
      {/* Primary radial gradient for soft light effect */}
      {/* <div className="absolute inset-0 opacity-30 bg-[radial-gradient(70%_50%_at_50%_50%,#fff_0%,transparent_100%)]"></div> */}

      {/* Parallel diagonal streaks */}
      {/* <div className="absolute inset-0 opacity-25 bg-[repeating-linear-gradient(45deg,transparent,transparent_50px,rgba(0,0,0,0.05)_50px,rgba(0,0,0,0.05)_100px)]"></div> */}

      {/* Soft overlay gradient */}
      {/* <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(248,245,240,0.1)_0%,rgba(248,245,240,0.2)_100%)]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
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
      </section> */}

      {/* CTA Section */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-[url('/src/images/Background.png')] bg-cover bg-center bg-no-repeat"></div>
        <div className="absolute inset-0 bg-[#790003]/80"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Ready to simplify your laundry routine?
          </h2>
          <Link href="/all-services/all-services">
            <Button
              size="lg"
              className="bg-white hover:bg-[#F6AE2D] text-black px-12 py-6 text-lg"
            >
              View our Services
            </Button>
          </Link>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-16 bg-[#181818]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">
              Locations We Pick Up & Deliver
            </h2>
            <p className="mt-4 text-lg text-white max-w-3xl mx-auto">
              We service the following areas in Bucks County and surrounding
              regions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="bg-neutral-200 rounded-lg overflow-hidden h-[400px] shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d194626.6239363241!2d-75.43258756718754!3d40.3414365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c402caed310f67%3A0x4739bde141ae22d1!2sSignature%20Cleaners%20at%20Doylestown!5e0!3m2!1sen!2sus!4v1747319798707!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="rounded-lg p-8 h-[400px] overflow-y-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-2">
                <div className="space-y-2">
                  <p className="text-white flex items-center">
                    <span className="mr-2">•</span>Buckingham
                  </p>
                  <p className="text-white flex items-center">
                    <span className="mr-2">•</span>Carversville
                  </p>
                  <p className="text-white flex items-center">
                    <span className="mr-2">•</span>Chalfont
                  </p>
                  <Link
                    href="/doylestown"
                    className="text-white hover:text-[#F6AE2D] transition-colors flex items-center"
                  >
                    <span className="mr-2">•</span>Doylestown
                  </Link>
                  <p className="text-white flex items-center">
                    <span className="mr-2">•</span>Dublin
                  </p>
                  <p className="text-white flex items-center">
                    <span className="mr-2">•</span>Fountainville
                  </p>
                  <p className="text-white flex items-center">
                    <span className="mr-2">•</span>Furlong
                  </p>
                  <p className="text-white flex items-center">
                    <span className="mr-2">•</span>Holland
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-white flex items-center">
                    <span className="mr-2">•</span>Ivyland
                  </p>
                  <p className="text-white flex items-center">
                    <span className="mr-2">•</span>Jamison
                  </p>
                  <p className="text-white flex items-center">
                    <span className="mr-2">•</span>Lahaska
                  </p>
                  <p className="text-white flex items-center">
                    <span className="mr-2">•</span>Morrisville
                  </p>
                  <p className="text-white flex items-center">
                    <span className="mr-2">•</span>New Hope
                  </p>
                  <p className="text-white flex items-center">
                    <span className="mr-2">•</span>Newtown
                  </p>
                  <p className="text-white flex items-center">
                    <span className="mr-2">•</span>Ottsville
                  </p>
                  <p className="text-white flex items-center">
                    <span className="mr-2">•</span>Perkasie
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-white flex items-center">
                    <span className="mr-2">•</span>Pipersville
                  </p>
                  <p className="text-white flex items-center">
                    <span className="mr-2">•</span>Point Pleasant
                  </p>
                  <p className="text-white flex items-center">
                    <span className="mr-2">•</span>Richboro
                  </p>
                  <p className="text-white flex items-center">
                    <span className="mr-2">•</span>Southampton
                  </p>
                  <p className="text-white flex items-center">
                    <span className="mr-2">•</span>Trevose
                  </p>
                  <p className="text-white flex items-center">
                    <span className="mr-2">•</span>Warminster
                  </p>
                  <p className="text-white flex items-center">
                    <span className="mr-2">•</span>Warrington
                  </p>
                  <p className="text-white flex items-center">
                    <span className="mr-2">•</span>Washington Crossing
                  </p>
                  <p className="text-white flex items-center">
                    <span className="mr-2">•</span>Yardley
                  </p>
                </div>
              </div>
            </div>
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
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-white/80">{description}</p>
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
