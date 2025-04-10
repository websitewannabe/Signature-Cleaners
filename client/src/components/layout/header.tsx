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
    <header className={`w-full fixed top-0 z-50 transition-all duration-300 ${
      isOpaque ? "bg-black/60 backdrop-blur-sm" : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="flex h-20 items-center justify-between">
          {/* Left: Logo */}
          <div className="flex items-center -ml-4 -mb-2">
            <Link href="/" className="flex items-center space-x-2">
              <img
                src="/src/images/signature-cleaners-logo-white.png"
                alt="Signature Cleaners"
                className="h-16 w-auto"
              />
            </Link>
          </div>

          {/* Center: Nav Links */}
          <nav className="hidden md:flex items-center space-x-12 text-white text-lg font-medium">
            <Link href="/" className="hover:text-white/80 py-2 flex items-center">
              <Home className="w-5 h-5" />
            </Link>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <div className="flex items-center">
                    <Link href="/services" className="mr-2">
                      <NavigationMenuTrigger className="bg-transparent text-white hover:text-white/80 hover:bg-transparent text-lg font-medium">Services</NavigationMenuTrigger>
                    </Link>
                  </div>
                  <NavigationMenuContent className="bg-white/95 backdrop-blur-sm p-4 rounded-lg shadow-lg">
                    <div className="grid grid-cols-2 gap-3 p-4 w-[600px] text-xs">
                      <Link href="/dry-cleaning" className="flex items-center p-2 hover:bg-neutral-100 rounded">
                        <svg className="w-5 h-5 mr-2 text-[#790003]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          {/* Replace with appropriate icon */}
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-5v5m-4-5v5M4 16l4.5-4.5L10 16m4-6l-4.5 4.5L10 10m4-6l-4.5 4.5L10 4" />
                        </svg>
                        <div>Dry Cleaning</div>
                      </Link>
                      <Link href="/wash-fold" className="flex items-center p-2 hover:bg-neutral-100 rounded">
                        <svg className="w-5 h-5 mr-2 text-[#790003]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                        </svg>
                        <div>Wash & Fold</div>
                      </Link>
                      <Link href="/alteration-tailoring" className="flex items-center p-2 hover:bg-neutral-100 rounded">
                        <svg className="w-5 h-5 mr-2 text-[#790003]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          {/* Replace with appropriate icon */}
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 15v-1m4-4h-4m4 4v-1m-4 4H8m4-4v-1m-4-4h-4m-1-1h11m-11 0v11m0-11v11m0-11v11m-4 4v-1m4-4h-4"/>
                        </svg>
                        <div>Alterations & Tailoring</div>
                      </Link>
                      <Link href="/wedding-gown" className="flex items-center p-2 hover:bg-neutral-100 rounded">
                        <svg className="w-5 h-5 mr-2 text-[#790003]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 10h.01M15 10h.01M9 16h6" />
                        </svg>
                        <div>Wedding Gowns</div>
                      </Link>
                      <Link href="/suede-leather-cleaning" className="flex items-center p-2 hover:bg-neutral-100 rounded">
                        <svg className="w-5 h-5 mr-2 text-[#790003]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          {/* Replace with appropriate icon */}
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 13l9-9m-9 9l9 9m-9-9v11m9-11v11"/>
                        </svg>
                        <div>Suede & Leather</div>
                      </Link>
                      <Link href="/shoe-repair" className="flex items-center p-2 hover:bg-neutral-100 rounded">
                        <svg className="w-5 h-5 mr-2 text-[#790003]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          {/* Replace with appropriate icon */}
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.5 5.11l7 12.277 5-5.093"/>
                        </svg>
                        <div>Shoe Repair</div>
                      </Link>
                      <Link href="/clean-household-items" className="flex items-center p-2 hover:bg-neutral-100 rounded">
                        <svg className="w-5 h-5 mr-2 text-[#790003]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                        <div>Cleaning of Household Items</div>
                      </Link>
                      <Link href="/interior-cleaning" className="flex items-center p-2 hover:bg-neutral-100 rounded">
                        <svg className="w-5 h-5 mr-2 text-[#790003]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          {/* Replace with appropriate icon */}
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4"/>
                        </svg>
                        <div>Interior Cleaning</div>
                      </Link>
                      <Link href="/folding-dress-shirt" className="flex items-center p-2 hover:bg-neutral-100 rounded">
                        <svg className="w-5 h-5 mr-2 text-[#790003]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          {/* Replace with appropriate icon */}
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h12a2 2 0 012 2v8z"/>
                        </svg>
                        <div>Folding Dress Shirt Services</div>
                      </Link>
                      <Link href="/delivery" className="flex items-center p-2 hover:bg-neutral-100 rounded">
                        <svg className="w-5 h-5 mr-2 text-[#790003]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          {/* Replace with appropriate icon */}
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
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