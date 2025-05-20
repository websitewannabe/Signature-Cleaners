import Header from "@/components/layout/header";
import { Link } from "wouter";
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
import { CheckCircle2, Loader2, Mail, MapPin, Phone } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { InsertContact } from "@shared/schema";

// Define form schema with validation
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(10, { message: "Phone number is required" }),
  address: z.string().min(5, { message: "Address is required" }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters" }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactPage() {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);

  // Initialize form with validation
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      message: "",
    },
  });

  // API mutation for form submission
  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormValues) => {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error("Failed to send message");
      }
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message Sent",
        description: "We've received your message and will respond shortly.",
        variant: "success",
      });
      setSubmitted(true);
      form.reset();
    },
    onError: (error) => {
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error";
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
      console.error("Contact form error details:", {
        error,
        message: errorMessage,
        timestamp: new Date().toISOString(),
      });
    },
  });

  // Handle form submission
  const onSubmit = async (data: ContactFormValues) => {
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          "form-name": "contact",
          ...data,
        }).toString(),
      });
      setSubmitted(true);
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <link
          rel="canonical"
          href="https://www.mysignaturecleaners.com/contact-us"
        />
        <title>
          Contact Signature Cleaners | Schedule a Pickup or Ask a Question
        </title>
        <meta
          name="description"
          content="Get in touch with Signature Cleaners for dry cleaning, laundry, and garment care. Contact us to schedule a pickup, ask a question, or find store hours and location."
        />
        <meta
          name="keywords"
          content="contact Signature Cleaners, dry cleaning Doylestown, laundry pickup, garment care, store hours, customer support, Bucks County cleaners"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Signature Cleaners",
            url: "https://signaturecleaners.com/contact",
            image: "https://signaturecleaners.com/src/images/logo.png",
            logo: "https://signaturecleaners.com/src/images/logo.png",
            description:
              "Contact Signature Cleaners in Doylestown, PA for expert dry cleaning, laundry services, and personalized garment care. Reach us by phone, email, or visit our store.",
            address: {
              "@type": "PostalAddress",
              streetAddress: "1456 Ferry Road #10",
              addressLocality: "Doylestown",
              addressRegion: "PA",
              postalCode: "18901",
              addressCountry: "US",
            },
            telephone: "+1-215-345-1470",
            email: "customerservice@mysignaturecleaners.com",
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                ],
                opens: "07:00",
                closes: "18:00",
              },
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: "Saturday",
                opens: "08:00",
                closes: "15:00",
              },
            ],
            areaServed: {
              "@type": "Place",
              name: [
                "Doylestown",
                "Perkasie",
                "Warrington",
                "Newtown",
                "Jamison",
                "Yardley",
              ],
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+1-215-345-1470",
              contactType: "Customer Service",
            },
          })}
        </script>
      </Helmet>

      <Header />

      {/* Contact Info & Form */}
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
            Contact Us
          </h1>
          <div className="lg:grid lg:grid-cols-2 lg:gap-12">
            {/* <div>
              <div className="bg-white rounded-lg shadow-md p-6">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-8 space-y-4">
                    <CheckCircle2 className="h-16 w-16 text-green-500" />
                    <h3 className="text-2xl font-semibold text-center">
                      Thank You!
                    </h3>
                    <p className="text-center text-neutral-600">
                      Your message has been sent successfully. We'll get back to
                      you as soon as possible.
                    </p>
                    <Button
                      onClick={() => setSubmitted(false)}
                      className="mt-4"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <Form {...form}>
                    <form
                      onSubmit={form.handleSubmit(onSubmit)}
                      className="space-y-6"
                    >
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
                        name="subject"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Subject</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="How can we help you?"
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
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Please provide details about your inquiry..."
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
                        disabled={contactMutation.isPending}
                      >
                        {contactMutation.isPending ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          "Send Message"
                        )}
                      </Button>
                    </form>
                  </Form>
                )}
              </div>
            </div> */}
            <div className="lg:mt-0">
              <div className="bg-white rounded-lg shadow-md p-6">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-8 space-y-4">
                    <CheckCircle2 className="h-16 w-16 text-green-500" />
                    <h3 className="text-2xl font-semibold text-center">
                      Thank You!
                    </h3>
                    <p className="text-center text-neutral-600">
                      Your message has been sent successfully. We'll get back to
                      you as soon as possible.
                    </p>
                    <Button
                      onClick={() => setSubmitted(false)}
                      className="mt-4"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <Form {...form}>
                    <form
                      onSubmit={form.handleSubmit(onSubmit)}
                      className="space-y-6"
                      data-netlify="true"
                      name="contact_page"
                      method="POST"
                      netlify-honeypot="bot-field"
                    >
                      <input type="hidden" name="form-name" value="contact" />
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
                            <FormLabel>Address</FormLabel>
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
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Please provide details about your inquiry..."
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
                            Sending...
                          </>
                        ) : (
                          "Send Message"
                        )}
                      </Button>
                    </form>
                  </Form>
                )}
              </div>
            </div>
            <div className="mt-10 lg:mt-0">
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <div className="ml-3">
                      <p className="text-neutral-600">
                        <a
                          href="https://www.google.com/maps?q=1456+Ferry+Road+%2310,+Doylestown,+PA+18901"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-[#F6AE2D] transition-colors"
                        >
                          1456 Ferry Road #10
                          <br />
                          Doylestown, PA 18901
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <div className="ml-3">
                      <p className="text-neutral-600">
                        <a
                          href="tel:+12153451470"
                          className="hover:text-[#F6AE2D] transition-colors"
                        >
                          (215) 345-1470
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <div className="ml-3">
                      <p className="text-neutral-600">
                        <a
                          href="mailto:customerservice@mysignaturecleaners.com"
                          className="hover:text-[#F6AE2D] transition-colors"
                        >
                          customerservice@mysignaturecleaners.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-neutral-900 mt-8 mb-4">
                  Hours of Operation
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <p className="text-neutral-600">Monday - Friday</p>
                    <p className="text-neutral-700 font-medium">
                      7:00 AM - 6:00 PM
                    </p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-neutral-600">Saturday</p>
                    <p className="text-neutral-700 font-medium">
                      8:00 AM - 3:00 PM
                    </p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-neutral-600">Sunday</p>
                    <p className="text-neutral-700 font-medium">Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 bg-[#790003]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1">
              <AccordionTrigger>How do I sign up?</AccordionTrigger>
              <AccordionContent>
                Click here or Call{" "}
                <a
                  href="tel:+12153451470"
                  className="hover:text-[#F6AE2D] transition-colors"
                >
                  (215) 345-1470
                </a>{" "}
                – Include your sign up form with your name, address and phone
                number on your first order indicating that you signed up online.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>
                Where are my clothes picked up and delivered?
              </AccordionTrigger>
              <AccordionContent>
                We will pick up and deliver your clothes to your home, your
                office or to the concierge in your building.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>Is there a minimum order?</AccordionTrigger>
              <AccordionContent>
                No need to wait for a full bag of dirty clothes, we will pick up
                and deliver any amount.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>What do I put my clothes in?</AccordionTrigger>
              <AccordionContent>
                Call us and we will deliver 2 Signature Cleaners bags with name
                tags to your designated drop off location.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>
                Do I have to be there when the pickup and delivery is made?
              </AccordionTrigger>
              <AccordionContent>
                No our route driver will pick up and deliver your clothes at
                your pre-determined location.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger>
                When will my clothes be picked up or dropped off?
              </AccordionTrigger>
              <AccordionContent>
                We pick up and deliver twice a week. However, household items,
                repairs, leather and specialty items may take longer.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
              <AccordionTrigger>What about the holidays?</AccordionTrigger>
              <AccordionContent>
                We will inform you about any changes in our pickup and delivery
                service during the holidays.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-8">
              <AccordionTrigger>
                What do I do about special requests?
              </AccordionTrigger>
              <AccordionContent>
                Place the garment in a separate plastic bag with a detailed note
                explaining your request.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-9">
              <AccordionTrigger>Do you do alterations?</AccordionTrigger>
              <AccordionContent>
                Yes. For alterations, pin the instructions to the garment that
                needs alterations. Return times can vary depending on the
                complexity of the alteration.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-10">
              <AccordionTrigger>How do I pay for the service?</AccordionTrigger>
              <AccordionContent>
                Your dry cleaning will be charged automatically to your American
                express, Visa. Master card or Discover Card.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-11">
              <AccordionTrigger>
                How do you keep my credit card safe?
              </AccordionTrigger>
              <AccordionContent>
                We use the latest encryption and authentication services for all
                our web transactions so that your credit card information
                remains safe. If you prefer, just give us a call at{" "}
                <a
                  href="tel:+18777791269"
                  className="hover:text-[#F6AE2D] transition-colors"
                >
                  (877) 779-1269
                </a>{" "}
                and we can assist you via phone.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-[url('/src/images/Background.png')] bg-cover bg-center bg-no-repeat"></div>
        <div className="absolute inset-0 bg-[#790003]/70"></div>
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

      <Footer />
    </div>
  );
}

const FaqItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => (
  <div className="bg-white rounded-lg shadow-sm p-6">
    <h3 className="text-lg font-semibold text-neutral-900 mb-2">{question}</h3>
    <p className="text-neutral-600">{answer}</p>
  </div>
);