import { Link } from "wouter";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="mb-4">
              <img
                src="/src/images/signature-cleaners-logo.png"
                alt="Signature Cleaners"
                className="h-20 w-auto"
              />
            </div>
            <p className="text-neutral-300 mb-4">
              Professional dry cleaning and laundry services with free pickup
              and delivery.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-300 hover:text-white">
                <span className="sr-only">Facebook</span>
                <Facebook />
              </a>
              <a
                href="https://www.facebook.com/signaturecleaners"
                className="text-neutral-300 hover:text-white"
              >
                <span className="sr-only">Instagram</span>
                <Instagram />
              </a>
              <a href="#" className="text-neutral-300 hover:text-white">
                <span className="sr-only">Twitter</span>
                <Twitter />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-neutral-300 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-neutral-300 hover:text-white"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-neutral-300 hover:text-white"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/schedule"
                  className="text-neutral-300 hover:text-white"
                >
                  Schedule Pickup
                </Link>
              </li>
              <li>
                <Link
                  href="/auth"
                  className="text-neutral-300 hover:text-white"
                >
                  Customer Portal
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-neutral-300 hover:text-white"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services"
                  className="text-neutral-300 hover:text-white"
                >
                  Dry Cleaning
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-neutral-300 hover:text-white"
                >
                  Wash & Fold
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-neutral-300 hover:text-white"
                >
                  Alterations & Repairs
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-neutral-300 hover:text-white"
                >
                  Specialty Cleaning
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-neutral-300 hover:text-white"
                >
                  Wedding Gown Preservation
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-neutral-300 hover:text-white"
                >
                  Commercial Services
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-neutral-300">
              <li className="flex items-start">
                <svg
                  className="h-5 w-5 mr-2 mt-0.5 text-neutral-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>
                  123 Main Street, Suite 456
                  <br />
                  Anytown, ST 12345
                </span>
              </li>
              <li className="flex items-center">
                <svg
                  className="h-5 w-5 mr-2 text-neutral-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="h-5 w-5 mr-2 text-neutral-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>info@signaturecleaners.com</span>
              </li>
            </ul>
            <div className="mt-4">
              <h4 className="text-sm font-semibold text-neutral-400 mb-2">
                Subscribe to our newsletter
              </h4>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-3 py-2 bg-neutral-800 text-white rounded-l-md focus:outline-none focus:ring-1 focus:ring-primary w-full"
                />
                <button
                  type="submit"
                  className="bg-primary hover:bg-primary-light px-4 py-2 rounded-r-md"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-400 text-sm">
            © {new Date().getFullYear()} Signature Cleaners. All rights
            reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a
              href="#"
              className="text-neutral-400 hover:text-neutral-300 text-sm"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-neutral-400 hover:text-neutral-300 text-sm"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-neutral-400 hover:text-neutral-300 text-sm"
            >
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
