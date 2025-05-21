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
          "We provide pickup and delivery services throughout all of Fountainville, including the surrounding communities and neighborhoods.",
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
        question:
          "What is your turnaround time for alterations in Fountainville?",
        answer:
          "Standard alterations typically take 3-5 business days. Rush service is available upon request for an additional fee.",
      },
    ],
  },
  holland: {
    name: "Holland",
    title: "Professional Dry Cleaning in Holland",
    subtitle: "Proudly serving Holland with trusted dry cleaning for decades.",
    seo: {
      title: "Dry Cleaning in Holland, PA | Signature Cleaners",
      description:
        "Trusted dry cleaning services in Holland. Free pickup & delivery, eco-friendly cleaning, and expert garment care.",
      keywords:
        "dry cleaning Holland, laundry service Holland, Signature Cleaners Holland",
      canonical: "https://www.mysignaturecleaners.com/holland",
    },
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6094.8520066023975!2d-74.97762975017996!3d40.19958583590114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6acb3ea7b0981%3A0xc856bc6944a516dd!2sHolland%2C%20Northampton%20Township%2C%20PA%2018966!5e0!3m2!1sen!2sus!4v1747839300933!5m2!1sen!2sus",
    about:
      "Holland, Pennsylvania is a serene suburban community located in Northampton Township, Bucks County. Known for its tree-lined neighborhoods, top-rated schools, and family-friendly atmosphere, Holland combines quiet residential living with convenient access to nearby towns and amenities. Its strong sense of community and well-kept charm make it a desirable place to call home.",
    faq: [
      {
        question: "Do you offer same-day service in Holland?",
        answer:
          "Yes, we offer same-day service for items dropped off before 9 AM, Monday through Friday. Some specialty items may require additional time.",
      },
      {
        question: "What areas of Holland do you service?",
        answer:
          "We provide pickup and delivery services throughout all of Holland, including the surrounding communities and neighborhoods.",
      },
      {
        question: "What payment methods do you accept in Holland?",
        answer:
          "We accept all major credit cards, including Visa, Mastercard, American Express, and Discover. We also offer convenient auto-pay options.",
      },
      {
        question: "Do you offer wedding gown preservation in Holland?",
        answer:
          "Yes, we specialize in wedding gown preservation with our expert cleaning and preservation process to protect your cherished garment.",
      },
      {
        question: "What is your turnaround time for alterations in Holland?",
        answer:
          "Standard alterations typically take 3-5 business days. Rush service is available upon request for an additional fee.",
      },
    ],
  },
  ivyland: {
    name: "Ivyland",
    title: "Professional Dry Cleaning in Ivyland",
    subtitle: "Proudly serving Holland with trusted dry cleaning for decades.",
    seo: {
      title: "Dry Cleaning in Ivyland, PA | Signature Cleaners",
      description:
        "Trusted dry cleaning services in Ivyland. Free pickup & delivery, eco-friendly cleaning, and expert garment care.",
      keywords:
        "dry cleaning Ivyland, laundry service Ivyland, Signature Cleaners Ivyland",
      canonical: "https://www.mysignaturecleaners.com/ivyland",
    },
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6094.075938479339!2d-75.07812180017874!3d40.208218335895566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6aeb629b2f161%3A0x5ca59982008f0091!2sIvyland%2C%20PA%2018974!5e0!3m2!1sen!2sus!4v1747840333353!5m2!1sen!2sus",
    about:
      "Ivyland, Pennsylvania is a charming borough in Bucks County, known for its rich Victorian heritage and small-town warmth. With beautifully preserved architecture, quiet streets, and a close-knit community, Ivyland offers a unique blend of historical character and residential tranquility. It’s a hidden gem that captures the timeless spirit of classic Americana.",
    faq: [
      {
        question: "Do you offer same-day service in Ivyland?",
        answer:
          "Yes, we offer same-day service for items dropped off before 9 AM, Monday through Friday. Some specialty items may require additional time.",
      },
      {
        question: "What areas of Ivyland do you service?",
        answer:
          "We provide pickup and delivery services throughout all of Ivyland, including the surrounding communities and neighborhoods.",
      },
      {
        question: "What payment methods do you accept in Ivyland?",
        answer:
          "We accept all major credit cards, including Visa, Mastercard, American Express, and Discover. We also offer convenient auto-pay options.",
      },
      {
        question: "Do you offer wedding gown preservation in Ivyland?",
        answer:
          "Yes, we specialize in wedding gown preservation with our expert cleaning and preservation process to protect your cherished garment.",
      },
      {
        question: "What is your turnaround time for alterations in Ivyland?",
        answer:
          "Standard alterations typically take 3-5 business days. Rush service is available upon request for an additional fee.",
      },
    ],
  },
  jamison: {
    name: "Jamison",
    title: "Professional Dry Cleaning in Jamison",
    subtitle: "Proudly serving Jamison with trusted dry cleaning for decades.",
    seo: {
      title: "Dry Cleaning in Jamison, PA | Signature Cleaners",
      description:
        "Trusted dry cleaning services in Jamison. Free pickup & delivery, eco-friendly cleaning, and expert garment care.",
      keywords:
        "dry cleaning Jamison, laundry service Jamison, Signature Cleaners Jamison",
      canonical: "https://www.mysignaturecleaners.com/jamison",
    },
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24359.190275431494!2d-75.09580395697441!3d40.25578067379979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6a96f070fa463%3A0x88ae7715dc5e8a73!2sJamison%2C%20PA!5e0!3m2!1sen!2sus!4v1747841758776!5m2!1sen!2sus",
    about:
      "Jamison, Pennsylvania is a welcoming community nestled in Warwick Township, Bucks County. Known for its scenic neighborhoods, well-regarded schools, and family-friendly vibe, Jamison offers a perfect blend of suburban comfort and natural beauty. With parks, golf courses, and a strong sense of community, it’s a peaceful place to live and grow.",
    faq: [
      {
        question: "Do you offer same-day service in Jamison",
        answer:
          "Yes, we offer same-day service for items dropped off before 9 AM, Monday through Friday. Some specialty items may require additional time.",
      },
      {
        question: "What areas of Jamison do you service?",
        answer:
          "We provide pickup and delivery services throughout all of Jamison, including the surrounding communities and neighborhoods.",
      },
      {
        question: "What payment methods do you accept in Jamison?",
        answer:
          "We accept all major credit cards, including Visa, Mastercard, American Express, and Discover. We also offer convenient auto-pay options.",
      },
      {
        question: "Do you offer wedding gown preservation in Jamison?",
        answer:
          "Yes, we specialize in wedding gown preservation with our expert cleaning and preservation process to protect your cherished garment.",
      },
      {
        question: "What is your turnaround time for alterations in Jamison?",
        answer:
          "Standard alterations typically take 3-5 business days. Rush service is available upon request for an additional fee.",
      },
    ],
  },
  lahaska: {
    name: "Lahaska",
    title: "Professional Dry Cleaning in Lahaska",
    subtitle: "Proudly serving Lahaska with trusted dry cleaning for decades.",
    seo: {
      title: "Dry Cleaning in Lahaska, PA | Signature Cleaners",
      description:
        "Trusted dry cleaning services in Lahaska. Free pickup & delivery, eco-friendly cleaning, and expert garment care.",
      keywords:
        "dry cleaning Lahaska, laundry service Lahaska, Signature Cleaners Lahaska",
      canonical: "https://www.mysignaturecleaners.com/lahaska",
    },
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6081.625981034163!2d-75.0367081501606!3d40.346494335803946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c401095e9cefb7%3A0xb1716f809855bc47!2sLahaska%2C%20PA%2018938!5e0!3m2!1sen!2sus!4v1747842076626!5m2!1sen!2sus",
    about:
      "Lahaska, Pennsylvania is a quaint village in Bucks County, best known as the home of the beloved shopping destination Peddler’s Village. Blending colonial charm with artisan flair, Lahaska features cobblestone paths, unique boutiques, and cozy eateries. Surrounded by rolling countryside, it offers a delightful mix of history, culture, and small-town enchantment.",
    faq: [
      {
        question: "Do you offer same-day service in Lahaska",
        answer:
          "Yes, we offer same-day service for items dropped off before 9 AM, Monday through Friday. Some specialty items may require additional time.",
      },
      {
        question: "What areas of Lahaska do you service?",
        answer:
          "We provide pickup and delivery services throughout all of Lahaska, including the surrounding communities and neighborhoods.",
      },
      {
        question: "What payment methods do you accept in Lahaska?",
        answer:
          "We accept all major credit cards, including Visa, Mastercard, American Express, and Discover. We also offer convenient auto-pay options.",
      },
      {
        question: "Do you offer wedding gown preservation in Lahaska?",
        answer:
          "Yes, we specialize in wedding gown preservation with our expert cleaning and preservation process to protect your cherished garment.",
      },
      {
        question: "What is your turnaround time for alterations in Lahaska?",
        answer:
          "Standard alterations typically take 3-5 business days. Rush service is available upon request for an additional fee.",
      },
    ],
  },
  morrisville: {
    name: "Morrisville",
    title: "Professional Dry Cleaning in Morrisville",
    subtitle:
      "Proudly serving Morrisville with trusted dry cleaning for decades.",
    seo: {
      title: "Dry Cleaning in Morrisville, PA | Signature Cleaners",
      description:
        "Trusted dry cleaning services in Morrisville. Free pickup & delivery, eco-friendly cleaning, and expert garment care.",
      keywords:
        "dry cleaning Morrisville, laundry service Morrisville, Signature Cleaners Morrisville",
      canonical: "https://www.mysignaturecleaners.com/morrisville",
    },
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12188.199050570667!2d-74.79232916809117!3d40.20795599358111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c157593255b2cb%3A0xe9481c0e42a5c7da!2sMorrisville%2C%20PA%2019067!5e0!3m2!1sen!2sus!4v1747842540417!5m2!1sen!2sus",
    about:
      "Morrisville, Pennsylvania is a historic borough nestled along the Delaware River in lower Bucks County. With roots dating back to the colonial era, Morrisville boasts charming older homes, riverside parks, and a proud, tight-knit community. Its rich heritage and convenient location near major urban centers make it a unique blend of small-town character and metropolitan access.",
    faq: [
      {
        question: "Do you offer same-day service in Morrisville",
        answer:
          "Yes, we offer same-day service for items dropped off before 9 AM, Monday through Friday. Some specialty items may require additional time.",
      },
      {
        question: "What areas of Morrisville do you service?",
        answer:
          "We provide pickup and delivery services throughout all of Morrisville, including the surrounding communities and neighborhoods.",
      },
      {
        question: "What payment methods do you accept in Morrisville?",
        answer:
          "We accept all major credit cards, including Visa, Mastercard, American Express, and Discover. We also offer convenient auto-pay options.",
      },
      {
        question: "Do you offer wedding gown preservation in Morrisville?",
        answer:
          "Yes, we specialize in wedding gown preservation with our expert cleaning and preservation process to protect your cherished garment.",
      },
      {
        question:
          "What is your turnaround time for alterations in Morrisville?",
        answer:
          "Standard alterations typically take 3-5 business days. Rush service is available upon request for an additional fee.",
      },
    ],
  },
  new_hope: {
    name: "New Hope",
    title: "Professional Dry Cleaning in New Hope",
    subtitle: "Proudly serving New Hope with trusted dry cleaning for decades.",
    seo: {
      title: "Dry Cleaning in New Hope, PA | Signature Cleaners",
      description:
        "Trusted dry cleaning services in New Hope. Free pickup & delivery, eco-friendly cleaning, and expert garment care.",
      keywords:
        "dry cleaning New Hope, laundry service New Hope, Signature Cleaners New Hope",
      canonical: "https://www.mysignaturecleaners.com/new_hope",
    },
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12160.52366147891!2d-74.96722626801014!3d40.36162144317431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3ff5a5c12480b%3A0x616b79bb638353bc!2sNew%20Hope%2C%20PA%2018938!5e0!3m2!1sen!2sus!4v1747848485200!5m2!1sen!2sus",
    about:
      "New Hope, Pennsylvania is a vibrant riverside town in Bucks County, renowned for its artistic spirit, eclectic shops, and scenic beauty. Steeped in history and culture, New Hope offers a lively blend of galleries, theaters, and fine dining, all set against the backdrop of the Delaware River. With its charming streets and creative energy, it’s a beloved destination for visitors and residents alike.",
    faq: [
      {
        question: "Do you offer same-day service in New Hope",
        answer:
          "Yes, we offer same-day service for items dropped off before 9 AM, Monday through Friday. Some specialty items may require additional time.",
      },
      {
        question: "What areas of New Hope do you service?",
        answer:
          "We provide pickup and delivery services throughout all of New Hope, including the surrounding communities and neighborhoods.",
      },
      {
        question: "What payment methods do you accept in New Hope?",
        answer:
          "We accept all major credit cards, including Visa, Mastercard, American Express, and Discover. We also offer convenient auto-pay options.",
      },
      {
        question: "Do you offer wedding gown preservation in New Hope?",
        answer:
          "Yes, we specialize in wedding gown preservation with our expert cleaning and preservation process to protect your cherished garment.",
      },
      {
        question: "What is your turnaround time for alterations in New Hope?",
        answer:
          "Standard alterations typically take 3-5 business days. Rush service is available upon request for an additional fee.",
      },
    ],
  },
  newtown: {
    name: "Newtown",
    title: "Professional Dry Cleaning in Newtown",
    subtitle: "Proudly serving Newtown with trusted dry cleaning for decades.",
    seo: {
      title: "Dry Cleaning in Newtown, PA | Signature Cleaners",
      description:
        "Trusted dry cleaning services in New Hope. Free pickup & delivery, eco-friendly cleaning, and expert garment care.",
      keywords:
        "dry cleaning Newtown, laundry service Newtown, Signature Cleaners Newtowne",
      canonical: "https://www.mysignaturecleaners.com/newtown",
    },
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6092.186496471653!2d-74.93711335017595!3d40.22922888588149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c1548d5c46ab4f%3A0xdaa3ef0948be0af6!2sNewtown%2C%20PA%2018940!5e0!3m2!1sen!2sus!4v1747849093453!5m2!1sen!2sus",
    about:
      "Newtown, Pennsylvania is a historic and thriving town in Bucks County, known for its colonial roots, charming streetscape, and vibrant downtown. Rich in culture and community spirit, Newtown features preserved architecture, boutique shopping, and a lively mix of dining and events. It beautifully balances its historic legacy with modern suburban living, making it one of the county’s most sought-after locales.",
    faq: [
      {
        question: "Do you offer same-day service in Newtown",
        answer:
          "Yes, we offer same-day service for items dropped off before 9 AM, Monday through Friday. Some specialty items may require additional time.",
      },
      {
        question: "What areas of Newtown do you service?",
        answer:
          "We provide pickup and delivery services throughout all of Newtown, including the surrounding communities and neighborhoods.",
      },
      {
        question: "What payment methods do you accept in Newtown?",
        answer:
          "We accept all major credit cards, including Visa, Mastercard, American Express, and Discover. We also offer convenient auto-pay options.",
      },
      {
        question: "Do you offer wedding gown preservation in Newtown?",
        answer:
          "Yes, we specialize in wedding gown preservation with our expert cleaning and preservation process to protect your cherished garment.",
      },
      {
        question: "What is your turnaround time for alterations in Newtown?",
        answer:
          "Standard alterations typically take 3-5 business days. Rush service is available upon request for an additional fee.",
      },
    ],
  },
  ottsville: {
    name: "Ottsville",
    title: "Professional Dry Cleaning in Ottsville",
    subtitle:
      "Proudly serving Ottsville with trusted dry cleaning for decades.",
    seo: {
      title: "Dry Cleaning in Ottsville, PA | Signature Cleaners",
      description:
        "Trusted dry cleaning services in Ottsville. Free pickup & delivery, eco-friendly cleaning, and expert garment care.",
      keywords:
        "dry cleaning Ottsville, laundry service Ottsville, Signature Cleaners Ottsville",
      canonical: "https://www.mysignaturecleaners.com/ottsville",
    },
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12140.380957227839!2d-75.16615655014398!3d40.47315798572203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c41aaea31fa3e3%3A0xb12400221793368f!2sOttsville%2C%20PA%2018942!5e0!3m2!1sen!2sus!4v1747851316140!5m2!1sen!2sus",
    about:
      "Ottsville, Pennsylvania is a peaceful village nestled in the rolling hills of upper Bucks County. Known for its scenic farmland, country roads, and rustic charm, Ottsville offers a tranquil retreat with a strong sense of rural heritage. Its blend of natural beauty and quiet living makes it a haven for those seeking simplicity and connection to the land.",
    faq: [
      {
        question: "Do you offer same-day service in Ottsville",
        answer:
          "Yes, we offer same-day service for items dropped off before 9 AM, Monday through Friday. Some specialty items may require additional time.",
      },
      {
        question: "What areas of Ottsville do you service?",
        answer:
          "We provide pickup and delivery services throughout all of Ottsville, including the surrounding communities and neighborhoods.",
      },
      {
        question: "What payment methods do you accept in Ottsville?",
        answer:
          "We accept all major credit cards, including Visa, Mastercard, American Express, and Discover. We also offer convenient auto-pay options.",
      },
      {
        question: "Do you offer wedding gown preservation in Ottsville?",
        answer:
          "Yes, we specialize in wedding gown preservation with our expert cleaning and preservation process to protect your cherished garment.",
      },
      {
        question: "What is your turnaround time for alterations in Ottsville?",
        answer:
          "Standard alterations typically take 3-5 business days. Rush service is available upon request for an additional fee.",
      },
    ],
  },
  perkasie: {
    name: "Perkasie",
    title: "Professional Dry Cleaning in Perkasie",
    subtitle: "Proudly serving Perkasie with trusted dry cleaning for decades.",
    seo: {
      title: "Dry Cleaning in Perkasie, PA | Signature Cleaners",
      description:
        "Trusted dry cleaning services in Ottsville. Free pickup & delivery, eco-friendly cleaning, and expert garment care.",
      keywords:
        "dry cleaning Perkasie, laundry service Perkasie, Signature Cleaners Perkasie",
      canonical: "https://www.mysignaturecleaners.com/perkasie",
    },
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24317.77057648941!2d-75.31380250673055!3d40.3707031725901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c41e5341101ed9%3A0xcaea757af06fa9b8!2sPerkasie%2C%20PA%2018944!5e0!3m2!1sen!2sus!4v1747851524145!5m2!1sen!2sus",
    about:
      "Perkasie, Pennsylvania is a vibrant small town in upper Bucks County, known for its historic downtown, tree-lined streets, and strong community spirit. With a blend of classic Americana and modern revitalization, Perkasie features local shops, parks, and year-round events that bring neighbors together. It’s a welcoming town that celebrates tradition while embracing growth and creativity.",
    faq: [
      {
        question: "Do you offer same-day service in Perkasie",
        answer:
          "Yes, we offer same-day service for items dropped off before 9 AM, Monday through Friday. Some specialty items may require additional time.",
      },
      {
        question: "What areas of Perkasie do you service?",
        answer:
          "We provide pickup and delivery services throughout all of Perkasie, including the surrounding communities and neighborhoods.",
      },
      {
        question: "What payment methods do you accept in Perkasie?",
        answer:
          "We accept all major credit cards, including Visa, Mastercard, American Express, and Discover. We also offer convenient auto-pay options.",
      },
      {
        question: "Do you offer wedding gown preservation in Perkasie?",
        answer:
          "Yes, we specialize in wedding gown preservation with our expert cleaning and preservation process to protect your cherished garment.",
      },
      {
        question: "What is your turnaround time for alterations in Perkasie?",
        answer:
          "Standard alterations typically take 3-5 business days. Rush service is available upon request for an additional fee.",
      },
    ],
  },
  pipersville: {
    name: "Pipersville",
    title: "Professional Dry Cleaning in Pipersville",
    subtitle:
      "Proudly serving Pipersville with trusted dry cleaning for decades.",
    seo: {
      title: "Dry Cleaning in Pipersville, PA | Signature Cleaners",
      description:
        "Trusted dry cleaning services in Ottsville. Free pickup & delivery, eco-friendly cleaning, and expert garment care.",
      keywords:
        "dry cleaning Pipersville, laundry service Pipersville, Signature Cleaners Pipersville",
      canonical: "https://www.mysignaturecleaners.com/pipersville",
    },
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12149.62153186154!2d-75.15003761797821!3d40.422021643017985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c404c4dd6cd6f7%3A0x35d3961a8e9f853d!2sPipersville%2C%20Bedminster%20Township%2C%20PA%2018947!5e0!3m2!1sen!2sus!4v1747852083195!5m2!1sen!2sus",
    about:
      "Pipersville, Pennsylvania is a picturesque hamlet tucked into the rolling hills and farmlands of central Bucks County. Steeped in pastoral beauty and rural tranquility, Pipersville is a haven for those seeking a slower pace and a deep connection to nature. Winding country roads lead to historic stone farmhouses, vibrant orchards, and hidden artists' studios, creating a landscape that feels timeless and inspiring. With its unspoiled charm, strong agricultural roots, and a quiet, enduring elegance, Pipersville captures the very essence of Bucks County’s countryside living.",
    faq: [
      {
        question: "Do you offer same-day service in Pipersville",
        answer:
          "Yes, we offer same-day service for items dropped off before 9 AM, Monday through Friday. Some specialty items may require additional time.",
      },
      {
        question: "What areas of Pipersville do you service?",
        answer:
          "We provide pickup and delivery services throughout all of Pipersville, including the surrounding communities and neighborhoods.",
      },
      {
        question: "What payment methods do you accept in Pipersville?",
        answer:
          "We accept all major credit cards, including Visa, Mastercard, American Express, and Discover. We also offer convenient auto-pay options.",
      },
      {
        question: "Do you offer wedding gown preservation in Pipersville",
        answer:
          "Yes, we specialize in wedding gown preservation with our expert cleaning and preservation process to protect your cherished garment.",
      },
      {
        question:
          "What is your turnaround time for alterations in Pipersville?",
        answer:
          "Standard alterations typically take 3-5 business days. Rush service is available upon request for an additional fee.",
      },
    ],
  },
  point_pleasant: {
    name: "Point Pleasant",
    title: "Professional Dry Cleaning in Point Pleasant",
    subtitle:
      "Proudly serving Point Pleasant with trusted dry cleaning for decades.",
    seo: {
      title: "Dry Cleaning in Point Pleasant, PA | Signature Cleaners",
      description:
        "Trusted dry cleaning services in Point Pleasant. Free pickup & delivery, eco-friendly cleaning, and expert garment care.",
      keywords:
        "dry cleaning Point Pleasant, laundry service Point Pleasant, Signature Cleaners Point Pleasant",
      canonical: "https://www.mysignaturecleaners.com/point_pleasant",
    },
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6074.758190690153!2d-75.0714316501507!3d40.42260383575414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c4042bf00fd517%3A0x119e2dcb7de0bb59!2sPoint%20Pleasant%2C%20PA%2018938!5e0!3m2!1sen!2sus!4v1747852345497!5m2!1sen!2sus",
    about:
      "Point Pleasant, Pennsylvania is a charming riverside village nestled along the Delaware River in Bucks County. Known for its scenic beauty, historic canal locks, and outdoor adventure opportunities, Point Pleasant offers a peaceful retreat steeped in natural wonder. With rustic cottages, winding roads, and a laid-back atmosphere, it’s a beloved destination for nature lovers, kayakers, and those drawn to the simple, serene rhythm of life by the water.",
    faq: [
      {
        question: "Do you offer same-day service in Point Pleasant",
        answer:
          "Yes, we offer same-day service for items dropped off before 9 AM, Monday through Friday. Some specialty items may require additional time.",
      },
      {
        question: "What areas of Point Pleasant do you service?",
        answer:
          "We provide pickup and delivery services throughout all of Point Pleasant, including the surrounding communities and neighborhoods.",
      },
      {
        question: "What payment methods do you accept in Point Pleasant?",
        answer:
          "We accept all major credit cards, including Visa, Mastercard, American Express, and Discover. We also offer convenient auto-pay options.",
      },
      {
        question: "Do you offer wedding gown preservation in Point Pleasant",
        answer:
          "Yes, we specialize in wedding gown preservation with our expert cleaning and preservation process to protect your cherished garment.",
      },
      {
        question:
          "What is your turnaround time for alterations in Point Pleasant?",
        answer:
          "Standard alterations typically take 3-5 business days. Rush service is available upon request for an additional fee.",
      },
    ],
  },
  richboro: {
    name: "Richboro",
    title: "Professional Dry Cleaning in Richboro",
    subtitle: "Proudly serving Richboro with trusted dry cleaning for decades.",
    seo: {
      title: "Dry Cleaning in Richboro, PA | Signature Cleaners",
      description:
        "Trusted dry cleaning services in Richboro. Free pickup & delivery, eco-friendly cleaning, and expert garment care.",
      keywords:
        "dry cleaning Richboro, laundry service Richboro, Signature Cleaners Richboro",
      canonical: "https://www.mysignaturecleaners.com/richboro",
    },
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24368.58487498216!2d-75.02394150702972!3d40.22967667407865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6ab65135af61f%3A0xa979f016a06a6976!2sRichboro%2C%20PA%2018954!5e0!3m2!1sen!2sus!4v1747852837279!5m2!1sen!2sus",
    about:
      "Richboro, Pennsylvania is a charming riverside village nestled along the Delaware River in Bucks County. Known for its scenic beauty, historic canal locks, and outdoor adventure opportunities, Richboro offers a peaceful retreat steeped in natural wonder. With rustic cottages, winding roads, and a laid-back atmosphere, it’s a beloved destination for nature lovers, kayakers, and those drawn to the simple, serene rhythm of life by the water.",
    faq: [
      {
        question: "Do you offer same-day service in Richboro",
        answer:
          "Yes, we offer same-day service for items dropped off before 9 AM, Monday through Friday. Some specialty items may require additional time.",
      },
      {
        question: "What areas of Richboro do you service?",
        answer:
          "We provide pickup and delivery services throughout all of Richboro, including the surrounding communities and neighborhoods.",
      },
      {
        question: "What payment methods do you accept in Richboro?",
        answer:
          "We accept all major credit cards, including Visa, Mastercard, American Express, and Discover. We also offer convenient auto-pay options.",
      },
      {
        question: "Do you offer wedding gown preservation in Richboro",
        answer:
          "Yes, we specialize in wedding gown preservation with our expert cleaning and preservation process to protect your cherished garment.",
      },
      {
        question: "What is your turnaround time for alterations in Richboro",
        answer:
          "Standard alterations typically take 3-5 business days. Rush service is available upon request for an additional fee.",
      },
    ],
  },
  southampton: {
    name: "Southampton",
    title: "Professional Dry Cleaning in Southampton",
    subtitle:
      "Proudly serving Southampton with trusted dry cleaning for decades.",
    seo: {
      title: "Dry Cleaning in Southampton, PA | Signature Cleaners",
      description:
        "Trusted dry cleaning services in Southampton. Free pickup & delivery, eco-friendly cleaning, and expert garment care.",
      keywords:
        "dry cleaning Southampton, laundry service Southampton, Signature Cleaners Southampton",
      canonical: "https://www.mysignaturecleaners.com/southampton",
    },
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24386.87935252876!2d-75.0617414071374!3d40.178802924626474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6adc5c7c3bead%3A0x8587f5639bdcab38!2sSouthampton%2C%20Upper%20Southampton%20Township%2C%20PA!5e0!3m2!1sen!2sus!4v1747853234188!5m2!1sen!2sus",
    about:
      "Southampton, Pennsylvania is a well-established suburban community in Bucks County, known for its family-friendly neighborhoods, excellent schools, and convenient location. With a blend of historic charm and modern amenities, Southampton offers quiet residential living alongside easy access to shopping, dining, and major commuter routes. Its strong sense of community and balanced lifestyle make it a welcoming place to call home.",
    faq: [
      {
        question: "Do you offer same-day service in Southampton",
        answer:
          "Yes, we offer same-day service for items dropped off before 9 AM, Monday through Friday. Some specialty items may require additional time.",
      },
      {
        question: "What areas of Southampton do you service?",
        answer:
          "We provide pickup and delivery services throughout all of Southampton, including the surrounding communities and neighborhoods.",
      },
      {
        question: "What payment methods do you accept in Southampton?",
        answer:
          "We accept all major credit cards, including Visa, Mastercard, American Express, and Discover. We also offer convenient auto-pay options.",
      },
      {
        question: "Do you offer wedding gown preservation in Southampton",
        answer:
          "Yes, we specialize in wedding gown preservation with our expert cleaning and preservation process to protect your cherished garment.",
      },
      {
        question: "What is your turnaround time for alterations in Southampton",
        answer:
          "Standard alterations typically take 3-5 business days. Rush service is available upon request for an additional fee.",
      },
    ],
  },
  trevose: {
    name: "Trevose",
    title: "Professional Dry Cleaning in Trevose",
    subtitle: "Proudly serving Trevose with trusted dry cleaning for decades.",
    seo: {
      title: "Dry Cleaning in Trevose, PA | Signature Cleaners",
      description:
        "Trusted dry cleaning services in Trevose. Free pickup & delivery, eco-friendly cleaning, and expert garment care.",
      keywords:
        "dry cleaning Trevose, laundry service Trevose, Signature Cleaners Trevose",
      canonical: "https://www.mysignaturecleaners.com/trevose",
    },
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12198.581833061713!2d-74.99248076812157!3d40.15018054373747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6b2a7bee68003%3A0x131e9fd8f3c0d09c!2sTrevose%2C%20PA%2019053!5e0!3m2!1sen!2sus!4v1747853600313!5m2!1sen!2sus",
    about:
      "Trevose, Pennsylvania is a diverse and accessible community located in the southern edge of Bucks County. Blending suburban comfort with commercial convenience, Trevose features a mix of cozy neighborhoods, local businesses, and easy access to major highways and public transit. Its central location and welcoming atmosphere make it a practical and connected place to live, work, and explore.",
    faq: [
      {
        question: "Do you offer same-day service in Trevose",
        answer:
          "Yes, we offer same-day service for items dropped off before 9 AM, Monday through Friday. Some specialty items may require additional time.",
      },
      {
        question: "What areas of Trevose do you service?",
        answer:
          "We provide pickup and delivery services throughout all of Trevose, including the surrounding communities and neighborhoods.",
      },
      {
        question: "What payment methods do you accept in Trevose?",
        answer:
          "We accept all major credit cards, including Visa, Mastercard, American Express, and Discover. We also offer convenient auto-pay options.",
      },
      {
        question: "Do you offer wedding gown preservation in Trevose",
        answer:
          "Yes, we specialize in wedding gown preservation with our expert cleaning and preservation process to protect your cherished garment.",
      },
      {
        question: "What is your turnaround time for alterations in Trevose",
        answer:
          "Standard alterations typically take 3-5 business days. Rush service is available upon request for an additional fee.",
      },
    ],
  },
  warminster: {
    name: "Warminster",
    title: "Professional Dry Cleaning in Warminster",
    subtitle:
      "Proudly serving Warminster with trusted dry cleaning for decades.",
    seo: {
      title: "Dry Cleaning in Warminster, PA | Signature Cleaners",
      description:
        "Trusted dry cleaning services in Warminster. Free pickup & delivery, eco-friendly cleaning, and expert garment care.",
      keywords:
        "dry cleaning Warminster, laundry service Warminster, Signature Cleaners Warminster",
      canonical: "https://www.mysignaturecleaners.com/warminster",
    },
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24377.669993828385!2d-75.1113915070832!3d40.20441922434993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6aeeea395da9f%3A0x10f12f4b29403d35!2sWarminster%20Township%2C%20PA%2018974!5e0!3m2!1sen!2sus!4v1747854167119!5m2!1sen!2sus",
    about:
      "Warminster, Pennsylvania is a dynamic suburban community in central Bucks County, known for its rich history, spacious parks, and strong civic spirit. With a blend of residential neighborhoods, thriving local businesses, and top-rated schools, Warminster offers a balanced lifestyle that’s both convenient and community-focused. Its blend of tradition and progress makes it a vibrant place to live, work, and grow.",
    faq: [
      {
        question: "Do you offer same-day service in Warminster",
        answer:
          "Yes, we offer same-day service for items dropped off before 9 AM, Monday through Friday. Some specialty items may require additional time.",
      },
      {
        question: "What areas of Warminster do you service?",
        answer:
          "We provide pickup and delivery services throughout all of Warminster, including the surrounding communities and neighborhoods.",
      },
      {
        question: "What payment methods do you accept in Warminster?",
        answer:
          "We accept all major credit cards, including Visa, Mastercard, American Express, and Discover. We also offer convenient auto-pay options.",
      },
      {
        question: "Do you offer wedding gown preservation in Warminster",
        answer:
          "Yes, we specialize in wedding gown preservation with our expert cleaning and preservation process to protect your cherished garment.",
      },
      {
        question: "What is your turnaround time for alterations in Warminster",
        answer:
          "Standard alterations typically take 3-5 business days. Rush service is available upon request for an additional fee.",
      },
    ],
  },
  warrington: {
    name: "Warrington",
    title: "Professional Dry Cleaning in Warrington",
    subtitle:
      "Proudly serving Warrington with trusted dry cleaning for decades.",
    seo: {
      title: "Dry Cleaning in Warrington, PA | Signature Cleaners",
      description:
        "Trusted dry cleaning services in Warrington. Free pickup & delivery, eco-friendly cleaning, and expert garment care.",
      keywords:
        "dry cleaning Warrington, laundry service Warrington, Signature Cleaners Warrington",
      canonical: "https://www.mysignaturecleaners.com/warrington",
    },
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6090.383161558516!2d-75.13921025017319!3d40.249273435868396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6a8b9037b6c11%3A0xa6cdf70deda33c43!2sWarrington%2C%20PA%2018976!5e0!3m2!1sen!2sus!4v1747854527452!5m2!1sen!2sus",
    about:
      "Warrington, Pennsylvania is a thriving township in central Bucks County, celebrated for its blend of suburban comfort, modern amenities, and scenic open spaces. With top-rated schools, bustling shopping centers, and a variety of parks and trails, Warrington offers a high quality of life for families and professionals alike. Its strong community spirit and convenient location make it a welcoming and vibrant place to call home.",
    faq: [
      {
        question: "Do you offer same-day service in Warrington",
        answer:
          "Yes, we offer same-day service for items dropped off before 9 AM, Monday through Friday. Some specialty items may require additional time.",
      },
      {
        question: "What areas of Warrington do you service?",
        answer:
          "We provide pickup and delivery services throughout all of Warrington, including the surrounding communities and neighborhoods.",
      },
      {
        question: "What payment methods do you accept in Warrington?",
        answer:
          "We accept all major credit cards, including Visa, Mastercard, American Express, and Discover. We also offer convenient auto-pay options.",
      },
      {
        question: "Do you offer wedding gown preservation in Warrington",
        answer:
          "Yes, we specialize in wedding gown preservation with our expert cleaning and preservation process to protect your cherished garment.",
      },
      {
        question: "What is your turnaround time for alterations in Warringtonr",
        answer:
          "Standard alterations typically take 3-5 business days. Rush service is available upon request for an additional fee.",
      },
    ],
  },
  washington_crossing: {
    name: "Washington Crossing",
    title: "Professional Dry Cleaning in Washington Crossing",
    subtitle:
      "Proudly serving Washington Crossing with trusted dry cleaning for decades.",
    seo: {
      title: "Dry Cleaning in Washington Crossing, PA | Signature Cleaners",
      description:
        "Trusted dry cleaning services in Washington Crossing. Free pickup & delivery, eco-friendly cleaning, and expert garment care.",
      keywords:
        "dry cleaning Washington Crossing, laundry service Washington Crossing, Signature Cleaners Washington Crossing",
      canonical: "https://www.mysignaturecleaners.com/washington_crossing",
    },
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24348.483129132357!2d-74.89741995691142!3d40.28551462348399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3fde3d94ae627%3A0x89c9db2e544db0d0!2sWashington%20Crossing%2C%20PA%2018977!5e0!3m2!1sen!2sus!4v1747854775940!5m2!1sen!2sus",
    about:
      "Washington Crossing, Pennsylvania is a historic gem nestled along the Delaware River in Bucks County, best known as the site of George Washington’s daring 1776 river crossing. Rich in Revolutionary War heritage and timeless beauty, the village features colonial-era buildings, preserved parklands, and scenic river views. With its blend of national significance and quiet charm, Washington Crossing offers a unique and inspiring setting where history and natural splendor come together.",
    faq: [
      {
        question: "Do you offer same-day service in Washington Crossing",
        answer:
          "Yes, we offer same-day service for items dropped off before 9 AM, Monday through Friday. Some specialty items may require additional time.",
      },
      {
        question: "What areas of Washington Crossing do you service?",
        answer:
          "We provide pickup and delivery services throughout all of Washington Crossing, including the surrounding communities and neighborhoods.",
      },
      {
        question: "What payment methods do you accept in Washington Crossing?",
        answer:
          "We accept all major credit cards, including Visa, Mastercard, American Express, and Discover. We also offer convenient auto-pay options.",
      },
      {
        question:
          "Do you offer wedding gown preservation in Washington Crossing",
        answer:
          "Yes, we specialize in wedding gown preservation with our expert cleaning and preservation process to protect your cherished garment.",
      },
      {
        question:
          "What is your turnaround time for alterations in Washington Crossing",
        answer:
          "Standard alterations typically take 3-5 business days. Rush service is available upon request for an additional fee.",
      },
    ],
  },
  yardley: {
    name: "Yardley",
    title: "Professional Dry Cleaning in Yardley",
    subtitle: "Proudly serving Yardley with trusted dry cleaning for decades.",
    seo: {
      title: "Dry Cleaning in Yardley, PA | Signature Cleaners",
      description:
        "Trusted dry cleaning services in Yardley. Free pickup & delivery, eco-friendly cleaning, and expert garment care.",
      keywords:
        "dry cleaning Yardley, laundry service Yardley, Signature Cleaners Yardley",
      canonical: "https://www.mysignaturecleaners.com/yardley",
    },
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12182.225197650589!2d-74.84816276807365!3d40.241166543492085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c156574695d7e1%3A0x71c54adcd665120!2sYardley%2C%20PA%2019067!5e0!3m2!1sen!2sus!4v1747858037394!5m2!1sen!2sus",
    about:
      "Yardley, Pennsylvania is a charming riverside town in lower Bucks County, known for its historic character, walkable downtown, and vibrant community life. Nestled along the Delaware River and the scenic Delaware Canal, Yardley offers a perfect blend of small-town warmth and natural beauty. With cozy cafes, local boutiques, and a calendar full of community events, Yardley captures the essence of relaxed, connected living with a timeless appeal.",
    faq: [
      {
        question: "Do you offer same-day service in Yardley",
        answer:
          "Yes, we offer same-day service for items dropped off before 9 AM, Monday through Friday. Some specialty items may require additional time.",
      },
      {
        question: "What areas of Yardley do you service?",
        answer:
          "We provide pickup and delivery services throughout all of Yardley, including the surrounding communities and neighborhoods.",
      },
      {
        question: "What payment methods do you accept in Yardley?",
        answer:
          "We accept all major credit cards, including Visa, Mastercard, American Express, and Discover. We also offer convenient auto-pay options.",
      },
      {
        question: "Do you offer wedding gown preservation in Yardley?",
        answer:
          "Yes, we specialize in wedding gown preservation with our expert cleaning and preservation process to protect your cherished garment.",
      },
      {
        question: "What is your turnaround time for alterations in Yardley?",
        answer:
          "Standard alterations typically take 3-5 business days. Rush service is available upon request for an additional fee.",
      },
    ],
  },
};
