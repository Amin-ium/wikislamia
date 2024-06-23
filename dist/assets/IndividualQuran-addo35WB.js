import { jsxs, jsx } from "react/jsx-runtime";
import React, { useState, useRef, useEffect, useContext } from "react";
import { Link, Head } from "@inertiajs/inertia-react";
import { L as LayoutApp } from "./LayoutApp-75VrxIRl.js";
import { D as DarkModeContext } from "./DarkModeContext-YHL6TNaC.js";
import { u as useSearchBarContext } from "./SearchBarContext-pj9rNtoS.js";
import "./AudioPlayer-x7q2zQL1.js";
import { FaPlay, FaPause } from "react-icons/fa/index.esm.js";
import "@material-tailwind/react";
import "@inertiajs/react";
import "@headlessui/react";
import "alpinejs";
import "react-select";
import "react-icons/fa6/index.esm.js";
import "react-icons/bi/index.esm.js";
import "react-icons/ti/index.esm.js";
import "./SidebarContext-P_-bml5L.js";
function SurahAudioPlayer({ audioSrc }) {
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  useEffect(() => {
    window.onload = () => {
      setDuration(audioRef.current.duration);
    };
  }, []);
  const handleSeek = (e) => {
    audioRef.current.currentTime = e.target.value;
    setCurrentTime(e.target.value);
  };
  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
    setDuration(audioRef.current.duration);
  };
  const handlePlay = () => {
    audioRef.current.play();
    setIsPlaying(true);
  };
  const handlePause = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };
  const handlePlayPause = () => {
    if (isPlaying) {
      handlePause();
    } else {
      handlePlay();
    }
  };
  function formatDuration(durationSeconds) {
    const hours = Math.floor(durationSeconds / 3600);
    const minutes = Math.floor(durationSeconds % 3600 / 60);
    const seconds = Math.floor(durationSeconds % 60);
    const formattedHours = hours.toString().padStart(2, "0");
    const formattedMinutes = minutes.toString().padStart(2, "0");
    const formattedSeconds = seconds.toString().padStart(2, "0");
    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  }
  useEffect(() => {
    audioRef.current.addEventListener("timeupdate", handleTimeUpdate);
    if (audioRef.current.addEventListener("timeupdate", handleTimeUpdate)) {
      return () => {
        audioRef.current.removeEventListener("timeupdate", handleTimeUpdate);
      };
    }
  }, []);
  console.log(currentTime);
  console.log(duration);
  return /* @__PURE__ */ jsxs("div", { className: "card relative overflow-hidden bg-gray-800 text-white p-[10px] rounded-xl border-[1px] border-[rgba(255,255,255,0.1)] w-full", children: [
    /* @__PURE__ */ jsx("input", { type: "range", name: "", min: "0", max: duration, value: currentTime, onChange: handleSeek, className: "w-[100%]", id: "" }),
    /* @__PURE__ */ jsx("audio", { ref: audioRef, src: audioSrc }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-row justify-between ", children: [
      /* @__PURE__ */ jsx("p", { className: "text-xs", children: formatDuration(currentTime) }),
      /* @__PURE__ */ jsx("button", { onClick: handlePlayPause, children: !isPlaying || duration === currentTime ? /* @__PURE__ */ jsx(FaPlay, {}) : /* @__PURE__ */ jsx(FaPause, {}) }),
      /* @__PURE__ */ jsx("p", { className: "text-xs", children: formatDuration(duration) })
    ] })
  ] });
}
const PaginationLinks = ({ data }) => {
  const items = 18;
  const [current, setCurrent] = useState(1);
  const NbPage = Math.ceil(data.length / items);
  const startIndex = (current - 1) * items;
  const endIndex = startIndex + items;
  const DataPerPage = data.slice(startIndex, endIndex);
  console.log(NbPage.length);
  return /* @__PURE__ */ jsxs("div", { className: "p-4 flex flex-col gap-5", children: [
    /* @__PURE__ */ jsx("div", { className: "w-full grid grid-cols-3  gap-4 ", children: DataPerPage.map(
      (link, i) => /* @__PURE__ */ jsx(Link, { className: " text-darkText rounded-md shadow-lg shadow-purple-900", href: `/quran/surah/${link.id}`, children: link.englishName }, i)
    ) }),
    /* @__PURE__ */ jsx("div", { className: "w-[80%] mx-auto flex flex-row justify-between mt-5", children: Array.from({ length: NbPage }, (_, i) => i + 1).map(
      (page) => {
        return /* @__PURE__ */ jsx("button", { className: `${page === current ? "bg-gray-300" : ""} px-2 rounded-full`, onClick: () => setCurrent(page), children: page });
      }
    ) })
  ] });
};
const IndividualQuran = ({ ayah, surahs }) => {
  const { darkMode } = useContext(DarkModeContext);
  const { check } = useSearchBarContext();
  const [checkLang, setCheckLang] = useState("");
  useEffect(() => {
    (async () => {
      setCheckLang(await check);
    })();
  }, []);
  console.log(checkLang);
  return /* @__PURE__ */ jsxs(React.Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { children: /* @__PURE__ */ jsx("title", { children: "Individual-Quran" }) }),
    /* @__PURE__ */ jsx(LayoutApp, { children: /* @__PURE__ */ jsx("div", { className: `${darkMode ? "bg-darkBg" : "bg-lightBg"} bg-homeBg bg-cover bg-center `, children: /* @__PURE__ */ jsxs("div", { className: "w-[90%]  md:w-[70%] mx-auto flex flex-col gap-1 lg:flex-row md:gap-3 pt-[100px] pb-5", children: [
      /* @__PURE__ */ jsx("div", { className: "w-full  md:w-[65%] ", children: /* @__PURE__ */ jsx("div", { className: ` w-[100%] md:w-[100%]   rounded-lg shadow-2xl `, children: check === "eng" ? /* @__PURE__ */ jsxs("div", { class: `w-full justify-center   mx-auto md:w-full grid pt-[10px]`, children: [
        /* @__PURE__ */ jsxs("p", { className: "text-center p-3", children: [
          /* @__PURE__ */ jsx("span", { className: "font-bold", children: ayah.surah.englishName }),
          " is the ",
          /* @__PURE__ */ jsxs("span", { className: "font-bold", children: [
            ayah.surah.numberInQuran,
            "st"
          ] }),
          " chapter of the Qur’an. The surah titled in English means “",
          /* @__PURE__ */ jsx("span", { className: "font-bold", children: ayah.surah.englishNameTranslation }),
          "” and it consists of ",
          /* @__PURE__ */ jsx("span", { className: "font-bold", children: ayah.surah.versesNumber }),
          " verses, and it's ",
          /* @__PURE__ */ jsx("span", { className: "font-bold", children: ayah.surah.revelationType }),
          " chapiter."
        ] }),
        /* @__PURE__ */ jsxs("div", { class: `${darkMode ? " text-lightText" : "bg-lightBg text-darkText"}  py-8 px-5 text-center rounded-md shadow-lg  flex flex-col gap-3`, children: [
          /* @__PURE__ */ jsxs("div", { className: `${darkMode ? " text-lightText" : " text-darkText "} flex flex-row rounded shadow-lg shadow-purple-900 mx-5 gap-3  items-center justify-center md:justify-center`, children: [
            /* @__PURE__ */ jsx("h2", { class: "text-sm md:text-md  ", children: "English Name:" }),
            /* @__PURE__ */ jsx("span", { className: "ml-3   font-bold text-xl", children: ayah.surah.englishName })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: `${darkMode ? " text-lightText" : " text-darkText "} flex flex-row	 rounded shadow-lg shadow-purple-900 mx-5 gap-3  items-center justify-center md:justify-center`, children: [
            /* @__PURE__ */ jsx("h2", { class: "text-sm md:text-md  ", children: "Transtation Name:" }),
            /* @__PURE__ */ jsx("span", { className: "ml-3   font-bold text-xl", children: ayah.surah.englishNameTranslation })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: `${darkMode ? " text-lightText" : " text-darkText "} flex flex-row  rounded shadow-lg shadow-purple-900 mx-5 	gap-3  items-center justify-center md:justify-center`, children: [
            /* @__PURE__ */ jsx("h2", { class: "text-sm md:text-md  ", children: "Surah's Number:" }),
            /* @__PURE__ */ jsx("span", { className: "ml-3   font-bold text-xl", children: ayah.surah.numberInQuran })
          ] }),
          /* @__PURE__ */ jsxs("p", { class: `${darkMode ? " text-lightText" : " text-darkText "} shadow-lg shadow-purple-900 capitalize  text-xl  rounded bold p-3`, children: [
            "«",
            ayah.frenshContent,
            "»"
          ] }),
          /* @__PURE__ */ jsxs("span", { class: `${darkMode ? " text-lightText" : " text-darkText "} shadow-lg shadow-purple-900 p-1 flex items-center  rounded   border   pr-2 justify-center mx-auto text-sm md:text-md `, children: [
            "Number of Versets:",
            " " + ayah.verseNumber
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-row gap-2  items-center mx-auto justify-center shadow-lg shadow-purple-900 p-1", children: [
            /* @__PURE__ */ jsx("h3", { children: "Revilation Type :" }),
            /* @__PURE__ */ jsx("span", { class: `${darkMode ? " text-lightText" : " text-darkText "} font-bold border rounded-full px-2   justify-center mx-auto `, children: ayah.revelationType })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "w-2/3 mx-auto rounded-xl shadow-lg shadow-purple-900 ", children: /* @__PURE__ */ jsx(SurahAudioPlayer, { audioSrc: ayah.audio }) }),
          /* @__PURE__ */ jsx(Link, { href: `/quran/${ayah.surah.id}/full-surah`, class: "rounded-md bg-gradient-to-r from-orangeBg via-indigo-500 to-orangeBg text-xl text-white pt-3 pb-4 px-8 inline", children: "Full Surah" })
        ] })
      ] }) : check === "ar" ? /* @__PURE__ */ jsxs("div", { class: `w-full justify-center   mx-auto md:w-full grid pt-[100px]`, children: [
        /* @__PURE__ */ jsxs("p", { className: "text-center p-3", children: [
          /* @__PURE__ */ jsx("span", { className: "font-bold", children: ayah.surah.arabicName }),
          " هي السورة ",
          /* @__PURE__ */ jsxs("span", { className: "font-bold", children: [
            "رقم ",
            ayah.surah.numberInQuran,
            " "
          ] }),
          " من القرآن وهي سورة ",
          /* @__PURE__ */ jsxs("span", { className: "font-bold", children: [
            ayah.surah.revelationType === "meccan" ? "مكية" : "مدنية",
            " "
          ] }),
          " وتتكون من ",
          /* @__PURE__ */ jsx("span", { className: "font-bold", children: ayah.surah.versesNumber }),
          " آيات"
        ] }),
        /* @__PURE__ */ jsxs("div", { class: `${darkMode ? "bg-darkBg text-lightText" : "bg-lightBg text-darkText"}  py-8 px-5 text-center rounded-md shadow-lg  flex flex-col gap-3`, children: [
          /* @__PURE__ */ jsxs("div", { className: `${darkMode ? "bg-lightBg text-darkText" : "bg-gray-700 text-lightText "} flex flex-row-reverse	 rounded mx-5 gap-3  items-center justify-center md:justify-center`, children: [
            /* @__PURE__ */ jsx("h2", { class: "text-sm md:text-md  ", children: ": اسم السورة" }),
            /* @__PURE__ */ jsx("span", { className: "ml-3   font-bold text-xl", children: ayah.surah.arabicName })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: `${darkMode ? "bg-lightBg text-darkText" : "bg-gray-700 text-lightText "} flex flex-row-reverse  rounded mx-5 	gap-3  items-center justify-center md:justify-center`, children: [
            /* @__PURE__ */ jsx("h2", { class: "text-sm md:text-md  ", children: ": رقم السورة" }),
            /* @__PURE__ */ jsx("span", { className: "ml-3   font-bold text-xl", children: ayah.surah.numberInQuran })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: `${darkMode ? "bg-lightBg text-darkText" : "bg-gray-700 text-lightText "} flex flex-row-reverse  rounded mx-5 	gap-3  items-center justify-center md:justify-center`, children: [
            /* @__PURE__ */ jsx("h2", { class: "text-sm md:text-md  ", children: ": رقم الآية" }),
            /* @__PURE__ */ jsx("span", { className: "ml-3   font-bold text-xl", children: ayah.surah.versesNumber })
          ] }),
          /* @__PURE__ */ jsxs("p", { class: `${darkMode ? "bg-lightBg text-darkText" : " text-darkText "} capitalize text-xl  rounded bold p-3`, children: [
            "«",
            ayah.content,
            "»"
          ] }),
          /* @__PURE__ */ jsxs("span", { class: `${darkMode ? "bg-lightBg text-darkText" : "bg-gray-700 text-lightText "} flex items-center  rounded   border  w-24 pr-2 justify-center mx-auto text-sm md:text-md `, children: [
            "عدد الآيات :",
            " " + ayah.verseNumber
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-row-reverse gap-2  items-center mx-auto justify-center", children: [
            /* @__PURE__ */ jsx("h3", { children: ": مكية او مدنية" }),
            /* @__PURE__ */ jsx("span", { class: `${darkMode ? "bg-lightBg text-darkText" : "bg-gray-700 text-lightText "} border rounded-full px-2   justify-center mx-auto `, children: ayah.revelationType === "meccan" ? "مكية" : "مدنية" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "w-2/3 mx-auto rounded-xl shadow-lg shadow-purple-900 ", children: /* @__PURE__ */ jsx(SurahAudioPlayer, { audioSrc: ayah.audio }) }),
          /* @__PURE__ */ jsx(Link, { href: `/quran/${ayah.surah.id}/full-surah`, class: "rounded-md bg-gradient-to-r from-orangeBg via-indigo-500 to-orangeBg text-xl text-white pt-3 pb-4 px-8 inline", children: "السورة كاملة" })
        ] })
      ] }) : check === "fr" ? /* @__PURE__ */ jsxs("div", { class: `w-full justify-center   mx-auto md:w-full grid pt-[100px]`, children: [
        /* @__PURE__ */ jsxs("p", { className: "text-center p-3", children: [
          /* @__PURE__ */ jsx("span", { className: "font-bold", children: ayah.surah.englishName }),
          " est la ",
          /* @__PURE__ */ jsxs("span", { className: "font-bold", children: [
            ayah.surah.numberInQuran,
            "er"
          ] }),
          " chapitre du Coran. ",
          /* @__PURE__ */ jsx("span", { className: "font-bold", children: ayah.surah.englishName }),
          " intitulée en français signifie “",
          /* @__PURE__ */ jsx("span", { className: "font-bold", children: ayah.surah.frenshNameTranslation }),
          "” et elle se compose de ",
          /* @__PURE__ */ jsx("span", { className: "font-bold", children: ayah.surah.versesNumber }),
          " versets, est c'est une chapitre ",
          /* @__PURE__ */ jsx("span", { className: "font-bold", children: ayah.surah.revelationType })
        ] }),
        /* @__PURE__ */ jsxs("div", { class: `${darkMode ? "bg-darkBg text-lightText" : "bg-lightBg text-darkText"}  py-8 px-5 text-center rounded-md shadow-lg  flex flex-col gap-3`, children: [
          /* @__PURE__ */ jsxs("div", { className: `${darkMode ? "bg-lightBg text-darkText" : "bg-gray-700 text-lightText "} flex flex-row rounded mx-5 gap-3  items-center justify-center md:justify-center`, children: [
            /* @__PURE__ */ jsx("h2", { class: "text-sm md:text-md  ", children: "Nom en Frannçais:" }),
            /* @__PURE__ */ jsx("span", { className: "ml-3   font-bold text-xl", children: ayah.surah.englishName })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: `${darkMode ? "bg-lightBg text-darkText" : "bg-gray-700 text-lightText "} flex flex-row	 rounded mx-5 gap-3  items-center justify-center md:justify-center`, children: [
            /* @__PURE__ */ jsx("h2", { class: "text-sm md:text-md  ", children: "Nom traduit en Français:" }),
            /* @__PURE__ */ jsx("span", { className: "ml-3   font-bold text-xl", children: ayah.surah.frenshNameTranslation })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: `${darkMode ? "bg-lightBg text-darkText" : "bg-gray-700 text-lightText "} flex flex-row  rounded mx-5 	gap-3  items-center justify-center md:justify-center`, children: [
            /* @__PURE__ */ jsx("h2", { class: "text-sm md:text-md  ", children: "Numéro de Surah:" }),
            /* @__PURE__ */ jsx("span", { className: "ml-3   font-bold text-xl", children: ayah.surah.numberInQuran })
          ] }),
          /* @__PURE__ */ jsxs("p", { class: `${darkMode ? "bg-lightBg text-darkText" : " text-darkText "} capitalize text-xl  rounded bold p-3`, children: [
            "«",
            ayah.frenshContent,
            "»"
          ] }),
          /* @__PURE__ */ jsxs("span", { class: `${darkMode ? "bg-lightBg text-darkText" : "bg-gray-700 text-lightText "} px-1 flex items-center  rounded   border   pr-2 justify-center mx-auto text-sm md:text-md `, children: [
            "Nombre des Versets:",
            " " + ayah.verseNumber
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-row gap-2  items-center mx-auto justify-center", children: [
            /* @__PURE__ */ jsx("h3", { children: "Type de Révelation :" }),
            /* @__PURE__ */ jsx("span", { class: `${darkMode ? "bg-lightBg text-darkText" : "bg-gray-700 text-lightText "} border rounded-full px-2   justify-center mx-auto `, children: ayah.revelationType })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "w-2/3 mx-auto rounded-xl shadow-lg shadow-purple-900 ", children: /* @__PURE__ */ jsx(SurahAudioPlayer, { audioSrc: ayah.audio }) }),
          /* @__PURE__ */ jsx(Link, { href: `/quran/${ayah.surah.id}/full-surah`, class: "rounded-md bg-gradient-to-r from-orangeBg via-indigo-500 to-orangeBg text-xl text-white pt-3 pb-4 px-8 inline", children: "Surah Compléte" })
        ] })
      ] }) : "" }) }),
      /* @__PURE__ */ jsx("div", { className: `${darkMode ? "bg-darkBg" : "bg-lightBg"} rounded-md  md:w-[35%] h-full  shadow-lg shadow-purple-900`, children: /* @__PURE__ */ jsx("ul", { className: "text-center", children: /* @__PURE__ */ jsx(PaginationLinks, { data: surahs }) }) })
    ] }) }) })
  ] });
};
export {
  IndividualQuran as default
};
