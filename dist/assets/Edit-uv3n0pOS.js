import { jsx, jsxs } from "react/jsx-runtime";
import DeleteUserForm from "./DeleteUserForm-3oiQdVwa.js";
import UpdatePasswordForm from "./UpdatePasswordForm-E7abq0Qr.js";
import UpdateProfileInformation from "./UpdateProfileInformationForm-aDndEpEr.js";
import { u as useSearchBarContext } from "./SearchBarContext-pj9rNtoS.js";
import { useContext } from "react";
import { S as SidebarContext } from "./SidebarContext-P_-bml5L.js";
import { C as CheckedLinksContext } from "./CheckLinksContext-UVw0xnMh.js";
import "./TextInput-_LZ_Y2ow.js";
import "./InputLabel-OxGAYuNE.js";
import "@headlessui/react";
import "@inertiajs/react";
import "./PrimaryButton-tCuq_nFx.js";
import "@inertiajs/inertia-react";
import "./DarkModeContext-YHL6TNaC.js";
import "@inertiajs/inertia";
function Edit({ auth, mustVerifyEmail, status }) {
  const { opened } = useContext(SidebarContext);
  const { check, setCheck } = useSearchBarContext();
  const { updateInfosPage, updatePasswordPage, deleteAccountPage } = useContext(CheckedLinksContext);
  console.log(updatePasswordPage);
  console.log(updatePasswordPage);
  console.log(deleteAccountPage);
  return /* @__PURE__ */ jsx("div", { className: `${opened ? "w-[calc(100%-240px)]" : "w-[calc(100%-40px)]"} ${check === "ar" ? "float-start text-right" : "float-end text-left"} px-3 duration-300  xl:h-screen mt-[50px] `, children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6", children: [
    updateInfosPage && /* @__PURE__ */ jsx("div", { className: "p-4 sm:p-8   shadow-2xl shadow-purple-700 sm:rounded-lg", children: /* @__PURE__ */ jsx(
      UpdateProfileInformation,
      {
        mustVerifyEmail,
        status,
        className: "max-w-xl"
      }
    ) }),
    updatePasswordPage && /* @__PURE__ */ jsx("div", { className: "p-4 sm:p-8 bg-grayBg  shadow sm:rounded-lg", children: /* @__PURE__ */ jsx(UpdatePasswordForm, { className: "max-w-xl" }) }),
    deleteAccountPage && /* @__PURE__ */ jsx("div", { className: "p-4 bg-grayBg  sm:p-8 shadow sm:rounded-lg", children: /* @__PURE__ */ jsx(DeleteUserForm, { className: "max-w-xl" }) })
  ] }) });
}
export {
  Edit as default
};
