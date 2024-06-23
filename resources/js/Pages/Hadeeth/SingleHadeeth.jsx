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

const SingleHadeeth = ({ hadeeth, nextHadeeth, previousHadeeth }) => {
    const { check, setCheck } = useSearchBarContext();
    const { darkMode } = useContext(DarkModeContext);

    console.log(hadeeth);

    return (
        <>
            <LayoutApp>
                <Head>
                    <title>{hadeeth.books.book_english_name+'|'+' Hadeeth N°: '+hadeeth.number_in_book}</title>
                </Head>

                <div className="w-[100%] bg-lightBg  mx-auto  flex flex-col justify-center my-[150px] ">
                    <div className="w-[80%] mx-auto flex flex-row gap-5">
                    <div className="w-[70%] float-left flex flex-col justify-center shadow-xl shadow-purple-900 p-4">

                        <div className="flex flex-col justify-center text-center gap-3">
                            <h2 className="text-center text-3xl text-semibold">{hadeeth.books.book_english_name}</h2>
                            <h3 className="text-center text-xl ">[Hadeeth N°: {hadeeth.number_in_book} | Book: {hadeeth.books.book_number}]</h3>
                            <p className="font-semibold">{hadeeth.eng_hadith}</p>
                            <div className="flex flex-row justify-center items-center gap-3 text-sm font-semibold">
                                <h3>[{hadeeth.imams.eng_saheeh_name}]</h3>
                                <h3>[Grade: {hadeeth.grade}]</h3>
                            </div>
                        </div>


                       <div className="flex flex-row items-center justify-around">

                            <Link className="px-1 w-20 text-center text-sm text-lightText bg-darkText rounded-md" href={`/hadeeth/${previousHadeeth.id}`}>Previous</Link>
                            <Link className="px-1 w-20 text-center text-sm text-lightText bg-darkText rounded-md" href={`/hadeeth/${nextHadeeth.id}`}>Next</Link>
                       </div>
                    </div>
                    <div className="w-[30%] h-full float-right shadow-xl shadow-purple-900 ">
                        <h3 className="text-2xl font-semibold text-center mt-2">{hadeeth.imams.imam_english_name}</h3>
                        <div className="p-4">
                            <h4 className="text-lg font-semibold">{hadeeth.imams.saheeh_name}</h4>
                            <div className="">
                                <p className="text-md ">{hadeeth.imams.eng_saheeh_infos.substr(1,250)}...</p>
                                <Link href='/hadeeth' className="float-right bg-darkText text-lightText px-1 text-sm rounded-md mb-3">read more</Link>
                            </div>

                        </div>

                    </div>
                    </div>

                </div>
            </LayoutApp>
        </>
    );
};

export default SingleHadeeth;

