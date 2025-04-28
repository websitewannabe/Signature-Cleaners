export const sitemap = {
  home: {
    path: "/",
    title: "Home",
  },
  services: {
    path: "/services",
    title: "Services",
    subPages: {
      dryClean: {
        path: "/dry-cleaning",
        title: "Dry Cleaning",
      },
      washFold: {
        path: "/wash-fold",
        title: "Wash & Fold",
      },
      alterationTailoring: {
        path: "/alteration-tailoring",
        title: "Alterations & Tailoring",
      },
      weddingGown: {
        path: "/wedding-gown",
        title: "Wedding Gown Services",
      },
      householdItems: {
        path: "/clean-household-items",
        title: "Household Items Cleaning",
      },
      shoeRepair: {
        path: "/shoe-repair",
        title: "Shoe Repair",
      },
      sudeLeather: {
        path: "/suede-leather-cleaning",
        title: "Suede & Leather Cleaning",
      },
      interiorCleaning: {
        path: "/interior-cleaning",
        title: "Interior Cleaning",
      },
      foldingDressShirt: {
        path: "/folding-dress-shirt",
        title: "Folding & Dress Shirt Service",
      },
    },
  },
  delivery: {
    path: "/delivery",
    title: "Delivery Service",
  },
  about: {
    path: "/about-us",
    title: "About Us",
  },
  contact: {
    path: "/contact-us",
    title: "Contact",
  },
  faq: {
    path: "/faq",
    title: "FAQ",
  },
  schedule: {
    path: "/schedule",
    title: "Schedule Service",
  },
  auth: {
    path: "/my-account",
    title: "Login/Signup",
  },
};

export type SitemapType = typeof sitemap;
