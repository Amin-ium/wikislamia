import React, { useContext } from 'react'
import headImg from "../../../../public/assets/publicImages/—Pngtree—ramadan illustration muslim family praying_7466838 2.svg"
import illustration1 from "../../../../public/assets/publicImages/illustarion1.svg"
import illustration2 from "../../../../public/assets/publicImages/Illustration2.svg"



import { useSearchBarContext } from '@/Context/SearchBarContext'

import { DarkModeContext } from '@/Context/DarkModeContext'

import SectionTitle from '@/Components/SectionTitle'

import Pagination from '@/Components/Pagination'
import { useScroll } from '@/Context/ScrollContext'
import PostCard from '@/Components/PostCard/PostCard'

const SectionBlogs = ({items, user, sectionId, posts, Component}) => {

    const { check, setCheck } = useSearchBarContext();
    const { darkMode } = useContext(DarkModeContext);
    const { sectionRefs } = useScroll();


    console.log(items);
  return (
    <>
        <section ref={sectionRefs.section2} className={`${ darkMode ? "border-b-[1px] border-[#f1f1f125] " : "border-b-[1px] border-[#28282825]"} relative w-[100%] xl:w-[100%] mx-auto  h-auto   py-[50px] `}>
        <SectionTitle title="Post&Blogs" des="Enjoy Reading and Posting"  />
            <div className='w-[90%] xl:w-[80%] mx-auto mt-5 relative z-8'>

            <img src={illustration1} alt="" className='absolute   right-0 top-[10px]  xl:-right-[30px] xl:-top-[50px]' />
            <img src={illustration2} alt="" className='absolute  top-[750px] -left-[70px]  xl:-left-[130px] z-5 ' />

                <Pagination Component={PostCard} items={items} user={user}  />



            </div>




        </section>
    </>
  )
}

export default SectionBlogs
