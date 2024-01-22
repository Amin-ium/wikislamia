import React, { useContext } from 'react'
import headImg from "../../../../public/assets/publicImages/—Pngtree—ramadan illustration muslim family praying_7466838 2.svg"
import illustration1 from "../../../../public/assets/publicImages/illustarion1.svg"
import illustration2 from "../../../../public/assets/publicImages/Illustration2.svg"
import user from "../../../../public/assets/publicImages/testimonialTwo.png"

import SearchbarEng from '@/Components/SearchBareQuran/SearchbarEng'
import CheckedRadio from '@/Components/CheckedRadio'
import CardsBanner from '@/Components/CardsBanner'
import { useSearchBarContext } from '@/Context/SearchBarContext'
import SearchbarAr from '@/Components/SearchBareQuran/SearchbarAr'
import Searchbarfr from '@/Components/SearchBareQuran/SearchbarFr'
import { DarkModeContext } from '@/Context/DarkModeContext'
import lightHeading from '../../../../public/assets/publicImages/gg-removebg-preview.png'
import SectionTitle from '@/Components/SectionTitle'
import PostCard from '@/Components/PostCard/PostCard'

const SectionBlogs = () => {

    const { check, setCheck } = useSearchBarContext();
    const { darkMode } = useContext(DarkModeContext);

console.log(check);
  return (
    <>
        <div className={`${ darkMode ? "border-t-2 border-[#f1f1f125] " : "border-t-2 border-[#28282825]"} relative w-[100%] xl:w-[80%] mx-auto  h-auto   pt-[50px] `}>
            <SectionTitle title="Post&Blogs" des="Enjoy Reading and Posting" />
            <img src={illustration1} alt="" className='absolute z-8 -right-[70px] top-5' />
            <div className='relative grid grid-cols-4 gap-8 mt-10 z-10'>
                <PostCard username="Admin" src={user} title="What Is Islam" />
                <PostCard username="Admin" src={user} title="What Is Islam"  />
                <PostCard username="Admin" src={user} title="What Is Islam"  />
                <PostCard username="Admin" src={user} title="What Is Islam"  />
                <PostCard username="Admin" src={user} title="What Is Islam"  />
                <PostCard username="Admin" src={user} title="What Is Islam"  />
                <PostCard username="Admin" src={user} title="What Is Islam"  />
                <PostCard username="Admin" src={user} title="What Is Islam"  />
            </div>
            <img src={illustration2} alt="" className='absolute bottom-0 -left-[120px]z-8' />



        </div>
    </>
  )
}

export default SectionBlogs
