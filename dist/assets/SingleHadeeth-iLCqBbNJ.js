import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { useContext } from "react";
import { D as DarkModeContext } from "./DarkModeContext-YHL6TNaC.js";
import { u as useSearchBarContext } from "./SearchBarContext-pj9rNtoS.js";
import { L as LayoutApp } from "./LayoutApp-75VrxIRl.js";
import { Head, Link } from "@inertiajs/inertia-react";
import "@inertiajs/react";
import "@headlessui/react";
import "react-icons/fa/index.esm.js";
import "alpinejs";
import "react-select";
import "react-icons/fa6/index.esm.js";
import "react-icons/bi/index.esm.js";
import "react-icons/ti/index.esm.js";
import "./SidebarContext-P_-bml5L.js";
const SingleHadeeth = ({ hadeeth, nextHadeeth, previousHadeeth }) => {
  useSearchBarContext();
  useContext(DarkModeContext);
  console.log(hadeeth);
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs(LayoutApp, { children: [
    /* @__PURE__ */ jsx(Head, { children: /* @__PURE__ */ jsx("title", { children: hadeeth.books.book_english_name + "| Hadeeth N°: " + hadeeth.number_in_book }) }),
    /* @__PURE__ */ jsx("div", { className: "w-[100%] bg-lightBg  mx-auto  flex flex-col justify-center my-[150px] ", children: /* @__PURE__ */ jsxs("div", { className: "w-[80%] mx-auto flex flex-row gap-5", children: [
      /* @__PURE__ */ jsxs("div", { className: "w-[70%] float-left flex flex-col justify-center shadow-xl shadow-purple-900 p-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-center text-center gap-3", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-center text-3xl text-semibold", children: hadeeth.books.book_english_name }),
          /* @__PURE__ */ jsxs("h3", { className: "text-center text-xl ", children: [
            "[Hadeeth N°: ",
            hadeeth.number_in_book,
            " | Book: ",
            hadeeth.books.book_number,
            "]"
          ] }),
          /* @__PURE__ */ jsx("p", { className: "font-semibold", children: hadeeth.eng_hadith }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-row justify-center items-center gap-3 text-sm font-semibold", children: [
            /* @__PURE__ */ jsxs("h3", { children: [
              "[",
              hadeeth.imams.eng_saheeh_name,
              "]"
            ] }),
            /* @__PURE__ */ jsxs("h3", { children: [
              "[Grade: ",
              hadeeth.grade,
              "]"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-row items-center justify-around", children: [
          /* @__PURE__ */ jsx(Link, { className: "px-1 w-20 text-center text-sm text-lightText bg-darkText rounded-md", href: `/hadeeth/${previousHadeeth.id}`, children: "Previous" }),
          /* @__PURE__ */ jsx(Link, { className: "px-1 w-20 text-center text-sm text-lightText bg-darkText rounded-md", href: `/hadeeth/${nextHadeeth.id}`, children: "Next" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "w-[30%] h-full float-right shadow-xl shadow-purple-900 ", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-2xl font-semibold text-center mt-2", children: hadeeth.imams.imam_english_name }),
        /* @__PURE__ */ jsxs("div", { className: "p-4", children: [
          /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold", children: hadeeth.imams.saheeh_name }),
          /* @__PURE__ */ jsxs("div", { className: "", children: [
            /* @__PURE__ */ jsxs("p", { className: "text-md ", children: [
              hadeeth.imams.eng_saheeh_infos.substr(1, 250),
              "..."
            ] }),
            /* @__PURE__ */ jsx(Link, { href: "/hadeeth", className: "float-right bg-darkText text-lightText px-1 text-sm rounded-md mb-3", children: "read more" })
          ] })
        ] })
      ] })
    ] }) })
  ] }) });
};
export {
  SingleHadeeth as default
};
