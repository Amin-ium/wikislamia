import React, { useContext } from 'react'
import quranBanner from '../../../../public/assets/publicImages/quranBanner.svg'
import separator from '../../../../public/assets/publicImages/rseparator.png'
import { useSearchBarContext } from '@/Context/SearchBarContext';
import { DarkModeContext } from '@/Context/DarkModeContext';

const QuranPageBanner = ({text}) => {
    const { check, setCheck } = useSearchBarContext();
    const { toggle, darkMode } = useContext(DarkModeContext);
  return (
    <>
    <div className='w-full flex flex-col justify-center text-center -mt-[150px] mb-[100px]'>
        <img src={quranBanner} className='h-[350px] w-[550px]  mx-auto' alt="" />
        <div className='flex flex-row items-center align-middle justify-center -mt-[50px]'>
        <img src={separator} alt="" className='rotate-180 ' />
        <p className={`${darkMode ? "text-lightText" : "text-darkText"} shadow-purple-300 shadow-lg para text-xl w-2/3`}>{text}</p>
        <img src={separator} alt="" />
        </div>

        </div></>
  )
}

export default QuranPageBanner
