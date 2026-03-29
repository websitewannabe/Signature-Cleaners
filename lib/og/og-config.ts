export interface OgPageConfig {
  title: string;
  meta: string;
  bgImage: string;
}

export const ogConfig: Record<string, OgPageConfig> = {
  home: {
    title: "Signature Cleaners",
    meta: "Expert Dry Cleaning & Laundry in Doylestown, PA",
    bgImage: "/images/interior-hero.webp",
  },
  about: {
    title: "Our Story",
    meta: "20+ Years of Trusted Garment Care in Bucks County",
    bgImage: "/images/theTeam.webp",
  },
  contact: {
    title: "Contact Us",
    meta: "Schedule a Pickup or Ask a Question",
    bgImage: "/images/interior.webp",
  },
  services: {
    title: "Our Services",
    meta: "Dry Cleaning, Tailoring, Preservation & More",
    bgImage: "/images/interior.webp",
  },
  "dry-cleaning": {
    title: "Dry Cleaning",
    meta: "Professional Garment Care with Eco-Friendly Solvents",
    bgImage: "/images/interior-two.webp",
  },
  "wash-fold": {
    title: "Wash & Fold",
    meta: "Convenient Per-Pound Laundry Service",
    bgImage: "/images/washFold.webp",
  },
  "wedding-gown": {
    title: "Wedding Gown Preservation",
    meta: "Museum-Quality Cleaning & Preservation",
    bgImage: "/images/weddingGown.webp",
  },
  "alteration-tailoring": {
    title: "Alterations & Tailoring",
    meta: "Expert Fitting, Hemming & Repairs",
    bgImage: "/images/tailor.webp",
  },
  "shoe-repair": {
    title: "Shoe Repair",
    meta: "Professional Restoration & Conditioning",
    bgImage: "/images/shoeRepair.webp",
  },
  "clean-household-items": {
    title: "Household Items",
    meta: "Expert Care for Home Textiles & Specialty Items",
    bgImage: "/images/householdItems.webp",
  },
  delivery: {
    title: "Pickup & Delivery",
    meta: "Free Service Throughout Bucks County",
    bgImage: "/images/delivery.webp",
  },
  schedule: {
    title: "Schedule Pickup",
    meta: "Free Pickup & Delivery Throughout Bucks County",
    bgImage: "/images/vans_outfront.jpg",
  },
  "my-account": {
    title: "My Account",
    meta: "Manage Your Pickup Schedule & Preferences",
    bgImage: "/images/interior.webp",
  },
  "site-credits": {
    title: "Site Credits",
    meta: "Built by Website Wannabe, Powered by AI Wannabe",
    bgImage: "/images/interior.webp",
  },
  "privacy-policy": {
    title: "Privacy Policy",
    meta: "How We Protect Your Information",
    bgImage: "/images/interior.webp",
  },
  "terms-and-conditions": {
    title: "Terms & Conditions",
    meta: "Terms of Service for Signature Cleaners",
    bgImage: "/images/interior.webp",
  },
  "accessibility-statement": {
    title: "Accessibility",
    meta: "Our Commitment to Digital Accessibility",
    bgImage: "/images/interior.webp",
  },
};
