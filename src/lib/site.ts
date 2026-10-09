export const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/_jacknroll_/",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/Jacknroll4",
  },
] as const;

export const contactDetails = {
  phone: "068678248",
  phoneDisplay: "068 678 248",
  email: "jackroll2019@gmail.com",
} as const;

export const sectionIds = ["band", "members", "about-us", "contact"] as const;

export const navItems = [
  { id: "band", label: "Band", href: "/#band" },
  { id: "members", label: "Člani", href: "/#members" },
  { id: "about-us", label: "O nas", href: "/#about-us" },
  { id: "gallery", label: "Galerija", href: "/gallery" },
  { id: "contact", label: "Kontakt", href: "/#contact" },
] as const;
