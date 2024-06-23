import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { L as LayoutApp } from "./LayoutApp-75VrxIRl.js";
import { Link, Head } from "@inertiajs/inertia-react";
import { useContext } from "react";
import { L as LinkComponent } from "./ClipPathLinks-XXYCKeLm.js";
import { u as useSearchBarContext } from "./SearchBarContext-pj9rNtoS.js";
import { i as img } from "./banner-LkrwxPAb.js";
import { P as Pagination } from "./Pagination-7t3xnya6.js";
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
import "moment";
const HadithPara = ({ number_in_book, key, check, eng_hadith, ar_hadith, fr_hadith, hadithHref }) => {
  return /* @__PURE__ */ jsxs("div", { className: `border shadow-xl shadow-purple-900 mb-[40px] p-4 flex flex-col gap-3 ${check === "ar" ? "text-right" : "text-left"} `, children: [
    /* @__PURE__ */ jsx("h3", { children: check === "ar" ? "حديث رقم: " + number_in_book : "Hadeet N°: " + number_in_book }, key),
    /* @__PURE__ */ jsx("div", { className: "flex flex-col", children: /* @__PURE__ */ jsx("div", { className: "text-grayBg font-semibold", children: check === "eng" ? /* @__PURE__ */ jsxs("div", { className: "", children: [
      /* @__PURE__ */ jsx("p", { children: eng_hadith.substring(0, 170) + " ..." }),
      /* @__PURE__ */ jsx(Link, { href: hadithHref, className: `bg-grayBg text-lightText px-1 rounded-md  ${check === "ar" ? "float-start" : "float-end"}`, children: "Read More" })
    ] }) : check === "fr" ? /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("p", { children: fr_hadith.substring(0, 170) + " ..." }),
      /* @__PURE__ */ jsx(Link, { href: hadithHref, className: `bg-grayBg text-lightText px-1 rounded-md  ${check === "ar" ? "float-start" : "float-end"}`, children: "Lire" })
    ] }) : check === "ar" ? /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("p", { children: ar_hadith.substring(0, 170) + " ..." }),
      /* @__PURE__ */ jsx(Link, { href: hadithHref, className: `bg-grayBg text-lightText px-1 rounded-md  ${check === "ar" ? "float-start" : "float-end"}`, children: "المزيد" })
    ] }) : null }, key) })
  ] });
};
const books = ({ book, books: books2 }) => {
  const { check, setCheck } = useSearchBarContext();
  useContext(DarkModeContext);
  console.log(book);
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs(LayoutApp, { children: [
    /* @__PURE__ */ jsx(Head, { children: /* @__PURE__ */ jsx("title", { children: "Book Page" }) }),
    /* @__PURE__ */ jsx("div", { className: "w-[100%] mx-auto  flex flex-col justify-center ", children: /* @__PURE__ */ jsxs("div", { className: "w-[80%] mx-auto flex flex-col justify-center  ", children: [
      /* @__PURE__ */ jsxs("div", { className: "w-full flex flex-col justify-center ", children: [
        /* @__PURE__ */ jsxs("div", { className: "relative flex justify-center items-center", children: [
          /* @__PURE__ */ jsx("img", { src: img, className: "w-[400px]  ", alt: "" }),
          /* @__PURE__ */ jsx("h2", { className: " text-lightText text-3xl text-center absolute text-titleFont font-bold", children: book.imam.eng_saheeh_name })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "-mt-[100px] mb-5", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-center font-bold text-3xl ", children: book == null ? void 0 : book.book_english_name }),
          /* @__PURE__ */ jsxs("h2", { className: "text-center text-md", children: [
            "[",
            book.imam.eng_saheeh_name,
            " | ",
            "Book N°: " + book.book_number,
            "]"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "w-full flex flex-row gap-3 ", children: [
        /* @__PURE__ */ jsx("div", { className: "w-[80%] float-start flex flex-col", children: /* @__PURE__ */ jsx(Pagination, { className: "", Component: HadithPara, items: book == null ? void 0 : book.hadeets }) }),
        /* @__PURE__ */ jsxs("div", { className: "w-[20%] float-end", children: [
          /* @__PURE__ */ jsx(
            "h2",
            {
              className: "text-darkText text-center font-bold text-xl  py-3 mb-3  underline shadow-md shadow-purple-900 rounded-[20px] ",
              children: book == null ? void 0 : book.imam.eng_saheeh_name
            },
            book.id
          ),
          books2.map((book2, x) => (
            //   <Link className='text-darkText text-center px-3 shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]' key={x}>{check === "eng" ? book.book_english_name : check === "fr" ? book.book_french_name : check === "ar" ? book.book_arabic_name : null}</Link>
            /* @__PURE__ */ jsx(
              LinkComponent,
              {
                href: `/hadeeth/book/${book2.id}`,
                value: check === "eng" ? book2.book_english_name : check === "fr" ? book2.book_french_name : check === "ar" ? book2.book_arabic_name : null
              }
            )
          ))
        ] })
      ] })
    ] }) })
  ] }) });
};
export {
  books as default
};
