import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { L as LayoutApp } from "./LayoutApp-75VrxIRl.js";
import { Head } from "@inertiajs/inertia-react";
import { useContext } from "react";
import ContactForm from "./ContactForm-PVboUxFq.js";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa/index.esm.js";
import { D as DarkModeContext } from "./DarkModeContext-YHL6TNaC.js";
import "@inertiajs/react";
import "@headlessui/react";
import "alpinejs";
import "react-select";
import "./SearchBarContext-pj9rNtoS.js";
import "react-icons/fa6/index.esm.js";
import "react-icons/bi/index.esm.js";
import "react-icons/ti/index.esm.js";
import "./SidebarContext-P_-bml5L.js";
import "@emailjs/browser";
const contactBanner = "/build/assets/contactBanner-2A11s__e.png";
const ContactPage = () => {
  const { darkMode } = useContext(DarkModeContext);
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs(LayoutApp, { children: [
    /* @__PURE__ */ jsx(Head, { children: /* @__PURE__ */ jsx("title", { children: "Contact Page" }) }),
    /* @__PURE__ */ jsx(
      "section",
      {
        id: "section1",
        className: `
                    bg-quranBg h-[400px] bg-cover bg-center flex justify-center `
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: ` w-[100%] md:w-[80%] mx-auto -mt-[300px]  flex flex-col md:flex-col  gap-[50px]  rounded-lg pb-10 `, children: [
      /* @__PURE__ */ jsx("div", { className: "text-lightText flex flex-col  w-[90%] md:flex-col gap-3 text-center bg-darkBg bg-opacity-50 md:w-[70%] mx-auto p-3 rounded-lg", children: /* @__PURE__ */ jsxs("div", { className: "w-full flex flex-row  mx-auto", children: [
        /* @__PURE__ */ jsx("img", { src: contactBanner, className: "h-[250px] w-[250px] mx-auto ", alt: "" }),
        /* @__PURE__ */ jsxs("div", { className: " flex flex-row justify-center items-center mx-auto gap-2 ", children: [
          /* @__PURE__ */ jsx("div", { className: `${darkMode ? "bg-purple-600 " : "bg-purple-900 "} w-[10px] h-[60px] ` }),
          /* @__PURE__ */ jsxs("div", { className: `${darkMode ? "text-lightText " : "text-darkText "} flex flex-col text-darkText text-left text-2xl font-[800]`, children: [
            /* @__PURE__ */ jsx("h2", { children: "Drop us a line through the form below" }),
            /* @__PURE__ */ jsx("h2", { children: "We'll get back to you" })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: " w-full h-auto flex flex-col md:flex-row md:items-center gap-4 md:flex justify-between ", children: [
        /* @__PURE__ */ jsx("div", { className: `${darkMode ? "shadow-2xl shadow-purple-900 border-[1px] border-purple-900 text-lightText" : "shadow-[0_0px_60px_-15px_#800080] text-darkText"}  w-[90%] mx-auto md:w-[60%] h-full py-10 mb-5 -mt-[50px] relative justify-center   p-8   rounded-[20px] flex flex-col`, children: /* @__PURE__ */ jsx(ContactForm, {}) }),
        /* @__PURE__ */ jsxs("div", { className: `${darkMode ? "shadow-2xl shadow-purple-900 border-[1px] border-purple-900 text-lightText" : "shadow-[0_0px_60px_-15px_#800080] text-darkText"} md:w-[35%] w-[90%]  mx-auto h-full bg-gradient-to-r    rounded-lg p-8 flex flex-col gap-8 justify-center mb-5`, children: [
          /* @__PURE__ */ jsx("div", { className: "flex flex-col text-center justify-center gap-4", children: /* @__PURE__ */ jsx("p", { className: "text-base tracking-wide text-center ", children: "The Last Islamic Encyclobedy You'll Ever Need, Wikislamia is the port of jQuery slick library" }) }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col text-center gap-1", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-base  uppercase font-titleFont mb-4", children: "Find Me In" }),
            /* @__PURE__ */ jsxs("div", { className: "flex gap-4 justify-center", children: [
              /* @__PURE__ */ jsx("span", { className: "bannerIcon ", children: /* @__PURE__ */ jsx(FaFacebookF, {}) }),
              /* @__PURE__ */ jsx("span", { className: "bannerIcon ", children: /* @__PURE__ */ jsx(FaTwitter, {}) }),
              /* @__PURE__ */ jsx("span", { className: "bannerIcon ", children: /* @__PURE__ */ jsx(FaLinkedinIn, {}) })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: " mx-auto justify-center", children: [
            /* @__PURE__ */ jsxs("p", { className: "text-base text-center  flex items-center gap-2", children: [
              "Phone: ",
              /* @__PURE__ */ jsx("span", { className: "", children: "+212646109969" })
            ] }),
            /* @__PURE__ */ jsxs("p", { className: "text-base  flex items-center gap-2", children: [
              "Email: ",
              /* @__PURE__ */ jsx("span", { className: "", children: "amine.daief@gmail.com" })
            ] })
          ] })
        ] })
      ] })
    ] })
  ] }) });
};
export {
  ContactPage as default
};
