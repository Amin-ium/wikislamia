import { DarkModeContext } from "@/Context/DarkModeContext";
import LayoutApp from "@/Layout/LayoutApp";
import { Head } from "@inertiajs/inertia-react";
import React, { useContext } from "react";
import ContactForm from "./ContactForm";
import ApplicationLogo from "@/Components/ApplicationLogo";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

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
                    <p >Drop us a line through the form below and we'll get back to you</p>
                    </div>

                    <div className=' w-full h-auto flex flex-col md:flex-row md:items-center gap-4 md:flex justify-between '>

                            <div className={`${darkMode ? "from-[#1e2024] to-[#21272b] text-lightText" : "from-[#797f8d] to-[#aebcc5] text-darkText"} bg-gradient-to-r  w-[90%] mx-auto md:w-[60%] h-full py-10 mb-5 relative justify-center   p-8   rounded-lg flex flex-col`}>
                                    <ContactForm />
                            </div>
                            <div className={`${darkMode ? "from-[#1e2024] to-[#21272b] text-lightText" : "from-[#797f8d] to-[#aebcc5] text-darkText"} md:w-[35%] w-[90%]  mx-auto h-full bg-gradient-to-r    rounded-lg p-8 flex flex-col gap-8 justify-center mb-5`}>
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
