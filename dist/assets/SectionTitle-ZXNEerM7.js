import { jsxs, jsx } from "react/jsx-runtime";
import { D as DarkModeContext } from "./DarkModeContext-YHL6TNaC.js";
import { useContext } from "react";
const SectionTitle = ({ title, des }) => {
  const { darkMode } = useContext(DarkModeContext);
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: `${darkMode ? "text-titleTextLight" : "text-titleTextDark"} text-2xl text-titleFont xl:lg:text-4xl  font-bold capitalize`, children: title }),
    /* @__PURE__ */ jsx("h3", { className: `${darkMode ? "text-subTitleTextLight" : "text-subTitleTextDark"}  text-sm md:text-md text-subTitleFont lg:text-md uppercase  tracking-wide`, children: des })
  ] });
};
export {
  SectionTitle as S
};
