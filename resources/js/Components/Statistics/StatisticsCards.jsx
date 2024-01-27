import React from 'react'
import statistics1 from '../../../../public/assets/publicImages/statistics1.svg'
import statistics2 from '../../../../public/assets/publicImages/statistics2.svg'
import statistics3 from '../../../../public/assets/publicImages/statistics3.svg'

const StatisticsCards = () => {
  return (
    <div className='w-[50%] flex flex-col gap-[40px] justify-center items-center '>
        <div className='flex flex-row gap-[40px] '>
            <img src={statistics1} alt="" className='w-[250px] ' />
            <img src={statistics2} alt="" className='w-[250px] ' />
        </div>
        <img src={statistics3} alt="" className='w-[550px] ' />
    </div>
  )
}

export default StatisticsCards
