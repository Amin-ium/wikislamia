import React, { useContext } from 'react'
import headImg from "../../../../public/assets/publicImages/—Pngtree—ramadan illustration muslim family praying_7466838 2.svg"
import SearchbarEng from '@/Components/SearchBareQuran/SearchbarEng'
import CheckedRadio from '@/Components/CheckedRadio'
import CardsBanner from '@/Components/CardsBanner'
import { useSearchBarContext } from '@/Context/SearchBarContext'
import SearchbarAr from '@/Components/SearchBareQuran/SearchbarAr'
import Searchbarfr from '@/Components/SearchBareQuran/SearchbarFr'
import { DarkModeContext } from '@/Context/DarkModeContext'
import headerImgDark from '../../../../public/assets/publicImages/imgDark.svg'
import headerImgLight from '../../../../public/assets/publicImages/OBJECTS.svg'
import { useScroll } from '@/Context/ScrollContext'

const SectionSearchBare = ({sectionId}) => {

    const { check, setCheck } = useSearchBarContext();
    const { darkMode } = useContext(DarkModeContext);
    const { sectionRefs } = useScroll();

console.log(check);
  return (
    <>
    <section ref={sectionRefs.section1} className='w-[100%] h-auto homeBg '>
        <div className='w-[100%]   pb-[100px] '>
       <div className=' relative z-9 w-[90%]  mx-auto flex flex-col justify-center  pt-[140px] lg:pt-[10px] '>
        <img className={`${darkMode ? "w-[300px] h-[150px]  md:w-[400px] md:h-[200px] lg:w-[400px] lg:h-[200px] -mt-[100px] sm:-mt-[100px]  md:-mt-[100px] lg:-mt-0 mx-auto"
        : "w-[300px] h-[150px]  md:w-[400px] md:h-[200px] lg:w-[400px] xl:w-[500px] lg:h-[200px] xl:h-[200px] -mt-[100px] sm:-mt-[100px]  md:-mt-[100px]  lg:-mt-0 mx-auto"} `}
        src={darkMode ? headerImgLight : headerImgDark} alt="" />
        <CheckedRadio />
        {check === 'ar' ? <SearchbarAr /> : check === 'eng' ? <SearchbarEng /> : check === 'fr' ? <Searchbarfr /> : null}

        <CardsBanner />
        </div>
        </div>
        </section>
    </>
  )
}

export default SectionSearchBare
