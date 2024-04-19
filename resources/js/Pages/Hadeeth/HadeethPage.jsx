import Tabs from '@/Components/Tabs';
import LayoutApp from '@/Layout/LayoutApp'
import { Head, Link } from '@inertiajs/inertia-react'
import { button } from '@material-tailwind/react';
import React, { useContext, useEffect, useState } from 'react'
import banner from '../../../../public/assets/publicImages/medd.png'
import SearchbarEng from '@/Components/SearchBareQuran/SearchbarEng';
import SearchbarEngHadeeth from '@/Components/searchbarHadeeths/SearchbarEngHadeeth';
import { useSearchBarContext } from '@/Context/SearchBarContext';
import { DarkModeContext } from '@/Context/DarkModeContext';





const HadeethPage = ({hadeetData}) => {

    const { check, setCheck } = useSearchBarContext();
    const { darkMode } = useContext(DarkModeContext);

    const [selectedTabIndex, setSelectedTabIndex] = useState(1);
    const [activeTab, setActiveTab] = useState(false);

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






  return (
    <>
    <LayoutApp>
            <Head>
              <title>Hadeet Page</title>
          </Head>

            <div className='w-[100%] mx-auto mt-[100px] flex flex-col justify-center'>
                <img src={banner} className='h-[15%] w-[15%] mx-auto my-3 ' alt="" />
                <SearchbarEngHadeeth hadeetData={hadeetData}  />
                <div className='w-[80%] mx-auto flex flex-row justify-between mt-3 '>
                    {hadeetData.imams.map((tab, i) =>
                    <div key={i} className={`${selectedTabIndex == tab.id ? "" : ""} p-3`} onClick={() => setActiveTab(true)}>
                     <Tabs tabs={hadeetData.imams} imam_name={check === 'fr' ? tab.imam_frensh_name : check === 'eng' ? tab.imam_english_name : check === 'ar' ? tab.imam_arabic_name : null} bio={selectedTabIndex === `${tab.id}` && check === 'eng' ? tab.english_bio : check === 'fr' ? tab.french_bio : check === 'ar' ? tab.arabic_bio : null} idx={i} id={tab.id} index={i} handleClick={() => setSelectedTabIndex(`${tab.id}`)} imagePath={`/assets/publicImages/imams/${tab.imam_imagePath}.png`} />
                     </div>
                    )}
                </div>
                <div className={`w-[80%] mx-auto flex  gap-3  mt-3 ${check === 'ar' ? "flex-row-reverse" : "flex-row"}`}>
                <div className='w-[80%] float-start'>

                <div  className='w-[100%] mx-auto '>
                    {hadeetData.imams.map((tab,i) =>
                         selectedTabIndex == tab.id &&
                         <div key={i} className="bg-grayBg rounded-[20px]"  >
                            <h2 key={i} className='text-lightText px-4 pt-5 text-2xl text-center  imam font-bold'>{check === 'eng' ? ' '+tab.imam_english_name+' ' : check === 'fr' ? ' '+tab.imam_frensh_name+' ' : check === 'ar' ? ' '+tab.imam_arabic_name+' ' : null}</h2>
                           <p className='text-lightText p-4 text-center' >
                           {check === 'eng' && tab.full_eng_bio.split('.').map((paragraph, index) => (
                                <React.Fragment key={index}>
                                    {paragraph.trim().endsWith('.') ? (
                                        paragraph.slice(0, -1)
                                    ) : (
                                        paragraph
                                    )}
                                    <br />
                                    <hr className='my-3 w-[30%] mx-auto' />

                                </React.Fragment>
                            ))}

                        {check === 'ar' && tab.full_ar_bio.split('.').map((paragraph, index) => (
                                <React.Fragment key={index}>
                                    {paragraph.trim().endsWith('.') ? (
                                        paragraph.slice(0, -1)
                                    ) : (
                                        paragraph
                                    )}
                                    <br />
                                    <hr className='my-3 w-[30%] mx-auto' />

                                </React.Fragment>
                            ))}

                        {check === 'fr' && tab.full_fr_bio.split('.').map((paragraph, index) => (
                                <React.Fragment key={index}>
                                    {paragraph.trim().endsWith('.') ? (
                                        paragraph.slice(0, -1)
                                    ) : (
                                        paragraph
                                    )}
                                    <br />
                                    <hr className='my-3 w-[30%] mx-auto' />

                                </React.Fragment>
                            ))}

    </p>
                           </div>
                    )}
                </div>
                </div>
                <div className='w-[20%] float-end flex flex-col gap-2  mx-auto '>
                {hadeetData.imams.map((imam,i) =>

                selectedTabIndex == imam.id &&
                    <h2 className='text-lightText text-center font-bold text-xl rounded-md px-4 py-2 underline  bg-grayBg' key={i}>{check === "eng" ? imam.eng_saheeh_name : check === "ar" ? imam.ar_saheeh_name : check === "fr" ? imam.fr_saheeh_name : null}</h2>

                )}
                    {hadeetData.imams.map((imam,i) =>

                    selectedTabIndex == imam.id && imam.books.map((book,x) =>
                          <Link className='text-lightText text-center rounded-md px-3 bg-grayBg' key={x}>{check === "eng" ? book.book_english_name : check === "fr" ? book.book_french_name : check === "ar" ? book.book_arabic_name : null}</Link>
                        )
                    )}
                </div>
                </div>

            </div>

    </LayoutApp>
    </>

  )
}

export default HadeethPage
