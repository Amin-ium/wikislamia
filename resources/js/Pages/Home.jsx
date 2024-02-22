import Navbare from '@/Components/Navbare/Navbare'
import { DarkModeContext } from '@/Context/DarkModeContext'
import { ScrollProvider } from '@/Context/ScrollContext'
import LayoutApp from '@/Layout/LayoutApp'
import SectionBlogs from '@/Sections/SectionBlogs/SectionBlogs'
import SectionBrands from '@/Sections/SectionBrands/SectionBrands'
import SectionFaq from '@/Sections/SectionFaq/SectionFaq'
import SectionFooter from '@/Sections/SectionFooter/SectionFooter'
import SectionSearchBare from '@/Sections/SectionSearchBar/SectionSearchBare'
import SectionStatistics from '@/Sections/SectionStatistics/SectionStatistics'
import SectionTestmonial from '@/Sections/SectionTestmonial/SectionTestmonial'
import React, { useContext } from 'react'

const Home = ({posts, user, quiz, verses, resultPrayer, fatihah, surahs}) => {

console.log(fatihah );
  return (
    <>

<ScrollProvider>
    <LayoutApp>
            <SectionSearchBare sectionId={1} verses={verses} resultPrayer={resultPrayer} surahs={surahs} />
            <SectionBlogs sectionId={2} posts={posts} user={user} />
            <SectionFaq sectionId={3} quiz={quiz} />
            <SectionBrands sectionId={4} />
            <SectionTestmonial sectionId={5} />
            <SectionStatistics sectionId={6} />
            <SectionFooter  />




        </LayoutApp>
        </ScrollProvider>

    </>
  )
}

export default Home
