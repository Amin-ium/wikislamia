import React from 'react'
import cards from "../../../public/assets/publicImages/cards.svg"
import logoLight from "../../../public/assets/publicImages/logoLight.png"
import quran from "../../../public/assets/publicImages/Group.svg"

const CardsBanner = () => {
  return (
    <>
        <div className=' flex flex-col w-[80%] mx-auto  my-3'>
            <div className='w-full flex flex-row'>
                <div className='w-1/2 flex flex-col  -ms-[20px] '>
                    <img src={logoLight} alt="" className='  md:w-[50%] md:h-[50%]   ' />
                    <h3 className='text-sm md:text-xl text-lightText -mt-[40px] ms-[70px] w-full'>Identity&Path Of Life</h3>
                </div>
                <div className='w-1/2 '>
                    <img src={cards} className=' w-[100%] h-[100%] ms-[20px]' alt="" />
                </div>

            </div>
            <div className='w-[100%] mx-auto flex flex-col'>
                    <p className='text-lightText text-lg'>“It will be said to the reciter of the Qur’an, “Read, ascend, and recite as you recited in this world, for your status is at the last verse you recite” </p>
                    <h4 className='text-gray-500 text-right text-sm -mt-3'>Narrated by Abu Dawud al-Tirmidhi</h4>
                </div>

        </div>
        <img src={quran} alt="" className='absolute w-[50%] h-[50%] -left-[200px] top-[100px]  ' />
    </>
  )
}

export default CardsBanner
