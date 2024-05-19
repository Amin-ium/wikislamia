import React, { useEffect, useState } from 'react'
import PostCard from '../PostCard/PostCard';
import Pagination from '../Pagination';

const YourPosts = ({postsUser}) => {
    const [records, setRecords] = useState([])

    // fetch("https://muslimsalat.com/casablanca/weekly/07-01-2024.json?key=d25dde1f6cba4d8481193f76238119fe")

// console.log('111111111'+postsUser);




  return (
    <div className='text-center text-lightText mt-[70px]'>
        your posts
        <div className='mt-[70px]'>
        <Pagination className="" Component={PostCard} items={postsUser}   />
        </div>
    </div>
  )
}

export default YourPosts
