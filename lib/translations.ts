export type Locale = "en" | "fr";

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
    lang: { en: "EN", fr: "FR" },
  },
  fr: {
    nav: {
      home: "Accueil",
      products: "Produits",
      services: "Services",
      contact: "Contact",
      portal: "Portail",
    },
    footer: {
      trailAerospace: "Trail Aerospace",
      copyright: "Tous droits réservés.",
    },
    lang: { en: "EN", fr: "FR" },
  },
} as const;

export function getTranslations(locale: Locale) {
  return translations[locale];
}
