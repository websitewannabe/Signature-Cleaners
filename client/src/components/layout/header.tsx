import { useState, useEffect } from "react";
import { useLocation } from "wouter";
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
        <div className="flex items-center h-24">
          {/* Empty header ready for new navigation */}
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