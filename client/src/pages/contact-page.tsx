import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { insertContactSchema, type InsertContact } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
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
import { Loader2, Mail, MapPin, Phone } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function ContactPage() {
  const { toast } = useToast();

  // Form validation schema
  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  // Contact form submission
  const contactMutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      const res = await apiRequest("POST", "/api/contact", data);
      return res.json();
    },
    onSuccess: () => {
      toast({
        title: "Message Sent",
        description: "Thank you for your message. We'll respond shortly.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Error",
        description:
          "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContact) => {
    contactMutation.mutate(data);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Contact Info & Form */}
      <section className="py-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12">
            <div>
              <div className="bg-white rounded-lg shadow-md p-6">
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
                        1456 Ferry Road #10
                        <br />
                        Doylestown, PA 18901
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <div className="ml-3">
                      <p className="text-neutral-600">(215) 345-1470</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <div className="ml-3">
                      <p className="text-neutral-600">
                        customerservice@mysignaturecleaners.com
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

      {/* Locations Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900">
              Locations We Pick Up & Deliver
            </h2>
            <p className="mt-4 text-lg text-neutral-600 max-w-3xl mx-auto">
              We service the following areas in Bucks County and surrounding
              regions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="bg-neutral-200 rounded-lg overflow-hidden h-[400px] shadow-md">
              {/* Placeholder for Google Maps - Replace with actual map component */}
              <div className="h-full w-full bg-neutral-200 flex items-center justify-center">
                <span className="text-neutral-500">Service Area Map</span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                <div className="space-y-2">
                  <p className="text-neutral-900">Buckingham</p>
                  <p className="text-neutral-900">Carversville</p>
                  <p className="text-neutral-900">Chalfont</p>
                  <p className="text-neutral-900">Doylestown</p>
                  <p className="text-neutral-900">Dublin</p>
                  <p className="text-neutral-900">Fountainville</p>
                  <p className="text-neutral-900">Furlong</p>
                  <p className="text-neutral-900">Holland</p>
                  <p className="text-neutral-900">Ivyland</p>
                  <p className="text-neutral-900">Jamison</p>
                  <p className="text-neutral-900">Lahaska</p>
                  <p className="text-neutral-900">Morrisville</p>
                  <p className="text-neutral-900">New Hope</p>
                </div>
                <div className="space-y-2">
                  <p className="text-neutral-900">Newtown</p>
                  <p className="text-neutral-900">Ottsville</p>
                  <p className="text-neutral-900">Perkasie</p>
                  <p className="text-neutral-900">Pipersville</p>
                  <p className="text-neutral-900">Point Pleasant</p>
                  <p className="text-neutral-900">Richboro</p>
                  <p className="text-neutral-900">Southampton</p>
                  <p className="text-neutral-900">Trevose</p>
                  <p className="text-neutral-900">Warminster</p>
                  <p className="text-neutral-900">Warrington</p>
                  <p className="text-neutral-900">Washington Crossing</p>
                  <p className="text-neutral-900">Yardley</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1">
              <AccordionTrigger>How do I sign up?</AccordionTrigger>
              <AccordionContent>
                Click here or Call (215) 345-1470 – Include your sign up form
                with your name, address and phone number on your first order
                indicating that you signed up online.
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
                remains safe. If you prefer, just give us a call at (877)
                779-1269 and we can assist you via phone.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
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
