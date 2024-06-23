
import { DarkModeContext } from "@/Context/DarkModeContext";
import { Link } from "@inertiajs/react";
import React, { useContext, useEffect, useState } from "react";


const SurahCard = ({
    surahNumber,
    englishName,
    translatedName,
    arabicName,
    versetsLength,
    src,
}) => {
    const { darkMode } = useContext(DarkModeContext);
    const [loading, setLoading] = useState(true);
    const [cardStyle, setCardStyle] = useState('');

    useEffect(() => {
        if(darkMode) {
            setCardStyle('text-lightText')
        }else{
            setCardStyle('text-darkText')
        }
    }, [darkMode]);

    useEffect(() => {
        const handleWindowLoad = () => {
            // Set loading to false once the window and its content have finished loading
            setLoading(false);
        };

        // Add the event listener for the window.onload event
        window.addEventListener("load", handleWindowLoad);

        // Cleanup function to remove the event listener on component unmount
        if(window.addEventListener("load", handleWindowLoad)) {
            return () => {
                window.removeEventListener("load", handleWindowLoad);
            };
        }

    }, []);

    return (


        <div
            className={` ${darkMode ? "bg-darkText text-lightText shadow-md  shadow-indigo-400 borderStyle" : "bg-lightText text-darkText shadow-lg  shadow-indigo-900 borderStyle"}  h-[70px] w-[100%] flex flex-row
     justify-center items-center rounded-bl-3xl rounded-tr-3xl   relative overflow-hidden `}
        >


                <div className={`${darkMode ? "lightBorder" : "darkBorder"} h-[50%] w-[100%]     absolute  cardUi   `}></div>

                 <div className={`${darkMode ? "bg-darkText" : "bg-lightText"} h-[97%]  w-[97%]   absolute   rounded  `}>
                     <div  className={`relative h-[100%]  w-[100%]  `}>
                         <div className={` h-full w-full  flex flex-row justify-between items-center p-4`}>
                             <div className="flex flex-row gap-[35px] ">
                                 <div className="relative flex justify-center align-middle items-center ms-[20px] ">
                                     <p className={`${surahNumber > 99 ? "text-md" : "text-xl" }  absolute   z-10 font-bold `}>
                                         {surahNumber}
                                     </p>
                                     <span className={`h-[30px] w-[30px] ${darkMode ? "bg-grayBg" : "bg-gray-400"} rounded absolute rotate-45 z-5  `}></span>
                                 </div>
                                 <div>
                                     <p className="text-sm font-bold">
                                         {englishName }
                                     </p>
                                     <p className="text-xs">{translatedName  }</p>
                                 </div>
                             </div>
                             <div>
                                 <p className="text-sm font-bold text-center">
                                     {arabicName }
                                 </p>
                                 <p className="text-xs">
                                     {versetsLength + " versets"}
                                 </p>
                             </div>
                         </div>
                     </div>
                 </div>

                 <h1 className={`cardStyle`}>skfjnlsndfls,f</h1>


        </div>


    );
};

export default SurahCard;
