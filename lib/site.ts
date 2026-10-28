/* ====== EDIT THIS: your WhatsApp number, country code first, digits only ====== */
export const WHATSAPP_NUMBER = "8801329529807";
/* ============================================================================ */

export const SITE = {
  name: "add2cart",
  // Set NEXT_PUBLIC_SITE_URL (for example https://yourdomain.com) once you have a domain
  url: process.env.NEXT_PUBLIC_SITE_URL || "",
  title: "add2cart | We build online stores that sell",
  description:
    "add2cart is a web studio in Dhaka. We design and build fast, custom online stores on Next.js and Shopify for brands in Bangladesh.",
  city: "Dhaka, Bangladesh",
};

export function waLink(text = "Hi add2cart, I want to build a website for my brand.") {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export const NAV = [
  { href: "/#work", label: "Work" },
  { href: "/#services", label: "Services" },
  { href: "/#stack", label: "Stack" },
  { href: "/#process", label: "Process" },
];
