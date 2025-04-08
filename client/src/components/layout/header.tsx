import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const Header = () => {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/80 backdrop-blur-md shadow-sm" 
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-24 items-center justify-between">
          {/* Left Navigation */}
          <div className="hidden md:flex items-center space-x-8 flex-1 justify-end">
            <NavLink href="/services" label="SERVICES" current={location === "/services"} />
            <NavLink href="/about" label="ABOUT" current={location === "/about"} />
            <NavLink href="/auth" label="ACCOUNT" current={location === "/auth"} />
          </div>

          {/* Centered Logo */}
          <div className="flex-shrink-0 flex items-center mx-8">
            <Link href="/">
              <img
                src="/src/images/signature-cleaners-logo-white.png"
                alt="Signature Cleaners"
                className="h-30 w-auto transition-opacity duration-200 hover:opacity-80"
              />
            </Link>
          </div>

          {/* Right Navigation */}
          <div className="hidden md:flex items-center space-x-8 flex-1 justify-start">
            <NavLink href="/testimonials" label="TESTIMONIALS" current={location === "/testimonials"} />
            <NavLink href="/faq" label="FAQ" current={location === "/faq"} />
            <NavLink href="/contact" label="CONTACT" current={location === "/contact"} />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" className="text-neutral-800">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-white">
                <div className="py-4 flex flex-col gap-4">
                  <MobileNavLink href="/services" label="SERVICES" current={location === "/services"} />
                  <MobileNavLink href="/about" label="ABOUT" current={location === "/about"} />
                  <MobileNavLink href="/auth" label="ACCOUNT" current={location === "/auth"} />
                  <MobileNavLink href="/testimonials" label="TESTIMONIALS" current={location === "/testimonials"} />
                  <MobileNavLink href="/faq" label="FAQ" current={location === "/faq"} />
                  <MobileNavLink href="/contact" label="CONTACT" current={location === "/contact"} />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
};

const NavLink = ({ href, label, current }: { href: string; label: string; current: boolean }) => (
  <Link
    href={href}
    className={`font-medium tracking-wide px-3 py-2 text-neutral-800 transition-colors duration-200
      ${current 
        ? "border-b-2 border-neutral-800" 
        : "hover:text-neutral-600 border-b-2 border-transparent hover:border-neutral-400"}`}
  >
    {label}
  </Link>
);

const MobileNavLink = ({ href, label, current }: { href: string; label: string; current: boolean }) => (
  <SheetClose asChild>
    <Link
      href={href}
      className={`block px-3 py-2 text-lg font-medium tracking-wide transition-colors
        ${current 
          ? "text-neutral-900 bg-neutral-100" 
          : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50"}`}
    >
      {label}
    </Link>
  </SheetClose>
);

export default Header;