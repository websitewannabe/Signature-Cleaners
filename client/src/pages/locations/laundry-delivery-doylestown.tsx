import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";

export default function LaundryDeliveryDoylestownPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Laundry & Dry Cleaning Delivery in Doylestown | Signature Cleaners</title>
        <meta
          name="description"
          content="Free pickup and delivery laundry service in Doylestown, PA. We handle dry cleaning, wash & fold, and specialty garments with convenient scheduling options."
        />
      </Helmet>

      <Header />

      <main className="flex-grow py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Laundry & Dry Cleaning Delivery in Doylestown
            </h1>
            <p className="mt-6 text-xl text-white/90 max-w-3xl mx-auto">
              Free pickup and delivery service throughout Doylestown and surrounding areas
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Convenient Laundry Delivery
              </h2>
              <p className="text-lg text-white/90 mb-6">
                Let us handle your laundry and dry cleaning needs with our convenient pickup and delivery service throughout Doylestown. Our location at 1456 Ferry Rd UNIT 100, Doylestown, PA 18901 provides premium cleaning with the convenience you deserve.
              </p>
              
              <div className="mt-8">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/schedule">Schedule Pickup in Doylestown</Link>
                </Button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden">
              <div className="aspect-video w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.482010904663!2d-75.15086792397547!3d40.189290671502185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6a858a3fdc5bb%3A0xf09ea81c7bc38535!2sSignature%20Cleaners!5e0!3m2!1sen!2sus!4v1714582748851!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <p className="text-neutral-600 text-sm italic text-center p-4">Signature Cleaners at 1456 Ferry Rd UNIT 100, Doylestown, PA 18901</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}