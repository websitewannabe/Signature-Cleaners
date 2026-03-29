import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] flex-col items-center justify-center section-padding">
      <div className="text-center">
        <h1 className="mb-4 font-serif text-8xl font-bold text-primary">
          404
        </h1>
        <h2 className="mb-4 font-serif text-3xl font-semibold text-white">
          Page Not Found
        </h2>
        <p className="mb-8 max-w-md text-white/80">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let us help you find what you need.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/" className="btn-primary">
            Back to Home
          </Link>
          <Link href="/all-services/all-services" className="btn-outline">
            View Services
          </Link>
          <Link href="/contact-us" className="btn-outline">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
