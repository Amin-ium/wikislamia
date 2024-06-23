import Tabs from "@/Components/Tabs";
import LayoutApp from "@/Layout/LayoutApp";
import { Head, Link } from "@inertiajs/inertia-react";
import { button } from "@material-tailwind/react";
import React, { useContext, useEffect, useState } from "react";
import banner from "../../../../public/assets/publicImages/medd.png";
import SearchbarEng from "@/Components/SearchBareQuran/SearchbarEng";
import SearchbarEngHadeeth from "@/Components/searchbarHadeeths/SearchbarEngHadeeth";
import ClipPathLinks from "@/Components/ClipPathLinks";
import { useSearchBarContext } from "@/Context/SearchBarContext";
import { DarkModeContext } from "@/Context/DarkModeContext";
import img from '../../../../public/assets/publicImages/banner.png'
import Pagination from "@/Components/Pagination";
import HadithPara from "@/Components/HadithPara";

const books = ({ imam, imams }) => {
    const { check, setCheck } = useSearchBarContext();
    const { darkMode } = useContext(DarkModeContext);

    console.log(imam);

    return (
        <>
            <LayoutApp>
                <Head>

                    <title>{imam.eng_saheeh_name}</title>
                </Head>

                <div className="w-[100%] mx-auto  flex flex-col justify-center ">
                    <div className="w-[80%] mx-auto flex flex-col justify-center  ">
                        <div className="w-full flex flex-col justify-center ">
                            <div className="relative flex justify-center items-center">
                                <img src={img} className="w-[400px]  " alt="" />
                                <h2 className=" text-lightText text-3xl text-center absolute text-titleFont font-bold">{imam?.imam_english_name}</h2>
                            </div>

                            <div className="-mt-[100px] mb-5">
                                {/* <h2 className="text-center font-bold text-3xl ">
                                    {imam?.imam_english_name}
                                </h2> */}
                                {/* <h2 className="text-center text-md">
                                    [{book.imam.eng_saheeh_name}
                                    {" | "}
                                    {"Book N°: " + book.book_number}]
                                </h2> */}

                                        <div>
                                            <p className="text-center">{imam.imams_bios.eng_lineage}
                                            <Link className="mx-3 text-sm font-semibold bg-lightBg text-darkText px-1 rounded-lg ">read more</Link></p>
                                        </div>

                            </div>


                        </div>

                        <div className="w-full flex flex-row gap-3 ">
                            <div className="w-[80%] float-start flex flex-col">
                            <h3 className="text-center text-2xl text-bold mb-5 rounded-full shadow-xl shadow-purple-900 w-1/3 mx-auto py-1 border-[1px]">
                                {imam.eng_saheeh_name}
                            </h3>
                            <div className="grid grid-cols-3 gap-3 ">
                                {imam?.books.map((book, i) => (
                                    <div className={`border ${darkMode ? 'border-lightText' : 'border-darkText'} shadow-md shadow-purple-900 p-1 flex justify-center align-middle items-center `}>
                                        <div className=" text-center flex justify-center align-middle items-center">
                                            <Link
                                                className={`${darkMode ? 'text-lightText' : 'text-darkRext'} font-semibold text-center`}
                                                key={i}
                                            >
                                                {check === 'eng' ? book.book_english_name :
                                                check === 'fr' ? book.book_french_name :
                                                check === 'ar' ? book.book_arabic_name : null}
                                            </Link>

                                        </div>
                                    </div>
                                ))}
                                </div>
                                {/* <Pagination className="" Component={HadithPara} items={book?.hadeets}   /> */}
                            </div>
                            <div className="w-[20%] float-end">


                                            {/* <h2
                                                className="text-darkText text-center font-bold text-xl  py-3 mb-3  underline shadow-md shadow-purple-900 rounded-[20px] "
                                                key={book.id}
                                            >
                                                {book?.imam.eng_saheeh_name}
                                            </h2> */}




                                        {imams?.map((imam, x) => (
                                            //   <Link className='text-darkText text-center px-3 shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]' key={x}>{check === "eng" ? book.book_english_name : check === "fr" ? book.book_french_name : check === "ar" ? book.book_arabic_name : null}</Link>
                                            <ClipPathLinks
                                                href={`/imams/${imam.id}`}
                                                value={
                                                    check === "eng"
                                                        ? imam.imam_english_name
                                                        : check === "fr"
                                                        ? imam.imam_french_name
                                                        : check === "ar"
                                                        ? imam.imam_arabic_name
                                                        : null
                                                }
                                            />
                                        ))}

                            </div>
                        </div>
                    </div>
                </div>
            </LayoutApp>
        </>
    );
};

export default books;

