import { Link } from "wouter";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { CheckCircle } from "lucide-react";

export default function AuthPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <link
          rel="canonical"
          href="https://www.mysignaturecleaners.com/my-account"
        />
        <title>Log In or Create Account | Signature Cleaners</title>
        <meta
          name="description"
          content="Access your Signature Cleaners account to schedule pickups, update payment info, and manage your preferences. New customers can sign up and get $10 off their first order."
        />
        <meta
          name="keywords"
          content="login, create account, Signature Cleaners login, dry cleaning account, schedule pickup, pay bill, manage preferences, new customer signup"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Customer Login and Signup",
            url: "https://signaturecleaners.com/account",
            description:
              "Existing customers can log in to their Signature Cleaners account to pay bills, schedule services, and update preferences. New users can sign up online and get $10 off their first order.",
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

      <div className="flex-1 py-40 bg-[#181818]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Login Section */}
            <Card>
              <CardHeader>
                <CardTitle>Log In</CardTitle>
                <CardDescription>
                  Access your account or pay your bill
                </CardDescription>
              </CardHeader>
              <CardContent>
                <a
                  href="https://account.mydrycleaner.com/SIGNATUREPA/#/login"
                  className="block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full bg-[#790003] hover:bg-[#F6AE2D] text-white">
                    Log In or Pay Bill
                  </Button>
                </a>
              </CardContent>
            </Card>

            {/* Sign Up Section */}
            <Card>
              <CardHeader>
                <CardTitle>Sign Up</CardTitle>
                <CardDescription>
                  Create a new account and save $10 on your first order
                </CardDescription>
              </CardHeader>
              <CardContent>
                <a
                  href="https://account.mydrycleaner.com/SIGNATUREPA/#/customer-signup"
                  className="block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full bg-[#790003] hover:bg-[#F6AE2D] text-white">
                    Create Account
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>

          {/* Promo Section */}
          <div className="mt-12 text-center">
            <div className="inline-block relative bg-white border-2 border-dashed border-[#790003] px-8 py-4 mx-4">
              <div className="absolute -left-3 top-1/2 -mt-3 w-6 h-6 bg-[#181818] rounded-full"></div>
              <div className="absolute -right-3 top-1/2 -mt-3 w-6 h-6 bg-[#181818] rounded-full"></div>
              <div className="text-2xl font-bold text-[#790003] mb-1">$10 OFF</div>
              <div className="text-[#181818] font-medium">Your First Order</div>
              <div className="text-sm text-neutral-600 mt-1">Sign up online or mention in store</div>
            </div>
          </div>

          {/* Account Benefits */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">
              Account Benefits
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Request pickup",
                "Update cleaning preferences",
                "Update credit card on file",
                "Pay dry cleaning bill",
                "Update email preferences",
              ].map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-start space-x-3 bg-white p-4 rounded-lg shadow-sm"
                >
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#F8F5F0]">
          {/* Primary radial gradient for soft light effect */}
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(70%_50%_at_50%_50%,#fff_0%,transparent_100%)]"></div>

          {/* Parallel diagonal streaks */}
          <div className="absolute inset-0 opacity-25 bg-[repeating-linear-gradient(45deg,transparent,transparent_50px,rgba(0,0,0,0.05)_50px,rgba(0,0,0,0.05)_100px)]"></div>

          {/* Soft overlay gradient */}
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(248,245,240,0.1)_0%,rgba(248,245,240,0.2)_100%)]"></div>
        </div>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <h2 className="text-2xl font-bold text-neutral-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
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
