import { jsxs, jsx } from "react/jsx-runtime";
import React, { useContext } from "react";
import { Head } from "@inertiajs/inertia-react";
import { FaKaaba, FaGalacticRepublic } from "react-icons/fa/index.esm.js";
import { L as LayoutApp, a as SubFooter } from "./LayoutApp-75VrxIRl.js";
import { D as DarkModeContext } from "./DarkModeContext-YHL6TNaC.js";
import { u as useSearchBarContext } from "./SearchBarContext-pj9rNtoS.js";
import "@inertiajs/react";
import "@headlessui/react";
import "alpinejs";
import "react-select";
import "react-icons/fa6/index.esm.js";
import "react-icons/bi/index.esm.js";
import "react-icons/ti/index.esm.js";
import "./SidebarContext-P_-bml5L.js";
const Fsurah = ({ surah }) => {
  const { darkMode } = useContext(DarkModeContext);
  const { check } = useSearchBarContext();
  return /* @__PURE__ */ jsxs(React.Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { children: /* @__PURE__ */ jsx("title", { children: "Individual-Quran" }) }),
    /* @__PURE__ */ jsxs(LayoutApp, { children: [
      /* @__PURE__ */ jsx("div", { className: `p-16 `, children: /* @__PURE__ */ jsxs("div", { className: `${darkMode ? "bg-grayBg text-lightText " : "bg-lightBg text-darkText"} rounded-md shadow-2xl md:w-[70%] mx-auto mt-[150px] p-5  `, children: [
        check === "ar" ? /* @__PURE__ */ jsxs("div", { className: "md:w-full flex md:flex-col", children: [
          /* @__PURE__ */ jsxs("div", { className: `${darkMode ? "border-lightBg  " : "border-darkBg"} flex md:flex-row items-center md:justify-center mb-5 border-b-[1px]  mt-[100px]  mx-[250px]`, children: [
            /* @__PURE__ */ jsx(FaKaaba, { className: "-mt-20 mx-5", size: 30 }),
            /* @__PURE__ */ jsx("h2", { className: "my-5 -mt-[100px] text-6xl bold text-center pt-5 font-quranTitleFont ", children: surah.arabicName }),
            /* @__PURE__ */ jsx(FaKaaba, { className: "-mt-20 mx-5", size: 30 })
          ] }),
          /* @__PURE__ */ jsxs("ul", { className: "mt-3 flex flex-col md:flex-col   md:justify-center md:w-[80%] mx-auto", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex flex-row md:flex-row md:justify-center  align-middle items-center text-xl mb-3", children: [
              /* @__PURE__ */ jsx(FaGalacticRepublic, { className: "text-center " }),
              /* @__PURE__ */ jsx("li", { className: "m-1 text-2xl", children: "بسم الله الرحمان الرحيم" }),
              /* @__PURE__ */ jsx(FaGalacticRepublic, { className: "text-center" })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "mt-3 flex flex-row md:flex-row-reverse  md:flex-wrap  md:w-[80%] mx-auto", children: surah.ayahs.map((ayah, i) => /* @__PURE__ */ jsx("div", { className: "flex flex-col md:flex-row md:align-middle mb-3", children: /* @__PURE__ */ jsx("div", { className: "flex flex-row md:flex-row ", children: /* @__PURE__ */ jsx("li", { className: "mx-1 text-2xl text-right", children: ayah.content + " (" + (i + 1) + ")" }, i) }) })) })
          ] })
        ] }) : check === "fr" ? /* @__PURE__ */ jsxs("div", { className: "md:w-full flex md:flex-col", children: [
          /* @__PURE__ */ jsxs("div", { className: `${darkMode ? "border-lightBg  " : "border-darkBg"} flex md:flex-row items-center md:justify-center mb-5 border-b-[1px]  mx-[250px]`, children: [
            /* @__PURE__ */ jsx(FaKaaba, { className: "-mt-20 mx-5", size: 30 }),
            /* @__PURE__ */ jsx("h2", { className: "my-5 -mt-[100px] text-6xl bold text-center pt-5 font-quranTitleFont ", children: surah.arabicName }),
            /* @__PURE__ */ jsx(FaKaaba, { className: "-mt-20 mx-5", size: 30 })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "flex  md:justify-center md:w-full mx-auto ", children: /* @__PURE__ */ jsx("audio", { controls: true, children: /* @__PURE__ */ jsx("source", { src: surah.surahaudio.audio, type: "audio/mp3" }) }) }),
          /* @__PURE__ */ jsxs("ul", { className: "mt-3 flex flex-col md:flex-col   md:justify-center md:w-[100%] mx-auto", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex flex-row md:flex-row md:justify-center text-center align-middle items-center text-xl mb-3", children: [
              /* @__PURE__ */ jsx(FaGalacticRepublic, { className: "text-center " }),
              /* @__PURE__ */ jsx("li", { className: "m-1", children: "Au nom du Dieu le plus miséricordieux, le plus miséricordieux" }),
              /* @__PURE__ */ jsx(FaGalacticRepublic, { className: "text-center" })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "mt-3 flex flex-row md:flex-row md:flex-wrap md:justify-center  md:w-[100%] ", children: surah.ayahs.map((ayah, i) => /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row-reverse md:align-middle items-center  mb-1", children: [
              /* @__PURE__ */ jsx("span", { className: `${darkMode ? "bg-lightBg text-darkText " : "bg-darkBg text-lightText"} text-md px-2   rounded-full`, children: i + 1 }),
              /* @__PURE__ */ jsx("div", { className: "flex align-middle items-center", children: /* @__PURE__ */ jsx("li", { className: "m-1 text-xl", children: ayah.frenshContent }, i) })
            ] })) })
          ] })
        ] }) : check === "eng" ? /* @__PURE__ */ jsxs("div", { className: "md:w-full flex md:flex-col", children: [
          /* @__PURE__ */ jsxs("div", { className: `${darkMode ? "border-lightBg  " : "border-darkBg"} flex md:flex-row items-center md:justify-center mb-5 border-b-[1px]  mx-[250px]`, children: [
            /* @__PURE__ */ jsx(FaKaaba, { className: "-mt-20 mx-5", size: 30 }),
            /* @__PURE__ */ jsx("h2", { className: "my-5 -mt-[100px] text-6xl bold text-center pt-5 font-quranTitleFont ", children: surah.arabicName }),
            /* @__PURE__ */ jsx(FaKaaba, { className: "-mt-20 mx-5", size: 30 })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "flex  md:justify-center md:w-full mx-auto ", children: /* @__PURE__ */ jsx("audio", { controls: true, children: /* @__PURE__ */ jsx("source", { src: surah.surahaudio.audio, type: "audio/mp3" }) }) }),
          /* @__PURE__ */ jsxs("ul", { className: "mt-3 flex flex-col md:flex-col   md:justify-center md:w-[100%] mx-auto", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex flex-row md:flex-row md:justify-center text-center align-middle items-center text-xl mb-3", children: [
              /* @__PURE__ */ jsx(FaGalacticRepublic, { className: "text-center " }),
              /* @__PURE__ */ jsx("li", { className: "m-1", children: "In the name of god most gracious most merciful" }),
              /* @__PURE__ */ jsx(FaGalacticRepublic, { className: "text-center" })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "mt-3 flex flex-row md:flex-row md:flex-wrap md:justify-center  md:w-[100%] ", children: surah.ayahs.map((ayah, i) => /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row-reverse md:align-middle items-center  mb-1", children: [
              /* @__PURE__ */ jsx("span", { className: `${darkMode ? "bg-lightBg text-darkText " : "bg-darkBg text-lightText"} text-md px-2   rounded-full`, children: i + 1 }),
              /* @__PURE__ */ jsx("div", { className: "flex align-middle items-center", children: /* @__PURE__ */ jsx("li", { className: "m-1 text-xl", children: ayah.englishContent }, i) })
            ] })) })
          ] })
        ] }) : null,
        check === "ar" ? /* @__PURE__ */ jsxs("div", { className: "flex md:justify-center mt-10", children: [
          /* @__PURE__ */ jsxs("span", { children: [
            "[",
            surah.arabicName,
            "]"
          ] }),
          /* @__PURE__ */ jsxs("span", { children: [
            "-[",
            surah.versesNumber + " آيات ",
            "]-"
          ] }),
          /* @__PURE__ */ jsxs("span", { children: [
            "[",
            surah.revelationType === "meccan" ? "مكية" : "مدنية",
            "]"
          ] })
        ] }) : check === "fr" ? /* @__PURE__ */ jsxs("div", { className: "flex md:justify-center mt-10", children: [
          /* @__PURE__ */ jsxs("span", { children: [
            "[",
            surah.frenshNameTranslation,
            "]"
          ] }),
          /* @__PURE__ */ jsxs("span", { children: [
            "-[",
            surah.versesNumber + " verses",
            "]-"
          ] }),
          /* @__PURE__ */ jsxs("span", { children: [
            "[",
            surah.revelationType,
            "]"
          ] })
        ] }) : check === "eng" ? /* @__PURE__ */ jsxs("div", { className: "flex md:justify-center  mt-10", children: [
          /* @__PURE__ */ jsxs("span", { children: [
            "[",
            surah.englishName,
            "]"
          ] }),
          /* @__PURE__ */ jsxs("span", { children: [
            "-[",
            surah.versesNumber + " verses",
            "]-"
          ] }),
          /* @__PURE__ */ jsxs("span", { children: [
            "[",
            surah.revelationType,
            "]"
          ] })
        ] }) : null
      ] }) }),
      /* @__PURE__ */ jsx(SubFooter, {})
    ] })
  ] });
};
export {
  Fsurah as default
};
