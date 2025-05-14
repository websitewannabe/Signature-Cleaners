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

export default function HouseholdCleaningDoylestownPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <link
          rel="canonical"
          href="https://www.mysignaturecleaners.com/household-cleaning-doylestown"
        />
        <title>Household Fabric Cleaning in Doylestown, PA | Signature Cleaners</title>
        <meta
          name="description"
          content="Professional cleaning services for household fabrics and textiles in Doylestown, PA. We clean comforters, drapes, area rugs, tablecloths and more."
        />
        <meta
          name="keywords"
          content="household cleaning Doylestown, comforter cleaning Doylestown PA, drapery cleaning Doylestown, rug cleaning, tablecloth cleaning, household fabrics"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CleaningService",
            name: "Signature Cleaners - Doylestown Household Fabric Cleaning",
            url: "https://www.mysignaturecleaners.com/household-cleaning-doylestown",
            logo: "https://www.mysignaturecleaners.com/images/logo.png",
            description:
              "Professional cleaning services for household fabrics and textiles in Doylestown, PA including comforters, drapes, area rugs, tablecloths and more.",
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
        <div className="absolute inset-0 bg-[url('/images/household-cleaning.jpg')] bg-cover bg-center bg-no-repeat"></div>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mt-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Household Fabric Cleaning in Doylestown, PA
            </h1>
            <p className="mt-6 text-xl text-white text-opacity-90 max-w-3xl mx-auto">
              Professional cleaning for comforters, drapes, rugs, and more throughout Doylestown
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
                Doylestown's Trusted Household Fabric Cleaning Specialists
              </h2>
              <p className="text-lg text-white/90 mb-6">
                At Signature Cleaners, we extend our fabric care expertise beyond clothing to the essential textiles that make your Doylestown home comfortable and beautiful. From bulky comforters to delicate drapes, our specialized cleaning processes restore freshness and extend the life of your valuable household items.
              </p>
              <p className="text-lg text-white/90 mb-6">
                Our Doylestown location is equipped with commercial-grade equipment designed to handle oversized and specialty items that standard home washing machines simply can't accommodate. We use environmentally friendly cleaning agents and processes tailored to each specific fabric type and soil level.
              </p>

              <h3 className="text-2xl font-bold text-white mb-4 mt-8">
                Household Items We Clean in Doylestown
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
                    <strong>Bedding:</strong> Comforters, duvets, bedspreads, blankets, quilts, and pillow shams
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
                    <strong>Window Treatments:</strong> Drapes, curtains, valances, and fabric blinds
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
                    <strong>Table Linens:</strong> Tablecloths, runners, napkins, and placemats
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
                    <strong>Area Rugs:</strong> Cotton, synthetic, and wool rugs up to 9'x12'
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
                    <strong>Upholstery Covers:</strong> Removable sofa covers, cushion covers, and slipcovers
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
                    <strong>Specialty Items:</strong> Decorative pillows, tapestries, throws, and fabric wall hangings
                  </span>
                </li>
              </ul>
              <div className="mt-8">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/schedule">Schedule Household Cleaning Pickup in Doylestown</Link>
                </Button>
              </div>
            </div>
            <div className="bg-neutral-100 rounded-lg p-8">
              <div className="mb-6 text-center">
                <h3 className="text-2xl font-bold text-neutral-900">Doylestown Household Cleaning Pricing</h3>
                <p className="text-neutral-600 mt-2">Transparent pricing for all your household fabric needs</p>
              </div>
              <div className="space-y-6">
                <div className="border-b border-neutral-200 pb-4">
                  <div className="flex justify-between mb-2">
                    <h4 className="text-lg font-semibold text-neutral-900">Bedding</h4>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span className="text-neutral-600">Twin Comforter/Blanket</span>
                      <span className="font-semibold text-neutral-900">$30 - $40</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-neutral-600">Full/Queen Comforter</span>
                      <span className="font-semibold text-neutral-900">$45 - $55</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-neutral-600">King Comforter</span>
                      <span className="font-semibold text-neutral-900">$55 - $65</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-neutral-600">Duvet Cover</span>
                      <span className="font-semibold text-neutral-900">$30 - $45</span>
                    </li>
                  </ul>
                </div>
                
                <div className="border-b border-neutral-200 pb-4">
                  <div className="flex justify-between mb-2">
                    <h4 className="text-lg font-semibold text-neutral-900">Window Treatments</h4>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span className="text-neutral-600">Curtain Panel (basic)</span>
                      <span className="font-semibold text-neutral-900">$18 - $25</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-neutral-600">Drapes (per panel)</span>
                      <span className="font-semibold text-neutral-900">$25 - $40</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-neutral-600">Sheers (per panel)</span>
                      <span className="font-semibold text-neutral-900">$15 - $22</span>
                    </li>
                  </ul>
                </div>
                
                <div className="border-b border-neutral-200 pb-4">
                  <div className="flex justify-between mb-2">
                    <h4 className="text-lg font-semibold text-neutral-900">Table Linens</h4>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span className="text-neutral-600">Tablecloth (small/med)</span>
                      <span className="font-semibold text-neutral-900">$20 - $30</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-neutral-600">Tablecloth (large)</span>
                      <span className="font-semibold text-neutral-900">$35 - $50</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-neutral-600">Napkins (each)</span>
                      <span className="font-semibold text-neutral-900">$3 - $5</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <h4 className="text-lg font-semibold text-neutral-900">Area Rugs & Specialty</h4>
                  </div>
                  <p className="text-neutral-600 text-sm mb-2">Pricing varies based on size, material, and cleaning requirements. Please contact our Doylestown location for a custom quote.</p>
                </div>

                <div className="mt-6 bg-primary/10 p-4 rounded-md">
                  <h4 className="font-semibold text-neutral-900 mb-2">Doylestown Service Guarantee</h4>
                  <p className="text-neutral-700">All household items are cleaned and handled with the same care and attention to detail as your finest garments. If you're not completely satisfied, we'll reclean the item at no additional charge.</p>
                </div>
              </div>
              <div className="mt-6">
                <Button className="w-full bg-primary hover:bg-primary/90" size="lg" asChild>
                  <Link href="/contact-us">Get a Custom Quote</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#F8F5F0]">
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(70%_50%_at_50%_50%,#fff_0%,transparent_100%)]"></div>
          <div className="absolute inset-0 opacity-25 bg-[repeating-linear-gradient(45deg,transparent,transparent_50px,rgba(0,0,0,0.05)_50px,rgba(0,0,0,0.05)_100px)]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(248,245,240,0.1)_0%,rgba(248,245,240,0.2)_100%)]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
              Our Doylestown Household Cleaning Process
            </h2>
            <p className="mt-4 text-xl text-neutral-600 max-w-3xl mx-auto">
              How we clean and care for your valuable household textiles
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mt-12">
            <div className="relative">
              <div className="absolute -top-4 -left-4 bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg">1</div>
              <div className="bg-white p-6 rounded-lg shadow-sm h-full">
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">Inspection & Assessment</h3>
                <p className="text-neutral-600">
                  Our Doylestown specialists thoroughly examine each item, identifying fabric type, soil level, stains, and special requirements. We document any pre-existing conditions and determine the optimal cleaning approach.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -top-4 -left-4 bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg">2</div>
              <div className="bg-white p-6 rounded-lg shadow-sm h-full">
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">Pre-Treatment</h3>
                <p className="text-neutral-600">
                  Stains and heavily soiled areas receive specialized pre-treatments using fabric-appropriate solutions. For delicate fabrics common in Doylestown homes, we use gentle yet effective spotting techniques.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -top-4 -left-4 bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg">3</div>
              <div className="bg-white p-6 rounded-lg shadow-sm h-full">
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">Specialized Cleaning</h3>
                <p className="text-neutral-600">
                  We select the appropriate cleaning method—dry cleaning, wet cleaning, or specialized processes—based on the item's fabric content, construction, and care requirements, ensuring optimal results for Doylestown homes.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -top-4 -left-4 bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg">4</div>
              <div className="bg-white p-6 rounded-lg shadow-sm h-full">
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">Finishing & Packaging</h3>
                <p className="text-neutral-600">
                  Items are properly finished according to type—pressed, steamed, or air-dried—and meticulously packaged for protection during delivery back to your Doylestown home or for storage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              Benefits of Professional Household Cleaning
            </h2>
            <p className="mt-4 text-xl text-white/80 max-w-3xl mx-auto">
              Why Doylestown homeowners trust us with their valuable household textiles
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg">
              <div className="h-12 w-12 rounded-full bg-primary/20 text-primary flex items-center justify-center mb-4">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Allergen Reduction</h3>
              <p className="text-white/80">
                Our thorough cleaning processes remove dust mites, pet dander, pollen, and other allergens that accumulate in household fabrics, creating a healthier environment for your Doylestown home, especially important for Bucks County's seasonal allergies.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg">
              <div className="h-12 w-12 rounded-full bg-primary/20 text-primary flex items-center justify-center mb-4">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Extended Fabric Life</h3>
              <p className="text-white/80">
                Regular professional cleaning prevents the buildup of soil and debris that can wear down fibers and cause premature deterioration, preserving your household textile investments in your Doylestown home for years to come.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg">
              <div className="h-12 w-12 rounded-full bg-primary/20 text-primary flex items-center justify-center mb-4">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Superior Results</h3>
              <p className="text-white/80">
                Our specialized equipment and professional techniques clean more thoroughly than home washing machines, especially for large items like comforters and drapes that Doylestown homeowners struggle to clean properly at home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#F8F5F0]">
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(70%_50%_at_50%_50%,#fff_0%,transparent_100%)]"></div>
          <div className="absolute inset-0 opacity-25 bg-[repeating-linear-gradient(45deg,transparent,transparent_50px,rgba(0,0,0,0.05)_50px,rgba(0,0,0,0.05)_100px)]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(248,245,240,0.1)_0%,rgba(248,245,240,0.2)_100%)]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
              What Doylestown Homeowners Say
            </h2>
            <p className="mt-4 text-xl text-neutral-600 max-w-3xl mx-auto">
              Testimonials from our satisfied household cleaning customers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <div className="h-12 w-12 rounded-full bg-neutral-200 flex items-center justify-center text-neutral-800 font-bold">
                    RH
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold">Rebecca Harrington</h4>
                  <p className="text-sm text-neutral-500">Doylestown Borough</p>
                </div>
              </div>
              <p className="text-neutral-600">
                "After our golden retriever decided our white duvet was a perfect nap spot, I thought it was ruined forever. Signature Cleaners in Doylestown restored it completely! They removed all the pet hair, muddy paw prints, and even a mysterious stain. It looks brand new, and their pickup service was so convenient."
              </p>
              <div className="mt-4 flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-5 w-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <div className="h-12 w-12 rounded-full bg-neutral-200 flex items-center justify-center text-neutral-800 font-bold">
                    DM
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold">Daniel Matthews</h4>
                  <p className="text-sm text-neutral-500">Doylestown Township</p>
                </div>
              </div>
              <p className="text-neutral-600">
                "I inherited my grandmother's antique lace tablecloth that had yellowed over the years. The team at Signature Cleaners treated it with such care and expertise. They restored the bright white color without damaging the delicate fabric. Their knowledge of heirloom textiles is impressive - I wouldn't trust anyone else in Doylestown with my family treasures."
              </p>
              <div className="mt-4 flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-5 w-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <div className="h-12 w-12 rounded-full bg-neutral-200 flex items-center justify-center text-neutral-800 font-bold">
                    LC
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold">Lauren Campbell</h4>
                  <p className="text-sm text-neutral-500">Doylestown</p>
                </div>
              </div>
              <p className="text-neutral-600">
                "After spending a fortune on custom drapes for our Doylestown home, I was terrified to clean them. Signature Cleaners made the process stress-free with their at-home removal and reinstallation service. They cleaned, pressed, and rehung our drapes perfectly. The difference is remarkable - they look brand new and the colors are vibrant again!"
              </p>
              <div className="mt-4 flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-5 w-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-xl text-white/80 max-w-3xl mx-auto">
              Common questions from Doylestown customers about household cleaning
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-white/20">
              <AccordionTrigger className="text-left text-white">
                How often should I have my comforters and duvets professionally cleaned?
              </AccordionTrigger>
              <AccordionContent className="text-white/80">
                For Doylestown homes, we recommend professional cleaning for comforters and duvets once or twice a year, depending on usage and whether you use a duvet cover. Those with allergies, pets, or children may benefit from more frequent cleaning. Regular professional cleaning removes dust mites, skin cells, and allergens that accumulate over time, extending the life of your bedding and improving sleep quality.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2" className="border-white/20">
              <AccordionTrigger className="text-left text-white">
                Can you clean antique or delicate textiles from Doylestown historic homes?
              </AccordionTrigger>
              <AccordionContent className="text-white/80">
                Yes, our Doylestown specialists are trained in handling antique and delicate textiles common in the historic homes of our area. We conduct a thorough assessment before cleaning and use conservation-appropriate techniques. For particularly valuable or fragile items, we offer specialized gentle cleaning methods. We understand the unique textile needs of Doylestown's historic properties and treat each heirloom with appropriate care.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3" className="border-white/20">
              <AccordionTrigger className="text-left text-white">
                Do you offer pickup and delivery for household items in Doylestown?
              </AccordionTrigger>
              <AccordionContent className="text-white/80">
                Absolutely! We offer complimentary pickup and delivery for household items throughout Doylestown and surrounding areas. For larger items like drapes and rugs, we also offer removal and reinstallation services at a nominal fee. Our Doylestown service vehicles are equipped with special handling equipment to ensure your items are safely transported to and from our facility.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4" className="border-white/20">
              <AccordionTrigger className="text-left text-white">
                How long does the cleaning process take for household items?
              </AccordionTrigger>
              <AccordionContent className="text-white/80">
                For standard household items, our Doylestown facility typically completes cleaning within 5-7 business days. Larger or specialty items like rugs and draperies may require 7-10 days. During peak seasons (spring and fall cleaning), turnaround times may be slightly longer. We offer expedited service for urgent needs at an additional charge. We'll always provide a specific timeframe when you drop off or schedule a pickup.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5" className="border-white/20">
              <AccordionTrigger className="text-left text-white">
                How do you clean specialty items like down comforters and wool rugs?
              </AccordionTrigger>
              <AccordionContent className="text-white/80">
                We use fabric-specific cleaning methods for specialty items. For down comforters, we use a gentle cleaning process that preserves the loft and insulating properties of the down, followed by careful drying that prevents clumping. Wool rugs receive specialized treatment designed to clean deeply while protecting natural fibers and dyes. Our Doylestown specialists have extensive experience with the wide variety of textiles found in Bucks County homes.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Call To Action */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Refresh Your Doylestown Home's Textiles?
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Schedule a pickup today and experience the professional difference
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
              <Link href="/schedule">Schedule Pickup in Doylestown</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
              <Link href="/contact-us">Get a Custom Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}