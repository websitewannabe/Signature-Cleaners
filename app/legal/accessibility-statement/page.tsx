import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accessibility Statement for Signature Cleaners",
  description:
    "Signature Cleaners is committed to ensuring digital accessibility for people with disabilities. Learn about our accessibility efforts.",
  alternates: {
    canonical:
      "https://www.mysignaturecleaners.com/legal/accessibility-statement",
  },
  openGraph: {
    title: "Accessibility Statement for Signature Cleaners",
    description:
      "Signature Cleaners is committed to ensuring digital accessibility for people with disabilities. Learn about our accessibility efforts.",
    url: "https://www.mysignaturecleaners.com/legal/accessibility-statement",
    type: "website",
    locale: "en_US",
    siteName: "Signature Cleaners",
  },
};

export default function AccessibilityStatementPage() {
  return (
    <>
      <section className="section-padding">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl">
            <h1 className="heading-xl mb-6 text-white">
              Accessibility Statement
            </h1>

            <div className="space-y-8 text-white leading-relaxed">
              <div>
                <h2 className="font-serif text-2xl font-bold mb-4 text-white">
                  Our Commitment
                </h2>
                <p>
                  Signature Cleaners is committed to ensuring digital
                  accessibility for people with disabilities. We are continually
                  improving the user experience for everyone and applying the
                  relevant accessibility standards to guarantee we provide equal
                  access to all users.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold mb-4 text-white">
                  Conformance Status
                </h2>
                <p>
                  The Web Content Accessibility Guidelines (WCAG) define
                  requirements for designers and developers to improve
                  accessibility for people with disabilities. It defines three
                  levels of conformance: Level A, Level AA, and Level AAA. The
                  Signature Cleaners website strives to conform to WCAG 2.1
                  Level AA. We conduct regular reviews and remediation to
                  maintain and improve compliance.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold mb-4 text-white">
                  Accessibility Features
                </h2>
                <p>
                  We have taken the following measures to ensure accessibility of
                  the Signature Cleaners website:
                </p>
                <ul className="mt-2 list-disc list-inside space-y-2 text-white/80">
                  <li>Semantic HTML markup for clear document structure</li>
                  <li>Sufficient color contrast ratios throughout the site</li>
                  <li>Keyboard-navigable interactive elements</li>
                  <li>Descriptive alt text for meaningful images</li>
                  <li>ARIA labels and roles where appropriate</li>
                  <li>
                    Resizable text without loss of content or functionality
                  </li>
                  <li>Accessible forms with proper labels and error messages</li>
                  <li>
                    An on-site accessibility tools panel available via the
                    &ldquo;Accessibility Tools&rdquo; button in the footer
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold mb-4 text-white">
                  Measures to Support Accessibility
                </h2>
                <ul className="mt-2 list-disc list-inside space-y-2 text-white/80">
                  <li>
                    Include accessibility as a requirement for all web content.
                    Content must meet WCAG 2.1 AA, and should meet AAA where
                    feasible.
                  </li>
                  <li>
                    Assign clear accessibility goals and responsibilities.
                  </li>
                  <li>
                    Ensure content authors have access to accessibility knowledge
                    and skills.
                  </li>
                  <li>
                    Include accessibility as part of our technology mission.
                  </li>
                  <li>
                    Include accessibility throughout our website-related internal
                    policies.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold mb-4 text-white">
                  Compatibility
                </h2>
                <p>
                  Our website is designed to be compatible with the following
                  assistive technologies:
                </p>
                <ul className="mt-2 list-disc list-inside space-y-2 text-white/80">
                  <li>
                    Screen readers (including NVDA, JAWS, and VoiceOver)
                  </li>
                  <li>Screen magnification software</li>
                  <li>Speech recognition software</li>
                  <li>
                    The last two major versions of Chrome, Firefox, Safari, and
                    Edge
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold mb-4 text-white">
                  Technical Specifications
                </h2>
                <p>
                  The accessibility of this website relies on the following
                  technologies:
                </p>
                <ul className="mt-2 list-disc list-inside space-y-1 text-white/80">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>SVG</li>
                  <li>WAI-ARIA</li>
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold mb-4 text-white">
                  Limitations and Alternatives
                </h2>
                <p>
                  Despite our best efforts to ensure accessibility of the
                  Signature Cleaners website, there may be some limitations.
                  Please contact us if you observe an issue, and we will do our
                  best to address it promptly.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold mb-4 text-white">
                  Assessment Approach
                </h2>
                <p>
                  We assess the accessibility of our website through
                  self-evaluation and periodic third-party review.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold mb-4 text-white">
                  Feedback
                </h2>
                <p>
                  We welcome your feedback on the accessibility of the Signature
                  Cleaners website. Please let us know if you encounter
                  accessibility barriers:
                </p>
                <div className="mt-4 card-luxury">
                  <p>
                    <strong className="text-white">Email:</strong>{" "}
                    <a
                      href="mailto:support@websitewannabe.com"
                      className="text-primary hover:underline"
                    >
                      support@websitewannabe.com
                    </a>
                  </p>
                </div>
                <p className="mt-4">
                  We aim to respond to accessibility feedback within 2 business
                  days.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold mb-4 text-white">
                  Formal Approval of This Accessibility Statement
                </h2>
                <p>
                  This Accessibility Statement is approved by Website Wannabe on
                  behalf of Signature Cleaners.
                </p>
                <p className="mt-4 text-sm text-white/60">
                  Last updated: March 31, 2026
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
