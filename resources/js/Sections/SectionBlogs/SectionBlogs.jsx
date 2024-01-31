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
import Pagination from '@/Components/Pagination'
import { useScroll } from '@/Context/ScrollContext'

const SectionBlogs = ({posts, user, sectionId}) => {

    const { check, setCheck } = useSearchBarContext();
    const { darkMode } = useContext(DarkModeContext);
    const { sectionRefs } = useScroll();

console.log(check);
  return (
    <>
        <section ref={sectionRefs.section2} className={`${ darkMode ? "border-b-[1px] border-[#f1f1f125] " : "border-b-[1px] border-[#28282825]"} relative w-[100%] xl:w-[100%] mx-auto  h-auto   py-[50px]  `}>
        <SectionTitle title="Post&Blogs" des="Enjoy Reading and Posting"  />
            <div className='w-[90%] xl:w-[80%] mx-auto mt-5'>

            <img src={illustration1} alt="" className='absolute z-8 -right-[30px] top-[70px]  xl:right-[80px] xl:top-[70px]' />

                <Pagination posts={posts} user={user} />


            <img src={illustration2} alt="" className='absolute z-8 top-[550px] -left-[50px]  xl:left-0 ' />
            </div>




        </section>
    </>
  )
}

export default SectionBlogs
