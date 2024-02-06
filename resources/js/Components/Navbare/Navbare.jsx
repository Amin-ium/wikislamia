import React, { useState, useEffect, useContext, useMemo } from "react";
import { Link, usePage } from "@inertiajs/inertia-react";
import Dropdown from "@/Components/Dropdown";
import { FaMoon, FaSun, FaAlignJustify, FaArrowCircleUp, FaArrowCircleDown  } from "react-icons/fa";
// import logoLight from "../../../../public/assets/publicImages/logoLight.png";
import logoLight from "../../../../public/assets/publicImages/logoLight.svg";
import logoDark from "../../../../public/assets/publicImages/logoDark.svg";
import Alpine from "alpinejs";
import Select from "react-select";
import { DarkModeContext } from "@/Context/DarkModeContext";
import { ToggleMenuContext } from "@/Context/ToggleMenuContext";

import { useScroll } from "@/Context/ScrollContext";
import { useSearchBarContext } from "@/Context/SearchBarContext";

// import { SearchContext, useSearchBarContext } from "@/Context/SearchBarContext";

const Navbare = (children) => {
    const {toggleMenu, toggleMenuFun} = useContext(ToggleMenuContext);
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
    const [showMenu, setShowMenu] = useState(false);

    useEffect(() => {
        if(window.location.pathname.match('dashboard')) {
            setDashboard(true)
        }else{
            setDashboard(false)
        }
        if(window.location.pathname.match('profile')) {
            setProfile(true)
        }else{
            setProfile(false)
        }
    }, []);


    const { auth } = usePage().props

    const { scrollToSection, showTopButton, showBottomButton, sectionRefs } = useScroll();

    const handleTopButtonClick = () => {
        // Find the current active section
        const activeSection = Object.keys(sectionRefs).find(
          (section) => sectionRefs[section].current.offsetTop <= window.scrollY
        );
        console.log(activeSection);

        // If an active section is found, find the previous one
         if (activeSection) {
          scrollToSection(activeSection);
        }
        console.log('to top');
      };

      const handleBottomButtonClick = () => {
        // Find the current active section
        const activeSection = Object.keys(sectionRefs).find(
          (section) => sectionRefs[section].current.offsetTop > window.scrollY
        );

        // If an active section is found, scroll to the next one
        if (activeSection) {
          scrollToSection(activeSection);
        }
        console.log('to bottom');
      };
    console.log(auth);

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

    const active =
        `${darkMode ? " text-lightText" : " text-darkText"} font-bold   px-2 rounded`;
    const normal =
        `${darkMode ? " text-lightText" : " text-darkText"}  font-normal  px-2 rounded`;

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
        if(check === 'ar')
            return 'ar' // update pointer
        else if(check === 'fr')
            return 'fr' // update pointer
        else if(check === 'eng')
            return 'eng' // update pointer
        else return 'eng'

     }, [check])

    const customStyles = {
        menu: provided => ({ ...provided, zIndex: 9999 }),
        control: (provided, state) => ({
            ...provided,
            background: "#fff",
            fontSize: "14px",
            borderColor: "#9e9e9e",
            minHeight: "20px",
            height: "20px",
            width: "60px",

            minWidth: "hi",
            boxShadow: state.isFocused ? null : null,
        }),
        menuPortal: base => ({ ...base, zIndex: 32 }),

        valueContainer: (provided, state) => ({
            ...provided,
            height: "20px",
            padding: "0 6px 6px 6px",
            width: "60px",

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
    };

    const updateValue = (value) => {
        setCheck(value.value);
    };
    // console.log(ToggleMenuContext);



    // useEffect(() => {
    //     function activeLinkFunction() {
    //         if (window.location.pathname === "/") {
    //             setIsActive(true);
    //             setActiveLink("red-400");

    //         } else if (window.location.pathname === "/blogs") {
    //             setIsActive(true);
    //             setActiveLink("red-400");

    //         } else if (window.location.pathname === "/quran") {
    //             setIsActive(true);
    //             setActiveLink("red-400");

    //         } else if (window.location.pathname === "/about") {
    //             setIsActive(true);
    //             setActiveLink("red-400");

    //         } else if (window.location.pathname === "/contact") {
    //             setIsActive(true);
    //             setActiveLink("red-400");

    //         }else if (window.location.pathname === "/hadeeth") {
    //             setIsActive(true);
    //             setActiveLink("red-400");

    //         } else {
    //             setIsActive(false);
    //         }
    //     }

    //     activeLinkFunction();
    // }, []);

    // if( window.innerWidth > 960) {
    //   // setLogo(logoDark)
    //   // header.classList.remove('sticky');
    //   const  header = document.getElementById('myHeader');
    //   header.classList.replace('bg-gray-500', 'bg-transparent');
    //   // alert('window great then 960');
    // }else{
    //   const  header = document.getElementById('myHeader');
    //   header.classList.remove('bg-transparent', 'bg-gray-500');
    //   // alert('window less then 960');
    // }

    Alpine.data("myComponent", () => ({
        handleClick,
    }));





    const setMobileMenu = () => {
        toggleMenuFun()
    };

    // const { auth } = usePage().props;

    return (
        <header
            ref={sectionRefs.section0}
            id=""
            className={`${profile || dashboard ? "xl:w-[calc(100%-240px)] right-0" : ""} ${check === "ar" ? "left-0" : ""} absolute z-31 w-[100%]    md:w-[100%] lg:w-[100%]   lg:max-w-[100%]   ${dashboard || profile ? "" : "border-b-[1px] md:border-b-[1px] border-lightText"} xl:border-0 lg:border-0 md:border-0 sm:border-0 py-2`}
            x-data="{navbarOpen: false}"
        >
            <div className={`lg:w-[90%] lg:mx-auto xl:w-[90%] xl:mx-auto relative`}>
            <nav className=" z-31 ">
                {/* Primary menu and logo */}
                <div className={`flex ${check === "ar" ? "lg:flex-row-reverse" : "lg:flex-row"}    justify-between  sm:justify-between md:justify-between  ${dashboard || profile  ? " lg:justify-end " : "lg:justify-around"}  lg:align-middle lg:items-center  w-[95%] mx-auto lg:mx-auto gap-1  `}>
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
                    {/* primary */}
                    {/* {`${isSticky ? "text-white" : "text-black"} navLinks hidden lg:flex gap-8 `}  */}
                    <div className={` ${check === "ar" ? "lg:flex-row-reverse" : "lg:flex-row"} ${dashboard&&check === "ar" || profile&&check === "ar"  ? "lg:flex-col absolute left-[250px] top-[40px] bg-white p-4 rounded-lg shadow-lg duration-300" : dashboard&&check === "eng" || profile&&check === "eng" ? "lg:flex-col absolute right-[250px] top-[40px] bg-white p-4 rounded-lg shadow-lg duration-300" :  dashboard&&check === "fr" || profile&&check === "fr" ? "lg:flex-col absolute right-[250px] top-[40px] bg-white p-4 rounded-lg shadow-lg duration-300"  : ""} ${showMenu  ? "lg:block duration-300" : showMenu&&!dashboard || showMenu&&!profile ? "lg:block duration-300" : !showMenu&&dashboard || !showMenu&&profile ? "lg:hidden duration-300"  : ""} ${dashboard || profile ? "" : ""}   hidden  lg:flex lg:gap-2 md:gap-1 gap-1   `}
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
                                                : normal} ${darkMode ? 'text-navTextLight' : 'text-navTextDark'} lg:text-lg xl:text-[16px]
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
                                                : normal}  ${darkMode ? 'text-navTextLight' : 'text-navTextDark'}  lg:text-lg xl:text-[16px]
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
                                                : normal} ${darkMode ? 'text-navTextLight' : 'text-navTextDark'}   lg:text-lg xl:text-[16px]
                                                `}
                                    >
                                        {link.arabicLink}
                                    </Link>
                                ) : null
                            )}
                    </div>


                    <div className={`${dashboard&&check === 'fr' || dashboard&&check === 'eng' || profile&&check === 'fr' || profile&&check === 'eng' ? "absolute right-1 " : " "} ${dashboard&&check === "eng" || dashboard&&check === "fr" || profile&&check === "eng" || profile&&check === "fr" ? "lg:mt-5 xl:mt-5" : ""}   flex  flex-row  lg:items-center lg:align-middle xl:items-center xl:align-middle   gap-1 align-middle  `}>
                        {dashboard || profile && (
                            <div>
                            <button className={`${darkMode ? "border-lightText text-lightText" : "border-darkText text-darkText"  } hover:opacity-50 me-2  border-[1px]  xl:text-xs rounded-lg px-1 duration-300 hidden xl:block lg:block`} onClick={() => setShowMenu(!showMenu)}>Menu</button>
                        </div>
                        )}

                        <div className="flex xs:flex items-center xl:align-middle  xl:items-center gap-10 ">
                            <div className={` flex flex-row-reverse gap-2  relative z-40 `}>
                                {/* {auth.user ? ( */}
                                {auth.user ? (
                                    <div   className='relative '>
                                    <Dropdown>
                                        <Dropdown.Trigger>
                                            <span className="inline-flex rounded-md">
                                                <button
                                                    type="button"
                                                    className="inline-flex items-center px-1 py-1 border border-gray-100 text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150 "
                                                >
                                                    {/* {
                                                                 auth
                                                                     .user
                                                                     .name
                                                             } */}
                                                    admin
                                                    <svg
                                                        className="ml-2 -mr-0.5 h-4 w-4"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                </button>
                                            </span>
                                        </Dropdown.Trigger>
                                        {/* {auth.user.is_admin ? ( */}
                                        <Dropdown.Content>
                                            <Link href="/profile">
                                                Profile
                                            </Link>
                                            <Link href="/dashboard">
                                                Dashboard
                                            </Link>
                                            <Dropdown.Link href="/dashboard/admin-dashboard">
                                                Admin Dashboard
                                            </Dropdown.Link>
                                        </Dropdown.Content>
                                        {/* ) : ( */}
                                        {/* <Dropdown.Content>
                                                         <Dropdown.Link href="/profile">
                                                             Profile
                                                         </Dropdown.Link>
                                                         <Dropdown.Link href="/dashboard">
                                                             Dashboard
                                                         </Dropdown.Link>
                                                     </Dropdown.Content>
                                                 )} */}
                                    </Dropdown>
                                    </div>
                                ) : null}

                                {/* </div> */}
                                {/* ) : ( */}
                                {auth.user ? (
                                      <div className="flex items-center gap-1 text-white relative z-40">

                                      <Link
                                          className={` loginBtn text-[12px] sm:text-[12px] md:text-[12px] lg:text-[12px] xl:text-[14px] border bg-red-500 border-lightText rounded-lg font-medium  hover:opacity-70 px-1`}
                                          href="/logout"
                                                    as="button"
                                                    method="POST"
                                      >
                                          {check === "eng"
                                              ? "Logout"
                                              : check === "ar"
                                              ? "الخروج"
                                              : check === "fr"
                                              ? "Déconnexion"
                                              : null}
                                      </Link>

                                  </div>
                                ) : (
                                    <div className="flex items-center gap-1  text-lightText relative z-40">

                                    <Link
                                        className={`${darkMode ? "border border-lightText text-lightText " : "border border-darkText text-darkText"} loginBtn text-[12px] sm:text-[12px] md:text-[12px] lg:text-[12px] xl:text-[12px]  rounded-lg font-medium  hover:opacity-70 px-1`}
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
                                        className={`${darkMode ? "border border-lightText text-lightText " : "border border-darkText text-darkText"} signUpBtn border  rounded-lg  text-[12px] sm:text-[12px] md:text-[12px] lg:text-[12px] xl:text-[12px]  font-medium duration-300 ease-in-out hover:bg-opacity-100   px-1`}
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
                            </div>
                        </div>
                        {/* Mobile navigation toggle */}

                        <div className="  flex flex-row items-center lg:items-center xl:items-center xl:align-middle gap-1 relative z-40 ">


                            <div className={`${dashboard || profile ? "mt-1 md:mt-1 lg:mt-1 xl:mt-1 " : ""} xl:mt-1 `}>
                            <Select

                                // defaultValue={{

                                //     label: check === 'ar' ? 'ar' : check === 'fr' ? 'fr' : check === 'eng' ? 'eng' : check,
                                //     value: check === 'ar' ? 'ar' : check === 'fr' ? 'fr' : check === 'eng' ? 'eng' : check
                                // }}
                                defaultValue={{
                                    label: defaultValues,
                                    value: defaultValues
                                }}
                                onChange={updateValue}
                                options={options}
                                myHeight="10px"
                                myFontSize="12px"
                                styles={customStyles}
                                className="relative -mt-1 z-32"


                            />
                            </div>

                            <div className="text-lightText lg:hidden flex items-center">
                            <button
                                className={` menuBtn`}
                                onClick={setMobileMenu}
                            >
                                <FaAlignJustify className={`${darkMode ? "text-navTextLight" : "text-navTextDark"} h-5 w-5`} />
                            </button>
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



                        </div>


                    </div>
                </div>
                {/* secondary */}

                {/* mobile navigation */}
                <div
                    className={`${darkMode ? "bg-gradient-to-r from-darkPrimary via-darkSecondary to-darkThird  " : " lightBg"} fixed z-30 w-[100%]  left-0 right-0 top-0    overflow-hidden flex flex-col lg:hidden gap-12  origin-top duration-700
                    ${!toggleMenu ? "h-0" : "h-screen"}`}
                >
                    <div className={`${darkMode ? "" : ""} relative  `}>
                        <div className="flex flex-col  font-bold text-center tracking-wider">
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
            </nav>
            </div>

        </header>
    );
};

export default Navbare;
