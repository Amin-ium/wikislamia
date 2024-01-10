import React, { useContext, useEffect } from "react";
import Alpine from "alpinejs";
import { BsGithub } from "react-icons/bs";
import { FaGlobe, FaSearch, FaTimes } from "react-icons/fa";
import { usePage, Link } from "@inertiajs/inertia-react";
import { useState } from "react";
import { DarkModeContext, DarkModeContextProvider } from "@/context/DarkModeContext";


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
                    <div className="relative flex flex-row w-full lg:w-[70%] mx-auto ">
                        <input
                            type="text"
                            className=" block rounded-l-lg p-2.5 w-[90%] md:w-[100%] mx-auto z-20 text-sm text-gray-900
                              rounded-r-lg border-l-gray-50 border-l-2 border
                               border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Chercher avec Mot ou Verset"
                            value={value}
                            onChange={onChange}
                            style={{ textAlign: "left" }}
                        />
                        {value ? (
                             <FaTimes size={24} onClick={() => setValue('')} className='text-gray-500 absolute top-[8px] right-[30px] md:right-[10px] z-40' />
                        ) : (
                            <FaSearch size={24}  className='text-gray-500 absolute top-[8px] right-[30px] md:right-[10px] z-40' />
                        )}
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

                    <div className="absolute z-19 top-[80px] left-1/2 -translate-x-1/2">
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
