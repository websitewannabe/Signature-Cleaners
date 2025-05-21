import { useState } from "react";
import { Link } from "wouter";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { CheckCircle2, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
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

const scheduleFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(10, { message: "Phone number is required" }),
  address: z.string().min(5, { message: "Address is required" }),
  message: z.string().optional(),
});

type ScheduleFormValues = z.infer<typeof scheduleFormSchema>;

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
            <div className="bg-white rounded-lg shadow-md p-6 max-w-3xl mx-auto">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-8 space-y-4">
                  <CheckCircle2 className="h-16 w-16 text-green-500" />
                  <h3 className="text-2xl font-semibold text-center">
                    Thank You!
                  </h3>
                  <p className="text-center text-neutral-600">
                    Your pickup has been scheduled successfully. We'll be there at your selected time.
                  </p>
                  <Button
                    onClick={() => setSubmitted(false)}
                    className="mt-4"
                  >
                    Schedule Another Pickup
                  </Button>
                </div>
              ) : (
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
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

                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Your Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="john@example.com"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input
                              type="tel"
                              placeholder="(215) 555-0123"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="address"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Pickup Address</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter your full address"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Special Instructions</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Any special requests or notes for pickup..."
                              className="min-h-[120px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary-dark"
                      disabled={form.formState.isSubmitting}
                    >
                      {form.formState.isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Scheduling...
                        </>
                      ) : (
                        "Schedule Pickup"
                      )}
                    </Button>
                  </form>
                </Form>
              )}
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
