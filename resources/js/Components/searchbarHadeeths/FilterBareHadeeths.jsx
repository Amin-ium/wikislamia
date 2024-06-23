import React, { useContext, useEffect } from "react";
import Alpine from "alpinejs";
import { BsGithub } from "react-icons/bs";
import { FaGlobe, FaSearch, FaTimes } from "react-icons/fa";
import { usePage, Link } from "@inertiajs/inertia-react";
import { useState } from "react";

import { useSearchBarContext } from "@/Context/SearchBarContext";
import { DarkModeContext } from "@/Context/DarkModeContext";

const FilterBareHadeeths = ({ hadeetData }) => {

    const {darkMode} = useContext(DarkModeContext)
    const { check, setCheck } = useSearchBarContext();



    const [dropDoun, setDropDown] = useState();
    const [ArData, setArData] = useState([]);
    const [data, setData] = useState([]);
    const [value, setValue] = useState("");
    const [valueSaheeh, setValueSaheeh] = useState("");
    const [valueBook, setValueBook] = useState("");
    const [DataSource, setDataSource] = useState(hadeetData);
    const [tableFilter, setTableFilter] = useState([]);
    const [checking, setChecking] = useState("");
    const [saheehDropdown, setSaheehDropdown] = useState(false);
    const [bookDropdown, setBookDropdown] = useState(false);
    const [imamDropdown, setImamDropdown] = useState(false);
    const [isDisabled, setIsDisabled] = useState(true);
    const [place, setPlace] = useState("Choose a Langage ---- إختر اللغة");




    const onChange = (event) => {
        setValue(event.target.value);
        setChecking('eng')

    };

    const onChangeSaheeh = (event) => {
        setValueSaheeh(event.target.value);
        setChecking('eng')
    };

    const onChangeBook = (event) => {
        setValueBook(event.target.value);
        setChecking('eng')
    };

    const onSearch = (searchTerm) => {
        setValue(searchTerm);
        setChecking('eng')


    };

    // useEffect(() => {

        //     if(value) {
        //         setValueSaheeh('');
        //         setValueBook('');
        //     }else if(valueSaheeh) {
        //         setValue('');
        //         setValueBook('');
        //     }else if(valueBook) {
        //         setValueSaheeh('');
        //         setValue('');
        //     }
        // }, [value, valueSaheeh, valueBook]);

    return (
        <React.Fragment>
            <form
                className="z-17 w-full my-5 "
                x-data="{dropDownOpen: false}"
            >

                <div className={`w-[80%] mx-auto flex ${check === 'ar' ? "flex-row-reverse" : "flex-row "} gap-5 justify-between align-middle items-center`}>
                    {/* Imams Search */}
                    <div className="flex justify-center mx-auto relative w-full">
                        <input type="text" value={value} onChange={onChange} className={`${check === 'ar' ? "text-right": "text-left"} ${darkMode ? "bg-darkText text-lightText" : "bg-lightBg text-darkText"} shadow-lg shadow-fuchsia-700 h-[30px] w-full rounded-md px-1`}  placeholder={`${check === 'ar' ? "ابحث عن إمام" : check === 'eng' ? 'Search By Eemam': "Cherche un Imam"} `} />
                        <FaSearch size={20}  className={`${check === 'ar' ? "left-[4px] text-right": "right-[4px] text-left"} text-gray-500 absolute top-[4px]  z-40`} />
                        <div className="dropdown absolute z-20  flex flex-col  bg-white   overflow-y-scroll rounded top-[30px]  w-full  ">
                        {check === 'eng' && hadeetData && hadeetData.imams.filter(item => {
                            const searchTerm = value.replace(/([^\u0621-\u063A\u0641-\u064A\u0660-\u0669a-zA-Z 0-9])/g, '').toLowerCase()
                            const content = item.imam_english_name.replace(/([^\u0621-\u063A\u0641-\u064A\u0660-\u0669a-zA-Z 0-9])/g, '').toLowerCase()
                            const searchItem = content.replace(/([^\u0621-\u063A\u0641-\u064A\u0660-\u0669a-zA-Z 0-9])/g, '').toLowerCase()

                            console.log(searchTerm);
                            console.log(searchItem);
                            return searchTerm && searchItem.startsWith(searchTerm) && searchItem !== searchTerm
                        })
                        .map((imam) => (
                            <Link href={`/imams/${imam.id}`} className={`${check === 'ar' ? "text-right": "text-left"} ${darkMode ? "bg-darkText text-lightBg hover:bg-gray-950" : "bg-lightBg text-darkText hover:bg-gray-300"} px-3 py-[1px] border-b-gray-300 border-b-[1px] `}>{imam.imam_english_name}</Link>
                        ))
                        }
                        {check === 'fr' && hadeetData && hadeetData.imams.filter(item => {
                            const searchTerm = value.replace(/([^\u0621-\u063A\u0641-\u064A\u0660-\u0669a-zA-Z 0-9])/g, '').toLowerCase()
                            const content = item.imam_frensh_name.replace(/([^\u0621-\u063A\u0641-\u064A\u0660-\u0669a-zA-Z 0-9])/g, '').toLowerCase()
                            const searchItem = content.replace(/([^\u0621-\u063A\u0641-\u064A\u0660-\u0669a-zA-Z 0-9])/g, '').toLowerCase()


                            return searchTerm && searchItem.startsWith(searchTerm) && searchItem !== searchTerm
                        })
                        .map((imam) => (
                            <Link href={`/imams/${imam.id}`} className={`${check === 'ar' ? "text-right": "text-left"} ${darkMode ? "bg-darkText text-lightBg hover:bg-gray-950" : "bg-lightBg text-darkText hover:bg-gray-300"} px-3 py-[1px] border-b-gray-300 border-b-[1px] `}>{imam.imam_frensh_name}</Link>
                        ))
                        }
                        {check === 'ar' && hadeetData && hadeetData.imams.filter(item => {
                            const searchTerm = value.replace(/([^\u0621-\u063A\u0641-\u064A\u0660-\u0669a-zA-Z 0-9])/g, '').toLowerCase()
                            const content = item.imam_arabic_name.replace(/([^\u0621-\u063A\u0641-\u064A\u0660-\u0669a-zA-Z 0-9])/g, '').toLowerCase()
                            const searchItem = content.replace(/([^\u0621-\u063A\u0641-\u064A\u0660-\u0669a-zA-Z 0-9])/g, '').toLowerCase()


                            return searchTerm && searchItem.startsWith(searchTerm) && searchItem !== searchTerm
                        })
                        .map((imam) => (
                            <Link href={`/imams/${imam.id}`} className={`${check === 'ar' ? "text-right": "text-left"} ${darkMode ? "bg-darkText text-lightBg hover:bg-gray-950" : "bg-lightBg text-darkText hover:bg-gray-300"} px-3 py-[1px] border-b-gray-300 border-b-[1px] `}>{imam.imam_arabic_name}</Link>
                        ))
                        }

                        </div>
                    </div>
                    {/* Saheeh Search */}
                    <div className="flex justify-center mx-auto relative w-full">
                    <input type="text" value={valueSaheeh} onChange={onChangeSaheeh} dir={check === 'ar' ? 'rtl' : 'ltr'}  className={`${check === 'ar' ? "text-right": "text-left"} ${darkMode ? "bg-darkText text-lightText" : "bg-lightBg text-darkText"} shadow-lg shadow-fuchsia-700 h-[30px] w-full rounded-md px-1`}  placeholder={`${check === 'ar' ? "ابحث عن صحيح" : check === 'eng' ? 'Search By Saheeh': "Cherche un Sahih"} `} />
                        <FaSearch size={20}  className={`${check === 'ar' ? "left-[4px]": "right-[4px]"} text-gray-500 absolute top-[4px]  z-40`} />
                        <div className="dropdown absolute z-20  flex flex-col  bg-white   overflow-y-scroll rounded top-[30px]  w-full  ">
                        {check === 'eng' && hadeetData && hadeetData.imams.filter(item => {
                            const searchTerm = valueSaheeh.replace(/([^\u0621-\u063A\u0641-\u064A\u0660-\u0669a-zA-Z 0-9])/g, '').toLowerCase()
                            const content = item.eng_saheeh_name.replace(/([^\u0621-\u063A\u0641-\u064A\u0660-\u0669a-zA-Z 0-9])/g, '').toLowerCase()
                            const searchItem = content.replace(/([^\u0621-\u063A\u0641-\u064A\u0660-\u0669a-zA-Z 0-9])/g, '').toLowerCase()


                            return searchTerm && searchItem.startsWith(searchTerm) && searchItem !== searchTerm
                        })
                        .map((imam) => (
                            <Link href={`/imams/${imam.id}`} className={`${darkMode ? "bg-darkText text-lightBg hover:bg-gray-950" : "bg-lightBg text-darkText hover:bg-gray-300"} ${check === 'ar' ? "text-right": "text-left"} px-3 py-[1px] border-b-gray-300 border-b-[1px] `}>{imam.eng_saheeh_name}</Link>
                        ))
                        }
                        {check === 'fr' && hadeetData && hadeetData.imams.filter(item => {
                            const searchTerm = valueSaheeh.replace(/([^\u0621-\u063A\u0641-\u064A\u0660-\u0669a-zA-Z 0-9])/g, '').toLowerCase()
                            const content = item.fr_saheeh_name.replace(/([^\u0621-\u063A\u0641-\u064A\u0660-\u0669a-zA-Z 0-9])/g, '').toLowerCase()
                            const searchItem = content.replace(/([^\u0621-\u063A\u0641-\u064A\u0660-\u0669a-zA-Z 0-9])/g, '').toLowerCase()


                            return searchTerm && searchItem.startsWith(searchTerm) && searchItem !== searchTerm
                        })
                        .map((imam) => (
                            <Link href={`/imams/${imam.id}`} className={`${check === 'ar' ? "text-right": "text-left"} ${darkMode ? "bg-darkText text-lightBg hover:bg-gray-950" : "bg-lightBg text-darkText hover:bg-gray-300"} px-3 py-[1px] border-b-gray-300 border-b-[1px] `}>{imam.fr_saheeh_name}</Link>
                        ))
                        }
                        {check === 'ar' && hadeetData && hadeetData.imams.filter(item => {
                            const searchTerm = valueSaheeh.replace(/([^\u0621-\u063A\u0641-\u064A\u0660-\u0669a-zA-Z 0-9])/g, '').toLowerCase()
                            const content = item.ar_saheeh_name.replace(/([^\u0621-\u063A\u0641-\u064A\u0660-\u0669a-zA-Z 0-9])/g, '').toLowerCase()
                            const searchItem = content.replace(/([^\u0621-\u063A\u0641-\u064A\u0660-\u0669a-zA-Z 0-9])/g, '').toLowerCase()


                            return searchTerm && searchItem.startsWith(searchTerm) && searchItem !== searchTerm
                        })
                        .map((imam) => (
                            <Link href={`/imams/${imam.id}`} className={`${check === 'ar' ? "text-right": "text-left"} ${darkMode ? "bg-darkText text-lightBg hover:bg-gray-950" : "bg-lightBg text-darkText hover:bg-gray-300"} px-3 py-[1px] border-b-gray-300 border-b-[1px] `}>{imam.ar_saheeh_name}</Link>
                        ))
                        }

                        </div>
                    </div>
                    {/* Book Search */}
                    <div className="flex justify-center mx-auto relative w-full">
                    <input type="text" value={valueBook} onChange={onChangeBook}  className={`${check === 'ar' ? "text-right": "text-left"} ${darkMode ? "bg-darkText text-lightText" : "bg-lightBg text-darkText"} shadow-lg shadow-fuchsia-700 h-[30px] w-full  rounded-md px-1`}  placeholder={`${check === 'ar' ? "ابحث عن كتاب" : check === 'eng' ? 'Search By Book': "Cherche un Livre"} `} />
                        <FaSearch size={20}  className={`${check === 'ar' ? "left-[4px]": "right-[4px]"} text-gray-500 absolute top-[4px]  z-40`} />
                        <div className="dropdown absolute z-20  flex flex-col max-h-[190px]  bg-white   overflow-y-scroll rounded top-[30px]  w-full  ">
                        {check === 'eng' && hadeetData && hadeetData.imams.map(imam => imam.books.filter(item => {

                            const searchTerm = valueBook.replace(/([^\u0621-\u063A\u0641-\u064A\u0660-\u0669a-zA-Z 0-9])/g, '').toLocaleLowerCase()
                            const content = item.book_english_name.replace(/([^\u0621-\u063A\u0641-\u064A\u0660-\u0669a-zA-Z 0-9])/g, '').toLocaleLowerCase()
                            const searchItem = content.replace(/([^\u0621-\u063A\u0641-\u064A\u0660-\u0669a-zA-Z 0-9])/g, '').toLocaleLowerCase()


                            return searchTerm && searchItem.startsWith(searchTerm) && searchItem !== searchTerm
                        }
                        )
                        .map((imam) => (
                            <Link href={`/hadeeth/${imam.id}`} className={`${check === 'ar' ? "text-right": "text-left"} ${darkMode ? "bg-darkText text-lightBg hover:bg-gray-950" : "bg-lightBg text-darkText hover:bg-gray-300"} px-3 py-[1px] border-b-gray-300 border-b-[1px] `}>{imam.book_english_name}</Link>
                        ))
                        )}
                        {check === 'fr' && hadeetData && hadeetData.imams.map(imam => imam.books.filter(item => {

                            const searchTerm = valueBook.replace(/([^\u0621-\u063A\u0641-\u064A\u0660-\u0669a-zA-Z 0-9])/g, '').toLocaleLowerCase()
                            const content = item.book_french_name.replace(/([^\u0621-\u063A\u0641-\u064A\u0660-\u0669a-zA-Z 0-9])/g, '').toLocaleLowerCase()
                            const searchItem = content.replace(/([^\u0621-\u063A\u0641-\u064A\u0660-\u0669a-zA-Z 0-9])/g, '').toLocaleLowerCase()


                            return searchTerm && searchItem.startsWith(searchTerm) && searchItem !== searchTerm
                            }
                            )
                            .map((imam) => (
                            <Link href={`/books/${imam.id}`} className={`${check === 'ar' ? "text-right": "text-left"} ${darkMode ? "bg-darkText text-lightBg hover:bg-gray-950" : "bg-lightBg text-darkText hover:bg-gray-300"} px-3 py-[1px] border-b-gray-300 border-b-[1px] `}>{imam.book_french_name}</Link>
                            ))
                            )}
                        {check === 'ar' && hadeetData && hadeetData.imams.map(imam => imam.books.filter(item => {

                        const searchTerm = valueBook.replace(/([^\u0621-\u063A\u0641-\u064A\u0660-\u0669a-zA-Z 0-9])/g, '').toLocaleLowerCase()
                        const content = item.book_arabic_name.replace(/([^\u0621-\u063A\u0641-\u064A\u0660-\u0669a-zA-Z 0-9])/g, '').toLocaleLowerCase()
                        const searchItem = content.replace(/([^\u0621-\u063A\u0641-\u064A\u0660-\u0669a-zA-Z 0-9])/g, '').toLocaleLowerCase()


                        return searchTerm && searchItem.startsWith(searchTerm) && searchItem !== searchTerm
                        }
                        )
                        .map((imam) => (
                        <Link href={`/books/${imam.id}`} className={`${check === 'ar' ? "text-right": "text-left"} ${darkMode ? "bg-darkText text-lightBg hover:bg-gray-950" : "bg-lightBg text-darkText hover:bg-gray-300"} px-3 py-[1px] border-b-gray-300 border-b-[1px] `}>{imam.book_arabic_name}</Link>
                        ))
                        )}


                        </div>
                    </div>
                </div>

            </form>
        </React.Fragment>
    );
};

export default FilterBareHadeeths;
