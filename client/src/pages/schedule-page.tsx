import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useIsMobile } from "@/hooks/use-mobile";
import { useForm } from "react-hook-form";

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
    // Form submitted successfully
    setIsSuccess(true);
    window.scrollTo(0, 0);
  };

  // Get today's date for min date on date picker
  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="flex min-h-screen flex-col">
      <Helmet>
        <link
          rel="canonical"
          href="https://www.mysignaturecleaners.com/schedule"
        />
        <title>Schedule Pickup | Signature Cleaners</title>
        <meta
          name="description"
          content="Schedule your dry cleaning or laundry pickup online with Signature Cleaners. Choose your service, date, and time — we’ll handle the rest with care and reliability."
        />
        <meta
          name="keywords"
          content="schedule pickup, laundry service scheduling, dry cleaning delivery, online pickup booking, Signature Cleaners appointment, garment pickup request"
        />
        {/* Open Graph Metadata */}
        <meta
          property="og:title"
          content="Schedule Pickup | Signature Cleaners"
        />
        <meta
          property="og:description"
          content="Schedule your dry cleaning or laundry pickup online with Signature Cleaners. Choose your service, date, and time — we'll handle the rest with care and reliability."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.mysignaturecleaners.com/schedule"
        />
        <meta
          property="og:image"
          content="https://www.mysignaturecleaners.com/images/signature-cleaners-logo-white.png"
        />
        <meta property="og:site_name" content="Signature Cleaners" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card Metadata */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Schedule Pickup | Signature Cleaners"
        />
        <meta
          name="twitter:description"
          content="Schedule your dry cleaning or laundry pickup online with Signature Cleaners. Choose your service, date, and time — we'll handle the rest with care and reliability."
        />
        <meta
          name="twitter:image"
          content="https://www.mysignaturecleaners.com/images/signature-cleaners-logo-white.png"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Schedule a Pickup",
            url: "https://www.mysignaturecleaners.com/schedule",
            description:
              "Use this page to schedule your dry cleaning, wash & fold, or alterations pickup service with Signature Cleaners. Flexible time slots and simple online booking.",
            publisher: {
              "@type": "Organization",
              name: "Signature Cleaners",
              url: "https://www.mysignaturecleaners.com",
              logo: {
                "@type": "ImageObject",
                url: "https://www.mysignaturecleaners.com/images/logo.png",
              },
            },
          })}
        </script>
      </Helmet>

      <Header />

      {/* Scheduling Form */}
      <section className="relative overflow-hidden pb-16 pt-40">
        <div className="absolute inset-0 bg-[#F8F5F0]">
          {/* Primary radial gradient for soft light effect */}
          <div className="absolute inset-0 bg-[radial-gradient(70%_50%_at_50%_50%,#fff_0%,transparent_100%)] opacity-30"></div>

          {/* Parallel diagonal streaks */}
          <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_50px,rgba(0,0,0,0.05)_50px,rgba(0,0,0,0.05)_100px)] opacity-25"></div>

          {/* Soft overlay gradient */}
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(248,245,240,0.1)_0%,rgba(248,245,240,0.2)_100%)]"></div>
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {isSuccess ? (
            <div className="mx-auto max-w-3xl rounded-lg border border-green-200 bg-green-50 p-8 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
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
              <h2 className="mb-2 text-2xl font-bold text-green-800">
                Pickup Scheduled Successfully!
              </h2>
              <p className="mb-4 text-green-700">
                Thank you for scheduling a pickup with Signature Cleaners. We'll
                be there at your selected time.
              </p>
              <p className="mb-6 text-green-700">
                Your confirmation number:{" "}
                <span className="font-bold">DEMO12345</span>
              </p>
              <div className="space-y-4">
                <Button
                  onClick={() => setIsSuccess(false)}
                  className="hover:bg-primary-dark bg-primary text-white"
                >
                  Schedule Another Pickup
                </Button>
              </div>
            </div>
          ) : (
            <div className="mx-auto max-w-3xl rounded-lg bg-neutral-50 p-6 shadow-md md:p-8">
              <div className="rounded-lg bg-neutral-100 p-8">
                <h3 className="mb-6 text-2xl font-semibold text-neutral-900">
                  Schedule Pickup Service
                </h3>
                <form
                  className="space-y-4"
                  data-netlify="true"
                  name="schedule"
                  method="POST"
                  netlify-honeypot="bot-field"
                >
                  <input type="hidden" name="form-name" value="schedule" />
                  <p className="hidden">
                    <label>
                      Don't fill this out if you're human:{" "}
                      <input name="bot-field" />
                    </label>
                  </p>

                  <div>
                    <label className="mb-1 block text-sm font-medium text-neutral-700">
                      Full Name
                    </label>
                    <Input
                      name="name"
                      placeholder="Your name"
                      className="w-full bg-white"
                      required
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-sm font-medium text-neutral-700">
                      Phone Number
                    </label>
                    <Input
                      name="phone"
                      type="tel"
                      placeholder="(215) 555-0123"
                      className="w-full bg-white"
                      required
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-sm font-medium text-neutral-700">
                      Email
                    </label>
                    <Input
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      className="w-full bg-white"
                      required
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-sm font-medium text-neutral-700">
                      Address
                    </label>
                    <Textarea
                      name="address"
                      placeholder="Your pickup address"
                      className="min-h-[100px] w-full bg-white"
                      required
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-sm font-medium text-neutral-700">
                      Message
                    </label>
                    <Textarea
                      name="message"
                      placeholder="Additional notes or special instructions..."
                      className="min-h-[100px] w-full bg-white"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[#790003] text-white hover:bg-[#F6AE2D]"
                  >
                    Schedule Pickup
                  </Button>
                </form>
              </div>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
}
