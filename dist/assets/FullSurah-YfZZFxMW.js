import { jsxs, jsx } from "react/jsx-runtime";
import React from "react";
import { Head } from "@inertiajs/inertia-react";
import { L as LayoutApp } from "./LayoutApp-75VrxIRl.js";
import { A as AudioPlayer } from "./AudioPlayer-x7q2zQL1.js";
import "./DarkModeContext-YHL6TNaC.js";
import "@inertiajs/react";
import "@headlessui/react";
import "react-icons/fa/index.esm.js";
import "alpinejs";
import "react-select";
import "./SearchBarContext-pj9rNtoS.js";
import "react-icons/fa6/index.esm.js";
import "react-icons/bi/index.esm.js";
import "react-icons/ti/index.esm.js";
import "./SidebarContext-P_-bml5L.js";
function Posts({ fullSurah }) {
  console.log(fullSurah);
  return /* @__PURE__ */ jsxs(React.Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { children: /* @__PURE__ */ jsx("title", { children: "Blogs" }) }),
    /* @__PURE__ */ jsx(LayoutApp, { children: /* @__PURE__ */ jsxs("div", { className: "w-[100%] md:w-[80%] mx-auto -mt-20 bg-white rounded-lg shadow-2xl", children: [
      /* @__PURE__ */ jsx("h2", { className: "my-5 text-4xl bold text-center pt-10", children: "Full surah" }),
      /* @__PURE__ */ jsx(AudioPlayer, { fullSurah })
    ] }) })
  ] });
}
export {
  Posts as default
};
