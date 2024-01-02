import React from 'react'
import cards from "../../../public/assets/publicImages/cards.svg"
import logoLight from "../../../public/assets/publicImages/logoLight.png"
import quran from "../../../public/assets/publicImages/Group.svg"

const CardsBanner = () => {
  return (
    <>
        <div className='relative flex flex-row w-[80%] mx-auto  '>
            <div>
                <div className='relative ms-[100px]'>
                <img src={logoLight} alt="" className='w-[50%] h-[50%]   ' />
                <h3 className='text-xl text-lightText absolute top-[75px] left-[100px] '>Identity&Path Of Life</h3>
                </div>

                <div className='w-[80%] mx-auto flex flex-col'>
                    <p className='text-lightText text-xl'>“It will be said to the reciter of the Qur’an, “Read, ascend, and recite as you recited in this world, for your status is at the last verse you recite” </p>
                    <h4 className='text-gray-500 text-right'>Narrated by Abu Dawud al-Tirmidhi</h4>
                </div>
            </div>
            <img src={cards} className=' w-[40%] h-[40%]  mx-auto mt-5 ' alt="" />
        </div>
        <img src={quran} alt="" className='absolute w-[50%] h-[50%] -left-[200px] top-[100px]  ' />
    </>
  )
}

export default CardsBanner
