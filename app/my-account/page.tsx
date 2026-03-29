import { Metadata } from "next";
import Link from "next/link";
import { User, UserPlus, CreditCard, Truck, Mail, Settings } from "lucide-react";

export const metadata: Metadata = {
  title: "My Account | Signature Cleaners",
  description:
    "Log in or create your Signature Cleaners account. Manage pickups, pay bills, and save $10 on your first order.",
};

const benefits = [
  { icon: Truck, label: "Request pickup" },
  { icon: Settings, label: "Update cleaning preferences" },
  { icon: CreditCard, label: "Update credit card on file" },
  { icon: CreditCard, label: "Pay dry cleaning bill" },
  { icon: Mail, label: "Update email preferences" },
];

export default function MyAccountPage() {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <div className="mb-12 text-center">
          <h1 className="heading-xl mb-4">
            My <span className="text-primary">Account</span>
          </h1>
          <p className="text-white/80">
            Manage your pickup schedule, update preferences, and pay your bill.
          </p>
        </div>

        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
          {/* Log In */}
          <div className="card-luxury text-center">
            <User className="mx-auto mb-4 h-10 w-10 text-primary" />
            <h2 className="mb-2 font-serif text-xl font-bold text-white">
              Log In
            </h2>
            <p className="mb-6 text-sm text-white/80">
              Access your account or pay your bill.
            </p>
            <a
              href="https://account.mydrycleaner.com/SIGNATUREPA/#/login"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Log In to Account
            </a>
          </div>

          {/* Sign Up */}
          <div className="card-luxury text-center">
            <UserPlus className="mx-auto mb-4 h-10 w-10 text-primary" />
            <h2 className="mb-2 font-serif text-xl font-bold text-white">
              Sign Up
            </h2>
            <p className="mb-6 text-sm text-white/80">
              Create a new account and save $10 on your first order.
            </p>
            <a
              href="https://account.mydrycleaner.com/SIGNATUREPA/#/customer-signup"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Create Account
            </a>
          </div>
        </div>

        {/* Benefits */}
        <div className="mx-auto mt-16 max-w-4xl">
          <h2 className="mb-8 text-center font-serif text-2xl font-bold text-white">
            Account Benefits
          </h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
            {benefits.map((b) => (
              <div
                key={b.label}
                className="card-luxury flex flex-col items-center py-6 text-center"
              >
                <b.icon className="mb-3 h-6 w-6 text-primary" />
                <span className="text-xs text-white">{b.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="mb-4 text-white/80">
            Need help? Call us at{" "}
            <a
              href="tel:+12153451470"
              className="text-primary hover:text-primary-light"
            >
              (215) 345-1470
            </a>
          </p>
          <Link href="/schedule" className="btn-primary">
            Schedule a Pickup
          </Link>
        </div>
      </div>
    </section>
  );
}
