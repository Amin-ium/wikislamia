import React, { useContext } from 'react'
import CheckedRadio from '@/Components/CheckedRadio'
import CardsBanner from '@/Components/CardsBanner'
import { useSearchBarContext } from '@/Context/SearchBarContext'
import { DarkModeContext } from '@/Context/DarkModeContext'
import headerImgDark from '../../../../public/assets/publicImages/imgDark.svg'
import headerImgLight from '../../../../public/assets/publicImages/OBJECTS.svg'
import { useScroll } from '@/Context/ScrollContext'
import moment from 'moment'
import { ToggleMenuContext } from '@/Context/ToggleMenuContext'
import SearchbarEng from '@/Components/SearchBareQuran/SearchbarEng'

const SectionSearchBare = ({verses, resultPrayer, surahs}) => {


    const { darkMode } = useContext(DarkModeContext);
    const { sectionRefs } = useScroll();


    const formattedDate = moment().format('HH:mm');
    // let dt = moment("12:15 AM", ["h:mm A"]).format("HH:mm");
    console.log(formattedDate);

    let requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      fetch("https://hadeethenc.com/api/v1/hadeeths/one/?language=fr&id=2962", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result ))
        .catch(error => console.log('error', error));

console.log(resultPrayer);

  return (
    <>
    <section ref={sectionRefs.section1} className={`${ darkMode ? "border-b-[1px] border-[#f1f1f125] " : "border-b-[1px] border-[#28282825]"} w-[100%] h-auto homeBg pb-15`}>
        <div className='w-[100%]   py-[100px] '>
       <div className=' relative z-9 w-[90%]  mx-auto flex flex-col justify-center  pt-[140px] lg:pt-[10px] '>
        <img className={`${darkMode ? "w-[300px] h-[150px]  md:w-[400px] md:h-[200px] lg:w-[400px] lg:h-[200px] -mt-[100px] sm:-mt-[100px]  md:-mt-[100px] lg:-mt-0 mx-auto"
        : "w-[300px] h-[150px]  md:w-[400px] md:h-[200px] lg:w-[400px] xl:w-[500px] lg:h-[200px] xl:h-[200px] -mt-[100px] sm:-mt-[100px]  md:-mt-[100px]  lg:-mt-0 mx-auto"} `}
        src={darkMode ? headerImgLight : headerImgDark} alt="" />
        <CheckedRadio />
        <SearchbarEng verses={verses} surahs={surahs} />
        <CardsBanner />
        </div>
        </div>
        </section>
    </>
  )
}

export default SectionSearchBare
