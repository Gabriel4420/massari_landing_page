'use client';
import React, { createContext, useState, useEffect, ReactNode } from 'react';

interface ActiveSectionContextProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

interface ActiveSectionProviderProps {
  children: ReactNode;
}

export const ActiveSectionContext = createContext<ActiveSectionContextProps>({
  activeSection: '',
  setActiveSection: () => {},
});

export const ActiveSectionProvider: React.FC<ActiveSectionProviderProps> = ({ children }) => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ActiveSectionContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </ActiveSectionContext.Provider>
  );
};
