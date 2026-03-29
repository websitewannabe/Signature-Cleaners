import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { QuoteModalProvider } from "@/components/QuoteModal";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatWidgetLoader from "@/components/ChatWidgetLoader";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mysignaturecleaners.com"),
  title:
    "Signature Cleaners | Expert Dry Cleaning & Laundry in Doylestown, PA",
  description:
    "Top-rated dry cleaning in Doylestown, PA. Expert dry cleaning, wash and fold, tailoring, and free pickup and delivery throughout Bucks County.",
  icons: {
    icon: "/images/favicon.png",
    apple: "/images/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans bg-black text-white`}
      >
        <QuoteModalProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <ChatWidgetLoader />
        </QuoteModalProvider>
      </body>
    </html>
  );
}
