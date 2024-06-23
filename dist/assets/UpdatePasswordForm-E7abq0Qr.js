import { jsxs, jsx } from "react/jsx-runtime";
import { useRef } from "react";
import { T as TextInput, I as InputError } from "./TextInput-_LZ_Y2ow.js";
import { I as InputLabel } from "./InputLabel-OxGAYuNE.js";
import { P as PrimaryButton } from "./PrimaryButton-tCuq_nFx.js";
import { useForm } from "@inertiajs/react";
import { Transition } from "@headlessui/react";
import { u as useSearchBarContext } from "./SearchBarContext-pj9rNtoS.js";
function UpdatePasswordForm({ className = "" }) {
  const passwordInput = useRef();
  const currentPasswordInput = useRef();
  const { check, setCheck } = useSearchBarContext();
  const { data, setData, errors, put, reset, processing, recentlySuccessful } = useForm({
    current_password: "",
    password: "",
    password_confirmation: ""
  });
  const updatePassword = (e) => {
    e.preventDefault();
    put(route("password.update"), {
      preserveScroll: true,
      onSuccess: () => reset(),
      onError: (errors2) => {
        if (errors2.password) {
          reset("password", "password_confirmation");
          passwordInput.current.focus();
        }
        if (errors2.current_password) {
          reset("current_password");
          currentPasswordInput.current.focus();
        }
      }
    });
  };
  return /* @__PURE__ */ jsxs("section", { className: `bg-grayBg`, children: [
    /* @__PURE__ */ jsxs("header", { children: [
      /* @__PURE__ */ jsx("h2", { className: "text-lg font-medium text-gray-900", children: check === "eng" ? "Update Password" : check === "fr" ? "Mise-à-jour le mot de passe" : check === "ar" ? "تحديث كلمة السر" : null }),
      /* @__PURE__ */ jsxs("p", { className: "mt-1 text-sm text-gray-600", children: [
        "value=",
        check === "eng" ? "Ensure your account is using a long, random password to stay secure" : check === "fr" ? "Assurez-vous que votre compte utilise un mot de passe long et aléatoire pour rester en sécurité" : check === "ar" ? "تأكد من أن حسابك يستخدم كلمة مرور طويلة وعشوائية ليظل آمنًا" : null
      ] })
    ] }),
    /* @__PURE__ */ jsxs("form", { onSubmit: updatePassword, className: "mt-6 space-y-6", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "current_password", value: check === "eng" ? "Current Password" : check === "fr" ? "Mot de passe actuel" : check === "ar" ? " كلمة السر الحالية" : null }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "current_password",
            ref: currentPasswordInput,
            value: data.current_password,
            onChange: (e) => setData("current_password", e.target.value),
            type: "password",
            className: "mt-1 block w-full",
            autoComplete: "current-password"
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.current_password, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "password", value: check === "eng" ? "New Password" : check === "fr" ? "Nouveau Mot de passe" : check === "ar" ? " كلمة السر جديدة" : null }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "password",
            ref: passwordInput,
            value: data.password,
            onChange: (e) => setData("password", e.target.value),
            type: "password",
            className: "mt-1 block w-full",
            autoComplete: "new-password"
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.password, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "password_confirmation", value: check === "eng" ? "Confirm Password" : check === "fr" ? "Confirmer le Mot de passe" : check === "ar" ? "تأكيد كلمة السر" : null }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "password_confirmation",
            value: data.password_confirmation,
            onChange: (e) => setData("password_confirmation", e.target.value),
            type: "password",
            className: "mt-1 block w-full",
            autoComplete: "new-password"
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.password_confirmation, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsx(PrimaryButton, { disabled: processing, children: check === "eng" ? "Save" : check === "fr" ? "Enregistrer" : check === "ar" ? "حفظ" : null }),
        /* @__PURE__ */ jsx(
          Transition,
          {
            show: recentlySuccessful,
            enter: "transition ease-in-out",
            enterFrom: "opacity-0",
            leave: "transition ease-in-out",
            leaveTo: "opacity-0",
            children: /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: check === "eng" ? "Saved" : check === "fr" ? "Enregistré" : check === "ar" ? "تم الحفظ" : null })
          }
        )
      ] })
    ] })
  ] });
}
export {
  UpdatePasswordForm as default
};
