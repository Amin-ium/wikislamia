import { jsx, jsxs } from "react/jsx-runtime";
import { L as LayoutApp, S as ScrollProvider } from "./LayoutApp-75VrxIRl.js";
import { u as useSearchBarContext } from "./SearchBarContext-pj9rNtoS.js";
import { InertiaProgress } from "@inertiajs/progress";
import { S as SidebarLayout } from "./SidebarLayout-j5ZhPHuK.js";
import { D as DashboardSection } from "./DashboardSection-aKJa2CXf.js";
import "@inertiajs/react";
import { useState, useEffect } from "react";
import "./DarkModeContext-YHL6TNaC.js";
import "@inertiajs/inertia-react";
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
import "recharts";
import "moment";
import "@inertiajs/inertia";
import "react-toastify";
import "./PostCard-VMqstIkQ.js";
import "./Pagination-7t3xnya6.js";
function Dashboard({ auth, posts, users, user, postsUser, singlePost, tags }) {
  useSearchBarContext();
  const [dashboardLink, setDashboardLink] = useState(false);
  useEffect(() => {
    if (document.location.pathname === "/dashboard") {
      setDashboardLink(true);
    } else {
      setDashboardLink(false);
    }
  }, []);
  console.log(tags);
  return /* @__PURE__ */ jsx(
    LayoutApp,
    {
      user: auth.user,
      children: /* @__PURE__ */ jsx(ScrollProvider, { children: /* @__PURE__ */ jsxs(SidebarLayout, { children: [
        !dashboardLink && /* @__PURE__ */ jsx("div", { className: "", children: /* @__PURE__ */ jsx(DashboardSection, { posts, users }) }),
        dashboardLink && /* @__PURE__ */ jsx("div", { className: "min-h-screen ", children: /* @__PURE__ */ jsx(DashboardSection, { postsUser, user, singlePost, tags }) })
      ] }) })
    }
  );
}
InertiaProgress.init({ color: "#4B5563" });
export {
  Dashboard as default
};
