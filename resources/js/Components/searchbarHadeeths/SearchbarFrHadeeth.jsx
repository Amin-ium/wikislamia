import React, { useContext, useEffect } from "react";
import Alpine from "alpinejs";
import { BsGithub } from "react-icons/bs";
import { FaGlobe, FaSearch, FaTimes } from "react-icons/fa";
import { usePage, Link } from "@inertiajs/inertia-react";
import { useState } from "react";
import { DarkModeContext } from "@/Context/DarkModeContext";


const SearchbarFr = ({ hadeetData }, props) => {

    const {darkMode} = useContext(DarkModeContext)


    const [dropDoun, setDropDown] = useState();
    const [ArData, setArData] = useState([]);
    const [data, setData] = useState([]);
    const [value, setValue] = useState("");
    const [DataSource, setDataSource] = useState(hadeetData);
    const [tableFilter, setTableFilter] = useState([]);
    const [checking, setChecking] = useState("");
    const [isDisabled, setIsDisabled] = useState(true);
    const [isFullyInput, setIsFullyInput] = useState(true);
    const [place, setPlace] = useState("Choose a Langage ---- إختر اللغة");



    const onChange = (event) => {
        setValue(event.target.value);
        setChecking('fr')
    };

    const onSearch = (searchTerm) => {
        setValue(searchTerm);
        setChecking('frr')


    };











    return (
        <React.Fragment>
            <form
                className="z-17 "
                x-data="{dropDownOpen: false}"
            >
                <div class="relative flex flex-col justify-center ">
                    <div className="relative flex flex-row w-full lg:w-[70%] mx-auto">
                        <input
                            type="text"

                            className=" block rounded-l-lg p-2.5 w-[100%]  z-20 text-sm text-gray-900
                              rounded-r-lg border-l-gray-50 border-l-2 border
                               border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Chercher un Hadeet"
                            value={value}
                            onChange={onChange}
                            // onClick={() => {setIsFullyInput(true)}}
                            style={{ textAlign: "left" }}
                        />
                        {value ? (
                             <FaTimes size={24} onClick={() => setValue('')} className='text-gray-500 absolute top-[8px] right-[10px] z-40' />
                        ) : (
                            <FaSearch size={24}  className='text-gray-500 absolute top-[8px] right-[10px] z-40' />
                        )}
                    </div>

                    <div className="dropdown absolute z-20  flex flex-col  bg-white max-h-[200px]  overflow-y-scroll rounded top-[43px]  w-full lg:w-[70%] left-[15%]">
                        {hadeetData && hadeetData.hadeets.filter(item => {
                            const searchTerm = value.replace(/([^\u0621-\u063A\u0641-\u064A\u0660-\u0669a-zA-Z 0-9])/g, '')
                            const content = item.french_content.replace(/([^\u0621-\u063A\u0641-\u064A\u0660-\u0669a-zA-Z 0-9])/g, '')
                            const searchItem = content.replace(/([^\u0621-\u063A\u0641-\u064A\u0660-\u0669a-zA-Z 0-9])/g, '')



                            return searchTerm && searchItem.includes(searchTerm) && searchItem !== searchTerm
                        })
                        .map((hadeet) => (
                            <Link href={`/hadeeth/${hadeet.id}`} className={`${darkMode ? "bg-darkBg text-lightBg hover:bg-gray-950" : "bg-lightBg text-darkText hover:bg-gray-300"}  px-3 py-[1px] border-b-gray-300 border-b-[1px] `}>{hadeet.french_content.substr(0, 70)} ...</Link>

                        ))
                        }
                    </div>
                </div>
            </form>
        </React.Fragment>
    );
};

export default SearchbarFr;
