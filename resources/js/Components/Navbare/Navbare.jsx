import React,{ useState, useEffect, useContext } from "react";
import { Link, usePage } from "@inertiajs/inertia-react";
import Dropdown from "@/Components/Dropdown";
import { FaMoon, FaSun, FaAlignJustify } from "react-icons/fa";
import logoLight from "../../../../public/assets/publicImages/logoLight.png";
import Alpine from "alpinejs";
import Select from 'react-select'
import { DarkModeContext } from "@/Context/DarkModeContext";
import { useSearchBarContext } from "@/Context/SearchBarContext";
// import { SearchContext, useSearchBarContext } from "@/Context/SearchBarContext";

const Navbare = (children) => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const { check, setCheck } = useSearchBarContext();

    const [user, setUser] = useState(false);
    // const [isSticky, setIsSticky] = useState(false);
    const [isDropOpen, setIisDropOpen] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const [isActiveAbout, setIisActiveAbout] = useState(false);
    const [isActiveQuran, setIisActiveQuran] = useState(false);
    const [isActiveContact, setIisActiveContact] = useState(false);
    const [isActiveHadeeth, setIsActiveHadeeth] = useState(false);
    const [isActiveBlogs, setIisActiveBlogs] = useState("");
    const [activeLink, setActiveLink] = useState("");
    const [currentCheck, setCurrentCheck] =  useState(check);

     useEffect(() => {
        console.log(currentCheck);
     }, [currentCheck])



    const { toggle, darkMode } = useContext(DarkModeContext);

    const options = [
  { value: 'eng', label: 'eng' },
  { value: 'ar', label: 'ar' },
  { value: 'fr', label: 'fr' }
]

const links = [
    { englishLink: 'Home', frenchLink: 'Acceuil', arabicLink: 'الرئيسية', href: '/' },
    { englishLink: 'Quran', frenchLink: 'Coran', arabicLink: 'القرآن الكريم', href: '/quran' },
    { englishLink: 'Hadeeth', frenchLink: 'Hadith', arabicLink: 'الحديث', href: '/hadeeth' },
    { englishLink: 'Blogs', frenchLink: 'Articles', arabicLink: 'مقالات', href: '/blogs' },
    { englishLink: 'About', frenchLink: 'A Propos', arabicLink: 'من نكون', href: '/about' },
    { englishLink: 'Contact Us', frenchLink: 'Contact', arabicLink: 'إتصل بنا', href: '/contact' },
  ]

const active = 'font-bold border-b-2 border-lightText text-lightText  hover:bg-purple-800 hover:text-darkBg px-2 rounded'
const normal = 'font-normal text-lightText  hover:bg-orangeBg hover:text-darkBg px-2 rounded'


