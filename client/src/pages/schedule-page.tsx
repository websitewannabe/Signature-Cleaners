import { useState } from "react";
import { Link } from "wouter";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { useIsMobile } from "@/hooks/use-mobile";

export default function SchedulePage() {
  const isMobile = useIsMobile();
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      address: "",
      serviceType: "",
      pickupDate: "",
      pickupTime: "",
      notes: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log("Form submitted:", data);
    setIsSuccess(true);
    window.scrollTo(0, 0);
  };

  // Get today's date for min date on date picker
  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Schedule Pickup | Signature Cleaners</title>
        <meta
          name="description"
          content="Schedule your dry cleaning or laundry pickup online with Signature Cleaners. Choose your service, date, and time — we’ll handle the rest with care and reliability."
        />
        <meta
          name="keywords"
          content="schedule pickup, laundry service scheduling, dry cleaning delivery, online pickup booking, Signature Cleaners appointment, garment pickup request"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Schedule a Pickup",
            url: "https://signaturecleaners.com/schedule",
            description:
              "Use this page to schedule your dry cleaning, wash & fold, or alterations pickup service with Signature Cleaners. Flexible time slots and simple online booking.",
            publisher: {
              "@type": "Organization",
              name: "Signature Cleaners",
              url: "https://signaturecleaners.com",
              logo: {
                "@type": "ImageObject",
                url: "https://signaturecleaners.com/src/images/logo.png",
              },
            },
          })}
        </script>
      </Helmet>

      <Header />

      {/* Scheduling Form */}
      <section className="pt-40 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#F8F5F0]">
          {/* Primary radial gradient for soft light effect */}
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(70%_50%_at_50%_50%,#fff_0%,transparent_100%)]"></div>

          {/* Parallel diagonal streaks */}
          <div className="absolute inset-0 opacity-25 bg-[repeating-linear-gradient(45deg,transparent,transparent_50px,rgba(0,0,0,0.05)_50px,rgba(0,0,0,0.05)_100px)]"></div>

          {/* Soft overlay gradient */}
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(248,245,240,0.1)_0%,rgba(248,245,240,0.2)_100%)]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {isSuccess ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-8 max-w-3xl mx-auto text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="h-8 w-8 text-green-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-green-800 mb-2">
                Pickup Scheduled Successfully!
              </h2>
              <p className="text-green-700 mb-4">
                Thank you for scheduling a pickup with Signature Cleaners. We'll
                be there at your selected time.
              </p>
              <p className="text-green-700 mb-6">
                Your confirmation number:{" "}
                <span className="font-bold">DEMO12345</span>
              </p>
              <div className="space-y-4">
                <Button
                  onClick={() => setIsSuccess(false)}
                  className="bg-primary hover:bg-primary-dark text-white"
                >
                  Schedule Another Pickup
                </Button>
              </div>
            </div>
          ) : (
            <div className="bg-neutral-50 rounded-lg shadow-md p-6 md:p-8 max-w-3xl mx-auto">
              <div className="w-full h-[800px]">
                <iframe
                  src="https://bv6w3pwoi5y.typeform.com/to/q9sU2p56"
                  style={{ width: "100%", height: "100%", border: "0" }}
                  allow="camera; microphone; autoplay; encrypted-media;"
                  data-qa="iframe-container"
                  data-remove-element-on-mobile="true"
                  data-disable-scroll="true"
                  loading="lazy"
                />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-8 bg-[#181818]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              How It Works
            </h2>
            <p className="mt-4 text-xl text-white/90 max-w-3xl mx-auto">
              Our convenient process makes it easy to get your clothes cleaned
              without disrupting your schedule.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="bg-white/90 rounded-full h-24 w-24 flex items-center justify-center mx-auto shadow-md mb-4">
                <span className="text-[#790003] text-3xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold text-white">Schedule</h3>
              <p className="mt-2 text-white/80">
                Book your pickup online or by phone
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white rounded-full h-24 w-24 flex items-center justify-center mx-auto shadow-md mb-4">
                <span className="text-primary text-3xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold text-white">Pickup</h3>
              <p className="mt-2 text-white/80">
                We collect your garments from your door
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white rounded-full h-24 w-24 flex items-center justify-center mx-auto shadow-md mb-4">
                <span className="text-primary text-3xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold text-white">Clean</h3>
              <p className="mt-2 text-white/80">
                Your items receive expert care
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white rounded-full h-24 w-24 flex items-center justify-center mx-auto shadow-md mb-4">
                <span className="text-primary text-3xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-semibold text-white">Deliver</h3>
              <p className="mt-2 text-white/80">
                We return your fresh, clean garments
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link href="/schedule">
              <Button className="bg-white hover:bg-[#F6AE2D] text-black font-medium px-6 py-3 rounded-md shadow-md hover:shadow-lg transition duration-300">
                Get Started Now
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
