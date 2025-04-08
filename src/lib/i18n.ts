"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

// Define available languages
export const LANGUAGES = [
  { code: "en", name: "English", isDefault: true },
  { code: "es", name: "Español" },
  { code: "fr", name: "Français" },
];

// Default translations for fallback
const DEFAULT_TRANSLATIONS: Record<string, Record<string, string>> = {
  en: {
    "nav.home": "Home",
    "nav.shop": "Shop",
    "nav.dashboard": "Dashboard",
    "nav.signin": "Sign In",
    "nav.signup": "Sign Up",
    "shop.title": "Shop",
    "shop.description": "Browse our collection of beautiful flowers and arrangements",
    "product.addToCart": "Add to Cart",
    "product.outOfStock": "Out of Stock",
    "product.inStock": "in stock",
    "product.adding": "Adding...",
  },
  es: {
    "nav.home": "Inicio",
    "nav.shop": "Tienda",
    "nav.dashboard": "Panel",
    "nav.signin": "Iniciar Sesión",
    "nav.signup": "Registrarse",
    "shop.title": "Tienda",
    "shop.description": "Explore nuestra colección de hermosas flores y arreglos",
    "product.addToCart": "Añadir al Carrito",
    "product.outOfStock": "Agotado",
    "product.inStock": "en existencia",
    "product.adding": "Añadiendo...",
  },
  fr: {
    "nav.home": "Accueil",
    "nav.shop": "Boutique",
    "nav.dashboard": "Tableau de Bord",
    "nav.signin": "Connexion",
    "nav.signup": "S'inscrire",
    "shop.title": "Boutique",
    "shop.description": "Parcourez notre collection de belles fleurs et arrangements",
    "product.addToCart": "Ajouter au Panier",
    "product.outOfStock": "Rupture de Stock",
    "product.inStock": "en stock",
    "product.adding": "Ajout en cours...",
  },
};

// Context type definition
type I18nContextType = {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string, params?: Record<string, string>) => string;
  translations: Record<string, string>;
  availableLanguages: typeof LANGUAGES;
};

// Create context with default values
const I18nContext = createContext<I18nContextType>({
  language: "en",
  setLanguage: () => {},
  t: (key) => key,
  translations: {},
  availableLanguages: LANGUAGES,
});

// Provider component
export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState("en");
  const [translations, setTranslations] = useState<Record<string, string>>({});

  // Load translations when language changes
  useEffect(() => {
    // In a real app, this would fetch from Convex
    // For now, use the default translations
    setTranslations(DEFAULT_TRANSLATIONS[language] || DEFAULT_TRANSLATIONS.en);

    // Save language preference
    localStorage.setItem("language", language);
  }, [language]);

  // Initialize language from localStorage on client side
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      setLanguageState(savedLanguage);
    }
  }, []);

  // Translation function
  const t = (key: string, params?: Record<string, string>) => {
    let text = translations[key] || key;
    
    // Replace parameters if provided
    if (params) {
      Object.entries(params).forEach(([param, value]) => {
        text = text.replace(`{{${param}}}`, value);
      });
    }
    
    return text;
  };

  // Set language function
  const setLanguage = (lang: string) => {
    if (LANGUAGES.some(l => l.code === lang)) {
      setLanguageState(lang);
    }
  };

  return (
    <I18nContext.Provider value={{
      language,
      setLanguage,
      t,
      translations,
      availableLanguages: LANGUAGES
    }}>
      {children}
    </I18nContext.Provider>
  );
}

// Hook for using translations
export function useTranslation() {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error("useTranslation must be used within an I18nProvider");
  }
  return context;
}