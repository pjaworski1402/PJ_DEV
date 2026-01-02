import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'pl';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const translations = {
  en: {
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.experience': 'Experience',
    'nav.contact': 'Contact',
    'hero.available': 'Available for new projects',
    'hero.role': 'Full-Stack Software Developer & SaaS Founder',
    'hero.desc': 'Expert in building production-grade SaaS applications, payment integrations, and workflow automation. Based in Milanówek, Poland.',
    'hero.viewWork': 'View Work',
    'hero.contactMe': 'Contact Me',
    'hero.whyHire': 'Why Hire Piotr?',
    'skills.title': 'Technical Arsenal',
    'projects.title': 'Selected Work',
    'projects.subtitle': 'A collection of SaaS products, e-commerce platforms, and specialized databases built for clients and self-founded ventures.',
    'projects.visit': 'Visit Live Site',
    'projects.internal': 'Internal / Client Access',
    'experience.title': 'Professional Journey',
    'contact.title': "Let's Build Something Great",
    'contact.desc': "I'm currently available for freelance projects and full-time opportunities. Specializing in React, Next.js, and high-performance SaaS architecture.",
    'contact.footer': 'Based in Poland.',
  },
  pl: {
    'nav.about': 'O mnie',
    'nav.projects': 'Projekty',
    'nav.experience': 'Doświadczenie',
    'nav.contact': 'Kontakt',
    'hero.available': 'Dostępny do nowych projektów',
    'hero.role': 'Full-Stack Developer & Twórca SaaS',
    'hero.desc': 'Ekspert w budowaniu aplikacji SaaS klasy produkcyjnej, integracji płatności i automatyzacji procesów. Bazuję w Milanówku.',
    'hero.viewWork': 'Zobacz Projekty',
    'hero.contactMe': 'Skontaktuj się',
    'hero.whyHire': 'Dlaczego warto?',
    'skills.title': 'Technologie',
    'projects.title': 'Wybrane Projekty',
    'projects.subtitle': 'Kolekcja produktów SaaS, platform e-commerce i dedykowanych baz danych stworzonych dla klientów oraz jako własne przedsięwzięcia.',
    'projects.visit': 'Zobacz online',
    'projects.internal': 'Dostęp wewnętrzny / Klienta',
    'experience.title': 'Doświadczenie',
    'contact.title': 'Stwórzmy coś wyjątkowego',
    'contact.desc': 'Jestem dostępny do projektów freelance oraz stałej współpracy. Specjalizuję się w React, Next.js i wydajnej architekturze SaaS.',
    'contact.footer': 'Polska.',
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('pl');

  const t = (key: string) => {
    const keys = key as keyof typeof translations['en'];
    return translations[language][keys] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
};