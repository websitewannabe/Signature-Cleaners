import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { AirVent, Car, Footprints, Gem, Home, Shirt } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "wouter";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Header = () => {
  const [isOpaque, setIsOpaque] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsOpaque(window.scrollY > 0);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerStyles = `fixed top-0 w-full z-50 transition-all duration-300 ${
    isOpaque ? "bg-[#022349]/90 shadow-lg backdrop-blur-sm" : "bg-transparent"
  }`;

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isOpaque ? "bg-[#5D0002]/90 backdrop-blur-sm" : "bg-[#790003]"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Left: Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div
                className="h-14 w-48 bg-[url('/images/signature-cleaners-logo-white.png')] bg-contain bg-center bg-no-repeat"
                role="img"
                aria-label="Signature Cleaners"
              />
            </Link>
          </div>

          {/* Center: Nav Links */}
          <nav className="hidden flex-1 items-center justify-center gap-8 text-sm font-medium uppercase tracking-wider text-white md:flex">
            <Link
              href="/"
              className="flex h-10 items-center transition-colors duration-200 hover:text-[#F6AE2D]"
            >
              <Home className="h-4 w-4" />
            </Link>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <div className="flex h-10 items-center">
                    <Link href="/all-services/all-services">
                      <NavigationMenuTrigger className="flex h-10 items-center bg-transparent text-sm font-medium uppercase tracking-wider text-white hover:bg-transparent hover:text-[#F6AE2D]">
                        Services
                      </NavigationMenuTrigger>
                    </Link>
                  </div>
                  <NavigationMenuContent className="bg-white/95 p-4 shadow-lg backdrop-blur-sm">
                    <div className="grid w-[600px] grid-cols-2 gap-3 p-4 text-xs text-black">
                      <Link
                        href="/all-services/dry-cleaning"
                        className="flex items-center rounded p-2 text-black transition-colors hover:bg-neutral-100 hover:text-[#790003]"
                      >
                        <AirVent className="mr-2 h-5 w-5 text-[#790003]" />
                        <div>Dry Cleaning</div>
                      </Link>
                      <Link
                        href="/all-services/wash-fold"
                        className="flex items-center rounded p-2 text-black transition-colors hover:bg-neutral-100 hover:text-[#790003]"
                      >
                        <div className="mr-2 h-5 w-5">
                          <img
                            src="/icons/bubbles.svg"
                            alt="Wash & Fold"
                            className="h-full w-full"
                            style={{ filter: "hue-rotate(180deg) saturate(2)" }}
                          />
                        </div>
                        <div>Wash & Fold</div>
                      </Link>
                      <Link
                        href="/all-services/alteration-tailoring"
                        className="flex items-center rounded p-2 text-black transition-colors hover:bg-neutral-100 hover:text-[#790003]"
                      >
                        <Shirt className="mr-2 h-5 w-5 text-[#790003]" />
                        <div>Alterations & Tailoring</div>
                      </Link>
                      <Link
                        href="/all-services/wedding-gown"
                        className="flex items-center rounded p-2 text-black transition-colors hover:bg-neutral-100 hover:text-[#790003]"
                      >
                        <Gem className="mr-2 h-5 w-5 text-[#790003]" />
                        <div>Wedding Gowns</div>
                      </Link>
                      <Link
                        href="/all-services/shoe-repair"
                        className="flex items-center rounded p-2 text-black transition-colors hover:bg-neutral-100 hover:text-[#790003]"
                      >
                        <Footprints className="mr-2 h-5 w-5 text-[#790003]" />
                        <div>Shoe Repair</div>
                      </Link>
                      <Link
                        href="/all-services/clean-household-items"
                        className="flex items-center rounded p-2 text-black transition-colors hover:bg-neutral-100 hover:text-[#790003]"
                      >
                        <svg
                          className="mr-2 h-5 w-5 text-[#790003]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                          />
                        </svg>
                        <div>Cleaning of Household Items</div>
                      </Link>
                      <Link
                        href="/all-services/delivery"
                        className="flex items-center rounded p-2 text-black transition-colors hover:bg-neutral-100 hover:text-[#790003]"
                      >
                        <Car className="mr-2 h-5 w-5 text-[#790003]" />
                        <div>Delivery</div>
                      </Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <Link
              href="/about-us"
              className="flex h-10 items-center transition-colors duration-200 hover:text-[#F6AE2D]"
            >
              About Us
            </Link>
            <Link
              href="/contact-us"
              className="flex h-10 items-center transition-colors duration-200 hover:text-[#F6AE2D]"
            >
              Contact
            </Link>
            <Link
              href="/my-account"
              className="rounded border border-[#181818] px-4 py-2 text-sm uppercase tracking-wider text-white transition-colors duration-200 hover:bg-[#181818]"
            >
              My Account
            </Link>
          </nav>

          {/* Right: Mobile Menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger className="p-2 text-white" aria-label="Open menu">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </SheetTrigger>
              <SheetContent className="w-[300px] border-neutral-800 bg-[#181818]">
                <nav className="flex flex-col gap-4">
                  <Link
                    href="/"
                    className="flex items-center gap-2 py-2 text-white hover:text-[#F6AE2D]"
                  >
                    <Home className="h-4 w-4" />
                    Home
                  </Link>
                  <div className="border-t border-neutral-700" />
                  <Link
                    href="/all-services/dry-cleaning"
                    className="flex items-center gap-2 py-2 text-white hover:text-[#F6AE2D]"
                  >
                    <AirVent className="h-4 w-4" />
                    Dry Cleaning
                  </Link>
                  <Link
                    href="/all-services/wash-fold"
                    className="flex items-center gap-2 py-2 text-white hover:text-[#F6AE2D]"
                  >
                    <img
                      src="/icons/bubbles.svg"
                      alt="Wash & Fold"
                      className="h-4 w-4 text-white"
                      style={{ filter: "brightness(0) invert(1)" }}
                    />
                    Wash & Fold
                  </Link>
                  <Link
                    href="/all-services/alteration-tailoring"
                    className="flex items-center gap-2 py-2 text-white hover:text-[#F6AE2D]"
                  >
                    <Shirt className="h-4 w-4" />
                    Alterations & Tailoring
                  </Link>
                  <Link
                    href="/all-services/wedding-gown"
                    className="flex items-center gap-2 py-2 text-white hover:text-[#F6AE2D]"
                  >
                    <Gem className="h-4 w-4" />
                    Wedding Gowns
                  </Link>
                  <Link
                    href="/all-services/shoe-repair"
                    className="flex items-center gap-2 py-2 text-white hover:text-[#F6AE2D]"
                  >
                    <Footprints className="h-4 w-4" />
                    Shoe Repair
                  </Link>
                  <Link
                    href="/all-services/clean-household-items"
                    className="flex items-center gap-2 py-2 text-white hover:text-[#F6AE2D]"
                  >
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                    Household Items
                  </Link>
                  <Link
                    href="/all-services/delivery"
                    className="flex items-center gap-2 py-2 text-white hover:text-[#F6AE2D]"
                  >
                    <Car className="h-4 w-4" />
                    Delivery
                  </Link>
                  <div className="border-t border-neutral-700" />
                  <Link
                    href="/about-us"
                    className="py-2 text-white hover:text-[#F6AE2D]"
                  >
                    About Us
                  </Link>
                  <Link
                    href="/contact-us"
                    className="py-2 text-white hover:text-[#F6AE2D]"
                  >
                    Contact
                  </Link>
                  <Link href="/my-account" className="mt-4">
                    <button className="w-full rounded bg-[#790003] px-4 py-2 text-sm uppercase tracking-wider text-white transition-colors duration-200 hover:bg-[#F6AE2D]">
                      My Account
                    </button>
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
