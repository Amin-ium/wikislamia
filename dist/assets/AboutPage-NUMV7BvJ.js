import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { L as LayoutApp } from "./LayoutApp-75VrxIRl.js";
import { Head } from "@inertiajs/inertia-react";
import { useContext } from "react";
import { FaFacebook, FaGithub } from "react-icons/fa/index.esm.js";
import { TiSocialLinkedinCircular } from "react-icons/ti/index.esm.js";
import { D as DarkModeContext } from "./DarkModeContext-YHL6TNaC.js";
import { u as useSearchBarContext } from "./SearchBarContext-pj9rNtoS.js";
import "@inertiajs/react";
import "@headlessui/react";
import "alpinejs";
import "react-select";
import "react-icons/fa6/index.esm.js";
import "react-icons/bi/index.esm.js";
import "./SidebarContext-P_-bml5L.js";
const workImg = "/build/assets/work-GdXI8zEU.jpg";
const AboutPage = () => {
  const { darkMode } = useContext(DarkModeContext);
  useSearchBarContext();
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs(LayoutApp, { children: [
    /* @__PURE__ */ jsx(Head, { children: /* @__PURE__ */ jsx("title", { children: "About Page" }) }),
    /* @__PURE__ */ jsxs("section", { className: "w-full   ", children: [
      /* @__PURE__ */ jsx("div", { className: "  teamBg ", children: /* @__PURE__ */ jsx("div", { className: `${darkMode ? "layerDark" : "layerLight"}  flex  `, children: /* @__PURE__ */ jsxs("div", { className: "w-[80%] mx-auto flex flex-row gap-2 justify-center items-center mt-[100px] ", children: [
        /* @__PURE__ */ jsx("div", { className: `${darkMode ? "bg-lightBg" : "bg-darkText"} h-[60px] w-[10px] ` }),
        /* @__PURE__ */ jsxs("div", { className: `${darkMode ? "text-lightText" : "text-darkText"}  flex flex-col `, children: [
          /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold ", children: "We belive people want to make correct choices" }),
          /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold ", children: "And find good life" })
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsxs("div", { className: `${darkMode ? "bg-darkText text-lightText" : "bg-lightBg text-darkText"} w-full `, children: [
        /* @__PURE__ */ jsxs("div", { className: "w-[80%] mx-auto flex flex-row items-center py-20", children: [
          /* @__PURE__ */ jsx("div", { className: "w-[50%] float-start flex justify-center", children: /* @__PURE__ */ jsx("p", { children: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod dolore aspernatur hic quibusdam soluta aliquam cumque nobis, tenetur amet omnis voluptatum, ea aliquid eveniet mollitia voluptas eum, odit atque iure ad deleniti odio ab corrupti. Deleniti quis, modi vero perspiciatis omnis, adipisci quo, error nobis dolorum neque corrupti est voluptas!" }) }),
          /* @__PURE__ */ jsx("div", { className: "w-[50%] float-end flex justify-center", children: /* @__PURE__ */ jsx("img", { src: workImg, className: "w-[70%] rounded-xl hover:scale-105 duration-300 ", alt: "work image" }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "w-[80%] mx-auto flex flex-col gap-10 pb-[40px]", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-center items-center m", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold ", children: "The Core of our Team" }),
            /* @__PURE__ */ jsx("p", { className: `${darkMode ? " text-gray-300" : " text-gray-700"} text-lg text-center`, children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita tempore magni pariatur? Sunt, tempore nemo." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 justify-center gap-[40px]", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex flex-row shadow-2xl shadow-purple-900 hover:scale-105 duration-300", children: [
              /* @__PURE__ */ jsx("div", { className: "w-[50%] float-start", children: /* @__PURE__ */ jsx("img", { src: workImg, alt: "", className: "h-[100%]" }) }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-col w-[50%] float-end p-2 gap-3", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex flex-col ", children: [
                  /* @__PURE__ */ jsx("h2", { className: "text-xl text-purple-900 font-bold", children: "Amine Daief" }),
                  /* @__PURE__ */ jsx("h3", { className: "text-md font-bold", children: "CEO" })
                ] }),
                /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("p", { className: "text-sm", children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe delectus quos omnis." }) }),
                /* @__PURE__ */ jsxs("div", { className: "flex flex-row items-center gap-2", children: [
                  /* @__PURE__ */ jsx(FaFacebook, { size: 24 }),
                  /* @__PURE__ */ jsx(TiSocialLinkedinCircular, { size: 30 }),
                  /* @__PURE__ */ jsx(FaGithub, { size: 24 })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-row shadow-2xl shadow-purple-900  hover:scale-105 duration-300", children: [
              /* @__PURE__ */ jsx("div", { className: "w-[50%] float-start", children: /* @__PURE__ */ jsx("img", { src: workImg, alt: "", className: "h-[100%]" }) }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-col w-[50%] float-end p-2 gap-3", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex flex-col ", children: [
                  /* @__PURE__ */ jsx("h2", { className: "text-xl text-purple-900 font-bold", children: "Amine Daief" }),
                  /* @__PURE__ */ jsx("h3", { className: "text-md font-bold", children: "CEO" })
                ] }),
                /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("p", { className: "text-sm", children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe delectus quos omnis." }) }),
                /* @__PURE__ */ jsxs("div", { className: "flex flex-row items-center gap-2", children: [
                  /* @__PURE__ */ jsx(FaFacebook, { size: 24 }),
                  /* @__PURE__ */ jsx(TiSocialLinkedinCircular, { size: 30 }),
                  /* @__PURE__ */ jsx(FaGithub, { size: 24 })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-row shadow-2xl shadow-purple-900 hover:scale-105 duration-300", children: [
              /* @__PURE__ */ jsx("div", { className: "w-[50%] float-start", children: /* @__PURE__ */ jsx("img", { src: workImg, alt: "", className: "h-[100%]" }) }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-col w-[50%] float-end p-2 gap-3", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex flex-col ", children: [
                  /* @__PURE__ */ jsx("h2", { className: "text-xl text-purple-900 font-bold", children: "Amine Daief" }),
                  /* @__PURE__ */ jsx("h3", { className: "text-md font-bold", children: "CEO" })
                ] }),
                /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("p", { className: "text-sm", children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe delectus quos omnis." }) }),
                /* @__PURE__ */ jsxs("div", { className: "flex flex-row items-center gap-2", children: [
                  /* @__PURE__ */ jsx(FaFacebook, { size: 24 }),
                  /* @__PURE__ */ jsx(TiSocialLinkedinCircular, { size: 30 }),
                  /* @__PURE__ */ jsx(FaGithub, { size: 24 })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-row shadow-2xl shadow-purple-900 hover:scale-105 duration-300", children: [
              /* @__PURE__ */ jsx("div", { className: "w-[50%] float-start", children: /* @__PURE__ */ jsx("img", { src: workImg, alt: "", className: "h-[100%]" }) }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-col w-[50%] float-end p-2 gap-3", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex flex-col ", children: [
                  /* @__PURE__ */ jsx("h2", { className: "text-xl text-purple-900 font-bold", children: "Amine Daief" }),
                  /* @__PURE__ */ jsx("h3", { className: "text-md font-bold", children: "CEO" })
                ] }),
                /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("p", { className: "text-sm", children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe delectus quos omnis." }) }),
                /* @__PURE__ */ jsxs("div", { className: "flex flex-row items-center gap-2", children: [
                  /* @__PURE__ */ jsx(FaFacebook, { size: 24 }),
                  /* @__PURE__ */ jsx(TiSocialLinkedinCircular, { size: 30 }),
                  /* @__PURE__ */ jsx(FaGithub, { size: 24 })
                ] })
              ] })
            ] })
          ] })
        ] })
      ] })
    ] })
  ] }) });
};
export {
  AboutPage as default
};
