export interface CityData {
  name: string;
  title: string;
  subtitle: string;
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
  about: string;
  faq: Array<{ question: string; answer: string }>;
}

const standardFaq = (cityName: string): CityData["faq"] => [
  {
    question: `Do you offer same-day dry cleaning for ${cityName} customers?`,
    answer: `Yes! Drop off your garments at our Doylestown location before 10 AM and pick them up the same day. For pickup and delivery customers in ${cityName}, standard turnaround is 2-3 business days.`,
  },
  {
    question: `Does Signature Cleaners offer pickup and delivery in ${cityName}?`,
    answer: `Absolutely. We provide free pickup and delivery service throughout ${cityName} and the surrounding Bucks County area. Simply schedule a pickup online or call us at (215) 345-1470.`,
  },
  {
    question: `What dry cleaning specialties do you offer for ${cityName} residents?`,
    answer: `We offer a full range of services including professional dry cleaning, wash & fold, alterations and tailoring, wedding gown preservation, shoe repair, and household item cleaning such as comforters and drapes.`,
  },
  {
    question: `What is the typical turnaround time for dry cleaning from ${cityName}?`,
    answer: `Our standard turnaround is 2-3 business days for pickup and delivery orders. In-store drop-off at our Doylestown location offers same-day service when items are received before 10 AM.`,
  },
  {
    question: `What payment methods does Signature Cleaners accept?`,
    answer: `We accept all major credit cards including Visa, Mastercard, American Express, and Discover. Payment is charged automatically for pickup and delivery customers.`,
  },
];

