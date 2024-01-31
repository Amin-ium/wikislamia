import React, { useContext, useEffect, useState } from 'react';
import { Link } from '@inertiajs/inertia-react';
// import BlogsCard from './BlogsCard';
// import moment from 'moment';
import { DarkModeContext, DarkModeContextProvider } from '@/Context/DarkModeContext';
import PostCard from './PostCard/PostCard';
import moment from 'moment';


export default function Pagination({ href, active, children,  posts }) {

    const {darkMode} = useContext(DarkModeContext);

    const [data, setData] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage, setItemsPerPage] = useState(8)
    const [pageNumberLimit, setPageNumberLimit] = useState(8)
    const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(8)
    const [minPageNumberLimit, setMinPageNumberLimit] = useState(0)



 console.log(currentPage);
 console.log(itemsPerPage);
 console.log(pageNumberLimit);
 console.log(maxPageNumberLimit);
 console.log(minPageNumberLimit);




    const pages = [];
    for (let i = 1; i <= Math.ceil(data.length/itemsPerPage); i++) {
        pages.push(i);

    }

    const handleClick = (e) => {
        setCurrentPage(Number(e.target.id))
    }

    const handleNextBtn = () => {
        setCurrentPage(currentPage + 1)
        if(currentPage + 1 > maxPageNumberLimit) {
            setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit)
            setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit)
        }
    }

    const handlePrevBtn = () => {
        setCurrentPage(currentPage - 1)
        if((currentPage - 1) % pageNumberLimit == 0) {
            setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit)
            setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit)
        }
    }

    const handleLoadMore = () => {
        setItemsPerPage(itemsPerPage + 8)

    }

    const handleLoad = () => {
        setItemsPerPage(itemsPerPage - 8)

    }

    console.log(itemsPerPage);


    const renderPageNumber =  pages.map((number) => {
        if(number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
            return (
                <li key={number} id={number} onClick={handleClick}
                className={currentPage == number && darkMode ?
                 "bg-gray-500 rounded text-darkText px-2 cursor-pointer" :
                 currentPage == number && !darkMode ?
                  "bg-gray-500 rounded text-lightText px-2 cursor-pointer" :
                  currentPage !== number && darkMode ?
                  "bg-orangeBg rounded text-lightText px-2 cursor-pointer" :
                  currentPage !== number && !darkMode ?
                  "bg-orangeBg rounded text-darkText px-2 cursor-pointer" :
                  ""}>
                    {number}
                </li>
            )
        }else{
            return null;
        }
    })



    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);




    useEffect(() => {
        setData(posts)
    },[])



    // let pageIncrementBtn = null;
    const [pageIncrementBtn, setPageIncrementBtn] = useState(null)
    const [pageDecrementBtn, setPageDecrementBtn] = useState(null)

    useEffect(() => {
        if(pages.length > maxPageNumberLimit) {
            setPageDecrementBtn(<li className='bg-gray-300 rounded text-gray-600 px-2 cursor-pointer' onClick={handleNextBtn}>&hellip;</li>)
        }


        if(pages.length > maxPageNumberLimit) {
            setPageIncrementBtn(<li className='bg-gray-300 rounded text-gray-600 px-2 cursor-pointer' onClick={handlePrevBtn}>&hellip;</li>)
        }
    },[])


    const renderData = (data) => {
    //    console.log(data.map(post => Object.values(post.tags).map(tag => tag).map(tg => tg.name)));
       return (
        <DarkModeContextProvider>
        <div className='flex flex-col relative z-9'>
            <div className='w-full grid grid-col md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 my-1 relative '>
            {data.map((post) => {
                console.log(post.user.imagePath);
                return (
                    <PostCard
                    className={`${darkMode ? "bg-darkBg" : "bg-lightBg"} relative`}
                      key={post.id}
                      title={post.title}
                      id={post.id}
                      description={post.description.substring(0, 150)}
                      name={post.user.name}
                      tags={Object.values(post.tags).map(tag => tag).map(tg => tg.name)}
                      tagId={post.tags.map(tag => tag.id)}
                      category={post.category.name}
                      categoryId={post.category.id}
                      created_at={moment(post.created_at).fromNow()}
                      postImgSrc={post.imagePath}
                      darkMode={darkMode}
                      userSrc={post.user.imagePath}
                      />
                )
            })}
            </div>
            <ul className='flex flex-row justify-center gap-3 items-center my-3'>
                <li>
                    <button onClick={handlePrevBtn} disabled={currentPage == pages[0] ? true : false} className={`${
                        indexOfLastItem === 8 && darkMode ? "text-gray-700 "  :
                        indexOfLastItem === 8 && !darkMode ? "  text-gray-300" :
                        indexOfLastItem !== 8 && darkMode ? "text-lightText "  :
                        indexOfLastItem !== 8 && !darkMode ? "  text-darkText" :
                        ""} rounded-md p-1 bold `}>Prev</button>
                </li>
                {/* {pageIncrementBtn && pageIncrementBtn} */}
                {renderPageNumber}
                {/* {pageDecrementBtn && pageDecrementBtn} */}
                <li>
                    {/* <button onClick={handleNextBtn} disabled={currentPage == pages[pages.length - 1] ? true : false} className={`${currentPage == pages[pages.length - 1]&&darkMode  ? "text-darkText " : pages[pages.length - 1]&&!darkMode ? "  text-gray-300" : ""} rounded-md p-1 `}>Next</button> */}
                    <button onClick={handleNextBtn} disabled={currentPage == pages[pages.length - 1] ? true : false} className={`${
                        currentPage == pages[pages.length - 1] && darkMode ? "text-gray-700 "  :
                        currentPage == pages[pages.length - 1] && !darkMode ? "  text-gray-300" :
                        currentPage !== pages[pages.length - 1] && darkMode ? "text-lightText "  :
                        currentPage !== pages[pages.length - 1] && !darkMode ? "  text-darkText" :
                        ""} rounded-md p-1 bold `}>Next</button>
                </li>
            </ul>
            <div className='flex justify-center gap-3'>
            <button onClick={handleLoadMore} disabled={currentPage == pages[pages.length - 1] ? true : false} className={`${
                currentPage == pages[pages.length - 1] && darkMode ?
                "bg-gray-300 text-darkText" :
                currentPage == pages[pages.length - 1] && !darkMode ?
                "bg-darkBg text-lightText":
                currentPage !== pages[pages.length - 1] && darkMode ?
                "bg-orangeBg text-darkText" :
                currentPage !== pages[pages.length - 1] && !darkMode ?
                "bg-orangeBg text-darkText":
                ""
                } rounded-md p-1 mb-3`}>Load More</button>
            <button onClick={handleLoad} disabled={indexOfLastItem === 6 ? true : false} className={`${
                indexOfLastItem === 8 && darkMode ?
                 "bg-gray-300 text-darkText" :
                 indexOfLastItem === 8 && !darkMode ?
                 "bg-darkBg text-lightText" :
                 indexOfLastItem !== 8 && darkMode ?
                 "bg-orangeBg text-darkText" :
                 indexOfLastItem !== 8 && !darkMode ?
                 "bg-orangeBg text-darkText" :
                  ""} rounded-md p-1 mb-3`}>Load Less</button>
            </div>

        </div>
        </DarkModeContextProvider>
       )
    }



    console.log(data.tags);

    return (
        <>
        {renderData(currentItems)}
        </>
    );
}
