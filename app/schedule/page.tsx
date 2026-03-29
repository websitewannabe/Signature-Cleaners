"use client";

import { useState, useEffect, useRef, FormEvent } from "react";
import { CheckCircle, Send, Truck } from "lucide-react";

export default function SchedulePage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const addressRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY;
    if (!apiKey || !addressRef.current) return;

    if (!document.querySelector('script[src*="maps.googleapis.com"]')) {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
      script.async = true;
      script.onload = initAutocomplete;
      document.head.appendChild(script);
    } else if (window.google?.maps?.places) {
      initAutocomplete();
    }

    function initAutocomplete() {
      if (!addressRef.current || !window.google?.maps?.places) return;
      new window.google.maps.places.Autocomplete(addressRef.current, {
        types: ["address"],
        componentRestrictions: { country: "us" },
      });
    }
  }, []);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
      });
      setIsSubmitted(true);
    } catch {
      alert("Something went wrong. Please call us at (215) 345-1470.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <section className="section-padding">
        <div className="container-wide">
          <div className="mx-auto max-w-2xl">
            <div className="mb-12 text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                <Truck className="h-7 w-7 text-primary" />
              </div>
              <h1 className="heading-xl mb-4">
                Schedule <span className="text-primary">Pickup</span>
              </h1>
              <p className="text-white/80">
                Free pickup and delivery throughout Bucks County. Schedule your
                first pickup and we&apos;ll handle the rest.
              </p>
            </div>

            {isSubmitted ? (
              <div className="card-luxury py-16 text-center">
                <CheckCircle className="mx-auto mb-4 h-12 w-12 text-green-500" />
                <h2 className="mb-2 font-serif text-2xl font-bold text-white">
                  Pickup Scheduled!
                </h2>
                <p className="mb-6 text-white/80">
                  We&apos;ll confirm your pickup details shortly. For immediate
                  assistance, call us at{" "}
                  <a
                    href="tel:+12153451470"
                    className="text-primary hover:text-primary-light"
                  >
                    (215) 345-1470
                  </a>
                  .
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="card-luxury !p-3 space-y-6 md:!p-8"
              >
                <input type="hidden" name="form-name" value="schedule" />
                <p className="hidden">
                  <label>
                    Don&apos;t fill this out: <input name="bot-field" />
                  </label>
                </p>

                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-white"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Your name"
                    className="w-full border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 outline-none transition-colors focus:border-primary" style={{ borderRadius: "7px" }}
                  />
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-medium text-white"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      placeholder="(215) 555-0123"
                      className="w-full border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 outline-none transition-colors focus:border-primary" style={{ borderRadius: "7px" }}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-white"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="you@example.com"
                      className="w-full border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 outline-none transition-colors focus:border-primary" style={{ borderRadius: "7px" }}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="address"
                    className="mb-2 block text-sm font-medium text-white"
                  >
                    Pickup Address
                  </label>
                  <input
                    ref={addressRef}
                    type="text"
                    id="address"
                    name="address"
                    required
                    placeholder="Your pickup address"
                    className="w-full border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 outline-none transition-colors focus:border-primary"
                    style={{ borderRadius: "7px" }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-white"
                  >
                    Special Instructions (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    placeholder="Additional notes or special instructions..."
                    className="w-full border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 outline-none transition-colors focus:border-primary" style={{ borderRadius: "7px" }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full disabled:opacity-50"
                >
                  {isSubmitting ? "Submitting..." : "Schedule Pickup"}
                  {!isSubmitting && <Send className="ml-2 h-4 w-4" />}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Pickup & Delivery Service",
            provider: {
              "@type": "LocalBusiness",
              name: "Signature Cleaners",
              telephone: "(215) 345-1470",
            },
            description:
              "Free pickup and delivery dry cleaning service throughout Bucks County, PA.",
            areaServed: { "@type": "State", name: "Pennsylvania" },
          }),
        }}
      />
    </>
  );
}
