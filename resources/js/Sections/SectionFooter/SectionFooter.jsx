import SubFooter from '@/Components/SubFooter/SubFooter';
import { DarkModeContext } from '@/Context/DarkModeContext';
import React, { useContext } from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";

const SectionFooter = () => {
    const { darkMode } = useContext(DarkModeContext);
  return (
        <>
        <section className={`${ darkMode ? "border-b-[1px] border-[#f1f1f125] text-lightText" : "border-b-[1px] border-[#28282825] text-darkText"} w-[100%]  py-[50px]`}>
        <div className='flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row w-[90%] mx-auto justify-between xl:justify-between lg:justify-between md:justify-between sm:justify-between'>
            <div className='flex flex-row w-2/3 mx-auto mb-3 justify-between sm:px-[40px] md:px-[60px] lg:px-[80px] xl:px-[100px] gap-5'>
            <div className=''>
                <h3 className='text-[16px] font-bold'>Pages</h3>
                <ul className='text-[14px] text-center'>
                    <li>Home</li>
                    <li>Quran</li>
                    <li>Hadeets</li>
                    <li>Blogs</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className=''>
                <h3 className='text-[16px] font-bold'>Informations</h3>
                <ul className='text-[14px] text-center'>
                    <li>Home</li>
                    <li>Quran</li>
                    <li>Hadeets</li>
                    <li>Blogs</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div  className=''>
                <h3 className='text-[16px] font-bold'>Company</h3>
                <ul className='text-[14px] text-center'>
                    <li>Home</li>
                    <li>Quran</li>
                    <li>Hadeets</li>
                    <li>Blogs</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
            </div>

            <div className={`${ darkMode ? "bg-[#261131] text-lightText" : "bg-gray-400 text-darkText"} shadow-gray-950 shadow-md w-full xs:w-full sm:w-2/3 sm:mx-auto md:w-1/3 lg:w-1/3     xl:w-1/3 flex flex-col  p-8 rounded-xl`}>
                <h3 className='font-bold'>Subscribe</h3>
                <div dir="ltr" className='flex dlex-row items-center'>
                    <input className='h-[30px] w-full rounded-s-md' placeholder='Adress Email' type="text" />
                    <button className='bg-blue h-[30px] px-3 rounded-e-md'><FaLongArrowAltRight /></button>

                </div>
                <p className='text-[12px] text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga iure suscipit ratione consequuntur ipsa modi quo vitae veritatis, minus unde?</p>
            </div>
        </div>
    </section>

     </>
  )
}

export default SectionFooter
