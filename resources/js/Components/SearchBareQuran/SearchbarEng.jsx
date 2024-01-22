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
                    <div className="relative h-[45px] w-[100%] sm:h-[45px] sm:w-[100%] md:h-[45px] md:w-[100%] lg:h-[45px]  xl:h-[45px] max-w-[750px] sm:max-w-[750px] md:max-w-[750px] lg:max-w-[850px] xl:max-w-[850px] lg:w-[100%] xl:w-[100%] mx-auto">
                        <input
                            type="text"
                            className="relative z-auto bg-yellow-500 sm:bg-blue md:bg-green-500 lg:bg-red-500 xl:bg-gray-500  rounded-l-lg h-[100%] w-[100%] sm:h-[100%] sm:w-[100%] md:h-[100%] md:w-[100%] lg:h-[100%] lg:w-[100%] xl:h-[100%] xl:w-[100%] py-[15px] text-sm text-gray-900
                              rounded-r-lg border-l-gray-50 border-l-2 border
                               border-gray-300 focus:ring-blue-500 focus:border-blue-500 placeholder:text-xl placeholder:text-lightText "
                            placeholder="Search by Word or Verse"
                            // value={value}
                            // onChange={onChange}
                            // style={{ textAlign: "left" }}

                        />

                            <span class="absolute right-[10px] top-[10px] sm:right-[10px] sm:top-[10px] md:right-[10px] md:top-[10px] lg:right-[10px] lg:top-[10px] xl:right-[10px] xl:top-[10px] flex md:items-center  lg:items-center xl:items-center md:justify-center lg:justify-center xl:justify-center text-gray-100  ">
                                <FaSearch size={28}  className='  text-gray-100  z-14 ' />
                            </span>

                        {/* <FaSearch size={24}  className='  text-gray-100  z-14 right-[30px] top-[5px] sm:right-[45px] sm:top-[8px] md:right-[100px] md:top-[10px] xl:float-start   lg:top-[10px] ' /> */}
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
                        {/* <div className="absolute z-14 right-[30px] top-[5px] sm:right-[45px] sm:top-[8px] md:right-[100px] md:top-[10px] lg:right-[195px] lg:top-[10px]">
                        <FaSearch size={24}  className='  text-gray-500  ' />
                        </div> */}

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
