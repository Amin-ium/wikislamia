import { jsx, jsxs } from "react/jsx-runtime";
import { useContext, useEffect } from "react";
import { useForm, Link } from "@inertiajs/inertia-react";
import { V as ValidationErrors, L as Label, I as Input } from "./Input-LgWINADB.js";
import { G as Guest } from "./GuestLayout-Q-0ogT5X.js";
import { L as LoginBanner, A as ApplicationLogo, E as EncryptedButton } from "./EcryptedButton-b22JRfEz.js";
import { D as DarkModeContext, a as DarkModeContextProvider } from "./DarkModeContext-YHL6TNaC.js";
import "@inertiajs/react";
import "react-icons/fi/index.esm.js";
import "framer-motion";
function Checkbox({ className = "", ...props }) {
  return /* @__PURE__ */ jsx(
    "input",
    {
      ...props,
      type: "checkbox",
      className: "rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500 " + className
    }
  );
}
function Login({ status, canResetPassword }) {
  const { darkMode } = useContext(DarkModeContext);
  console.log(darkMode);
  const { data, setData, post, processing, errors, reset } = useForm({
    email: "",
    password: "",
    remember: ""
  });
  useEffect(() => {
    return () => {
      reset("password");
    };
  }, []);
  const onHandleChange = (event) => {
    setData(
      event.target.name,
      event.target.type === "checkbox" ? event.target.checked : event.target.value
    );
  };
  const submit = (e) => {
    e.preventDefault();
    post(route("login"));
  };
  return /* @__PURE__ */ jsx(DarkModeContextProvider, { children: /* @__PURE__ */ jsx(
    Guest,
    {
      className: `${darkMode ? "bg-green-500 text-lightText" : "bg-red-500 text-darkText"} `,
      children: /* @__PURE__ */ jsx("div", { className: "-mb-[40px]", children: /* @__PURE__ */ jsxs("div", { className: "w-[100%] flex flex-row-reverse ", children: [
        /* @__PURE__ */ jsx(LoginBanner, {}),
        /* @__PURE__ */ jsx("div", { className: "w-1/2 h-screen", children: /* @__PURE__ */ jsxs("div", { className: "w-[70%] mx-auto flex flex-col  ", children: [
          /* @__PURE__ */ jsx(Link, { href: "/", className: "flex justify-center w-[60%] mx-auto  ", children: /* @__PURE__ */ jsx(ApplicationLogo, { className: " fill-current text-gray-500" }) }),
          status && /* @__PURE__ */ jsx("div", { className: "mb-4 font-medium text-sm text-green-600", children: status }),
          /* @__PURE__ */ jsx(ValidationErrors, { errors }),
          /* @__PURE__ */ jsxs("form", { className: "-mt-[120px]", onSubmit: submit, children: [
            /* @__PURE__ */ jsxs(
              "div",
              {
                className: `${darkMode ? " text-lightText" : " text-lightText"}`,
                children: [
                  /* @__PURE__ */ jsx(Label, { forInput: "email", value: "Email", className: "text-darkText" }),
                  /* @__PURE__ */ jsx(
                    Input,
                    {
                      type: "text",
                      name: "email",
                      value: data.email,
                      className: "mt-1 block w-full p-2",
                      autoComplete: "username",
                      isFocused: true,
                      handleChange: onHandleChange
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
              /* @__PURE__ */ jsx(
                Label,
                {
                  forInput: "password",
                  value: "Password"
                }
              ),
              /* @__PURE__ */ jsx(
                Input,
                {
                  type: "password",
                  name: "password",
                  value: data.password,
                  className: "mt-1 block w-full p-2",
                  autoComplete: "current-password",
                  handleChange: onHandleChange
                }
              )
            ] }),
            /* @__PURE__ */ jsx("div", { className: "block mt-4", children: /* @__PURE__ */ jsxs("label", { className: "flex items-center", children: [
              /* @__PURE__ */ jsx(
                Checkbox,
                {
                  name: "remember",
                  value: data.remember,
                  handleChange: onHandleChange
                }
              ),
              /* @__PURE__ */ jsx("span", { className: "ml-2 text-sm ", children: "Remember me" })
            ] }) }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-3  mt-4 ", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex flex-row  justify-between", children: [
                /* @__PURE__ */ jsx(
                  Link,
                  {
                    href: "/register",
                    className: "underline text-sm  ",
                    children: "Register"
                  }
                ),
                canResetPassword && /* @__PURE__ */ jsx(
                  Link,
                  {
                    href: route("password.request"),
                    className: "underline text-sm  ",
                    children: "Forgot your password?"
                  }
                )
              ] }),
              /* @__PURE__ */ jsx("div", { className: "mt-2", children: /* @__PURE__ */ jsx(EncryptedButton, { targetText: "Login", processing }) })
            ] })
          ] })
        ] }) })
      ] }) })
    }
  ) });
}
export {
  Login as default
};
