import { jsx } from "react/jsx-runtime";
import { createContext, useState, useEffect } from "react";
const SidebarContext = createContext();
const SidebarContextProvider = ({ children }) => {
  const [opened, setOpened] = useState(
    JSON.parse(localStorage.getItem("opened")) || false
  );
  const handleSidebar = () => {
    setOpened(!opened);
  };
  useEffect(() => {
    localStorage.setItem("opened", opened);
  }, [opened]);
  return /* @__PURE__ */ jsx(SidebarContext.Provider, { value: { opened, setOpened, handleSidebar }, children });
};
export {
  SidebarContext as S,
  SidebarContextProvider as a
};
