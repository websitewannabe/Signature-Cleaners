
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Home } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Header = () => {
  const [location] = useLocation();
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
    <header className={headerStyles}>
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-24">
          {/* Left Section - Logo */}
          <div className="flex-1">
            <Link href="/" className="flex-shrink-0">
              <img
                src="/src/images/signature-cleaners-logo-white.png"
                alt="Signature Cleaners"
                className={`h-24 w-auto transition-all duration-300 ${
                  isOpaque ? "scale-90" : "scale-100"
                }`}
              />
            </Link>
          </div>

          {/* Center Section - Navigation */}
          <nav className="hidden md:flex items-center space-x-8 flex-1 justify-center text-lg">
            <Link
              href="/"
              className="flex items-center px-3 py-2 text-white hover:text-white/80"
            >
              <Home className="h-5 w-5" aria-label="Home" />
            </Link>
            <Link
              href="/services"
              className="text-white hover:text-white/80 font-medium tracking-wider"
            >
              SERVICES
            </Link>
            <Link
              href="/about"
              className="text-white hover:text-white/80 font-medium tracking-wider"
            >
              ABOUT US
            </Link>
          </nav>

          {/* Right Section - Contact & Account */}
          <div className="hidden md:flex items-center justify-end space-x-8 flex-1 text-lg">
            <Link
              href="/contact"
              className="text-white hover:text-white/80 font-medium tracking-wider"
            >
              CONTACT
            </Link>
            <Link
              href="/auth"
              className="text-white hover:text-white/80 font-medium tracking-wider"
            >
              MY ACCOUNT
            </Link>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  className="text-white hover:text-white/80"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-neutral-900">
                <nav className="flex flex-col space-y-4 mt-8">
                  <Link
                    href="/"
                    className="text-white hover:text-white/80 text-lg font-medium tracking-wider"
                  >
                    HOME
                  </Link>
                  <Link
                    href="/services"
                    className="text-white hover:text-white/80 text-lg font-medium tracking-wider"
                  >
                    SERVICES
                  </Link>
                  <Link
                    href="/about"
                    className="text-white hover:text-white/80 text-lg font-medium tracking-wider"
                  >
                    ABOUT US
                  </Link>
                  <Link
                    href="/contact"
                    className="text-white hover:text-white/80 text-lg font-medium tracking-wider"
                  >
                    CONTACT
                  </Link>
                  <Link
                    href="/auth"
                    className="text-white hover:text-white/80 text-lg font-medium tracking-wider"
                  >
                    MY ACCOUNT
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
