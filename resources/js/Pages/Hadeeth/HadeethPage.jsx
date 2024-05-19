import Tabs from "@/Components/Tabs";
import LayoutApp from "@/Layout/LayoutApp";
import { Head, Link } from "@inertiajs/inertia-react";
import { button } from "@material-tailwind/react";
import React, { useContext, useEffect, useState } from "react";
import bannerDark from "../../../../public/assets/publicImages/medd.png";
import bannerLight from "../../../../public/assets/publicImages/medd2.png";
import SearchbarEng from "@/Components/SearchBareQuran/SearchbarEng";
import FilterBareHadeeths from "@/Components/searchbarHadeeths/FilterBareHadeeths";
import ClipPathLinks from "@/Components/ClipPathLinks";
import { useSearchBarContext } from "@/Context/SearchBarContext";
import { DarkModeContext } from "@/Context/DarkModeContext";
import imagePath from "../../../../public/assets/publicImages/imams/round-badge-.png";
import dataa from "../Hadeeth/fr_bukhari.json";

const HadeethPage = ({ hadeetData }) => {
    const { check, setCheck } = useSearchBarContext();
    const { darkMode } = useContext(DarkModeContext);

    const [selectedTabIndex, setSelectedTabIndex] = useState(1);
    const [activeTab, setActiveTab] = useState(false);
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [sections, setSections] = useState([]);
    const [hadeethsBook, setHadeethsBook] = useState(null);

    const options = [
        { label: "Sunan Abu Dawud", value: "abudawud" },
        { label: "Musnad Imam Abu Hanifa", value: "abuhanifa" },
        { label: "Sahih al Bukhari", value: "bukhari" },
        { label: "Forty Hadith of Shah Waliullah Dehlawi", value: "dehlawi" },
        { label: "Sunan Ibn Majah", value: "ibnmajah" },
        { label: "Muwatta Malik", value: "malik" },
        { label: "Sahih Muslim", value: "muslim" },
        { label: "Sunan an Nasai", value: "nasai" },
        { label: "Forty Hadith of an-Nawawi", value: "nawawi" },
        { label: "Forty Hadith Qudsi", value: "qudsi" },
        { label: "Jami At Tirmidhi", value: "tirmidhi" },
    ];

    useEffect(() => {
        setData(hadeetData);
    }, []);

    //   useEffect(() => {
    //     const url = "https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/editions/eng-" + hadeethsBook + ".json";
    //     const fetchDataForPosts = async () => {
    //       try {
    //         const response = await fetch(
    //             url
    //         );
    //         if (!response.ok) {
    //           throw new Error(`HTTP error: Status ${response.status}`);
    //         }
    //         let postsData = await response.json();
    //         setData(postsData);
    //         setSections(Object.entries(postsData.metadata.sections).filter(([key, value]) => key !== "0"));
    //         setError(null);
    //       } catch (err) {
    //         setError(err.message);
    //         setData(null);
    //       } finally {
    //         setLoading(false);
    //       }
    //     };

    //     fetchDataForPosts();
    //   }, [hadeethsBook, sections]);

    const formatText = (text) => {
        // Split the text into paragraphs based on newline characters
        const paragraphs = text.split("\n");

        // Iterate through each paragraph and replace dots with line breaks
        const formattedText = paragraphs.map((paragraph, index) => {
            // Check if the paragraph ends with a dot
            if (paragraph.trim().endsWith(".")) {
                // Replace the dot with a line break
                return (
                    <React.Fragment key={index}>
                        {paragraph.slice(0, -1)}
                        <br />
                    </React.Fragment>
                );
            } else {
                return (
                    <React.Fragment key={index}>
                        {paragraph}
                        <br />
                    </React.Fragment>
                );
            }
        });

        return formattedText;
    };

    // console.log(data.imams);
    console.log(hadeetData.imams);

    return (
        <>
            <LayoutApp>
                <Head>
                    <title>Hadeet Page</title>
                </Head>

                <div className="w-[100%] mx-auto mt-[100px]  ">
                    <img
                        src={darkMode ? bannerDark : bannerLight}
                        className="h-[15%] w-[15%] mx-auto my-3 "
                        alt=""
                    />
                    <FilterBareHadeeths hadeetData={hadeetData} />
                    <div className="w-[80%] mx-auto  my-[50px]  ">
                        <div className="w-full flex flex-row justify-between ">
                            {data?.imams.map((imam, i) => (
                                <Tabs
                                    imgPath={imam.imam_imagePath}
                                    handleClick={() =>
                                        setSelectedTabIndex(imam.id)
                                    }
                                    saheeh_name={imam.imam_english_name}
                                    indx={i}
                                />
                            ))}
                        </div>
                        <div className={`${check === 'ar' ? 'flex-row-reverse' : 'flex-row'} w-full flex  gap-5`}>
                        <div className="w-[80%] float-left">
                            <div className="">
                                {data?.imams.map(
                                    (imam, i) =>
                                        imam.id === selectedTabIndex && (
                                            <div className={`${check === 'ar' ? 'text-right' : 'text-left'} my-[20px]`}>
                                                <h2 className={`${darkMode ? "text-lightText" : "text-darkText"} text-3xl text-center mb-3 font-bold`}>{check === 'eng' ? `${imam.imam_english_name}: The Imam of Hadith and Sunnah` : check === 'fr' ? `${imam.imam_frensh_name}: Imam de Hadith et Sunnah` : check === 'ar' ? `${imam.imam_arabic_name}: إمام الحديث والسنة` : null}</h2>
                                                <p className={`${darkMode ? "text-gray-400" : "text-darkText"} text-lg mt-[40px]`}>
                                                    {check === 'eng' ? imam.imams_bios.eng_lineage : check === 'ar' ? imam.imams_bios.ar_lineage : check === 'fr' ? imam.imams_bios.fr_lineage : null}
                                                </p>
                                                <h3 className={`${darkMode ? "text-lightText" : "text-darkText"} text-xl mt-[40px]   font-bold`}>{check === 'eng' ? `His birth and early life` : check === 'fr' ? `Sa naissance et sa jeunesse` : check === 'ar' ? `ولادته وحياته المبكرة` : null}</h3>

                                                <p className={`${darkMode ? "text-gray-400" : "text-darkText"} text-lg `}>

                                                    {check === 'eng' ? imam.imams_bios.eng_birth_life : check === 'ar' ? imam.imams_bios.ar_birth_life : check === 'fr' ? imam.imams_bios.fr_birth_life : null}
                                                </p>
                                                <h3 className={`${darkMode ? "text-lightText" : "text-darkText"} text-xl mt-[40px]  font-bold`}>{check === 'eng' ? `His pursuit of knowledge` : check === 'fr' ? `Sa quête de connaissances` : check === 'ar' ? `سعيه إلى العلم` : null}</h3>


                                                <p className={`${darkMode ? "text-gray-400" : "text-darkText"} text-lg `}>

                                                    {check === 'eng' ? imam.imams_bios.eng_pursuit_of_knowledge : check === 'ar' ? imam.imams_bios.ar_pursuit_of_knowledge : check === 'fr' ? imam.imams_bios.fr_pursuit_of_knowledge : null}
                                                </p>
                                                <h3 className={`${darkMode ? "text-lightText" : "text-darkText"} text-xl mt-[40px]   font-bold`}>
                                                {check === 'eng' ? `His death` : check === 'fr' ? `Sa mort` : check === 'ar' ? `وفاته` : null}
                                                </h3>
                                                <p className={`${darkMode ? "text-gray-400" : "text-darkText"} text-lg `}>

                                                    {check === 'eng' ? imam.imams_bios.eng_death : check === 'ar' ? imam.imams_bios.ar_death : check === 'fr' ? imam.imams_bios.fr_death : null}
                                                </p>
                                            </div>
                                        )
                                )}
                            </div>
                        </div>
                        <div className="w-[20%] float-right flex flex-col gap-2  mx-auto mt-5">

                            {hadeetData?.imams.map(
                                (imam, i) =>
                                    selectedTabIndex === imam.id &&

                                        <h2 key={i} className={`${darkMode ? "text-lightText bg-darkText" : "text-darkText bg-lightBg"} text-xl font-bold py-2 text-center shadow-md shadow-purple-900 rounded-[20px] mb-2`}>
                                            {check === 'eng' ? imam.eng_saheeh_name : check === 'ar' ? imam.ar_saheeh_name : check === 'fr' ? imam.fr_saheeh_name : null}
                                        </h2>

                            )}

                            <div className="">
                            {hadeetData?.imams.map(
                                (imam, i) =>
                                    selectedTabIndex === imam.id &&
                                    imam.books.map((book, i) => (
                                        // <h2 key={i} className="imam">
                                        //     {book.book_english_name}
                                        // </h2>
                                        <ClipPathLinks href={`/hadeeth/${book.id}`} value={check === "eng" ? book.book_english_name : check === "fr" ? book.book_french_name : check === "ar" ? book.book_arabic_name : null} />
                                    ))
                            )}
                            </div>

                        </div>
                        </div>
                    </div>
                </div>
            </LayoutApp>
        </>
    );
};

export default HadeethPage;
