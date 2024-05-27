import React, { useContext, useEffect, useState } from 'react'
import PostCard from '../PostCard/PostCard';
import Pagination from '../Pagination';
import { SidebarContext, SidebarContextProvider } from '@/Context/SidebarContext';
import { useSearchBarContext } from '@/Context/SearchBarContext';

const YourPosts = ({postsUser}) => {
    const [records, setRecords] = useState([])

    const { opened } = useContext(SidebarContext);
    const { check, setCheck } = useSearchBarContext();

    // fetch("https://muslimsalat.com/casablanca/weekly/07-01-2024.json?key=d25dde1f6cba4d8481193f76238119fe")

// console.log('111111111'+postsUser);




  return (
    <SidebarContextProvider>
    <div
                className={`${
                    opened ? "w-[calc(100%-240px)] mx-auto" : "w-[calc(100%-40px)] mx-auto"
                } ${
                    check === "ar"
                        ? " "
                        : " "
                } px-3 duration-300 flex flex-col justify-center  mb-[70px]  `}>

        <div className='max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6 mt-[70px]'>
        <Pagination className="" Component={PostCard} items={postsUser}   />
        </div>
    </div>
    </SidebarContextProvider>
  )
}

export default YourPosts
