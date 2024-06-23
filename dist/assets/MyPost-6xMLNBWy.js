import { jsx, jsxs } from "react/jsx-runtime";
import { L as LayoutApp, S as ScrollProvider } from "./LayoutApp-75VrxIRl.js";
import { u as useSearchBarContext } from "./SearchBarContext-pj9rNtoS.js";
import { InertiaProgress } from "@inertiajs/progress";
import { S as SidebarLayout } from "./SidebarLayout-j5ZhPHuK.js";
import "@inertiajs/react";
import { useState, useContext, useEffect } from "react";
import { D as DarkModeContext } from "./DarkModeContext-YHL6TNaC.js";
import "@inertiajs/inertia-react";
import moment from "moment";
import "@headlessui/react";
import "react-icons/fa/index.esm.js";
import "alpinejs";
import "react-select";
import "react-icons/fa6/index.esm.js";
import "react-icons/bi/index.esm.js";
import "react-icons/ti/index.esm.js";
import "./SidebarContext-P_-bml5L.js";
import "react-icons/im/index.esm.js";
import "react-icons/md/index.esm.js";
import "react-icons/lu/index.esm.js";
import "react-icons/ri/index.esm.js";
import "react-icons/io/index.esm.js";
import "react-icons/bs/index.esm.js";
import "./CheckLinksContext-UVw0xnMh.js";
function MyPost({}) {
  var _a;
  useSearchBarContext();
  const [dashboardLink, setDashboardLink] = useState(false);
  const { darkMode } = useContext(DarkModeContext);
  console.log(singlePost);
  useEffect(() => {
    if (document.location.pathname === "/dashboard/posts/9" || document.location.pathname === "/dashboard") {
      setDashboardLink(true);
    } else {
      setDashboardLink(false);
    }
  }, []);
  return /* @__PURE__ */ jsx(LayoutApp, { children: /* @__PURE__ */ jsx(ScrollProvider, { children: /* @__PURE__ */ jsx(SidebarLayout, { children: /* @__PURE__ */ jsx("div", { class: `w-2/3 mx-auto my-[100px]   flex flex-col justify-center  `, children: /* @__PURE__ */ jsxs("div", { className: "w-[70%] flex flex-col mx-auto justify-center shadow-xl shadow-purple-700", children: [
    /* @__PURE__ */ jsxs("div", { className: "w-full flex justify-center relative", children: [
      /* @__PURE__ */ jsx("img", { className: "w-full ", src: "https://www.shutterstock.com/image-photo/sunset-view-casablanca-cityscape-third-600nw-1844238001.jpg", alt: "" }),
      /* @__PURE__ */ jsx("span", { className: "bg-darkText text-lightText absolute top-0 right-0 font-bold text-xl px-5 py-4 rounded-full", children: moment(singlePost.created_at).format("DD ") }),
      /* @__PURE__ */ jsx("span", { className: "bg-darkText text-lightText absolute bottom-0 left-0 font-bold text-lg py-1 px-2", children: moment(singlePost.created_at).format("MMMM") })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "px-5 py-3", children: [
      /* @__PURE__ */ jsxs("div", { className: "w-full flex flex-row  justify-between items-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "w-full py-3 ", children: [
          /* @__PURE__ */ jsx("h2", { className: `${darkMode ? "text-lightText" : "text-darkText"} text-xl font-bold`, children: singlePost.title }),
          /* @__PURE__ */ jsxs("h3", { className: `${darkMode ? "text-lightText" : "text-darkText"} text-md font-semibold`, children: [
            "Writed by: ",
            singlePost.user.name
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "w-full flex justify-end ", children: [
          (_a = singlePost.tags) == null ? void 0 : _a.map(
            (tag, i) => /* @__PURE__ */ jsx("p", { className: `${darkMode ? "text-lightText" : "text-darkText"} text-sm `, children: tag.name })
          ),
          /* @__PURE__ */ jsx("p", { className: "bg-darkText text-lightText  font-semibold text-sm px-1 rounded-md ", children: moment(singlePost.created_at).format("MMMM DD YYYY HH:mm:ss") })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("p", { children: singlePost.description }) })
    ] })
  ] }) }) }) }) });
}
InertiaProgress.init({ color: "#4B5563" });
export {
  MyPost as default
};
