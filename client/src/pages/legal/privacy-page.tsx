import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Helmet } from "react-helmet-async";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <link
          rel="canonical"
          href="https://www.mysignaturecleaners.com/legal/privacy-policy"
        />
        <title>Privacy Policy | Signature Cleaners</title>
        <meta
          name="description"
          content="Privacy policy for Signature Cleaners. Learn how we collect, use, and protect your personal information."
        />
      </Helmet>
      <Header />

      <main className="flex-grow bg-white py-24 mt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-sm text-neutral-500 mb-2">
            Effective Date: March 29, 2026
          </p>
          <p className="text-neutral-700 mb-8">
            Signature Cleaners (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or
            &ldquo;our&rdquo;) operates the website mysignaturecleaners.com.
            This Privacy Policy explains how we collect, use, disclose, and
            safeguard your information when you visit our website or use our
            services.
          </p>

          <div className="space-y-8 text-neutral-700 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-neutral-900">
                1. Information We Collect
              </h2>
              <h3 className="font-semibold text-lg mb-2 text-neutral-900">
                Personal Information You Provide
              </h3>
              <p>
                When you fill out a contact form, schedule a pickup, or request
                a quote on our website, we may collect:
              </p>
              <ul className="mt-2 list-disc list-inside space-y-1">
                <li>Your name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Mailing or pickup/delivery address</li>
                <li>Any message or service details you include</li>
              </ul>

              <h3 className="font-semibold text-lg mb-2 mt-4 text-neutral-900">
                Information Collected Automatically
              </h3>
              <p>
                When you visit our website, we may automatically collect certain
                information, including:
              </p>
              <ul className="mt-2 list-disc list-inside space-y-1">
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Pages visited and time spent on pages</li>
                <li>Referring website or search terms</li>
                <li>Device type and operating system</li>
              </ul>
              <p className="mt-2">
                This information is collected through cookies, web analytics
                tools, and similar technologies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-neutral-900">
                2. How We Use Your Information
              </h2>
              <p>We use the information we collect to:</p>
              <ul className="mt-2 list-disc list-inside space-y-1">
                <li>Respond to your inquiries and provide customer service</li>
                <li>
                  Schedule pickups, deliveries, and service appointments
                </li>
                <li>Create and manage your customer account</li>
                <li>
                  Send you service confirmations and relevant communications
                </li>
                <li>
                  Improve our website, services, and customer experience
                </li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-neutral-900">
                3. How We Share Your Information
              </h2>
              <p>
                We do not sell, trade, or rent your personal information to
                third parties. We may share your information with:
              </p>
              <ul className="mt-2 list-disc list-inside space-y-1">
                <li>
                  <strong>Service providers</strong> who help us operate our
                  business, such as our dry cleaning management platform, email
                  service, and website hosting provider
                </li>
                <li>
                  <strong>Analytics providers</strong> to help us understand how
                  visitors use our website
                </li>
                <li>
                  <strong>Legal authorities</strong> if required by law,
                  regulation, or legal process
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-neutral-900">
                4. Cookies and Tracking Technologies
              </h2>
              <p>
                Our website uses cookies and similar technologies to enhance
                your experience, analyze site traffic, and understand where our
                visitors come from. You can control cookie preferences through
                your browser settings. Disabling cookies may affect certain
                features of the website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-neutral-900">
                5. Third-Party Services
              </h2>
              <p>
                Our website may use third-party services such as Google Maps,
                web analytics tools, and embedded forms. These services may
                collect information about your use of our website in accordance
                with their own privacy policies. We encourage you to review the
                privacy policies of any third-party services you interact with
                through our site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-neutral-900">
                6. Data Security
              </h2>
              <p>
                We implement reasonable administrative, technical, and physical
                safeguards to protect the personal information we collect.
                However, no method of transmission over the Internet or
                electronic storage is 100% secure, and we cannot guarantee
                absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-neutral-900">
                7. Data Retention
              </h2>
              <p>
                We retain your personal information only for as long as
                necessary to fulfill the purposes for which it was collected,
                including to satisfy any legal, accounting, or reporting
                requirements. When your information is no longer needed, we will
                securely delete or anonymize it.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-neutral-900">
                8. Your Rights
              </h2>
              <h3 className="font-semibold text-lg mb-2 text-neutral-900">
                For All Users
              </h3>
              <p>Depending on your location, you may have the right to:</p>
              <ul className="mt-2 list-disc list-inside space-y-1">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt out of marketing communications</li>
              </ul>

              <h3 className="font-semibold text-lg mb-2 mt-4 text-neutral-900">
                GDPR Rights (European Economic Area Residents)
              </h3>
              <p>
                If you are located in the European Economic Area (EEA), you have
                additional rights under the General Data Protection Regulation,
                including the right to data portability, the right to restrict
                processing, and the right to object to processing. To exercise
                these rights, please contact us using the information below.
              </p>

              <h3 className="font-semibold text-lg mb-2 mt-4 text-neutral-900">
                CCPA Rights (California Residents)
              </h3>
              <p>
                If you are a California resident, you have the right to know
                what personal information we collect about you, the right to
                request deletion of your personal information, and the right to
                opt out of the sale of your personal information. We do not sell
                personal information. To exercise your rights, please contact us
                using the information below.
              </p>

              <p className="mt-2">
                To exercise any of these rights, please contact us using the
                information below.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-neutral-900">
                9. Children&apos;s Privacy
              </h2>
              <p>
                Our website is not directed to children under the age of 13, and
                we do not knowingly collect personal information from children.
                If we learn that we have collected information from a child under
                13, we will promptly delete it.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-neutral-900">
                10. Changes to This Privacy Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. Any changes
                will be posted on this page with a revised effective date. We
                encourage you to review this page periodically.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-neutral-900">
                11. Contact Us
              </h2>
              <p>
                If you have any questions about this Privacy Policy, please
                contact us:
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
