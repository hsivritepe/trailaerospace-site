export type Locale = "en" | "tr";

export const translations = {
  en: {
    nav: {
      home: "Home",
      products: "Products",
      services: "Services",
      contact: "Contact",
      portal: "Portal",
    },
    footer: {
      trailAerospace: "Trail Aerospace",
      copyright: "All rights reserved.",
    },
    lang: { en: "EN", tr: "TR" },
  },
  tr: {
    nav: {
      home: "Ana Sayfa",
      products: "Ürünler",
      services: "Hizmetler",
      contact: "İletişim",
      portal: "Portal",
    },
    footer: {
      trailAerospace: "Trail Aerospace",
      copyright: "Tüm hakları saklıdır.",
    },
    lang: { en: "EN", tr: "TR" },
  },
} as const;

export function getTranslations(locale: Locale) {
  return translations[locale];
}
