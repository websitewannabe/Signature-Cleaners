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
          content="Terms and conditions for using Signature Cleaners' services and website in Doylestown, PA."
        />
      </Helmet>
      <Header />

      <main className="flex-grow bg-white py-24 mt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold mb-4">Terms and Conditions</h1>
          <p className="text-sm text-neutral-500 mb-2">
            Effective Date: March 29, 2026
          </p>
          <p className="text-neutral-700 mb-8">
            Welcome to mysignaturecleaners.com, the website of Signature
            Cleaners (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or
            &ldquo;our&rdquo;). By accessing or using our website and services,
            you agree to be bound by these Terms and Conditions. If you do not
            agree, please do not use our website.
          </p>

          <div className="space-y-8 text-neutral-700 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-neutral-900">
                1. Services
              </h2>
              <p>
                Signature Cleaners provides professional dry cleaning, laundry,
                alterations, shoe repair, wedding gown preservation, household
                item cleaning, and pickup/delivery services in the Doylestown,
                Pennsylvania area. Service availability, pricing, and turnaround
                times may vary and are subject to change without notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-neutral-900">
                2. Use of the Website
              </h2>
              <p>
                You agree to use this website only for lawful purposes. You may
                not:
              </p>
              <ul className="mt-2 list-disc list-inside space-y-1">
                <li>
                  Use the website in any way that violates applicable laws or
                  regulations
                </li>
                <li>
                  Submit false, misleading, or fraudulent information through our
                  forms
                </li>
                <li>
                  Attempt to interfere with the website&apos;s functionality or
                  security
                </li>
                <li>
                  Reproduce, distribute, or modify any content on this website
                  without our written permission
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-neutral-900">
                3. Account Creation
              </h2>
              <p>
                When you submit a contact form or schedule a service, an account
                may be created on your behalf in our customer management system.
                You are responsible for the accuracy of the information you
                provide. We reserve the right to refuse or cancel service at our
                discretion.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-neutral-900">
                4. Garment Care and Liability
              </h2>
              <p>
                We take great care in handling all garments and items entrusted
                to us. However, please be aware of the following:
              </p>
              <ul className="mt-2 list-disc list-inside space-y-1">
                <li>
                  We are not responsible for damage caused by pre-existing
                  conditions such as weakened fabric, color loss, shrinkage from
                  prior improper care, or defects in materials
                </li>
                <li>
                  Items left unclaimed for more than 30 days may be donated or
                  disposed of at our discretion
                </li>
                <li>
                  Any claim for loss or damage must be made within 24 hours of
                  pickup
                </li>
                <li>
                  Our liability for any item shall not exceed ten times the cost
                  of cleaning that item, in accordance with the Fair Claims Guide
                  for Consumers published by the International Fabricare
                  Institute
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-neutral-900">
                5. Pickup and Delivery Services
              </h2>
              <p>
                If you use our pickup and delivery service, you agree to provide
                accurate address information and make items accessible for
                pickup at the scheduled time. We are not responsible for delays
                caused by incorrect addresses, inaccessible locations, or
                circumstances beyond our control such as weather or traffic.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-neutral-900">
                6. Pricing and Payment
              </h2>
              <p>
                Prices for our services are available upon request and may vary
                based on the type, condition, and quantity of items. We reserve
                the right to adjust pricing at any time. Payment is due upon
                completion of services unless otherwise arranged.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-neutral-900">
                7. Intellectual Property
              </h2>
              <p>
                All content on this website, including text, images, logos, and
                design, is the property of Signature Cleaners or its content
                suppliers and is protected by copyright and trademark laws. You
                may not use, copy, or distribute any content from this website
                without our prior written consent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-neutral-900">
                8. Third-Party Links
              </h2>
              <p>
                Our website may contain links to third-party websites or
                services. We are not responsible for the content, privacy
                policies, or practices of any third-party sites. Accessing
                third-party links is at your own risk.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-neutral-900">
                9. Disclaimer of Warranties
              </h2>
              <p>
                This website and its content are provided &ldquo;as is&rdquo;
                and &ldquo;as available&rdquo; without warranties of any kind,
                either express or implied. We do not guarantee that the website
                will be error-free, uninterrupted, or free of harmful
                components.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-neutral-900">
                10. Limitation of Liability
              </h2>
              <p>
                To the fullest extent permitted by law, Signature Cleaners shall
                not be liable for any indirect, incidental, special, or
                consequential damages arising from your use of our website or
                services. Our total liability for any claim shall not exceed the
                amount you paid for the specific service giving rise to the
                claim.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-neutral-900">
                11. Indemnification
              </h2>
              <p>
                You agree to indemnify and hold harmless Signature Cleaners, its
                owners, employees, and agents from any claims, damages, losses,
                or expenses arising from your use of our website or violation of
                these Terms and Conditions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-neutral-900">
                12. Privacy Policy
              </h2>
              <p>
                Your use of our website is also governed by our{" "}
                <a
                  href="/legal/privacy-policy"
                  className="text-[#790003] hover:underline"
                >
                  Privacy Policy
                </a>
                , which describes how we collect, use, and protect your personal
                information. Please review it carefully.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-neutral-900">
                13. Governing Law
              </h2>
              <p>
                These Terms and Conditions are governed by and construed in
                accordance with the laws of the Commonwealth of Pennsylvania.
                Any disputes arising from these terms shall be resolved in the
                courts of Bucks County, Pennsylvania.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-neutral-900">
                14. Changes to These Terms
              </h2>
              <p>
                We may update these Terms and Conditions from time to time.
                Changes will be posted on this page with a revised effective
                date. Your continued use of our website after changes are posted
                constitutes your acceptance of the updated terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-neutral-900">
                15. Contact Us
              </h2>
              <p>
                If you have any questions about these Terms and Conditions,
                please contact us:
              </p>
              <div className="mt-4 rounded-lg border border-neutral-200 bg-neutral-50 p-6">
                <p className="mb-1 font-semibold text-neutral-900">
                  Signature Cleaners
                </p>
                <p className="mb-2 text-neutral-600">
                  1456 Ferry Road #10, Doylestown, PA 18901
                </p>
                <p className="mb-2">
                  <strong className="text-neutral-900">Phone:</strong>{" "}
                  <a
                    href="tel:+12153451470"
                    className="text-[#790003] hover:underline"
                  >
                    (215) 345-1470
                  </a>
                </p>
                <p>
                  <strong className="text-neutral-900">Email:</strong>{" "}
                  <a
                    href="mailto:customerservice@mysignaturecleaners.com"
                    className="text-[#790003] hover:underline"
                  >
                    customerservice@mysignaturecleaners.com
                  </a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
