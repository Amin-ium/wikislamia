import { jsx } from "react/jsx-runtime";
import "@inertiajs/react";
function Guest({ children }) {
  return /* @__PURE__ */ jsx("div", { className: "h-screen  flex flex-col   ", children: /* @__PURE__ */ jsx("div", { className: "w-full  h-screen bg-lightBg", children }) });
}
export {
  Guest as G
};
