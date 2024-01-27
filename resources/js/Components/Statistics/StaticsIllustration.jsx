import React from 'react'
import illustration from '../../../../public/assets/publicImages/ramadanFamily1.svg'

const StaticsIllustration = () => {
  return (
    <div className='w-[50%] flex flex-col items-center '>
        <img src={illustration} alt="" className='w-[550px] h-[300px]' />
        <div className='flex flex-col text-lightText items-center gap-3'>
            <p>Muslims are followers of the religion Islam, who believe in and live by the teachings of the prophet Muhammad.</p>
            <div className='w-[100%] h-[1px] bg-lightText'></div>
            <p>There are more than two billion Muslims worldwide, making Islam the second-largest religion in the world, exceeded only by Christianity.</p>
        </div>
    </div>
  )
}

export default StaticsIllustration
