import React from 'react'
import postImg from '../../../../public/assets/publicImages/pexels-mutahir-jamil-11667462.jpg'

const PostCard = ({src, username, title}) => {
  return (
    <div className='relative w-[100%] xl:w-[100%] hover:scale-110 duration-300'>
        <img src={postImg} alt="" className='w-[100%] xl:w-[100%] xl:h-[300px] rounded-2xl shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)] ' />
        <div className='flex flex-row gap-1 absolute top-[10px] left-[10px] items-center'>
            <img src={src} alt="" className='w-[50px] h-[50px] rounded-[50%] ' />
            <h3 className='text-lightText font-bold'>@{username}</h3>
        </div>
        <div className='absolute bottom-0 bgGradient h-[80px] hover:h-[100%] hover:bg-[rgba(54, 54, 54, 0.00)] duration-300 w-[100%] flex justify-center items-center rounded-b-2xl'>
        <h3 className='text-lightText text-2xl font-bold'>{title}</h3>
        </div>
    </div>
  )
}

export default PostCard
