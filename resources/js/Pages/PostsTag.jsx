import React, { useContext, useEffect, useState } from 'react'

import { Head, Link } from '@inertiajs/inertia-react';



import LayoutApp from '@/Layout/LayoutApp';
import { DarkModeContext } from '@/Context/DarkModeContext';
import { useSearchBarContext } from '@/Context/SearchBarContext';
import { dark } from '@mui/material/styles/createPalette';
import moment from 'moment';


const PostsTag = ({ postsTag}) => {

    const {darkMode} = useContext(DarkModeContext);
    const { check } = useSearchBarContext();

    const [checkLang, setCheckLang] = useState('')





  return (
      <React.Fragment>
          <Head>
              <title>Posts Tag</title>
          </Head>
          <LayoutApp>
            <div className={`${darkMode ? "bg-darkText" : "bg-lightBg"} bg-homeBg bg-cover bg-center mt-[150px] mb-[50px]`}>
            <div className='max-w-3xl mx-auto'>
                <h2 className='text-3xl text-center my-3'>Posts of Tag: <span className='font-bold '>{postsTag.tag.name}</span></h2>
            <div className='w-full grid grid-cols-4 gap-3'>
                {postsTag.tag.posts.map((post,i) => (
                    <Link href={`/blogs/${post.id}`} className='hover:rounded-xl shadow-xl shadow-purple-900 group hover:scale-105 duration-300'>
                        <img className='w-full h-[100px] opacity-75 group-hover:rounded-t-xl group-hover:opacity-100' src={"/imageusers/"+post.imagePath} alt="post image" />
                        <div className='p-2'>
                        <h3 className='font-bold'>{post.title}</h3>
                        <div className='flex flex-row justify-between items-center'>
                            <h3 className='font-bold text-sm'>{post.user.name}</h3>
                            <p className='text-xs font-semibold'>{moment(post.created_at).fromNow()}</p>
                        </div>
                        <p className='text-xs'>{post.description.substring(0, 70)+ ' ...'}</p>
                        <div className='flex flex-row gap-3 mt-3'>
                            {
                                post.tags?.map((tag,i) => (
                                    <Link href={`/post-tag/${tag.id}`} className={`${darkMode ?  "bg-lightText text-darkText" : "bg-darkText text-lightBg"} px-1 rounded text-xs`}>{tag.name}</Link>
                                ))
                            }
                        </div>
                        </div>

                    </Link>
                ))}
            </div>
            </div>


            </div>

          </LayoutApp>
      </React.Fragment>
  );
}

export default PostsTag
