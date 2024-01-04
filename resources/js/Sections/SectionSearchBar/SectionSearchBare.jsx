import React from 'react'
import headImg from "../../../../public/assets/publicImages/—Pngtree—ramadan illustration muslim family praying_7466838 2.svg"
import SearchbarEng from '@/Components/SearchBareQuran/SearchbarEng'
import CheckedRadio from '@/Components/CheckedRadio'
import CardsBanner from '@/Components/CardsBanner'

const SectionSearchBare = () => {
  return (
    <>
       <div className='w-[90%] mx-auto flex flex-col justify-center mt-10 homeBg  '>
        <img className='w-[300px] h-[150px] mx-auto' src={headImg} alt="" />
        <CheckedRadio />
        <SearchbarEng />
        <CardsBanner />

        </div>
    </>
  )
}

export default SectionSearchBare
