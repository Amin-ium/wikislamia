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
const PostsTag = ({ postsTag }) => {
  const { darkMode } = useContext(DarkModeContext);
  useSearchBarContext();
  useState("");
  return /* @__PURE__ */ jsxs(React.Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { children: /* @__PURE__ */ jsx("title", { children: "Posts Tag" }) }),
    /* @__PURE__ */ jsx(LayoutApp, { children: /* @__PURE__ */ jsx("div", { className: `${darkMode ? "bg-darkText" : "bg-lightBg"} bg-homeBg bg-cover bg-center mt-[150px] mb-[50px]`, children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto", children: [
      /* @__PURE__ */ jsxs("h2", { className: "text-3xl text-center my-3", children: [
        "Posts of Tag: ",
        /* @__PURE__ */ jsx("span", { className: "font-bold ", children: postsTag.tag.name })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "w-full grid grid-cols-4 gap-3", children: postsTag.tag.posts.map((post, i) => {
        var _a;
        return /* @__PURE__ */ jsxs(Link, { href: `/blogs/${post.id}`, className: "hover:rounded-xl shadow-xl shadow-purple-900 group hover:scale-105 duration-300", children: [
          /* @__PURE__ */ jsx("img", { className: "w-full h-[100px] opacity-75 group-hover:rounded-t-xl group-hover:opacity-100", src: "/imageusers/" + post.imagePath, alt: "post image" }),
          /* @__PURE__ */ jsxs("div", { className: "p-2", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-bold", children: post.title }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-row justify-between items-center", children: [
              /* @__PURE__ */ jsx("h3", { className: "font-bold text-sm", children: post.user.name }),
              /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold", children: moment(post.created_at).fromNow() })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-xs", children: post.description.substring(0, 70) + " ..." }),
            /* @__PURE__ */ jsx("div", { className: "flex flex-row gap-3 mt-3", children: (_a = post.tags) == null ? void 0 : _a.map((tag, i2) => /* @__PURE__ */ jsx(Link, { href: `/post-tag/${tag.id}`, className: `${darkMode ? "bg-lightText text-darkText" : "bg-darkText text-lightBg"} px-1 rounded text-xs`, children: tag.name })) })
          ] })
        ] });
      }) })
    ] }) }) })
  ] });
};
export {
  PostsTag as default
};
