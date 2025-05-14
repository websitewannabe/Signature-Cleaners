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

export default function WashAndFoldDoylestownPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <link
          rel="canonical"
          href="https://www.mysignaturecleaners.com/wash-and-fold-doylestown"
        />
        <title>Wash & Fold Laundry Service in Doylestown | Signature Cleaners</title>
        <meta
          name="description"
          content="Professional wash and fold laundry service in Doylestown, PA. We offer convenient pickup and delivery, quality cleaning, and expert handling of all your garments."
        />
        <meta
          name="keywords"
          content="laundry service Doylestown, drop off laundry near me, wash and fold Doylestown, laundry pickup Doylestown PA, Doylestown laundry delivery"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LaundryService",
            name: "Signature Cleaners - Doylestown Wash & Fold Service",
            url: "https://www.mysignaturecleaners.com/wash-and-fold-doylestown",
            logo: "https://www.mysignaturecleaners.com/images/logo.png",
            description:
              "Professional wash and fold laundry service in Doylestown, offering convenient pickup and delivery, quality cleaning, and expert handling of all your garments.",
            address: {
              "@type": "PostalAddress",
              streetAddress: "123 Main Street",
              addressLocality: "Doylestown",
              addressRegion: "PA",
              postalCode: "18901",
              addressCountry: "US",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 40.3101,
              longitude: -75.1298
            },
            telephone: "+1-215-345-1470",
            openingHoursSpecification: [
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
            ],
            priceRange: "$$",
            areaServed: {
              "@type": "City",
              name: "Doylestown",
            },
            sameAs: [
              "https://www.facebook.com/signaturecleaners",
              "https://www.instagram.com/signaturecleaners"
            ]
          })}
        </script>
      </Helmet>

      <Header />

      {/* Hero Section */}
      <section className="relative py-40">
        <div className="absolute inset-0 bg-[url('/images/wash-fold-service.jpg')] bg-cover bg-center bg-no-repeat"></div>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mt-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Wash & Fold Laundry Service in Doylestown
            </h1>
            <p className="mt-6 text-xl text-white text-opacity-90 max-w-3xl mx-auto">
              Leave your laundry to the professionals - washed, dried, and perfectly folded
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
                Doylestown's Trusted Wash & Fold Laundry Service
              </h2>
              <p className="text-lg text-white/90 mb-6">
                At Signature Cleaners, we understand that Doylestown residents lead busy lives. Our professional wash and fold laundry service gives you back precious time while ensuring your clothes receive expert care and attention.
              </p>
              <p className="text-lg text-white/90 mb-6">
                Our Doylestown facility uses premium detergents, fabric softeners, and state-of-the-art equipment to clean your everyday laundry to perfection. From sorting and pre-treating to washing, drying, and precise folding – we handle it all with meticulous care.
              </p>

              <h3 className="text-2xl font-bold text-white mb-4 mt-8">
                Our Doylestown Wash & Fold Process
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
                    <strong>Sorting & Inspection:</strong> We carefully sort your laundry by color, fabric type, and washing requirements, inspecting for stains or special care needs.
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
                    <strong>Pre-Treatment:</strong> Any spots or stains are pre-treated with appropriate solutions before washing.
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
                    <strong>Washing:</strong> Using premium detergents and the right temperature for each fabric type, we wash your items to perfection.
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
                    <strong>Drying:</strong> We carefully monitor drying temperatures to prevent shrinkage and preserve fabric quality.
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
                    <strong>Professional Folding:</strong> Every item is meticulously folded according to professional standards, ready to place directly in your drawers.
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
                    <strong>Free Doylestown Delivery:</strong> We conveniently deliver your freshly laundered items right to your Doylestown doorstep.
                  </span>
                </li>
              </ul>
              <div className="mt-8">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/schedule">Schedule Laundry Service in Doylestown</Link>
                </Button>
              </div>
            </div>
            <div className="bg-neutral-100 rounded-lg p-8">
              <div className="mb-6 text-center">
                <h3 className="text-2xl font-bold text-neutral-900">Doylestown Wash & Fold Pricing</h3>
                <p className="text-neutral-600 mt-2">Simple, transparent pricing for Doylestown residents</p>
              </div>
              <div className="space-y-6">
                <div className="border-b border-neutral-200 pb-4">
                  <div className="flex justify-between mb-2">
                    <h4 className="text-lg font-semibold text-neutral-900">Standard Wash & Fold</h4>
                    <span className="text-primary font-semibold">$2.25/lb</span>
                  </div>
                  <p className="text-neutral-600">Includes washing, drying, and professional folding of everyday clothing items</p>
                  <ul className="mt-2 space-y-1 text-neutral-600 text-sm">
                    <li>• T-shirts, underwear, socks</li>
                    <li>• Casual pants, shorts, jeans</li>
                    <li>• Pajamas, loungewear</li>
                    <li>• Towels, washcloths</li>
                    <li>• Sheets, pillowcases</li>
                  </ul>
                </div>
                
                <div className="border-b border-neutral-200 pb-4">
                  <div className="flex justify-between mb-2">
                    <h4 className="text-lg font-semibold text-neutral-900">Delicate Wash & Fold</h4>
                    <span className="text-primary font-semibold">$3.50/lb</span>
                  </div>
                  <p className="text-neutral-600">Special care for more delicate fabrics requiring gentle handling</p>
                  <ul className="mt-2 space-y-1 text-neutral-600 text-sm">
                    <li>• Dress shirts (hung, not folded)</li>
                    <li>• Blouses</li>
                    <li>• Sweaters</li>
                    <li>• Performance athletic wear</li>
                    <li>• Delicate fabrics</li>
                  </ul>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <h4 className="text-lg font-semibold text-neutral-900">Additional Services</h4>
                  </div>
                  <ul className="mt-2 space-y-2 text-neutral-600">
                    <li className="flex justify-between">
                      <span>Free Pickup & Delivery in Doylestown</span>
                      <span className="font-semibold">Included</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Stain Treatment</span>
                      <span className="font-semibold">Included</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Fabric Softener</span>
                      <span className="font-semibold">Included</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Rush Service (24hr)</span>
                      <span className="font-semibold">+25%</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-6 bg-primary/10 p-4 rounded-md">
                  <h4 className="font-semibold text-neutral-900 mb-2">Special Offer for Doylestown Residents</h4>
                  <p className="text-neutral-700">First-time customers receive 15% off their first wash & fold order with free pickup and delivery in Doylestown!</p>
                </div>
              </div>
              <div className="mt-6">
                <Button className="w-full bg-primary hover:bg-primary/90" size="lg" asChild>
                  <Link href="/schedule">Schedule Pickup in Doylestown</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#F8F5F0]">
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(70%_50%_at_50%_50%,#fff_0%,transparent_100%)]"></div>
          <div className="absolute inset-0 opacity-25 bg-[repeating-linear-gradient(45deg,transparent,transparent_50px,rgba(0,0,0,0.05)_50px,rgba(0,0,0,0.05)_100px)]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(248,245,240,0.1)_0%,rgba(248,245,240,0.2)_100%)]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
              Benefits of Our Doylestown Wash & Fold Service
            </h2>
            <p className="mt-4 text-xl text-neutral-600 max-w-3xl mx-auto">
              Why busy Doylestown residents trust us with their laundry
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">Save Valuable Time</h3>
              <p className="text-neutral-600">
                Our Doylestown wash and fold service saves the average household 5-7 hours per week on laundry tasks. Let us handle the sorting, washing, drying, and folding while you focus on what matters most to you.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">Professional Results</h3>
              <p className="text-neutral-600">
                Our Doylestown laundry professionals have the expertise and commercial-grade equipment to deliver cleaner, fresher clothes than home washing. We properly sort, pre-treat stains, and use the right detergents for each fabric type.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">Perfectly Folded</h3>
              <p className="text-neutral-600">
                Experience the satisfaction of professionally folded laundry. Our Doylestown team meticulously folds each item to perfection, creating uniform stacks that make putting away laundry quick and easy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              What Doylestown Customers Say About Our Wash & Fold
            </h2>
            <p className="mt-4 text-xl text-white/80 max-w-3xl mx-auto">
              Real reviews from local Doylestown residents
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <div className="h-12 w-12 rounded-full bg-neutral-200 flex items-center justify-center text-neutral-800 font-bold">
                    ST
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold">Sarah Thompson</h4>
                  <p className="text-sm text-white/70">Doylestown</p>
                </div>
              </div>
              <p className="text-white/80">
                "As a busy mom of three in Doylestown, the wash and fold service from Signature Cleaners has been life-changing. Their pickup and delivery is always on time, and my laundry comes back perfectly clean and folded better than I could ever do myself. Worth every penny!"
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
                    MJ
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold">Michael Johnson</h4>
                  <p className="text-sm text-white/70">Doylestown Township</p>
                </div>
              </div>
              <p className="text-white/80">
                "I'm a single professional living in Doylestown Township who hates doing laundry. Signature Cleaners' wash and fold service is reliable, affordable, and incredibly convenient. They remember my preferences, and I love that they use environmentally friendly products. Highly recommend to anyone in the Doylestown area!"
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
                    EW
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold">Emily Wilson</h4>
                  <p className="text-sm text-white/70">Doylestown</p>
                </div>
              </div>
              <p className="text-white/80">
                "After trying several laundry services in Doylestown, Signature Cleaners stands out for their attention to detail. They've removed stains I thought were permanent and treat each item with such care. Everything comes back folded perfectly - I just put it straight in my drawers. Their pickup driver is always friendly and punctual too!"
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
              Common questions about our Doylestown wash & fold service
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left">
                How does your Doylestown wash & fold service work?
              </AccordionTrigger>
              <AccordionContent>
                Our wash & fold service is simple: schedule a pickup through our website or app, and our Doylestown team will collect your laundry at your chosen time. We sort, wash, dry, and fold everything according to professional standards. Within 2-3 days (or sooner with rush service), we'll deliver your freshly cleaned laundry back to your Doylestown home or office, perfectly folded and ready to put away.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left">
                How is pricing calculated for Doylestown wash & fold service?
              </AccordionTrigger>
              <AccordionContent>
                Our Doylestown wash & fold service is priced by weight, with standard items at $2.25/lb and delicate items at $3.50/lb. We weigh your laundry after it's been cleaned and dried to ensure accurate pricing. There's a 10 lb minimum per order, but most households easily meet this with a week's worth of laundry. Pickup and delivery throughout Doylestown is completely free of charge.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left">
                What detergents do you use for Doylestown customers?
              </AccordionTrigger>
              <AccordionContent>
                For our Doylestown wash & fold service, we use high-quality, eco-friendly detergents that are effective yet gentle on fabrics and skin. We offer fragrance-free options for sensitive skin and can accommodate special requests. If you have a preferred detergent due to allergies or personal preference, let us know and we can use your provided detergent at no extra charge.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left">
                Do you separate colors in your Doylestown facility?
              </AccordionTrigger>
              <AccordionContent>
                Absolutely! At our Doylestown facility, we professionally sort all laundry by color, fabric type, and washing temperature before cleaning. We separate whites, lights, darks, and delicates to prevent color bleeding and ensure optimal cleaning results. All items are treated according to care labels and fabric requirements for the best possible results.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left">
                How should I prepare my laundry for pickup in Doylestown?
              </AccordionTrigger>
              <AccordionContent>
                For Doylestown pickups, simply place your laundry in any bag or hamper – we'll transfer it to our laundry bags when we arrive. Please remove any non-washable items, check pockets for personal items, and inform us of any stains or special care instructions. If you have delicate items that need special attention, place them in a separate bag with a note. Our Doylestown team will handle the rest!
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Call To Action */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Save Time on Laundry in Doylestown?
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
            Join hundreds of satisfied Doylestown customers who have reclaimed their time with our wash & fold service
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/schedule">Schedule Pickup in Doylestown</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
              <Link href="/contact-us">Contact Our Doylestown Team</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}