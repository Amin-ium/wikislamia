import { DarkModeContext } from '@/Context/DarkModeContext';
import React, { useContext } from 'react'
import lightLogo from '../../../../public/assets/publicImages/logoLight.svg'
import darkLogo from '../../../../public/assets/publicImages/logoDark.svg'
import { FaFacebook } from "react-icons/fa";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { FaGithub } from "react-icons/fa6";

import { Link } from '@inertiajs/react';
import { SidebarContext } from '@/Context/SidebarContext';

const SubFooter = () => {
    const { darkMode } = useContext(DarkModeContext);
    const { opened } = useContext(SidebarContext);
  return (
    <section className={`${ darkMode ? "border-b-[1px] border-[#f1f1f125] bg-darkText text-lightBg" : "border-b-[1px] border-[#28282825] lightBg text-darkText"} ${opened ? "w-[calc(100%-240px)]" : "w-[calc(100%-40px)]"}`}>
        <div className='w-[90%] mx-auto flex flex-col xl:flex-row justify-center  xl:justify-center  align-middle xl:align-middle xl:items-center xl:gap-[100px] py-1'>
        <div className='flex justify-center'>
            <img className='w-[100px] h-[50px]' src={`${darkMode ? lightLogo : darkLogo}`} alt="logo" />
        </div>
        <div className='flex flex-col xl:flex-row   xl:justify-between xl:gap-[100px] xl:items-center'>
        <div className={`${darkMode ? "text-lightText" : "text-darkText"} flex flex-col  xl:flex-row text-center`}>
            <div className='flex flex-row justify-center gap-[5px]'>
            <Link className='font-bold text-[14px] xl:text-[16px] '>WIKISLAMIA</Link>
            <p className='text-[14px] xl:text-[16px]'>2024 - All rights are reserved -</p>
            </div>

            <b className='text-[14px] xl:text-[16px]'>Powered By Amine DAIEF</b>
        </div>
        <div className={`${darkMode ? "text-lightText" : "text-grayText"} flex flex-row items-center justify-center gap-2 `}>
            <FaFacebook size={24} />
            <TiSocialLinkedinCircular  size={30} />
            <FaGithub size={24} />
        </div>
        </div>

        </div>
    </section>
  )
}

export default SubFooter
