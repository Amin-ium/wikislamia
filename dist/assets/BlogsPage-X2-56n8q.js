import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { L as LayoutApp } from "./LayoutApp-75VrxIRl.js";
import { Head } from "@inertiajs/inertia-react";
import { useState } from "react";
import { P as Pagination } from "./Pagination-7t3xnya6.js";
import { P as PostCard } from "./PostCard-VMqstIkQ.js";
import { S as SectionTitle } from "./SectionTitle-ZXNEerM7.js";
import { u as useSearchBarContext } from "./SearchBarContext-pj9rNtoS.js";
import "./DarkModeContext-YHL6TNaC.js";
import "@inertiajs/react";
import "@headlessui/react";
import "react-icons/fa/index.esm.js";
import "alpinejs";
import "react-select";
import "react-icons/fa6/index.esm.js";
import "react-icons/bi/index.esm.js";
import "react-icons/ti/index.esm.js";
import "./SidebarContext-P_-bml5L.js";
import "moment";
const blogsBanner = "/build/assets/quranBanner-iZ2IfgPd.png";
const BlogsPage = ({ posts }) => {
  const { check, setCheck } = useSearchBarContext();
  useState(true);
  const textBanner = [
    "O mankind, indeed We have created you from male and female and made you peoples and tribes that you may know one another",
    "O hommes, Nous vous avons créés d'un mâle et d'une femelle, et Nous avons fait de vous des nations et des tribus, pour que vous vous entre-connaissiez",
    "يَا أَيُّهَا النَّاسُ إِنَّا خَلَقْنَاكُم مِّن ذَكَرٍ وَأُنثَىٰ وَجَعَلْنَاكُمْ شُعُوبًا وَقَبَائِلَ لِتَعَارَفُوا"
  ];
  console.log(posts);
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs(LayoutApp, { children: [
    /* @__PURE__ */ jsx(Head, { children: /* @__PURE__ */ jsx("title", { children: "Blogs Page" }) }),
    /* @__PURE__ */ jsx("div", { className: "w-full", children: /* @__PURE__ */ jsxs("div", { className: "w-[80%] mx-auto flex flex-col ", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col  justify-center items-center -mt-[50px] relative ", children: [
        /* @__PURE__ */ jsx("img", { className: "w-[40%] h-[40%]", src: blogsBanner, alt: "" }),
        /* @__PURE__ */ jsx("p", { className: "w-[28%]  text-[15px] text-center leading-5 font-bold text-lightText  absolute", children: check === "ar" ? textBanner[2] : check === "eng" ? textBanner[0] : check === "fr" ? textBanner[1] : null })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-[30px] -mt-[70px]", children: [
        /* @__PURE__ */ jsx(SectionTitle, { title: "Post&Blogs", des: "Enjoy Reading and Posting" }),
        /* @__PURE__ */ jsx(Pagination, { className: "", Component: PostCard, items: posts })
      ] }),
      /* @__PURE__ */ jsx("div", {})
    ] }) })
  ] }) });
};
export {
  BlogsPage as default
};
