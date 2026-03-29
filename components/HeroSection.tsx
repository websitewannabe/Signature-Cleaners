import Image from "next/image";
import Link from "next/link";
import QuoteButton from "@/components/QuoteButton";
import { blurDataMap } from "@/lib/blur-data";

interface HeroSectionProps {
  image: string;
  imageAlt: string;
  title: string;
  subtitle: string;
  titleAccent?: string;
  inlineAccent?: string;
  ctaText?: string;
  ctaHref?: string;
  useQuoteModal?: boolean;
}

export default function HeroSection({
  image,
  imageAlt,
  title,
  subtitle,
  titleAccent,
  inlineAccent,
  ctaText = "Schedule a Pickup",
  ctaHref = "/schedule",
  useQuoteModal: useModal = false,
}: HeroSectionProps) {
  const blurDataURL = blurDataMap[image];

  return (
    <section className="relative flex h-[420px] items-end md:h-[490px]">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
        {...(blurDataURL
          ? { placeholder: "blur" as const, blurDataURL }
          : {})}
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

      <div className="container-wide relative z-10 pb-12 md:pb-16">
        <h1 className="heading-xl mb-4 max-w-3xl text-white">
          {title}
          {titleAccent && (
            <span className="text-accent-light"> {titleAccent}</span>
          )}
          {inlineAccent && (
            <span className="text-accent-light">{inlineAccent}</span>
          )}
        </h1>
        <p className="mb-8 max-w-xl text-lg text-zinc-300">{subtitle}</p>

        {useModal ? (
          <QuoteButton text={ctaText} showArrow />
        ) : ctaHref ? (
          <Link href={ctaHref} className="btn-primary">
            {ctaText} →
          </Link>
        ) : null}
      </div>
    </section>
  );
}
