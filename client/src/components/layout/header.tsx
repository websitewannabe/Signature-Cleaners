import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Home } from "lucide-react";

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
    <header className={headerStyles}>
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-20">
          {/* Left Section - Logo */}
          <div className="w-1/4 flex justify-start">
            <Link href="/" className="flex-shrink-0">
              <img
                src="/src/images/signature-cleaners-logo-white.png"
                alt="Signature Cleaners"
                className="h-20 w-auto transition-all duration-300"
              />
            </Link>
          </div>

          {/* Center Section - Navigation */}
          <nav className="flex items-center justify-center space-x-8 w-2/4 text-lg">
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
          <div className="w-1/4 flex justify-end space-x-8 text-lg">
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
        </div>
      </div>
    </header>
  );
};

export default Header;