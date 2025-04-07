import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { useAuth } from "@/hooks/use-auth";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const Header = () => {
  const [location] = useLocation();
  const { user, logoutMutation } = useAuth();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled || location !== "/" ? "bg-white/35 shadow-lg backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex justify-between items-center h-24">
          {/* Left Navigation */}
          <nav className="hidden md:flex space-x-8 flex-1 justify-center text-lg">
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
          </nav>

          {/* Centered Logo */}
          <Link href="/" className="flex items-center mx-6 pt-2">
            <img
              src="/src/images/signature-cleaners-logo.png"
              alt="Signature Cleaners"
              className="h-20 w-auto"
            />
          </Link>

          {/* Right Navigation and CTA */}
          <div className="hidden md:flex items-center justify-center space-x-8 flex-1 text-lg">
            <NavLink
              href="/testimonials"
              label="TESTIMONIALS"
              current={location === "/testimonials"}
            />
            <NavLink
              href="/contact"
              label="CONTACT"
              current={location === "/contact"}
            />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  className="p-2 text-white hover:text-white/80"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-[#661111] text-white">
                <div className="py-4 flex flex-col gap-4">
                  <MobileNavLink
                    href="/"
                    label="HOME"
                    current={location === "/"}
                  />
                  <MobileNavLink
                    href="/services"
                    label="SERVICES"
                    current={location === "/services"}
                  />
                  <MobileNavLink
                    href="/about"
                    label="ABOUT US"
                    current={location === "/about"}
                  />
                  <MobileNavLink
                    href="/testimonials"
                    label="TESTIMONIALS"
                    current={location === "/testimonials"}
                  />
                  <MobileNavLink
                    href="/contact"
                    label="CONTACT"
                    current={location === "/contact"}
                  />
                  <div className="pt-4 mt-4 border-t border-white/20">
                    <Link href="/schedule">
                      <Button className="w-full bg-[#44633F] hover:bg-[#385233] text-white">
                        Request Pickup
                      </Button>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
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

const MobileNavLink = ({
  href,
  label,
  current,
}: {
  href: string;
  label: string;
  current: boolean;
}) => (
  <SheetClose asChild>
    <Link
      href={href}
      className={`block px-3 py-2 text-lg font-medium tracking-wider transition-colors
                 ${
                   current
                     ? "text-white bg-white/10"
                     : "text-white/80 hover:text-white hover:bg-white/5"
                 }`}
    >
      {label}
    </Link>
  </SheetClose>
);

export default Header;
