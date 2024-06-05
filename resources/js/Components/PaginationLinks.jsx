import { Link } from '@inertiajs/inertia-react';
import { button } from '@material-tailwind/react';
import React, { useState } from 'react'

const PaginationLinks = ({data}) => {
    const items = 18
    const [current, setCurrent] = useState(1);
    const NbPage = Math.ceil(data.length / items)
    const startIndex = (current - 1) * items
    const endIndex = startIndex + items
    const DataPerPage = data.slice(startIndex, endIndex)
    console.log(NbPage.length);
  return (
    <div className='p-4 flex flex-col gap-5'>
        <div className='w-full grid grid-cols-3  gap-4 '>
            {
                DataPerPage.map((link,i) =>
                    <Link className=' text-darkText rounded-md shadow-lg shadow-purple-900' href={`/quran/surah/${link.id}`} key={i}>{link.englishName}</Link>
                )
            }
        </div>
        <div className='w-[80%] mx-auto flex flex-row justify-between mt-5'>
            {
                Array.from({length:NbPage},(_,i) => i +1).map((page) => {
                         return <button className={`${page === current ? 'bg-gray-300' : ''} px-2 rounded-full`}  onClick={() => setCurrent(page)}>{page}</button>
                        // console.log(page)
                    }
                )
            }
        </div>

    </div>
  )
}

export default PaginationLinks
