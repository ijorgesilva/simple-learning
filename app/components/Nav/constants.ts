import { CategoryItem } from "@/app/types/course-type";
import bigDataPng from "@/public/cat-big-data.png";
import cryptoPng from "@/public/cat-crypto.png";
import marketingPng from "@/public/cat-marketing.png";
import musicPng from "@/public/cat-music-production.png";
import photographyPng from "@/public/cat-photography.png";

export const CATEGORIES_ITEMS: CategoryItem = {
  big_data: {
    src: bigDataPng,
    alt: "Big Data Logo",
    category: "big_data",
    title: "Big Data",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  crypto: {
    src: cryptoPng,
    alt: "Crypto Logo",
    category: "crypto",
    title: "Crypto",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  marketing: {
    src: marketingPng,
    alt: "Marketing Logo",
    category: "marketing",
    title: "Marketing",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  music_production: {
    src: musicPng,
    alt: "Music Logo",
    category: "music_production",
    title: "Music Production",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  photography: {
    src: photographyPng,
    alt: "Photography Logo",
    category: "photography",
    title: "Photography",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
};

export const NAV_ITEMS = [
  CATEGORIES_ITEMS.big_data,
  CATEGORIES_ITEMS.crypto,
  CATEGORIES_ITEMS.marketing,
  CATEGORIES_ITEMS.music_production,
  CATEGORIES_ITEMS.photography,
];
