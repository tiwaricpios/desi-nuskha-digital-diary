
import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'en' | 'hi';

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

// Translations
const translations: Record<Language, Record<string, string>> = {
  en: {
    home: 'Home',
    categories: 'Categories',
    search: 'Search remedies...',
    submit: 'Submit Nuskha',
    health: 'Health',
    skin_hair: 'Skin & Hair',
    kitchen: 'Kitchen Hacks',
    baby_care: 'Baby Care',
    seasonal: 'Seasonal',
    trending: 'Trending Remedies',
    view_all: 'View All',
    ingredients: 'Ingredients',
    method: 'Method',
    effectiveness: 'Effectiveness',
    posted_by: 'Posted by',
    like: 'Like',
    save: 'Save',
    share: 'Share',
    comment: 'Comment',
    daadi_diary: 'Daadi Ki Diary',
    daadi_kahaniyaan: 'Daadi Ki Kahaniyaan',
    blog: 'Blog',
    language: 'Language',
    welcome_message: 'Traditional remedies from Indian homes',
    tagline: 'Grandma\'s remedies, at your fingertips.',
  },
  hi: {
    home: 'होम',
    categories: 'श्रेणियाँ',
    search: 'नुस्खे खोजें...',
    submit: 'नुस्खा भेजें',
    health: 'स्वास्थ्य',
    skin_hair: 'त्वचा और बाल',
    kitchen: 'रसोई के टिप्स',
    baby_care: 'शिशु देखभाल',
    seasonal: 'मौसमी',
    trending: 'लोकप्रिय नुस्खे',
    view_all: 'सभी देखें',
    ingredients: 'सामग्री',
    method: 'विधि',
    effectiveness: 'प्रभावशीलता',
    posted_by: 'किसने पोस्ट किया',
    like: 'पसंद',
    save: 'सेव',
    share: 'शेयर',
    comment: 'टिप्पणी',
    daadi_diary: 'दादी की डायरी',
    daadi_kahaniyaan: 'दादी की कहानियां',
    blog: 'ब्लॉग',
    language: 'भाषा',
    welcome_message: 'भारतीय घरों के पारंपरिक नुस्खे',
    tagline: 'दादी-नानी के नुस्खे, अब हर घर तक।',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('hi');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
