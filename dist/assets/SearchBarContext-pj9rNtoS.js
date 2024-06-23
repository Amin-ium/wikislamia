import "react/jsx-runtime";
import { createContext, useContext } from "react";
const SearchBarContext = createContext();
const useSearchBarContext = () => useContext(SearchBarContext);
export {
  useSearchBarContext as u
};
