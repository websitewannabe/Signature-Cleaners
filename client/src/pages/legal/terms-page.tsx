import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Helmet } from "react-helmet-async";

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <link
          rel="canonical"
          href="https://www.mysignaturecleaners.com/legal/terms-and-conditions"
        />
        <title>Terms and Conditions | Signature Cleaners</title>
        <meta
          name="description"
          content="Terms and conditions for using Signature Cleaners' services"
        />
      </Helmet>
      <Header />

      <main className="flex-grow bg-white py-24 mt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold mb-8">Terms and Conditions</h1>
          <div
            id="policy"
            width="640"
            height="480"
            data-policy-key="V1RaNU5VRXlkbGd2ZUV0UFZGRTlQUT09"
          >
            Please wait while the policy is loaded. If it does not load, please{" "}
            <a
              rel="nofollow"
              href="https://app.termageddon.com/api/policy/V1RaNU5VRXlkbGd2ZUV0UFZGRTlQUT09?"
              target="_blank"
              aria-label="View Policy"
            >
              click here to view the policy
            </a>
            .{" "}
          </div>
          <script src="https://app.termageddon.com/js/termageddon.js"></script>
        </div>
      </main>

      <Footer />
    </div>
  );
}
