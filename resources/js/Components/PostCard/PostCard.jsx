import React from 'react'
import postImg from '../../../../public/assets/publicImages/pexels-mutahir-jamil-11667462.jpg'
import { Link } from '@inertiajs/react'

const PostCard = ({title, description, name, created_at, userSrc, category,tags, id, categoryId, tagId, darkMode, postImgSrc}) => {
  return (
    <div className='relative w-[100%] xl:w-[100%] hover:scale-110 duration-300 group z-10'>
        <img src={postImgSrc} alt="" className='w-[100%] xl:w-[100%] xl:h-[300px] rounded-2xl shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)] ' />
        <div className='flex flex-row gap-1 absolute top-[10px] left-[10px] items-center  group-hover:z-20 '>
            <img src={userSrc} alt="" className='w-[50px] h-[50px] rounded-[50%] relative group-hover:z-20 ' />
            <h3 className=' relative text-lightText font-bold group-hover:z-20'>@{name}</h3>
        </div>
        <div className=' absolute z-14 bottom-0 bgGradient h-[80px] group-hover:h-[100%] group-hover:bg-[rgba(143,7,233,0.6306897759103641)] group-hover:rounded-t-2xl duration-300 w-[100%] flex flex-col gap-7 justify-center items-center rounded-b-2xl'>
        <h3 className='text-lightText text-2xl font-bold mt-10'>{title}</h3>
        <p className='hidden group-hover:block text-center text-lightText'>{description}</p>
        <div className='invisible  group-hover:visible  flex flex-row items-center align-middle gap-5'>
            <h4 className='text-lightText'>Posted at: {created_at}</h4>
            <div className='flex xl:flex-row gap-1'>
            {tags.map((tg,i) =>
                                             <Link href={`/dashboard/PostTag/${tagId}`} class={`bg-darkText text-lightText text-[12px] px-1`}>
                                                {tg}
                                             </Link>
                                             )}
                <span className='bg-darkText text-lightText text-[12px] px-1'>Islam</span>
                <span className='bg-darkText text-lightText text-[12px] px-1'>Tawheed</span>
            </div>
        </div>
        </div>
    </div>
  )
}

export default PostCard
