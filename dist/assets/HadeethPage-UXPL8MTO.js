import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import React, { useState, useEffect, useContext, Suspense } from "react";
import { L as LayoutApp } from "./LayoutApp-75VrxIRl.js";
import { Link, Head } from "@inertiajs/inertia-react";
import "alpinejs";
import { FaSearch } from "react-icons/fa/index.esm.js";
import { u as useSearchBarContext } from "./SearchBarContext-pj9rNtoS.js";
import { D as DarkModeContext } from "./DarkModeContext-YHL6TNaC.js";
import { L as LinkComponent } from "./ClipPathLinks-XXYCKeLm.js";
import "@inertiajs/react";
import "@headlessui/react";
import "react-select";
import "react-icons/fa6/index.esm.js";
import "react-icons/bi/index.esm.js";
import "react-icons/ti/index.esm.js";
import "./SidebarContext-P_-bml5L.js";
import "framer-motion";
const imgPath = "/build/assets/round-badge--LyRC1bsY.png";
const Tabs = ({ tabs, id, index, bio, idx, handleClick, saheeh_name, indx, imamId }) => {
  const [selectedTabIndex, setSelectedTabIndex] = useState();
  useEffect(() => {
    setSelectedTabIndex(1);
  }, [selectedTabIndex]);
  return /* @__PURE__ */ jsxs("div", { onClick: handleClick, className: "relative flex justify-center align-middle items-center cursor-pointer", children: [
    /* @__PURE__ */ jsx("img", { src: imgPath, alt: "", className: "" }),
    /* @__PURE__ */ jsx("h2", { className: "text-lightText absolute font-bold ", children: saheeh_name }, indx)
  ] });
};
const bannerDark = "/build/assets/medd-LRW7rWkW.png";
const bannerLight = "/build/assets/medd2-yJx05PDD.png";
const FilterBareHadeeths = ({ hadeetData }) => {
  const { darkMode } = useContext(DarkModeContext);
  const { check, setCheck } = useSearchBarContext();
  useState();
  useState([]);
  useState([]);
  const [value, setValue] = useState("");
  const [valueSaheeh, setValueSaheeh] = useState("");
  const [valueBook, setValueBook] = useState("");
  useState(hadeetData);
  useState([]);
  const [checking, setChecking] = useState("");
  useState(false);
  useState(false);
  useState(false);
  useState(true);
  useState("Choose a Langage ---- إختر اللغة");
  const onChange = (event) => {
    setValue(event.target.value);
    setChecking("eng");
  };
  const onChangeSaheeh = (event) => {
    setValueSaheeh(event.target.value);
    setChecking("eng");
  };
  const onChangeBook = (event) => {
    setValueBook(event.target.value);
    setChecking("eng");
  };
  return /* @__PURE__ */ jsx(React.Fragment, { children: /* @__PURE__ */ jsx(
    "form",
    {
      className: "z-17 w-full my-5 ",
      "x-data": "{dropDownOpen: false}",
      children: /* @__PURE__ */ jsxs("div", { className: `w-[80%] mx-auto flex ${check === "ar" ? "flex-row-reverse" : "flex-row "} gap-5 justify-between align-middle items-center`, children: [
        /* @__PURE__ */ jsxs("div", { className: "flex justify-center mx-auto relative w-full", children: [
          /* @__PURE__ */ jsx("input", { type: "text", value, onChange, className: `${check === "ar" ? "text-right" : "text-left"} ${darkMode ? "bg-darkText text-lightText" : "bg-lightBg text-darkText"} shadow-lg shadow-fuchsia-700 h-[30px] w-full rounded-md px-1`, placeholder: `${check === "ar" ? "ابحث عن إمام" : check === "eng" ? "Search By Eemam" : "Cherche un Imam"} ` }),
          /* @__PURE__ */ jsx(FaSearch, { size: 20, className: `${check === "ar" ? "left-[4px] text-right" : "right-[4px] text-left"} text-gray-500 absolute top-[4px]  z-40` }),
          /* @__PURE__ */ jsxs("div", { className: "dropdown absolute z-20  flex flex-col  bg-white   overflow-y-scroll rounded top-[30px]  w-full  ", children: [
            check === "eng" && hadeetData && hadeetData.imams.filter((item) => {
              const searchTerm = value.replace(/([^\u0621-\u063A\u0641-\u064A\u0660-\u0669a-zA-Z 0-9])/g, "").toLowerCase();
              const content = item.imam_english_name.replace(/([^\u0621-\u063A\u0641-\u064A\u0660-\u0669a-zA-Z 0-9])/g, "").toLowerCase();
              const searchItem = content.replace(/([^\u0621-\u063A\u0641-\u064A\u0660-\u0669a-zA-Z 0-9])/g, "").toLowerCase();
              console.log(searchTerm);
              console.log(searchItem);
              return searchTerm && searchItem.startsWith(searchTerm) && searchItem !== searchTerm;
            }).map((imam) => /* @__PURE__ */ jsx(Link, { href: `/imams/${imam.id}`, className: `${check === "ar" ? "text-right" : "text-left"} ${darkMode ? "bg-darkText text-lightBg hover:bg-gray-950" : "bg-lightBg text-darkText hover:bg-gray-300"} px-3 py-[1px] border-b-gray-300 border-b-[1px] `, children: imam.imam_english_name })),
            check === "fr" && hadeetData && hadeetData.imams.filter((item) => {
              const searchTerm = value.replace(/([^\u0621-\u063A\u0641-\u064A\u0660-\u0669a-zA-Z 0-9])/g, "").toLowerCase();
              const content = item.imam_frensh_name.replace(/([^\u0621-\u063A\u0641-\u064A\u0660-\u0669a-zA-Z 0-9])/g, "").toLowerCase();
              const searchItem = content.replace(/([^\u0621-\u063A\u0641-\u064A\u0660-\u0669a-zA-Z 0-9])/g, "").toLowerCase();
              return searchTerm && searchItem.startsWith(searchTerm) && searchItem !== searchTerm;
            }).map((imam) => /* @__PURE__ */ jsx(Link, { href: `/imams/${imam.id}`, className: `${check === "ar" ? "text-right" : "text-left"} ${darkMode ? "bg-darkText text-lightBg hover:bg-gray-950" : "bg-lightBg text-darkText hover:bg-gray-300"} px-3 py-[1px] border-b-gray-300 border-b-[1px] `, children: imam.imam_frensh_name })),
            check === "ar" && hadeetData && hadeetData.imams.filter((item) => {
              const searchTerm = value.replace(/([^\u0621-\u063A\u0641-\u064A\u0660-\u0669a-zA-Z 0-9])/g, "").toLowerCase();
              const content = item.imam_arabic_name.replace(/([^\u0621-\u063A\u0641-\u064A\u0660-\u0669a-zA-Z 0-9])/g, "").toLowerCase();
              const searchItem = content.replace(/([^\u0621-\u063A\u0641-\u064A\u0660-\u0669a-zA-Z 0-9])/g, "").toLowerCase();
              return searchTerm && searchItem.startsWith(searchTerm) && searchItem !== searchTerm;
            }).map((imam) => /* @__PURE__ */ jsx(Link, { href: `/imams/${imam.id}`, className: `${check === "ar" ? "text-right" : "text-left"} ${darkMode ? "bg-darkText text-lightBg hover:bg-gray-950" : "bg-lightBg text-darkText hover:bg-gray-300"} px-3 py-[1px] border-b-gray-300 border-b-[1px] `, children: imam.imam_arabic_name }))
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex justify-center mx-auto relative w-full", children: [
          /* @__PURE__ */ jsx("input", { type: "text", value: valueSaheeh, onChange: onChangeSaheeh, dir: check === "ar" ? "rtl" : "ltr", className: `${check === "ar" ? "text-right" : "text-left"} ${darkMode ? "bg-darkText text-lightText" : "bg-lightBg text-darkText"} shadow-lg shadow-fuchsia-700 h-[30px] w-full rounded-md px-1`, placeholder: `${check === "ar" ? "ابحث عن صحيح" : check === "eng" ? "Search By Saheeh" : "Cherche un Sahih"} ` }),
          /* @__PURE__ */ jsx(FaSearch, { size: 20, className: `${check === "ar" ? "left-[4px]" : "right-[4px]"} text-gray-500 absolute top-[4px]  z-40` }),
          /* @__PURE__ */ jsxs("div", { className: "dropdown absolute z-20  flex flex-col  bg-white   overflow-y-scroll rounded top-[30px]  w-full  ", children: [
            check === "eng" && hadeetData && hadeetData.imams.filter((item) => {
              const searchTerm = valueSaheeh.replace(/([^\u0621-\u063A\u0641-\u064A\u0660-\u0669a-zA-Z 0-9])/g, "").toLowerCase();
              const content = item.eng_saheeh_name.replace(/([^\u0621-\u063A\u0641-\u064A\u0660-\u0669a-zA-Z 0-9])/g, "").toLowerCase();
              const searchItem = content.replace(/([^\u0621-\u063A\u0641-\u064A\u0660-\u0669a-zA-Z 0-9])/g, "").toLowerCase();
              return searchTerm && searchItem.startsWith(searchTerm) && searchItem !== searchTerm;
            }).map((imam) => /* @__PURE__ */ jsx(Link, { href: `/imams/${imam.id}`, className: `${darkMode ? "bg-darkText text-lightBg hover:bg-gray-950" : "bg-lightBg text-darkText hover:bg-gray-300"} ${check === "ar" ? "text-right" : "text-left"} px-3 py-[1px] border-b-gray-300 border-b-[1px] `, children: imam.eng_saheeh_name })),
            check === "fr" && hadeetData && hadeetData.imams.filter((item) => {
              const searchTerm = valueSaheeh.replace(/([^\u0621-\u063A\u0641-\u064A\u0660-\u0669a-zA-Z 0-9])/g, "").toLowerCase();
              const content = item.fr_saheeh_name.replace(/([^\u0621-\u063A\u0641-\u064A\u0660-\u0669a-zA-Z 0-9])/g, "").toLowerCase();
              const searchItem = content.replace(/([^\u0621-\u063A\u0641-\u064A\u0660-\u0669a-zA-Z 0-9])/g, "").toLowerCase();
              return searchTerm && searchItem.startsWith(searchTerm) && searchItem !== searchTerm;
            }).map((imam) => /* @__PURE__ */ jsx(Link, { href: `/imams/${imam.id}`, className: `${check === "ar" ? "text-right" : "text-left"} ${darkMode ? "bg-darkText text-lightBg hover:bg-gray-950" : "bg-lightBg text-darkText hover:bg-gray-300"} px-3 py-[1px] border-b-gray-300 border-b-[1px] `, children: imam.fr_saheeh_name })),
            check === "ar" && hadeetData && hadeetData.imams.filter((item) => {
              const searchTerm = valueSaheeh.replace(/([^\u0621-\u063A\u0641-\u064A\u0660-\u0669a-zA-Z 0-9])/g, "").toLowerCase();
              const content = item.ar_saheeh_name.replace(/([^\u0621-\u063A\u0641-\u064A\u0660-\u0669a-zA-Z 0-9])/g, "").toLowerCase();
              const searchItem = content.replace(/([^\u0621-\u063A\u0641-\u064A\u0660-\u0669a-zA-Z 0-9])/g, "").toLowerCase();
              return searchTerm && searchItem.startsWith(searchTerm) && searchItem !== searchTerm;
            }).map((imam) => /* @__PURE__ */ jsx(Link, { href: `/imams/${imam.id}`, className: `${check === "ar" ? "text-right" : "text-left"} ${darkMode ? "bg-darkText text-lightBg hover:bg-gray-950" : "bg-lightBg text-darkText hover:bg-gray-300"} px-3 py-[1px] border-b-gray-300 border-b-[1px] `, children: imam.ar_saheeh_name }))
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex justify-center mx-auto relative w-full", children: [
          /* @__PURE__ */ jsx("input", { type: "text", value: valueBook, onChange: onChangeBook, className: `${check === "ar" ? "text-right" : "text-left"} ${darkMode ? "bg-darkText text-lightText" : "bg-lightBg text-darkText"} shadow-lg shadow-fuchsia-700 h-[30px] w-full  rounded-md px-1`, placeholder: `${check === "ar" ? "ابحث عن كتاب" : check === "eng" ? "Search By Book" : "Cherche un Livre"} ` }),
          /* @__PURE__ */ jsx(FaSearch, { size: 20, className: `${check === "ar" ? "left-[4px]" : "right-[4px]"} text-gray-500 absolute top-[4px]  z-40` }),
          /* @__PURE__ */ jsxs("div", { className: "dropdown absolute z-20  flex flex-col max-h-[190px]  bg-white   overflow-y-scroll rounded top-[30px]  w-full  ", children: [
            check === "eng" && hadeetData && hadeetData.imams.map(
              (imam) => imam.books.filter(
                (item) => {
                  const searchTerm = valueBook.replace(/([^\u0621-\u063A\u0641-\u064A\u0660-\u0669a-zA-Z 0-9])/g, "").toLocaleLowerCase();
                  const content = item.book_english_name.replace(/([^\u0621-\u063A\u0641-\u064A\u0660-\u0669a-zA-Z 0-9])/g, "").toLocaleLowerCase();
                  const searchItem = content.replace(/([^\u0621-\u063A\u0641-\u064A\u0660-\u0669a-zA-Z 0-9])/g, "").toLocaleLowerCase();
                  return searchTerm && searchItem.startsWith(searchTerm) && searchItem !== searchTerm;
                }
              ).map((imam2) => /* @__PURE__ */ jsx(Link, { href: `/hadeeth/${imam2.id}`, className: `${check === "ar" ? "text-right" : "text-left"} ${darkMode ? "bg-darkText text-lightBg hover:bg-gray-950" : "bg-lightBg text-darkText hover:bg-gray-300"} px-3 py-[1px] border-b-gray-300 border-b-[1px] `, children: imam2.book_english_name }))
            ),
            check === "fr" && hadeetData && hadeetData.imams.map(
              (imam) => imam.books.filter(
                (item) => {
                  const searchTerm = valueBook.replace(/([^\u0621-\u063A\u0641-\u064A\u0660-\u0669a-zA-Z 0-9])/g, "").toLocaleLowerCase();
                  const content = item.book_french_name.replace(/([^\u0621-\u063A\u0641-\u064A\u0660-\u0669a-zA-Z 0-9])/g, "").toLocaleLowerCase();
                  const searchItem = content.replace(/([^\u0621-\u063A\u0641-\u064A\u0660-\u0669a-zA-Z 0-9])/g, "").toLocaleLowerCase();
                  return searchTerm && searchItem.startsWith(searchTerm) && searchItem !== searchTerm;
                }
              ).map((imam2) => /* @__PURE__ */ jsx(Link, { href: `/books/${imam2.id}`, className: `${check === "ar" ? "text-right" : "text-left"} ${darkMode ? "bg-darkText text-lightBg hover:bg-gray-950" : "bg-lightBg text-darkText hover:bg-gray-300"} px-3 py-[1px] border-b-gray-300 border-b-[1px] `, children: imam2.book_french_name }))
            ),
            check === "ar" && hadeetData && hadeetData.imams.map(
              (imam) => imam.books.filter(
                (item) => {
                  const searchTerm = valueBook.replace(/([^\u0621-\u063A\u0641-\u064A\u0660-\u0669a-zA-Z 0-9])/g, "").toLocaleLowerCase();
                  const content = item.book_arabic_name.replace(/([^\u0621-\u063A\u0641-\u064A\u0660-\u0669a-zA-Z 0-9])/g, "").toLocaleLowerCase();
                  const searchItem = content.replace(/([^\u0621-\u063A\u0641-\u064A\u0660-\u0669a-zA-Z 0-9])/g, "").toLocaleLowerCase();
                  return searchTerm && searchItem.startsWith(searchTerm) && searchItem !== searchTerm;
                }
              ).map((imam2) => /* @__PURE__ */ jsx(Link, { href: `/books/${imam2.id}`, className: `${check === "ar" ? "text-right" : "text-left"} ${darkMode ? "bg-darkText text-lightBg hover:bg-gray-950" : "bg-lightBg text-darkText hover:bg-gray-300"} px-3 py-[1px] border-b-gray-300 border-b-[1px] `, children: imam2.book_arabic_name }))
            )
          ] })
        ] })
      ] })
    }
  ) });
};
const HadeethPage = ({ hadeetData }) => {
  const { check, setCheck } = useSearchBarContext();
  const { darkMode } = useContext(DarkModeContext);
  const [selectedTabIndex, setSelectedTabIndex] = useState(1);
  useState(false);
  const [data, setData] = useState(null);
  useState(null);
  useState(null);
  useState([]);
  useState(null);
  useEffect(() => {
    setData(hadeetData);
  }, []);
  console.log(hadeetData.imams);
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs(LayoutApp, { children: [
    /* @__PURE__ */ jsx(Head, { children: /* @__PURE__ */ jsx("title", { children: "Hadeet Page" }) }),
    /* @__PURE__ */ jsxs("div", { className: "w-[100%] mx-auto mt-[100px]  ", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: darkMode ? bannerDark : bannerLight,
          className: "h-[15%] w-[15%] mx-auto my-3 ",
          alt: ""
        }
      ),
      /* @__PURE__ */ jsx(FilterBareHadeeths, { hadeetData }),
      /* @__PURE__ */ jsxs("div", { className: "w-[80%] mx-auto  my-[50px]  ", children: [
        /* @__PURE__ */ jsx(Suspense, { fallback: /* @__PURE__ */ jsx("div", { children: "Loading ..." }), children: /* @__PURE__ */ jsx("div", { className: "w-full flex flex-row justify-between ", children: data == null ? void 0 : data.imams.map((imam, i) => /* @__PURE__ */ jsx(
          Tabs,
          {
            imgPath: imam.imam_imagePath,
            handleClick: () => setSelectedTabIndex(imam.id),
            saheeh_name: check === "eng" ? imam.imam_english_name : check === "fr" ? imam.imam_frensh_name : check === "ar" ? imam.imam_arabic_name : null,
            indx: i
          }
        )) }) }),
        /* @__PURE__ */ jsxs("div", { className: `${check === "ar" ? "flex-row-reverse" : "flex-row"} w-full flex  gap-5`, children: [
          /* @__PURE__ */ jsx("div", { className: "w-[80%] float-left", children: /* @__PURE__ */ jsx("div", { className: "", children: data == null ? void 0 : data.imams.map(
            (imam, i) => imam.id === selectedTabIndex && /* @__PURE__ */ jsxs("div", { className: `${check === "ar" ? "text-right" : "text-left"} my-[20px]`, children: [
              /* @__PURE__ */ jsx("h2", { className: `${darkMode ? "text-lightText" : "text-darkText"} text-3xl text-center mb-3 font-bold`, children: check === "eng" ? `${imam.imam_english_name}: The Imam of Hadith and Sunnah` : check === "fr" ? `${imam.imam_frensh_name}: Imam de Hadith et Sunnah` : check === "ar" ? `${imam.imam_arabic_name}: إمام الحديث والسنة` : null }),
              /* @__PURE__ */ jsx("p", { className: `${darkMode ? "text-gray-400" : "text-darkText"} text-lg mt-[40px]`, children: check === "eng" ? imam.imams_bios.eng_lineage : check === "ar" ? imam.imams_bios.ar_lineage : check === "fr" ? imam.imams_bios.fr_lineage : null }),
              /* @__PURE__ */ jsx("h3", { className: `${darkMode ? "text-lightText" : "text-darkText"} text-xl mt-[40px]   font-bold`, children: check === "eng" ? `His birth and early life` : check === "fr" ? `Sa naissance et sa jeunesse` : check === "ar" ? `ولادته وحياته المبكرة` : null }),
              /* @__PURE__ */ jsx("p", { className: `${darkMode ? "text-gray-400" : "text-darkText"} text-lg `, children: check === "eng" ? imam.imams_bios.eng_birth_life : check === "ar" ? imam.imams_bios.ar_birth_life : check === "fr" ? imam.imams_bios.fr_birth_life : null }),
              /* @__PURE__ */ jsx("h3", { className: `${darkMode ? "text-lightText" : "text-darkText"} text-xl mt-[40px]  font-bold`, children: check === "eng" ? `His pursuit of knowledge` : check === "fr" ? `Sa quête de connaissances` : check === "ar" ? `سعيه إلى العلم` : null }),
              /* @__PURE__ */ jsx("p", { className: `${darkMode ? "text-gray-400" : "text-darkText"} text-lg `, children: check === "eng" ? imam.imams_bios.eng_pursuit_of_knowledge : check === "ar" ? imam.imams_bios.ar_pursuit_of_knowledge : check === "fr" ? imam.imams_bios.fr_pursuit_of_knowledge : null }),
              /* @__PURE__ */ jsx("h3", { className: `${darkMode ? "text-lightText" : "text-darkText"} text-xl mt-[40px]   font-bold`, children: check === "eng" ? `His death` : check === "fr" ? `Sa mort` : check === "ar" ? `وفاته` : null }),
              /* @__PURE__ */ jsx("p", { className: `${darkMode ? "text-gray-400" : "text-darkText"} text-lg `, children: check === "eng" ? imam.imams_bios.eng_death : check === "ar" ? imam.imams_bios.ar_death : check === "fr" ? imam.imams_bios.fr_death : null })
            ] })
          ) }) }),
          /* @__PURE__ */ jsxs("div", { className: "w-[20%] float-right flex flex-col gap-2  mx-auto mt-5", children: [
            hadeetData == null ? void 0 : hadeetData.imams.map(
              (imam, i) => selectedTabIndex === imam.id && /* @__PURE__ */ jsx("h2", { className: `${darkMode ? "text-lightText bg-darkText" : "text-darkText bg-lightBg"} text-xl font-bold py-2 text-center shadow-md shadow-purple-900 rounded-[20px] mb-2`, children: check === "eng" ? imam.eng_saheeh_name : check === "ar" ? imam.ar_saheeh_name : check === "fr" ? imam.fr_saheeh_name : null }, i)
            ),
            /* @__PURE__ */ jsx("div", { className: "", children: hadeetData == null ? void 0 : hadeetData.imams.map(
              (imam, i) => {
                var _a;
                return selectedTabIndex === imam.id && ((_a = imam.books) == null ? void 0 : _a.map((book, j) => (
                  // <h2 key={i} className="imam">
                  //     {book.book_english_name}
                  // </h2>
                  /* @__PURE__ */ jsx(LinkComponent, { href: `/hadeeth/book/${book.id}`, value: check === "eng" ? book.book_english_name : check === "fr" ? book.book_french_name : check === "ar" ? book.book_arabic_name : null }, i)
                )));
              }
            ) })
          ] })
        ] })
      ] })
    ] })
  ] }) });
};
export {
  HadeethPage as default
};
