"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Twitter, Accessibility } from "lucide-react";

declare global {
  interface Window {
    interdeal: Record<string, unknown>;
  }
}

function loadEqualWebScript() {
  if (typeof window === "undefined") return;
  if (document.querySelector('script[src*="accessibility.js"]')) return;

  window.interdeal = {
    sitekey: "0b5ee2eb111e583d15929d50a9707d6b",
    Position: "left",
    domains: {
      js: "https://cdn.equalweb.com/",
      acc: "https://access.equalweb.com/",
    },
    Menulang: "EN",
    btnStyle: {
      vPosition: ["80%", "20%"],
      scale: ["0.5", "0.5"],
      color: { main: "#790003", second: "#000000" },
      icon: { outline: false, type: 7, shape: "semicircle" },
    },
  };

  const coreCall = document.createElement("script");
  coreCall.src =
    "https://cdn.equalweb.com/core/5.1.13/accessibility.js";
  coreCall.defer = true;
  coreCall.integrity =
    "sha512-70/AbMe6C9H3r5hjsQleJEY4y5l9ykt4WYSgyZj/WjpY/ord/26LWfva163b9W+GwWkfwbP0iLT+h6KRl+LoXA==";
  coreCall.crossOrigin = "anonymous";
  document.body.appendChild(coreCall);
}

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-zinc-950 py-20">
      <div className="container-wide">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="-mt-[30px]">
            <Link href="/" className="relative mb-4 block h-16 w-48">
              <Image
                src="/images/signature-cleaners-logo-white.png"
                alt="Signature Cleaners"
                fill
                className="object-contain"
              />
            </Link>
            <p className="mb-4 text-sm tracking-wide text-white/60">
              Old Fashioned Service. Guaranteed.
            </p>
            <p className="mb-6 text-xs leading-relaxed text-white/50">
              Signature Cleaners has proudly served Doylestown and Bucks County for over 20 years, offering expert dry cleaning, wash &amp; fold, alterations, wedding gown preservation, shoe repair, and free pickup &amp; delivery. As the area&apos;s only Dry Cleaning &amp; Laundry Institute member, we deliver unmatched garment care with old fashioned service you can trust.
            </p>
            <div className="mb-4 flex gap-3">
              <a
                href="https://www.facebook.com/signaturecleaners"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded border border-zinc-800 text-white/70 transition-all hover:border-transparent hover:bg-accent hover:text-white"
              >
                <span className="sr-only">Facebook</span>
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://www.instagram.com/signaturedoylestown/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded border border-zinc-800 text-white/70 transition-all hover:border-transparent hover:bg-accent hover:text-white"
              >
                <span className="sr-only">Instagram</span>
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://x.com/signatureclean"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded border border-zinc-800 text-white/70 transition-all hover:border-transparent hover:bg-accent hover:text-white"
              >
                <span className="sr-only">Twitter</span>
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="https://www.google.com/maps/place/Signature+Cleaners+at+Doylestown/data=!4m2!3m1!1s0x0:0x4739bde141ae22d1?sa=X&ved=1t:2428&ictx=111"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center overflow-hidden rounded border border-zinc-800 transition-all hover:border-transparent hover:bg-accent"
              >
                <span className="sr-only">Google Business Profile</span>
                <Image
                  src="/GBP_Icon.png"
                  alt="Google Business Profile"
                  width={20}
                  height={20}
                  className="object-contain"
                />
              </a>
            </div>
            <button
              onClick={loadEqualWebScript}
              className="flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-primary-light"
            >
              <Accessibility className="h-4 w-4" />
              Accessibility Tools
            </button>
          </div>

          {/* Quick Links */}
          <div className="pt-[50px]">
            <h3 className="mb-4 font-serif text-lg font-semibold text-primary">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { label: "Home", href: "/" },
                { label: "Services", href: "/all-services/all-services" },
                { label: "About Us", href: "/about-us" },
                { label: "Contact Us", href: "/contact-us" },
                { label: "My Account", href: "/my-account" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="pt-[50px]">
            <h3 className="mb-4 font-serif text-lg font-semibold text-primary">
              Services
            </h3>
            <ul className="space-y-2">
              {[
                { label: "Dry Cleaning", href: "/all-services/dry-cleaning" },
                { label: "Wash & Fold", href: "/all-services/wash-fold" },
                {
                  label: "Alterations & Tailoring",
                  href: "/all-services/alteration-tailoring",
                },
                {
                  label: "Wedding Gown Service",
                  href: "/all-services/wedding-gown",
                },
                { label: "Shoe Repair", href: "/all-services/shoe-repair" },
                {
                  label: "Household Items",
                  href: "/all-services/clean-household-items",
                },
                {
                  label: "Pickup & Delivery",
                  href: "/all-services/delivery",
                },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="pt-[50px]">
            <h3 className="mb-4 font-serif text-lg font-semibold text-primary">
              Contact Us
            </h3>
            <ul className="space-y-3 text-white/70">
              <li>
                <a
                  href="https://www.google.com/maps?q=1456+Ferry+Road+%2310,+Doylestown,+PA+18901"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-primary"
                >
                  1456 Ferry Road #10
                  <br />
                  Doylestown, PA 18901
                </a>
              </li>
              <li>
                <a
                  href="tel:+12153451470"
                  className="transition-colors hover:text-primary"
                >
                  (215) 345-1470
                </a>
              </li>
              <li>
                <a
                  href="mailto:customerservice@mysignaturecleaners.com"
                  className="break-all transition-colors hover:text-primary"
                >
                  customerservice@mysignaturecleaners.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col items-center justify-between border-t border-white/[0.06] pt-8 md:flex-row">
          <p className="text-xs text-white/70">
            &copy; {new Date().getFullYear()} Signature Cleaners. All rights
            reserved.
          </p>
          <div className="mt-4 flex flex-wrap gap-6 text-xs md:mt-0">
            <Link
              href="/legal/privacy-policy"
              className="text-white/50 transition-colors hover:text-primary-light"
            >
              Privacy Policy
            </Link>
            <Link
              href="/legal/accessibility-statement"
              className="text-white/50 transition-colors hover:text-primary-light"
            >
              Accessibility
            </Link>
            <a
              href="/sitemap.xml"
              className="text-white/50 transition-colors hover:text-primary-light"
            >
              Sitemap
            </a>
            <Link
              href="/legal/terms-and-conditions"
              className="text-white/50 transition-colors hover:text-primary-light"
            >
              Terms
            </Link>
            <Link
              href="/site-credits"
              className="text-white/50 transition-colors hover:text-primary-light"
            >
              Site Credits
            </Link>
            <a
              href="https://aiwannabe.co"
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="text-white/50 transition-colors hover:text-primary-light"
            >
              Powered by AI Wannabe
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
