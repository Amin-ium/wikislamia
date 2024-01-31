import React, { useContext } from 'react'
import illustration from '../../../../public/assets/publicImages/ramadanFamily1.svg'
import { DarkModeContext } from '@/Context/DarkModeContext';

const StaticsIllustration = () => {
    const {darkMode} = useContext(DarkModeContext);
  return (
    <div className='xl:w-[50%] w-full flex flex-col items-center '>
        <img src={illustration} alt="" className='w-[550px] h-[300px]' />
        <div className={`${darkMode ? "text-lightText" : "text-darkText"} flex flex-col  items-center gap-3`}>
            <p>Muslims are followers of the religion Islam, who believe in and live by the teachings of the prophet Muhammad.</p>
            <div className={`${darkMode ? "text-lightText" : "text-darkText"} w-[100%] h-[1px] `}></div>
            <p>There are more than two billion Muslims worldwide, making Islam the second-largest religion in the world, exceeded only by Christianity.</p>
        </div>
    </div>
  )
}

export default StaticsIllustration
