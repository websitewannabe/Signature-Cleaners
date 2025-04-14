
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center">
      <div className="absolute inset-0 bg-[url('/src/images/interior.jpg')] bg-cover bg-center bg-no-repeat"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/45 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight tracking-tight">
            Care for Your Clothes.
            <br />
            Convenience for You.
          </h1>
          <p className="mt-6 text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
            Old Fashioned Service. Guaranteed.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/schedule">
              <Button className="w-full sm:w-auto bg-[#790003] hover:bg-[#F6AE2D] text-white font-semibold px-8 py-6 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center group">
                Schedule Pickup
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-200"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Button>
            </Link>
            <Link href="/services">
              <Button
                variant="outline"
                className="w-full sm:w-auto bg-white hover:text-black font-semibold px-8 py-6 rounded-xl shadow-lg hover:shadow-2xl hover:text-white hover:bg-[#790003] hover:-translate-y-0.5 transition-all duration-300"
              >
                View Services
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
