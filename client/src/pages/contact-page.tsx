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
        description: "There was a problem sending your message. Please try again.",
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
      
      {/* Hero Section */}
      <section className="bg-[#424B4D] py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white">Contact Us</h1>
            <p className="mt-4 text-xl text-white text-opacity-90 max-w-3xl mx-auto">
              We're here to answer your questions and provide assistance. Reach out to us through any of the channels below.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Info & Form */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12">
            <div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
                            <Input type="email" placeholder="john@example.com" {...field} />
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
                            <Input placeholder="How can we help you?" {...field} />
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
                        'Send Message'
                      )}
                    </Button>
                  </form>
                </Form>
              </div>
            </div>
            
            <div className="mt-10 lg:mt-0">
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h3 className="text-xl font-semibold text-neutral-900 mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <div className="ml-3">
                      <p className="text-neutral-600">
                        123 Main Street<br />
                        Suite 456<br />
                        Anytown, ST 12345
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <div className="ml-3">
                      <p className="text-neutral-600">(555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <div className="ml-3">
                      <p className="text-neutral-600">info@signaturecleaners.com</p>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-neutral-900 mt-8 mb-4">Hours of Operation</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <p className="text-neutral-600">Monday - Friday</p>
                    <p className="text-neutral-700 font-medium">7:00 AM - 8:00 PM</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-neutral-600">Saturday</p>
                    <p className="text-neutral-700 font-medium">8:00 AM - 6:00 PM</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-neutral-600">Sunday</p>
                    <p className="text-neutral-700 font-medium">Closed</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden h-64">
                {/* Replace with actual map component */}
                <div className="h-full w-full bg-neutral-200 flex items-center justify-center">
                  <span className="text-neutral-500">Interactive Map</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900">Frequently Asked Questions</h2>
            <p className="mt-4 text-lg text-neutral-600 max-w-3xl mx-auto">
              Find answers to our most commonly asked questions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <FaqItem 
              question="How soon can I get my clothes back?" 
              answer="Our standard turnaround time is 48 hours. We also offer express service with same-day or next-day options for an additional fee." 
            />
            <FaqItem 
              question="Do you offer pickup and delivery services?" 
              answer="Yes, we offer free pickup and delivery for orders over $30 within our service area. You can schedule these services through our website or by phone." 
            />
            <FaqItem 
              question="How do I pay for my orders?" 
              answer="We accept all major credit cards, cash, and digital payment methods. You can also set up automatic billing through your customer portal account." 
            />
            <FaqItem 
              question="What if I'm not satisfied with the cleaning?" 
              answer="We offer a 100% satisfaction guarantee. If you're not completely happy with our service, please contact us within 3 days and we'll make it right." 
            />
            <FaqItem 
              question="Can you handle delicate or specialty items?" 
              answer="Yes, we specialize in handling delicate fabrics, wedding dresses, formal wear, and other specialty items that require extra care." 
            />
            <FaqItem 
              question="Do you use eco-friendly cleaning methods?" 
              answer="Yes, we use environmentally friendly cleaning methods and solvents that are both effective and better for the environment." 
            />
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}

const FaqItem = ({ question, answer }: { question: string; answer: string }) => (
  <div className="bg-white rounded-lg shadow-sm p-6">
    <h3 className="text-lg font-semibold text-neutral-900 mb-2">{question}</h3>
    <p className="text-neutral-600">{answer}</p>
  </div>
);
