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
import { useSearchBarContext } from "@/Context/SearchBarContext";
import { useScrollContext } from "@/Context/ScrollContext";
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

    // useEffect(() => {
    //     setCurrentCheck(check)
    // }, [check]);


    const { auth } = usePage().props

    const { scrollToSection, currentSection } = useScrollContext();
  const [isTopArrowVisible, setIsTopArrowVisible] = useState(false);
  const [isBottomArrowVisible, setIsBottomArrowVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const sectionElement = document.getElementById(`section${currentSection}`);
      if (sectionElement) {
        const sectionTop = sectionElement.offsetTop;
        const sectionHeight = sectionElement.offsetHeight;
        const scrollY = window.scrollY;

        setIsTopArrowVisible(scrollY > sectionTop);
        setIsBottomArrowVisible(scrollY + window.innerHeight < sectionTop + sectionHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [currentSection]);


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
        "font-bold border-b-2 border-lightText text-lightText  hover:bg-purple-800 hover:text-darkBg px-2 rounded";
    const normal =
        "font-normal text-lightText  hover:bg-orangeBg hover:text-darkBg px-2 rounded";

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
            // ref={headerRef}
            id=""
            className={`${darkMode ? "bg-[#291336]" : "bg-[#EDD7ED]"} relative z-31 w-[100%]    md:w-[100%] lg:w-[100%] xl:w-[100%]   lg:max-w-[100%]   border-b-[1px] md:border-b-[1px] border-lightText xl:border-0 lg:border-0 md:border-0 sm:border-0 py-2`}
            x-data="{navbarOpen: false}"
        >
            <nav className=" z-31 ">
                {/* Primary menu and logo */}
                <div className="flex lg:flex-row justify-between align-middle items-center sm:justify-between md:justify-between lg:justify-around lg:align-middle lg:items-center  w-[95%] mx-auto lg:mx-auto gap-1  ">
                    {/* logo */}
                    <div className=" ">
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
                    <div className={`    hidden lg:flex lg:gap-2 md:gap-1 gap-1   `}
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

                    <div className="flex  flex-row   gap-2 align-middle lg:items-center ">
                        <div className="flex xs:flex items-center gap-10">
                            <div className=" flex flex-row-reverse gap-2 ">
                                {/* {auth.user ? ( */}
                                {auth.user ? (
                                    <div   className='relative z-32'>
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
                                            <Dropdown.Link href="/profile">
                                                Profile
                                            </Dropdown.Link>
                                            <Dropdown.Link href="/dashboard">
                                                Dashboard
                                            </Dropdown.Link>
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
                                      <div className="flex items-center gap-1 text-white">

                                      <Link
                                          className={` loginBtn text-[12px] sm:text-[12px] md:text-[12px] lg:text-[12px] xl:text-[14px] border bg-red-500 border-lightText rounded-lg font-medium  hover:opacity-70 px-1`}
                                          href="/register"
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
                                    <div className="flex items-center gap-1  text-lightText">

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
                                        className={`${darkMode ? "border border-lightText text-lightText " : "border border-darkText text-darkText"} signUpBtn border  rounded-lg  text-[12px] sm:text-[12px] md:text-[12px] lg:text-[12px] xl:text-[12px]  font-medium duration-300 ease-in-out hover:bg-opacity-100  px-1`}
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

                        <div className="  flex flex-row items-center lg:items-center xl:items-center xl:align-middle gap-3 mt-1 ml-1 ">


                            <div className=" ">
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

                            <div className="-mt-1 fixed bottom-[40px] right-[20px] flex flex-row gap-3 items-center z-10">
                            {isTopArrowVisible &&  <FaArrowCircleUp onClick={() => scrollToSection('up')} className={`${darkMode ? "text-lightText" : "text-[#00081F]"} h-8 w-8  `}/>}
                            {isBottomArrowVisible &&  <FaArrowCircleDown onClick={() => scrollToSection('down')} className={`${darkMode ? "text-lightText" : "text-[#00081F]"} h-8 w-8  `}/>}



                            {darkMode ? (
                                <FaSun
                                onClick={toggle}
                                className={`text-yellow-500 h-7 w-7 `}
                            />
                            ) : (
                                <FaMoon
                                onClick={toggle}
                                className={`text-navTextDark h-7 w-7 `}
                            />
                            )}
                            </div>



                        </div>


                    </div>
                </div>
                {/* secondary */}

                {/* mobile navigation */}
                <div
                    className={`fixed z-30 bg-gradient-to-r from-darkPrimary via-darkSecondary to-darkThird text-lightText w-[100%]  left-0 right-0    overflow-hidden flex flex-col lg:hidden gap-12  origin-top duration-700 mt-3
                    ${!toggleMenu ? "h-0" : "h-screen"}`}
                >
                    <div className=" ">
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
        </header>
    );
};

export default Navbare;
