import StaticsIllustration from '@/Components/Statistics/StaticsIllustration'
import StatisticsCards from '@/Components/Statistics/StatisticsCards'
import lampe from '../../../../public/assets/publicImages/lampe.svg'
import quran from '../../../../public/assets/publicImages/quranillu.svg'
import React, { useContext } from 'react'
import { useScroll } from '@/Context/ScrollContext'
import { DarkModeContext } from '@/Context/DarkModeContext'
import SectionTitle from '@/Components/SectionTitle'

const SectionStatistics = () => {
    const { sectionRefs } = useScroll();
    const { darkMode } = useContext(DarkModeContext);
  return (
    <section ref={sectionRefs.section5} className={`${ darkMode ? "border-b-[1px] border-[#f1f1f125] " : "border-b-[1px] border-[#28282825]"} w-[100%] mt-[100px] xl:mt-0 relative py-[50px]`}>
        <SectionTitle title="Statistics" des="Numbers talks & we listen"   />
        <img src={lampe} alt="" className='absolute w-[200px] h-[200px] -top-[140px] left-0 z-30' />
        <img src={quran} alt="" className='absolute w-[200px] h-[200px]  -top-[120px] xl:-top-[140px] right-0 z-30'  />
        <div className='w-[90%] mx-auto flex flex-col xl:flex-row xl:mt-3 -mt-10'>
            <StaticsIllustration />
            <StatisticsCards />
        </div>
    </section>
  )
}

export default SectionStatistics
