import Navbare from '@/Components/Navbare/Navbare'
import { DarkModeContext } from '@/Context/DarkModeContext'
import LayoutApp from '@/Layout/LayoutApp'
import SectionBlogs from '@/Sections/SectionBlogs/SectionBlogs'
import SectionSearchBare from '@/Sections/SectionSearchBar/SectionSearchBare'
import React, { useContext } from 'react'

const Home = ({posts, user}) => {


  return (
    <>


    <LayoutApp>
            <SectionSearchBare />
            <SectionBlogs posts={posts} user={user} />


        </LayoutApp>

    </>
  )
}

export default Home
