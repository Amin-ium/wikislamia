import { Link } from '@inertiajs/react'
import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import logoLight from "../../../../public/assets/publicImages/logoLight.png";
import Dropdown from '../Dropdown';
const Navbare = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
      const navLinks = [
        { href: "/home", label: "Home" },
        { href: "/blogs", label: "Blogs" },
        { href: "/quran", label: "Quran" },
        { href: "/hadeeth", label: "Hadeeth" },
        { href: "/about", label: "About" },
        { href: "/contact", label: "Contact" },
      ];

  return (

    <>
    <header className=" z-10  text-navTextLight border-b-[1px] 	 border-gray-300">
      <nav className="w-[90%]  mx-auto flex justify-between md:align-middle items-center max-container">
        {/* logo */}
        <Link href="/" className="">
          <img className='w-[160px] h-[80px]' src={logoLight} alt="" />
        </Link>

            {/* navigation links */}
        <ul className="flex float-start gap-7  max-lg:hidden ">
          {navLinks.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        {/* authentication  */}
        <div className="flex gap-5 text-sm   align-middle font-medium max-lg:hidden ">
          <Link className='bg-lightBg text-darkText text-center flex align-middle items-center  px-1 rounded' href="/"><span>Sign-up</span></Link>

          <Link className='bg-darkText text-lightText text-center  flex align-middle items-center  px-1 rounded' href="/"><span>Sign-in</span></Link>
        </div>


         {/* Dropdown */}
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
            {/* {auth.user.is_admin ? (
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
            ) : ( */}
                <Dropdown.Content>
                    <Dropdown.Link href="/profile">
                        Profile
                    </Dropdown.Link>
                    <Dropdown.Link href="/dashboard">
                        Dashboard
                    </Dropdown.Link>
                </Dropdown.Content>
            {/* )} */}
        </Dropdown>


        {/* toggle bars */}
        <div
          className="hidden max-lg:block cursor-pointer"
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
          }}
        >
          <RxHamburgerMenu className="text-4xl" />
        </div>
      </nav>
    </header>
    {/* mobile header */}
    {isMenuOpen && (
      <div>
        <nav className="fixed top-0 right-0 left-0 bottom-0 lg:bottom-auto bg-slate-100  ">
          <div
            className="hidden max-lg:block fixed right-0  px-8 py-4 cursor-pointer"
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
          >
            <AiOutlineClose className="text-4xl" />
          </div>
          <ul className=" lg:hidden flex flex-col items-center justify-center h-full ">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="font-montserrat leading-normal text-lg text-slate-gray"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    )}
  </>

      );
    };





export default Navbare
