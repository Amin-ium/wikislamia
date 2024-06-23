import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { P as Pagination } from "./Pagination-7t3xnya6.js";
import { D as DarkModeContext } from "./DarkModeContext-YHL6TNaC.js";
import "@inertiajs/react";
import { useContext, useState, useEffect } from "react";
import { L as LayoutApp } from "./LayoutApp-75VrxIRl.js";
import { usePage, Head } from "@inertiajs/inertia-react";
import { u as useSearchBarContext } from "./SearchBarContext-pj9rNtoS.js";
import "moment";
import "./SidebarContext-P_-bml5L.js";
import "@headlessui/react";
import "react-icons/fa/index.esm.js";
import "alpinejs";
import "react-select";
import "react-icons/fa6/index.esm.js";
import "react-icons/bi/index.esm.js";
import "react-icons/ti/index.esm.js";
const SurahCard = ({
  surahNumber,
  englishName,
  translatedName,
  arabicName,
  versetsLength,
  src
}) => {
  const { darkMode } = useContext(DarkModeContext);
  const [loading, setLoading] = useState(true);
  const [cardStyle, setCardStyle] = useState("");
  useEffect(() => {
    if (darkMode) {
      setCardStyle("text-lightText");
    } else {
      setCardStyle("text-darkText");
    }
  }, [darkMode]);
  useEffect(() => {
    const handleWindowLoad = () => {
      setLoading(false);
    };
    window.addEventListener("load", handleWindowLoad);
    if (window.addEventListener("load", handleWindowLoad)) {
      return () => {
        window.removeEventListener("load", handleWindowLoad);
      };
    }
  }, []);
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: ` ${darkMode ? "bg-darkText text-lightText shadow-md  shadow-indigo-400 borderStyle" : "bg-lightText text-darkText shadow-lg  shadow-indigo-900 borderStyle"}  h-[70px] w-[100%] flex flex-row
     justify-center items-center rounded-bl-3xl rounded-tr-3xl   relative overflow-hidden `,
      children: [
        /* @__PURE__ */ jsx("div", { className: `${darkMode ? "lightBorder" : "darkBorder"} h-[50%] w-[100%]     absolute  cardUi   ` }),
        /* @__PURE__ */ jsx("div", { className: `${darkMode ? "bg-darkText" : "bg-lightText"} h-[97%]  w-[97%]   absolute   rounded  `, children: /* @__PURE__ */ jsx("div", { className: `relative h-[100%]  w-[100%]  `, children: /* @__PURE__ */ jsxs("div", { className: ` h-full w-full  flex flex-row justify-between items-center p-4`, children: [
          /* @__PURE__ */ jsxs("div", { className: "flex flex-row gap-[35px] ", children: [
            /* @__PURE__ */ jsxs("div", { className: "relative flex justify-center align-middle items-center ms-[20px] ", children: [
              /* @__PURE__ */ jsx("p", { className: `${surahNumber > 99 ? "text-md" : "text-xl"}  absolute   z-10 font-bold `, children: surahNumber }),
              /* @__PURE__ */ jsx("span", { className: `h-[30px] w-[30px] ${darkMode ? "bg-grayBg" : "bg-gray-400"} rounded absolute rotate-45 z-5  ` })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "text-sm font-bold", children: englishName }),
              /* @__PURE__ */ jsx("p", { className: "text-xs", children: translatedName })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm font-bold text-center", children: arabicName }),
            /* @__PURE__ */ jsx("p", { className: "text-xs", children: versetsLength + " versets" })
          ] })
        ] }) }) }),
        /* @__PURE__ */ jsx("h1", { className: `cardStyle`, children: "skfjnlsndfls,f" })
      ]
    }
  );
};
const quranBanner = "/build/assets/quranBanner-qiaLqfz9.svg";
const separator = "/build/assets/rseparator-7aB8Pi9J.png";
const QuranPageBanner = ({ text }) => {
  useSearchBarContext();
  const { toggle, darkMode } = useContext(DarkModeContext);
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "w-full flex flex-col justify-center text-center -mt-[150px] mb-[100px]", children: [
    /* @__PURE__ */ jsx("img", { src: quranBanner, className: "h-[350px] w-[550px]  mx-auto", alt: "" }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-row items-center align-middle justify-center -mt-[50px]", children: [
      /* @__PURE__ */ jsx("img", { src: separator, alt: "", className: "rotate-180 " }),
      /* @__PURE__ */ jsx("p", { className: `${darkMode ? "text-lightText" : "text-darkText"} shadow-purple-300 shadow-lg para text-xl w-2/3`, children: text }),
      /* @__PURE__ */ jsx("img", { src: separator, alt: "" })
    ] })
  ] }) });
};
const QuranPage = ({ surahs, items, surahAudios }) => {
  const { check, setCheck } = useSearchBarContext();
  useContext(DarkModeContext);
  usePage().props;
  console.log(Array(surahAudios));
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs(LayoutApp, { children: [
    /* @__PURE__ */ jsx(Head, { children: /* @__PURE__ */ jsx("title", { children: "Quran Page" }) }),
    /* @__PURE__ */ jsxs("div", { className: "my-[200px] w-[80%] mx-auto text-darkText ", children: [
      /* @__PURE__ */ jsx(QuranPageBanner, { text: check === "ar" ? "يقال لصاحب القرآن: اقرأ، وارْقَ، ورتّل كما كنت ترتّل في الدنيا؛ فإن منزلتك عند آخر آية تقرؤها" : check === "eng" ? "It will said to the the reader of the Qur’an: Read, ascend, and recite as you recited in this world. Your status is at the last verse you recite" : check === "fr" ? "Il dira au lecteur du Coran : Lis, monte et récite comme tu l’as récité dans ce monde. Votre statut est au dernier verset que vous récitez" : "يقال لصاحب القرآن: اقرأ، وارْقَ، ورتّل كما كنت ترتّل في الدنيا؛ فإن منزلتك عند آخر آية تقرؤها" }),
      /* @__PURE__ */ jsx("div", { className: "  ", children: /* @__PURE__ */ jsx(Pagination, { Component: SurahCard, items: surahs }) })
    ] })
  ] }) });
};
export {
  QuranPage as default
};
