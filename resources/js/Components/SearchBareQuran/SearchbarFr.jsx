import { DarkModeContext, DarkModeContextProvider } from "@/Context/DarkModeContext";
import React, { useContext, useEffect, useRef } from "react";

import { useState } from "react";




const Searchbarfr = ({ verses, ayahs, checked, quranData }) => {

    const {darkMode} = useContext(DarkModeContext);


    const [dropDoun, setDropDown] = useState();
    const [ArData, setArData] = useState([]);
    const [data, setData] = useState([]);
    const [value, setValue] = useState("");
    const [DataSource, setDataSource] = useState(verses);
    const [tableFilter, setTableFilter] = useState([]);
    // const [checking, setChecking] = useState("");
    const [isDisabled, setIsDisabled] = useState(true);
    const [place, setPlace] = useState("Choose a Langage ---- إختر اللغة");
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
      }, []);



    const onChange = (event) => {
        setValue(event.target.value);
    };

    const onSearch = (searchTerm) => {
        setValue(searchTerm);
        console.log(searchTerm);

    };

    return (
        <React.Fragment>
            <DarkModeContextProvider>
            <form
                className="z-17 "
                x-data="{dropDownOpen: false}"
            >
                <div class="relative flex flex-col justify-center">
                <div className="relative h-[45px] w-[100%] sm:h-[45px] sm:w-[100%] md:h-[45px] md:w-[100%] lg:h-[45px]  xl:h-[45px] max-w-[750px] sm:max-w-[750px] md:max-w-[750px] lg:max-w-[850px] xl:max-w-[850px] lg:w-[100%] xl:w-[100%] mx-auto">
                    <input
                            type="text"
                            className="relative z-auto bg-yellow-500 sm:bg-blue md:bg-green-500 lg:bg-red-500 xl:bg-gray-500  rounded-l-lg h-[100%] w-[100%] sm:h-[100%] sm:w-[100%] md:h-[100%] md:w-[100%] lg:h-[100%] lg:w-[100%] xl:h-[100%] xl:w-[100%] py-[15px] text-sm text-gray-900
                              rounded-r-lg border-l-gray-50 border-l-2 border
                               border-gray-300 focus:ring-blue-500 focus:border-blue-500 placeholder:text-xl placeholder:text-lightText "
                            placeholder="Chercher avec Mot ou Verset"
                            value={value}
                            onChange={onChange}
                            style={{ textAlign: "left" }}
                            ref={inputRef}
                        />
                        <span class="absolute right-[10px] top-[10px] sm:right-[10px] sm:top-[10px] md:right-[10px] md:top-[10px] lg:right-[10px] lg:top-[10px] xl:right-[10px] xl:top-[10px] flex md:items-center  lg:items-center xl:items-center md:justify-center lg:justify-center xl:justify-center text-gray-100  ">
                                <FaSearch size={28}  className='  text-gray-100  z-14 ' />
                            </span>
                    </div>

                    <div className={`${darkMode ? 'bg-darkBg text-lightText' : 'bg-lightBg text-darkText'}  absolute z-20  flex flex-col    max-h-[197px]  overflow-y-scroll rounded-lg top-[43px]    w-[90%] md:w-[100%] lg:w-[70%] transform -translate-x-1/2 left-1/2`}>
                        {verses && verses.filter(item => {
                            const searchTerm = value.toLowerCase();
                            const englishContent = item.frenshContent.toLowerCase();

                            return searchTerm && englishContent.includes(searchTerm)
                        })
                        .map((verse) => (
                            <Link href={`/quran/${verse.id}`} className={`${darkMode ? "bg-darkBg text-lightText hover:bg-lightBg hover:text-darkText" : "bg-lightBg text-darkText hover:bg-darkBg hover:text-lightText"} px-3 pt-2 border-b-gray-300 border-b-[1px] `}>{verse.frenshContent}</Link>
                        ))}
                    </div>

                    <div className="absolute z-14 top-[80px] left-1/2 -translate-x-1/2">
                    {checked === 'fr'  ? (

                        <div className="">
                        <ul  className="flex md:flex-row gap-3 md:justify-center">
                            {quranData?.surahs.map((surah,i) => (
                                <li key={i}  className={`${darkMode ? " bg-darkBg text-lightText" : 'bg-lightBg text-darkText'} border border-bg-lightBg bg- rounded-lg p-1`}><Link href={`/quran/surah/${surah.id}`}>{surah.englishNameTranslation} ({surah.numberInQuran})</Link></li>
                            ))}
                        </ul>
                       </div>

                    ) : '' }
                    </div>
                </div>


            </form>

            </DarkModeContextProvider>
        </React.Fragment>
    );
};

export default Searchbarfr;
