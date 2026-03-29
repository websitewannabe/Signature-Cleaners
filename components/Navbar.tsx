"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  AirVent,
  Car,
  ChevronDown,
  Footprints,
  Gem,
  Home,
  Menu,
  Shirt,
  X,
} from "lucide-react";

const services = [
  {
    name: "Dry Cleaning",
    href: "/all-services/dry-cleaning",
    icon: AirVent,
  },
  {
    name: "Wash & Fold",
    href: "/all-services/wash-fold",
    icon: null,
    iconSrc: "/icons/bubbles.svg",
  },
  {
    name: "Alterations & Tailoring",
    href: "/all-services/alteration-tailoring",
    icon: Shirt,
  },
  {
    name: "Wedding Gowns",
    href: "/all-services/wedding-gown",
    icon: Gem,
  },
  {
    name: "Shoe Repair",
    href: "/all-services/shoe-repair",
    icon: Footprints,
  },
  {
    name: "Household Items",
    href: "/all-services/clean-household-items",
    icon: Home,
  },
  {
    name: "Delivery",
    href: "/all-services/delivery",
    icon: Car,
  },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        isScrolled
          ? "bg-accent-dark/95 shadow-lg shadow-black/20 backdrop-blur-sm"
          : "bg-accent"
      }`}
    >
      <div className="container-wide">
        <div className="flex h-[72px] items-center justify-between md:h-20">
          {/* Logo */}
          <Link href="/" className="relative h-14 w-[250px]">
            <Image
              src="/images/signature-cleaners-logo-white.png"
              alt="Signature Cleaners"
              fill
              className="object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-8 text-sm font-medium uppercase tracking-wider text-white lg:flex">
            <Link
              href="/"
              className="flex h-10 items-center transition-colors hover:text-primary-light"
            >
              <Home className="h-4 w-4" />
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <Link
                href="/all-services/all-services"
                className="flex h-10 items-center gap-1 transition-colors hover:text-primary-light"
              >
                Services
                <ChevronDown className="h-3 w-3" />
              </Link>

              {isServicesOpen && (
                <div className="absolute left-1/2 top-full -translate-x-1/2 pt-2">
                  <div className="grid w-[500px] grid-cols-2 gap-1 border border-white/[0.06] bg-zinc-950/95 p-4 shadow-2xl shadow-black/40 backdrop-blur-sm" style={{ borderRadius: "7px" }}>
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="flex items-center gap-3 rounded-md px-3 py-2.5 text-sm normal-case tracking-normal text-zinc-300 transition-colors hover:bg-white/10 hover:text-white"
                      >
                        {service.icon ? (
                          <service.icon className="h-4 w-4 text-primary" />
                        ) : service.iconSrc ? (
                          <svg className="h-4 w-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="8" cy="8" r="3" />
                            <circle cx="16" cy="16" r="3" />
                            <circle cx="16" cy="8" r="2" />
                            <circle cx="8" cy="16" r="2" />
                          </svg>
                        ) : null}
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/about-us"
              className="flex h-10 items-center transition-colors hover:text-primary-light"
            >
              About Us
            </Link>
            <Link
              href="/contact-us"
              className="flex h-10 items-center transition-colors hover:text-primary-light"
            >
              Contact
            </Link>
            <Link
              href="/my-account"
              className="inline-flex items-center justify-center border border-primary bg-primary px-5 py-2 text-xs font-semibold uppercase tracking-widest text-white transition-all hover:bg-transparent hover:border-white hover:text-white"
              style={{ borderRadius: "7px" }}
            >
              My Account
            </Link>
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="text-white lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-white/10 bg-zinc-900/95 backdrop-blur-sm lg:hidden">
          <nav className="container-wide flex flex-col gap-1 py-4">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="rounded-md px-4 py-3 text-white transition-colors hover:bg-white/10"
            >
              Home
            </Link>

            <button
              onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
              className="flex items-center justify-between rounded-md px-4 py-3 text-white transition-colors hover:bg-white/10"
            >
              Services
              <ChevronDown
                className={`h-4 w-4 transition-transform ${
                  isMobileServicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isMobileServicesOpen && (
              <div className="ml-4 flex flex-col gap-1">
                <Link
                  href="/all-services/all-services"
                  onClick={() => setIsOpen(false)}
                  className="rounded-md px-4 py-2 text-sm text-primary transition-colors hover:bg-white/10 hover:text-white"
                >
                  All Services
                </Link>
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    onClick={() => setIsOpen(false)}
                    className="rounded-md px-4 py-2 text-sm text-zinc-300 transition-colors hover:bg-white/10 hover:text-white"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            )}

            <Link
              href="/about-us"
              onClick={() => setIsOpen(false)}
              className="rounded-md px-4 py-3 text-white transition-colors hover:bg-white/10"
            >
              About Us
            </Link>
            <Link
              href="/contact-us"
              onClick={() => setIsOpen(false)}
              className="rounded-md px-4 py-3 text-white transition-colors hover:bg-white/10"
            >
              Contact
            </Link>
            <Link
              href="/my-account"
              onClick={() => setIsOpen(false)}
              className="mt-2 btn-primary text-center"
            >
              My Account
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
