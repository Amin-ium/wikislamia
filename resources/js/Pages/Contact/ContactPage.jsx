
import LayoutApp from "@/Layout/LayoutApp";
import { Head } from "@inertiajs/inertia-react";
import React, { useContext } from "react";
import ContactForm from "./ContactForm";

import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import contactBanner from '../../../../public/assets/publicImages/contactBanner.png'
import { DarkModeContext } from "@/Context/DarkModeContext";

const ContactPage = () => {
    const {darkMode} = useContext(DarkModeContext);
    return (
        <>
            <LayoutApp>
                <Head>
                    <title>Contact Page</title>
                </Head>
                <section
                    id="section1"
                    className={`
                    bg-quranBg h-[400px] bg-cover bg-center flex justify-center `}
                ></section>
                <div className={` w-[100%] md:w-[80%] mx-auto -mt-[300px]  flex flex-col md:flex-col  gap-[50px]  rounded-lg pb-10 `}>
                    <div className="text-lightText flex flex-col  w-[90%] md:flex-col gap-3 text-center bg-darkBg bg-opacity-50 md:w-[70%] mx-auto p-3 rounded-lg">
                    {/* <Title
                    title='Contact Us'
                     /> */}
                     <div className="w-full flex flex-row  mx-auto">
                        <img src={contactBanner} className="h-[250px] w-[250px] mx-auto " alt="" />
                        <div className=" flex flex-row justify-center items-center mx-auto gap-2 ">
                            <div className={`${darkMode ? "bg-purple-600 " : "bg-purple-900 "} w-[10px] h-[60px] `}></div>
                            <div className={`${darkMode ? "text-lightText " : "text-darkText "} flex flex-col text-darkText text-left text-2xl font-[800]`}>
                                <h2>Drop us a line through the form below</h2>
                                <h2>We'll get back to you</h2>
                            </div>

                        </div>
                     </div>


                    </div>

                    <div className=' w-full h-auto flex flex-col md:flex-row md:items-center gap-4 md:flex justify-between '>

                            <div className={`${darkMode ? "shadow-2xl shadow-purple-900 border-[1px] border-purple-900 text-lightText" : "shadow-[0_0px_60px_-15px_#800080] text-darkText"}  w-[90%] mx-auto md:w-[60%] h-full py-10 mb-5 -mt-[50px] relative justify-center   p-8   rounded-[20px] flex flex-col`}>
                                    <ContactForm />
                            </div>
                            <div className={`${darkMode ? "shadow-2xl shadow-purple-900 border-[1px] border-purple-900 text-lightText" : "shadow-[0_0px_60px_-15px_#800080] text-darkText"} md:w-[35%] w-[90%]  mx-auto h-full bg-gradient-to-r    rounded-lg p-8 flex flex-col gap-8 justify-center mb-5`}>
                                {/* {darkMode ?
                                <ApplicationLogo className="w-full h-64 object-cover rounded-lg mb-2" /> :
                                <ApplicationLogo className="w-full h-64 object-cover rounded-lg mb-2" />} */}

                                    <div className='flex flex-col text-center justify-center gap-4'>


                                        <p className='text-base tracking-wide text-center '>The Last Islamic Encyclobedy You'll Ever Need,
                                            Wikislamia is the port of jQuery slick library</p>

                                    </div>
                                    <div className='flex flex-col text-center gap-1'>
                                        <h2 className='text-base  uppercase font-titleFont mb-4'>Find Me In</h2>
                                        <div className='flex gap-4 justify-center'>
                                            <span className='bannerIcon '><FaFacebookF /></span>
                                            <span className='bannerIcon '><FaTwitter /></span>
                                            <span className='bannerIcon '><FaLinkedinIn /></span>
                                        </div>
                                    </div>
                                    <div className=" mx-auto justify-center">
                                    <p className='text-base text-center  flex items-center gap-2'>Phone: <span className=''>+212646109969</span></p>
                                        <p className='text-base  flex items-center gap-2'>Email: <span className=''>amine.daief@gmail.com</span></p>
                                    </div>
                            </div>
                    </div>
                </div>
            </LayoutApp>
        </>
    );
};

export default ContactPage;
