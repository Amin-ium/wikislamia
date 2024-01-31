import React from 'react'
import statistics1 from '../../../../public/assets/publicImages/statistics1.svg'
import statistics2 from '../../../../public/assets/publicImages/statistics2.svg'
import statistics3 from '../../../../public/assets/publicImages/statistics3.svg'

const StatisticsCards = () => {
  return (
    <div className='xl:w-[50%] w-[100%] flex flex-col gap-[40px] justify-center items-center '>
        <div className='flex flex-row xl:flex-col xl:gap-[40px] gap-1 '>
            <img src={statistics1} alt="" className='xl:w-[250px] w-1/2 ' />
            <img src={statistics2} alt="" className='xl:w-[250px] w-1/2 ' />
        </div>
        <img src={statistics3} alt="" className='xl:w-[550px] w-full ' />
    </div>
  )
}

export default StatisticsCards
