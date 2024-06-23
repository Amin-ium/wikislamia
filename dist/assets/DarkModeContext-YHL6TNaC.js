import { jsx } from "react/jsx-runtime";
import { createContext, useState, useEffect } from "react";
const DarkModeContext = createContext();
const DarkModeContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode")) || false
  );
  const toggle = () => {
    setDarkMode(!darkMode);
  };
  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);
  return /* @__PURE__ */ jsx(DarkModeContext.Provider, { value: { darkMode, toggle }, children });
};
export {
  DarkModeContext as D,
  DarkModeContextProvider as a
};
