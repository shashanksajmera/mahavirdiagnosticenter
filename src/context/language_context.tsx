'use client'
import { createContext, useContext, useEffect, useState } from "react";

type LanguageContextType = {
    language:string;
    setLanguage: (lang:string) => void;
}

const LanguageContext = createContext<LanguageContextType>({
    language: 'en',
    setLanguage: () => {},
});

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
    const [language, setLanguage] = useState('en')
  
    useEffect(() => {
      const stored = localStorage.getItem('lang')
      if (stored) {
        setLanguage(stored)
      } else {
        const systemLang = navigator.language || navigator.languages[0] || 'en'
        const shortLang = systemLang.split('-')[0]
        const supported = ['en', 'mr']
        const finalLang = supported.includes(shortLang) ? shortLang : 'en'
        setLanguage(finalLang)
        localStorage.setItem('lang', finalLang)
      }
    }, [])
  
    useEffect(() => {
      localStorage.setItem('lang', language)
    }, [language])
  
    return (
      <LanguageContext.Provider value={{ language, setLanguage }}>
        {children}
      </LanguageContext.Provider>
    )
  }
  
  export const useLanguage = () => useContext(LanguageContext)