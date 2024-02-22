import { useSearchBarContext } from "@/Context/SearchBarContext";
import moment from "moment";

import { FaMosque } from "react-icons/fa";

import {
    BsFillSunsetFill,
    BsFillSunriseFill,
    BsFillSunFill,
    BsFillMoonFill,
    BsMask,
    BsSun,
} from "react-icons/bs";
import { IoMdMoon } from "react-icons/io";
import { BiSolidCircle } from "react-icons/bi";
import React, { useContext } from "react";
import { DarkModeContext } from "@/Context/DarkModeContext";
import hijriDate from "hijri-date";



const PrayerTime = ({FajrPrayer, DhuhrPrayer,AsrPrayer,IshaPrayer,prayerTimes,}) => {
    // const today = new hijriDate();
    // const dateHijri = today.date + "/" + today.month + "/" + today.year + " ";
    // const dayTimeHijri =
    //     today.dayName + " " + today.hours + ":" + today.minutes;
        const { check, setCheck } = useSearchBarContext();
        const { darkMode } = useContext(DarkModeContext);


    console.log(darkMode);
    return (
        // <div className='absolute right-0 -top-5 bg-[#392467] w-[280px] text-lightText border border-lightText rounded-md p-4 flex flex-col gap-3 prayerBg'>
        //     {/* <select name="" id="monselect"  className='relative z-10 text-sm text-darkText'>
        //         <option value="casablanca">Casablanca</option>
        //         <option value="riyad">Riyad</option>
        //         <option value="new york" selected>New York</option>
        //         <option value="paris">Pris</option>
        //         <option value="london">London</option>
        //     </select> */}
        //
        <div className="h-[400x] w-[200px] absolute right-[50px] -top-[30px] flex justify-center z-10 rounded-lg ">
            <video
                className="h-[400x] w-[200px] absolute rounded-xl"
                src={prayerTimes}
                autoPlay
                muted
                loop
            />
            <div>
            <div className="relative z-12 mt-[35px] ">
                <div className="flex flex-col  ms-3">
                    <h3
                        className={`${
                            check === "ar" ? "text-right" : "text-left"
                        }  font-bold uppercase text-sm `}
                    >
                        {check === "ar" ? "الدار البيضاء" : "Casablanca"}
                    </h3>
                    <h3
                        className={`${
                            check === "ar" ? "text-right" : "text-left"
                        } font-bold uppercase text-sm -mt-1 `}
                    >
                        {check === "ar" ? "مواقيت " : "Prayer "}
                    </h3>
                    <h3
                        className={`${
                            check === "ar" ? "text-right" : "text-left"
                        } font-bold uppercase text-sm -mt-1  `}
                    >
                        {check === "ar" ? " الصلاة" : " Times"}
                    </h3>
                    <div className="w-[70px] h-[5px] bg-yellow-400"></div>
                </div>

                <div className="  font-bold ms-3 ">
                    <h4 className="text-[10px]">
                        {moment().format("L") + " "}Georgian
                    </h4>
                    {/* <h4 className="text-[10px] -mt-1">{dateHijri + " "}Hijri</h4> */}
                    {/* <h4 className="text-[10px] -mt-1">{dayTimeHijri}</h4> */}

                    <div className="text-[10px]"></div>
                </div>
            </div>

            <ul
                className={`${
                    check === "ar" ? "text-right" : "text-left"
                } ${darkMode ? "bg-lightBg text-darkText": "bg-lightBg text-darkText"} relative  rounded-md flex flex-col  p-1  mx-auto z-13 `}
            >
                <li className="flex flex-row justify-between">
                    <div className="flex flex-col gap-1  font-bold">
                        <BsFillSunriseFill
                            size={18}
                            className="text-yellow-500"
                        />
                    </div>
                    <div className=" flex flex-row items-center rounded-md  font-bold">
                        <h3 className="text-[10px] text-center   rounded px-1">
                            {check === "ar" ? "الفجر" : "Fajr"}
                        </h3>
                        <h3 className=" text-[10px] text-center ">
                            {/* {FajrPrayer} */}
                        </h3>
                    </div>
                </li>
                <li className="flex flex-row justify-between">
                    <div className="flex flex-col gap-1  items-center font-bold">
                        <BsFillSunFill size={18} className="text-yellow-500" />
                    </div>
                    <div className=" rounded-md flex flex-row items-center font-bold">
                        <h3 className="text-[10px] text-center  text-darkText rounded px-1">
                            {check === "ar" ? "الظهر" : "Dhur"}
                        </h3>
                        <h3 className="text-darkText text-[10px] text-center ">
                            {/* {DhuhrPrayer} */}
                        </h3>
                    </div>
                </li>
                <li  className="flex flex-row justify-between">
                    <div className="flex flex-col gap-1  items-center font-bold">
                        <BsSun size={18} className="text-yellow-500 " />
                    </div>
                    <div className=" rounded-md flex flex-row  items-center font-bold ">
                        <h3 className="text-[10px] text-center  text-darkText rounded px-1">
                            {check === "ar" ? "العصر" : "Asr"}
                        </h3>
                        <h3 className="text-darkText text-[10px] text-center ">
                            {/* {AsrPrayer} */}
                        </h3>
                    </div>
                </li>
                <li className="flex flex-row justify-between">
                    <div className="flex flex-col gap-1  items-center font-bold">
                        <BsFillSunsetFill
                            size={18}
                            className="text-yellow-500"
                        />
                    </div>
                    <div className=" rounded-md flex flex-row items-center font-bold">
                        <h3 className="text-[10px] text-center  text-darkText rounded px-1">
                            {check === "ar" ? "المغرب" : "Maghrib"}
                        </h3>
                        <h3 className="text-darkText text-[10px] text-center ">
                            {/* {MaghribPrayer} */}
                        </h3>
                    </div>
                </li>
                <li className="flex flex-row justify-between">
                    <div className="flex flex-col gap-1  items-center font-bold">
                        <IoMdMoon size={18} className="text-yellow-500" />
                    </div>
                    <div className=" rounded-md flex flex-row items-center font-bold">
                        <h3 className="text-[10px] text-center  text-darkText rounded px-1  ">
                            {check === "ar" ? "العشاء" : "Icha"}
                        </h3>
                        <h3 className=" text-darkText text-[10px] text-center ">
                            {/* {IshaPrayer} */}
                        </h3>
                    </div>
                </li>
            </ul>

            </div>
            <div className={`${darkMode ? "bg-lightBg" : "bg-lightBg"} absolute -bottom-[95px] rounded-b-lg z-13  py-1 px-[20px]  w-full   text-darkText flex flex-col jusify-center items-center`}>
                <h2 className="text-center text-xl righteous-regular font-bold ">Prayer is First</h2>
                <FaMosque
                            size={18}
                            className="text-darkText"
                        />

            </div>

        </div>

        // </div>
    );
};

export default PrayerTime;
