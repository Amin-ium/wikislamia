import { jsxs, jsx } from "react/jsx-runtime";
import React, { useContext, useState } from "react";
import { Head, Link } from "@inertiajs/inertia-react";
import { L as LayoutApp } from "./LayoutApp-75VrxIRl.js";
import { u as useSearchBarContext } from "./SearchBarContext-pj9rNtoS.js";
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
function Surah({ surah, next, previous }) {
  var _a;
  const { darkMode } = useContext(DarkModeContext);
  useState(0);
  useState(false);
  const { check, setCheck } = useSearchBarContext();
  const [fully, setFully] = useState("Request Full Screen");
  const [currentSurah, setCurrentSurah] = useState(surah);
  const audios = [];
  function audiosFun() {
    for (let i = 0; i < 115; i++) {
      audios.push(`https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/${i}.mp3`);
    }
  }
  audiosFun();
  console.log(audios);
  document.getElementById("myFullScreen");
  const isFullscreen = document.fullscreenElement;
  function handleFullScreen() {
    let elem = document.getElementById("myFullScreen");
    if (!document.fullscreenElement) {
      setFully("Exit Full Screen");
      elem.requestFullscreen().catch((err) => {
        alert(
          `Error attempting to enable fullscreen mode: ${err.message} (${err.name})`
        );
      });
    } else {
      document.exitFullscreen();
      setFully("Set Full Screen");
    }
  }
  const handleId = () => {
    let surahId = 0;
    for (let index = currentSurah.id; index < 115; index++) {
      return surahId[index];
    }
    return surahId;
  };
  console.log(handleId.surahId);
  console.log(next);
  return /* @__PURE__ */ jsxs(React.Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { children: /* @__PURE__ */ jsx("title", { children: check === "ar" ? currentSurah == null ? void 0 : currentSurah.arabicName : check === "eng" ? currentSurah == null ? void 0 : currentSurah.englishName : check === "fr" ? currentSurah == null ? void 0 : currentSurah.englishName : "" }) }),
    /* @__PURE__ */ jsx(LayoutApp, { children: /* @__PURE__ */ jsxs(
      "div",
      {
        id: "myFullScreen",
        className: ` w-[100%] md:w-[80%] h-auto mx-auto mt-20 rounded-lg  p-[40px] ${isFullscreen ? "overflow-hidden " : "overflow-scroll "} ${darkMode ? "elementDark" : "elementLight"}  `,
        children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              className: ` ${fully ? "fixed  top-[100px]" : "absolute top-[100px]"} ${darkMode ? "text-lightText bg-darkText" : "text-darkText bg-lightBg"} border border-bg-lighText shadow-lg align-middle items-center flex shadow-violet-300 rounded-md p-1 h-[30px] font-bold `,
              onClick: handleFullScreen,
              children: fully
            }
          ),
          /* @__PURE__ */ jsx("h2", { className: `my-3 text-4xl font-bold text-center pt-10 ${darkMode ? "text-lightText" : "text-darkText"} `, children: check === "ar" ? currentSurah == null ? void 0 : currentSurah.arabicName : check === "fr" ? (currentSurah == null ? void 0 : currentSurah.englishName) + " - " + (currentSurah == null ? void 0 : currentSurah.frenshNameTranslation) : check === "eng" ? (currentSurah == null ? void 0 : currentSurah.englishName) + " - " + (currentSurah == null ? void 0 : currentSurah.englishNameTranslation) : null }),
          /* @__PURE__ */ jsxs("div", { className: `flex ${check === "ar" ? "flex-row-reverse" : "flex-row"} items-center gap-5 w-[80%] mx-auto justify-center `, children: [
            /* @__PURE__ */ jsx(Link, { href: `/quran/surah/${surah.id === 1 ? 114 : surah.id - 1}`, className: `${darkMode ? "text-lightText bg-darkText" : "text-darkText bg-lightBg"}   border border-bg-lighText shadow-lg align-middle items-center flex shadow-violet-300 rounded-md p-1 h-[30px] font-bold`, children: check === "ar" ? "السابق" : check === "eng" ? "Previous" : check === "fr" ? "Précédent" : null }),
            /* @__PURE__ */ jsx("div", { className: "App w-1/3  ", children: /* @__PURE__ */ jsx("div", { className: "w-full   relative ", children: /* @__PURE__ */ jsx(SurahAudioPlayer, { audioSrc: surah.surahaudio.audio }) }) }),
            /* @__PURE__ */ jsx(Link, { href: `/quran/surah/${surah.id > 0 && surah.id < 114 ? surah.id + 1 : 1}`, className: `${darkMode ? "text-lightText bg-darkText" : "text-darkText bg-lightBg"}  border border-bg-lighText shadow-lg  px-[20px] flex align-middle  items-center shadow-violet-300 rounded-md p-1 h-[30px] font-bold`, children: check === "ar" ? "التالي" : check === "eng" ? "Next" : check === "fr" ? "Suivant" : null })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: `flex flex-row gap-3 justify-center ${darkMode ? "text-gray-300" : "text-darkText"} mb-[40px] `, children: [
            /* @__PURE__ */ jsxs("p", { children: [
              "[",
              (currentSurah == null ? void 0 : currentSurah.revelationType) === "Medinan" && check === "ar" ? "مدنية" : (currentSurah == null ? void 0 : currentSurah.revelationType) === "Meccan" && check === "ar" ? "مكية" : currentSurah == null ? void 0 : currentSurah.revelationType,
              "]"
            ] }),
            /* @__PURE__ */ jsxs("p", { children: [
              "[",
              (currentSurah == null ? void 0 : currentSurah.versesNumber) && check === "ar" ? (currentSurah == null ? void 0 : currentSurah.versesNumber) + " :عدد الآيات" : (currentSurah == null ? void 0 : currentSurah.versesNumber) && check === "eng" ? "Verses Number: " + (currentSurah == null ? void 0 : currentSurah.versesNumber) : (currentSurah == null ? void 0 : currentSurah.versesNumber) && check === "fr" ? "Nombre de versets: " + (currentSurah == null ? void 0 : currentSurah.versesNumber) : null,
              "]"
            ] }),
            /* @__PURE__ */ jsxs("p", { children: [
              "[",
              (currentSurah == null ? void 0 : currentSurah.numberInQuran) && check === "ar" ? (currentSurah == null ? void 0 : currentSurah.numberInQuran) + " :الترتيب في المصحف" : (currentSurah == null ? void 0 : currentSurah.numberInQuran) && check === "eng" ? " Order of Surah: " + (currentSurah == null ? void 0 : currentSurah.versesNumber) : (currentSurah == null ? void 0 : currentSurah.versesNumber) && check === "fr" ? "Ordre du Surah: " + surah.versesNumber : null,
              "]"
            ] })
          ] }),
          /* @__PURE__ */ jsx("p", { className: `text-center my-3 nabi font-bold text-lg underline ${darkMode ? "text-lightText" : "text-darkTExt"} ayahNumber `, children: check === "ar" ? currentSurah.id === 1 ? "البسملة هي أول آية من سورة ٱلْفَاتِحَةِ" : currentSurah.id === 9 ? "سورة التَّوۡبَةِ لا تحتوي على البسملة" : "بِسمِ اللَّهِ الرَّحمـٰنِ الرَّحيمِ" : check === "eng" ? currentSurah.id === 1 ? "The Basmalah is the first verse of Surat Al-Fatihah" : currentSurah.id === 9 ? "Surat Al-Tawbah does not contain the basmalah" : "In the name of allah the most gracious the most merciful" : check === "fr" ? currentSurah.id === 1 ? "Al-Basmalah est le premier verset de la sourate Al-Fatihah" : currentSurah.id === 9 ? "Surat sourate Al-Tawbah ne contient pas al-basmala" : "Au nom d'Allah le plus miséricordieux le plus miséricordieux" : null }),
          /* @__PURE__ */ jsx("div", { className: " flex flex-col   nabi  gap-2 shadow-2xl shadow-darkText rounded-[20px] p-4 my-5", children: (currentSurah == null ? void 0 : currentSurah.ayahs) && ((_a = currentSurah.ayahs) == null ? void 0 : _a.map((ayah, i) => /* @__PURE__ */ jsxs(
            "div",
            {
              className: `flex flex-col justify-center items-center border-b-[1px] border-[#00000020] gap-2  w-[80%] mx-auto font-semibold text-lg  `,
              children: [
                /* @__PURE__ */ jsx("p", { className: `${darkMode ? "text-lightText" : "text-darkText"} text-center`, children: check === "ar" ? ayah.content || "No content available" : check === "fr" ? ayah.frenshContent || "No content available" : check === "eng" ? ayah.englishContent || "No content available" : null }, i),
                /* @__PURE__ */ jsx("span", { className: ` ${darkMode ? "text-lightText" : "text-darkText"} ayahNumber text-center ms-1`, children: ayah.verseNumber })
              ]
            }
          ))) })
        ]
      }
    ) })
  ] });
}
export {
  Surah as default
};
