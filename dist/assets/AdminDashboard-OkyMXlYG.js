import { jsx } from "react/jsx-runtime";
import { L as LayoutApp, S as ScrollProvider } from "./LayoutApp-75VrxIRl.js";
import { u as useSearchBarContext } from "./SearchBarContext-pj9rNtoS.js";
import { S as SidebarLayout } from "./SidebarLayout-j5ZhPHuK.js";
import { D as DashboardSection } from "./DashboardSection-aKJa2CXf.js";
import "@inertiajs/react";
import { useEffect } from "react";
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
function AdminDashboard({ auth, posts, users, adminUser }) {
  useSearchBarContext();
  useEffect(() => {
    if (document.location.pathname === "/dashboard") {
      console.log("dashboard");
    } else if (document.location.pathname === "/admin-dashboard") {
      console.log("not dashboard");
    }
  }, []);
  console.log(posts);
  return /* @__PURE__ */ jsx(
    LayoutApp,
    {
      user: auth.user,
      children: /* @__PURE__ */ jsx(ScrollProvider, { children: /* @__PURE__ */ jsx(SidebarLayout, { children: /* @__PURE__ */ jsx("div", { className: "py-12", children: /* @__PURE__ */ jsx(DashboardSection, { posts, users, adminUser }) }) }) })
    }
  );
}
export {
  AdminDashboard as default
};
