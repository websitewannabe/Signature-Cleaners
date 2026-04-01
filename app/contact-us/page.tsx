"use client";

import { useState, FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import QuoteButton from "@/components/QuoteButton";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  CheckCircle,
  Send,
} from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    label: "Address",
    value: "1456 Ferry Road #10, Doylestown, PA 18901",
    href: "https://www.google.com/maps/search/?api=1&query=1456+Ferry+Road+%2310+Doylestown+PA+18901",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "(215) 345-1470",
    href: "tel:+12153451470",
  },
  {
    icon: Mail,
    label: "Email",
    value: "customerservice@mysignaturecleaners.com",
    href: "mailto:customerservice@mysignaturecleaners.com",
  },
];

const hours = [
  { day: "Monday - Friday", time: "7:00 AM - 6:00 PM" },
  { day: "Saturday", time: "8:00 AM - 3:00 PM" },
  { day: "Sunday", time: "Closed" },
];

const faqs = [
  {
    q: "How do I sign up?",
    a: "Call (215) 345-1470 \u2013 Include your sign up form with your name, address and phone number on your first order.",
  },
  {
    q: "Where are my clothes picked up and delivered?",
    a: "To your home, office, or concierge.",
  },
  {
    q: "Is there a minimum order?",
    a: "No, we pick up any amount.",
  },
  {
    q: "What do I put my clothes in?",
    a: "Call us for 2 Signature Cleaners bags with name tags.",
  },
  {
    q: "Do I have to be there for pickup/delivery?",
    a: "No, the driver will use a pre-determined location.",
  },
  {
    q: "When will clothes be picked up/dropped off?",
    a: "Twice a week, specialty items may take longer.",
  },
  {
    q: "What about holidays?",
    a: "We\u2019ll inform you of any changes to the schedule.",
  },
  {
    q: "Special requests?",
    a: "Place the garment in a separate bag with a detailed note.",
  },
  {
    q: "Do you do alterations?",
    a: "Yes, pin instructions to the garment.",
  },
  {
    q: "How do I pay?",
    a: "Charged to AmEx, Visa, Mastercard, or Discover.",
  },
  {
    q: "How do you keep my credit card safe?",
    a: "We use the latest encryption and authentication technology to protect your information.",
  },
];

