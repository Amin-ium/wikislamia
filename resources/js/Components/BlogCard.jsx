
import { DarkModeContext } from '@/Context/DarkModeContext';
import { useSearchBarContext } from '@/Context/SearchBarContext';
import { Link } from '@inertiajs/inertia-react'
import React, { useContext } from 'react'


const BlogCard = ({title, username, postHref, userHref, description, postTags, created_at, imagePath, tagId}) => {

    const { darkMode } = useContext(DarkModeContext);
    const { check } = useSearchBarContext();




  return (
    <div  className='hover:rounded-xl shadow-xl shadow-purple-900 group hover:scale-105 duration-300'>
                        <Link href={postHref}>
                        <img className='w-full h-[100px] opacity-75 group-hover:rounded-t-xl group-hover:opacity-100' src={imagePath} alt="post image" />
                        </Link>

                        <div className='p-2'>
                        <h3 className='font-bold'>{title}</h3>
                        <div className='flex flex-row justify-between items-center'>
                            <Link href={userHref} className='font-bold text-sm'>{username}</Link>
                            <p className='text-xs font-semibold'>{created_at}</p>
                        </div>
                        <p className='text-xs'>{description}</p>
                        <div className='flex flex-row gap-3 mt-3'>
                            {
                                postTags?.map((tag,i) => (
                                    <Link href={`/post-tag/${tagId}`} className={`${darkMode ?  "bg-lightText text-darkText" : "bg-darkText text-lightBg"} px-1 rounded text-xs`}>{tag}</Link>
                                ))
                            }
                        </div>
                        </div>

                    </div>
  )
}

export default BlogCard
