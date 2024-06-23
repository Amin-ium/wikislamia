import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { D as DarkModeContext } from "./DarkModeContext-YHL6TNaC.js";
import { createContext, useContext, useState, Fragment as Fragment$1, useEffect } from "react";
import { u as useScroll, S as ScrollProvider, L as LayoutApp } from "./LayoutApp-75VrxIRl.js";
import { u as useSearchBarContext } from "./SearchBarContext-pj9rNtoS.js";
import { S as SectionTitle } from "./SectionTitle-ZXNEerM7.js";
import { P as Pagination } from "./Pagination-7t3xnya6.js";
import { P as PostCard } from "./PostCard-VMqstIkQ.js";
import { Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";
import { Link } from "@inertiajs/react";
import { FaLongArrowAltRight, FaQuoteLeft } from "react-icons/fa/index.esm.js";
import "./SidebarContext-P_-bml5L.js";
import { h as headerImgLight, a as headerImgDark, C as CheckedRadio, S as SearchbarEng } from "./SearchbarEng-_lW-Y12W.js";
import moment from "moment";
import { IoMdStar, IoMdStarHalf } from "react-icons/io/index.esm.js";
import "@inertiajs/inertia-react";
import "@headlessui/react";
import "alpinejs";
import "react-select";
import "react-icons/fa6/index.esm.js";
import "react-icons/bi/index.esm.js";
import "react-icons/ti/index.esm.js";
import "@inertiajs/inertia";
const darkLogoEnglish = "/build/assets/darkLogoEnglish-om7rslZu.svg";
const LoadingContext = createContext();
const illustration1 = "/build/assets/illustarion1-4Wq83fkI.svg";
const illustration2 = "/build/assets/Illustration2-nF1u9TmD.svg";
const SectionBlogs = ({ items, user, sectionId, posts, Component }) => {
  useSearchBarContext();
  const { darkMode } = useContext(DarkModeContext);
  const { sectionRefs } = useScroll();
  console.log(items);
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("section", { ref: sectionRefs.section2, className: `${darkMode ? "border-b-[1px] border-[#f1f1f125] " : "border-b-[1px] border-[#28282825]"} relative w-[100%] xl:w-[100%] mx-auto  h-auto   py-[50px] `, children: [
    /* @__PURE__ */ jsx(SectionTitle, { title: "Post&Blogs", des: "Enjoy Reading and Posting" }),
    /* @__PURE__ */ jsxs("div", { className: "w-[90%] xl:w-[80%] mx-auto mt-5 relative z-8", children: [
      /* @__PURE__ */ jsx("img", { src: illustration1, alt: "", className: "absolute   right-0 top-[10px]  xl:-right-[30px] xl:-top-[50px]" }),
      /* @__PURE__ */ jsx("img", { src: illustration2, alt: "", className: "absolute  top-[750px] -left-[70px]  xl:-left-[130px] z-5 " }),
      /* @__PURE__ */ jsx(Pagination, { Component: PostCard, items, user })
    ] })
  ] }) });
};
const logo6 = "/build/assets/ICDT_logo1-Bl_tbt_9.svg";
const logo2 = "/build/assets/ICDT_logo2-flAlc4Z2.svg";
const logo3 = "/build/assets/ICDT_logo3-wN7ypGGd.svg";
const logo4 = "/build/assets/ICDT_logo4-PzYJZ8n9.svg";
const logo5 = "/build/assets/ICDT_logo5-5cgjlUDk.svg";
const logo7 = "/build/assets/ICDT_logo7-shrbryfG.svg";
const logo8 = "/build/assets/ICDT_logo8-VamV7Gp1.svg";
const logo01 = "/build/assets/ICDT_logo1--mam0bFJ.svg";
const logo02 = "/build/assets/ICDT_logo2-TW3kXTOf.svg";
const logo03 = "/build/assets/ICDT_logo3-1kUICqw3.svg";
const logo04 = "/build/assets/ICDT_logo4-RptlvibL.svg";
const logo05 = "/build/assets/ICDT_logo5-EmYfwnys.svg";
const logo06 = "/build/assets/ICDT_logo6-mzuJFixd.svg";
const logo07 = "/build/assets/ICDT_logo7-QTrTXhZh.svg";
const logo08 = "/build/assets/ICDT_logo8-lRiLjWa7.svg";
const SectionBrands = () => {
  const { darkMode } = useContext(DarkModeContext);
  const { sectionRefs } = useScroll();
  const brandsLight = [
    { src: logo6, alt: "logo" },
    { src: logo2, alt: "logo" },
    { src: logo3, alt: "logo" },
    { src: logo4, alt: "logo" },
    { src: logo5, alt: "logo" },
    { src: logo6, alt: "logo" },
    { src: logo7, alt: "logo" },
    { src: logo8, alt: "logo" }
  ];
  const brandsDark = [
    { src: logo01, alt: "logo" },
    { src: logo02, alt: "logo" },
    { src: logo03, alt: "logo" },
    { src: logo04, alt: "logo" },
    { src: logo05, alt: "logo" },
    { src: logo06, alt: "logo" },
    { src: logo07, alt: "logo" },
    { src: logo08, alt: "logo" }
  ];
  return /* @__PURE__ */ jsxs("section", { ref: sectionRefs.section4, className: `${darkMode ? "border-b-[1px] border-[#f1f1f125] " : "border-b-[1px] border-[#28282825]"} w-[100%] py-[50px]`, children: [
    /* @__PURE__ */ jsx(SectionTitle, { title: "Parteners", des: "Our sponsors can be yours" }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-4 xl:justify-center justify-center w-[90%] mx-auto xl:mx-auto gap-3", children: darkMode ? brandsLight.map((brand, i) => /* @__PURE__ */ jsx("img", { src: brand.src, alt: brand.alt, className: "w-[150px] h-[70px] mx-auto" }, i)) : brandsDark.map((brand, i) => /* @__PURE__ */ jsx("img", { src: brand.src, alt: brand.alt, className: "w-[150px] h-[70px] mx-auto" }, i)) })
  ] });
};
const Accordionn = ({ quiz }) => {
  const { darkMode } = useContext(DarkModeContext);
  const [openItem, setOpenItem] = useState(null);
  const handleOpen = (index) => {
    setOpenItem((prevOpenItem) => prevOpenItem === index ? null : index);
  };
  return /* @__PURE__ */ jsx(Fragment$1, { children: /* @__PURE__ */ jsx("div", { className: "w-full xl:w-1/2 flex flex-col xl:flex-col mx-auto ", children: quiz.map((accordionItem, index) => /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs(Accordion, { open: openItem === index, className: "", children: [
    /* @__PURE__ */ jsx(AccordionHeader, { className: `${darkMode ? "bg-[#2200278A] text-lightText" : "bg-[#2200278A] text-lightText"} px-3 rounded-lg shadow-2xl text-md md:text-xl lg:text-xl`, onClick: () => handleOpen(index), children: accordionItem.questionEng }),
    /* @__PURE__ */ jsx(AccordionBody, { className: `${darkMode ? "bg-[#2200278A] text-lightText" : "bg-[#2200278A] text-lightText"} rounded-lg px-5 text-[16px] md:text-md lg:text-md`, children: accordionItem.answerEng })
  ] }) }, index)) }) });
};
const faqBanner = "/build/assets/faqBanner-HUgNHvV5.svg";
const FaqBanner = () => {
  const { darkMode } = useContext(DarkModeContext);
  return /* @__PURE__ */ jsxs("div", { className: "w-full xl:w-1/2 flex flex-col justify-center ", children: [
    /* @__PURE__ */ jsx("img", { src: faqBanner, alt: "" }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-row items-center align-middle gap-3 mb-10 ", children: [
      /* @__PURE__ */ jsx("div", { className: `${darkMode ? "bg-lightBg" : "bg-darkText"} ml-[50px] xl:ml-[150px] mb-2 h-[50px] w-[4px] rounded-md ` }),
      /* @__PURE__ */ jsxs("p", { className: `${darkMode ? "text-lightText" : "text-darkText"} w-full xl:w-[70%] mx-auto text-xl  -mt-3`, children: [
        "For more question visit f.a.q page by clicking on this link ",
        /* @__PURE__ */ jsx(Link, { className: " underline", children: "F.A.Q" })
      ] })
    ] })
  ] });
};
const SectionFaq = ({ quiz, sectionId }) => {
  const { sectionRefs } = useScroll();
  const { darkMode } = useContext(DarkModeContext);
  return /* @__PURE__ */ jsxs("section", { ref: sectionRefs.section3, className: `${darkMode ? "border-b-[1px] border-[#f1f1f125] " : "border-b-[1px] border-[#28282825]"} w-full py-[50px]`, children: [
    /* @__PURE__ */ jsx(SectionTitle, { title: "F.A.Q", des: "You ask & We answer" }),
    /* @__PURE__ */ jsxs("div", { className: "w-[90%] mx-auto flex flex-col xl:flex-row items-center", children: [
      /* @__PURE__ */ jsx(FaqBanner, {}),
      /* @__PURE__ */ jsx(Accordionn, { quiz })
    ] })
  ] });
};
const SectionFooter = () => {
  const { darkMode } = useContext(DarkModeContext);
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("section", { className: `${darkMode ? "border-b-[1px] border-[#f1f1f125] text-lightText" : "border-b-[1px] border-[#28282825] text-darkText"} w-[100%]  py-[50px]`, children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row w-[90%] mx-auto justify-between xl:justify-between lg:justify-between md:justify-between sm:justify-between", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-row w-2/3 mx-auto mb-3 justify-between sm:px-[40px] md:px-[60px] lg:px-[80px] xl:px-[100px] gap-5", children: [
      /* @__PURE__ */ jsxs("div", { className: "", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-[16px] font-bold", children: "Pages" }),
        /* @__PURE__ */ jsxs("ul", { className: "text-[14px] text-center", children: [
          /* @__PURE__ */ jsx("li", { children: "Home" }),
          /* @__PURE__ */ jsx("li", { children: "Quran" }),
          /* @__PURE__ */ jsx("li", { children: "Hadeets" }),
          /* @__PURE__ */ jsx("li", { children: "Blogs" }),
          /* @__PURE__ */ jsx("li", { children: "About" }),
          /* @__PURE__ */ jsx("li", { children: "Contact" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-[16px] font-bold", children: "Informations" }),
        /* @__PURE__ */ jsxs("ul", { className: "text-[14px] text-center", children: [
          /* @__PURE__ */ jsx("li", { children: "Home" }),
          /* @__PURE__ */ jsx("li", { children: "Quran" }),
          /* @__PURE__ */ jsx("li", { children: "Hadeets" }),
          /* @__PURE__ */ jsx("li", { children: "Blogs" }),
          /* @__PURE__ */ jsx("li", { children: "About" }),
          /* @__PURE__ */ jsx("li", { children: "Contact" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-[16px] font-bold", children: "Company" }),
        /* @__PURE__ */ jsxs("ul", { className: "text-[14px] text-center", children: [
          /* @__PURE__ */ jsx("li", { children: "Home" }),
          /* @__PURE__ */ jsx("li", { children: "Quran" }),
          /* @__PURE__ */ jsx("li", { children: "Hadeets" }),
          /* @__PURE__ */ jsx("li", { children: "Blogs" }),
          /* @__PURE__ */ jsx("li", { children: "About" }),
          /* @__PURE__ */ jsx("li", { children: "Contact" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: `${darkMode ? "bg-[#261131] text-lightText" : "bg-gray-400 text-darkText"} shadow-gray-950 shadow-md w-full xs:w-full sm:w-2/3 sm:mx-auto md:w-1/3 lg:w-1/3     xl:w-1/3 flex flex-col  p-8 rounded-xl`, children: [
      /* @__PURE__ */ jsx("h3", { className: "font-bold", children: "Subscribe" }),
      /* @__PURE__ */ jsxs("div", { dir: "ltr", className: "flex dlex-row items-center", children: [
        /* @__PURE__ */ jsx("input", { className: "h-[30px] w-full rounded-s-md", placeholder: "Adress Email", type: "text" }),
        /* @__PURE__ */ jsx("button", { className: "bg-blue h-[30px] px-3 rounded-e-md", children: /* @__PURE__ */ jsx(FaLongArrowAltRight, {}) })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-[12px] text-justify", children: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga iure suscipit ratione consequuntur ipsa modi quo vitae veritatis, minus unde?" })
    ] })
  ] }) }) });
};
const cards = "/build/assets/cards-FhTTByz9.svg";
const darkLogoArabic = "/build/assets/darkLogoArabic--TgGPJx1.svg";
const darkLogoFrench = "/build/assets/Group 1261152956-DoF5q6a_.svg";
const lightLogoArabic = "/build/assets/lightLogoArabic-6kue_AZV.svg";
const lightLogoFrench = "/build/assets/lightLogoFrench-QA6LvDkC.svg";
const lightLogoEnglish = "/build/assets/lightLogoEnglish-q_kyRyxS.svg";
const quran$1 = "/build/assets/Group--AH8VnJr.svg";
const CardsBanner = () => {
  const { check, setCheck } = useSearchBarContext();
  const { darkMode } = useContext(DarkModeContext);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("div", { className: " flex flex-col w-[90%] mx-auto ", children: [
      /* @__PURE__ */ jsxs("div", { className: "w-full flex flex-row  xl:w-[90%]  lg:w-[80%] lg:mx-auto   mt-[50px] ", children: [
        /* @__PURE__ */ jsx("div", { className: "w-1/2 flex xl:flex-col ", children: /* @__PURE__ */ jsx("div", { className: "w-full xl:w-full flex   mx-auto  ", children: /* @__PURE__ */ jsx("img", { src: check === "eng" && darkMode ? lightLogoEnglish : check === "fr" && darkMode ? lightLogoFrench : check === "ar" && darkMode ? lightLogoArabic : check === "eng" && !darkMode ? darkLogoEnglish : check === "fr" && !darkMode ? darkLogoFrench : check === "ar" && !darkMode ? darkLogoArabic : null, alt: "", className: `${check === "ar" ? "" : ""} w-[100%] h-[100%] xl:w-[300px] xl:h-[150px] md:w-[300px] md:h-[200px] lg:w-[300px] lg:h-[200px]   mx-auto` }) }) }),
        /* @__PURE__ */ jsx("div", { className: "w-1/2  ", children: /* @__PURE__ */ jsx("img", { src: cards, className: " w-[100%] h-[100%] xs:w-[300px] xs:h-[150px] sm:w-[300px] sm:h-[150px] xl:w-[400px] xl:h-[200px] md:w-[300px] md:h-[200px] lg:w-[300px] lg:h-[200px]  mx-auto", alt: "" }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "w-[100%] lg:w-[70%] xl:w-[70%] mx-auto flex flex-col xl:mt-5", children: [
        /* @__PURE__ */ jsx("p", { className: `${check === "ar" ? "text-center xl:text-right lg:text-right text-[16px] lg:text-[25px] xl:text-[25px]" : "text-center text-[22px] lg:text-[2xl] xl:text-2xl"} ${darkMode ? "text-lightText" : "text-darkText"}  `, children: check === "eng" ? "“It will be said to the reciter of the Quran: «Read, ascend, and recite as you recited in this world, for your status is at the last verse you recite»" : check === "fr" ? "“Il sera dit au récitant du Coran: « Lis, monte et récite comme tu l'as récité dans ce monde, car ton statut est au dernier verset que tu récites»" : check === "ar" ? "“يقال لقارئ القرآن: «اقرأ وارتق ورتل كما كنت ترتل في الدنيا، فإن منزلتك عند آخر آية تقرؤها»" : null }),
        /* @__PURE__ */ jsx("h4", { className: `lg:w-[300px] ${darkMode ? "text-lightText" : "text-darkText"} text-[12px] xl:text-[14px] xl:text-center mx-auto`, children: check === "eng" ? "Narrated by Abu Dawud al-Tirmidhi" : check === "fr" ? "Rapporté par Abou Daoud al-Tirmidhi" : check === "ar" ? "رواه الترمذي وأبوداوود" : null })
      ] })
    ] }),
    /* @__PURE__ */ jsx("img", { src: quran$1, alt: "", className: `${check === "ar" ? "w-[50%] h-[50%] lg:-left-[300px]  -top-[10px] " : "w-[50%] h-[50%] lg:-left-[300px] -top-[10px] "} absolute  -left-[80px]   ` })
  ] });
};
const SectionSearchBare = ({ verses, resultPrayer, surahs }) => {
  const { darkMode } = useContext(DarkModeContext);
  const { sectionRefs } = useScroll();
  const formattedDate = moment().format("HH:mm");
  console.log(formattedDate);
  let requestOptions = {
    method: "GET",
    redirect: "follow"
  };
  fetch("https://hadeethenc.com/api/v1/hadeeths/one/?language=fr&id=2962", requestOptions).then((response) => response.text()).then((result) => console.log(result)).catch((error) => console.log("error", error));
  console.log(resultPrayer);
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("section", { ref: sectionRefs.section1, className: `${darkMode ? "border-b-[1px] border-[#f1f1f125] " : "border-b-[1px] border-[#28282825]"} w-[100%] h-auto homeBg pb-15`, children: /* @__PURE__ */ jsx("div", { className: "w-[100%]   py-[100px] ", children: /* @__PURE__ */ jsxs("div", { className: " relative z-9 w-[90%]  mx-auto flex flex-col justify-center  pt-[140px] lg:pt-[10px] ", children: [
    /* @__PURE__ */ jsx(
      "img",
      {
        className: `${darkMode ? "w-[300px] h-[150px]  md:w-[400px] md:h-[200px] lg:w-[400px] lg:h-[200px] -mt-[100px] sm:-mt-[100px]  md:-mt-[100px] lg:-mt-0 mx-auto" : "w-[300px] h-[150px]  md:w-[400px] md:h-[200px] lg:w-[400px] xl:w-[500px] lg:h-[200px] xl:h-[200px] -mt-[100px] sm:-mt-[100px]  md:-mt-[100px]  lg:-mt-0 mx-auto"} `,
        src: darkMode ? headerImgLight : headerImgDark,
        alt: ""
      }
    ),
    /* @__PURE__ */ jsx(CheckedRadio, {}),
    /* @__PURE__ */ jsx(SearchbarEng, { verses, surahs }),
    /* @__PURE__ */ jsx(CardsBanner, {})
  ] }) }) }) });
};
const illustration = "/build/assets/ramadanFamily1-LFwppUOW.svg";
const StaticsIllustration = () => {
  const { darkMode } = useContext(DarkModeContext);
  return /* @__PURE__ */ jsxs("div", { className: "xl:w-[50%] w-full flex flex-col items-center  xl:p-4", children: [
    /* @__PURE__ */ jsx("img", { src: illustration, alt: "", className: "w-[550px] h-[300px]" }),
    /* @__PURE__ */ jsxs("div", { className: `${darkMode ? "text-lightText" : "text-darkText"} flex flex-col  items-center gap-3`, children: [
      /* @__PURE__ */ jsx("p", { className: "text-center", children: "Muslims are followers of the religion Islam, who believe in and live by the teachings of the prophet Muhammad." }),
      /* @__PURE__ */ jsx("div", { className: `${darkMode ? "bg-lightText" : "bg-darkText"} w-[100%] h-[1px] ` }),
      /* @__PURE__ */ jsx("p", { className: "text-center", children: "There are more than two billion Muslims worldwide, making Islam the second-largest religion in the world, exceeded only by Christianity." })
    ] })
  ] });
};
const statistics1 = "/build/assets/statistics1-HoveAbys.svg";
const statistics2 = "/build/assets/statistics2-IMPx0vmZ.svg";
const statistics3 = "/build/assets/frame-tyx7eaU8.svg";
const StatisticsCards = () => {
  return /* @__PURE__ */ jsxs("div", { className: "xl:w-1/2 w-[100%] flex flex-col gap-[40px] justify-center xl:justify-center items-center xl:items-center xl:p-4 ", children: [
    /* @__PURE__ */ jsxs("div", { className: "w-full flex flex-row xl:flex-row gap-3 xl:gap-3 ", children: [
      /* @__PURE__ */ jsx("div", { className: "w-1/2 ", children: /* @__PURE__ */ jsx("img", { src: statistics1, alt: "", className: "w-full xl:full shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)] rounded-xl " }) }),
      /* @__PURE__ */ jsx("div", { className: "w-1/2 ", children: /* @__PURE__ */ jsx("img", { src: statistics2, alt: "", className: "w-full xl:full shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)] rounded-xl" }) })
    ] }),
    /* @__PURE__ */ jsx("img", { src: statistics3, alt: "", className: "xl:w-[500px] w-full shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)] rounded-xl " })
  ] });
};
const lampe = "/build/assets/lampe-j2YkO5hW.svg";
const quran = "/build/assets/quranillu-Yg6UA4G9.svg";
const SectionStatistics = () => {
  const { sectionRefs } = useScroll();
  const { darkMode } = useContext(DarkModeContext);
  return /* @__PURE__ */ jsxs("section", { ref: sectionRefs.section5, className: `${darkMode ? "border-b-[1px] border-[#f1f1f125] " : "border-b-[1px] border-[#28282825]"} w-[100%] mt-[100px] xl:mt-0 relative py-[50px]`, children: [
    /* @__PURE__ */ jsx(SectionTitle, { title: "Statistics", des: "Numbers talks & we listen" }),
    /* @__PURE__ */ jsx("img", { src: lampe, alt: "", className: "absolute w-[200px] h-[200px] -top-[40px] left-0 z-30" }),
    /* @__PURE__ */ jsx("img", { src: quran, alt: "", className: "absolute w-[200px] h-[200px]  -top-[120px] xl:top-[340px] right-0 z-30" }),
    /* @__PURE__ */ jsxs("div", { className: "w-[90%] mx-auto flex flex-col xl:flex-row xl:mt-3 -mt-10", children: [
      /* @__PURE__ */ jsx(StaticsIllustration, {}),
      /* @__PURE__ */ jsx(StatisticsCards, {})
    ] })
  ] });
};
const tester2 = "/build/assets/testimonialTwo-tfxmTE_s.png";
const TestmonialCard = ({ src, alt, name, job, text }) => {
  return /* @__PURE__ */ jsxs("div", { className: "w-full mx-auto md:w-[310px] md:h-[340px] lg:w-[310px] lg:h-[340px] xl:w-[310px] xl:h-[340px] bg-[#434343] p-5 flex flex-col  gap-10 rounded-3xl text-lightText relative z-10 shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)]", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-3 mt-3", children: [
      /* @__PURE__ */ jsx(FaQuoteLeft, { size: 44 }),
      /* @__PURE__ */ jsx("p", { children: text })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-row justify-end", children: [
      /* @__PURE__ */ jsx(IoMdStar, { size: 24, className: "text-yellow-500" }),
      /* @__PURE__ */ jsx(IoMdStar, { size: 24, className: "text-yellow-500" }),
      /* @__PURE__ */ jsx(IoMdStar, { size: 24, className: "text-yellow-500" }),
      /* @__PURE__ */ jsx(IoMdStar, { size: 24, className: "text-yellow-500" }),
      /* @__PURE__ */ jsx(IoMdStarHalf, { size: 24, className: "text-yellow-500" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-row", children: [
      /* @__PURE__ */ jsx("img", { src, alt, className: "w-[50px] h-[50px] rounded-[50%]" }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col ms-2", children: [
        /* @__PURE__ */ jsx("span", { className: "font-bold text-lg", children: name }),
        /* @__PURE__ */ jsx("span", { className: "text-gray-400", children: job })
      ] })
    ] })
  ] });
};
const illu1 = "/build/assets/RoundBigCube-KOttE-hc.svg";
const illu2 = "/build/assets/RoundSmallCube-DoMow9qc.svg";
const illu3 = "/build/assets/Sphere-I8UU1caD.svg";
const rocket = "/build/assets/rocket-k7LKLkeb.svg";
const SectionTestmonial = ({ sectionId }) => {
  const { sectionRefs } = useScroll();
  const { darkMode } = useContext(DarkModeContext);
  const testmonial = [
    { src: tester2, alt: "tester", name: "John Doe", job: "Team Manager", text: "Good website with noce design, it’s help to undestand islam and  Muslims people, Thanks  ..." },
    { src: tester2, alt: "tester1", name: "Julie Wine", job: "It Manager", text: "Good website with noce design, it’s help to undestand islam and  Muslims people, Thanks  ..." },
    { src: tester2, alt: "tester2", name: "Mark Daniel", job: "Web Master Manager", text: "Good website with noce design, it’s help to undestand islam and  Muslims people, Thanks  ..." }
  ];
  return /* @__PURE__ */ jsxs("section", { ref: sectionRefs.section5, className: `${darkMode ? "border-b-[1px] border-[#f1f1f125] " : "border-b-[1px] border-[#28282825]"} w-[100%] pt-[50px] pb-[100px] relative`, children: [
    /* @__PURE__ */ jsx("img", { src: illu1, alt: "illustartion", className: "absolute right-0 top-0 xl:top-0 z-32 h-[100px] xl:h-[200px] w-[100px] xl:w-[200px]" }),
    /* @__PURE__ */ jsx("img", { src: rocket, alt: "illustartion", className: "absolute left-0 top-0 xl:top-0 z-32 h-[100px] xl:h-[200px] w-[100px] xl:w-[200px]" }),
    /* @__PURE__ */ jsx(SectionTitle, { title: "Testmonial", des: "They trust us & We serve them" }),
    /* @__PURE__ */ jsx("div", { className: "w-[90%] mx-auto flex flex-col gap-3 xl:flex-row xl:gap-20 justify-center xl:[&>*:nth-child(2)]:mt-[100px] relative z-29", children: testmonial.map((test, i) => /* @__PURE__ */ jsx(
      TestmonialCard,
      {
        src: test.src,
        alt: test.alt,
        text: test.text,
        name: test.name,
        job: test.job
      }
    )) }),
    /* @__PURE__ */ jsx("img", { src: illu2, alt: "illustartion", className: "absolute left-0 bottom-[380px] xl:left-0 xl:bottom-[100px] z-32 h-[100px] xl:h-[200px] w-[100px] xl:w-[200px]" }),
    /* @__PURE__ */ jsx("img", { src: illu3, alt: "illustartion", className: "absolute right-0 bottom-5 z-32 h-[100px] xl:h-[200px] w-[100px] xl:w-[200px]" })
  ] });
};
const Home = ({ posts, user, quiz, verses, fatihah, surahs, items }) => {
  const { isLoading, setIsLoading } = useContext(LoadingContext);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 2e3));
      setIsLoading(false);
    };
    fetchData();
  }, [setIsLoading]);
  return /* @__PURE__ */ jsx(Fragment, { children: isLoading ? /* @__PURE__ */ jsx("div", { className: "w-full h-screen flex justify-center items-center bg-darkText text-lightBg text-xl", children: /* @__PURE__ */ jsx("p", { children: "Loading" }) }) : /* @__PURE__ */ jsx(ScrollProvider, { children: /* @__PURE__ */ jsxs(LayoutApp, { children: [
    /* @__PURE__ */ jsx(SectionSearchBare, { sectionId: 1, verses, surahs }),
    /* @__PURE__ */ jsx(SectionBlogs, { sectionId: 2, items: posts, user }),
    /* @__PURE__ */ jsx(SectionFaq, { sectionId: 3, quiz }),
    /* @__PURE__ */ jsx(SectionBrands, { sectionId: 4 }),
    /* @__PURE__ */ jsx(SectionTestmonial, { sectionId: 5 }),
    /* @__PURE__ */ jsx(SectionStatistics, { sectionId: 6 }),
    /* @__PURE__ */ jsx(SectionFooter, {})
  ] }) }) });
};
export {
  Home as default
};
