import { jsxs, jsx } from "react/jsx-runtime";
import React, { useContext, useState, useEffect } from "react";
import { usePage, Link } from "@inertiajs/inertia-react";
import { l as logoLight, N as Navbar } from "./LayoutApp-75VrxIRl.js";
import { D as DarkModeContext } from "./DarkModeContext-YHL6TNaC.js";
import { S as SidebarContext, a as SidebarContextProvider } from "./SidebarContext-P_-bml5L.js";
import { u as useSearchBarContext } from "./SearchBarContext-pj9rNtoS.js";
import { FaArrowCircleLeft, FaArrowCircleRight, FaChartLine } from "react-icons/fa/index.esm.js";
import { ImProfile } from "react-icons/im/index.esm.js";
import { MdDashboard, MdDeleteForever } from "react-icons/md/index.esm.js";
import { LuClipboardEdit } from "react-icons/lu/index.esm.js";
import { RiLockPasswordFill, RiImageEditFill } from "react-icons/ri/index.esm.js";
import { IoIosSettings } from "react-icons/io/index.esm.js";
import { BsPostcardFill } from "react-icons/bs/index.esm.js";
import { C as CheckedLinksContext } from "./CheckLinksContext-UVw0xnMh.js";
const lightLogo = "/build/assets/Group144444-irE4YdjM.svg";
const Sidebar = () => {
  const { opened, handleSidebar, setOpened } = useContext(SidebarContext);
  const { check, setCheck } = useSearchBarContext();
  const [dashboard, setDashboard] = useState(null);
  const [adminDashboard, setAdminDashboard] = useState(null);
  const [profile, setProfile] = useState(null);
  const [updateInfosLink, setUpdateInfosLink] = useState(false);
  const [updatePasswordLink, setUpdatePasswordLink] = useState(false);
  const [deleteAccountLink, setDeleteAccountLink] = useState(false);
  const {
    updateInfosPage,
    setUpdateInfosPage,
    updatePasswordPage,
    setUpdatePasswordPage,
    deleteAccountPage,
    setDeleteAccountPage,
    statisticsDashboard,
    setStatisticsDashboard,
    yourPosts,
    setYourPosts,
    createPost,
    setCreatePost,
    setting,
    setSetting,
    turnOffLinks,
    toggleStatisticsDashboard,
    toggleYourPosts,
    toggleCreatePost,
    toggleSetting
  } = useContext(CheckedLinksContext);
  const { auth } = usePage().props;
  const { toggle, darkMode } = useContext(DarkModeContext);
  useState(false);
  const [checkedLink, setCheckedLink] = useState("");
  useState(false);
  console.log(createPost);
  console.log(yourPosts);
  useEffect(() => {
    if (window.location.pathname === "/dashboard") {
      setDashboard(true);
      setProfile(false);
      setAdminDashboard(false);
    } else if (window.location.pathname === "/profile") {
      setProfile(true);
      setDashboard(false);
      setAdminDashboard(false);
    } else if (window.location.pathname === "/admin-dashboard") {
      setProfile(false);
      setDashboard(false);
      setAdminDashboard(true);
    } else if (window.location.pathname.includes("dashboard")) {
      setProfile(false);
      setDashboard(true);
      setAdminDashboard(false);
    }
  }, []);
  const toggleUpdateInfosPage = () => {
    setUpdateInfosPage(true);
    setUpdatePasswordPage(false);
    setDeleteAccountPage(false);
    setCheckedLink("updateInfosPage");
  };
  const toggleUpdatePasswordPage = () => {
    setUpdateInfosPage(false);
    setUpdatePasswordPage(true);
    setDeleteAccountPage(false);
    setCheckedLink("updatePasswordPage");
  };
  const toggleDeleteAccountPage = () => {
    setUpdateInfosPage(false);
    setUpdatePasswordPage(false);
    setDeleteAccountPage(true);
    setCheckedLink("deleteAccountPage");
  };
  useEffect(() => {
    if (updateInfosPage) {
      setUpdateInfosLink(true);
      setUpdatePasswordLink(false);
      setDeleteAccountLink(true);
    } else if (updatePasswordPage) {
      setUpdateInfosLink(false);
      setUpdatePasswordLink(true);
      setDeleteAccountLink(false);
    } else if (deleteAccountLink) {
      setUpdateInfosLink(false);
      setUpdatePasswordLink(false);
      setDeleteAccountLink(true);
    }
  }, []);
  const profileLinks = [
    { linkEng: "Update Infos", linkFr: "ُEdit Infos", linkAr: "تحديث المعلومات", href: "href01", icon: /* @__PURE__ */ jsx(LuClipboardEdit, { size: opened ? 18 : 22, className: `${checkedLink === "updateInfosPage" ? "text-lightText" : " text-gray-500"}  cursor-pointer`, onClick: toggleUpdateInfosPage }), method: toggleUpdateInfosPage, linkElementAr: /* @__PURE__ */ jsx("p", { className: `${checkedLink === "updateInfosPage" ? "text-lightText" : " text-gray-500"} ${check === "ar" ? "text-right" : "text-left "}  `, children: check === "ar" ? "تحديث المعلومات" : check === "eng" ? "Update Infos" : check === "fr" ? "Edit Infos" : null }) },
    { linkEng: "Update Password", linkFr: "Edit Mot de passe", linkAr: "تغيير كلمة السر", href: "href02", icon: /* @__PURE__ */ jsx(RiLockPasswordFill, { size: opened ? 18 : 22, className: ` text-lightText cursor-pointer`, onClick: toggleUpdatePasswordPage }), method: toggleUpdatePasswordPage, linkElementAr: /* @__PURE__ */ jsx("p", { className: `${check === "ar" ? "text-right" : "text-left "}  ${updateInfosLink ? "  " : ""} `, children: check === "ar" ? "تغيير كلمة السر" : check === "eng" ? "Update Password" : check === "fr" ? "Editer Mot de passe" : null }) },
    { linkEng: "Delete account", linkFr: "Supprimer le compte", linkAr: "حذف الحساب", href: "href03", icon: /* @__PURE__ */ jsx(MdDeleteForever, { size: opened ? 18 : 22, className: ` text-lightText cursor-pointer`, onClick: toggleDeleteAccountPage }), method: toggleDeleteAccountPage, linkElementAr: /* @__PURE__ */ jsx("p", { className: `${check === "ar" ? "text-right" : "text-left "}  ${updateInfosLink ? "  " : ""} `, children: check === "ar" ? "حذف الحساب" : check === "eng" ? "Delete Account" : check === "fr" ? "Suprimer le compte" : null }) },
    { linkEng: "Setting", linkFr: "Paramtres", linkAr: "إعدادات", href: "href04", icon: /* @__PURE__ */ jsx(IoIosSettings, { size: opened ? 18 : 22, className: ` text-lightText cursor-pointer` }), method: null, linkElementAr: /* @__PURE__ */ jsx("p", { className: `${check === "ar" ? "text-right" : "text-left "}  ${updateInfosLink ? "  " : ""} `, children: check === "ar" ? "إعدادات" : check === "eng" ? "Setting" : check === "fr" ? "Paramtres" : null }) }
  ];
  const dashboardLinks = [
    { linkEng: "Statistics", linkFr: "Statistiques", linkAr: "إحصائيات", href: "href01", icon: /* @__PURE__ */ jsx(FaChartLine, { size: opened ? 18 : 22, className: ` text-lightText cursor-pointer`, onClick: toggleStatisticsDashboard }), method: toggleStatisticsDashboard },
    { linkEng: "Your Posts", linkFr: "Votre Posts", linkAr: "مقالاتك", href: "href02", icon: /* @__PURE__ */ jsx(BsPostcardFill, { size: opened ? 18 : 22, className: ` text-lightText cursor-pointer`, onClick: toggleYourPosts }), method: toggleYourPosts },
    { linkEng: "Create Post", linkFr: "Créer un Post", linkAr: "أنشر مقالا", href: "href03", icon: /* @__PURE__ */ jsx(RiImageEditFill, { size: opened ? 18 : 22, className: ` text-lightText cursor-pointer`, onClick: toggleCreatePost }), method: toggleCreatePost },
    { linkEng: "Setting", linkFr: "Paramtres", linkAr: "إعدادات", href: "href04", icon: /* @__PURE__ */ jsx(IoIosSettings, { size: opened ? 18 : 22, className: ` text-lightText cursor-pointer`, onClick: toggleSetting }), method: toggleSetting }
  ];
  const adminDashboardLinks = [
    { linkEng: "Statistics", linkFr: "Statistiques", linkAr: "إحصائيات", href: "href01", icon: /* @__PURE__ */ jsx(FaChartLine, { size: opened ? 18 : 22, className: ` text-lightText cursor-pointer`, onClick: toggleStatisticsDashboard }), method: toggleStatisticsDashboard },
    { linkEng: "All Posts", linkFr: "Tous les Posts", linkAr: "جميع المقالات", href: "href02", icon: /* @__PURE__ */ jsx(BsPostcardFill, { size: opened ? 18 : 22, className: ` text-lightText cursor-pointer`, onClick: toggleYourPosts }), method: toggleYourPosts },
    { linkEng: "All Tags", linkFr: "Tous les Tags", linkAr: "أنشر مقالا", href: "href03", icon: /* @__PURE__ */ jsx(RiImageEditFill, { size: opened ? 18 : 22, className: ` text-lightText cursor-pointer`, onClick: toggleCreatePost }), method: toggleCreatePost },
    { linkEng: "Setting", linkFr: "Paramtres", linkAr: "إعدادات", href: "href04", icon: /* @__PURE__ */ jsx(IoIosSettings, { size: opened ? 18 : 22, className: ` text-lightText cursor-pointer`, onClick: toggleSetting }), method: toggleSetting }
  ];
  console.log(checkedLink);
  return /* @__PURE__ */ jsxs("div", { className: `${opened ? "w-[240px]" : "w-[40px] xl:items-center"} ${check === "ar" ? "fixed right-0 " : "fixed left-0 "}  h-screen bg-darkText duration-300 text-lightText xl:flex xl:flex-col flex flex-col z-20 `, children: [
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(Link, { href: "/", className: " ", children: /* @__PURE__ */ jsx(
      "img",
      {
        className: `${opened ? "w-[200px] h-[60px]" : "w-[100px] h-[30px] my-3"}    `,
        src: darkMode && opened ? logoLight : !darkMode && opened ? logoLight : darkMode && !opened ? lightLogo : !darkMode && !opened ? lightLogo : "",
        alt: ""
      }
    ) }) }),
    /* @__PURE__ */ jsxs("div", { className: `${check === "ar" ? "flex-row-reverse" : "flex-row"} flex  justify-between mt-3  mx-1  border-b-[1px] border-[#f1f1f125] py-2`, children: [
      opened && /* @__PURE__ */ jsxs("h2", { children: [
        "@",
        auth.user.name
      ] }),
      opened && check === "fr" && /* @__PURE__ */ jsx(FaArrowCircleLeft, { size: 24, className: `${opened ? "" : ""} `, onClick: () => setOpened(!opened) }),
      !opened && check === "fr" && /* @__PURE__ */ jsx(FaArrowCircleRight, { size: 24, className: `${opened ? "" : ""} `, onClick: () => setOpened(!opened) }),
      opened && check === "eng" && /* @__PURE__ */ jsx(FaArrowCircleLeft, { size: 24, className: `${opened ? "" : ""} `, onClick: () => setOpened(!opened) }),
      !opened && check === "eng" && /* @__PURE__ */ jsx(FaArrowCircleRight, { size: 24, className: `${opened ? "" : ""} `, onClick: () => setOpened(!opened) }),
      opened && check === "ar" && /* @__PURE__ */ jsx(FaArrowCircleRight, { size: 24, className: `${opened ? "" : ""} `, onClick: () => setOpened(!opened) }),
      !opened && check === "ar" && /* @__PURE__ */ jsx(FaArrowCircleLeft, { size: 24, className: `${opened ? "" : ""} `, onClick: () => setOpened(!opened) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col   align-middle gap-3 mt-5 px-3", children: [
      /* @__PURE__ */ jsxs("div", { className: `w-full bg-lightBg text-darkText p-1  rounded-lg flex ${check === "ar" ? "flex-row-reverse" : "flex-row"} align-middle items-center gap-3`, children: [
        profile && !opened ? /* @__PURE__ */ jsx(ImProfile, { className: "cursor-pointer", onClick: turnOffLinks }) : profile && opened ? /* @__PURE__ */ jsxs("div", { className: `flex ${check === "ar" ? "flex-row-reverse" : "flex-row"} items-center gap-1`, children: [
          /* @__PURE__ */ jsx(MdDashboard, { onClick: turnOffLinks }),
          /* @__PURE__ */ jsx(Link, { href: "/profile", onClick: turnOffLinks, children: profile && (check === "eng" ? "Profile Page" : check === "ar" ? "الصفحة الشخصية" : check === "fr" ? "Page de Profile" : null) })
        ] }) : null,
        dashboard && !opened ? /* @__PURE__ */ jsx(MdDashboard, { onClick: turnOffLinks }) : dashboard && opened ? /* @__PURE__ */ jsxs("div", { className: `flex ${check === "ar" ? "flex-row-reverse" : "flex-row"} items-center gap-1`, children: [
          /* @__PURE__ */ jsx(MdDashboard, { onClick: turnOffLinks }),
          /* @__PURE__ */ jsxs(Link, { href: "/dashboard", onClick: turnOffLinks, children: [
            dashboard && (check === "eng" ? "Dashboard Panel" : check === "ar" ? "لوحة التحكم" : check === "fr" ? "Tableau de Board" : null),
            profile && (check === "eng" ? "Profile Page" : check === "ar" ? "الصفحة الشخصية" : check === "fr" ? "Page de Profile" : null)
          ] })
        ] }) : null,
        adminDashboard && !opened ? /* @__PURE__ */ jsx(MdDashboard, { onClick: turnOffLinks }) : adminDashboard && opened ? /* @__PURE__ */ jsxs("div", { className: `flex ${check === "ar" ? "flex-row-reverse" : "flex-row"} items-center gap-1`, children: [
          /* @__PURE__ */ jsx(MdDashboard, { onClick: turnOffLinks }),
          /* @__PURE__ */ jsxs(Link, { href: "/admin-dashboard", onClick: turnOffLinks, children: [
            adminDashboard && (check === "eng" ? "Admin Dashboard Panel" : check === "ar" ? "لوحة تحكم المسؤول" : check === "fr" ? "Tableau de Board Admin" : null),
            profile && (check === "eng" ? "Profile Page" : check === "ar" ? "الصفحة الشخصية" : check === "fr" ? "Page de Profile" : null)
          ] })
        ] }) : null
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-3", children: [
        profile && profileLinks.map((profileLink, i) => /* @__PURE__ */ jsx("div", { className: `flex ${check === "ar" ? "flex-row-reverse" : "flex-row"} items-center gap-1 mb-[20px]`, children: /* @__PURE__ */ jsxs("ul", { className: `flex items-center  gap-1 ${check === "ar" ? "flex-row-reverse" : "flex-row"} ${opened ? "" : "justify-center"} `, children: [
          profileLink.icon,
          opened && /* @__PURE__ */ jsx("li", { className: `${check === "ar" ? "text-right" : "text-left "}   cursor-pointer`, onClick: profileLink.method, children: profileLink.linkElementAr }, i)
        ] }) })),
        dashboard && dashboardLinks.map((dashboardLink2, i) => /* @__PURE__ */ jsx("div", { className: `flex ${check === "ar" ? "flex-row-reverse" : "flex-row"} items-center gap-1 mb-[20px]`, children: /* @__PURE__ */ jsxs("ul", { className: `flex items-center  gap-1 ${check === "ar" ? "flex-row-reverse" : "flex-row"} ${opened ? "" : "justify-center"} `, children: [
          dashboardLink2.icon,
          opened && (check === "ar" ? /* @__PURE__ */ jsx("li", { className: `${check === "ar" ? "text-right" : "text-left "} cursor-pointer`, onClick: dashboardLink2.method, children: dashboardLink2.linkAr }, i) : check === "eng" ? /* @__PURE__ */ jsx("li", { className: `${check === "ar" ? "text-right" : "text-left "} cursor-pointer`, onClick: dashboardLink2.method, children: dashboardLink2.linkEng }, i) : check === "fr" ? /* @__PURE__ */ jsx("li", { className: `${check === "ar" ? "text-right" : "text-left "} cursor-pointer`, onClick: dashboardLink2.method, children: dashboardLink2.linkFr }, i) : null)
        ] }) })),
        adminDashboard && adminDashboardLinks.map((dashboardLink2, i) => /* @__PURE__ */ jsx("div", { className: `flex ${check === "ar" ? "flex-row-reverse" : "flex-row"} items-center gap-1 mb-[20px]`, children: /* @__PURE__ */ jsxs("ul", { className: `flex items-center  gap-1 ${check === "ar" ? "flex-row-reverse" : "flex-row"} ${opened ? "" : "justify-center"} `, children: [
          dashboardLink2.icon,
          opened && (check === "ar" ? /* @__PURE__ */ jsx("li", { className: `${check === "ar" ? "text-right" : "text-left "} cursor-pointer`, onClick: dashboardLink2.method, children: dashboardLink2.linkAr }, i) : check === "eng" ? /* @__PURE__ */ jsx("li", { className: `${check === "ar" ? "text-right" : "text-left "} cursor-pointer`, onClick: dashboardLink2.method, children: dashboardLink2.linkEng }, i) : check === "fr" ? /* @__PURE__ */ jsx("li", { className: `${check === "ar" ? "text-right" : "text-left "} cursor-pointer`, onClick: dashboardLink2.method, children: dashboardLink2.linkFr }, i) : null)
        ] }) }))
      ] })
    ] })
  ] });
};
const SidebarLayout = ({ user, users, children, toggleSidebar, postsTag, postsCategory, singleUser, categories }) => {
  useContext(DarkModeContext);
  const { opened } = useContext(SidebarContext);
  console.log(opened);
  return /* @__PURE__ */ jsx(React.Fragment, { children: /* @__PURE__ */ jsxs(SidebarContextProvider, { children: [
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsx(
      Sidebar,
      {}
    ),
    /* @__PURE__ */ jsx("main", { className: ` ${opened ? "w-[calc(100%-240px)]" : "w-[calc(100%-40px)]"} md:h-auto z-10`, children })
  ] }) });
};
const SidebarLayout$1 = SidebarLayout;
export {
  SidebarLayout$1 as S
};
