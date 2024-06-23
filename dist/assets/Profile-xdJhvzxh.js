import { jsx } from "react/jsx-runtime";
import { L as LayoutApp, S as ScrollProvider } from "./LayoutApp-75VrxIRl.js";
import { u as useSearchBarContext } from "./SearchBarContext-pj9rNtoS.js";
import { S as SidebarLayout } from "./SidebarLayout-j5ZhPHuK.js";
import "./DashboardSection-aKJa2CXf.js";
import "@inertiajs/react";
import Edit from "./Edit-uv3n0pOS.js";
import "react";
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
import "./DeleteUserForm-3oiQdVwa.js";
import "./TextInput-_LZ_Y2ow.js";
import "./InputLabel-OxGAYuNE.js";
import "./UpdatePasswordForm-E7abq0Qr.js";
import "./PrimaryButton-tCuq_nFx.js";
import "./UpdateProfileInformationForm-aDndEpEr.js";
function Profile({ auth }) {
  useSearchBarContext();
  return /* @__PURE__ */ jsx(
    LayoutApp,
    {
      user: auth.user,
      children: /* @__PURE__ */ jsx(ScrollProvider, { children: /* @__PURE__ */ jsx(SidebarLayout, { children: /* @__PURE__ */ jsx("div", { className: "mt-12", children: /* @__PURE__ */ jsx(Edit, {}) }) }) })
    }
  );
}
export {
  Profile as default
};
