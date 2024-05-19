export const languages: {
  [key: string]: { name: string; nativeName: string; code: string };
} = {
  en: {
    name: "English",
    nativeName: "English",
    code: "en",
  },
  de: {
    name: "German",
    nativeName: "Deutsch",
    code: "de",
  },
  fr: {
    name: "French",
    nativeName: "Français",
    code: "fr",
  },
  it: {
    name: "Italian",
    nativeName: "Italiano",
    code: "if",
  },
};

export const locales = Object.keys(languages);
