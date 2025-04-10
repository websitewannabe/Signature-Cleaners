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
          <div className="flex items-center -ml-8 -mb-2">
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
                  <NavigationMenuTrigger className="bg-transparent text-white hover:text-white/80 hover:bg-transparent">Services</NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-white/95 backdrop-blur-sm p-4 rounded-lg shadow-lg">
                    <div className="grid grid-cols-2 gap-3 p-4 w-[500px]">
                      <Link href="/dry-cleaning" className="block p-2 hover:bg-neutral-100 rounded">
                        Dry Cleaning
                      </Link>
                      <Link href="/wash-fold" className="block p-2 hover:bg-neutral-100 rounded">
                        Wash & Fold
                      </Link>
                      <Link href="/alteration-tailoring" className="block p-2 hover:bg-neutral-100 rounded">
                        Alterations & Tailoring
                      </Link>
                      <Link href="/wedding-gown" className="block p-2 hover:bg-neutral-100 rounded">
                        Wedding Gowns
                      </Link>
                      <Link href="/suede-leather-cleaning" className="block p-2 hover:bg-neutral-100 rounded">
                        Suede & Leather
                      </Link>
                      <Link href="/shoe-repair" className="block p-2 hover:bg-neutral-100 rounded">
                        Shoe Repair
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
