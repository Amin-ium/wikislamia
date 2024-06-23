import { jsxs, jsx } from "react/jsx-runtime";
import React, { useContext, useState } from "react";
import { Head, Link } from "@inertiajs/inertia-react";
import { L as LayoutApp } from "./LayoutApp-75VrxIRl.js";
import { D as DarkModeContext } from "./DarkModeContext-YHL6TNaC.js";
import { u as useSearchBarContext } from "./SearchBarContext-pj9rNtoS.js";
import moment from "moment";
import "@inertiajs/react";
import "@headlessui/react";
import "react-icons/fa/index.esm.js";
import "alpinejs";
import "react-select";
import "react-icons/fa6/index.esm.js";
import "react-icons/bi/index.esm.js";
import "react-icons/ti/index.esm.js";
import "./SidebarContext-P_-bml5L.js";
const Post = ({ mypost, posts }) => {
  var _a;
  const { darkMode } = useContext(DarkModeContext);
  useSearchBarContext();
  useState("");
  console.log(posts);
  return /* @__PURE__ */ jsxs(React.Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { children: /* @__PURE__ */ jsx("title", { children: mypost.title }) }),
    /* @__PURE__ */ jsx(LayoutApp, { children: /* @__PURE__ */ jsxs("div", { className: `${darkMode ? "bg-darkText" : "bg-lightBg"} bg-homeBg bg-cover bg-center mb-[50px]`, children: [
      /* @__PURE__ */ jsxs("div", { class: "max-w-screen-xl mx-auto p-5 sm:p-8 md:p-12 relativ mt-[100px]", children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            class: "bg-cover h-64 text-center overflow-hidden bg-custom-image z-10 ",
            style: { backgroundImage: `url("/imageusers/${mypost.imagePath}")` }
          }
        ),
        /* @__PURE__ */ jsx("div", { class: `max-w-3xl mx-auto -mt-[50px] ${darkMode ? "bg-darkText text-lightText" : "bg-lightBg text-darkText"} rounded-xl relative z-11  `, children: /* @__PURE__ */ jsx(
          "div",
          {
            class: " p-10 shadow-xl shadow-purple-900  rounded-xl flex flex-col justify-between leading-normal relative z-11  ",
            children: /* @__PURE__ */ jsxs("div", { class: "", children: [
              /* @__PURE__ */ jsx("h1", { href: "#", class: " font-bold text-3xl mb-2", children: mypost.title }),
              /* @__PURE__ */ jsxs("p", { class: " text-xs mt-2", children: [
                "Written By:",
                /* @__PURE__ */ jsx(
                  Link,
                  {
                    href: "#",
                    class: " font-medium hover:text-gray-900 transition duration-500 ease-in-out",
                    children: /* @__PURE__ */ jsx("span", { className: "mx-1", children: mypost.user.name })
                  }
                )
              ] }),
              /* @__PURE__ */ jsx("p", { class: "text-base leading-8 my-5", children: mypost.description }),
              /* @__PURE__ */ jsx("div", { className: "flex flex-row gap-3", children: (_a = mypost.tags) == null ? void 0 : _a.map((tag, i) => /* @__PURE__ */ jsx(
                Link,
                {
                  href: `/post-tag/${tag.id}`,
                  class: `${darkMode ? "bg-lightText text-darkText" : "bg-darkText text-lightBg"} p-1 rounded text-xs font-medium hover:text-gray-900 transition duration-500 ease-in-out`,
                  children: tag.name
                }
              )) })
            ] })
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-center my-3", children: "Last Posts" }),
        /* @__PURE__ */ jsx("div", { className: "w-full grid grid-cols-4 gap-3", children: posts.map((post, i) => {
          var _a2;
          return /* @__PURE__ */ jsxs("div", { className: "hover:rounded-xl shadow-xl shadow-purple-900 group hover:scale-105 duration-300", children: [
            /* @__PURE__ */ jsx(Link, { href: `/blogs/${post.id}`, children: /* @__PURE__ */ jsx("img", { className: "w-full h-[100px] opacity-75 group-hover:rounded-t-xl group-hover:opacity-100", src: "/imageusers/" + post.imagePath, alt: "post image" }) }),
            /* @__PURE__ */ jsxs("div", { className: "p-2", children: [
              /* @__PURE__ */ jsx("h3", { className: "font-bold", children: post.title }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-row justify-between items-center", children: [
                /* @__PURE__ */ jsx(Link, { href: `/user/${post.user.id}`, className: "font-bold text-sm", children: post.user.name }),
                /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold", children: moment(post.created_at).fromNow() })
              ] }),
              /* @__PURE__ */ jsx("p", { className: "text-xs", children: post.description.substring(0, 70) + " ..." }),
              /* @__PURE__ */ jsx("div", { className: "flex flex-row gap-3 mt-3", children: (_a2 = post.tags) == null ? void 0 : _a2.map((tag, i2) => /* @__PURE__ */ jsx(Link, { href: `/post-tag/${tag.id}`, className: `${darkMode ? "bg-lightText text-darkText" : "bg-darkText text-lightBg"} px-1 rounded text-xs`, children: tag.name })) })
            ] })
          ] });
        }) })
      ] })
    ] }) })
  ] });
};
export {
  Post as default
};
