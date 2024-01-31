// ScrollContext.jsx
import React, { createContext, useContext, useEffect, useRef, useState } from 'react';

const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const sectionRefs = {
    section0: useRef(null),
    section1: useRef(null),
    section2: useRef(null),
    section3: useRef(null),
    section4: useRef(null),
    section5: useRef(null),
  };

  const [showTopButton, setShowTopButton] = useState(false);
  const [showBottomButton, setShowBottomButton] = useState(true);

  const scrollToSection = (sectionId) => {
    const sectionRef = sectionRefs[sectionId];

    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const scrollPosition = window.scrollY;
      const lastSection = Object.keys(sectionRefs).pop();

      setShowTopButton(scrollPosition > windowHeight);
      setShowBottomButton(scrollPosition < sectionRefs[lastSection].current.offsetTop);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionRefs]);

  return (
    <ScrollContext.Provider value={{ scrollToSection, sectionRefs, showTopButton, showBottomButton }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = () => {
  const { scrollToSection, sectionRefs, showTopButton, showBottomButton } = useContext(ScrollContext);
  return { scrollToSection, sectionRefs, showTopButton, showBottomButton };
};