export const cityData: Record<string, CityData> = {
  doylestown: {
    name: "Doylestown",
    title: "Professional Dry Cleaning in Doylestown",
    subtitle:
      "Proudly serving Doylestown with trusted dry cleaning, tailoring, and garment care.",
    seo: {
      title: "Dry Cleaning in Doylestown, PA at Signature Cleaners",
      description:
        "Signature Cleaners is Doylestown's trusted dry cleaner at 1456 Ferry Rd #10. Expert dry cleaning, wash & fold, tailoring, and free pickup & delivery.",
      keywords: [
        "dry cleaning Doylestown PA",
        "Doylestown dry cleaners",
        "laundry service Doylestown",
        "garment care Doylestown",
      ],
    },
    about:
      "Doylestown is the county seat of Bucks County and the home base of Signature Cleaners. Our store at 1456 Ferry Rd #10 has served the Doylestown community for over 20 years with expert dry cleaning, tailoring, and garment care. Whether you visit us in-store or use our free pickup and delivery service, we treat every garment with the care it deserves.",
    faq: standardFaq("Doylestown"),
  },
  buckingham: {
    name: "Buckingham Township",
    title: "Professional Dry Cleaning in Buckingham Township",
    subtitle:
      "Proudly serving Buckingham Township with trusted dry cleaning, tailoring, and garment care.",
    seo: {
      title: "Dry Cleaning in Buckingham Township, PA at Signature Cleaners",
      description:
        "Professional dry cleaning services for Buckingham Township, PA. Signature Cleaners offers expert garment care with free pickup and delivery.",
      keywords: [
        "dry cleaning Buckingham PA",
        "Buckingham Township dry cleaners",
        "laundry service Buckingham",
        "garment care Bucks County",
      ],
    },
    about:
      "Buckingham Township is one of the oldest and most historic areas in Bucks County, known for its beautiful countryside and thriving community. Signature Cleaners is proud to serve Buckingham residents with professional dry cleaning, tailoring, and garment care. Our free pickup and delivery service makes it easy for Buckingham families to enjoy top-quality garment care without leaving home.",
    faq: standardFaq("Buckingham Township"),
  },
  carversville: {
    name: "Carversville",
    title: "Professional Dry Cleaning in Carversville",
    subtitle:
      "Proudly serving Carversville with trusted dry cleaning, tailoring, and garment care.",
    seo: {
      title: "Dry Cleaning in Carversville, PA at Signature Cleaners",
      description:
        "Expert dry cleaning services for Carversville, PA. Signature Cleaners provides professional garment care with free pickup and delivery.",
      keywords: [
        "dry cleaning Carversville PA",
        "Carversville dry cleaners",
        "laundry service Carversville",
        "Bucks County garment care",
      ],
    },
    about:
      "Carversville is a picturesque village nestled in the rolling hills of Bucks County, known for its charming rural character and tight-knit community. Signature Cleaners serves Carversville residents with the same expert garment care we have provided to Bucks County for over two decades. Our free pickup and delivery service brings professional dry cleaning right to your Carversville doorstep.",
    faq: standardFaq("Carversville"),
  },
  chalfont: {
    name: "Chalfont",
    title: "Professional Dry Cleaning in Chalfont",
    subtitle:
      "Proudly serving Chalfont with trusted dry cleaning, tailoring, and garment care.",
    seo: {
      title: "Dry Cleaning in Chalfont, PA at Signature Cleaners",
      description:
        "Top-rated dry cleaning for Chalfont, PA. Signature Cleaners offers expert garment care, tailoring, and free pickup & delivery in Bucks County.",
      keywords: [
        "dry cleaning Chalfont PA",
        "Chalfont dry cleaners",
        "laundry service Chalfont",
        "garment care Chalfont",
      ],
    },
    about:
      "Chalfont is a charming borough in Bucks County that blends small-town warmth with convenient access to the greater Philadelphia area. Signature Cleaners is proud to serve Chalfont residents with professional dry cleaning, alterations, and garment care. Our free pickup and delivery service makes quality dry cleaning effortless for busy Chalfont families.",
    faq: standardFaq("Chalfont"),
  },
  dublin: {
    name: "Dublin",
    title: "Professional Dry Cleaning in Dublin",
    subtitle:
      "Proudly serving Dublin with trusted dry cleaning, tailoring, and garment care.",
    seo: {
      title: "Dry Cleaning in Dublin, PA at Signature Cleaners",
      description:
        "Professional dry cleaning services for Dublin, PA. Signature Cleaners offers expert garment care and free pickup & delivery in Bucks County.",
      keywords: [
        "dry cleaning Dublin PA",
        "Dublin dry cleaners",
        "laundry service Dublin",
        "Bucks County dry cleaning",
      ],
    },
    about:
      "Dublin is a small, welcoming community in Bucks County known for its friendly atmosphere and convenient location. Signature Cleaners is happy to serve Dublin residents with expert dry cleaning, wash and fold, tailoring, and more. Take advantage of our free pickup and delivery service to enjoy professional garment care without the commute.",
    faq: standardFaq("Dublin"),
  },
  fountainville: {
    name: "Fountainville",
    title: "Professional Dry Cleaning in Fountainville",
    subtitle:
      "Proudly serving Fountainville with trusted dry cleaning, tailoring, and garment care.",
    seo: {
      title: "Dry Cleaning in Fountainville, PA at Signature Cleaners",
      description:
        "Expert dry cleaning for Fountainville, PA. Signature Cleaners provides professional garment care with free pickup and delivery near Doylestown.",
      keywords: [
        "dry cleaning Fountainville PA",
        "Fountainville dry cleaners",
        "laundry service Fountainville",
        "garment care near Doylestown",
      ],
    },
    about:
      "Fountainville is a quiet community located just minutes from Doylestown in the heart of Bucks County. As a neighbor to our home base, Signature Cleaners is proud to offer Fountainville residents fast, convenient dry cleaning and garment care services. Our free pickup and delivery makes it easy to keep your wardrobe looking its best.",
    faq: standardFaq("Fountainville"),
  },
  furlong: {
    name: "Furlong",
    title: "Professional Dry Cleaning in Furlong",
    subtitle:
      "Proudly serving Furlong with trusted dry cleaning, tailoring, and garment care.",
    seo: {
      title: "Dry Cleaning in Furlong, PA at Signature Cleaners",
      description:
        "Professional dry cleaning for Furlong, PA. Signature Cleaners offers expert garment care, tailoring, and free pickup & delivery in Bucks County.",
      keywords: [
        "dry cleaning Furlong PA",
        "Furlong dry cleaners",
        "laundry service Furlong",
        "Bucks County garment care",
      ],
    },
    about:
      "Furlong is a small unincorporated community in Bucks County, situated conveniently between Doylestown and Newtown. Signature Cleaners serves Furlong residents with the same professional dry cleaning and garment care that has made us Bucks County's trusted cleaner for over 20 years. Our free pickup and delivery covers the entire Furlong area.",
    faq: standardFaq("Furlong"),
  },
  holland: {
    name: "Holland",
    title: "Professional Dry Cleaning in Holland",
    subtitle:
      "Proudly serving Holland with trusted dry cleaning, tailoring, and garment care.",
    seo: {
      title: "Dry Cleaning in Holland, PA at Signature Cleaners",
      description:
        "Top-rated dry cleaning services for Holland, PA. Signature Cleaners provides expert garment care with free pickup and delivery in Bucks County.",
      keywords: [
        "dry cleaning Holland PA",
        "Holland dry cleaners",
        "laundry service Holland PA",
        "Northampton Township dry cleaning",
      ],
    },
    about:
      "Holland is a vibrant community within Northampton Township in Bucks County, known for its family-friendly neighborhoods and local charm. Signature Cleaners proudly serves Holland residents with expert dry cleaning, alterations, and garment care. Enjoy the convenience of our free pickup and delivery service right to your Holland home or office.",
    faq: standardFaq("Holland"),
  },
  ivyland: {
    name: "Ivyland",
    title: "Professional Dry Cleaning in Ivyland",
    subtitle:
      "Proudly serving Ivyland with trusted dry cleaning, tailoring, and garment care.",
    seo: {
      title: "Dry Cleaning in Ivyland, PA at Signature Cleaners",
      description:
        "Expert dry cleaning services for Ivyland, PA. Signature Cleaners offers professional garment care and free pickup & delivery in Bucks County.",
      keywords: [
        "dry cleaning Ivyland PA",
        "Ivyland dry cleaners",
        "laundry service Ivyland",
        "garment care Ivyland",
      ],
    },
    about:
      "Ivyland is a small, historic borough in Bucks County with a welcoming community atmosphere. Signature Cleaners is proud to serve Ivyland residents with professional dry cleaning, tailoring, shoe repair, and more. Our free pickup and delivery service brings expert garment care directly to the Ivyland community.",
    faq: standardFaq("Ivyland"),
  },
  jamison: {
    name: "Jamison",
    title: "Professional Dry Cleaning in Jamison",
    subtitle:
      "Proudly serving Jamison with trusted dry cleaning, tailoring, and garment care.",
    seo: {
      title: "Dry Cleaning in Jamison, PA at Signature Cleaners",
      description:
        "Professional dry cleaning for Jamison, PA. Signature Cleaners provides expert garment care, tailoring, and free pickup & delivery in Warwick Township.",
      keywords: [
        "dry cleaning Jamison PA",
        "Jamison dry cleaners",
        "laundry service Jamison",
        "Warwick Township dry cleaning",
      ],
    },
    about:
      "Jamison is a thriving community in Warwick Township, Bucks County, known for its excellent schools and suburban comfort. Signature Cleaners serves Jamison families with professional dry cleaning, wash and fold, wedding gown preservation, and more. Our free pickup and delivery makes garment care effortless for busy Jamison residents.",
    faq: standardFaq("Jamison"),
  },
  lahaska: {
    name: "Lahaska",
    title: "Professional Dry Cleaning in Lahaska",
    subtitle:
      "Proudly serving Lahaska with trusted dry cleaning, tailoring, and garment care.",
    seo: {
      title: "Dry Cleaning in Lahaska, PA at Signature Cleaners",
      description:
        "Expert dry cleaning services for Lahaska, PA. Signature Cleaners offers professional garment care with free pickup and delivery near Peddler's Village.",
      keywords: [
        "dry cleaning Lahaska PA",
        "Lahaska dry cleaners",
        "laundry service Lahaska",
        "Peddler's Village dry cleaning",
      ],
    },
    about:
      "Lahaska is best known as the home of Peddler's Village, one of Bucks County's most beloved destinations. Signature Cleaners is proud to serve Lahaska residents and local businesses with expert dry cleaning and garment care. Whether you need everyday cleaning or specialty services, our free pickup and delivery makes it convenient.",
    faq: standardFaq("Lahaska"),
  },
  morrisville: {
    name: "Morrisville",
    title: "Professional Dry Cleaning in Morrisville",
    subtitle:
      "Proudly serving Morrisville with trusted dry cleaning, tailoring, and garment care.",
    seo: {
      title: "Dry Cleaning in Morrisville, PA at Signature Cleaners",
      description:
        "Professional dry cleaning for Morrisville, PA. Signature Cleaners provides expert garment care, alterations, and free pickup & delivery in Bucks County.",
      keywords: [
        "dry cleaning Morrisville PA",
        "Morrisville dry cleaners",
        "laundry service Morrisville",
        "garment care Morrisville",
      ],
    },
    about:
      "Morrisville is a historic borough in Bucks County located along the Delaware River near Trenton, NJ. With a rich history and diverse community, Morrisville residents deserve top-quality garment care. Signature Cleaners offers professional dry cleaning, tailoring, and household item cleaning with free pickup and delivery to the Morrisville area.",
    faq: standardFaq("Morrisville"),
  },
  new_hope: {
    name: "New Hope",
    title: "Professional Dry Cleaning in New Hope",
    subtitle:
      "Proudly serving New Hope with trusted dry cleaning, tailoring, and garment care.",
    seo: {
      title: "Dry Cleaning in New Hope, PA at Signature Cleaners",
      description:
        "Top-rated dry cleaning for New Hope, PA. Signature Cleaners offers expert garment care, tailoring, and free pickup & delivery in Bucks County.",
      keywords: [
        "dry cleaning New Hope PA",
        "New Hope dry cleaners",
        "laundry service New Hope",
        "garment care New Hope",
      ],
    },
    about:
      "New Hope is an artsy, vibrant riverside town along the Delaware River, known for its galleries, restaurants, and creative community. Signature Cleaners proudly serves New Hope residents and businesses with professional dry cleaning, alterations, and specialty garment care. Our free pickup and delivery brings expert cleaning right to your New Hope door.",
    faq: standardFaq("New Hope"),
  },
  newtown: {
    name: "Newtown",
    title: "Professional Dry Cleaning in Newtown",
    subtitle:
      "Proudly serving Newtown with trusted dry cleaning, tailoring, and garment care.",
    seo: {
      title: "Dry Cleaning in Newtown, PA at Signature Cleaners",
      description:
        "Expert dry cleaning services for Newtown, PA. Signature Cleaners provides professional garment care with free pickup & delivery in Bucks County.",
      keywords: [
        "dry cleaning Newtown PA",
        "Newtown dry cleaners",
        "laundry service Newtown",
        "Newtown Bucks County dry cleaning",
      ],
    },
    about:
      "Newtown is one of the oldest and most charming communities in Bucks County, with a historic downtown and vibrant local culture. Signature Cleaners is proud to serve Newtown residents with professional dry cleaning, wedding gown preservation, alterations, and more. Enjoy the convenience of our free pickup and delivery throughout the Newtown area.",
    faq: standardFaq("Newtown"),
  },
  ottsville: {
    name: "Ottsville",
    title: "Professional Dry Cleaning in Ottsville",
    subtitle:
      "Proudly serving Ottsville with trusted dry cleaning, tailoring, and garment care.",
    seo: {
      title: "Dry Cleaning in Ottsville, PA at Signature Cleaners",
      description:
        "Professional dry cleaning for Ottsville, PA. Signature Cleaners offers expert garment care and free pickup & delivery in upper Bucks County.",
      keywords: [
        "dry cleaning Ottsville PA",
        "Ottsville dry cleaners",
        "laundry service Ottsville",
        "upper Bucks County dry cleaning",
      ],
    },
    about:
      "Ottsville is a peaceful, rural community in upper Bucks County surrounded by scenic farmland and natural beauty. Signature Cleaners extends our expert dry cleaning and garment care services to Ottsville through our convenient free pickup and delivery. Enjoy professional cleaning without the long drive into town.",
    faq: standardFaq("Ottsville"),
  },
  perkasie: {
    name: "Perkasie",
    title: "Professional Dry Cleaning in Perkasie",
    subtitle:
      "Proudly serving Perkasie with trusted dry cleaning, tailoring, and garment care.",
    seo: {
      title: "Dry Cleaning in Perkasie, PA at Signature Cleaners",
      description:
        "Top-rated dry cleaning for Perkasie, PA. Signature Cleaners provides expert garment care, alterations, and free pickup & delivery in Bucks County.",
      keywords: [
        "dry cleaning Perkasie PA",
        "Perkasie dry cleaners",
        "laundry service Perkasie",
        "garment care Perkasie",
      ],
    },
    about:
      "Perkasie is a charming borough in upper Bucks County known for its community events, historic covered bridge, and welcoming atmosphere. Signature Cleaners proudly serves Perkasie residents with professional dry cleaning, tailoring, and specialty garment care. Our free pickup and delivery service covers the entire Perkasie area.",
    faq: standardFaq("Perkasie"),
  },
  pipersville: {
    name: "Pipersville",
    title: "Professional Dry Cleaning in Pipersville",
    subtitle:
      "Proudly serving Pipersville with trusted dry cleaning, tailoring, and garment care.",
    seo: {
      title: "Dry Cleaning in Pipersville, PA at Signature Cleaners",
      description:
        "Expert dry cleaning services for Pipersville, PA. Signature Cleaners offers professional garment care and free pickup & delivery in Bucks County.",
      keywords: [
        "dry cleaning Pipersville PA",
        "Pipersville dry cleaners",
        "laundry service Pipersville",
        "Bedminster Township dry cleaning",
      ],
    },
    about:
      "Pipersville is a small, scenic village in Bedminster Township, Bucks County, valued for its rural character and close-knit community. Signature Cleaners serves Pipersville residents with the same high-quality dry cleaning and garment care trusted by customers across Bucks County. Our free pickup and delivery makes professional cleaning accessible even in the countryside.",
    faq: standardFaq("Pipersville"),
  },
  point_pleasant: {
    name: "Point Pleasant",
    title: "Professional Dry Cleaning in Point Pleasant",
    subtitle:
      "Proudly serving Point Pleasant with trusted dry cleaning, tailoring, and garment care.",
    seo: {
      title: "Dry Cleaning in Point Pleasant, PA at Signature Cleaners",
      description:
        "Professional dry cleaning for Point Pleasant, PA. Signature Cleaners provides expert garment care with free pickup & delivery along the Delaware.",
      keywords: [
        "dry cleaning Point Pleasant PA",
        "Point Pleasant dry cleaners",
        "laundry service Point Pleasant",
        "Delaware River dry cleaning",
      ],
    },
    about:
      "Point Pleasant is a scenic community along the Delaware River in Bucks County, known for its natural beauty and outdoor recreation. Signature Cleaners proudly extends our professional dry cleaning and garment care services to Point Pleasant residents. Our free pickup and delivery service means you never have to leave this beautiful area for expert cleaning.",
    faq: standardFaq("Point Pleasant"),
  },
  richboro: {
    name: "Richboro",
    title: "Professional Dry Cleaning in Richboro",
    subtitle:
      "Proudly serving Richboro with trusted dry cleaning, tailoring, and garment care.",
    seo: {
      title: "Dry Cleaning in Richboro, PA at Signature Cleaners",
      description:
        "Top-rated dry cleaning for Richboro, PA. Signature Cleaners offers expert garment care, tailoring, and free pickup & delivery in Northampton Township.",
      keywords: [
        "dry cleaning Richboro PA",
        "Richboro dry cleaners",
        "laundry service Richboro",
        "Northampton Township dry cleaning",
      ],
    },
    about:
      "Richboro is a well-established community in Northampton Township, Bucks County, known for its excellent neighborhoods and convenient location. Signature Cleaners proudly serves Richboro residents with professional dry cleaning, alterations, wash and fold, and more. Enjoy free pickup and delivery right to your Richboro home or office.",
    faq: standardFaq("Richboro"),
  },
  southampton: {
    name: "Southampton",
    title: "Professional Dry Cleaning in Southampton",
    subtitle:
      "Proudly serving Southampton with trusted dry cleaning, tailoring, and garment care.",
    seo: {
      title: "Dry Cleaning in Southampton, PA at Signature Cleaners",
      description:
        "Expert dry cleaning for Southampton, PA. Signature Cleaners provides professional garment care and free pickup & delivery in Upper Southampton Township.",
      keywords: [
        "dry cleaning Southampton PA",
        "Southampton dry cleaners",
        "laundry service Southampton",
        "Upper Southampton dry cleaning",
      ],
    },
    about:
      "Southampton is a thriving community in Upper Southampton Township in lower Bucks County, offering suburban convenience and a strong sense of community. Signature Cleaners is proud to serve Southampton residents with expert dry cleaning, tailoring, and garment care. Our free pickup and delivery makes professional cleaning effortless.",
    faq: standardFaq("Southampton"),
  },
  trevose: {
    name: "Trevose",
    title: "Professional Dry Cleaning in Trevose",
    subtitle:
      "Proudly serving Trevose with trusted dry cleaning, tailoring, and garment care.",
    seo: {
      title: "Dry Cleaning in Trevose, PA at Signature Cleaners",
      description:
        "Professional dry cleaning for Trevose, PA. Signature Cleaners offers expert garment care, alterations, and free pickup & delivery in lower Bucks County.",
      keywords: [
        "dry cleaning Trevose PA",
        "Trevose dry cleaners",
        "laundry service Trevose",
        "lower Bucks County dry cleaning",
      ],
    },
    about:
      "Trevose is a bustling community in lower Bucks County with easy access to Philadelphia and surrounding areas. Signature Cleaners extends our trusted dry cleaning and garment care services to Trevose residents through our free pickup and delivery program. Experience the quality that has made us Bucks County's preferred cleaner for over 20 years.",
    faq: standardFaq("Trevose"),
  },
  warminster: {
    name: "Warminster",
    title: "Professional Dry Cleaning in Warminster",
    subtitle:
      "Proudly serving Warminster with trusted dry cleaning, tailoring, and garment care.",
    seo: {
      title: "Dry Cleaning in Warminster, PA at Signature Cleaners",
      description:
        "Top-rated dry cleaning for Warminster, PA. Signature Cleaners provides expert garment care with free pickup & delivery throughout Warminster Township.",
      keywords: [
        "dry cleaning Warminster PA",
        "Warminster dry cleaners",
        "laundry service Warminster",
        "Warminster Township dry cleaning",
      ],
    },
    about:
      "Warminster is a large township in lower Bucks County with a diverse community and rich history. Signature Cleaners proudly serves Warminster residents with professional dry cleaning, tailoring, wedding gown preservation, and household item cleaning. Our free pickup and delivery service covers the entire Warminster Township area.",
    faq: standardFaq("Warminster"),
  },
  warrington: {
    name: "Warrington",
    title: "Professional Dry Cleaning in Warrington",
    subtitle:
      "Proudly serving Warrington with trusted dry cleaning, tailoring, and garment care.",
    seo: {
      title: "Dry Cleaning in Warrington, PA at Signature Cleaners",
      description:
        "Expert dry cleaning for Warrington, PA. Signature Cleaners offers professional garment care, tailoring, and free pickup & delivery in central Bucks County.",
      keywords: [
        "dry cleaning Warrington PA",
        "Warrington dry cleaners",
        "laundry service Warrington",
        "central Bucks County dry cleaning",
      ],
    },
    about:
      "Warrington is a growing township in central Bucks County, popular for its excellent schools, shopping, and family-friendly neighborhoods. Signature Cleaners serves Warrington residents with expert dry cleaning, wash and fold, alterations, and more. Our free pickup and delivery service brings professional garment care directly to your Warrington home.",
    faq: standardFaq("Warrington"),
  },
  washington_crossing: {
    name: "Washington Crossing",
    title: "Professional Dry Cleaning in Washington Crossing",
    subtitle:
      "Proudly serving Washington Crossing with trusted dry cleaning, tailoring, and garment care.",
    seo: {
      title: "Dry Cleaning in Washington Crossing, PA at Signature Cleaners",
      description:
        "Professional dry cleaning for Washington Crossing, PA. Signature Cleaners offers expert garment care and free pickup & delivery in Bucks County.",
      keywords: [
        "dry cleaning Washington Crossing PA",
        "Washington Crossing dry cleaners",
        "laundry service Washington Crossing",
        "historic Bucks County dry cleaning",
      ],
    },
    about:
      "Washington Crossing is a historic area in Bucks County, famous as the site where George Washington crossed the Delaware River. This community values tradition and quality, which is why Signature Cleaners is proud to serve Washington Crossing residents with expert dry cleaning, tailoring, and garment care. Our free pickup and delivery covers the entire area.",
    faq: standardFaq("Washington Crossing"),
  },
  yardley: {
    name: "Yardley",
    title: "Professional Dry Cleaning in Yardley",
    subtitle:
      "Proudly serving Yardley with trusted dry cleaning, tailoring, and garment care.",
    seo: {
      title: "Dry Cleaning in Yardley, PA at Signature Cleaners",
      description:
        "Top-rated dry cleaning for Yardley, PA. Signature Cleaners provides expert garment care, alterations, and free pickup & delivery along the Delaware River.",
      keywords: [
        "dry cleaning Yardley PA",
        "Yardley dry cleaners",
        "laundry service Yardley",
        "garment care Yardley",
      ],
    },
    about:
      "Yardley is a charming borough along the Delaware River in Bucks County, known for its historic Main Street and vibrant community. Signature Cleaners is proud to serve Yardley residents with professional dry cleaning, tailoring, wedding gown preservation, and more. Our free pickup and delivery makes expert garment care convenient for the entire Yardley area.",
    faq: standardFaq("Yardley"),
  },
};
