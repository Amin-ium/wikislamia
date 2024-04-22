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

const books = ({ book, books }) => {
    const { check, setCheck } = useSearchBarContext();
    const { darkMode } = useContext(DarkModeContext);

    console.log(books);

    return (
        <>
            <LayoutApp>
                <Head>
                    <title>Book Page</title>
                </Head>

                <div className="w-[100%] mx-auto  flex flex-col justify-center ">
                    <div className="w-[80%] mx-auto flex flex-col justify-center ">
                        <div className="w-full flex flex-col justify-center">
                            <div className="relative flex justify-center items-center">
                                <img src={img} className="w-[400px]  " alt="" />
                                <h2 className=" text-lightText text-3xl text-center absolute text-titleFont font-bold">{book.imam.eng_saheeh_name}</h2>
                            </div>

                            <h2 className="text-center font-bold text-3xl -mt-[100px]">
                                {book?.book_english_name}
                            </h2>
                            <h2 className="text-center text-xl">
                                [{book.imam.eng_saheeh_name}
                                {" | "}
                                {"Book N°: " + book.book_number}]
                            </h2>
                        </div>

                        <div className="w-full flex flex-row gap-3 ">
                            <div className="w-[80%] float-start">
                                {book?.hadeets.map((hadeet, i) => (
                                    <div className="border shadow-xl shadow-purple-900 mb-[40px] p-4">
                                        <h3 key={i}>
                                            {"Hadeet N°: " +
                                                hadeet.hadeether_number}
                                        </h3>
                                        <div className="flex flex-col">
                                            <p
                                                className="text-grayBg font-semibold"
                                                key={i}
                                            >
                                                {hadeet.english_sanad}
                                            </p>
                                            <p
                                                className="text-darkText font-extrabold"
                                                key={i}
                                            >
                                                {hadeet.english_content}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="w-[20%] float-end">


                                            <h2
                                                className="text-darkText text-center font-bold text-xl  py-3 mb-3  underline shadow-md shadow-purple-900 rounded-[20px] "
                                                key={book.id}
                                            >
                                                {book?.imam.eng_saheeh_name}
                                            </h2>




                                        {books.map((book, x) => (
                                            //   <Link className='text-darkText text-center px-3 shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]' key={x}>{check === "eng" ? book.book_english_name : check === "fr" ? book.book_french_name : check === "ar" ? book.book_arabic_name : null}</Link>
                                            <ClipPathLinks
                                                href={`/hadeeth/${book.id}`}
                                                value={
                                                    check === "eng"
                                                        ? book.book_english_name
                                                        : check === "fr"
                                                        ? book.book_french_name
                                                        : check === "ar"
                                                        ? book.book_arabic_name
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
