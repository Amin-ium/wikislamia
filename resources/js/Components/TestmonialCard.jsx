import React from 'react'
import { IoMdStar, IoMdStarHalf  } from "react-icons/io";
import { FaQuoteLeft } from "react-icons/fa";
import test from '../../../public/assets/publicImages/testimonialTwo.png'


const TestmonialCard = ({src, alt, name, job, text}) => {
  return (
    <div className='w-full mx-auto md:w-[310px] md:h-[340px] lg:w-[310px] lg:h-[340px] xl:w-[310px] xl:h-[340px] bg-[#434343] p-5 flex flex-col  gap-10 rounded-3xl text-lightText relative z-10 shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)]'>
        <div className='flex flex-col gap-3 mt-3'>
        <FaQuoteLeft size={44} />
            <p>{text}</p>
        </div>
        <div className='flex flex-row justify-end'>
            <IoMdStar size={24} className='text-yellow-500' />
            <IoMdStar size={24} className='text-yellow-500' />
            <IoMdStar size={24} className='text-yellow-500' />
            <IoMdStar size={24} className='text-yellow-500' />
            <IoMdStarHalf size={24} className='text-yellow-500' />
        </div>
        <div className='flex flex-row'>
            <img src={src} alt={alt} className='w-[50px] h-[50px] rounded-[50%]' />
            <div className='flex flex-col ms-2'>
                <span className='font-bold text-lg'>{name}</span>
                <span className='text-gray-400'>{job}</span>
            </div>
        </div>
    </div>
  )
}

export default TestmonialCard
