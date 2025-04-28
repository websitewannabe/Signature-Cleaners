import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Home, Shirt, Car, Footprints, Gem, AirVent } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
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
      className={`w-full fixed top-0 z-50 transition-all duration-300 ${
        isOpaque ? "bg-[#181818]/90 backdrop-blur-sm" : "bg-[#790003]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex h-16 items-center justify-between">
          {/* Left: Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div
                className="h-14 w-48 bg-[url('/src/images/signature-cleaners-logo-white.png')] bg-contain bg-no-repeat bg-center"
                role="img"
                aria-label="Signature Cleaners"
              />
            </Link>
          </div>

          {/* Center: Nav Links */}
          <nav className="hidden md:flex items-center justify-center flex-1 gap-8 text-white text-sm font-medium tracking-wider uppercase">
            <Link
              href="/"
              className={`${isOpaque ? "hover:text-[#790003]" : "hover:text-[#181818]"} h-10 flex items-center transition-colors duration-200`}
            >
              <Home className="w-4 h-4" />
            </Link>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <div className="flex items-center h-10">
                    <Link href="/services">
                      <NavigationMenuTrigger
                        className={`bg-transparent text-white ${isOpaque ? "hover:text-[#790003]" : "hover:text-[#181818]"} hover:bg-transparent text-sm font-medium h-10 flex items-center tracking-wider uppercase`}
                      >
                        Services
                      </NavigationMenuTrigger>
                    </Link>
                  </div>
                  <NavigationMenuContent className="bg-white/95 backdrop-blur-sm p-4 shadow-lg">
                    <div className="grid grid-cols-2 gap-3 p-4 w-[600px] text-xs">
                      <Link
                        href="/dry-cleaning"
                        className="flex items-center p-2 hover:bg-neutral-100 rounded"
                      >
                        <AirVent className="w-5 h-5 mr-2 text-black" />
                        <div>Dry Cleaning</div>
                      </Link>
                      <Link
                        href="/wash-fold"
                        className="flex items-center p-2 hover:bg-neutral-100 rounded"
                      >
                        <div className="w-5 h-5 mr-2">
                          <img
                            src="/icons/bubbles.svg"
                            alt="Wash & Fold"
                            className="w-full h-full text-[#790003]"
                          />
                        </div>
                        <div>Wash & Fold</div>
                      </Link>
                      <Link
                        href="/alteration-tailoring"
                        className="flex items-center p-2 hover:bg-neutral-100 rounded"
                      >
                        <Shirt className="w-5 h-5 mr-2 text-black" />
                        <div>Alterations & Tailoring</div>
                      </Link>
                      <Link
                        href="/wedding-gown"
                        className="flex items-center p-2 hover:bg-neutral-100 rounded"
                      >
                        <Gem className="w-5 h-5 mr-2 text-black" />
                        <div>Wedding Gowns</div>
                      </Link>
                      <Link
                        href="/shoe-repair"
                        className="flex items-center p-2 hover:bg-neutral-100 rounded"
                      >
                        <Footprints className="w-5 h-5 mr-2 text-black" />
                        <div>Shoe Repair</div>
                      </Link>
                      <Link
                        href="/clean-household-items"
                        className="flex items-center p-2 hover:bg-neutral-100 rounded"
                      >
                        <svg
                          className="w-5 h-5 mr-2 text-black"
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
                        href="/delivery"
                        className="flex items-center p-2 hover:bg-neutral-100 rounded"
                      >
                        <Car className="w-5 h-5 mr-2 text-black" />
                        <div>Delivery</div>
                      </Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <Link
              href="/about-us"
              className={`${isOpaque ? "hover:text-[#790003]" : "hover:text-[#181818]"} h-10 flex items-center transition-colors duration-200`}
            >
              About Us
            </Link>
            <Link
              href="/contact-us"
              className={`${isOpaque ? "hover:text-[#790003]" : "hover:text-[#181818]"} h-10 flex items-center transition-colors duration-200`}
            >
              Contact
            </Link>
            <Link
              href="/auth"
              className="border border-[#181818] hover:bg-[#181818] text-white px-4 py-2 rounded transition-colors duration-200 text-sm tracking-wider uppercase"
            >
              My Account
            </Link>
          </nav>

          {/* Right: Mobile Menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger className="text-white p-2">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </SheetTrigger>
              <SheetContent className="w-[300px] bg-[#181818] border-neutral-800">
                <nav className="flex flex-col gap-4">
                  <Link
                    href="/"
                    className="text-white hover:text-[#F6AE2D] py-2 flex items-center gap-2"
                  >
                    <Home className="w-4 h-4" />
                    Home
                  </Link>
                  <div className="border-t border-neutral-700" />
                  <Link
                    href="/dry-cleaning"
                    className="text-white hover:text-[#F6AE2D] py-2 flex items-center gap-2"
                  >
                    <AirVent className="w-4 h-4" />
                    Dry Cleaning
                  </Link>
                  <Link
                    href="/wash-fold"
                    className="text-white hover:text-[#F6AE2D] py-2 flex items-center gap-2"
                  >
                    <img
                      src="/icons/bubbles.svg"
                      alt="Wash & Fold"
                      className="w-4 h-4"
                    />
                    Wash & Fold
                  </Link>
                  <Link
                    href="/alteration-tailoring"
                    className="text-white hover:text-[#F6AE2D] py-2 flex items-center gap-2"
                  >
                    <Shirt className="w-4 h-4" />
                    Alterations & Tailoring
                  </Link>
                  <Link
                    href="/wedding-gown"
                    className="text-white hover:text-[#F6AE2D] py-2 flex items-center gap-2"
                  >
                    <Gem className="w-4 h-4" />
                    Wedding Gowns
                  </Link>
                  <Link
                    href="/shoe-repair"
                    className="text-white hover:text-[#F6AE2D] py-2 flex items-center gap-2"
                  >
                    <Footprints className="w-4 h-4" />
                    Shoe Repair
                  </Link>
                  <Link
                    href="/clean-household-items"
                    className="text-white hover:text-[#F6AE2D] py-2 flex items-center gap-2"
                  >
                    <svg
                      className="w-4 h-4"
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
                    href="/delivery"
                    className="text-white hover:text-[#F6AE2D] py-2 flex items-center gap-2"
                  >
                    <Car className="w-4 h-4" />
                    Delivery
                  </Link>
                  <div className="border-t border-neutral-700" />
                  <Link
                    href="/about"
                    className="text-white hover:text-[#F6AE2D] py-2"
                  >
                    About Us
                  </Link>
                  <Link
                    href="/contact"
                    className="text-white hover:text-[#F6AE2D] py-2"
                  >
                    Contact
                  </Link>
                  <Link href="/auth" className="mt-4">
                    <button className="w-full bg-[#790003] hover:bg-[#F6AE2D] text-white px-4 py-2 rounded transition-colors duration-200 text-sm tracking-wider uppercase">
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