console.log(currentCheck);

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

    const customStyles = {
        control: (provided, state) => ({
          ...provided,
          background: '#fff',
          fontSize: '14px',
          borderColor: '#9e9e9e',
          minHeight: '20px',
          height: '20px',
          width: '60px',
          minWidth: 'hi',
          boxShadow: state.isFocused ? null : null,
        }),

        valueContainer: (provided, state) => ({
          ...provided,
          height: '20px',
          padding: '0 6px 6px 6px',
          width: '60px',
        }),

        input: (provided, state) => ({
          ...provided,
          margin: '-10px',
          width: '60px',
        }),
        indicatorSeparator: state => ({
          display: 'none',




        }),
        indicatorsContainer: (provided, state) => ({
          ...provided,
          height: '20px',


        }),

        placeholder: (provided, state) => ({
            ...provided,
            display: "none",


          }),
      };

      const updateValue = (value) => {
        setCheck(value.value);

      };

      console.log(check);

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
        setToggleMenu(!toggleMenu)
    }
    console.log(toggleMenu);
    // const { auth } = usePage().props;

    return (
        <header
            // ref={headerRef}
            id=""
            className={`relative z-29 px-3  max-w-full `}
            x-data="{navbarOpen: false}"
        >
            <nav className="z-15">
                <div className="max-w-7xl mx-auto">
                    <div className="flex w-[90%] lg:w-[90%] md:w-[90%] mx-auto justify-between   gap-5">
                        {/* Primary menu and logo */}
                        <div className="flex items-center  gap-5 ">
                            {/* logo */}
                            <div className="shrink-0">
                                <Link
                                    href="/"
                                    className=" flex items-center "
                                >
                                    <img
                                        className={`w-[40%] h-[40%]  xs:w-[90%] xs:h-[90%]  md:w-[50%] md:h-[50%]  lg:w-[50%] lg:h-[50%] xl:w-[50%] xl:h-[50%]  `}
                                        src={logoLight}
                                        alt=""
                                    />
                                </Link>
                            </div>
                            {/* primary */}
                            {/* {`${isSticky ? "text-white" : "text-black"} navLinks hidden lg:flex gap-8 `}  */}
                            <div className={`  navLinks text-lightText  hidden lg:flex gap-4 -ms-[70px]`}>
                            {links&&links.map((link,i) => (
                                check === 'eng' ? (
                                    <Link
                                    id="link"

                                    href={link.href}
                                    className={ window.location.pathname === link.href ? active : normal}
                                >

                                    {link.englishLink}
                                </Link>
                                ) : check === 'fr' ? (
                                    <Link
                                    id="link"
                                    href={link.href}
                                    className={` text-lightText  hover:bg-orangeBg hover:text-darkBg px-2 rounded  `}
                                >

                                    {link.frenchLink}
                                </Link>
                                ) : check === 'ar' ? (
                                    <Link
                                    id="link"
                                    href={link.href}
                                    className={` text-lightText  hover:bg-orangeBg hover:text-darkBg px-2 rounded  `}
                                >

                                    {link.arabicLink}
                                </Link>
                                ) : null
                                ))}
                                </div>
                            {/* <div className={`  navLinks text-lightText  hidden lg:flex gap-4 `}>
                                <Link
                                    id="link"
                                    href="/"
                                    className={`   hover:bg-orangeBg hover:text-darkBg px-1 rounded  `}
                                >

                                    HOME
                                </Link>
                                <Link
                                    id="link"
                                    href="/blogs"
                                    className={` hover:bg-orangeBg hover:text-darkBg px-1 rounded  `}
                                >
                                    BLOGS
                                </Link>
                                <Link
                                    id="link"
                                    href="/quran"
                                    className={`  hover:bg-orangeBg hover:text-darkBg px-1 rounded  `}
                                >
                                    QURAN
                                </Link>

                                <Link
                                    id="link"
                                    href="/about"
                                    className={`   hover:bg-orangeBg hover:text-darkBg px-1 rounded  `}
                                >
                                    ABOUT
                                </Link>
                                <Link
                                    id="link"
                                    href="/hadeeth"
                                    className={` hover:bg-orangeBg hover:text-darkBg px-1 rounded  `}
                                >
                                    HADEETH
                                </Link>
                                <Link
                                    id="link"
                                    href="/contact"
                                    className={`   hover:bg-orangeBg hover:text-darkBg px-1 rounded  `}
                                >
                                    CONTACT
                                </Link>
                            </div> */}
                        </div>
                        {/* secondary */}
                        <div className="flex flex-row   gap-2 align-middle lg:items-center">
                            <div className="flex xs:flex items-center gap-10">
                                <div className="flex flex-row-reverse gap-3">
                                    {/* {auth.user ? ( */}

                                        {/* <div className="flex items-center gap-2">
                                            <div className="text-white">
                                                <Link
                                                    className="w-auto text-xs text-white border hover:text-red-700 hover:bg-gray-50 duration-300 hover:border-red-700  bg-red-700 px-1 rounded"
                                                    href="/logout"
                                                    as="button"
                                                    method="POST"
                                                >
                                                    Logout
                                                </Link>
                                            </div> */}
                                            {user ? (
                                                 <Dropdown>
                                                 <Dropdown.Trigger>
                                                     <span className="inline-flex rounded-md">
                                                         <button
                                                             type="button"
                                                             className="inline-flex items-center px-1 py-1 border border-gray-100 text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
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
                                                             Admin
                                                             Dashboard
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
                                            ) : null}

                                        {/* </div> */}
                                    {/* ) : ( */}

                                        <div className="flex items-center gap-3 text-lightText">
                                            <Link
                                                className={` loginBtn text-xs border border-lightText rounded-lg font-medium  hover:opacity-70 px-1`}
                                                href="/register"
                                            >
                                               {check === 'eng' ? "Register" : check === 'ar' ? "التسجيل" : check === 'fr' ? "Inscription" : null }
                                            </Link>
                                            <Link
                                                className={` signUpBtn border border-lightText rounded-lg   text-xs  font-medium duration-300 ease-in-out hover:bg-opacity-100  px-1`}
                                                href="/login"
                                            >
                                                {check === 'eng' ? "Login" : check === 'ar' ? "الدخول" : check === 'fr' ? "Connexion" : null }
                                            </Link>
                                        </div>
                                    {/* )} */}
                                </div>
                            </div>
                            {/* Mobile navigation toggle */}

                            <div className=" z-11  flex items-center lg:items-center gap-2 mt-1 ml-3">
                                <FaSun
                                    onClick={toggle}
                                    className={`text-yellow-500 h-4 w-4 `}
                                />
                                 <Select defaultValue={{value:currentCheck,label:currentCheck}} onChange={updateValue} options={options} myHeight='10px' myFontSize='12px' styles={customStyles} className=" -mt-1" />
                            </div>

                            <div className="text-lightText lg:hidden flex items-center">
                                <button
                                    className={` menuBtn`}
                                    onClick={setMobileMenu}
                                >
                                    <FaAlignJustify className=" h-5 w-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </nav>
             {/* mobile navigation */}
             <div
                    className={`fixed z-10 bg-gradient-to-r from-darkPrimary via-darkSecondary to-darkThird text-lightText w-[100%]  left-0 right-0    overflow-hidden flex flex-col lg:hidden gap-12  origin-top duration-700
                    ${
                        !toggleMenu ? "h-0" : "h-screen"
                    }`}
                >
                    <div className="px-8 pt-5">
                        <div className="flex flex-col gap-8 font-bold text-center tracking-wider">
                            <Link href="#" className=" ">
                                Home
                            </Link>
                            <Link href="/blogs">BLOGS</Link>
                            <Link href="/quran">QURAN</Link>
                            <Link href="/about">ABOUT</Link>
                            <Link href="/hadeeth">HADEETH</Link>
                            <Link href="contact">CONTACT</Link>
                        </div>
                    </div>
                </div>
        </header>
    );
};

export default Navbare;
