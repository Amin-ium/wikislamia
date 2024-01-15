import { createContext, useContext, useEffect, useState } from "react";

const SearchBarContext = createContext();

export const useSearchBarContext = () => useContext(SearchBarContext);

export const SearchContext = ({ children }) => {
  // Retrieve data from localStorage
  const storedCheck = localStorage.getItem("check");

  // Set the parsedCheck to the stored value or default to 'eng' if null
  const parsedCheck = storedCheck || 'eng' || 'ar' || 'fr' ;

  // State to hold the language preference
  const [check, setCheck] = useState('eng');

  // Update localStorage when 'check' changes
  useEffect(() => {
    localStorage.setItem("check", check);
  }, [check]);

  return (
    <SearchBarContext.Provider value={{ check, setCheck }}>

      {children}
    </SearchBarContext.Provider>
  );
};
