import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { useContext } from "react";
import { L as LayoutApp } from "./LayoutApp-75VrxIRl.js";
import { Head, Link } from "@inertiajs/inertia-react";
import { L as LinkComponent } from "./ClipPathLinks-XXYCKeLm.js";
import { u as useSearchBarContext } from "./SearchBarContext-pj9rNtoS.js";
import { i as img } from "./banner-LkrwxPAb.js";
import { D as DarkModeContext } from "./DarkModeContext-YHL6TNaC.js";
import "@inertiajs/react";
import "@headlessui/react";
import "react-icons/fa/index.esm.js";
import "alpinejs";
import "react-select";
import "react-icons/fa6/index.esm.js";
import "react-icons/bi/index.esm.js";
import "react-icons/ti/index.esm.js";
import "./SidebarContext-P_-bml5L.js";
import "framer-motion";
const books = ({ imam, imams }) => {
  const { check, setCheck } = useSearchBarContext();
  const { darkMode } = useContext(DarkModeContext);
  console.log(imam);
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs(LayoutApp, { children: [
    /* @__PURE__ */ jsx(Head, { children: /* @__PURE__ */ jsx("title", { children: imam.eng_saheeh_name }) }),
    /* @__PURE__ */ jsx("div", { className: "w-[100%] mx-auto  flex flex-col justify-center ", children: /* @__PURE__ */ jsxs("div", { className: "w-[80%] mx-auto flex flex-col justify-center  ", children: [
      /* @__PURE__ */ jsxs("div", { className: "w-full flex flex-col justify-center ", children: [
        /* @__PURE__ */ jsxs("div", { className: "relative flex justify-center items-center", children: [
          /* @__PURE__ */ jsx("img", { src: img, className: "w-[400px]  ", alt: "" }),
          /* @__PURE__ */ jsx("h2", { className: " text-lightText text-3xl text-center absolute text-titleFont font-bold", children: imam == null ? void 0 : imam.imam_english_name })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "-mt-[100px] mb-5", children: /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("p", { className: "text-center", children: [
          imam.imams_bios.eng_lineage,
          /* @__PURE__ */ jsx(Link, { className: "mx-3 text-sm font-semibold bg-lightBg text-darkText px-1 rounded-lg ", children: "read more" })
        ] }) }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "w-full flex flex-row gap-3 ", children: [
        /* @__PURE__ */ jsxs("div", { className: "w-[80%] float-start flex flex-col", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-center text-2xl text-bold mb-5 rounded-full shadow-xl shadow-purple-900 w-1/3 mx-auto py-1 border-[1px]", children: imam.eng_saheeh_name }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-3 gap-3 ", children: imam == null ? void 0 : imam.books.map((book, i) => /* @__PURE__ */ jsx("div", { className: `border ${darkMode ? "border-lightText" : "border-darkText"} shadow-md shadow-purple-900 p-1 flex justify-center align-middle items-center `, children: /* @__PURE__ */ jsx("div", { className: " text-center flex justify-center align-middle items-center", children: /* @__PURE__ */ jsx(
            Link,
            {
              className: `${darkMode ? "text-lightText" : "text-darkRext"} font-semibold text-center`,
              children: check === "eng" ? book.book_english_name : check === "fr" ? book.book_french_name : check === "ar" ? book.book_arabic_name : null
            },
            i
          ) }) })) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "w-[20%] float-end", children: imams == null ? void 0 : imams.map((imam2, x) => (
          //   <Link className='text-darkText text-center px-3 shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]' key={x}>{check === "eng" ? book.book_english_name : check === "fr" ? book.book_french_name : check === "ar" ? book.book_arabic_name : null}</Link>
          /* @__PURE__ */ jsx(
            LinkComponent,
            {
              href: `/imams/${imam2.id}`,
              value: check === "eng" ? imam2.imam_english_name : check === "fr" ? imam2.imam_french_name : check === "ar" ? imam2.imam_arabic_name : null
            }
          )
        )) })
      ] })
    ] }) })
  ] }) });
};
export {
  books as default
};
