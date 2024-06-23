import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { D as DarkModeContext } from "./DarkModeContext-YHL6TNaC.js";
import { u as useSearchBarContext } from "./SearchBarContext-pj9rNtoS.js";
import React, { useContext, useState, useRef, useEffect } from "react";
import { FaSearch } from "react-icons/fa/index.esm.js";
import { Link } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
const CheckedRadio = () => {
  const { check, setCheck } = useSearchBarContext();
  const { darkMode } = useContext(DarkModeContext);
  console.log(check);
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("form", { className: "md:flex md:flex-col md:justify-center xl:flex xl:flex-col xl:justify-center", "x-data": "{dropDownOpen: false}", children: /* @__PURE__ */ jsx("div", { class: "md:flex md:flex-col md:justify-center lg:flex lg:flex-col lg:justify-center xl:flex xl:flex-col xl:justify-center", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-row my-2 justify-center", children: [
    /* @__PURE__ */ jsxs("div", { class: "flex items-center mr-4  p-1 rounded", children: [
      /* @__PURE__ */ jsx("label", { for: "arabic", class: `${darkMode ? "text-lightText" : "text-darkText"} mr-2 text-sm font-medium `, children: "العربية" }),
      /* @__PURE__ */ jsx("input", { type: "radio", checked: check === "ar" ? true : false, class: "w-4 h-4 text-purple-500  border-gray-300 rounded focus:ring-purple-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600", value: "ar", name: "checkbox", id: "arabic", onClick: () => setCheck("ar") })
    ] }),
    /* @__PURE__ */ jsxs("div", { class: "flex items-center mr-4  p-1 rounded", children: [
      /* @__PURE__ */ jsx("input", { type: "radio", checked: check === "fr" ? true : false, class: "w-4 h-4 text-purple-500 border-gray-300 rounded focus:ring-purple-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600", value: "fr", name: "checkbox", id: "french", onClick: () => setCheck("fr") }),
      /* @__PURE__ */ jsx("label", { for: "french", class: `${darkMode ? "text-lightText" : "text-darkText"} ml-2 text-sm font-medium`, children: "Français " })
    ] }),
    /* @__PURE__ */ jsxs("div", { class: "flex items-center mr-4   p-1 rounded", children: [
      /* @__PURE__ */ jsx("input", { type: "radio", checked: check === "eng" ? true : false, class: "w-4 h-4 text-purple-600  border-gray-300 rounded focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600", value: "eng", name: "checkbox", id: "english", onClick: () => setCheck("eng") }),
      /* @__PURE__ */ jsx("label", { for: "english", class: `${darkMode ? "text-lightText" : "text-darkText"} ml-2 text-sm font-medium `, children: "English" })
    ] })
  ] }) }) }) });
};
const headerImgDark = "/build/assets/imgDark-Rx2-hm3E.svg";
const headerImgLight = "/build/assets/OBJECTS-ciKMZbwY.svg";
const SearchbarEng = ({ verses, surahs }) => {
  const { darkMode } = useContext(DarkModeContext);
  const { check, setCheck } = useSearchBarContext();
  const [searchData, setSearchData] = useState([]);
  useState([]);
  useState([]);
  const [value, setValue] = useState("");
  useState(verses);
  useState([]);
  useState(false);
  useState("Choose a Langage ---- إختر اللغة");
  const [opened, setOpened] = useState(true);
  const inputRef = useRef(null);
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setDropdownVisible(false);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);
  const handleInputClick = () => {
    setDropdownVisible(true);
  };
  const onChange = (event) => {
    if (event.target.value === "") {
      setValue("");
    } else {
      setValue(event.target.value);
    }
  };
  const onSearch = async (searchTerm) => {
    if (value === "") {
      console.log("empty");
    } else {
      setValue(searchTerm);
      const filteredData = verses.filter((item) => {
        if (check === "eng") {
          const lowerCaseSearchTerm = searchTerm.toLowerCase();
          const englishContent = item.englishContent.toLowerCase();
          return lowerCaseSearchTerm && englishContent.includes(lowerCaseSearchTerm);
        } else if (check === "ar") {
          const searchTerm2 = value.replace(
            /([^\u0621-\u063A\u0641-\u064A\u0660-\u0669a-zA-Z 0-9])/g,
            ""
          );
          const content = item.content.replace(
            /([^\u0621-\u063A\u0641-\u064A\u0660-\u0669a-zA-Z 0-9])/g,
            ""
          );
          const searchItem = content.replace(
            /([^\u0621-\u063A\u0641-\u064A\u0660-\u0669a-zA-Z 0-9])/g,
            ""
          );
          return searchTerm2 && searchItem.includes(searchTerm2) && searchItem !== searchTerm2;
        } else if (check === "fr") {
          const lowerCaseSearchTerm = searchTerm.toLowerCase();
          const englishContent = item.frenshContent.toLowerCase();
          return lowerCaseSearchTerm && englishContent.includes(lowerCaseSearchTerm);
        }
      });
      setSearchData(filteredData);
      try {
        const response = await Inertia.post(
          route("quran.searchResults"),
          {
            searchData: searchTerm
          }
        );
        console.log(response);
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };
  console.log(verses);
  return /* @__PURE__ */ jsx(React.Fragment, { children: /* @__PURE__ */ jsx(
    "form",
    {
      autocomplete: "off",
      onSubmit: (e) => {
        e.preventDefault();
        onSearch(value);
      },
      className: "  ",
      "x-data": "{dropDownOpen: false}",
      children: /* @__PURE__ */ jsx("div", { class: "relative  flex flex-col justify-center", children: /* @__PURE__ */ jsxs("div", { className: "relative h-[45px] w-[100%] sm:h-[45px] sm:w-[100%] md:h-[45px] md:w-[100%] lg:h-[45px]  xl:h-[45px] max-w-[750px] sm:max-w-[750px] md:max-w-[750px] lg:max-w-[850px] xl:max-w-[850px] lg:w-[100%] xl:w-[100%] mx-auto", children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            name: "search",
            type: "text",
            ref: inputRef,
            autocomplete: "false",
            onClick: handleInputClick,
            className: `relative z-13 bg-[#EBE4F3] shadow-2xl shadow-purple-950 rounded-l-lg h-[30px] w-[100%] sm:h-[100%] sm:w-[100%] md:h-[100%] md:w-[100%] lg:h-[100%] lg:w-[100%] xl:h-[100%] xl:w-[100%] py-[15px] text-sm text-gray-900
                              rounded-r-lg  border-l-2  focus:outline-purple-700 placeholder:text-sm xl:placeholder:text-lg placeholder:text-darkText  px-2  `,
            placeholder: check === "eng" ? "Search by Word or Verse" : check === "ar" ? "إبحث عن كلمة او آية" : check === "fr" ? "Chercher par mot ou verset" : null,
            value,
            onChange,
            style: {
              textAlign: check === "ar" ? "right" : check === "eng" || check === "fr" ? "left" : null
            }
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "submit",
            class: `w-[24px] ${check === "ar" ? "right-[10px] top-[10px] sm:left-[10px] sm:top-[10px] md:left-[10px] md:top-[10px] lg:left-[10px] lg:top-[10px] xl:left-[10px] xl:top-[10px]" : check === "eng" || check === "fr" ? "right-[10px] top-[10px] sm:right-[10px] sm:top-[10px] md:right-[10px] md:top-[10px] lg:right-[10px] lg:top-[10px] xl:right-[10px] xl:top-[10px]" : null} absolute  flex  text-gray-900  `,
            children: /* @__PURE__ */ jsx(
              FaSearch,
              {
                size: 24,
                className: " w-[24px]  text-gray-900 z-20  "
              }
            )
          }
        ),
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: `absolute     flex flex-col    max-h-[200px]  overflow-y-scroll rounded  top-[33px] sm:top-[44px]   w-[100%] md:w-[100%]  lg:w-[100%] xl:w-[100%] `,
            children: [
              check === "eng" && verses && verses.filter((item) => {
                const searchTerm = value.toLowerCase();
                const lowerCaseSearchTerm = searchTerm.toLowerCase();
                const searchContent = item.englishContent.toLowerCase();
                return lowerCaseSearchTerm && searchContent.includes(
                  lowerCaseSearchTerm
                );
              }).map(
                (verse, i) => isDropdownVisible && /* @__PURE__ */ jsxs(
                  Link,
                  {
                    href: `/quran/${verse.id}`,
                    className: `${opened ? "block" : "hidden"} ${darkMode ? "bg-grayBg text-lightText hover:bg-lightBg hover:text-darkText" : "bg-lightBg text-darkText hover:bg-darkText hover:text-lightText"} px-3 pt-2 border-b-gray-300 border-b-[1px] `,
                    children: [
                      verse.englishContent,
                      " ..."
                    ]
                  },
                  i
                )
              ),
              check === "ar" && verses && verses.filter((item) => {
                const searchTerm = value.toLowerCase();
                const lowerCaseSearchTerm = searchTerm.toLowerCase();
                const searchContent = item.content.toLowerCase();
                return lowerCaseSearchTerm && searchContent.includes(
                  lowerCaseSearchTerm
                );
              }).map(
                (verse, i) => isDropdownVisible && /* @__PURE__ */ jsxs(
                  Link,
                  {
                    href: `/quran/${verse.id}`,
                    className: `${darkMode ? "bg-grayBg text-lightText hover:bg-lightBg hover:text-darkText" : "bg-lightBg text-darkText hover:bg-darkText hover:text-lightText"} px-3 pt-2 border-b-gray-300 border-b-[1px] `,
                    children: [
                      verse.content,
                      " ..."
                    ]
                  },
                  i
                )
              ),
              check === "fr" && verses && verses.filter((item) => {
                const searchTerm = value.toLowerCase();
                const lowerCaseSearchTerm = searchTerm.toLowerCase();
                const searchContent = item.frenshContent.toLowerCase();
                console.log(
                  lowerCaseSearchTerm && searchContent.includes(
                    lowerCaseSearchTerm
                  )
                );
                return lowerCaseSearchTerm && searchContent.includes(
                  lowerCaseSearchTerm
                );
              }).map(
                (verse, i) => isDropdownVisible && /* @__PURE__ */ jsxs(
                  Link,
                  {
                    href: `/quran/${verse.id}`,
                    className: `${darkMode ? "bg-grayBg text-lightText hover:bg-lightBg hover:text-darkText" : "bg-lightBg text-darkText hover:bg-darkText hover:text-lightText"} px-3 pt-2 border-b-gray-300 border-b-[1px] `,
                    children: [
                      verse.frenshContent,
                      " ..."
                    ]
                  },
                  i
                )
              )
            ]
          }
        )
      ] }) })
    }
  ) });
};
export {
  CheckedRadio as C,
  SearchbarEng as S,
  headerImgDark as a,
  headerImgLight as h
};
