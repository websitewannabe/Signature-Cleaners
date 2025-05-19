
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
    subtitle: "Proudly serving the Doylestown community with trusted dry cleaning for decades.",
    seo: {
      title: "Dry Cleaning in Doylestown, PA | Signature Cleaners",
      description: "Signature Cleaners offers eco-friendly, same-day dry cleaning services in Doylestown, PA with expert garment care.",
      keywords: "dry cleaning Doylestown, laundry service Doylestown, Signature Cleaners",
      canonical: "https://www.mysignaturecleaners.com/doylestown"
    },
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d194626.6239363241!2d-75.43258756718754!3d40.3414365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c402caed310f67%3A0x4739bde141ae22d1!2sSignature%20Cleaners%20at%20Doylestown!5e0!3m2!1sen!2sus!4v1747319798707!5m2!1sen!2sus",
    about: "Doylestown is a charming Bucks County town known for its cultural history and vibrant downtown. Our location has been serving the community with premium dry cleaning services, combining traditional craftsmanship with modern eco-friendly cleaning methods.",
    faq: [
      {
        question: "Do you offer same-day dry cleaning in Doylestown?",
        answer: "Yes! Drop off before 10 AM for same-day service at our Doylestown location."
      },
      {
        question: "Where is your Doylestown location?",
        answer: "We are located at 1456 Ferry Road #10, Doylestown, PA 18901."
      }
    ]
  },
  buckingham: {
    name: "Buckingham Township",
    title: "Professional Dry Cleaning in Buckingham Township",
    subtitle: "Proudly serving Buckingham Township with trusted dry cleaning for decades.",
    seo: {
      title: "Dry Cleaning in Buckingham Township, PA | Signature Cleaners",
      description: "Trusted dry cleaning services in Buckingham Township. Free pickup & delivery, eco-friendly cleaning, and expert garment care.",
      keywords: "dry cleaning Buckingham, laundry service Buckingham, Signature Cleaners Buckingham",
      canonical: "https://www.mysignaturecleaners.com/buckingham"
    },
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48656.66193150027!2d-75.07559866953123!3d40.32633199999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6a89f944b9c91%3A0x8cfb89ae094fe457!2sBuckingham%2C%20PA%2018912!5e0!3m2!1sen!2sus!4v1707674821037!5m2!1sen!2sus",
    about: "Buckingham Township is one of the oldest and most picturesque areas in Bucks County, Pennsylvania. Known for its rolling farmlands, historic homes, and tight-knit community, Buckingham blends rural charm with elegant country living.",
    faq: [
      {
        question: "Do you offer same-day service in Buckingham Township?",
        answer: "Yes, we offer same-day service for items dropped off before 9 AM, Monday through Friday. Some specialty items may require additional time."
      },
      {
        question: "What areas of Buckingham do you service?",
        answer: "We provide pickup and delivery services throughout all of Buckingham Township, including the surrounding communities and neighborhoods."
      }
    ]
  }
};