const cities = [
  "Buckingham",
  "Carversville",
  "Chalfont",
  "Doylestown",
  "Dublin",
  "Fountainville",
  "Furlong",
  "Holland",
  "Ivyland",
  "Jamison",
  "Lahaska",
  "Morrisville",
  "New Hope",
  "Newtown",
  "Ottsville",
  "Perkasie",
  "Pipersville",
  "Point Pleasant",
  "Richboro",
  "Southampton",
  "Warminster",
  "Warrington",
  "Washington Crossing",
  "Yardley",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      // Try Netlify Forms first
      const netlifyBody = new URLSearchParams();
      netlifyBody.append("form-name", "contact");
      netlifyBody.append("bot-field", "");
      Object.entries(formData).forEach(([key, value]) => {
        netlifyBody.append(key, value);
      });

      const netlifyRes = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: netlifyBody.toString(),
      });

      if (netlifyRes.ok) {
        setSubmitted(true);
        return;
      }

      throw new Error("Netlify form submission failed");
    } catch {
      // Fall back to API route
      try {
        const apiRes = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        if (apiRes.ok) {
          setSubmitted(true);
          return;
        }

        throw new Error("API submission failed");
      } catch {
        setError(
          "Something went wrong. Please call us at (215) 345-1470 or try again later."
        );
      }
    } finally {
      setSubmitting(false);
    }
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "DryCleaningOrLaundry"],
    name: "Signature Cleaners",
    alternateName: "Signature Cleaners of Doylestown",
    url: "https://www.mysignaturecleaners.com",
    image: "https://www.mysignaturecleaners.com/images/interior.webp",
    logo: "https://www.mysignaturecleaners.com/images/logo.png",
    description:
      "Get in touch with Signature Cleaners for dry cleaning, laundry, and garment care. Contact us to schedule a pickup or find store hours and location.",
    telephone: "+1-215-345-1470",
    email: "customerservice@mysignaturecleaners.com",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1456 Ferry Road #10",
      addressLocality: "Doylestown",
      addressRegion: "PA",
      postalCode: "18901",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "40.310005",
      longitude: "-75.129097",
    },
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
    areaServed: cities.map((city) => ({
      "@type": "Place",
      name: city + ", PA",
    })),
  };

  return (
    <>
      {/* Hero Header */}
      <section className="relative flex h-[280px] items-end md:h-[380px]">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/20 via-transparent to-transparent" />
        <div className="container-wide relative z-10 pb-12 md:pb-16">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
            Get in Touch
          </p>
          <h1 className="heading-xl mb-4 max-w-3xl text-white">
            Contact <span className="text-primary">Us</span>
          </h1>
          <p className="max-w-xl text-lg text-white">
            Schedule a pickup, ask a question, or learn more about our garment
            care services.
          </p>
        </div>
      </section>

      {/* Contact Form + Sidebar */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="flex flex-col items-center justify-center border border-white/10 bg-zinc-900/80 py-20 text-center" style={{ borderRadius: "7px" }}>
                  <CheckCircle className="mb-4 h-16 w-16 text-green-500" />
                  <h2 className="mb-2 font-serif text-2xl font-bold text-white">
                    Message Sent!
                  </h2>
                  <p className="max-w-md text-white/80">
                    Thank you for reaching out. We&apos;ll get back to you
                    within one business day. For immediate assistance, call us
                    at{" "}
                    <a
                      href="tel:+12153451470"
                      className="text-primary hover:underline"
                    >
                      (215) 345-1470
                    </a>
                    .
                  </p>
                </div>
              ) : (
                <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  {/* Netlify hidden fields */}
                  <input type="hidden" name="form-name" value="contact" />
                  <p className="hidden">
                    <label>
                      Don&apos;t fill this out:{" "}
                      <input name="bot-field" />
                    </label>
                  </p>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-medium text-white"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full rounded-md border border-zinc-300 bg-white px-4 py-3 text-zinc-900 placeholder-zinc-400 transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-medium text-white"
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full rounded-md border border-zinc-300 bg-white px-4 py-3 text-zinc-900 placeholder-zinc-400 transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label
                        htmlFor="phone"
                        className="mb-2 block text-sm font-medium text-white"
                      >
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full rounded-md border border-zinc-300 bg-white px-4 py-3 text-zinc-900 placeholder-zinc-400 transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                        placeholder="(215) 555-0100"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="address"
                        className="mb-2 block text-sm font-medium text-white"
                      >
                        Address
                      </label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className="w-full rounded-md border border-zinc-300 bg-white px-4 py-3 text-zinc-900 placeholder-zinc-400 transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                        placeholder="123 Main St, Doylestown, PA"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-medium text-white"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full rounded-md border border-zinc-300 bg-white px-4 py-3 text-zinc-900 placeholder-zinc-400 transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="How can we help you?"
                    />
                  </div>

                  {error && (
                    <p className="text-sm text-red-400">{error}</p>
                  )}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-primary inline-flex items-center gap-2 disabled:opacity-50"
                  >
                    {submitting ? "Sending..." : "Send Message"}
                    <Send className="h-4 w-4" />
                  </button>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Contact Info */}
              <div className="card-luxury !p-5">
                <h2 className="mb-4 font-serif text-xl font-semibold text-white">
                  Contact Information
                </h2>
                <div className="space-y-4">
                  {contactInfo.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.icon === MapPin ? "_blank" : undefined}
                      rel={
                        item.icon === MapPin
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="flex items-start gap-3 text-white transition-colors hover:text-primary"
                    >
                      <item.icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <div className="min-w-0">
                        <div className="text-xs font-semibold uppercase tracking-wider text-white/60">
                          {item.label}
                        </div>
                        <div className="break-all text-sm">{item.value}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Hours */}
              <div className="card-luxury !p-5">
                <h2 className="mb-6 font-serif text-xl font-semibold text-white">
                  <Clock className="mb-1 mr-2 inline-block h-5 w-5 text-primary" />
                  Store Hours
                </h2>
                <div className="space-y-3">
                  {hours.map((h) => (
                    <div
                      key={h.day}
                      className="flex items-center justify-between text-sm"
                    >
                      <span className="text-white/80">{h.day}</span>
                      <span
                        className={
                          h.time === "Closed"
                            ? "font-medium text-red-400"
                            : "font-medium text-white"
                        }
                      >
                        {h.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <h2 className="heading-xl mb-12 text-center text-zinc-900">
            Frequently Asked{" "}
            <span className="text-primary">Questions</span>
          </h2>
          <div className="mx-auto max-w-3xl">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-zinc-200 py-5">
                <h3 className="mb-2 font-medium text-zinc-900">{faq.q}</h3>
                <p className="text-sm leading-relaxed text-zinc-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24">
        <Image
          src="/images/Background.webp"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-accent/80" />
        <div className="container-wide relative text-center">
          <h2 className="heading-xl mb-6 text-white">
            Ready to simplify your laundry routine?
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-lg text-white/80">
            Join 10,000+ satisfied customers who trust Signature Cleaners with
            their garment care.
          </p>
          <Link
            href="/schedule"
            className="inline-flex items-center justify-center rounded-[7px] bg-white px-8 py-3 text-sm font-semibold text-accent transition-colors hover:bg-primary"
          >
            Schedule a Pickup →
          </Link>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section-padding border-t border-white/10 bg-zinc-950">
        <div className="container-wide">
          <div className="mb-12 text-center">
            <h2 className="heading-xl mb-4">
              Areas <span className="text-primary">We Serve</span>
            </h2>
            <p className="mx-auto max-w-2xl text-white/80">
              We service the following areas in Bucks County and surrounding
              regions with free pickup and delivery.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-2 md:grid-cols-3 lg:grid-cols-4">
            {cities.map((city) => {
              const slug = city.toLowerCase().replace(/\s+/g, "_");
              return (
                <Link
                  key={city}
                  href={`/${slug}`}
                  className="flex items-center py-1 text-white transition-colors hover:text-primary"
                >
                  <span className="mr-2 text-primary">&bull;</span>
                  {city}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
