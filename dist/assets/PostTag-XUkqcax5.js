import { jsx } from "react/jsx-runtime";
import { C as CheckedLinksContext } from "./CheckLinksContext-UVw0xnMh.js";
import { S as SidebarContext } from "./SidebarContext-P_-bml5L.js";
import { L as LayoutApp, S as ScrollProvider } from "./LayoutApp-75VrxIRl.js";
import { useContext, useState, useEffect } from "react";
import { S as SidebarLayout } from "./SidebarLayout-j5ZhPHuK.js";
import { P as Pagination } from "./Pagination-7t3xnya6.js";
import { P as PostCard } from "./PostCard-VMqstIkQ.js";
import { u as useSearchBarContext } from "./SearchBarContext-pj9rNtoS.js";
import { D as DarkModeContext } from "./DarkModeContext-YHL6TNaC.js";
import "@inertiajs/inertia-react";
import "@inertiajs/react";
import "@headlessui/react";
import "react-icons/fa/index.esm.js";
import "alpinejs";
import "react-select";
import "react-icons/fa6/index.esm.js";
import "react-icons/bi/index.esm.js";
import "react-icons/ti/index.esm.js";
import "react-icons/im/index.esm.js";
import "react-icons/md/index.esm.js";
import "react-icons/lu/index.esm.js";
import "react-icons/ri/index.esm.js";
import "react-icons/io/index.esm.js";
import "react-icons/bs/index.esm.js";
import "moment";
const DashboardSection = ({ postsTag }) => {
  const { opened } = useContext(SidebarContext);
  const { check, setCheck } = useSearchBarContext();
  useContext(CheckedLinksContext);
  useContext(DarkModeContext);
  const [dashboardLink, setDashboardLink] = useState(false);
  useState(false);
  useState(null);
  useEffect(() => {
    if (document.location.pathname.match("dashboard")) {
      setDashboardLink(true);
    } else {
      setDashboardLink(false);
    }
  }, []);
  console.log(dashboardLink);
  console.log(postsTag);
  return /* @__PURE__ */ jsx(LayoutApp, { children: /* @__PURE__ */ jsx(ScrollProvider, { children: /* @__PURE__ */ jsx(SidebarLayout, { children: /* @__PURE__ */ jsx(
    "div",
    {
      className: `${opened ? "w-[calc(100%-240px)] mx-auto" : "w-[calc(100%-40px)] mx-auto"} ${check === "ar" ? "float-start text-right" : "float-end text-left"} px-3 duration-300 flex flex-col    `,
      children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl flex flex-col justify-center   mx-auto sm:px-6 lg:px-8 space-y-6 mt-[70px]", children: /* @__PURE__ */ jsx(Pagination, { className: "", Component: PostCard, items: postsTag.posts }) })
    }
  ) }) }) });
};
export {
  DashboardSection as default
};
