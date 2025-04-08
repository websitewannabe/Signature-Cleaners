import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { useAuth } from "@/hooks/use-auth";

const Header = () => {
  const [location] = useLocation();
  const [isOpaque, setIsOpaque] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsOpaque(scrollPosition > 0);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location]);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isOpaque ? "bg-[#2D3748]/90 shadow-lg backdrop-blur-sm" : "bg-[#2D3748]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col items-center">
          {/* Logo */}
          <Link href="/" className="py-6">
            <img
              src="/src/images/signature-cleaners-logo-white.png"
              alt="Signature Cleaners"
              className="h-16 w-auto"
            />
          </Link>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-x-6 py-4 text-base font-medium">
            <NavLink
              href="/auth"
              label="MY ACCOUNT"
              current={location === "/auth"}
            />
            <NavLink
              href="/services"
              label="SERVICES"
              current={location === "/services"}
            />
            <NavLink
              href="/about"
              label="ABOUT US"
              current={location === "/about"}
            />
            <NavLink
              href="/testimonials"
              label="TESTIMONIALS"
              current={location === "/testimonials"}
            />
            <NavLink 
              href="/faq" 
              label="FAQ" 
              current={location === "/faq"} 
            />
            <NavLink
              href="/contact"
              label="CONTACT"
              current={location === "/contact"}
            />
          </nav>
        </div>
      </div>
    </header>
  );
};

const NavLink = ({
  href,
  label,
  current,
}: {
  href: string;
  label: string;
  current: boolean;
}) => (
  <Link
    href={href}
    className={`px-3 py-2 rounded-md text-[#4A5568] hover:text-[#63B3ED] transition-colors duration-200
                min-h-[44px] flex items-center font-sf-pro
                ${current ? "text-[#3182CE]" : ""}`}
  >
    {label}
  </Link>
);

export default Header;