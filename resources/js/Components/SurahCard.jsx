import { DarkModeContext } from "@/Context/DarkModeContext";
import { Link } from "@inertiajs/react";
import React, { useContext } from "react";

const SurahCard = ({
    surahNumber,
    englishName,
    translatedName,
    arabicName,
    versetsLength,
    src,
}) => {
    const { darkMode } = useContext(DarkModeContext);
    return (
        <div
            className=" bg-darkText borderStyle h-[70px] w-[100%] flex flex-row
     justify-center items-center rounded-bl-3xl rounded-tr-3xl shadow-md shadow-indigo-400   relative overflow-hidden "
        >
            <div className=" h-[50%] w-[100%]  bg-lightBg   absolute  cardUi   "></div>

            <div className="h-[97%]  w-[97%]   bg-darkText absolute rounded  ">
                <div  className="relative h-[100%]  w-[100%] ">
                    <div className=" h-full w-full text-lightText flex flex-row justify-between items-center p-4">
                        <div className="flex flex-row gap-[35px] ">
                            <div className="relative flex justify-center align-middle items-center ms-[20px] ">
                                <p className="text-xl absolute   z-10 font-bold ">
                                    {surahNumber}
                                </p>
                                <span className="h-[30px] w-[30px] bg-grayBg rounded absolute rotate-45 z-5  "></span>
                            </div>
                            <div>
                                <p className="text-sm font-bold">
                                    {englishName}
                                </p>
                                <p className="text-xs">{translatedName}</p>
                            </div>
                        </div>
                        <div>
                            <p className="text-sm font-bold text-center">
                                {arabicName}
                            </p>
                            <p className="text-xs">
                                {versetsLength + " versets"}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SurahCard;
