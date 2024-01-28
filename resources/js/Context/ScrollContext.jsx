import { createContext, useContext, useState } from 'react';

const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const [currentSection, setCurrentSection] = useState(1);

  const scrollToSection = (direction) => {
    let nextSection;

    if (direction === 'up' && currentSection > 1) {
      nextSection = currentSection - 1;
    } else if (direction === 'down' && currentSection < 4) {
      nextSection = currentSection + 1;
    }

    if (nextSection) {
      const element = document.getElementById(`section${nextSection}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setCurrentSection(nextSection);
      }
    }
  };

  const contextValue = {
    currentSection,
    scrollToSection,
  };

  return (
    <ScrollContext.Provider value={contextValue}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScrollContext = () => {
  return useContext(ScrollContext);
};
