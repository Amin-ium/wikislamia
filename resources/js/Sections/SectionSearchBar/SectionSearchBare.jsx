import React from 'react'
import headImg from "../../../../public/assets/publicImages/—Pngtree—ramadan illustration muslim family praying_7466838 2.svg"
import SearchbarEng from '@/Components/SearchBareQuran/SearchbarEng'
import CheckedRadio from '@/Components/CheckedRadio'
import CardsBanner from '@/Components/CardsBanner'
import { useSearchBarContext } from '@/Context/SearchBarContext'
import SearchbarAr from '@/Components/SearchBareQuran/SearchbarAr'
import Searchbarfr from '@/Components/SearchBareQuran/SearchbarFr'
// import f from '../../../../public/assets/publicImages/coverBg.svg'

const SectionSearchBare = () => {

    const { check, setCheck } = useSearchBarContext();

console.log(check);
  return (
    <>
        <div className='w-[100%]  h-auto pb-[100px] '>
       <div className=' relative z-9 w-[90%]  mx-auto flex flex-col justify-center  pt-[140px] lg:pt-[10px] '>
        <img className='w-[300px] h-[150px]  md:w-[400px] md:h-[200px] lg:w-[400px] lg:h-[200px] -mt-[100px] sm:-mt-[100px]  md:-mt-[100px] lg:-mt-0 mx-auto' src={headImg} alt="" />
        <CheckedRadio />
        {check === 'ar' ? <SearchbarAr /> : check === 'eng' ? <SearchbarEng /> : check === 'fr' ? <Searchbarfr /> : null}

        <CardsBanner />
        </div>
        </div>
    </>
  )
}

export default SectionSearchBare
