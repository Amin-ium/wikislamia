import React from 'react'
import postImg from '../../../../public/assets/publicImages/pexels-mutahir-jamil-11667462.jpg'

const PostCard = ({src, username, title}) => {
  return (
    <div className='relative w-[100%] xl:w-[100%] '>
        <img src={postImg} alt="" className='w-[100%] xl:w-[100%] xl:h-[400px] rounded-2xl ' />
        <div className='flex flex-row gap-1 absolute top-[10px] left-[10px] items-center'>
            <img src={src} alt="" className='w-[50px] h-[50px] rounded-[50%] ' />
            <h3 className='text-lightText font-bold'>@{username}</h3>
        </div>
        <div className='absolute bottom-0 bg-gradient-to-b from-darkText  to-lightText h-[80px] w-[100%] flex justify-center items-center'>
        <h3 className='text-lightText text-2xl font-bold'>{title}</h3>
        </div>
    </div>
  )
}

export default PostCard
