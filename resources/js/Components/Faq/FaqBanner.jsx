import React, { useContext } from 'react'
import faqBanner from '../../../../public/assets/publicImages/faqBanner.svg'
import { DarkModeContext } from '@/Context/DarkModeContext';
import { Link } from '@inertiajs/react';

const FaqBanner = () => {
    const { darkMode } = useContext(DarkModeContext);
  return (
    <div className='w-full xl:w-1/2 flex flex-col justify-center '>
        <img src={faqBanner} alt="" />
        <div className='flex flex-row items-center align-middle gap-3 mb-10 '>
            <div className={`${darkMode? "bg-lightBg" : "bg-darkText"} ml-[50px] xl:ml-[150px] mb-2 h-[50px] w-[4px] rounded-md `}></div>
        <p className={`${darkMode ? "text-lightText" : "text-darkText"} w-full xl:w-[70%] mx-auto text-xl  -mt-3`}>For more question visit f.a.q page by clicking on this link <Link className=' underline'>F.A.Q</Link></p>
        </div>

    </div>
  )
}

export default FaqBanner
