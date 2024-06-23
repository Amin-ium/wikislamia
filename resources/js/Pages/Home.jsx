
import { DarkModeContext } from '@/Context/DarkModeContext'
import { LoadingContext } from '@/Context/LoadingContext'
import { ScrollProvider } from '@/Context/ScrollContext'
import LayoutApp from '@/Layout/LayoutApp'
import SectionBlogs from '@/Sections/SectionBlogs/SectionBlogs'
import SectionBrands from '@/Sections/SectionBrands/SectionBrands'
import SectionFaq from '@/Sections/SectionFaq/SectionFaq'
import SectionFooter from '@/Sections/SectionFooter/SectionFooter'
import SectionSearchBare from '@/Sections/SectionSearchBar/SectionSearchBare'
import SectionStatistics from '@/Sections/SectionStatistics/SectionStatistics'
import SectionTestmonial from '@/Sections/SectionTestmonial/SectionTestmonial'
import React, { useContext, useEffect, useState } from 'react'
import { useTransition } from 'react';


const Home = ({posts, user, quiz, verses, fatihah, surahs, items}) => {


    const { isLoading, setIsLoading } = useContext(LoadingContext);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            await new Promise(resolve => setTimeout(resolve, 2000)); // Simulated fetch
            setIsLoading(false);
        };

        fetchData();
    }, [setIsLoading]);



  return (
    <>
{isLoading ? (
    <div className='w-full h-screen flex justify-center items-center bg-darkText text-lightBg text-xl'>
    <p>Loading</p>
</div>
) : (
    <ScrollProvider>
    <LayoutApp >
            <SectionSearchBare sectionId={1} verses={verses} surahs={surahs} />
            <SectionBlogs sectionId={2}  items={posts} user={user} />
            <SectionFaq sectionId={3} quiz={quiz} />
            <SectionBrands sectionId={4} />
            <SectionTestmonial sectionId={5} />
            <SectionStatistics sectionId={6} />
            <SectionFooter  />




        </LayoutApp>
        </ScrollProvider>
)}


    </>
  )
}

export default Home
