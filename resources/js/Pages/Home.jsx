import Navbare from '@/Components/Navbare/Navbare'
import { DarkModeContext } from '@/Context/DarkModeContext'
import LayoutApp from '@/Layout/LayoutApp'
import SectionBlogs from '@/Sections/SectionBlogs/SectionBlogs'
import SectionSearchBare from '@/Sections/SectionSearchBar/SectionSearchBare'
import React, { useContext } from 'react'

const Home = () => {


  return (
    <>


    <LayoutApp>
            <SectionSearchBare />
            <SectionBlogs />


        </LayoutApp>

    </>
  )
}

export default Home
