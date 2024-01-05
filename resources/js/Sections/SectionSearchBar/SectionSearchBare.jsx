import React from 'react'
import headImg from "../../../../public/assets/publicImages/—Pngtree—ramadan illustration muslim family praying_7466838 2.svg"
import SearchbarEng from '@/Components/SearchBareQuran/SearchbarEng'
import CheckedRadio from '@/Components/CheckedRadio'
import CardsBanner from '@/Components/CardsBanner'
// import f from '../../../../public/assets/publicImages/coverBg.svg'

const SectionSearchBare = () => {
  return (
    <>
        <div className='w-[100%]  homeBg'>
       <div className=' relative z-9 w-[90%]  mx-auto flex flex-col justify-center  pt-[140px] lg:pt-[10px] '>
        <img className='w-[300px] h-[150px] md:w-[400px] md:h-[200px] lg:w-[400px] lg:h-[200px] -mt-[100px] sm:-mt-[100px]  md:-mt-[100px] lg:-mt-0 mx-auto' src={headImg} alt="" />
        <CheckedRadio />
        <SearchbarEng />
        <CardsBanner />
        </div>
        </div>
    </>
  )
}

export default SectionSearchBare
