
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
      <section className="bg-[#424B4D] py-28">
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
              <AccordionTrigger>How soon can I get my clothes back?</AccordionTrigger>
              <AccordionContent>
                Our standard turnaround time is 48 hours. We also offer express service with same-day or next-day options for an additional fee.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger>Do you offer pickup and delivery services?</AccordionTrigger>
              <AccordionContent>
                Yes, we offer free pickup and delivery for orders over $30 within our service area. You can schedule these services through our website or by phone.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>How do I pay for my orders?</AccordionTrigger>
              <AccordionContent>
                We accept all major credit cards, cash, and digital payment methods. You can also set up automatic billing through your customer portal account.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>What if I'm not satisfied with the cleaning?</AccordionTrigger>
              <AccordionContent>
                We offer a 100% satisfaction guarantee. If you're not completely happy with our service, please contact us within 3 days and we'll make it right.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>Can you handle delicate or specialty items?</AccordionTrigger>
              <AccordionContent>
                Yes, we specialize in handling delicate fabrics, wedding dresses, formal wear, and other specialty items that require extra care.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger>Do you use eco-friendly cleaning methods?</AccordionTrigger>
              <AccordionContent>
                Yes, we use environmentally friendly cleaning methods and solvents that are both effective and better for the environment.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <Footer />
    </div>
  );
}
