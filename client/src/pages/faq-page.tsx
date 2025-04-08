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
