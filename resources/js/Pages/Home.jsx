import Navbare from '@/Components/Navbare/Navbare'
import { DarkModeContext } from '@/Context/DarkModeContext'
import LayoutApp from '@/Layout/LayoutApp'
import SectionSearchBare from '@/Sections/SectionSearchBar/SectionSearchBare'
import React, { useContext } from 'react'

const Home = () => {


  return (
    <>


    <LayoutApp>
            <SectionSearchBare />


        </LayoutApp>

    </>
  )
}

export default Home
