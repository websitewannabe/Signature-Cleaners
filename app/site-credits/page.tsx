import { ArrowRight, Code, Palette, Rocket, Globe } from "lucide-react";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Site Credits Built by Website Wannabe, Powered by AI Wannabe",
  description:
    "This website was designed and built by Website Wannabe and powered by AI Wannabe. Custom web design, development, SEO, and AI-driven solutions for businesses.",
  canonical: "/site-credits",
});

export default function SiteCreditsPage() {
  return (
    <>
      {/* About */}
      <section className="section-padding bg-zinc-950">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-primary">
              Built By
            </p>
            <h1 className="heading-xl mb-8 text-white">
              Website <span className="text-primary">Wannabe</span>
            </h1>
            <p className="mb-6 text-lg leading-relaxed text-white/80">
              This website was designed and built by{" "}
              <a
                href="https://websitewannabe.co"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline underline-offset-4 transition-colors hover:text-primary"
              >
                Website Wannabe
              </a>{" "}
              , a modern web design and development agency specializing in
              high-performance websites for businesses that want to stand out
              online.
            </p>
            <p className="mb-6 text-lg leading-relaxed text-white/80">
              Powered by{" "}
              <a
                href="https://aiwannabe.co"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline underline-offset-4 transition-colors hover:text-primary"
              >
                AI Wannabe
              </a>
              , this site leverages cutting-edge AI technology to deliver a
              fast, modern, and intelligent web experience.
            </p>
            <p className="text-lg leading-relaxed text-white/80">
              From custom design and development to SEO optimization and
              ongoing support, Website Wannabe delivers websites that look
              stunning and perform even better.
            </p>
          </div>
        </div>
      </section>

      {/* What Website Wannabe Offers */}
      <section className="section-padding bg-black">
        <div className="container-wide">
          <div className="mb-16 text-center">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-primary">
              Services
            </p>
            <h2 className="heading-xl text-white">
              What Website Wannabe Offers
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Palette,
                title: "Custom Design",
                description:
                  "Unique, brand-aligned designs tailored to your business and audience.",
              },
              {
                icon: Code,
                title: "Web Development",
                description:
                  "Modern, fast, and responsive websites built with cutting-edge technology.",
              },
              {
                icon: Rocket,
                title: "SEO & Performance",
                description:
                  "Optimized for search engines and blazing-fast load times out of the box.",
              },
              {
                icon: Globe,
                title: "Ongoing Support",
                description:
                  "Continuous maintenance, updates, and support to keep your site running smoothly.",
              },
            ].map((item) => (
              <div key={item.title} className="card-luxury text-center">
                <item.icon className="mx-auto mb-5 h-10 w-10 text-primary" />
                <h3 className="mb-3 font-serif text-lg text-white">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/80">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Want a Website Like This? */}
      <section className="section-padding bg-zinc-950">
        <div className="container-wide text-center">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-primary">
            Need a Website?
          </p>
          <h2 className="heading-xl mb-6 text-white">
            Want a Website Like This?
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-white/80">
            Website Wannabe builds high-performance, beautifully designed
            websites for businesses of all sizes. Get in touch today.
          </p>
          <a
            href="https://websitewannabe.co"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Visit Website Wannabe
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </section>
    </>
  );
}
