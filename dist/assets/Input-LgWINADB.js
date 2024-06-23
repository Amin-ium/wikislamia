import { jsxs, jsx } from "react/jsx-runtime";
import { useRef, useEffect } from "react";
function ValidationErrors({ errors }) {
  return Object.keys(errors).length > 0 && /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
    /* @__PURE__ */ jsx("div", { className: "font-medium text-red-600", children: "Whoops! Something went wrong." }),
    /* @__PURE__ */ jsx("ul", { className: "mt-3 list-disc list-inside text-sm text-red-600", children: Object.keys(errors).map(function(key, index) {
      return /* @__PURE__ */ jsx("li", { children: errors[key] }, index);
    }) })
  ] });
}
function Label({ forInput, value, className, children }) {
  return /* @__PURE__ */ jsx("label", { htmlFor: forInput, className: `block font-medium text-sm  ` + className, children: value ? value : children });
}
function Input({
  type = "text",
  name,
  value,
  className,
  autoComplete,
  required,
  isFocused,
  handleChange
}) {
  const input = useRef();
  useEffect(() => {
    if (isFocused) {
      input.current.focus();
    }
  }, []);
  return /* @__PURE__ */ jsx("div", { className: "flex flex-col items-start", children: /* @__PURE__ */ jsx(
    "input",
    {
      type,
      name,
      value,
      className: `border-gray-300 bg-transparent  focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-darkText rounded-md shadow-lg shadow-purple-900 ` + className,
      ref: input,
      autoComplete,
      required,
      onChange: (e) => handleChange(e)
    }
  ) });
}
export {
  Input as I,
  Label as L,
  ValidationErrors as V
};
