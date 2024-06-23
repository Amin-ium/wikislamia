import React, { useContext, useEffect, useState } from 'react';
import { Link } from '@inertiajs/inertia-react';
// import BlogsCard from './BlogsCard';
// import moment from 'moment';
import { DarkModeContext, DarkModeContextProvider } from '@/Context/DarkModeContext';
import PostCard from './PostCard/PostCard';
import moment from 'moment';
import { LuMoveRight } from 'react-icons/lu';
import { useSearchBarContext } from '@/Context/SearchBarContext';
import { SidebarContext, SidebarContextProvider } from '@/Context/SidebarContext';


export default function Pagination({ href, active, children,  items, Component, imagePath, englishName, id, key, userItem, postTags, tagId, user }) {

    const {darkMode} = useContext(DarkModeContext);
    const { check, setCheck } = useSearchBarContext();
    const { opened } = useContext(SidebarContext);
console.log(opened);


    const [data, setData] = useState([])

    const [props, setProps] = useState(null)
    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage, setItemsPerPage] = useState(9)
    const [pageNumberLimit, setPageNumberLimit] = useState(9)
    const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(9)
    const [minPageNumberLimit, setMinPageNumberLimit] = useState(0)





 useEffect(() => {
    setData(items)
},[])

const properties = [
    ` key={item.id}
                       title={item.title}
                       id={item.id}
                       description={item.description.substring(0, 70)+ ' ...'}
                       name={item.user.name}
                       tags={Object.values(item.tags).map(tag => tag).map(tg => tg.name)}
                       tagId={item.tags.map(tag => tag.id)}
                       category={item.category.name}
                       categoryId={item.category.id}
                       created_at={moment(item.created_at).fromNow()}
                       postImgSrc={item.imagePath}
                       darkMode={darkMode}
                       userSrc={item.user.imagePath}`,
 ]


const propertiess = () => {
    items.foreach((item,i) => {
    surahNumber=item.numberInQuran
    englishName=item.englishName
    translatedName=item.englishNameTranslation
    arabicName=item.arabicName
    versetsLength=item.versesNumber
})
}






  useEffect(() => {
     for (let i = 0; i < data.length; i++) {
         if(data[i].hasOwnProperty('title') ) {

             setProps(properties)
         }else if(data[i] === 'englishName') {


             setProps(propertiess)
         }

     }
  }, [])




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

        <SidebarContextProvider>

<div>

            <div className={`${
                    opened ? "w-[calc(full-240px)] mx-auto" : "w-[calc(full-40px)] mx-auto"
                }  `}>
                    <div className='w-[100%] grid grid-cols-3  gap-5 my-1 relative '>
            {data.map((item, i) => {




                     if (item.hasOwnProperty('englishName') && window.location.pathname.includes("quran")) {
                        return( <Link href={`/quran/surah/${item.id}`}><Component
                        className={` relative`}
                            surahNumber={item.numberInQuran}
                            englishName={item.englishName}
                            translatedName={item.englishNameTranslation}
                            arabicName={item.arabicName}
                            versetsLength={item.versesNumber}
                         /></Link>)
                    } else if(item.hasOwnProperty('title') && !window.location.pathname.includes("dashboard") && !window.location.pathname.includes('user')) {
                        return( <Component
                            className={` relative`}
                            last_seen={item.user.last_seen}
                            key={item.id}
                            title={item.title}
                            id={item.id}
                            href={`/blogs/${item.id}`}
                            description={item.description.substring(0, 70)+ ' ...'}
                            name={item.user.name}
                            tags={item.tags?.map(tag => tag)}
                            tagId={item.tags.map(tag => tag.id)}
                            created_at={moment(item.created_at).fromNow()}
                            postImgSrc={item.imagePath}
                            darkMode={darkMode}
                            userSrc={'/imageusers/'+item.user.imagePath}
                             />)
                    }else if(window.location.pathname.includes("dashboard")) {
                        return( <Component
                            className={` relative`}
                            key={item.id}
                            title={item.title}
                            id={item.id}
                            description={item.description.substring(0, 70)+ ' ...'}
                            tags={item.tags}
                            tagId={item.tags.map(tag => tag.id)}
                            created_at={moment(item.created_at).fromNow()}
                            postImgSrc={item.imagePath}
                            darkMode={darkMode}
                            userSrc={'/imageusers/'+imagePath}
                             />)
                    }else if(item.hasOwnProperty('title') && document.location.pathname === '/blogs') {
                        return( <Component
                            className={` relative `}
                            key={item.id}
                            title={item.title}
                            id={item.id}
                            description={item.description.substring(0, 70)+ ' ...'}
                            // name={item}
                            tags={Object.values(item.tags).map(tag => tag).map(tg => tg.name)}
                            tagId={item.tags.map(tag => tag.id)}
                            created_at={moment(item.created_at).fromNow()}
                            postImgSrc={'/imageusers/'+item.imagePath}
                            darkMode={darkMode}
                            userSrc={imagePath}
                             />)
                    }else if(item.hasOwnProperty('ar_hadith') && document.location.pathname.match('/hadeet')) {
                        return( <Component
                            className={` relative`}
                            key={item.id}
                            number_in_book={item.number_in_book}
                            ar_hadith={item.ar_hadith}
                            fr_hadith={item.fr_hadith}
                            eng_hadith={item.eng_hadith}
                            grade={item.grade}
                            hadithHref={`/hadeeth/${item.id}`}
                            check={check}

                             />)
                    }else if(item.hasOwnProperty('description') && document.location.pathname.match('/user')) {
                        return( <Component



                        title={item.title}
                        username={userItem.name}
                        postHref={`/blogs/${item.id}`}
                        userHref={`/user/${userItem?.id}`}
                        description={item.description.substring(0, 70)+ ' ...'}
                        postTags={postTags}
                        created_at={moment(item.created_at).fromNow()}
                        imagePath={"/imageusers/"+item.imagePath}
                        tagId={tagId}


                             />)
                    }

            })}
            </div>

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
        </SidebarContextProvider>
       )
    }





    return (
        <>
        {renderData(currentItems)}
        </>
    );
}
