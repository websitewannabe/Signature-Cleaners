import type { MetadataRoute } from "next";

const BASE_URL = "https://www.mysignaturecleaners.com";

const cities = [
  "buckingham",
  "carversville",
  "chalfont",
  "doylestown",
  "dublin",
  "fountainville",
  "furlong",
  "holland",
  "ivyland",
  "jamison",
  "lahaska",
  "morrisville",
  "new_hope",
  "newtown",
  "ottsville",
  "perkasie",
  "pipersville",
  "point_pleasant",
  "richboro",
  "southampton",
  "trevose",
  "warminster",
  "warrington",
  "washington_crossing",
  "yardley",
];

const services = [
  "all-services",
  "dry-cleaning",
  "wash-fold",
  "wedding-gown",
  "alteration-tailoring",
  "shoe-repair",
  "clean-household-items",
  "delivery",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/about-us`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contact-us`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/schedule`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/my-account`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
  ];

  const servicePages = services.map((service) => ({
    url: `${BASE_URL}/all-services/${service}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const cityPages = cities.map((city) => ({
    url: `${BASE_URL}/${city}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const legalPages = [
    "privacy-policy",
    "terms-and-conditions",
    "accessibility-statement",
  ].map((page) => ({
    url: `${BASE_URL}/legal/${page}`,
    lastModified: new Date(),
    changeFrequency: "yearly" as const,
    priority: 0.3,
  }));

  const miscPages = [
    {
      url: `${BASE_URL}/site-credits`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.2,
    },
  ];

  return [...staticPages, ...servicePages, ...cityPages, ...legalPages, ...miscPages];
}
