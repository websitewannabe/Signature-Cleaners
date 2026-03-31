import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Helmet } from "react-helmet-async";

export default function AccessibilityPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <link
          rel="canonical"
          href="https://www.mysignaturecleaners.com/legal/accessibility-statement"
        />
        <title>Accessibility Statement | Signature Cleaners</title>
      </Helmet>
      <Header />

      <main className="flex-grow bg-white py-24 mt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold mb-8">Accessibility Statement</h1>

          <section className="prose prose-slate max-w-none">
            <h2 className="text-2xl font-semibold mt-8 mb-4">
              Our Commitment
            </h2>
            <p className="mb-6">
              Signature Cleaners is committed to ensuring digital accessibility
              for people with disabilities. We are continually improving the user
              experience for everyone and applying the relevant accessibility
              standards to guarantee we provide equal access to all users.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              Conformance Status
            </h2>
            <p className="mb-6">
              The Web Content Accessibility Guidelines (WCAG) define
              requirements for designers and developers to improve accessibility
              for people with disabilities. It defines three levels of
              conformance: Level A, Level AA, and Level AAA. The Signature
              Cleaners website strives to conform to WCAG 2.1 Level AA. We
              conduct regular reviews and remediation to maintain and improve
              compliance.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              Accessibility Features
            </h2>
            <p className="mb-4">
              We have taken the following measures to ensure accessibility of the
              Signature Cleaners website:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Semantic HTML markup for clear document structure</li>
              <li>Sufficient color contrast ratios throughout the site</li>
              <li>Keyboard-navigable interactive elements</li>
              <li>Descriptive alt text for meaningful images</li>
              <li>ARIA labels and roles where appropriate</li>
              <li>Resizable text without loss of content or functionality</li>
              <li>Accessible forms with proper labels and error messages</li>
              <li>
                An on-site accessibility tools panel available via the
                &ldquo;Accessibility Tools&rdquo; button in the footer
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              Measures to Support Accessibility
            </h2>
            <ul className="list-disc pl-6 mb-6">
              <li>
                Include accessibility as a requirement for all web content.
                Content must meet WCAG 2.1 AA, and should meet AAA where
                feasible.
              </li>
              <li>Assign clear accessibility goals and responsibilities.</li>
              <li>
                Ensure content authors have access to accessibility knowledge and
                skills.
              </li>
              <li>Include accessibility as part of our technology mission.</li>
              <li>
                Include accessibility throughout our website-related internal
                policies.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              Compatibility
            </h2>
            <p className="mb-6">
              Our website is designed to be compatible with the following
              assistive technologies:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Screen readers (including NVDA, JAWS, and VoiceOver)</li>
              <li>Screen magnification software</li>
              <li>Speech recognition software</li>
              <li>
                The last two major versions of Chrome, Firefox, Safari, and Edge
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              Technical Specifications
            </h2>
            <p className="mb-6">
              The accessibility of this website relies on the following
              technologies to work with the particular combination of web
              browsers and assistive technologies:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>SVG</li>
              <li>WAI-ARIA</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              Limitations and Alternatives
            </h2>
            <p className="mb-6">
              Despite our best efforts to ensure accessibility of the Signature
              Cleaners website, there may be some limitations. Please contact us
              if you observe an issue, and we will do our best to address it
              promptly.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              Assessment Approach
            </h2>
            <p className="mb-6">
              We assess the accessibility of our website through self-evaluation
              and periodic third-party review.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Feedback</h2>
            <p className="mb-6">
              We welcome your feedback on the accessibility of the Signature
              Cleaners website. Please let us know if you encounter
              accessibility barriers:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>
                Email:{" "}
                <a
                  href="mailto:support@websitewannabe.com"
                  className="text-primary underline"
                >
                  support@websitewannabe.com
                </a>
              </li>
            </ul>
            <p className="mb-6">
              We aim to respond to accessibility feedback within 2 business days.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              Formal Approval of This Accessibility Statement
            </h2>
            <p className="mb-6">
              This Accessibility Statement is approved by Website Wannabe on
              behalf of Signature Cleaners.
            </p>
            <p className="text-sm text-neutral-500">
              Last updated: March 31, 2026
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
