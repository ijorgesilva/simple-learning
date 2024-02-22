import bigDataPng from "@/public/cat-big-data.png";
import cryptoPng from "@/public/cat-crypto.png";
import marketingPng from "@/public/cat-marketing.png";
import musicPng from "@/public/cat-music-production.png";
import photographyPng from "@/public/cat-photography.png";

export const CATEGORIES_ITEMS = {
  bigData: {
    src: bigDataPng,
    alt: "Big Data Logo",
    category: "Big Data",
  },
  crypto: {
    src: cryptoPng,
    alt: "Crypto Logo",
    category: "Crypto",
  },
  marketing: {
    src: marketingPng,
    alt: "Marketing Logo",
    category: "Marketing",
  },
  music: {
    src: musicPng,
    alt: "Music Logo",
    category: "Music Production",
  },
  photography: {
    src: photographyPng,
    alt: "Photography Logo",
    category: "Photography",
  },
};

export const NAV_ITEMS = [
  CATEGORIES_ITEMS.bigData,
  CATEGORIES_ITEMS.crypto,
  CATEGORIES_ITEMS.marketing,
  CATEGORIES_ITEMS.music,
  CATEGORIES_ITEMS.photography,
];
