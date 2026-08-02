import narrowMouth from "@/assets/NARROW-MOUTH-DRUMS.png";
import openMouth from "@/assets/FULL-OPEN-MOUTH-DRUMS.png";
import mouser from "@/assets/MOUSER.png";
import wideMouth from "@/assets/WIDE-MOUTH-DRUMS.png";
import rocket from "@/assets/ROCKET-DRUMS.png";
import jerryCan from "@/assets/JERRY-CAN.png";
import accessories from "@/assets/accessories.jpg";

export type Product = {
  slug: string;
  name: string;
  capacity: string;
  image: string;
  tagline: string;
  features: string[];
};

export const products: Product[] = [
  {
    slug: "narrow-mouth-drums",
    name: "Narrow Mouth Drums",
    capacity: "50L",
    image: narrowMouth,
    tagline: "World-standard design with zero leakage and excellent drop strength.",
    features: [
      "Stackable with & without pallets",
      "Excellent stacking and drop strength",
      "Odourless & non-toxic — food-grade",
      "Long life & reusable, good resale value",
      "Conforms to international standards",
    ],
  },
  {
    slug: "full-open-mouth-drums",
    name: "Full Open Mouth Drums",
    capacity: "20 – 80L",
    image: openMouth,
    tagline: "Snap-fit clamping ring, leak-proof and air-tight.",
    features: [
      "Simple snap-fit clamping ring",
      "Leak proof & air tight",
      "Excellent stacking and drop strength",
      "Suitable for packing food products",
      "Conforms to international standards",
    ],
  },
  {
    slug: "mouser-jerry-cans",
    name: "Mouser Jerry Cans",
    capacity: "20 - 35L",
    image: mouser,
    tagline: "Heavy-duty mouser cans built for chemicals, pharma and food.",
    features: [
      "Premium-grade HDPE raw material",
      "Integrated handle for easy lifting",
      "Auto-sealing leak-proof mouth",
      "Stackable design",
    ],
  },
  {
    slug: "wide-mouth-drums",
    name: "Wide Mouth Drums",
    capacity: "50 L · 6\" mouth",
    image: wideMouth,
    tagline: "Pilfer-proof sealing with a lightweight, stackable body.",
    features: [
      "Mouth openings 6\"",
      "Pilfer-proof sealing arrangement",
      "Light weight design",
      "Specially designed for stackability",
      "Non-toxic, food contact safe",
    ],
  },
  {
    slug: "rocket-drums",
    name: "Rocket Drums",
    capacity: "50 L",
    image: rocket,
    tagline: "UV-stabilised body with auto-sealing leak-proof mouth.",
    features: [
      "Special UV stabilizer for sun exposure",
      "Auto sealing system",
      "Leak-proof mouth",
      "Long performance life",
    ],
  },
  {
    slug: "jerry-cans",
    name: "Jerry Cans",
    capacity: "10L, 35 L",
    image: jerryCan,
    tagline: "Used across oil, chemical, pharma and adhesive industries.",
    features: [
      "Integrated handle for easy handling",
      "Auto-sealing leak-proof mouth",
      "Odourless & non-toxic",
      "Stackable with and without pallets",
    ],
  },
  {
    slug: "accessories",
    name: "Lids, Caps & Accessories",
    capacity: "Custom",
    image: accessories,
    tagline: "Locking rings, vent caps, pilfer-proof seals and custom-mould drums.",
    features: [
      "Strong & sturdy lids with leak-proof lining",
      "Drum lids with locking ring (plastic / metal / powder coated)",
      "Vent caps and narrow-mouth jerry can caps",
      "Pilfer-proof seals",
      "Custom-mould drums in brand colours",
    ],
  },
];
