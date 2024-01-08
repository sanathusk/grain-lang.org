export const languages = {
    en: 'English',
    fr: 'Français',
  };
  
  export const defaultLang = 'en';
  
  export const ui: Record<keyof typeof languages, Record<string, string>> = {
    en: {
      'home.title': 'Grain: A strongly-typed functional programming language for the modern web.Language',
      'nav.home': 'Home',
      'nav.about': 'About',
      'nav.twitter': 'Twitter',
    },
    fr: {
      'nav.home': 'Accueil',
      'nav.about': 'À propos',
    },
  } as const;