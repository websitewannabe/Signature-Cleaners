import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { useAuth } from "@/hooks/use-auth";

const Header = () => {
  const [location] = useLocation();
  const { user, logoutMutation } = useAuth();
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
        isOpaque ? "bg-black/35 shadow-lg backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          {/* Logo */}
          <Link href="/" className="py-4">
            <img
              src="/src/images/signature-cleaners-logo-white.png"
              alt="Signature Cleaners"
              className="h-24 w-auto"
            />
          </Link>

          {/* Navigation */}
          <nav className="flex justify-center flex-wrap gap-x-8 py-2 text-lg">
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
    className={`font-medium tracking-wider px-3 py-2 text-white transition-all duration-200
                ${
                  current
                    ? "border-b-2 border-white"
                    : "hover:text-white/80 border-b-2 border-transparent hover:border-white/50"
                }`}
  >
    {label}
  </Link>
);

export default Header;