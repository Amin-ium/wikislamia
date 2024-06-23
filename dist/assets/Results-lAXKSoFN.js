import { jsx, jsxs } from "react/jsx-runtime";
import { h as headerImgLight, a as headerImgDark, C as CheckedRadio, S as SearchbarEng } from "./SearchbarEng-_lW-Y12W.js";
import { useContext, useEffect, useState } from "react";
import "alpinejs";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa/index.esm.js";
import "@inertiajs/inertia-react";
import { u as useSearchBarContext } from "./SearchBarContext-pj9rNtoS.js";
import { D as DarkModeContext } from "./DarkModeContext-YHL6TNaC.js";
import { S as ScrollProvider, L as LayoutApp } from "./LayoutApp-75VrxIRl.js";
import { A as AudioPlayer } from "./AudioPlayer-x7q2zQL1.js";
import { useMotionValue, useSpring, useTransform } from "framer-motion";
import "@inertiajs/inertia";
import "@inertiajs/react";
import "@headlessui/react";
import "react-select";
import "react-icons/fa6/index.esm.js";
import "react-icons/bi/index.esm.js";
import "react-icons/ti/index.esm.js";
import "./SidebarContext-P_-bml5L.js";
const Results = ({ results, verses }) => {
  const { check, setCheck } = useSearchBarContext();
  const { darkMode } = useContext(DarkModeContext);
  useEffect(() => {
    console.log(results);
  }, [results]);
  const [currentlyPlayingIndex, setCurrentlyPlayingIndex] = useState(null);
  const handlePlay = (index) => {
    setCurrentlyPlayingIndex(index);
  };
  const handlePause = () => {
    setCurrentlyPlayingIndex(null);
  };
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["17.5deg", "-17.5deg"]
  );
  useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["17.5deg", "-17.5deg"]
  );
  return /* @__PURE__ */ jsx(ScrollProvider, { children: /* @__PURE__ */ jsx(LayoutApp, { children: /* @__PURE__ */ jsx("section", { className: `${darkMode ? "border-b-[1px] border-[#f1f1f125] " : "border-b-[1px] border-[#28282825]"} w-[100%] h-auto homeBg pb-15`, children: /* @__PURE__ */ jsxs("div", { className: "w-[100%]   pb-[100px] ", children: [
    /* @__PURE__ */ jsxs("div", { className: " relative z-9 w-[90%]  mx-auto flex flex-col justify-center  pt-[140px] lg:pt-[10px] ", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          className: `${darkMode ? "w-[300px] h-[150px]  md:w-[400px] md:h-[200px] lg:w-[400px] lg:h-[200px] -mt-[100px] sm:-mt-[100px]  md:-mt-[100px] lg:-mt-0 mx-auto" : "w-[300px] h-[150px]  md:w-[400px] md:h-[200px] lg:w-[400px] xl:w-[500px] lg:h-[200px] xl:h-[200px] -mt-[100px] sm:-mt-[100px]  md:-mt-[100px]  lg:-mt-0 mx-auto"} `,
          src: darkMode ? headerImgLight : headerImgDark,
          alt: ""
        }
      ),
      /* @__PURE__ */ jsx(CheckedRadio, {}),
      /* @__PURE__ */ jsx(SearchbarEng, { verses })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex xl:flex-col gap-1 w-[70%] mx-auto  mt-5", children: results.map((result, i) => /* @__PURE__ */ jsx("div", { className: "flex flex-col p-4  ", children: check === "eng" ? /* @__PURE__ */ jsxs("div", { className: "borderGradientLeft borderGradientRight flex flex-row justify-between items-center bg-grayBg rounded-lg text-lightText p-4", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("h3", { children: [
          "Surah Name:",
          /* @__PURE__ */ jsx("b", { children: " " + result.surah.englishName })
        ] }),
        /* @__PURE__ */ jsxs("h3", { children: [
          "Verst Number:",
          /* @__PURE__ */ jsx("b", { children: " " + result.verseNumber })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-row xl:items-center xl:align-middle gap-1", children: [
          /* @__PURE__ */ jsx(FaAngleDoubleLeft, { size: 18 }),
          /* @__PURE__ */ jsx("p", { className: "font-bold", children: result.englishContent }),
          /* @__PURE__ */ jsx(FaAngleDoubleRight, { size: 18 })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
        AudioPlayer,
        {
          audioList: result.audio,
          index: i,
          isPlaying: currentlyPlayingIndex === i,
          onPlay: handlePlay,
          onPause: handlePause
        }
      ) })
    ] }) : check === "fr" ? /* @__PURE__ */ jsxs("div", { className: "borderGradientLeft borderGradientRight flex flex-row justify-between items-center bg-grayBg rounded-lg text-lightText p-4", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("h3", { children: [
          "Nom du Surah:",
          /* @__PURE__ */ jsx("b", { children: " " + result.surah.frenshName })
        ] }),
        /* @__PURE__ */ jsxs("h3", { children: [
          "Numero du Verset:",
          /* @__PURE__ */ jsx("b", { children: " " + result.verseNumber })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-row xl:items-center xl:align-middle gap-1", children: [
          /* @__PURE__ */ jsx(FaAngleDoubleLeft, { size: 18 }),
          /* @__PURE__ */ jsx("p", { className: "font-bold", children: result.frenshContent }),
          /* @__PURE__ */ jsx(FaAngleDoubleRight, { size: 18 })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
        AudioPlayer,
        {
          audioList: result.audio,
          index: i,
          isPlaying: currentlyPlayingIndex === i,
          onPlay: handlePlay,
          onPause: handlePause
        }
      ) })
    ] }) : check === "ar" ? /* @__PURE__ */ jsxs("div", { className: "borderGradientLeft borderGradientRight flex flex-row-reverse text-right justify-between items-center bg-grayBg rounded-lg text-lightText p-4", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("h3", { children: [
          "اسم السورة:",
          /* @__PURE__ */ jsx("b", { children: " " + result.surah.arabicName })
        ] }),
        /* @__PURE__ */ jsxs("h3", { children: [
          "رقم الآية:",
          /* @__PURE__ */ jsx("b", { children: " " + result.verseNumber })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-row xl:items-center xl:align-middle gap-1 borderImage", children: /* @__PURE__ */ jsx("p", { className: "font-bold ", children: result.content }) })
      ] }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
        AudioPlayer,
        {
          audioList: result.audio,
          index: i,
          isPlaying: currentlyPlayingIndex === i,
          onPlay: handlePlay,
          onPause: handlePause
        }
      ) })
    ] }) : null }, i)) })
  ] }) }) }) });
};
export {
  Results as default
};
