export type Shot = { src: string; label: string; url: string };

export type Project = {
  slug: string;
  name: string;
  domain: string;
  category: string;
  type: string;
  blurb: string;
  summary: string;
  glow: string; // hex, used for the soft light behind screenshots
  facts: { label: string; value: string }[];
  built: string[];
  brand: string;
  does: string[];
  audience: string;
  mobileNote: string;
  shots: Shot[];
  mobile: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "paarel",
    name: "PAARÉL",
    domain: "paarel.com",
    category: "Fashion",
    type: "Clothing store",
    blurb: "Panjabi, polos, tees and denim for men, women and kids.",
    summary: "An online clothing store with panjabi, polos, tees and denim for men, women and kids.",
    glow: "#E0884F",
    facts: [
      { label: "Category", value: "Clothing" },
      { label: "Shops", value: "Men, Women, Kids" },
      { label: "Sells", value: "Panjabi, polos, denim" },
    ],
    built: ["Shop by category", "Sale collections", "Size picker", "Size guide", "Guest order tracking", "Bulk orders", "Customer reviews"],
    brand:
      "PAARÉL sells clothing for men, women and kids. Think festive panjabi, polo shirts, drop shoulder tees, denim and cargo pants.",
    does: [
      "Shop by Men, Women or Kids, with photo tiles for each category.",
      "Sale collections like Festive Panjabi and Summer Polo, with clear discount badges.",
      "Product pages with a size picker, size guide, stock count and Buy now.",
      "Order tracking for guests, so no account is needed.",
      "A page for corporate and bulk orders.",
      "Real customer reviews on the homepage.",
    ],
    audience:
      "Young shoppers across Bangladesh who buy clothes on their phone and want the right size the first time.",
    mobileNote: "Big photos, a sticky size picker and Buy now always in reach. Made for thumbs.",
    shots: [
     { src: "/work/paarel-new.png", label: "Homepage", url: "paarel.com" },
      { src: "/work/paarel-collection.jpg", label: "Collection", url: "paarel.com/#festive-panjabi" },
      { src: "/work/paarel-category.jpg", label: "Category page", url: "paarel.com/products?parentCategory=men" },
      { src: "/work/paarel-product.jpg", label: "Product page", url: "paarel.com/products/item/..." },
    ],
    mobile: "/work/paarel-mobile.jpg",
  },
  {
    slug: "fiero",
    name: "FIERO",
    domain: "fiero.com.bd",
    category: "Services",
    type: "Bespoke tailoring",
    blurb: "Made-to-measure suits, with a master tailor who comes to you.",
    summary: "A website for a bespoke tailor, where clients book a fitting at home, at the studio or online.",
    glow: "#B9A48A",
    facts: [
      { label: "Category", value: "Bespoke tailoring" },
      { label: "Studio", value: "Gulshan 2, Dhaka" },
      { label: "Services", value: "Home, studio, virtual" },
    ],
    built: ["Book appointment", "Home service", "Studio visit", "Virtual fitting", "Price chart", "Reviews", "FAQ"],
    brand:
      "FIERO makes bespoke and made-to-measure suits and shirts with fine fabrics. A master tailor can visit your home or office, or you can visit the studio in Gulshan 2.",
    does: [
      "A clear Book Appointment path on every page.",
      "Three ways to get measured: home service, studio visit or a virtual appointment.",
      "A price chart, so clients know the cost before they book.",
      "Customer accounts to see bookings and orders.",
      "Google reviews, FAQ, blog and a WhatsApp button to build trust.",
    ],
    audience: "Busy professionals and grooms who want a suit that fits, without a trip to a tailor shop.",
    mobileNote: "A full-screen hero and one big Book Appointment button, so booking from a phone takes seconds.",
    shots: [
      { src: "/work/fiero-home.jpg", label: "Homepage", url: "fiero.com.bd" },
      { src: "/work/fiero-services.jpg", label: "Services", url: "fiero.com.bd/#services" },
      { src: "/work/fiero-booking.jpg", label: "Booking form", url: "fiero.com.bd/#appointment" },
    ],
    mobile: "/work/fiero-mobile.jpg",
  },
  {
    slug: "baah-store",
    name: "Baah Store",
    domain: "baahstore.com",
    category: "Lifestyle",
    type: "Handicraft and home",
    blurb: "Jute and upcycled goods, made by hand by rural women artisans.",
    summary: "An online store for jute and upcycled goods, made by hand by rural women artisans.",
    glow: "#C9A46A",
    facts: [
      { label: "Category", value: "Handicraft and home" },
      { label: "Sells", value: "Rugs, bags, table sets" },
      { label: "Since", value: "2020" },
    ],
    built: ["Big shop menu", "Partner offer pages", "Product pages", "Wishlist", "Order tracking", "Messenger chat", "Blog"],
    brand:
      "Baah sells jute rugs, bags, table sets and upcycled denim goods. Rural women artisans make each piece by hand, and women lead the brand.",
    does: [
      "A shop menu with 7 categories, from rugs and home decor to corporate and bulk orders.",
      "Offer pages for partners like BRAC Bank TARA, GP Star and Robi Elite.",
      "Clean product pages with price, size, stock, Buy now and share buttons.",
      "Wishlist, order tracking and Messenger chat.",
      "A blog with gift and home decor ideas.",
    ],
    audience:
      "Shoppers who want handmade, eco-friendly goods for their home, and companies that order gifts in bulk.",
    mobileNote: "The full shop menu folds into one tap, so every category is easy to reach on a small screen.",
    shots: [
      { src: "/work/baah-home.jpg", label: "Homepage", url: "baahstore.com" },
      { src: "/work/baah-categories.jpg", label: "Categories", url: "baahstore.com/#categories" },
      { src: "/work/baah-product.jpg", label: "Product page", url: "baahstore.com/bags-sleeves/..." },
      { src: "/work/baah-offers.jpg", label: "Offer page", url: "baahstore.com/promotion" },
    ],
    mobile: "/work/baah-mobile.jpg",
  },
];

export function getProject(slug: string) {
  return PROJECTS.find((p) => p.slug === slug);
}
