import { Link } from "wouter";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#181818] text-ivory py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="mb-4">
              <Link href="/" className="flex items-center">
                <div
                  className="h-20 w-48 bg-[url('/src/images/signature-cleaners-logo-white.png')] bg-contain bg-no-repeat bg-center"
                  role="img"
                  aria-label="Signature Cleaners"
                />
              </Link>
              {/* <img
                src="/images/signature-cleaners-logo-white.png"
                alt="Signature Cleaners"
                className="h-20 w-auto"
              /> */}
            </div>
            <p className="text-neutral-300 mb-4">
              Old Fashioned Service. Guaranteed.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/signaturecleaners"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-300 hover:text-white"
              >
                <span className="sr-only">Facebook</span>
                <Facebook />
              </a>
              <a
                href="https://www.instagram.com/signaturedoylestown/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-300 hover:text-white"
              >
                <span className="sr-only">Instagram</span>
                <Instagram />
              </a>
              <a
                href="https://x.com/i/flow/login?redirect_after_login=%2Fsignatureclean"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-300 hover:text-white"
              >
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
                  href="/all-services/all-services"
                  className="text-neutral-300 hover:text-white"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
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
                  href="/contact-us"
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
                  href="/all-services/dry-cleaning"
                  className="text-neutral-300 hover:text-white"
                >
                  Dry Cleaning
                </Link>
              </li>
              <li>
                <Link
                  href="/all-services/wash-fold"
                  className="text-neutral-300 hover:text-white"
                >
                  Wash & Fold
                </Link>
              </li>
              <li>
                <Link
                  href="/all-services/alteration-tailoring"
                  className="text-neutral-300 hover:text-white"
                >
                  Alterations & Repairs
                </Link>
              </li>
              <li>
                <Link
                  href="/all-services/clean-household-items"
                  className="text-neutral-300 hover:text-white"
                >
                  Specialty Cleaning
                </Link>
              </li>
              <li>
                <Link
                  href="/all-services/wedding-gown"
                  className="text-neutral-300 hover:text-white"
                >
                  Wedding Gown Service
                </Link>
              </li>
              <li>
                <Link
                  href="/all-services/delivery"
                  className="text-neutral-300 hover:text-white"
                >
                  Pick Up & Delivery
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
                <a
                  href="https://www.google.com/maps/place/Signature+Cleaners+at+Doylestown/@40.3414365,-75.1318638,17z/data=!3m1!4b1!4m6!3m5!1s0x89c6a8674873a9d9:0x4c3105276c27f6a4!8m2!3d40.3414365!4d-75.1318638!16s%2Fg%2F1td7jphd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  1456 Ferry Road #10
                  <br />
                  Doylestown, PA 18901
                </a>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.482010904663!2d-75.1344387!3d40.3414365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6a8674873a9d9%3A0x4c3105276c27f6a4!2sSignature%20Cleaners%20at%20Doylestown!5e0!3m2!1sen!2sus!4v1714582748851!5m2!1sen!2sus"
                  width="300"
                  height="200"
                  style={{ border: 0, marginTop: "10px" }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
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
                <a
                  href="tel:+12153451470"
                  className="hover:text-white transition-colors"
                >
                  (215) 345-1470
                </a>
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
                <a
                  href="mailto:customerservice@mysignaturecleaners.com"
                  className="break-words overflow-hidden hover:text-white transition-colors"
                  style={{ wordBreak: "break-word", hyphens: "auto" }}
                >
                  customerservice@mysignaturecleaners.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-400 text-sm">
            © {new Date().getFullYear()} Signature Cleaners. All rights
            reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a
              href="/sitemap.xml"
              className="text-neutral-400 hover:text-neutral-300 text-sm"
            >
              Sitemap
            </a>
            <Link
              href="/legal/privacy-policy"
              className="text-neutral-400 hover:text-neutral-300 text-sm"
            >
              Privacy Policy
            </Link>
            <Link
              href="/legal/terms-and-conditions"
              className="text-neutral-400 hover:text-neutral-300 text-sm"
            >
              Terms of Service
            </Link>
            <Link
              href="/legal/accessibility-statement"
              className="text-neutral-400 hover:text-neutral-300 text-sm"
            >
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
