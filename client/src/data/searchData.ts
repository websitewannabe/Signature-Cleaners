
export const SERVICES = [
  "Dry Cleaning",
  "Wash & Fold",
  "Alterations & Tailoring",
  "Wedding Gown Cleaning",
  "Shoe Repair",
  "Household Items Cleaning",
  "Pickup & Delivery"
];

export const CITIES = [
  "Doylestown",
  "New Hope",
  "Perkasie",
  "Warminster",
  "Newtown",
  "Yardley",
  "Richboro",
  "Jamison",
  "Warrington",
  "Buckingham",
  "Chalfont",
  "Dublin",
  "Fountainville",
  "Furlong",
  "Holland",
  "Ivyland",
  "Lahaska",
  "Morrisville",
  "Ottsville",
  "Pipersville",
  "Point Pleasant",
  "Southampton",
  "Trevose",
  "Washington Crossing",
  "Carversville"
];

export interface SearchResult {
  text: string;
  type: 'service' | 'city';
}
