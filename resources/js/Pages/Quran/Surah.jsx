import React, { useContext } from "react";
import { Head, Link, usePage } from "@inertiajs/inertia-react";
import { useState } from "react";
import LayoutApp from "@/Layout/LayoutApp";
import { useSearchBarContext } from "@/Context/SearchBarContext";
import { DarkModeContext } from "@/Context/DarkModeContext";
import SurahAudioPlayer from "@/Components/surahAudioPLayer";
import List from "@/Components/List";

export default function Surah({ surah, next, previous }) {



    const { darkMode } = useContext(DarkModeContext);

    const [musicNumber, setMusicNumber] = useState(0)
  const [open, setOpen] = useState(false)

    const { check, setCheck } = useSearchBarContext();
    const [fully, setFully] = useState("Request Full Screen");
    const [currentSurah, setCurrentSurah] = useState(surah);

    // console.log(surah.surahaudio.audio);


    const myDocument = document.getElementById("myFullScreen");

    const isFullscreen = document.fullscreenElement;

    function handleFullScreen() {
        let elem = document.getElementById("myFullScreen");

        if (!document.fullscreenElement) {
            setFully("Exit Full Screen");
            elem.requestFullscreen().catch((err) => {
                alert(
                    `Error attempting to enable fullscreen mode: ${err.message} (${err.name})`
                );
            });
        } else {
            document.exitFullscreen();
            setFully("Set Full Screen");
        }
    }
    const handleId = () => {
        let surahId = 0
        for (let index = currentSurah.id; index < 115; index++) {


            return surahId[index]
        }
        return  surahId
    }

    console.log(handleId.surahId);



    const handleNextSurah = () => {
        // Implement logic to navigate to the next surah
        console.log("Navigating to the next surah:", next);
        if(next) {setCurrentSurah(next)}

      };

      const handlePreviousSurah = () => {
        // Implement logic to navigate to the previous surah
        console.log("Navigating to the previous surah:", previous);
        if(previous) {setCurrentSurah(previous)}
      };

    console.log(next);

    return (
        <React.Fragment>
            <Head>
                <title>{check === 'ar' ? currentSurah?.arabicName : check === 'eng' ? currentSurah?.englishName : check === 'fr' ? currentSurah?.englishName : ''}</title>
            </Head>
            <LayoutApp>
                <div
                    id="myFullScreen"
                    className={`w-[100%] md:w-[80%] h-auto mx-auto mt-20 rounded-lg  p-[40px] ${
                        isFullscreen ? "overflow-hidden " : "overflow-scroll "
                    }  `}
                >
                    <button
                        className={`absolute top-[100px] ${darkMode ? "text-lightText bg-darkText" : "text-darkText bg-lightBg"} border border-bg-lighText shadow-lg align-middle items-center flex shadow-violet-300 rounded-md p-1 h-[30px] font-bold `}
                        onClick={handleFullScreen}
                    >
                        {fully}
                    </button>
                    <h2 className={`my-3 text-4xl font-bold text-center pt-10 ${darkMode ? 'text-lightText' : 'text-darkText'} `}>
                        {check === "ar"
                            ? currentSurah?.arabicName
                            : check === "fr"
                            ? currentSurah?.englishName +
                              " - " +
                              currentSurah?.frenshNameTranslation
                            : check === "eng"
                            ? currentSurah?.englishName +
                              " - " +
                              currentSurah?.englishNameTranslation
                            : null}
                    </h2>
                    <div className="flex flex-row items-center gap-5 w-[80%] mx-auto justify-center ">
                        <Link href={`/quran/surah/${ surah.id === 1  ? 114 : surah.id - 1  }`}  className={`${darkMode ? "text-lightText bg-darkText" : "text-darkText bg-lightBg"}   border border-bg-lighText shadow-lg align-middle items-center flex shadow-violet-300 rounded-md p-1 h-[30px] font-bold`}>
                            Previous
                        </Link>
                        {/* <audio
                            className="w-50 mx-auto"
                            src={currentSurah?.audio}
                            controls
                            autoPlay
                        ></audio> */}
                        {/* <SurahAudioPlayer /> */}
                        <div className="App w-1/3  ">
                            <div className='w-full   relative '>
                                <SurahAudioPlayer audioSrc={surah.surahaudio.audio}    />
                                {/* <List musicNumber={musicNumber} setMusicNumber={setMusicNumber} open={open} setOpen={setOpen} /> */}
                            </div>
                        </div>
                        <Link href={`/quran/surah/${ surah.id > 0 && surah.id < 114 ? surah.id +1 :  1  }`} className={`${darkMode ? "text-lightText bg-darkText" : "text-darkText bg-lightBg"}  border border-bg-lighText shadow-lg  px-[20px] flex align-middle  items-center shadow-violet-300 rounded-md p-1 h-[30px] font-bold`}>
                            Next
                        </Link>
                    </div>

                    <div className={`flex flex-row gap-3 justify-center ${darkMode ? "text-gray-300" : "text-darkText"} mb-[40px] `}>
                        <p>
                            {"["}
                            {currentSurah?.revelationType === "Medinan" &&
                            check === "ar"
                                ? "مدنية"
                                : currentSurah?.revelationType === "Meccan" &&
                                  check === "ar"
                                ? "مكية"
                                : currentSurah?.revelationType}
                            {"]"}
                        </p>

                        <p>
                            {"["}
                            {currentSurah?.versesNumber && check === "ar"
                                ? currentSurah?.versesNumber + " :عدد الآيات"
                                : currentSurah?.versesNumber && check === "eng"
                                ? "Verses Number: " + currentSurah?.versesNumber
                                : currentSurah?.versesNumber && check === "fr"
                                ? "Nombre de versets: " + currentSurah?.versesNumber
                                : null}
                            {"]"}
                        </p>
                        <p>
                            {"["}
                            {currentSurah?.numberInQuran && check === "ar"
                                ? currentSurah?.numberInQuran + " :الترتيب في المصحف"
                                : currentSurah?.numberInQuran && check === "eng"
                                ? " Order of Surah: " + currentSurah?.versesNumber
                                : currentSurah?.versesNumber && check === "fr"
                                ? "Ordre du Surah: " + surah.versesNumber
                                : null}
                            {"]"}
                        </p>
                    </div>
                    <p className={`text-center my-3 nabi font-bold text-lg underline ${darkMode ? "text-lightText" : "text-darkTExt"} `}>
                        {check === "ar" ?
                            currentSurah.id === 1 ? 'البسملة هي أول آية من سورة ٱلْفَاتِحَةِ' : currentSurah.id === 9 ? "سورة التَّوۡبَةِ لا تحتوي على البسملة" : "بِسمِ اللَّهِ الرَّحمـٰنِ الرَّحيمِ"
                            : check === "eng"
                            ? currentSurah.id === 1 ?  "The Basmalah is the first verse of Surat Al-Fatihah" : currentSurah.id === 9 ? "Surat Al-Tawbah does not contain the basmalah" : "In the name of allah the most gracious the most merciful"
                            : check === "fr"
                            ? currentSurah.id === 1 ? "Al-Basmalah est le premier verset de la sourate Al-Fatihah"  : currentSurah.id === 9 ? "Surat sourate Al-Tawbah ne contient pas al-basmala" : "Au nom d'Allah le plus miséricordieux le plus miséricordieux"
                            : null}
                    </p>
                    <div className=" flex flex-col   nabi  gap-2">
                        {currentSurah?.ayahs && currentSurah.ayahs?.map((ayah, i) => (
                            <div
                                className={`flex ${
                                    check === "ar"
                                        ? "flex-row-reverse text-right"
                                        : "flex-row"
                                } border-b-[1px] border-[#00000020] gap-2  w-[80%] mx-auto font-semibold text-lg `}
                            >
                                <div className=" flex flex-row  ">
                                <p key={i} className={`${darkMode ? "text-lightText" : "text-darkText"}`}>
                                    {check === "ar"
                                        ? ayah.content || 'No content available'
                                        : check === "fr"
                                        ? ayah.frenshContent || 'No content available'
                                        : check === "eng"
                                        ? ayah.englishContent || 'No content available'
                                        : null}
                                     <span className={`red ${darkMode ? "text-lightText" : "text-darkText"} ms-1`}>{ayah.verseNumber}</span>
                                </p>

                                </div>
                                {/* <div className="">

                                    <span className="red ">{ayah.verseNumber}</span>
                                    </div> */}


                                    {/* <p className="absolute h-[40px] w-[40px] top-[-14px]"><span className="red">&#x06dd;</span></p> */}

                            </div>
                        ))}
                    </div>
                </div>
            </LayoutApp>
        </React.Fragment>
    );
}
