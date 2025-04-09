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
import { Menu, Home } from "lucide-react";

const Header = () => {
  const [location] = useLocation();
  const { user, logoutMutation } = useAuth();
  const [isOpaque, setIsOpaque] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const isTransparentPage =
        location === "/" ||
        location === "/services" ||
        location === "/services/wash-fold" ||
        location === "/services/folding-dress-shirt" ||
        location === "/shoe-repair" ||
        location === "/suede-leather-cleaning" ||
        location === "/wedding-gown" ||
        location === "/about" ||
        location === "/dry-cleaning" ||
        location === "/clean-household-items" ||
        location === "/alteration-tailoring" ||
        location === "/interior-cleaning" ||
        location === "/delivery";
      setIsOpaque(isTransparentPage ? scrollPosition > 0 : true);
    };

    // Initial check
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location]);

  const isTransparentPage =
    location === "/" || location === "/services" || location === "/wash-fold";
  const headerStyles = `fixed top-0 w-full z-50 transition-all duration-300 ${
    isOpaque ? "bg-black/35 shadow-lg backdrop-blur-sm" : "bg-transparent"
  }`;

  return (
    <header className={headerStyles}>
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <img
              src="/src/images/signature-cleaners-logo-white.png"
              alt="Signature Cleaners"
              className={`h-24 w-auto transition-all duration-300 ${
                isOpaque ? "scale-90" : "scale-100"
              }`}
            />
          </Link>

          {/* Center Navigation */}
          <nav className="hidden md:flex space-x-8 flex-1 justify-center text-lg">
            <Link
              href="/"
              className="flex items-center px-3 py-2 text-white hover:text-white/80"
            >
              <Home className="h-5 w-5" aria-label="Home" />
            </Link>
            <div className="relative group inline-flex">
              <NavLink
                href="/services"
                label="SERVICES"
                current={location === "/services"}
              />
              <div className="absolute left-1/2 -translate-x-1/2 hidden group-hover:block w-64 bg-black/90 backdrop-blur-sm rounded-md overflow-hidden shadow-lg mt-8">
                <div className="py-2">
                  {[
                    { name: "Delivery", path: "/delivery" },
                    {
                      name: "Alterations & Tailoring",
                      path: "/alteration-tailoring",
                    },
                    { name: "Interior Cleaning", path: "/interior-cleaning" },
                    {
                      name: "Clean Household Items",
                      path: "/clean-household-items",
                    },
                    { name: "Dry Cleaning", path: "/dry-cleaning" },
                    { name: "Wedding Gowns", path: "/wedding-gown" },
                    {
                      name: "Suede & Leather Cleaning",
                      path: "/suede-leather-cleaning",
                    },
                    { name: "Shoe Repair", path: "/shoe-repair" },
                    { name: "Wash & Fold", path: "/services/wash-fold" },
                    {
                      name: "Folding Dress Shirt Services",
                      path: "/services/folding-dress-shirt",
                    },
                  ].map((service) => (
                    <Link
                      key={service.name}
                      href={service.path}
                      className="block px-4 py-2 text-sm text-white hover:bg-white/10 transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <NavLink
              href="/about"
              label="ABOUT US"
              current={location === "/about"}
            />
          </nav>

          

          {/* Right Navigation and CTA */}
          <div className="hidden md:flex items-center justify-center space-x-8 flex-1 text-lg">
            <NavLink
              href="/auth"
              label="MY ACCOUNT"
              current={location === "/auth"}
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
                    href="/auth"
                    label="MY ACCOUNT"
                    current={location === "/auth"}
                  />
                  <div className="border-b border-white/10">
                    <MobileNavLink
                      href="/services"
                      label="SERVICES"
                      current={location === "/services"}
                    />
                    {[
                      { name: "Delivery", path: "/delivery" },
                      { name: "Alterations & Tailoring", path: "/alteration-tailoring" },
                      { name: "Interior Cleaning", path: "/interior-cleaning" },
                      {
                        name: "Clean Household Items",
                        path: "/clean-household-items",
                      },
                      { name: "Dry Cleaning", path: "/dry-cleaning" },
                      { name: "Wedding Gowns", path: "/wedding-gown" },
                      { name: "Suede & Leather Cleaning", path: "/suede-leather-cleaning" },
                      { name: "Shoe Repair", path: "/shoe-repair" },
                      { name: "Wash & Fold", path: "/services/wash-fold" },
                      {
                        name: "Folding Dress Shirt Services",
                        path: "/services/folding-dress-shirt",
                      },
                    ].map((service) => (
                      <Link
                        key={service.name}
                        href={service.path}
                        className="block px-6 py-2 text-sm text-white/80 hover:text-white hover:bg-white/5"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                  <MobileNavLink
                    href="/about"
                    label="ABOUT US"
                    current={location === "/about"}
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