import { jsx, jsxs } from "react/jsx-runtime";
import { T as TextInput, I as InputError } from "./TextInput-_LZ_Y2ow.js";
import { I as InputLabel } from "./InputLabel-OxGAYuNE.js";
import { P as PrimaryButton } from "./PrimaryButton-tCuq_nFx.js";
import { useForm, usePage, Link } from "@inertiajs/inertia-react";
import { Transition } from "@headlessui/react";
import { u as useSearchBarContext } from "./SearchBarContext-pj9rNtoS.js";
import { useContext, useState, useEffect } from "react";
import { D as DarkModeContext, a as DarkModeContextProvider } from "./DarkModeContext-YHL6TNaC.js";
import { Inertia } from "@inertiajs/inertia";
function EditImg({ mustVerifyEmail, status, className = "", user }) {
  useContext(DarkModeContext);
  const [imageFile, setImageFile] = useState([]);
  const [images, setImages] = useState([]);
  useState(null);
  useState("");
  const initialFormData = {
    imagePath: user && user.imagePath ? user.imagePath : ""
    // Check if user and user.imagePath exist
  };
  const { data, setData, patch, errors, processing, recentlySuccessful } = useForm(initialFormData);
  useEffect(() => {
    if (user && Array.isArray(user.image_user)) {
      setImages(user.image_user);
      console.log(images);
    }
  }, [user]);
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
  };
  const submit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    if (imageFile) {
      formData.append("imagePath", imageFile);
      console.log(formData.get("imagePath"));
    }
    await Inertia.post(route("profile.update"), formData);
  };
  console.log(user);
  return /* @__PURE__ */ jsx(DarkModeContextProvider, { children: /* @__PURE__ */ jsx("section", { className, children: /* @__PURE__ */ jsxs("form", { onSubmit: submit, children: [
    /* @__PURE__ */ jsxs("div", { className: "mt-5 mb-5 flex flex-col md:flex-col gap-2 ", children: [
      /* @__PURE__ */ jsx("img", { className: "h-[100px] w-[100px] ", src: "/imageusers/" + user.imagePath, alt: "" }),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "file",
          accept: "image/*",
          name: "imagePath",
          onChange: handleImageChange
        }
      )
    ] }),
    /* @__PURE__ */ jsx(PrimaryButton, { disabled: processing, children: "Save" })
  ] }) }) });
}
function UpdateProfileInformation({ mustVerifyEmail, status, className = "" }) {
  const user = usePage().props.auth.user;
  const { check, setCheck } = useSearchBarContext();
  const { darkMode } = useContext(DarkModeContext);
  const { data, setData, patch, errors, processing, recentlySuccessful } = useForm({
    imagePath: user.imagePath,
    name: user.name,
    email: user.email
  });
  const submit = (e) => {
    e.preventDefault();
    patch(route("profile.update"));
  };
  console.log(data);
  return /* @__PURE__ */ jsxs("section", { className: ` ${check === "ar" ? "test-right" : "text-left"} `, children: [
    /* @__PURE__ */ jsxs("header", { children: [
      /* @__PURE__ */ jsx("h2", { className: `${darkMode ? "text-lightText" : "text-darkText"} text-lg font-medium`, children: check === "eng" ? "Profile Information" : check === "fr" ? "Informations de profile" : check === "ar" ? "معلومات الصفحة الشخصية" : null }),
      /* @__PURE__ */ jsx("p", { className: `${darkMode ? "text-lightText" : "text-darkText"} mt-1 text-sm `, children: check === "eng" ? "Update your account's profile information and email address" : check === "fr" ? "Mis à jour des informations de profile et compte personnel" : check === "ar" ? "تحديث معلومات الصفحة الشخصية والحساب الشخصي" : null })
    ] }),
    /* @__PURE__ */ jsx(EditImg, { user }),
    /* @__PURE__ */ jsxs("form", { onSubmit: submit, className: "mt-6 space-y-6", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(InputLabel, { className: `${darkMode ? "text-lightText" : "text-darkText"}  `, htmlFor: "name", value: check === "eng" ? "Name" : check === "fr" ? "Nom" : check === "ar" ? "الاسم" : null }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "name",
            className: "mt-1 block w-full p-2 shadow-xl shadow-purple-500",
            value: data.name,
            onChange: (e) => setData("name", e.target.value),
            required: true,
            isFocused: true,
            autoComplete: "name"
          }
        ),
        /* @__PURE__ */ jsx(InputError, { className: "mt-2", message: errors.name })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(InputLabel, { className: `${darkMode ? "text-lightText" : "text-darkText"}  `, htmlFor: "email", value: check === "eng" ? "ُEmail" : check === "fr" ? "Email" : check === "ar" ? "البريد الالكتروني" : null }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "email",
            type: "email",
            className: "mt-1 block w-full p-2 shadow-xl shadow-purple-500",
            value: data.email,
            onChange: (e) => setData("email", e.target.value),
            required: true,
            autoComplete: "username"
          }
        ),
        /* @__PURE__ */ jsx(InputError, { className: "mt-2", message: errors.email })
      ] }),
      mustVerifyEmail && user.email_verified_at === null && /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("p", { className: "text-sm mt-2 text-gray-800", children: [
          check === "eng" ? "Your email address is unverified" : check === "fr" ? "Votre email est inverifié" : check === "ar" ? "البريد الالكتروني غير محقق" : null,
          /* @__PURE__ */ jsx(
            Link,
            {
              href: route("verification.send"),
              method: "post",
              as: "button",
              className: "underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
              children: check === "eng" ? "Click here to re-send the verification email" : check === "fr" ? "Clicker ici pour renvoyer l'email de verification" : check === "ar" ? "اضغط هنا لإعادة إرسال رسالة التحقق" : null
            }
          )
        ] }),
        status === "verification-link-sent" && /* @__PURE__ */ jsx("div", { className: "mt-2 font-medium text-sm text-green-600", children: check === "eng" ? "A new verification link has been sent to your email address" : check === "fr" ? "Un lien de verification a été envoyé à votre adresse email" : check === "ar" ? "لقد تم إرسال رابط التحقق الى بريدك الإلكتروني" : null })
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
            children: /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: check === "eng" ? "Saveي" : check === "fr" ? "Enregistré" : check === "ar" ? "تم الحفظ" : null })
          }
        )
      ] })
    ] })
  ] });
}
export {
  UpdateProfileInformation as default
};
