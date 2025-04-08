import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FaqPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-[#23282F] py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Frequently Asked Questions
            </h1>
            <p className="mt-4 text-xl text-white text-opacity-90 max-w-3xl mx-auto">
              Find answers to common questions about our services
            </p>
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
              <AccordionTrigger>
                What if I'm not satisfied with the cleaning?
              </AccordionTrigger>
              <AccordionContent>
                We offer a 100% satisfaction guarantee. If you're not completely
                happy with our service, please contact us within 3 days and
                we'll make it right.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>
                Can you handle delicate or specialty items?
              </AccordionTrigger>
              <AccordionContent>
                Yes, we specialize in handling delicate fabrics, wedding
                dresses, formal wear, and other specialty items that require
                extra care.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger>
                Do you use eco-friendly cleaning methods?
              </AccordionTrigger>
              <AccordionContent>
                Yes, we use environmentally friendly cleaning methods and
                solvents that are both effective and better for the environment.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <Footer />
    </div>
  );
}
