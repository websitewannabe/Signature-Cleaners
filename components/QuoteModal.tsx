"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from "react";
import { CheckCircle, X } from "lucide-react";

interface QuoteModalContextType {
  openQuoteModal: () => void;
}

const QuoteModalContext = createContext<QuoteModalContextType | null>(null);

export function useQuoteModal() {
  const context = useContext(QuoteModalContext);
  if (!context) {
    throw new Error("useQuoteModal must be used within a QuoteModalProvider");
  }
  return context;
}

export function QuoteModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const openQuoteModal = useCallback(() => {
    setIsOpen(true);
    setIsSubmitted(false);
    setError("");
  }, []);

  const closeModal = () => {
    setIsOpen(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
      service: "",
      message: "",
    });
    setIsSubmitted(false);
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const params = new URLSearchParams();
      params.append("form-name", "quote");
      params.append("name", formData.name);
      params.append("email", formData.email);
      params.append("phone", formData.phone);
      params.append("address", formData.address);
      params.append("service", formData.service);
      params.append("message", formData.message);

      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params.toString(),
      });

      if (res.ok) {
        setIsSubmitted(true);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <QuoteModalContext.Provider value={{ openQuoteModal }}>
      {children}

      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4"
          style={{ animation: "fadeIn 0.3s ease-out" }}
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-lg border border-white/10 bg-zinc-900 p-8"
            style={{ animation: "slideUp 0.4s ease-out", borderRadius: "7px" }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute right-4 top-4 text-zinc-400 transition-colors hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>

            {isSubmitted ? (
              <div className="flex flex-col items-center py-8 text-center">
                <CheckCircle className="mb-4 h-16 w-16 text-green-500" />
                <h3 className="mb-2 font-serif text-2xl font-bold text-white">
                  Thank You!
                </h3>
                <p className="mb-6 text-zinc-400">
                  We&apos;ll be in touch shortly to confirm your pickup.
                </p>
                <p className="text-zinc-300">
                  Or call us now:{" "}
                  <a
                    href="tel:+12153451470"
                    className="font-semibold text-accent-light hover:underline"
                  >
                    (215) 345-1470
                  </a>
                </p>
              </div>
            ) : (
              <>
                <h3 className="mb-2 font-serif text-2xl font-bold text-white">
                  Schedule a Pickup
                </h3>
                <p className="mb-6 text-zinc-400">
                  Tell us about your garment care needs.
                </p>

                {error && (
                  <p className="mb-4 rounded-md bg-red-900/30 p-3 text-sm text-red-400">
                    {error}
                  </p>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full rounded-md border border-zinc-300 bg-white px-4 py-3 text-zinc-900 placeholder-zinc-400 outline-none focus:border-primary"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="email"
                      placeholder="Email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full rounded-md border border-zinc-300 bg-white px-4 py-3 text-zinc-900 placeholder-zinc-400 outline-none focus:border-primary"
                    />
                    <input
                      type="tel"
                      placeholder="Phone"
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full rounded-md border border-zinc-300 bg-white px-4 py-3 text-zinc-900 placeholder-zinc-400 outline-none focus:border-primary"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Address"
                    value={formData.address}
                    onChange={(e) =>
                      setFormData({ ...formData, address: e.target.value })
                    }
                    className="w-full rounded-md border border-zinc-300 bg-white px-4 py-3 text-zinc-900 placeholder-zinc-400 outline-none focus:border-primary"
                  />
                  <select
                    value={formData.service}
                    onChange={(e) =>
                      setFormData({ ...formData, service: e.target.value })
                    }
                    className="w-full rounded-md border border-zinc-300 bg-white px-4 py-3 text-zinc-900 outline-none focus:border-primary"
                  >
                    <option value="">Select a Service</option>
                    <option value="dry-cleaning">Dry Cleaning</option>
                    <option value="wash-fold">Wash &amp; Fold</option>
                    <option value="wedding-gown">Wedding Gown Preservation</option>
                    <option value="alterations">Alterations &amp; Tailoring</option>
                    <option value="shoe-repair">Shoe Repair</option>
                    <option value="household">Household Items</option>
                    <option value="delivery">Pickup &amp; Delivery</option>
                  </select>
                  <textarea
                    placeholder="Tell us about your needs..."
                    rows={3}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full rounded-md border border-zinc-300 bg-white px-4 py-3 text-zinc-900 placeholder-zinc-400 outline-none focus:border-primary"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full disabled:opacity-50"
                  >
                    {isSubmitting ? "Sending..." : "Schedule Pickup"}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </QuoteModalContext.Provider>
  );
}
