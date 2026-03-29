"use client";

import { useState, useEffect, useRef, FormEvent } from "react";
import { CheckCircle, Send } from "lucide-react";

interface ServiceQuoteFormProps {
  service?: string;
  title?: string;
  buttonText?: string;
  subtitle?: string;
}

export default function ServiceQuoteForm({ service = "", title = "Schedule a Pickup", buttonText = "Schedule Pickup", subtitle = "Tell us about your garment care needs." }: ServiceQuoteFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const addressRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!addressRef.current) return;

    async function loadPlaces() {
      try {
        const res = await fetch("/api/places-key");
        if (!res.ok) return;
        const { key } = await res.json();
        if (!key) return;

        if (!document.querySelector('script[src*="maps.googleapis.com"]')) {
          const script = document.createElement("script");
          script.src = `https://maps.googleapis.com/maps/api/js?key=${key}&libraries=places`;
          script.async = true;
          script.onload = initAutocomplete;
          document.head.appendChild(script);
        } else if (window.google?.maps?.places) {
          initAutocomplete();
        }
      } catch {
        // Places autocomplete unavailable, form still works without it
      }
    }

    function initAutocomplete() {
      if (!addressRef.current || !window.google?.maps?.places) return;
      new window.google.maps.places.Autocomplete(addressRef.current, {
        types: ["address"],
        componentRestrictions: { country: "us" },
      });
    }

    loadPlaces();
  }, []);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
      });
      setSubmitted(true);
    } catch {
      alert("Something went wrong. Please call us at (215) 345-1470.");
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="card-luxury flex flex-col items-center py-12 text-center">
        <CheckCircle className="mb-4 h-12 w-12 text-green-500" />
        <h3 className="mb-2 font-serif text-xl font-bold text-white">
          Thank You!
        </h3>
        <p className="text-white/80">
          We&apos;ll be in touch shortly to confirm your pickup.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card-luxury !p-3 space-y-4 md:!p-8">
      <input type="hidden" name="form-name" value="quote" />
      <input type="hidden" name="service" value={service} />
      <p className="hidden">
        <label>
          Don&apos;t fill this out: <input name="bot-field" />
        </label>
      </p>

      <h3 className="font-serif text-xl font-bold text-white">
        {title}
      </h3>
      <p className="text-sm text-white/80">
        {subtitle}
      </p>

      <input
        type="text"
        name="name"
        required
        placeholder="Your Name"
        className="w-full border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 outline-none transition-colors focus:border-primary"
        style={{ borderRadius: "7px" }}
      />
      <div className="grid grid-cols-2 gap-4">
        <input
          type="email"
          name="email"
          required
          placeholder="Email"
          className="w-full border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 outline-none transition-colors focus:border-primary"
          style={{ borderRadius: "7px" }}
        />
        <input
          type="tel"
          name="phone"
          required
          placeholder="Phone"
          className="w-full border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 outline-none transition-colors focus:border-primary"
          style={{ borderRadius: "7px" }}
        />
      </div>
      <input
        ref={addressRef}
        type="text"
        name="address"
        placeholder="Your Address"
        className="w-full border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 outline-none transition-colors focus:border-primary"
        style={{ borderRadius: "7px" }}
      />
      <textarea
        name="message"
        rows={3}
        placeholder="Tell us about your needs..."
        className="w-full border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 outline-none transition-colors focus:border-primary"
        style={{ borderRadius: "7px" }}
      />
      <button
        type="submit"
        disabled={submitting}
        className="btn-primary w-full disabled:opacity-50"
      >
        {submitting ? "Sending..." : buttonText}
        {!submitting && <Send className="ml-2 h-4 w-4" />}
      </button>
    </form>
  );
}
