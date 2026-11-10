import {
  BezoBanner,
  KatBanner,
  LukiBanner,
  StefBanner,
  TimcBanner,
} from "@/assets";

export const members = [
  {
    name: "Jernej Bezjak",
    role: "Kitara, Vokal",
    image: BezoBanner,
    alt: "Jernej Bezjak, kitara in vokal",
  },
  {
    name: "Katarina Bezjak",
    role: "Sax, Vokal",
    image: KatBanner,
    alt: "Katarina Bezjak, saksofon in vokal",
  },
  {
    name: "Luka Gašparič",
    role: "Kitara",
    image: LukiBanner,
    alt: "Luka Gašparič, kitara",
  },
  {
    name: "Štefan Jakob Štrucl",
    role: "Bobni",
    image: StefBanner,
    alt: "Štefan Jakob Štrucl, bobni",
  },
  {
    name: "Timotej Bezjak",
    role: "Bas, Tehnika",
    image: TimcBanner,
    alt: "Timotej Bezjak, bas in tehnika",
  },
] as const;
