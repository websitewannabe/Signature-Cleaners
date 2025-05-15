import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function LaundryDeliveryDoylestownPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <link
          rel="canonical"
          href="https://www.mysignaturecleaners.com/laundry-delivery-doylestown"
        />
        <title>Laundry & Dry Cleaning Delivery in Doylestown | Signature Cleaners</title>
        <meta
          name="description"
          content="Free pickup and delivery laundry service in Doylestown, PA. We handle dry cleaning, wash & fold, and specialty garments with convenient scheduling options."
        />
        <meta
          name="keywords"
          content="laundry pickup and delivery Doylestown, dry cleaning delivery near me, laundry service Doylestown PA, free pickup and delivery, Doylestown laundry service"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "DeliveryService",
            name: "Signature Cleaners - Doylestown Laundry Delivery",
            url: "https://www.mysignaturecleaners.com/laundry-delivery-doylestown",
            logo: "https://www.mysignaturecleaners.com/images/logo.png",
            description:
              "Free pickup and delivery laundry service in Doylestown, PA. We handle dry cleaning, wash & fold, and specialty items with convenient scheduling options.",
            areaServed: {
              "@type": "City",
              name: "Doylestown",
            },
            telephone: "+1-215-345-1470",
            serviceOutput: {
              "@type": "ServiceOutput",
              name: "Cleaned and processed laundry and dry cleaning"
            },
            availableChannel: {
              "@type": "ServiceChannel",
              serviceUrl: "https://www.mysignaturecleaners.com/schedule",
              servicePhone: "+1-215-345-1470",
              serviceSmsNumber: "+1-215-345-1470"
            },
            providerMobility: "dynamic",
            termsOfService: "https://www.mysignaturecleaners.com/legal/terms-and-conditions",
            hoursAvailable: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "07:00",
                closes: "19:00"
              },
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: "Saturday",
                opens: "08:00",
                closes: "17:00"
              }
            ]
          })}
        </script>
      </Helmet>

      <Header />

      {/* Hero Section */}
      <section className="relative py-40">
        <div className="absolute inset-0 bg-[url('/images/delivery-service.jpg')] bg-cover bg-center bg-no-repeat"></div>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mt-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Laundry & Dry Cleaning Delivery in Doylestown
            </h1>
            <p className="mt-6 text-xl text-white text-opacity-90 max-w-3xl mx-auto">
              Free pickup and delivery service throughout Doylestown and surrounding areas
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/schedule">Schedule Pickup in Doylestown</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
                <Link href="/contact-us">Contact Our Doylestown Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Doylestown's Premier Laundry Delivery Service
              </h2>
              <p className="text-lg text-white/90 mb-6">
                At Signature Cleaners, we understand that Doylestown residents lead busy lives. Our convenient pickup and delivery service brings our premium garment care directly to your door, saving you valuable time and effort.
              </p>
              <p className="text-lg text-white/90 mb-6">
                Our Doylestown delivery service handles everything from everyday laundry to specialty garments, with professional care that ensures your clothes receive the attention they deserve. Simply schedule online, and our friendly drivers will handle the rest.
              </p>

              <h3 className="text-2xl font-bold text-white mb-4 mt-8">
                Our Doylestown Delivery Service Includes
              </h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-white mt-1 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="ml-3 text-white/90">
                    <strong>Free Pickup and Delivery:</strong> No minimum order required for Doylestown addresses
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-white mt-1 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="ml-3 text-white/90">
                    <strong>Wide Service Area:</strong> Covering all of Doylestown Borough, Doylestown Township, and surrounding communities
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-white mt-1 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="ml-3 text-white/90">
                    <strong>Convenient Scheduling:</strong> Easy online booking with flexible time slots to fit your Doylestown lifestyle
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-white mt-1 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="ml-3 text-white/90">
                    <strong>Full-Service Options:</strong> Dry cleaning, wash & fold, household items, and specialty garments
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-white mt-1 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="ml-3 text-white/90">
                    <strong>Digital Notifications:</strong> Real-time updates on your order status via text or email
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-white mt-1 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="ml-3 text-white/90">
                    <strong>Secure Handling:</strong> Professional drivers with specialized garment handling training
                  </span>
                </li>
              </ul>
              <div className="mt-8">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/schedule">Schedule Doylestown Delivery Service</Link>
                </Button>
              </div>
            </div>
            <div className="bg-neutral-100 rounded-lg p-8">
              <div className="mb-6 text-center">
                <h3 className="text-2xl font-bold text-neutral-900">How Our Doylestown Delivery Works</h3>
                <p className="text-neutral-600 mt-2">Simple, convenient service for busy Doylestown residents</p>
              </div>
              <div className="space-y-8">
                <div className="relative">
                  <div className="absolute -left-4 top-1/2 -translate-y-1/2 bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">1</div>
                  <div className="pl-8">
                    <h4 className="font-semibold text-neutral-900 text-lg">Schedule Pickup</h4>
                    <p className="text-neutral-600 mt-1">Book your Doylestown pickup online or through our app. Select your preferred date and time window.</p>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="absolute -left-4 top-1/2 -translate-y-1/2 bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">2</div>
                  <div className="pl-8">
                    <h4 className="font-semibold text-neutral-900 text-lg">We Collect Your Items</h4>
                    <p className="text-neutral-600 mt-1">Our Doylestown driver arrives during your selected time window to collect your garments.</p>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="absolute -left-4 top-1/2 -translate-y-1/2 bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">3</div>
                  <div className="pl-8">
                    <h4 className="font-semibold text-neutral-900 text-lg">Professional Cleaning</h4>
                    <p className="text-neutral-600 mt-1">Your items receive expert care at our Doylestown facility using appropriate cleaning methods.</p>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="absolute -left-4 top-1/2 -translate-y-1/2 bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">4</div>
                  <div className="pl-8">
                    <h4 className="font-semibold text-neutral-900 text-lg">Delivery Notification</h4>
                    <p className="text-neutral-600 mt-1">You'll receive an alert when your order is ready for delivery to your Doylestown location.</p>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="absolute -left-4 top-1/2 -translate-y-1/2 bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">5</div>
                  <div className="pl-8">
                    <h4 className="font-semibold text-neutral-900 text-lg">Convenient Delivery</h4>
                    <p className="text-neutral-600 mt-1">We return your freshly cleaned items to your Doylestown home or office during your selected time window.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 border-t border-neutral-200 pt-6">
                <h4 className="font-semibold text-neutral-900 mb-2">Doylestown Delivery Schedule</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-medium text-neutral-900">Pickup Days</h5>
                    <ul className="mt-1 space-y-1 text-neutral-600 text-sm">
                      <li>• Monday - Friday</li>
                      <li>• 7:00 AM - 7:00 PM</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-neutral-900">Delivery Days</h5>
                    <ul className="mt-1 space-y-1 text-neutral-600 text-sm">
                      <li>• Monday - Saturday</li>
                      <li>• 7:00 AM - 7:00 PM</li>
                    </ul>
                  </div>
                </div>
                <p className="text-neutral-600 text-sm mt-3">*Saturday pickup available for premium account members</p>
              </div>
              
              <div className="mt-6">
                <Button className="w-full bg-primary hover:bg-primary/90" size="lg" asChild>
                  <Link href="/schedule">Schedule Your First Pickup</Link>
                </Button>
                <p className="text-center text-neutral-600 text-sm mt-2">New customers receive 15% off their first order!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Map Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#F8F5F0]">
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(70%_50%_at_50%_50%,#fff_0%,transparent_100%)]"></div>
          <div className="absolute inset-0 opacity-25 bg-[repeating-linear-gradient(45deg,transparent,transparent_50px,rgba(0,0,0,0.05)_50px,rgba(0,0,0,0.05)_100px)]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(248,245,240,0.1)_0%,rgba(248,245,240,0.2)_100%)]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
              Our Doylestown Delivery Service Area
            </h2>
            <p className="mt-4 text-xl text-neutral-600 max-w-3xl mx-auto">
              Free pickup and delivery throughout these Doylestown areas
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="aspect-video w-full mb-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.482010904663!2d-75.15086792397547!3d40.189290671502185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6a858a3fdc5bb%3A0xf09ea81c7bc38535!2sSignature%20Cleaners!5e0!3m2!1sen!2sus!4v1714582748851!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <p className="text-neutral-600 text-sm italic text-center">Signature Cleaners at 1456 Ferry Rd UNIT 100, Doylestown, PA 18901</p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">Areas We Serve in Doylestown</h3>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-neutral-900 mb-2">Primary Service Areas</h4>
                  <ul className="space-y-2 text-neutral-600">
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Doylestown Borough
                    </li>
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Doylestown Township
                    </li>
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Chalfont
                    </li>
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      New Britain
                    </li>
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Plumsteadville
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-neutral-900 mb-2">Extended Service Areas</h4>
                  <ul className="space-y-2 text-neutral-600">
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Buckingham
                    </li>
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Warrington
                    </li>
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Warwick
                    </li>
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Jamison
                    </li>
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Dublin
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 bg-primary/10 p-4 rounded-md">
                <h4 className="font-semibold text-neutral-900 mb-2">Not in our service area?</h4>
                <p className="text-neutral-700">If you're outside our standard Doylestown delivery zones, please contact us to discuss custom delivery options. We're constantly expanding our service area to meet customer needs.</p>
                <div className="mt-4">
                  <Button asChild variant="outline" className="bg-transparent border-primary text-primary hover:bg-primary/5">
                    <Link href="/contact-us">Request Service in Your Area</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              What Doylestown Customers Say About Our Delivery Service
            </h2>
            <p className="mt-4 text-xl text-white/80 max-w-3xl mx-auto">
              Hear from local Doylestown residents who use our pickup and delivery
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <div className="h-12 w-12 rounded-full bg-neutral-200 flex items-center justify-center text-neutral-800 font-bold">
                    AJ
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold">Alex Johnson</h4>
                  <p className="text-sm text-white/70">Doylestown Borough</p>
                </div>
              </div>
              <p className="text-white/80">
                "As a busy professional in Doylestown, the pickup and delivery service from Signature Cleaners is a game-changer. Their drivers are always on time, and they handle my business attire with care. I love getting the text notifications when they're on the way. This service has easily saved me hours each week!"
              </p>
              <div className="mt-4 flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <div className="h-12 w-12 rounded-full bg-neutral-200 flex items-center justify-center text-neutral-800 font-bold">
                    SW
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold">Sarah Wilson</h4>
                  <p className="text-sm text-white/70">Doylestown Township</p>
                </div>
              </div>
              <p className="text-white/80">
                "With three kids in sports, our laundry was overwhelming until we discovered Signature Cleaners' delivery service. The drivers are friendly and know our family by name. They're very accommodating with our schedule, and the quality of the wash & fold service is consistently excellent. It's truly been a lifesaver for our busy Doylestown family!"
              </p>
              <div className="mt-4 flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <div className="h-12 w-12 rounded-full bg-neutral-200 flex items-center justify-center text-neutral-800 font-bold">
                    MG
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold">Michael Greenfield</h4>
                  <p className="text-sm text-white/70">Doylestown</p>
                </div>
              </div>
              <p className="text-white/80">
                "I work from home in Doylestown but still need professional cleaning for my business attire. Signature Cleaners makes it easy with their delivery service. I schedule everything through their app, and their pickup/delivery windows are always accurate. Their garment bags keep everything organized, and I appreciate their attention to special care instructions."
              </p>
              <div className="mt-4 flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#F8F5F0]">
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(70%_50%_at_50%_50%,#fff_0%,transparent_100%)]"></div>
          <div className="absolute inset-0 opacity-25 bg-[repeating-linear-gradient(45deg,transparent,transparent_50px,rgba(0,0,0,0.05)_50px,rgba(0,0,0,0.05)_100px)]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(248,245,240,0.1)_0%,rgba(248,245,240,0.2)_100%)]"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-xl text-neutral-600 max-w-3xl mx-auto">
              Common questions about our Doylestown delivery service
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left">
                Is there a minimum order requirement for free delivery in Doylestown?
              </AccordionTrigger>
              <AccordionContent>
                No, there is no minimum order requirement for free pickup and delivery within our Doylestown service area. Whether you have a single garment or multiple bags of laundry, our delivery service is always complimentary for Doylestown addresses. We believe convenient service should be accessible to everyone, regardless of order size.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left">
                How does the Doylestown pickup and delivery process work?
              </AccordionTrigger>
              <AccordionContent>
                Our Doylestown pickup and delivery process is designed for simplicity. Schedule through our website or app, selecting your preferred pickup and delivery time windows. Our driver will arrive during your chosen time slots to collect and later return your items. You'll receive notification texts or emails when your driver is en route. You don't need to be home for pickup or delivery—simply leave items in a designated location and provide instructions when scheduling.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left">
                What is the turnaround time for delivery service in Doylestown?
              </AccordionTrigger>
              <AccordionContent>
                Our standard turnaround time for Doylestown delivery service is 2-3 business days. For example, items picked up on Monday will typically be delivered by Wednesday or Thursday. We also offer rush service options for an additional fee, including same-day and next-day service for certain items when picked up before 9:00 AM. Special items like wedding gowns, household linens, or heavily stained garments may require additional processing time.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left">
                How do I pay for delivery service in Doylestown?
              </AccordionTrigger>
              <AccordionContent>
                We offer several convenient payment options for our Doylestown delivery customers. You can set up automatic credit card payments through our secure system, where your card will be charged only after your order is processed. Many customers create an account with a card on file for hassle-free service. We also offer contactless payment options at delivery. For recurring service, monthly invoicing is available for established customers.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left">
                What if I'm not home during my Doylestown delivery window?
              </AccordionTrigger>
              <AccordionContent>
                No problem! Many of our Doylestown customers aren't home during delivery. When scheduling, you can provide special instructions for pickup and drop-off locations (front porch, side door, etc.). Our garment bags protect your items from the elements. You can also specify if you need our driver to ring your doorbell, text upon arrival, or simply leave items in your designated spot. Security is important to us, and all deliveries are photographed for verification.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Call To Action */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Reclaim Your Time with Doylestown's Premier Delivery Service
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
            Join hundreds of satisfied Doylestown residents who have simplified their lives with our free pickup and delivery
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/schedule">Schedule Your First Pickup</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
              <Link href="/contact-us">Contact Our Doylestown Team</Link>
            </Button>
          </div>
          <p className="mt-4 text-white/70">New customers receive 15% off their first order!</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}