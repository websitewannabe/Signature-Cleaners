import { Link } from "wouter";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
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
      <Header />

      <div className="flex-1 py-40 bg-[#022349]">
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
            <div className="inline-block bg-[#790003] text-white px-6 py-3 rounded-md text-lg font-semibold">
              $10 Off Your First Order – Sign up online or mention it in store
            </div>
          </div>

          {/* Account Benefits */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-neutral-900 mb-8 text-center">
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
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
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
