import type { Metadata } from "next";
import Script from "next/script";
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
      <head>
        {/* Brain Cookie Consent (synchronous — sets GA4 consent defaults) */}
        <script src="https://brain.websitewannabe.co/api/ww/cookie-consent" />
        {/* Google Tag Manager. Must stay AFTER the cookie-consent script above,
            which runs synchronously and sets Consent Mode defaults to denied —
            GTM loading first would let its GA4 tag fire an unconsented hit.
            Inlined here rather than injected as a Netlify snippet: this site
            builds with @netlify/plugin-nextjs, and the Next.js Runtime serves
            HTML from the runtime rather than post-processed static files, so
            Netlify snippet injection never applies. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-KJW9K9RZ');`,
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} font-sans bg-zinc-950 text-white`}
      >
        {/* Google Tag Manager noscript fallback — must be first in <body> */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KJW9K9RZ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <QuoteModalProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <ChatWidgetLoader />
        </QuoteModalProvider>

        {/* Brain Analytics (first-party tracking, respects cookie consent) */}
        <Script src="https://brain.websitewannabe.co/api/ww/analytics" strategy="afterInteractive" />
      </body>
    </html>
  );
}
