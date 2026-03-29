export interface Testimonial {
  name: string | null;
  text: string;
  rating: number;
  service: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Maggie B.",
    text: "The staff is so helpful and even brought out my items to my car since my baby was sleeping. Can't thank them enough for their service. Highly recommend for any laundering you need.",
    rating: 5,
    service: "Wash & Fold",
  },
  {
    name: "Gabrielle A.",
    text: "I needed two dresses pressed on short notice and Signature Cleaners had the best reviews. Now I know why! They were accommodating, quick, and so welcoming and kind. Finding places like this is rare these days!",
    rating: 5,
    service: "Dry Cleaning",
  },
  {
    name: "Tom K.",
    text: "People are the best part of this business. Always friendly and more than helpful.",
    rating: 5,
    service: "Dry Cleaning",
  },
  {
    name: "Nancy R.",
    text: "Great pick up and delivery service and high quality dry cleaning and ladies blouse ironing. Excellent alteration services and superb customer service from Joan!",
    rating: 5,
    service: "Pickup & Delivery",
  },
  {
    name: "Cindy A.",
    text: "I received my robe the very next day, it was a happy unexpected. Thank you so much. Always do a great job!!",
    rating: 5,
    service: "Dry Cleaning",
  },
  {
    name: "Sarah M.",
    text: "They did amazing work cleaning my wedding gown and returned it in a week. The preservation box was beautiful. I couldn't be happier with how it turned out!",
    rating: 5,
    service: "Wedding Gown",
  },
  {
    name: "David L.",
    text: "The pick-up and drop-off service is so convenient. Deliveries are always easy and prompt. The driver even leaves treats for our dog!",
    rating: 5,
    service: "Pickup & Delivery",
  },
  {
    name: "Jennifer W.",
    text: "Articles were done exactly as requested and delivered earlier than expected. Super friendly staff. I won't go anywhere else for my dry cleaning.",
    rating: 5,
    service: "Dry Cleaning",
  },
  {
    name: "Michael P.",
    text: "Excellent service, top quality work, and reasonable pricing. When one item wasn't cleaned to my standard, they redid it free of charge with no questions asked. That's integrity.",
    rating: 5,
    service: "Dry Cleaning",
  },
  {
    name: "Lisa R.",
    text: "I've been using Signature Cleaners for over 10 years. Consistently great quality and the friendliest staff. They treat every garment like it's their own.",
    rating: 5,
    service: "Dry Cleaning",
  },
  {
    name: "Robert H.",
    text: "Best alterations in Bucks County. Joan is incredibly talented. She took in my suit jacket and the fit is now perfect. Fast turnaround too!",
    rating: 5,
    service: "Alterations",
  },
  {
    name: "Karen D.",
    text: "Had my comforter and drapes cleaned here. Everything came back fresh and looking brand new. Very reasonable prices for household items.",
    rating: 5,
    service: "Household Items",
  },
];

export const GOOGLE_REVIEW_URL =
  "https://www.google.com/maps/place/Signature+Cleaners+at+Doylestown/data=!4m2!3m1!1s0x0:0x4739bde141ae22d1?sa=X&ved=1t:2428&ictx=111";
