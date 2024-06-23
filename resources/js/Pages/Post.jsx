import React, { useContext, useEffect, useState } from 'react'

import { Head, Link } from '@inertiajs/inertia-react';



import LayoutApp from '@/Layout/LayoutApp';
import { DarkModeContext } from '@/Context/DarkModeContext';
import { useSearchBarContext } from '@/Context/SearchBarContext';
import { dark } from '@mui/material/styles/createPalette';
import moment from 'moment';


const Post = ({mypost, posts}) => {

    const {darkMode} = useContext(DarkModeContext);
    const { check } = useSearchBarContext();

    const [checkLang, setCheckLang] = useState('')



console.log(posts);

  return (
      <React.Fragment>
          <Head>
              <title>{mypost.title}</title>
          </Head>
          <LayoutApp>
            <div className={`${darkMode ? "bg-darkText" : "bg-lightBg"} bg-homeBg bg-cover bg-center mb-[50px]`}>
            <div class="max-w-screen-xl mx-auto p-5 sm:p-8 md:p-12 relativ mt-[100px]">
    <div class="bg-cover h-64 text-center overflow-hidden bg-custom-image z-10 "
        style={{ backgroundImage: `url("/imageusers/${mypost.imagePath}")` }}>
    </div>
    <div class={`max-w-3xl mx-auto -mt-[50px] ${darkMode ? "bg-darkText text-lightText" : "bg-lightBg text-darkText"} rounded-xl relative z-11  `}>
        <div
            class=" p-10 shadow-xl shadow-purple-900  rounded-xl flex flex-col justify-between leading-normal relative z-11  ">

            <div class="">

                <h1 href="#" class=" font-bold text-3xl mb-2">{mypost.title}</h1>
                <p class=" text-xs mt-2">Written By:
                    <Link href="#"
                        class=" font-medium hover:text-gray-900 transition duration-500 ease-in-out">
                        <span className='mx-1'>{mypost.user.name}</span>
                    </Link>
                </p>





                <p class="text-base leading-8 my-5">{mypost.description}</p>

                {/* <blockquote class="border-l-4 text-base italic leading-8 my-5 p-5 text-indigo-600">Lorem Ipsum is simply
                    dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                    dummy text ever since the 1500s</blockquote> */}
                <div className='flex flex-row gap-3'>
                {mypost.tags?.map((tag,i) => (
                    <Link href={`/post-tag/${tag.id}`}
                    class={`${darkMode ?  "bg-lightText text-darkText" : "bg-darkText text-lightBg"} p-1 rounded text-xs font-medium hover:text-gray-900 transition duration-500 ease-in-out`}>
                    {tag.name}
                </Link>
                ))}
                </div>




            </div>

        </div>
    </div>
            </div>
            <div className='max-w-3xl mx-auto'>
                <h2 className='text-3xl font-bold text-center my-3'>Last Posts</h2>
            <div className='w-full grid grid-cols-4 gap-3'>
                {posts.map((post,i) => (
                    <div  className='hover:rounded-xl shadow-xl shadow-purple-900 group hover:scale-105 duration-300'>
                        <Link href={`/blogs/${post.id}`}>
                        <img className='w-full h-[100px] opacity-75 group-hover:rounded-t-xl group-hover:opacity-100' src={"/imageusers/"+post.imagePath} alt="post image" />
                        </Link>

                        <div className='p-2'>
                        <h3 className='font-bold'>{post.title}</h3>
                        <div className='flex flex-row justify-between items-center'>
                            <Link href={`/user/${post.user.id}`} className='font-bold text-sm'>{post.user.name}</Link>
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

                    </div>
                ))}
            </div>
            </div>


            </div>

          </LayoutApp>
      </React.Fragment>
  );
}

export default Post
