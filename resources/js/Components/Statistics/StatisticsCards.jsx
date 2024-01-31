import React from 'react'
import statistics1 from '../../../../public/assets/publicImages/statistics1.svg'
import statistics2 from '../../../../public/assets/publicImages/statistics2.svg'
import statistics3 from '../../../../public/assets/publicImages/frame.svg'

const StatisticsCards = () => {
  return (
    <div className='xl:w-1/2 w-[100%] flex flex-col gap-[40px] justify-center xl:justify-center items-center xl:items-center xl:p-4 '>
        <div className='w-full flex flex-row xl:flex-row gap-3 xl:gap-3 '>
            <div className='w-1/2 '>
                <img src={statistics1} alt="" className='w-full xl:full shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)] rounded-xl ' />
            </div>
            <div className='w-1/2 '>
                <img src={statistics2} alt="" className='w-full xl:full shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)] rounded-xl' />
            </div>
        </div>

            <img src={statistics3} alt="" className='xl:w-[500px] w-full shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)] rounded-xl ' />

    </div>
  )
}

export default StatisticsCards
