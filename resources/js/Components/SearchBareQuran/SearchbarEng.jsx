import React, { useContext, useEffect, useRef } from "react";

import { BsGithub } from "react-icons/bs";
import { FaTimes, FaSearch } from "react-icons/fa";
import { usePage, Link } from "@inertiajs/inertia-react";
import { useState } from "react";
import { DarkModeContext } from "@/Context/DarkModeContext";
import { useSearchBarContext } from "@/Context/SearchBarContext";
import { Inertia } from "@inertiajs/inertia";
// import { DarkModeContext, DarkModeContextProvider } from "@/context/DarkModeContext";



const SearchbarEng = ({verses}) => {

    console.log(verses);
    const {darkMode} = useContext(DarkModeContext);
    const { check, setCheck } = useSearchBarContext();


    const [searchData, setSearchData] = useState([]);
    const [ArData, setArData] = useState([]);
    const [data, setData] = useState([]);
    const [value, setValue] = useState("");
    const [DataSource, setDataSource] = useState(verses);
    const [tableFilter, setTableFilter] = useState([]);
    // const [checking, setChecking] = useState("");
    const [isNotDisabled, setIsNotDisabled] = useState(false);
    const [place, setPlace] = useState("Choose a Langage ---- إختر اللغة");
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
      }, []);



    const onChange = (event) => {
        setValue(event.target.value);
    };

    const onSearch = async (searchTerm) => {
        // Update the state with the current search term
        setValue(searchTerm);

        // Use the current value of the input for filtering
        const filteredData = verses.filter((item) => {
          const lowerCaseSearchTerm = searchTerm.toLowerCase();
          const englishContent = item.englishContent.toLowerCase();
          return lowerCaseSearchTerm && englishContent.includes(lowerCaseSearchTerm);
        });

        // Update the state with the filtered data
        setSearchData(filteredData);

        try {
          // Use Inertia.post to send the search data to the server
          const response = await Inertia.post(route('quran.searchResults'), { searchData: searchTerm });
          // Handle the response if needed
          console.log(response);
        } catch (error) {
          // Handle any errors that occur during the request
          console.error('Error:', error);
        }
      };

        const handleClick = () => {
            // 👇️ clear input value
            setValue('');
          };






console.log(searchData);
    return (
        <React.Fragment>
            {/* <DarkModeContextProvider> */}
            <form
            onSubmit={(e) => {
                e.preventDefault(); // Prevent the default form submission
                onSearch(value); // Call the onSearch function with the current search term
              }}
                className="  "
                x-data="{dropDownOpen: false}"
            >
                <div class="relative  flex flex-col justify-center">
                    <div className="relative h-[45px] w-[100%] sm:h-[45px] sm:w-[100%] md:h-[45px] md:w-[100%] lg:h-[45px]  xl:h-[45px] max-w-[750px] sm:max-w-[750px] md:max-w-[750px] lg:max-w-[850px] xl:max-w-[850px] lg:w-[100%] xl:w-[100%] mx-auto">
                        <input
                            name="search"
                            type="text"
                            className="relative z-auto bg-yellow-500 sm:bg-blue md:bg-green-500 lg:bg-red-500 xl:bg-gray-500  rounded-l-lg h-[30px] w-[100%] sm:h-[100%] sm:w-[100%] md:h-[100%] md:w-[100%] lg:h-[100%] lg:w-[100%] xl:h-[100%] xl:w-[100%] py-[15px] text-sm text-gray-900
                              rounded-r-lg border-l-gray-50 border-l-2 border
                               border-gray-300 focus:ring-blue-500 focus:border-blue-500 placeholder:text-sm xl:placeholder:text-xl placeholder:text-lightText "
                            placeholder="Search by Word or Verse"
                            value={value}
                            onChange={onChange}
                            style={{ textAlign: "left" }}
                            ref={inputRef}

                        />

                            <button type="submit"  class="absolute right-[10px] top-[5px] sm:right-[5px] sm:top-[10px] md:right-[10px] md:top-[10px] lg:right-[10px] lg:top-[10px] xl:right-[10px] xl:top-[10px] flex md:items-center  lg:items-center xl:items-center md:justify-center lg:justify-center xl:justify-center text-gray-100  ">
                                <FaSearch size={24}   className='  text-gray-100  z-14 ' />
                            </button>


<div className={`absolute     flex flex-col    max-h-[200px]  overflow-y-scroll rounded  top-[33px] sm:top-[44px]   w-[100%] md:w-[100%]  lg:w-[100%] xl:w-[100%] `}>
                        {verses && verses.filter(item => {
                            const searchTerm = value.toLowerCase();
                            const englishContent = item.englishContent.toLowerCase();

                            return searchTerm && englishContent.includes(searchTerm)
                        })
                        .map((verse, i) => (
                            <Link href={`/quran/${verse.id}`} className={`${darkMode ? "bg-grayBg text-lightText hover:bg-lightBg hover:text-darkText" : "bg-lightBg text-darkText hover:bg-darkBg hover:text-lightText"} px-3 pt-2 border-b-gray-300 border-b-[1px] `}>{verse.englishContent.substr(0, 33)} ...</Link>
                        ))}
                    </div>

                    </div>







                </div>


            </form>

            {/* </DarkModeContextProvider> */}
        </React.Fragment>
    );
};

export default SearchbarEng;
