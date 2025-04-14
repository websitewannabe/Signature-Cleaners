
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center bg-gray-50 py-16">
        <Card className="w-full max-w-md mx-4">
          <CardContent className="pt-6 pb-4">
            <div className="flex mb-4 gap-2">
              <AlertCircle className="h-8 w-8 text-red-500" />
              <h1 className="text-2xl font-bold text-gray-900">404 Page Not Found</h1>
            </div>
            <p className="mt-4 text-sm text-gray-600">
              Did you forget to add the page to the router?
            </p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
