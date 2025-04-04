import { useState } from "react";
import { Link, useLocation } from "wouter";
import { useAuth } from "@/hooks/use-auth";
import { Button } from "@/components/ui/button";
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger,
  SheetClose
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const Header = () => {
  const [location] = useLocation();
  const { user, logoutMutation } = useAuth();

  return (
    <header className="bg-[#7C1716] shadow-md sticky top-0 z-50">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <div className="h-8 w-8 bg-white rounded-full flex items-center justify-center mr-2">
                <span className="text-[#7C1716] font-bold text-sm">SC</span>
              </div>
              <span className="text-white font-bold text-xl">Signature Cleaners</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <NavLink href="/" label="Home" current={location === "/"} />
            <NavLink href="/services" label="Services" current={location === "/services"} />
            <NavLink href="/about" label="About Us" current={location === "/about"} />
            <NavLink href="/testimonials" label="Testimonials" current={location === "/testimonials"} />
            <NavLink href="/contact" label="Contact" current={location === "/contact"} />
          </nav>
          
          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <>
                <Link href="/portal" className="text-primary font-medium hover:text-primary-dark">
                  Customer Portal
                </Link>
                <Button 
                  variant="destructive" 
                  onClick={() => logoutMutation.mutate()}
                  disabled={logoutMutation.isPending}
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Link href="/auth" className="text-primary font-medium hover:text-primary-dark">
                  Customer Portal
                </Link>
                <Link href="/schedule">
                  <Button className="bg-[#44633F] hover:bg-[#385233] text-white">
                    Schedule Pickup
                  </Button>
                </Link>
              </>
            )}
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" className="p-2 text-white hover:text-neutral-200">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="py-4">
                  <MobileNavLink href="/" label="Home" current={location === "/"} />
                  <MobileNavLink href="/services" label="Services" current={location === "/services"} />
                  <MobileNavLink href="/about" label="About Us" current={location === "/about"} />
                  <MobileNavLink href="/testimonials" label="Testimonials" current={location === "/testimonials"} />
                  <MobileNavLink href="/contact" label="Contact" current={location === "/contact"} />
                  
                  <div className="mt-4 pt-4 border-t">
                    {user ? (
                      <>
                        <MobileNavLink href="/portal" label="Customer Portal" current={location.startsWith("/portal")} />
                        <div className="px-3 py-2">
                          <Button 
                            variant="destructive" 
                            className="w-full justify-center"
                            onClick={() => logoutMutation.mutate()}
                            disabled={logoutMutation.isPending}
                          >
                            Logout
                          </Button>
                        </div>
                      </>
                    ) : (
                      <>
                        <MobileNavLink href="/auth" label="Customer Portal" current={location === "/auth"} />
                        <div className="px-3 py-2">
                          <Link href="/schedule">
                            <Button className="w-full justify-center bg-[#44633F] hover:bg-[#385233] text-white">
                              Schedule Pickup
                            </Button>
                          </Link>
                        </div>
                      </>
                    )}
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

const NavLink = ({ href, label, current }: { href: string; label: string; current: boolean }) => (
  <Link 
    href={href} 
    className={`font-medium px-3 py-2 border-b-2 
                ${current 
                  ? 'text-white border-white' 
                  : 'text-neutral-200 hover:text-white border-transparent hover:border-white'}`}
  >
    {label}
  </Link>
);

const MobileNavLink = ({ href, label, current }: { href: string; label: string; current: boolean }) => (
  <SheetClose asChild>
    <Link 
      href={href} 
      className={`block px-3 py-2 text-base font-medium rounded-md
                 ${current 
                   ? 'text-primary bg-gray-50' 
                   : 'text-neutral-600 hover:text-primary hover:bg-gray-50'}`}
    >
      {label}
    </Link>
  </SheetClose>
);

export default Header;
