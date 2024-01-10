import React, { useContext, useEffect } from "react";

import { BsGithub } from "react-icons/bs";
import { FaTimes, FaSearch } from "react-icons/fa";
import { usePage, Link } from "@inertiajs/inertia-react";
import { useState } from "react";
// import { DarkModeContext, DarkModeContextProvider } from "@/context/DarkModeContext";



const SearchbarEng = () => {


//     const {darkMode} = useContext(DarkModeContext);


//     const [searchData, setSearchData] = useState([]);
//     const [ArData, setArData] = useState([]);
//     const [data, setData] = useState([]);
//     const [value, setValue] = useState("");
//     const [DataSource, setDataSource] = useState(verses);
//     const [tableFilter, setTableFilter] = useState([]);
//     // const [checking, setChecking] = useState("");
//     const [isNotDisabled, setIsNotDisabled] = useState(false);
//     const [place, setPlace] = useState("Choose a Langage ---- إختر اللغة");



//     const onChange = (event) => {
//         setValue(event.target.value);
//     };

//     const onSearch = (searchTerm) => {
//         setValue(searchTerm);
//         const filteredData = verses.filter((item) => {
//             const searchTerm = value.toLowerCase();
//             const englishContent = item.englishContent.toLowerCase();
//             return searchTerm && englishContent.includes(searchTerm);
//           });
//           setSearchData(filteredData);




//         };

//         const handleClick = () => {
//             // 👇️ clear input value
//             setValue('');
//           };






// console.log(searchData);
    return (
        <React.Fragment>
            {/* <DarkModeContextProvider> */}
            <form
                className="  "
                x-data="{dropDownOpen: false}"
            >
                <div class="relative  flex flex-col justify-center">
                    <div className="   flex flex-row w-full md:w-[70%] lg:w-[70%] justify-center sm:justify-center md:justify-center lg:justify-center mx-auto ">
                        <input
                            type="text"
                            className="absolute z-auto sm:bg-blue md:bg-green-500 lg:bg-red-500 xl:bg-gray-500  rounded-l-lg md:p-2.5 w-[90%] md:w-[80%] lg:w-[70%] md:justify-center text-sm text-gray-900
                              rounded-r-lg border-l-gray-50 border-l-2 border
                               border-gray-300 focus:ring-blue-500 focus:border-blue-500  "
                            placeholder="Search by Word or Verse"
                            // value={value}
                            // onChange={onChange}
                            // style={{ textAlign: "left" }}

                        />
                        {/* <button
                            className=" p-2.5 text-sm font-medium bg-primary text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                            type="button"
                            id="button-addon2"
                            onClick={() => onSearch(value)}
                        >
                            Search
                        </button> */}
                        {/* {value ? (
                             <FaTimes size={24} onClick={() => setValue('')} className='text-gray-500 absolute top-[8px] right-[30px] md:right-[10px] z-40' />
                        ) : ( */}
                            {/* <FaSearch size={24}  className='text-gray-500 relative top-[8px] right-[130px] md:right-[100px]  ' /> */}
                        {/* )} */}
                        <div className="absolute z-14 right-[30px] top-[5px] sm:right-[45px] sm:top-[8px] md:right-[100px] md:top-[10px] lg:right-[195px] lg:top-[10px]">
                        <FaSearch size={24}  className='  text-gray-500  ' />
                        </div>

                    </div>


                    <div className={`     flex flex-col   max-h-[200px]  overflow-y-scroll rounded top-[43px]  w-[90%] md:w-[100%] lg:w-[70%] `}>
                        {/* {verses && verses.filter(item => {
                            const searchTerm = value.toLowerCase();
                            const englishContent = item.englishContent.toLowerCase();

                            return searchTerm && englishContent.includes(searchTerm)
                        })
                        .map((verse, i) => (
                            <Link href={`/quran/${verse.id}`} className={`${darkMode ? "bg-darkBg text-lightText hover:bg-lightBg hover:text-darkText" : "bg-lightBg text-darkText hover:bg-darkBg hover:text-lightText"} px-3 pt-2 border-b-gray-300 border-b-[1px] `}>{verse.englishContent.substr(0, 33)} ...</Link>
                        ))} */}
                    </div>

                    <div className="    top-[80px] left-1/2 -translate-x-1/2">
                    {/* {checked === 'eng'  ? ( */}

                        <div className="  flex justify-center md:flex-row gap-3 md:justify-center">
{/*
                            {quranData?.surahs.map((surah,i) => (
                                <Link key={i} className={`${darkMode ? "bg-darkBg text-lightText" : "bg-lightBg text-darkText"}  text-sm  border border-bg-lightBg `}  href={`/quran/surah/${surah.id}`}>{surah.englishNameTranslation}</Link>
                            ))} */}

                       </div>


                    </div>
                </div>


            </form>

            {/* </DarkModeContextProvider> */}
        </React.Fragment>
    );
};

export default SearchbarEng;
