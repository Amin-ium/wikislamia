import React, { useState, useEffect, useContext, useMemo } from "react";
import { Link, usePage } from "@inertiajs/inertia-react";
import Dropdown from "@/Components/Dropdown";
import {
    FaMoon,
    FaSun,
    FaAlignJustify,
    FaArrowCircleUp,
    FaArrowCircleDown,
} from "react-icons/fa";
// import logoLight from "../../../../public/assets/publicImages/logoLight.png";
import logoLight from "../../../../public/assets/publicImages/logoLight.svg";
import logoDark from "../../../../public/assets/publicImages/logoDark.svg";
import prayerIcon from "../../../../public/assets/publicImages/prayerTimesIcon.png";
import Alpine from "alpinejs";
import Select from "react-select";

import { ToggleMenuContext } from "@/Context/ToggleMenuContext";

import { useScroll } from "@/Context/ScrollContext";
import { useSearchBarContext } from "@/Context/SearchBarContext";
import { FaPowerOff } from "react-icons/fa6";
import { BiSolidDownArrow } from "react-icons/bi";
import { DarkModeContext } from "@/Context/DarkModeContext";

// import { SearchContext, useSearchBarContext } from "@/Context/SearchBarContext";

const Navbar = () => {
    const { toggleMenu } = useContext(ToggleMenuContext);
    const { check, setCheck } = useSearchBarContext();
    const { toggle, darkMode } = useContext(DarkModeContext);

    // const [user, setUser] = useState(true);
    // const [isSticky, setIsSticky] = useState(false);
    const [isDropOpen, setIisDropOpen] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const [isActiveAbout, setIisActiveAbout] = useState(false);
    const [isActiveQuran, setIisActiveQuran] = useState(false);
    const [isActiveContact, setIisActiveContact] = useState(false);
    const [isActiveHadeeth, setIsActiveHadeeth] = useState(false);
    const [isActiveBlogs, setIisActiveBlogs] = useState("");
    const [activeLink, setActiveLink] = useState("");
    const [currentCheck, setCurrentCheck] = useState(check);
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

    // useEffect(() => {

    //     setMobileMenu(!mobileMenu)
    // }, [mobileMenu]);

    const { auth } = usePage().props;
    console.log(auth.user);

    const { scrollToSection, showTopButton, showBottomButton, sectionRefs } =
        useScroll();

    const handleTopButtonClick = () => {
        // Find the current active section
        const activeSection = Object.keys(sectionRefs).find(
            (section) =>
                sectionRefs[section].current.offsetTop <= window.scrollY
        );

        // If an active section is found, find the previous one
        if (activeSection) {
            scrollToSection(activeSection);
        }
        console.log("to top");
    };

    console.log(mobileMenu);

    const handleBottomButtonClick = () => {
        // Find the current active section
        const activeSection = Object.keys(sectionRefs).find(
            (section) => sectionRefs[section].current.offsetTop > window.scrollY
        );

        // If an active section is found, scroll to the next one
        if (activeSection) {
            scrollToSection(activeSection);
        }
        console.log("to bottom");
    };

    const options = [
        { value: "eng", label: "eng" },
        { value: "ar", label: "ar" },
        { value: "fr", label: "fr" },
    ];

    const links = [
        {
            englishLink: "Home",
            frenchLink: "Acceuil",
            arabicLink: "الرئيسية",
            href: "/",
        },
        {
            englishLink: "Quran",
            frenchLink: "Coran",
            arabicLink: "القرآن الكريم",
            href: "/quran",
        },
        {
            englishLink: "Hadeeth",
            frenchLink: "Hadith",
            arabicLink: "الحديث",
            href: "/hadeeth",
        },
        {
            englishLink: "Blogs",
            frenchLink: "Articles",
            arabicLink: "مقالات",
            href: "/blogs",
        },
        {
            englishLink: "About",
            frenchLink: "A Propos",
            arabicLink: "من نكون",
            href: "/about",
        },
        {
            englishLink: "Contact Us",
            frenchLink: "Contact",
            arabicLink: "إتصل بنا",
            href: "/contact",
        },
    ];

    const active = `${
        darkMode ? " text-lightText" : " text-darkText"
    } font-bold   px-2 rounded`;
    const normal = `${
        darkMode ? " text-lightText" : " text-darkText"
    }  font-normal  px-2 rounded`;

    // console.log(currentCheck);

    // const headerRef = useRef(null);

    // const activeLink = "";

    // window.addEventListener("scroll", () => {
    //     if (window.scrollY > 0) {
    //         setIsSticky(true);
    //         setStickyColor("gray-900");
    //         setLogo(logoDark);
    //     } else {
    //         setLogo(logoLight);
    //         setIsSticky(false);
    //         setStickyColor("gray-100");
    //     }
    // });

    const toggleDropDown = () => {
        if (!isDropOpen) {
            setIisDropOpen(true);
            console.log("opend");
        } else {
            console.log("closed");
            setIisDropOpen(false);
        }
    };

    const defaultValues = useMemo(() => {
        if (check === "ar") return "ar"; // update pointer
        else if (check === "fr") return "fr"; // update pointer
        else if (check === "eng") return "eng"; // update pointer
        else return "eng";
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
            boxShadow: state.isFocused ? null : null,
        }),
        menuPortal: (base) => ({ ...base, zIndex: 32 }),

        valueContainer: (provided, state) => ({
            ...provided,
            height: "20px",
            padding: "0 6px 6px 6px",
            width: "60px",
            color: "#f1f1f1",
        }),

        input: (provided, state) => ({
            ...provided,
            margin: "-10px",
            width: "60px",
        }),
        indicatorSeparator: (state) => ({
            display: "none",
        }),
        indicatorsContainer: (provided, state) => ({
            ...provided,
            height: "20px",
        }),

        placeholder: (provided, state) => ({
            ...provided,
            display: "none",
        }),
        option: (provided) => ({
            ...provided,
            color: "#f1f1f1",
            background: "#00081F",
            fontSize: "14px",
        }),

        singleValue: (provided) => ({
            ...provided,
            color: "#f1f1f1",
        }),
    };

    const updateValue = (value) => {
        setCheck(value.value);
    };

    Alpine.data("myComponent", () => ({
        handleClick,
    }));



    // const { auth } = usePage().props;

    return (
        <header
            ref={sectionRefs.section0}
            id=""
            className={`${profile||dashboard ? "border-b-[1px] " : "" } ${darkMode ? "border-gray-700" : "border-gray-300"} absolute z-31 w-[100%]    md:w-[100%] lg:w-[100%]   lg:max-w-[100%]    py-2`}
            x-data="{navbarOpen: false}"
        >
            <div
                className={`w-[95%] lg:w-[90%] lg:mx-auto xl:w-[90%] xl:mx-auto relative flex ${check === 'ar' ? "flex-row-reverse" : "flex-row"} ${dashboard||profile ? "justify-end" : "justify-between"} items-center`}
            >
                {/* logo */}
                <div className={`${dashboard || profile ? "hidden" : "block"}`}>
                    <Link href="/" className=" ">
                        <img
                            className={`w-[150px] h-[45px] min-w-[150px] min-h-[45px]  xs:w-[150px] xs:h-[45px] sm:w-[180px] sm:h-[65px]  md:w-[200px] md:h-[70px]  lg:w-[200px] lg:h-[70px] xl:w-[200px] xl:h-[60px]  `}
                            src={darkMode ? logoLight : logoDark}
                            alt=""
                        />
                    </Link>
                </div>
                {/* links */}
                {!dashboard&&!profile&&(
                    <div className={`    hidden lg:block flex-row justify-end  lg:gap-2 md:gap-1 gap-1   `}
                    >
                        {links &&
                            links.map((link, i) =>
                                check === "eng" ? (
                                    <Link
                                        id="link"
                                        href={link.href}
                                        className={`
                                            ${window.location.pathname ===
                                            link.href
                                                ? active
                                                : normal} ${darkMode ? 'text-navTextLight' : 'text-navTextDark'} lg:text-lg xl:text-lg
                                                `}
                                    >
                                        {link.englishLink}
                                    </Link>
                                ) : check === "fr" ? (
                                    <Link
                                        id="link"
                                        href={link.href}
                                        className={`
                                            ${window.location.pathname ===
                                            link.href
                                                ? active
                                                : normal}  ${darkMode ? 'text-navTextLight' : 'text-navTextDark'}  lg:text-lg xl:text-lg
                                                `}
                                    >
                                        {link.frenchLink}
                                    </Link>
                                ) : check === "ar" ? (
                                    <Link
                                        id="link"
                                        href={link.href}
                                        className={`
                                            ${window.location.pathname ===
                                            link.href
                                                ? active
                                                : normal} ${darkMode ? 'text-navTextLight' : 'text-navTextDark'}   lg:text-lg xl:text-lg
                                                `}
                                    >
                                        {link.arabicLink}
                                    </Link>
                                ) : null
                            )}
                    </div>
                )}

                <div className="flex flex-row  items-center align-middle gap-2">
                <div className={` flex flex-row-reverse items-center align-middle gap-2  relative z-40 `}>
                    {/* {auth.user ? ( */}
                    {auth.user ? (
                        <div className="relative mt-[2px]">
                            <Dropdown>
                                <Dropdown.Trigger>
                                    <div className="relative">
                                        <img
                                            src={'/imageusers/'+ auth.user.imagePath}
                                            className="h-8 w-8 rounded-full border border-lightText"
                                            alt=""
                                        />
                                        <BiSolidDownArrow
                                            size={10}
                                            className="absolute text-lightText font-bold left-[17px] top-[20px]"
                                        />
                                    </div>
                                </Dropdown.Trigger>
                                {/* {auth.user.is_admin ? ( */}
                                <Dropdown.Content>
                                    <Link href="/profile">Profile</Link>
                                    <Link href="/dashboard">Dashboard</Link>
                                    <Link href="/admin-dashboard">
                                        Admin Dashboard
                                    </Link>
                                </Dropdown.Content>
                                {/* ) : ( */}
                            </Dropdown>
                        </div>
                    ) : null}

                    {/* </div> */}
                    {/* ) : ( */}
                    {auth.user ? (
                        <div className="flex xl:items-center text-center gap-1 text-white relative z-40 mt-[4px] buttonLogout">
                            <Link
                                className={`text-center mx-auto `}
                                href="/logout"
                                as="button"
                                method="POST"
                            >
                                {/* {check === "eng"
              ? "Logout"
              : check === "ar"
              ? "الخروج"
              : check === "fr"
              ? "Déconnexion"
              : null} */}
                                <FaPowerOff size={16} />
                            </Link>
                        </div>
                    ) : (
                        <div className="flex items-center gap-1  text-lightText relative z-40">
                            <Link
                                className={`${
                                    darkMode
                                        ? "border border-lightText text-lightText "
                                        : "border border-darkText text-darkText"
                                } loginBtn text-[12px] sm:text-[12px] md:text-[12px] lg:text-[12px] xl:text-[12px]  rounded-lg font-medium  hover:opacity-70 px-1`}
                                href="/register"
                            >
                                {check === "eng"
                                    ? "Register"
                                    : check === "ar"
                                    ? "التسجيل"
                                    : check === "fr"
                                    ? "Inscription"
                                    : null}
                            </Link>
                            <Link
                                className={`${
                                    darkMode
                                        ? "border border-lightText text-lightText "
                                        : "border border-darkText text-darkText"
                                } signUpBtn border  rounded-lg  text-[12px] sm:text-[12px] md:text-[12px] lg:text-[12px] xl:text-[12px]  font-medium duration-300 ease-in-out hover:bg-opacity-100   px-1`}
                                href="/login"
                            >
                                {check === "eng"
                                    ? "Login"
                                    : check === "ar"
                                    ? "الدخول"
                                    : check === "fr"
                                    ? "Connexion"
                                    : null}
                            </Link>
                        </div>
                    )}

                    {/* )} */}
                    <div
                        className={`${
                            dashboard || profile
                                ? "mt-1 md:mt-1 lg:mt-1 xl:mt-1 "
                                : ""
                        } `}
                    >
                        <Select
                            // defaultValue={{

                            //     label: check === 'ar' ? 'ar' : check === 'fr' ? 'fr' : check === 'eng' ? 'eng' : check,
                            //     value: check === 'ar' ? 'ar' : check === 'fr' ? 'fr' : check === 'eng' ? 'eng' : check
                            // }}
                            defaultValue={{
                                label: defaultValues,
                                value: defaultValues,
                            }}
                            onChange={updateValue}
                            options={options}
                            myHeight="10px"
                            myFontSize="12px"
                            styles={customStyles}
                            className="relative  z-32 text-lightText"
                        />
                    </div>
                </div>
                <div className="text-lightText lg:hidden flex items-center z-40">
                    <button className={` menuBtn z-32 `} onClick={() => setMobileMenu(!mobileMenu)}>
                        <FaAlignJustify
                            className={`${
                                darkMode
                                    ? "text-navTextLight"
                                    : "text-navTextDark"
                            } mt-[4px]  h-5 w-5`}
                        />
                    </button>
                </div>
                </div>

            </div>
            <div className={`${check === 'ar'&& dashboard || check === 'ar' && profile ? "left-[20px]" : "right-[20px]"  } -mt-1 fixed bottom-[40px] flex flex-row gap-3 items-center z-10`}>
                                 {!dashboard && !profile &&
                                 showTopButton&& (
                                     <FaArrowCircleUp onClick={handleTopButtonClick} className={`${darkMode ? "text-lightText" : "text-[#00081F]"} xl:h-7 xl:w-7 h-5 w-5   `}/>
                                 )}

                                 {!dashboard && !profile &&
                                     showBottomButton&& (
                                     <FaArrowCircleDown onClick={handleBottomButtonClick} className={`${darkMode ? "text-lightText" : "text-[#00081F]"} xl:h-7 xl:w-7 h-5 w-5   `}/>
                                 )}




                                 {darkMode ? (
                                     <FaSun
                                     onClick={toggle}
                                     className={`text-yellow-500 xl:h-7 xl:w-7 h-5 w-5 `}
                                 />
                                 ) : (
                                     <FaMoon
                                     onClick={toggle}
                                     className={`text-navTextDark xl:h-7 xl:w-7 h-5 w-5 `}
                                 />


                                 )}
                                 </div>
                                 {/* mobile navigation */}
                                 {mobileMenu && (
                                     <div
                                     className={`${darkMode ? " bg-gradient-to-r from-darkPrimary via-darkSecondary to-darkThird  " : " lightBg"} fixed z-30 h-screen w-[100%]   left-0 right-0 top-0    overflow-hidden flex flex-col lg:hidden gap-12  origin-top transition duration-700 ease-in-out
                                     `}
                                 >
                                     <div className={`${darkMode ? "" : ""} relative mt-10 transition duration-700 ease-in-out `}>
                                         <div className="flex flex-col  font-bold text-center tracking-wider transition duration-700 ease-in-out">
                                         {links &&
                                             links.map((link, i) =>
                                                 check === "eng" ? (
                                                     <Link
                                                         id="link"
                                                         href={link.href}
                                                         className={`${
                                                             window.location.pathname ===
                                                             link.href
                                                                 ? active
                                                                 : normal
                                                         } border-b-0  py-5`}
                                                     >
                                                         {link.englishLink}
                                                     </Link>
                                                 ) : check === "fr" ? (
                                                     <Link
                                                         id="link"
                                                         href={link.href}
                                                         className={`${
                                                             window.location.pathname ===
                                                             link.href
                                                                 ? active
                                                                 : normal
                                                         } border-b-0  py-5`}
                                                     >
                                                         {link.frenchLink}
                                                     </Link>
                                                 ) : check === "ar" ? (
                                                     <Link
                                                         id="link"
                                                         href={link.href}
                                                         className={`${
                                                             window.location.pathname ===
                                                             link.href
                                                                 ? active
                                                                 : normal
                                                         } border-b-0  py-5`}
                                                     >
                                                         {link.arabicLink}
                                                     </Link>
                                                 ) : null
                                             )}
                                         </div>
                                     </div>
                                 </div>
                                 )}

        </header>
    );
};

export default Navbar;
