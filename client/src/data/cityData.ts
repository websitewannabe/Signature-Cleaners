export interface CityData {
  name: string;
  title: string;
  subtitle: string;
  seo: {
    title: string;
    description: string;
    keywords: string;
    canonical: string;
  };
  mapEmbedUrl: string;
  about: string;
  faq: Array<{
    question: string;
    answer: string;
  }>;
}

export const cityData: Record<string, CityData> = {
  doylestown: {
    name: "Doylestown",
    title: "Professional Dry Cleaning in Doylestown",
    subtitle:
      "Proudly serving the Doylestown community with trusted dry cleaning for decades.",
    seo: {
      title: "Dry Cleaning in Doylestown, PA | Signature Cleaners",
      description:
        "Signature Cleaners offers eco-friendly, same-day dry cleaning services in Doylestown, PA with expert garment care.",
      keywords:
        "dry cleaning Doylestown, laundry service Doylestown, Signature Cleaners",
      canonical: "https://www.mysignaturecleaners.com/doylestown",
    },
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d194626.6239363241!2d-75.43258756718754!3d40.3414365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c402caed310f67%3A0x4739bde141ae22d1!2sSignature%20Cleaners%20at%20Doylestown!5e0!3m2!1sen!2sus!4v1747319798707!5m2!1sen!2sus",
    about:
      "Doylestown is a charming Bucks County town known for its cultural history and vibrant downtown. Our location has been serving the community with premium dry cleaning services, combining traditional craftsmanship with modern eco-friendly cleaning methods.",
    faq: [
      {
        question: "Do you offer same-day dry cleaning in Doylestown?",
        answer:
          "Yes! Drop off before 10 AM for same-day service at our Doylestown location.",
      },
      {
        question: "Where is your Doylestown location?",
        answer: "We are located at 1456 Ferry Road #10, Doylestown, PA 18901.",
      },
      {
        question: "What are your business hours in Doylestown?",
        answer:
          "We are open Monday through Friday from 7 AM to 7 PM, Saturday from 8 AM to 5 PM, and Sunday from 10 AM to 3 PM.",
      },
      {
        question: "Do you offer pickup and delivery in Doylestown?",
        answer:
          "Yes, we offer free pickup and delivery service throughout Doylestown and surrounding areas. Schedule online or call us to arrange service.",
      },
      {
        question:
          "What specialty cleaning services do you offer in Doylestown?",
        answer:
          "We offer expert care for delicate garments, leather, suede, wedding gowns, formal wear, and household items like draperies and bedding.",
      },
    ],
  },
  buckingham: {
    name: "Buckingham Township",
    title: "Professional Dry Cleaning in Buckingham Township",
    subtitle:
      "Proudly serving Buckingham Township with trusted dry cleaning for decades.",
    seo: {
      title: "Dry Cleaning in Buckingham Township, PA | Signature Cleaners",
      description:
        "Trusted dry cleaning services in Buckingham Township. Free pickup & delivery, eco-friendly cleaning, and expert garment care.",
      keywords:
        "dry cleaning Buckingham, laundry service Buckingham, Signature Cleaners Buckingham",
      canonical: "https://www.mysignaturecleaners.com/buckingham",
    },
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48656.66193150027!2d-75.07559866953123!3d40.32633199999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6a89f944b9c91%3A0x8cfb89ae094fe457!2sBuckingham%2C%20PA%2018912!5e0!3m2!1sen!2sus!4v1707674821037!5m2!1sen!2sus",
    about:
      "Buckingham Township is one of the oldest and most picturesque areas in Bucks County, Pennsylvania. Known for its rolling farmlands, historic homes, and tight-knit community, Buckingham blends rural charm with elegant country living.",
    faq: [
      {
        question: "Do you offer same-day service in Buckingham Township?",
        answer:
          "Yes, we offer same-day service for items dropped off before 9 AM, Monday through Friday. Some specialty items may require additional time.",
      },
      {
        question: "What areas of Buckingham do you service?",
        answer:
          "We provide pickup and delivery services throughout all of Buckingham Township, including the surrounding communities and neighborhoods.",
      },
      {
        question: "What payment methods do you accept in Buckingham?",
        answer:
          "We accept all major credit cards, including Visa, Mastercard, American Express, and Discover. We also offer convenient auto-pay options.",
      },
      {
        question: "Do you offer wedding gown preservation in Buckingham?",
        answer:
          "Yes, we specialize in wedding gown preservation with our expert cleaning and preservation process to protect your cherished garment.",
      },
      {
        question: "What is your turnaround time for alterations in Buckingham?",
        answer:
          "Standard alterations typically take 3-5 business days. Rush service is available upon request for an additional fee.",
      },
    ],
  },
  carversville: {
    name: "Carversville",
    title: "Professional Dry Cleaning in Carversville",
    subtitle:
      "Serving Carversville with eco-friendly, expert garment care and local pickup & delivery.",
    seo: {
      title: "Dry Cleaning in Carversville, PA | Signature Cleaners",
      description:
        "Signature Cleaners offers expert dry cleaning and laundry services in Carversville, PA with free pickup & delivery.",
      keywords:
        "Carversville dry cleaning, laundry service Carversville, Signature Cleaners Bucks County",
      canonical: "https://www.mysignaturecleaners.com/carversville",
    },
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3050.0371214575187!2d-75.07559866953123!3d40.32633199999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6a8c8b8b8b8b9%3A0x8b8b8b8b8b8b8b8b!2sCarversville%2C%20PA%2018913!5e0!3m2!1sen!2sus!4v1707674821037!5m2!1sen!2sus",
    about:
      "Carversville, nestled in the heart of Bucks County, is a picturesque village known for its scenic roads, preserved architecture, and quiet charm. Signature Cleaners is proud to serve Carversville residents with professional garment care and reliable pickup and delivery services.",
    faq: [
      {
        question: "Do you offer pickup and delivery in Carversville?",
        answer:
          "Yes! We offer free pickup and delivery service to all Carversville residents.",
      },
      {
        question: "How long does dry cleaning take in Carversville?",
        answer:
          "Standard turnaround is 48 hours. Rush service is available by request.",
      },
      {
        question: "Can I get tailoring services in Carversville?",
        answer:
          "Absolutely. Schedule a pickup or bring your garments to our Doylestown location for alterations.",
      },
      {
        question: "What eco-friendly cleaning methods do you use?",
        answer:
          "We use environmentally responsible cleaning solutions and energy-efficient equipment to minimize our environmental impact while ensuring superior cleaning results.",
      },
      {
        question: "How do I schedule a pickup in Carversville?",
        answer:
          "You can easily schedule a pickup through our website, mobile app, or by calling our customer service team.",
      },
      {
        question: "Do you clean household items from Carversville homes?",
        answer:
          "Yes, we clean comforters, blankets, draperies, and other household items with free pickup and delivery in Carversville.",
      },
    ],
  },
  chalfont: {
    name: "Chalfont",
    title: "Professional Dry Cleaning in Chalfont",
    subtitle: "Proudly serving Chalfont with trusted dry cleaning for decades.",
    seo: {
      title: "Dry Cleaning in Chalfont, PA | Signature Cleaners",
      description:
        "Trusted dry cleaning services in Chalfont. Free pickup & delivery, eco-friendly cleaning, and expert garment care.",
      keywords:
        "dry cleaning Chalfont, laundry service Chalfont, Signature Cleaners Chalfont",
      canonical: "https://www.mysignaturecleaners.com/chalfont",
    },
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3077.6013124401543!2d-75.21267568465866!3d40.288437179379794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6a9d9e2f5051b%3A0x4e1a7b48be55f631!2sChalfont%2C%20PA%2018914!5e0!3m2!1sen!2sus!4v1653955180672!5m2!1sen!2sus",
    about:
      "Chalfont, Pennsylvania is a quaint borough nestled in the heart of Bucks County. Rich in colonial history and small-town charm, Chalfont offers tree-lined streets, preserved Victorian architecture, and a welcoming, close-knit community. It’s a peaceful enclave that perfectly balances historic character with modern suburban comfort.",
    faq: [
      {
        question: "Do you offer same-day service in Chalfont?",
        answer:
          "Yes, we offer same-day service for items dropped off before 9 AM, Monday through Friday. Some specialty items may require additional time.",
      },
      {
        question: "What areas of Chalfont do you service?",
        answer:
          "We provide pickup and delivery services throughout all of Chalfont, including the surrounding communities and neighborhoods.",
      },
      {
        question: "What payment methods do you accept in Dublin?",
        answer:
          "We accept all major credit cards, including Visa, Mastercard, American Express, and Discover. We also offer convenient auto-pay options.",
      },
      {
        question: "Do you offer wedding gown preservation in Chalfont?",
        answer:
          "Yes, we specialize in wedding gown preservation with our expert cleaning and preservation process to protect your cherished garment.",
      },
      {
        question: "What is your turnaround time for alterations in Chalfont?",
        answer:
          "Standard alterations typically take 3-5 business days. Rush service is available upon request for an additional fee.",
      },
    ],
  },
  dublin: {
    name: "Dublin",
    title: "Professional Dry Cleaning in Dublin",
    subtitle: "Proudly serving Dublin with trusted dry cleaning for decades.",
    seo: {
      title: "Dry Cleaning in Dublin, PA | Signature Cleaners",
      description:
        "Trusted dry cleaning services in Dublin. Free pickup & delivery, eco-friendly cleaning, and expert garment care.",
      keywords:
        "dry cleaning Dublin, laundry service Dublin, Signature Cleaners Dublin",
      canonical: "https://www.mysignaturecleaners.com/dublin",
    },
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6079.108072806314!2d-75.20907930015704!3d40.374411835785686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c41c56847dafeb%3A0xe56de7be5cdf5afc!2sDublin%2C%20PA%2018917!5e0!3m2!1sen!2sus!4v1747837593315!5m2!1sen!2sus",
    about:
      "Dublin, Pennsylvania is a small yet vibrant borough located in upper Bucks County. Known for its blend of historic charm and growing local culture, Dublin features a walkable town center, unique small businesses, and a strong sense of community. Surrounded by scenic countryside, it offers a welcoming atmosphere that embraces both tradition and progress.",
    faq: [
      {
        question: "Do you offer same-day service in Dublin?",
        answer:
          "Yes, we offer same-day service for items dropped off before 9 AM, Monday through Friday. Some specialty items may require additional time.",
      },
      {
        question: "What areas of Dublin do you service?",
        answer:
          "We provide pickup and delivery services throughout all of Dublin, including the surrounding communities and neighborhoods.",
      },
      {
        question: "What payment methods do you accept in Dublin?",
        answer:
          "We accept all major credit cards, including Visa, Mastercard, American Express, and Discover. We also offer convenient auto-pay options.",
      },
      {
        question: "Do you offer wedding gown preservation in Dublin?",
        answer:
          "Yes, we specialize in wedding gown preservation with our expert cleaning and preservation process to protect your cherished garment.",
      },
      {
        question: "What is your turnaround time for alterations in Dublin?",
        answer:
          "Standard alterations typically take 3-5 business days. Rush service is available upon request for an additional fee.",
      },
    ],
  },
  furlong: {
    name: "Furlong",
    title: "Professional Dry Cleaning in Furlong",
    subtitle: "Proudly serving Furlong with trusted dry cleaning for decades.",
    seo: {
      title: "Dry Cleaning in Furlong, PA | Signature Cleaners",
      description:
        "Trusted dry cleaning services in Furlong. Free pickup & delivery, eco-friendly cleaning, and expert garment care.",
      keywords:
        "dry cleaning Furlong, laundry service Furlong, Signature Cleaners Furlong",
      canonical: "https://www.mysignaturecleaners.com/Furlong",
    },
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6086.156882739395!2d-75.08726485016717!3d40.29621723583667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6a9945e5fcea3%3A0xf1d5196041bd2baf!2sFurlong%2C%20PA%2018925!5e0!3m2!1sen!2sus!4v1747838361431!5m2!1sen!2sus",
    about:
      "Furlong, Pennsylvania is a picturesque hamlet nestled between Doylestown and Buckingham in Bucks County. Known for its scenic beauty, horse farms, and upscale homes, Furlong exudes a serene, country elegance. With its close proximity to historic towns and preserved open spaces, Furlong offers a tranquil lifestyle rooted in charm and refinement.",
    faq: [
      {
        question: "Do you offer same-day service in Furlong?",
        answer:
          "Yes, we offer same-day service for items dropped off before 9 AM, Monday through Friday. Some specialty items may require additional time.",
      },
      {
        question: "What areas of Furlong do you service?",
        answer:
          "We provide pickup and delivery services throughout all of Furlong, including the surrounding communities and neighborhoods.",
      },
      {
        question: "What payment methods do you accept in Furlong?",
        answer:
          "We accept all major credit cards, including Visa, Mastercard, American Express, and Discover. We also offer convenient auto-pay options.",
      },
      {
        question: "Do you offer wedding gown preservation in Furlong?",
        answer:
          "Yes, we specialize in wedding gown preservation with our expert cleaning and preservation process to protect your cherished garment.",
      },
      {
        question: "What is your turnaround time for alterations in Furlong?",
        answer:
          "Standard alterations typically take 3-5 business days. Rush service is available upon request for an additional fee.",
      },
    ],
  },
  fountainville: {
    name: "Fountainville",
    title: "Professional Dry Cleaning in Fountainville",
    subtitle:
      "Proudly serving Fountainville with trusted dry cleaning for decades.",
    seo: {
      title: "Dry Cleaning in Fountainville, PA | Signature Cleaners",
      description:
        "Trusted dry cleaning services in Fountainville. Free pickup & delivery, eco-friendly cleaning, and expert garment care.",
      keywords:
        "dry cleaning Fountainville, laundry service Fountainville, Signature Cleaners Fountainville",
      canonical: "https://www.mysignaturecleaners.com/fountainville",
    },
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12162.792430883908!2d-75.17173271801676!3d40.349042543207126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c402cbb1eefaa5%3A0x36f8ca19df4366b4!2sFountainville%2C%20PA%2018923!5e0!3m2!1sen!2sus!4v1747838086549!5m2!1sen!2sus",
    about:
      "Fountainville, Pennsylvania is a quiet village at the crossroads of Bucks County, where rural landscapes meet suburban convenience. Surrounded by open fields and gently winding roads, Fountainville offers a peaceful setting with easy access to nearby towns. Its laid-back atmosphere and community-oriented spirit make it a charming retreat in the heart of the county.",
    faq: [
      {
        question: "Do you offer same-day service in Fountainville?",
        answer:
          "Yes, we offer same-day service for items dropped off before 9 AM, Monday through Friday. Some specialty items may require additional time.",
      },
      {
        question: "What areas of Fountainville do you service?",
        answer:
          "We provide pickup and delivery services throughout all of Dublin, including the surrounding communities and neighborhoods.",
      },
      {
        question: "What payment methods do you accept in Fountainville?",
        answer:
          "We accept all major credit cards, including Visa, Mastercard, American Express, and Discover. We also offer convenient auto-pay options.",
      },
      {
        question: "Do you offer wedding gown preservation in Fountainville?",
        answer:
          "Yes, we specialize in wedding gown preservation with our expert cleaning and preservation process to protect your cherished garment.",
      },
      {
        question: "What is your turnaround time for alterations in Fountainville?",
        answer:
          "Standard alterations typically take 3-5 business days. Rush service is available upon request for an additional fee.",
      },
    ],
  },
  holland: {
    name: "Holland",
    title: "Professional Dry Cleaning in Holland",
    subtitle:
      "Proudly serving Holland with trusted dry cleaning for decades.",
    seo: {
      title: "Dry Cleaning in Holland, PA | Signature Cleaners",
      description:
        "Trusted dry cleaning services in Dublin. Free pickup & delivery, eco-friendly cleaning, and expert garment care.",
      keywords:
        "dry cleaning Fountainville, laundry service Fountainville, Signature Cleaners Fountainville",
      canonical: "https://www.mysignaturecleaners.com/fountainville",
    },
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12162.792430883908!2d-75.17173271801676!3d40.349042543207126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c402cbb1eefaa5%3A0x36f8ca19df4366b4!2sFountainville%2C%20PA%2018923!5e0!3m2!1sen!2sus!4v1747838086549!5m2!1sen!2sus",
    about:
      "Fountainville, Pennsylvania is a quiet village at the crossroads of Bucks County, where rural landscapes meet suburban convenience. Surrounded by open fields and gently winding roads, Fountainville offers a peaceful setting with easy access to nearby towns. Its laid-back atmosphere and community-oriented spirit make it a charming retreat in the heart of the county.",
    faq: [
      {
        question: "Do you offer same-day service in Fountainville?",
        answer:
          "Yes, we offer same-day service for items dropped off before 9 AM, Monday through Friday. Some specialty items may require additional time.",
      },
      {
        question: "What areas of Fountainville do you service?",
        answer:
          "We provide pickup and delivery services throughout all of Dublin, including the surrounding communities and neighborhoods.",
      },
      {
        question: "What payment methods do you accept in Fountainville?",
        answer:
          "We accept all major credit cards, including Visa, Mastercard, American Express, and Discover. We also offer convenient auto-pay options.",
      },
      {
        question: "Do you offer wedding gown preservation in Fountainville?",
        answer:
          "Yes, we specialize in wedding gown preservation with our expert cleaning and preservation process to protect your cherished garment.",
      },
      {
        question: "What is your turnaround time for alterations in Fountainville?",
        answer:
          "Standard alterations typically take 3-5 business days. Rush service is available upon request for an additional fee.",
      },
    ],
  },
};
