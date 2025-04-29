
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center bg-neutral-50 px-4 mt-16">
        <div className="text-center">
        <div className="flex justify-center mb-6">
          <AlertCircle className="h-24 w-24 text-red-500" />
        </div>
        <h1 className="text-6xl font-bold text-neutral-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-neutral-800 mb-4">Page Not Found</h2>
        <p className="text-neutral-600 mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="space-x-4">
          <Button asChild variant="default">
            <Link href="/">Return Home</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/contact-us">Contact Support</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
