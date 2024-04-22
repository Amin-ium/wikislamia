import Tabs from '@/Components/Tabs';
import LayoutApp from '@/Layout/LayoutApp'
import { Head, Link } from '@inertiajs/inertia-react'
import { button } from '@material-tailwind/react';
import React, { useContext, useEffect, useState } from 'react'
import banner from '../../../../public/assets/publicImages/medd.png'
import SearchbarEng from '@/Components/SearchBareQuran/SearchbarEng';
import SearchbarEngHadeeth from '@/Components/searchbarHadeeths/SearchbarEngHadeeth';
import ClipPathLinks from '@/Components/ClipPathLinks';
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



console.log(hadeetData);


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
                <div className={`w-[80%] mx-auto flex align-top gap-3  mt-3 ${check === 'ar' ? "flex-row-reverse" : "flex-row"}`}>
                <div className='w-[80%] float-start '>

                <div  className='w-[100%] mx-auto  '>
                    {hadeetData.imams.map((tab,i) =>
                         selectedTabIndex == tab.id &&
                         <div key={i} className="shadow-2xl shadow-fuchsia-700 rounded-[20px] mb-5 pb-[30px]"  >
                            <h2 key={i} className='text-darkText px-4 pt-5 my-5 text-2xl text-center  imam font-bold'>{check === 'eng' ? ' '+'Imam '+tab.imam_english_name+' ' : check === 'fr' ? ' '+'Imam '+tab.imam_frensh_name+' ' : check === 'ar' ? ' '+'الإمام '+tab.imam_arabic_name+' ' : null}</h2>
                            <div className={`${check === 'ar' ? 'text-right' : 'text-left'} `}>
                            <p className='text-grayBg px-4 ' >
                           {check === 'eng' && tab.imam_bio.eng_lineage.split('.').map((paragraph, index) => (
                                <React.Fragment key={index}>
                                    {paragraph.trim().endsWith('.') ? (
                                        paragraph.slice(0, -1)
                                    ) : (
                                        paragraph
                                    )}



                                </React.Fragment>
                            ))}

                        {check === 'ar' && tab.imam_bio.ar_lineage.split('.').map((paragraph, index) => (
                                <React.Fragment key={index}>
                                    {paragraph.trim().endsWith('.') ? (
                                        paragraph.slice(0, -1)
                                    ) : (
                                        paragraph
                                    )}



                                </React.Fragment>
                            ))}

                        {check === 'fr' && tab.imam_bio.fr_lineage.split('.').map((paragraph, index) => (
                                <React.Fragment key={index}>
                                    {paragraph.trim().endsWith('.') ? (
                                        paragraph.slice(0, -1)
                                    ) : (
                                        paragraph
                                    )}



                                </React.Fragment>
                            ))}

                            </p>

                            </div>
                            <div className={`${check === 'ar' ? 'text-right' : 'text-left'} `}>
                            <h3 className='text-xl font-bold px-4 mt-5'>{check === 'eng' ? 'His Birth and Early Life' : check === 'fr' ? "Sa naissance et ses débuts" : check === "ar" ? "مولده وحياته المبكرة" : null}</h3>
                            <p className='text-grayBg px-4 ' >
                           {check === 'eng' && tab.imam_bio.eng_birth_life.split('.').map((paragraph, index) => (
                                <React.Fragment key={index}>
                                    {paragraph.trim().endsWith('.') ? (
                                        paragraph.slice(0, -1)
                                    ) : (
                                        paragraph
                                    )}



                                </React.Fragment>
                            ))}

                        {check === 'ar' && tab.imam_bio.ar_birth_life.split('.').map((paragraph, index) => (
                                <React.Fragment key={index}>
                                    {paragraph.trim().endsWith('.') ? (
                                        paragraph.slice(0, -1)
                                    ) : (
                                        paragraph
                                    )}



                                </React.Fragment>
                            ))}

                        {check === 'fr' && tab.imam_bio.fr_birth_life.split('.').map((paragraph, index) => (
                                <React.Fragment key={index}>
                                    {paragraph.trim().endsWith('.') ? (
                                        paragraph.slice(0, -1)
                                    ) : (
                                        paragraph
                                    )}



                                </React.Fragment>
                            ))}

                            </p>

                            </div>
                            <div className={`${check === 'ar' ? 'text-right' : 'text-left'} `}>
                            <h3 className='text-xl font-bold px-4 mt-5'>{check === 'eng' ? 'His Pursuit of Knowledge' : check === 'fr' ? "Sa quête de connaissances" : check === "ar" ? "سعيه للمعرفة" : null}</h3>
                            <p className='text-grayBg px-4 ' >
                           {check === 'eng' && tab.imam_bio.eng_pursuit_of_knowledge.split('.').map((paragraph, index) => (
                                <React.Fragment key={index}>
                                    {paragraph.trim().endsWith('.') ? (
                                        paragraph.slice(0, -1)
                                    ) : (
                                        paragraph
                                    )}



                                </React.Fragment>
                            ))}

                        {check === 'ar' && tab.imam_bio.ar_pursuit_of_knowledge.split('.').map((paragraph, index) => (
                                <React.Fragment key={index}>
                                    {paragraph.trim().endsWith('.') ? (
                                        paragraph.slice(0, -1)
                                    ) : (
                                        paragraph
                                    )}



                                </React.Fragment>
                            ))}

                        {check === 'fr' && tab.imam_bio.fr_pursuit_of_knowledge.split('.').map((paragraph, index) => (
                                <React.Fragment key={index}>
                                    {paragraph.trim().endsWith('.') ? (
                                        paragraph.slice(0, -1)
                                    ) : (
                                        paragraph
                                    )}



                                </React.Fragment>
                            ))}

                            </p>

                            </div>
                            <div className={`${check === 'ar' ? 'text-right' : 'text-left'} `}>
                            <h3 className='text-xl font-bold px-4 mt-5'>{check === 'eng' ? 'His Death' : check === 'fr' ? "Sa mort" : check === "ar" ? "وفاته" : null}</h3>
                            <p className='text-grayBg px-4 ' >
                           {check === 'eng' && tab.imam_bio.eng_death.split('.').map((paragraph, index) => (
                                <React.Fragment key={index}>
                                    {paragraph.trim().endsWith('.') ? (
                                        paragraph.slice(0, -1)
                                    ) : (
                                        paragraph
                                    )}



                                </React.Fragment>
                            ))}

                        {check === 'ar' && tab.imam_bio.ar_death.split('.').map((paragraph, index) => (
                                <React.Fragment key={index}>
                                    {paragraph.trim().endsWith('.') ? (
                                        paragraph.slice(0, -1)
                                    ) : (
                                        paragraph
                                    )}



                                </React.Fragment>
                            ))}

                        {check === 'fr' && tab.imam_bio.fr_death.split('.').map((paragraph, index) => (
                                <React.Fragment key={index}>
                                    {paragraph.trim().endsWith('.') ? (
                                        paragraph.slice(0, -1)
                                    ) : (
                                        paragraph
                                    )}



                                </React.Fragment>
                            ))}

                            </p>

                            </div>

                           </div>
                    )}
                </div>
                </div>
                <div className='w-[20%] h-min  float-end flex flex-col gap-2  mx-auto mt-5   '>
                {hadeetData.imams.map((imam,i) =>

                selectedTabIndex == imam.id &&
                    <h2 className='text-darkText text-center font-bold text-xl  py-3 mb-3   shadow-md shadow-purple-900 rounded-[20px] ' key={i}>{check === "eng" ? imam.eng_saheeh_name : check === "ar" ? imam.ar_saheeh_name : check === "fr" ? imam.fr_saheeh_name : null}</h2>

                )}
                    {hadeetData.imams.map((imam,i) =>

                    selectedTabIndex == imam.id && imam.books.map((book,x) =>
                        //   <Link className='text-darkText text-center px-3 shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]' key={x}>{check === "eng" ? book.book_english_name : check === "fr" ? book.book_french_name : check === "ar" ? book.book_arabic_name : null}</Link>
                        <ClipPathLinks href={`/hadeeth/${book.id}`} value={check === "eng" ? book.book_english_name : check === "fr" ? book.book_french_name : check === "ar" ? book.book_arabic_name : null} />
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
