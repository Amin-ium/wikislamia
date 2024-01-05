import React from 'react'
import cards from "../../../public/assets/publicImages/cards.svg"
import logoLight from "../../../public/assets/publicImages/logoLight.png"
import quran from "../../../public/assets/publicImages/Group.svg"

const CardsBanner = () => {
  return (
    <>
        <div className=' flex flex-col w-[80%] mx-auto  mt-[50px]'>
            <div className='w-full flex flex-row'>
                <div className='w-1/2 flex flex-col  -ms-[20px] '>
                    <img src={logoLight} alt="" className='  md:w-[50%] md:h-[50%]  lg:w-[70%] lg:h-[70%] lg:ms-[50px]  ' />
                    <h3 className='text-sm md:text-xl text-lightText -mt-[40px] ms-[70px] w-full lg:ms-[190px] lg:-mt-[75px] '>Identity&Path Of Life</h3>
                </div>
                <div className='w-1/2 '>
                    <img src={cards} className=' w-[100%] h-[100%] lg:w-[90%] lg:h-[90%] ms-[20px]' alt="" />
                </div>

            </div>
            <div className='w-[100%] lg:w-[70%] mx-auto flex flex-col'>
                    <p className='text-lightText text-xl lg:text-2xl'>“It will be said to the reciter of the Qur’an, “Read, ascend, and recite as you recited in this world, for your status is at the last verse you recite” </p>
                    <h4 className='text-gray-500 text-right text-sm lg:text-md -mt-0'>Narrated by Abu Dawud al-Tirmidhi</h4>
                </div>

        </div>
        <img src={quran} alt="" className='absolute w-[50%] h-[50%] -left-[80px] -top-[10px] lg:-left-[300px] ' />
    </>
  )
}

export default CardsBanner
