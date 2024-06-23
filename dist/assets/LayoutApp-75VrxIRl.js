import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import React, { createContext, useState, useContext, Fragment as Fragment$1, useRef, useEffect, useMemo } from "react";
import { D as DarkModeContext } from "./DarkModeContext-YHL6TNaC.js";
import { usePage, Link as Link$1 } from "@inertiajs/inertia-react";
import { Link } from "@inertiajs/react";
import { Transition } from "@headlessui/react";
import { FaAlignJustify, FaArrowCircleUp, FaArrowCircleDown, FaSun, FaMoon, FaFacebook } from "react-icons/fa/index.esm.js";
import Alpine from "alpinejs";
import Select from "react-select";
import { u as useSearchBarContext } from "./SearchBarContext-pj9rNtoS.js";
import { FaPowerOff, FaGithub } from "react-icons/fa6/index.esm.js";
import { BiSolidDownArrow } from "react-icons/bi/index.esm.js";
import { TiSocialLinkedinCircular } from "react-icons/ti/index.esm.js";
import { S as SidebarContext } from "./SidebarContext-P_-bml5L.js";
const DropDownContext = createContext();
const Dropdown = ({ children }) => {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => {
    setOpen((previousState) => !previousState);
  };
  return /* @__PURE__ */ jsx(DropDownContext.Provider, { value: { open, setOpen, toggleOpen }, children: /* @__PURE__ */ jsx("div", { className: "relative", children }) });
};
const Trigger = ({ children }) => {
  const { open, setOpen, toggleOpen } = useContext(DropDownContext);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { onClick: toggleOpen, children }),
    open && /* @__PURE__ */ jsx("div", { className: "fixed inset-0 z-40", onClick: () => setOpen(false) })
  ] });
};
const Content = ({ align = "right", width = "48", contentClasses = "py-1 bg-white flex flex-col", children }) => {
  const { open, setOpen } = useContext(DropDownContext);
  let alignmentClasses = "origin-top";
  if (align === "left") {
    alignmentClasses = "ltr:origin-top-left rtl:origin-top-right start-0";
  } else if (align === "right") {
    alignmentClasses = "ltr:origin-top-right rtl:origin-top-left end-0";
  }
  let widthClasses = "";
  if (width === "48") {
    widthClasses = "w-48";
  }
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(
    Transition,
    {
      as: Fragment$1,
      show: open,
      enter: "transition ease-out duration-200",
      enterFrom: "opacity-0 scale-95",
      enterTo: "opacity-100 scale-100",
      leave: "transition ease-in duration-75",
      leaveFrom: "opacity-100 scale-100",
      leaveTo: "opacity-0 scale-95",
      children: /* @__PURE__ */ jsx(
        "div",
        {
          className: `absolute z-50 mt-2 rounded-md shadow-lg ${alignmentClasses} ${widthClasses}`,
          onClick: () => setOpen(false),
          children: /* @__PURE__ */ jsx("div", { className: `rounded-md ring-1 ring-black ring-opacity-5 ` + contentClasses, children })
        }
      )
    }
  ) });
};
const DropdownLink = ({ className = "", children, ...props }) => {
  return /* @__PURE__ */ jsx(
    Link,
    {
      ...props,
      className: "block w-full px-4 py-2 text-start text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out " + className,
      children
    }
  );
};
Dropdown.Trigger = Trigger;
Dropdown.Content = Content;
Dropdown.Link = DropdownLink;
const logoLight = "/build/assets/logoLight-VqUx_FBy.svg";
const darkLogo = "/build/assets/logoDark-ShgFK6Mh.svg";
const ToggleMenuContext = createContext();
const ScrollContext = createContext();
const ScrollProvider = ({ children }) => {
  const sectionRefs = {
    section0: useRef(null),
    section1: useRef(null),
    section2: useRef(null),
    section3: useRef(null),
    section4: useRef(null),
    section5: useRef(null)
  };
  const [showTopButton, setShowTopButton] = useState(false);
  const [showBottomButton, setShowBottomButton] = useState(true);
  const scrollToSection = (sectionId) => {
    const sectionRef = sectionRefs[sectionId];
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const scrollPosition = window.scrollY;
      const lastSection = Object.keys(sectionRefs).pop();
      setShowTopButton(scrollPosition > windowHeight);
      setShowBottomButton(scrollPosition < sectionRefs[lastSection].current.offsetTop);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sectionRefs]);
  return /* @__PURE__ */ jsx(ScrollContext.Provider, { value: { scrollToSection, sectionRefs, showTopButton, showBottomButton }, children });
};
const useScroll = () => {
  const { scrollToSection, sectionRefs, showTopButton, showBottomButton } = useContext(ScrollContext);
  return { scrollToSection, sectionRefs, showTopButton, showBottomButton };
};
const Navbar = () => {
  useContext(ToggleMenuContext);
  const { check, setCheck } = useSearchBarContext();
  const { toggle, darkMode } = useContext(DarkModeContext);
  useState(false);
  useState(false);
  useState(false);
  useState(false);
  useState(false);
  useState(false);
  useState("");
  useState("");
  useState(check);
  const [dashboard, setDashboard] = useState(false);
  const [profile, setProfile] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  useEffect(() => {
    if (window.location.pathname.includes("dashboard")) {
      setDashboard(true);
    } else {
      setDashboard(false);
    }
    if (window.location.pathname.match("profile")) {
      setProfile(true);
    } else {
      setProfile(false);
    }
  }, []);
  const { auth } = usePage().props;
  console.log(auth.user);
  const { scrollToSection, showTopButton, showBottomButton, sectionRefs } = useScroll();
  const handleTopButtonClick = () => {
    const activeSection = Object.keys(sectionRefs).find(
      (section) => sectionRefs[section].current.offsetTop <= window.scrollY
    );
    if (activeSection) {
      scrollToSection(activeSection);
    }
    console.log("to top");
  };
  console.log(mobileMenu);
  const handleBottomButtonClick = () => {
    const activeSection = Object.keys(sectionRefs).find(
      (section) => sectionRefs[section].current.offsetTop > window.scrollY
    );
    if (activeSection) {
      scrollToSection(activeSection);
    }
    console.log("to bottom");
  };
  const options = [
    { value: "eng", label: "eng" },
    { value: "ar", label: "ar" },
    { value: "fr", label: "fr" }
  ];
  const links = [
    {
      englishLink: "Home",
      frenchLink: "Acceuil",
      arabicLink: "الرئيسية",
      href: "/"
    },
    {
      englishLink: "Quran",
      frenchLink: "Coran",
      arabicLink: "القرآن الكريم",
      href: "/quran"
    },
    {
      englishLink: "Hadeeth",
      frenchLink: "Hadith",
      arabicLink: "الحديث",
      href: "/hadeeth"
    },
    {
      englishLink: "Blogs",
      frenchLink: "Articles",
      arabicLink: "مقالات",
      href: "/blogs"
    },
    {
      englishLink: "About",
      frenchLink: "A Propos",
      arabicLink: "من نكون",
      href: "/about"
    },
    {
      englishLink: "Contact Us",
      frenchLink: "Contact",
      arabicLink: "إتصل بنا",
      href: "/contact"
    }
  ];
  const active = `${darkMode ? " text-lightText" : " text-darkText"} font-bold   px-2 rounded`;
  const normal = `${darkMode ? " text-lightText" : " text-darkText"}  font-normal  px-2 rounded`;
  const defaultValues = useMemo(() => {
    if (check === "ar")
      return "ar";
    else if (check === "fr")
      return "fr";
    else if (check === "eng")
      return "eng";
    else
      return "eng";
  }, [check]);
  const customStyles = {
    menu: (provided) => ({ ...provided, zIndex: 9999 }),
    control: (provided, state) => ({
      ...provided,
      background: "#00081F",
      fontSize: "14px",
      borderColor: "#9e9e9e",
      minHeight: "20px",
      height: "20px",
      width: "60px",
      color: "#f1f1f1",
      minWidth: "60px",
      boxShadow: state.isFocused ? null : null
    }),
    menuPortal: (base) => ({ ...base, zIndex: 32 }),
    valueContainer: (provided, state) => ({
      ...provided,
      height: "20px",
      padding: "0 6px 6px 6px",
      width: "60px",
      color: "#f1f1f1"
    }),
    input: (provided, state) => ({
      ...provided,
      margin: "-10px",
      width: "60px"
    }),
    indicatorSeparator: (state) => ({
      display: "none"
    }),
    indicatorsContainer: (provided, state) => ({
      ...provided,
      height: "20px"
    }),
    placeholder: (provided, state) => ({
      ...provided,
      display: "none"
    }),
    option: (provided) => ({
      ...provided,
      color: "#f1f1f1",
      background: "#00081F",
      fontSize: "14px"
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#f1f1f1"
    })
  };
  const updateValue = (value) => {
    setCheck(value.value);
  };
  Alpine.data("myComponent", () => ({
    handleClick
  }));
  return /* @__PURE__ */ jsxs(
    "header",
    {
      ref: sectionRefs.section0,
      id: "",
      className: `${profile || dashboard ? "border-b-[1px] " : ""} ${darkMode ? "border-gray-700" : "border-gray-300"} absolute z-31 w-[100%]    md:w-[100%] lg:w-[100%]   lg:max-w-[100%]    py-2`,
      "x-data": "{navbarOpen: false}",
      children: [
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: `w-[95%] lg:w-[90%] lg:mx-auto xl:w-[90%] xl:mx-auto relative flex ${check === "ar" ? "flex-row-reverse" : "flex-row"} ${dashboard || profile ? "justify-end" : "justify-between"} items-center`,
            children: [
              /* @__PURE__ */ jsx("div", { className: `${dashboard || profile ? "hidden" : "block"}`, children: /* @__PURE__ */ jsx(Link$1, { href: "/", className: " ", children: /* @__PURE__ */ jsx(
                "img",
                {
                  className: `w-[150px] h-[45px] min-w-[150px] min-h-[45px]  xs:w-[150px] xs:h-[45px] sm:w-[180px] sm:h-[65px]  md:w-[200px] md:h-[70px]  lg:w-[200px] lg:h-[70px] xl:w-[200px] xl:h-[60px]  `,
                  src: darkMode ? logoLight : darkLogo,
                  alt: ""
                }
              ) }) }),
              !dashboard && !profile && /* @__PURE__ */ jsx(
                "div",
                {
                  className: `    hidden lg:block flex-row justify-end  lg:gap-2 md:gap-1 gap-1   `,
                  children: links && links.map(
                    (link, i) => check === "eng" ? /* @__PURE__ */ jsx(
                      Link$1,
                      {
                        id: "link",
                        href: link.href,
                        className: `
                                            ${window.location.pathname === link.href ? active : normal} ${darkMode ? "text-navTextLight" : "text-navTextDark"} lg:text-lg xl:text-lg
                                                `,
                        children: link.englishLink
                      }
                    ) : check === "fr" ? /* @__PURE__ */ jsx(
                      Link$1,
                      {
                        id: "link",
                        href: link.href,
                        className: `
                                            ${window.location.pathname === link.href ? active : normal}  ${darkMode ? "text-navTextLight" : "text-navTextDark"}  lg:text-lg xl:text-lg
                                                `,
                        children: link.frenchLink
                      }
                    ) : check === "ar" ? /* @__PURE__ */ jsx(
                      Link$1,
                      {
                        id: "link",
                        href: link.href,
                        className: `
                                            ${window.location.pathname === link.href ? active : normal} ${darkMode ? "text-navTextLight" : "text-navTextDark"}   lg:text-lg xl:text-lg
                                                `,
                        children: link.arabicLink
                      }
                    ) : null
                  )
                }
              ),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-row  items-center align-middle gap-2", children: [
                /* @__PURE__ */ jsxs("div", { className: ` flex flex-row-reverse items-center align-middle gap-2  relative z-40 `, children: [
                  auth.user ? /* @__PURE__ */ jsx("div", { className: "relative mt-[2px]", children: /* @__PURE__ */ jsxs(Dropdown, { children: [
                    /* @__PURE__ */ jsx(Dropdown.Trigger, { children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                      /* @__PURE__ */ jsx(
                        "img",
                        {
                          src: "/imageusers/" + auth.user.imagePath,
                          className: "h-8 w-8 rounded-full border border-lightText",
                          alt: ""
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        BiSolidDownArrow,
                        {
                          size: 10,
                          className: "absolute text-lightText font-bold left-[17px] top-[20px]"
                        }
                      )
                    ] }) }),
                    /* @__PURE__ */ jsxs(Dropdown.Content, { children: [
                      /* @__PURE__ */ jsx(Link$1, { href: "/profile", children: "Profile" }),
                      /* @__PURE__ */ jsx(Link$1, { href: "/dashboard", children: "Dashboard" }),
                      /* @__PURE__ */ jsx(Link$1, { href: "/admin-dashboard", children: "Admin Dashboard" })
                    ] })
                  ] }) }) : null,
                  auth.user ? /* @__PURE__ */ jsx("div", { className: "flex xl:items-center text-center gap-1 text-white relative z-40 mt-[4px] buttonLogout", children: /* @__PURE__ */ jsx(
                    Link$1,
                    {
                      className: `text-center mx-auto `,
                      href: "/logout",
                      as: "button",
                      method: "POST",
                      children: /* @__PURE__ */ jsx(FaPowerOff, { size: 16 })
                    }
                  ) }) : /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1  text-lightText relative z-40", children: [
                    /* @__PURE__ */ jsx(
                      Link$1,
                      {
                        className: `${darkMode ? "border border-lightText text-lightText " : "border border-darkText text-darkText"} loginBtn text-[12px] sm:text-[12px] md:text-[12px] lg:text-[12px] xl:text-[12px]  rounded-lg font-medium  hover:opacity-70 px-1`,
                        href: "/register",
                        children: check === "eng" ? "Register" : check === "ar" ? "التسجيل" : check === "fr" ? "Inscription" : null
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      Link$1,
                      {
                        className: `${darkMode ? "border border-lightText text-lightText " : "border border-darkText text-darkText"} signUpBtn border  rounded-lg  text-[12px] sm:text-[12px] md:text-[12px] lg:text-[12px] xl:text-[12px]  font-medium duration-300 ease-in-out hover:bg-opacity-100   px-1`,
                        href: "/login",
                        children: check === "eng" ? "Login" : check === "ar" ? "الدخول" : check === "fr" ? "Connexion" : null
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsx(
                    "div",
                    {
                      className: `${dashboard || profile ? "mt-1 md:mt-1 lg:mt-1 xl:mt-1 " : ""} `,
                      children: /* @__PURE__ */ jsx(
                        Select,
                        {
                          defaultValue: {
                            label: defaultValues,
                            value: defaultValues
                          },
                          onChange: updateValue,
                          options,
                          myHeight: "10px",
                          myFontSize: "12px",
                          styles: customStyles,
                          className: "relative  z-32 text-lightText"
                        }
                      )
                    }
                  )
                ] }),
                /* @__PURE__ */ jsx("div", { className: "text-lightText lg:hidden flex items-center z-40", children: /* @__PURE__ */ jsx("button", { className: ` menuBtn z-32 `, onClick: () => setMobileMenu(!mobileMenu), children: /* @__PURE__ */ jsx(
                  FaAlignJustify,
                  {
                    className: `${darkMode ? "text-navTextLight" : "text-navTextDark"} mt-[4px]  h-5 w-5`
                  }
                ) }) })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: `${check === "ar" && dashboard || check === "ar" && profile ? "left-[20px]" : "right-[20px]"} -mt-1 fixed bottom-[40px] flex flex-row gap-3 items-center z-10`, children: [
          !dashboard && !profile && showTopButton && /* @__PURE__ */ jsx(FaArrowCircleUp, { onClick: handleTopButtonClick, className: `${darkMode ? "text-lightText" : "text-[#00081F]"} xl:h-7 xl:w-7 h-5 w-5   ` }),
          !dashboard && !profile && showBottomButton && /* @__PURE__ */ jsx(FaArrowCircleDown, { onClick: handleBottomButtonClick, className: `${darkMode ? "text-lightText" : "text-[#00081F]"} xl:h-7 xl:w-7 h-5 w-5   ` }),
          darkMode ? /* @__PURE__ */ jsx(
            FaSun,
            {
              onClick: toggle,
              className: `text-yellow-500 xl:h-7 xl:w-7 h-5 w-5 `
            }
          ) : /* @__PURE__ */ jsx(
            FaMoon,
            {
              onClick: toggle,
              className: `text-navTextDark xl:h-7 xl:w-7 h-5 w-5 `
            }
          )
        ] }),
        mobileMenu && /* @__PURE__ */ jsx(
          "div",
          {
            className: `${darkMode ? " bg-gradient-to-r from-darkPrimary via-darkSecondary to-darkThird  " : " lightBg"} fixed z-30 h-screen w-[100%]   left-0 right-0 top-0    overflow-hidden flex flex-col lg:hidden gap-12  origin-top transition duration-700 ease-in-out
                                     `,
            children: /* @__PURE__ */ jsx("div", { className: `${darkMode ? "" : ""} relative mt-10 transition duration-700 ease-in-out `, children: /* @__PURE__ */ jsx("div", { className: "flex flex-col  font-bold text-center tracking-wider transition duration-700 ease-in-out", children: links && links.map(
              (link, i) => check === "eng" ? /* @__PURE__ */ jsx(
                Link$1,
                {
                  id: "link",
                  href: link.href,
                  className: `${window.location.pathname === link.href ? active : normal} border-b-0  py-5`,
                  children: link.englishLink
                }
              ) : check === "fr" ? /* @__PURE__ */ jsx(
                Link$1,
                {
                  id: "link",
                  href: link.href,
                  className: `${window.location.pathname === link.href ? active : normal} border-b-0  py-5`,
                  children: link.frenchLink
                }
              ) : check === "ar" ? /* @__PURE__ */ jsx(
                Link$1,
                {
                  id: "link",
                  href: link.href,
                  className: `${window.location.pathname === link.href ? active : normal} border-b-0  py-5`,
                  children: link.arabicLink
                }
              ) : null
            ) }) })
          }
        )
      ]
    }
  );
};
const SubFooter = () => {
  const { darkMode } = useContext(DarkModeContext);
  const { opened } = useContext(SidebarContext);
  return /* @__PURE__ */ jsx("section", { className: `${darkMode ? "border-b-[1px] border-[#f1f1f125] bg-darkText text-lightBg" : "border-b-[1px] border-[#28282825] lightBg text-darkText"} ${opened ? "w-[calc(100%-240px)]" : "w-[calc(100%-40px)]"}`, children: /* @__PURE__ */ jsxs("div", { className: "w-[90%] mx-auto flex flex-col xl:flex-row justify-center  xl:justify-center  align-middle xl:align-middle xl:items-center xl:gap-[100px] py-1", children: [
    /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsx("img", { className: "w-[100px] h-[50px]", src: `${darkMode ? logoLight : darkLogo}`, alt: "logo" }) }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col xl:flex-row   xl:justify-between xl:gap-[100px] xl:items-center", children: [
      /* @__PURE__ */ jsxs("div", { className: `${darkMode ? "text-lightText" : "text-darkText"} flex flex-col  xl:flex-row text-center`, children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-row justify-center gap-[5px]", children: [
          /* @__PURE__ */ jsx(Link, { className: "font-bold text-[14px] xl:text-[16px] ", children: "WIKISLAMIA" }),
          /* @__PURE__ */ jsx("p", { className: "text-[14px] xl:text-[16px]", children: "2024 - All rights are reserved -" })
        ] }),
        /* @__PURE__ */ jsx("b", { className: "text-[14px] xl:text-[16px]", children: "Powered By Amine DAIEF" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: `${darkMode ? "text-lightText" : "text-grayText"} flex flex-row items-center justify-center gap-2 `, children: [
        /* @__PURE__ */ jsx(FaFacebook, { size: 24 }),
        /* @__PURE__ */ jsx(TiSocialLinkedinCircular, { size: 30 }),
        /* @__PURE__ */ jsx(FaGithub, { size: 24 })
      ] })
    ] })
  ] }) });
};
const LayoutApp = ({ children }) => {
  const [fully, setFully] = useState(false);
  document.getElementById("myFullScreen");
  const isFullscreen = document.fullscreenElement;
  function fullscreenchanged(event) {
    if (document.fullscreenElement) {
      console.log(
        `Element: ${document.fullscreenElement.id} entered fullscreen mode.`
      );
      setFully(true);
    } else {
      console.log("Leaving fullscreen mode.");
      setFully(false);
    }
  }
  addEventListener("fullscreenchange", (event) => {
  });
  document.addEventListener("fullscreenchange", fullscreenchanged);
  window.addEventListener("DOMContentLoaded", (event) => {
    const el = document.getElementById("myFullScreen");
    if (el) {
      el.addEventListener("click", () => {
        if (document.fullscreenElement) {
          document.exitFullscreen();
        } else {
          fullScreenElement.requestFullscreen();
        }
      });
    }
  });
  const { darkMode } = useContext(DarkModeContext);
  return /* @__PURE__ */ jsx(React.Fragment, { children: /* @__PURE__ */ jsxs(
    "div",
    {
      children: [
        fully ? null : /* @__PURE__ */ jsx(Navbar, {}),
        /* @__PURE__ */ jsx("main", { className: `${darkMode && isFullscreen && !window.location.pathname.match("dashboard") && !window.location.pathname.match("profile") ? "text-lightText bg-darkText" : darkMode && !isFullscreen && !window.location.pathname.match("dashboard") && !window.location.pathname.match("profile") ? "text-lightText bg-darkText" : !darkMode && isFullscreen && !window.location.pathname.match("dashboard") && !window.location.pathname.match("profile") ? "text-darkText bg-lightBg" : !darkMode && !isFullscreen && !window.location.pathname.match("dashboard") && !window.location.pathname.match("profile") ? "text-darkText bg-lightBg" : null}  overflow-y-hidden `, children }),
        fully || document.location.pathname.match("/profile") || document.location.pathname.match("/dashboard") ? null : /* @__PURE__ */ jsx(SubFooter, {})
      ]
    }
  ) });
};
const LayoutApp$1 = LayoutApp;
export {
  LayoutApp$1 as L,
  Navbar as N,
  ScrollProvider as S,
  SubFooter as a,
  logoLight as l,
  useScroll as u
};
