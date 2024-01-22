import { DarkModeContext } from '@/Context/DarkModeContext';
import React, { useContext } from 'react'

const SectionTitle = ({title, des}) => {
    const {darkMode} = useContext(DarkModeContext);
  return (
    <div className='flex flex-col text-center'>
        <h1 className={`${darkMode ? "text-titleTextLight" : "text-titleTextDark"} text-2xl text-titleFont xl:lg:text-4xl  font-bold capitalize`}>{title}</h1>
        <h3 className={`${darkMode ? "text-subTitleTextLight" : "text-subTitleTextDark"}  text-sm md:text-md text-subTitleFont lg:text-md uppercase  tracking-wide`}>{des}</h3>
      </div>
  )
}

export default SectionTitle
