import React, { useContext, useEffect, useRef } from "react";

// import { BsGithub } from "react-icons/bs";
import { FaTimes, FaSearch } from "react-icons/fa";
import { usePage, Link } from "@inertiajs/inertia-react";
import { useState } from "react";

import { useSearchBarContext } from "@/Context/SearchBarContext";
import { Inertia } from "@inertiajs/inertia";
import { DarkModeContext } from "@/Context/DarkModeContext";
// import { DarkModeContext, DarkModeContextProvider } from "@/context/DarkModeContext";

const SearchbarEng = ({ verses, surahs }) => {
    const { darkMode } = useContext(DarkModeContext);
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
    const [opened, setOpened] = useState(true);
    const inputRef = useRef(null);

    const [isDropdownVisible, setDropdownVisible] = useState(false);

    useEffect(() => {
        // Add event listener to detect clicks outside the input
        const handleOutsideClick = (event) => {
            if (inputRef.current && !inputRef.current.contains(event.target)) {
                setDropdownVisible(false);
            }
        };

        document.addEventListener("click", handleOutsideClick);

        return () => {
            document.removeEventListener("click", handleOutsideClick);
        };
    }, []);

    const handleInputClick = () => {
        setDropdownVisible(true);
    };

    const onChange = (event) => {
        if (event.target.value === "") {
            setValue("");
        } else {
            setValue(event.target.value);
        }
    };

    const onSearch = async (searchTerm) => {
        if (value === "") {
            console.log("empty");
        } else {
            setValue(searchTerm);

            // Update the state with the current search term

            // Use the current value of the input for filtering
            const filteredData = verses.filter((item) => {
                if (check === "eng") {
                    const lowerCaseSearchTerm = searchTerm.toLowerCase();
                    const englishContent = item.englishContent.toLowerCase();
                    return (
                        lowerCaseSearchTerm &&
                        englishContent.includes(lowerCaseSearchTerm)
                    );
                } else if (check === "ar") {
                    const searchTerm = value.replace(
                        /([^\u0621-\u063A\u0641-\u064A\u0660-\u0669a-zA-Z 0-9])/g,
                        ""
                    );
                    const content = item.content.replace(
                        /([^\u0621-\u063A\u0641-\u064A\u0660-\u0669a-zA-Z 0-9])/g,
                        ""
                    );

                    const searchItem = content.replace(
                        /([^\u0621-\u063A\u0641-\u064A\u0660-\u0669a-zA-Z 0-9])/g,
                        ""
                    );

                    return (
                        searchTerm &&
                        searchItem.includes(searchTerm) &&
                        searchItem !== searchTerm
                    );
                } else if (check === "fr") {
                    const lowerCaseSearchTerm = searchTerm.toLowerCase();
                    const englishContent = item.frenshContent.toLowerCase();
                    return (
                        lowerCaseSearchTerm &&
                        englishContent.includes(lowerCaseSearchTerm)
                    );
                }
            });

            // Update the state with the filtered data
            setSearchData(filteredData);

            try {
                // Use Inertia.post to send the search data to the server
                const response = await Inertia.post(
                    route("quran.searchResults"),
                    {
                        searchData: searchTerm,
                    }
                );
                // Handle the response if needed
                console.log(response);
            } catch (error) {
                // Handle any errors that occur during the request
                console.error("Error:", error);
            }
        }
    };

    const handleClick = () => {
        // 👇️ clear input value
        setValue("");
    };

    console.log(verses);
    return (
        <React.Fragment>
            {/* <DarkModeContextProvider> */}
            <form
                autocomplete="off"
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
                            ref={inputRef}
                            autocomplete="false"
                            onClick={handleInputClick}
                            className={`relative z-13 bg-[#EBE4F3] shadow-2xl shadow-purple-950 rounded-l-lg h-[30px] w-[100%] sm:h-[100%] sm:w-[100%] md:h-[100%] md:w-[100%] lg:h-[100%] lg:w-[100%] xl:h-[100%] xl:w-[100%] py-[15px] text-sm text-gray-900
                              rounded-r-lg  border-l-2  focus:outline-purple-700 placeholder:text-sm xl:placeholder:text-lg placeholder:text-darkText  px-2  `}
                            placeholder={
                                check === "eng"
                                    ? "Search by Word or Verse"
                                    : check === "ar"
                                    ? "إبحث عن كلمة او آية"
                                    : check === "fr"
                                    ? "Chercher par mot ou verset"
                                    : null
                            }
                            value={value}
                            onChange={onChange}
                            style={{
                                textAlign:
                                    check === "ar"
                                        ? "right"
                                        : check === "eng" || check === "fr"
                                        ? "left"
                                        : null,
                            }}
                        />

                        <button
                            type="submit"
                            class={`w-[24px] ${
                                check === "ar"
                                    ? "right-[10px] top-[10px] sm:left-[10px] sm:top-[10px] md:left-[10px] md:top-[10px] lg:left-[10px] lg:top-[10px] xl:left-[10px] xl:top-[10px]"
                                    : check === "eng" || check === "fr"
                                    ? "right-[10px] top-[10px] sm:right-[10px] sm:top-[10px] md:right-[10px] md:top-[10px] lg:right-[10px] lg:top-[10px] xl:right-[10px] xl:top-[10px]"
                                    : null
                            } absolute  flex  text-gray-900  `}
                        >
                            <FaSearch
                                size={24}
                                className=" w-[24px]  text-gray-900 z-20  "
                            />
                        </button>

                        <div
                            className={`absolute     flex flex-col    max-h-[200px]  overflow-y-scroll rounded  top-[33px] sm:top-[44px]   w-[100%] md:w-[100%]  lg:w-[100%] xl:w-[100%] `}
                        >
                            {check === "eng" &&
                                verses &&
                                verses
                                    .filter((item) => {
                                        const searchTerm = value.toLowerCase();
                                        const lowerCaseSearchTerm =
                                            searchTerm.toLowerCase();
                                        const searchContent =
                                            item.englishContent.toLowerCase();

                                        return (
                                            lowerCaseSearchTerm &&
                                            searchContent.includes(
                                                lowerCaseSearchTerm
                                            )
                                        );
                                    })
                                    .map(
                                        (verse, i) =>
                                            isDropdownVisible && (
                                                <Link
                                                    key={i}
                                                    href={`/quran/${verse.id}`}
                                                    className={`${
                                                        opened
                                                            ? "block"
                                                            : "hidden"
                                                    } ${
                                                        darkMode
                                                            ? "bg-grayBg text-lightText hover:bg-lightBg hover:text-darkText"
                                                            : "bg-lightBg text-darkText hover:bg-darkText hover:text-lightText"
                                                    } px-3 pt-2 border-b-gray-300 border-b-[1px] `}
                                                >
                                                    {verse.englishContent} ...
                                                </Link>
                                            )
                                    )

                            }

                            {check === "ar" &&
                                verses &&
                                verses
                                .filter((item) => {
                                    const searchTerm = value.toLowerCase();
                                    const lowerCaseSearchTerm =
                                        searchTerm.toLowerCase();
                                    const searchContent =
                                        item.content.toLowerCase();

                                    return (
                                        lowerCaseSearchTerm &&
                                        searchContent.includes(
                                            lowerCaseSearchTerm
                                        )
                                    );
                                    })
                                    .map(
                                        (verse, i) =>
                                            isDropdownVisible && (
                                                <Link
                                                    key={i}
                                                    href={`/quran/${verse.id}`}
                                                    className={`${
                                                        darkMode
                                                            ? "bg-grayBg text-lightText hover:bg-lightBg hover:text-darkText"
                                                            : "bg-lightBg text-darkText hover:bg-darkText hover:text-lightText"
                                                    } px-3 pt-2 border-b-gray-300 border-b-[1px] `}
                                                >
                                                    {verse.content} ...
                                                </Link>
                                            )
                                    )}

                            {check === "fr" &&
                                verses &&
                                verses
                                    .filter((item) => {
                                        const searchTerm = value.toLowerCase();
                                        const lowerCaseSearchTerm =
                                            searchTerm.toLowerCase();
                                        const searchContent =
                                            item.frenshContent.toLowerCase();
                                        console.log(
                                            lowerCaseSearchTerm &&
                                                searchContent.includes(
                                                    lowerCaseSearchTerm
                                                )
                                        );
                                        return (
                                            lowerCaseSearchTerm &&
                                            searchContent.includes(
                                                lowerCaseSearchTerm
                                            )
                                        );
                                    })
                                    .map(
                                        (verse, i) =>
                                            isDropdownVisible && (
                                                <Link
                                                    key={i}
                                                    href={`/quran/${verse.id}`}
                                                    className={`${
                                                        darkMode
                                                            ? "bg-grayBg text-lightText hover:bg-lightBg hover:text-darkText"
                                                            : "bg-lightBg text-darkText hover:bg-darkText hover:text-lightText"
                                                    } px-3 pt-2 border-b-gray-300 border-b-[1px] `}
                                                >
                                                    {verse.frenshContent} ...
                                                </Link>
                                            )
                                    )}
                        </div>
                    </div>
                </div>
            </form>
        </React.Fragment>
    );
};

export default SearchbarEng;
