import StaticsIllustration from '@/Components/Statistics/StaticsIllustration'
import StatisticsCards from '@/Components/Statistics/StatisticsCards'
import lampe from '../../../../public/assets/publicImages/lampe.svg'
import quran from '../../../../public/assets/publicImages/quranillu.svg'
import React from 'react'

const SectionStatistics = () => {
  return (
    <section className='w-[100%] mt-[100px] relative'>
        <img src={lampe} alt="" className='absolute -top-[140px] left-0' />
        <img src={quran} alt="" className='absolute -top-[140px] right-0 z-30'  />
        <div className='w-[90%] mx-auto flex flex-row'>
            <StaticsIllustration />
            <StatisticsCards />
        </div>
    </section>
  )
}

export default SectionStatistics
