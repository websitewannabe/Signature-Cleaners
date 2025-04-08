
import { Link } from "wouter";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { CheckCircle } from "lucide-react";

export default function AuthPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-[#424B4D] py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white">My Account</h1>
            <p className="mt-4 text-xl text-white text-opacity-90 max-w-3xl mx-auto">
              Manage your dry cleaning services and preferences
            </p>
          </div>
        </div>
      </section>

      <div className="flex-1 py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Login Section */}
            <Card>
              <CardHeader>
                <CardTitle>Log In</CardTitle>
                <CardDescription>Access your account or pay your bill</CardDescription>
              </CardHeader>
              <CardContent>
                <a href="https://account.mydrycleaner.com/SIGNATUREPA/#/login" className="block">
                  <Button className="w-full bg-[#790003] hover:bg-[#5a0002] text-white">
                    Log In or Pay Bill
                  </Button>
                </a>
              </CardContent>
            </Card>

            {/* Sign Up Section */}
            <Card>
              <CardHeader>
                <CardTitle>Sign Up</CardTitle>
                <CardDescription>Create a new account and save $10 on your first order</CardDescription>
              </CardHeader>
              <CardContent>
                <a href="https://account.mydrycleaner.com/SIGNATUREPA/#/customer-signup" className="block">
                  <Button className="w-full bg-[#790003] hover:bg-[#5a0002] text-white">
                    Create Account
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>

          {/* Promo Section */}
          <div className="mt-12 text-center">
            <div className="inline-block bg-[#790003] text-white px-6 py-3 rounded-md text-lg font-semibold">
              $10 Off Your First Order – Sign up online or mention it in store
            </div>
          </div>

          {/* Account Benefits */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-neutral-900 mb-8 text-center">
              Account Benefits
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Request pickup",
                "Update cleaning preferences",
                "Update credit card on file",
                "Pay dry cleaning bill",
                "Update email preferences",
              ].map((benefit) => (
                <div key={benefit} className="flex items-start space-x-3 bg-white p-4 rounded-lg shadow-sm">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
