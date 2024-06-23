import { jsx, jsxs } from "react/jsx-runtime";
import { useEffect } from "react";
import { useForm, Link } from "@inertiajs/inertia-react";
import { G as Guest } from "./GuestLayout-Q-0ogT5X.js";
import { V as ValidationErrors, L as Label, I as Input } from "./Input-LgWINADB.js";
import { L as LoginBanner, A as ApplicationLogo, E as EncryptedButton } from "./EcryptedButton-b22JRfEz.js";
import "@inertiajs/react";
import "react-icons/fi/index.esm.js";
import "framer-motion";
function Register() {
  const { data, setData, post, processing, errors, reset } = useForm({
    name: "",
    email: "",
    password: "",
    password_confirmation: ""
  });
  useEffect(() => {
    return () => {
      reset("password", "password_confirmation");
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
    post(route("register"));
  };
  return /* @__PURE__ */ jsx(Guest, { children: /* @__PURE__ */ jsx("div", { className: "-mb-[40px]", children: /* @__PURE__ */ jsxs("div", { className: "w-[100%] flex flex-row-reverse ", children: [
    /* @__PURE__ */ jsx(LoginBanner, {}),
    /* @__PURE__ */ jsx("div", { className: "w-1/2 h-screen", children: /* @__PURE__ */ jsxs("div", { className: "w-[70%] mx-auto flex flex-col -mt-[70px]  ", children: [
      /* @__PURE__ */ jsx(
        Link,
        {
          href: "/",
          className: "flex justify-center w-[60%] mx-auto  ",
          children: /* @__PURE__ */ jsx(ApplicationLogo, { className: " fill-current text-gray-500" })
        }
      ),
      /* @__PURE__ */ jsx(ValidationErrors, { errors }),
      /* @__PURE__ */ jsxs(
        "form",
        {
          className: "-mt-[120px] w-full",
          onSubmit: submit,
          children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx(Label, { forInput: "name", value: "Name" }),
              /* @__PURE__ */ jsx(
                Input,
                {
                  type: "text",
                  name: "name",
                  value: data.name,
                  className: "mt-1 block w-full",
                  autoComplete: "name",
                  isFocused: true,
                  handleChange: onHandleChange,
                  required: true
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mt-3", children: [
              /* @__PURE__ */ jsx(Label, { forInput: "email", value: "Email" }),
              /* @__PURE__ */ jsx(
                Input,
                {
                  type: "email",
                  name: "email",
                  value: data.email,
                  className: "mt-1 block w-full",
                  autoComplete: "username",
                  handleChange: onHandleChange,
                  required: true
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mt-3", children: [
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
                  className: "mt-1 block w-full",
                  autoComplete: "new-password",
                  handleChange: onHandleChange,
                  required: true
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mt-3", children: [
              /* @__PURE__ */ jsx(
                Label,
                {
                  forInput: "password_confirmation",
                  value: "Confirm Password"
                }
              ),
              /* @__PURE__ */ jsx(
                Input,
                {
                  type: "password",
                  name: "password_confirmation",
                  value: data.password_confirmation,
                  className: "mt-1 block w-full",
                  handleChange: onHandleChange,
                  required: true
                }
              )
            ] }),
            /* @__PURE__ */ jsx("div", { className: "flex flex-col items-center justify-between mt-3", children: /* @__PURE__ */ jsx(
              Link,
              {
                href: route("login"),
                className: "underline text-sm text-gray-600 hover:text-gray-900",
                children: "Already registered?"
              }
            ) }),
            /* @__PURE__ */ jsx("div", { className: "w-[100%]", children: /* @__PURE__ */ jsx(EncryptedButton, { targetText: "Register", processing }) })
          ]
        }
      )
    ] }) })
  ] }) }) });
}
export {
  Register as default
};
