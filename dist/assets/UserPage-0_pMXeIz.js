import { jsxs, jsx } from "react/jsx-runtime";
import React, { useContext, useState } from "react";
import { Link, Head } from "@inertiajs/inertia-react";
import { L as LayoutApp } from "./LayoutApp-75VrxIRl.js";
import { D as DarkModeContext } from "./DarkModeContext-YHL6TNaC.js";
import { u as useSearchBarContext } from "./SearchBarContext-pj9rNtoS.js";
import "moment";
import { P as Pagination } from "./Pagination-7t3xnya6.js";
import "@inertiajs/react";
import "@headlessui/react";
import "react-icons/fa/index.esm.js";
import "alpinejs";
import "react-select";
import "react-icons/fa6/index.esm.js";
import "react-icons/bi/index.esm.js";
import "react-icons/ti/index.esm.js";
import "./SidebarContext-P_-bml5L.js";
const BlogCard = ({ title, username, postHref, userHref, description, postTags, created_at, imagePath, tagId }) => {
  const { darkMode } = useContext(DarkModeContext);
  useSearchBarContext();
  return /* @__PURE__ */ jsxs("div", { className: "hover:rounded-xl shadow-xl shadow-purple-900 group hover:scale-105 duration-300", children: [
    /* @__PURE__ */ jsx(Link, { href: postHref, children: /* @__PURE__ */ jsx("img", { className: "w-full h-[100px] opacity-75 group-hover:rounded-t-xl group-hover:opacity-100", src: imagePath, alt: "post image" }) }),
    /* @__PURE__ */ jsxs("div", { className: "p-2", children: [
      /* @__PURE__ */ jsx("h3", { className: "font-bold", children: title }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-row justify-between items-center", children: [
        /* @__PURE__ */ jsx(Link, { href: userHref, className: "font-bold text-sm", children: username }),
        /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold", children: created_at })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-xs", children: description }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-row gap-3 mt-3", children: postTags == null ? void 0 : postTags.map((tag, i) => /* @__PURE__ */ jsx(Link, { href: `/post-tag/${tagId}`, className: `${darkMode ? "bg-lightText text-darkText" : "bg-darkText text-lightBg"} px-1 rounded text-xs`, children: tag })) })
    ] })
  ] });
};
const UserPage = ({ user }) => {
  var _a, _b;
  const { darkMode } = useContext(DarkModeContext);
  useSearchBarContext();
  const [isOnLine, setIsOnLine] = useState(navigator.onLine);
  console.log(navigator);
  return /* @__PURE__ */ jsxs(React.Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { children: /* @__PURE__ */ jsx("title", { children: user.name }) }),
    /* @__PURE__ */ jsx(LayoutApp, { children: /* @__PURE__ */ jsxs(
      "div",
      {
        className: `${darkMode ? "bg-darkText" : "bg-lightBg"}  bg-homeBg bg-cover bg-center mt-[150px] mb-[50px]`,
        children: [
          /* @__PURE__ */ jsx("div", { class: "max-w-screen-xl mx-auto p-5 sm:p-8 md:p-12 relativ mt-[100px]", children: /* @__PURE__ */ jsx(
            "div",
            {
              class: `max-w-3xl mx-auto -mt-[50px] ${darkMode ? "bg-darkText text-lightText" : "bg-lightBg text-darkText"} rounded-xl relative z-11  `,
              children: /* @__PURE__ */ jsx("div", { class: " p-10 shadow-xl shadow-purple-900  rounded-xl flex flex-col justify-between leading-normal relative z-11  ", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-row items-center align-middle gap-3", children: [
                /* @__PURE__ */ jsxs("div", { className: "h-20 w-20 shrink-0 grow-0 rounded-full relative", children: [
                  /* @__PURE__ */ jsx(
                    "img",
                    {
                      src: "/imageusers/" + (user == null ? void 0 : user.imagePath),
                      className: "h-full w-full shrink-0 grow-0 rounded-[100%]",
                      alt: ""
                    }
                  ),
                  isOnLine && /* @__PURE__ */ jsx("div", { className: "bg-green-500 h-5 w-5 rounded-full absolute bottom-0 right-0" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "w-full flex flex-row justify-between items-center", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-0", children: [
                    /* @__PURE__ */ jsx(
                      "h2",
                      {
                        href: "#",
                        class: " font-bold text-xl ",
                        children: user.name
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      "h3",
                      {
                        href: "#",
                        class: " font-semibold text-md ",
                        children: user.email
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("span", { className: `${user.is_admin == 0 ? "bg-lightText text-darkText border-[1px] border-darkText" : user.is_admin == 1 ? "bg-darkText text-lightText border-[1px] border-lightText" : null} p-1 rounded-md`, children: user.is_admin == 1 ? "Admin" : user.is_admin == 0 ? "User" : null }) })
                ] })
              ] }) })
            }
          ) }),
          /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto", children: [
            /* @__PURE__ */ jsxs("h2", { className: "text-3xl font-bold text-center my-3", children: [
              user.name,
              "'s' Posts"
            ] }),
            /* @__PURE__ */ jsx("div", { className: "w-full gap-3", children: /* @__PURE__ */ jsx(Pagination, { Component: BlogCard, postTags: (_a = user.posts) == null ? void 0 : _a.map((post) => {
              var _a2;
              return (_a2 = post.tags) == null ? void 0 : _a2.map((tag) => tag);
            }), tagId: (_b = user.posts) == null ? void 0 : _b.map((post) => {
              var _a2;
              return (_a2 = post.tags) == null ? void 0 : _a2.map((tag) => tag.id);
            }), userItem: user, items: user.posts }) })
          ] })
        ]
      }
    ) })
  ] });
};
export {
  UserPage as default
};
