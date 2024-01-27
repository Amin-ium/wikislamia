import Navbare from '@/Components/Navbare/Navbare'
import { DarkModeContext } from '@/Context/DarkModeContext'
import LayoutApp from '@/Layout/LayoutApp'
import SectionBlogs from '@/Sections/SectionBlogs/SectionBlogs'
import SectionBrands from '@/Sections/SectionBrands/SectionBrands'
import SectionFaq from '@/Sections/SectionFaq/SectionFaq'
import SectionSearchBare from '@/Sections/SectionSearchBar/SectionSearchBare'
import SectionStatistics from '@/Sections/SectionStatistics/SectionStatistics'
import SectionTestmonial from '@/Sections/SectionTestmonial/SectionTestmonial'
import React, { useContext } from 'react'

const Home = ({posts, user, quiz}) => {

console.log(quiz);
  return (
    <>


    <LayoutApp>
            <SectionSearchBare />
            <SectionBlogs posts={posts} user={user} />
            <SectionFaq quiz={quiz} />
            <SectionBrands />
            <SectionTestmonial />
            <SectionStatistics />




        </LayoutApp>

    </>
  )
}

export default Home
