import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Home } from "lucide-react";
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
    isOpaque ? "bg-black/35 shadow-lg backdrop-blur-sm" : "bg-transparent"
  }`;

  return (
    <header
      className={`w-full fixed top-0 z-50 transition-all duration-300 ${
        isOpaque ? "bg-black/60 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="flex h-20 items-center justify-between">
          {/* Left: Logo */}
          <div className="flex items-center -ml-2 -mb-2">
            <Link href="/" className="flex items-center space-x-2">
              <div 
                className="h-16 w-48 bg-[url('/src/images/signature-cleaners-logo-white.png')] bg-contain bg-no-repeat bg-center"
                role="img"
                aria-label="Signature Cleaners"
              />
            </Link>
          </div>

          {/* Center: Nav Links */}
          <nav className="hidden md:flex items-center space-x-12 text-white text-lg font-medium">
            <Link
              href="/"
              className="hover:text-white/80 py-2 flex items-center"
            >
              <Home className="w-5 h-5" />
            </Link>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <div className="flex items-center">
                    <Link href="/services" className="mr-2">
                      <NavigationMenuTrigger className="bg-transparent text-white hover:text-white/80 hover:bg-transparent text-lg font-medium">
                        Services
                      </NavigationMenuTrigger>
                    </Link>
                  </div>
                  <NavigationMenuContent className="bg-white/95 backdrop-blur-sm p-4 rounded-lg shadow-lg">
                    <div className="grid grid-cols-2 gap-3 p-4 w-[600px] text-xs">
                      <Link
                        href="/dry-cleaning"
                        className="flex items-center p-2 hover:bg-neutral-100 rounded"
                      >
                        <svg
                          className="w-5 h-5 mr-2 text-[#790003]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                          />
                        </svg>
                        <div>Dry Cleaning</div>
                      </Link>
                      <Link
                        href="/wash-fold"
                        className="flex items-center p-2 hover:bg-neutral-100 rounded"
                      >
                        <svg
                          className="w-5 h-5 mr-2 text-[#790003]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                          />
                        </svg>
                        <div>Wash & Fold</div>
                      </Link>
                      <Link
                        href="/alteration-tailoring"
                        className="flex items-center p-2 hover:bg-neutral-100 rounded"
                      >
                        <svg
                          className="w-5 h-5 mr-2 text-[#790003]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                          />
                        </svg>
                        <div>Alterations & Tailoring</div>
                      </Link>
                      <Link
                        href="/wedding-gown"
                        className="flex items-center p-2 hover:bg-neutral-100 rounded"
                      >
                        <svg
                          className="w-5 h-5 mr-2 text-[#790003]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <div>Wedding Gowns</div>
                      </Link>

                      <Link
                        href="/shoe-repair"
                        className="flex items-center p-2 hover:bg-neutral-100 rounded"
                      >
                        <svg
                          className="w-5 h-5 mr-2 text-[#790003]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                          />
                        </svg>
                        <div>Shoe Repair</div>
                      </Link>
                      <Link
                        href="/clean-household-items"
                        className="flex items-center p-2 hover:bg-neutral-100 rounded"
                      >
                        <svg
                          className="w-5 h-5 mr-2 text-[#790003]"
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
                        href="/folding-dress-shirt"
                        className="flex items-center p-2 hover:bg-neutral-100 rounded"
                      >
                        <svg
                          className="w-5 h-5 mr-2 text-[#790003]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 11l7-7 7 7M5 19l7-7 7 7"
                          />
                        </svg>
                        <div>Folding Dress Shirt Services</div>
                      </Link>
                      <Link
                        href="/delivery"
                        className="flex items-center p-2 hover:bg-neutral-100 rounded"
                      >
                        <svg
                          className="w-5 h-5 mr-2 text-[#790003]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <div>Delivery</div>
                      </Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <Link href="/about" className="hover:text-white/80 py-2">
              About Us
            </Link>
            <Link href="/contact" className="hover:text-white/80 py-2">
              Contact
            </Link>
            <Link href="/auth" className="hover:text-white/80 py-2">
              My Account
            </Link>
          </nav>

          {/* Right: Optional - Mobile Menu or CTA */}
          <div className="md:hidden">
            {/* Your mobile menu trigger here (Sheet, hamburger icon, etc.) */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;