import React, { useContext, useEffect, useState } from 'react'

import { Head, Link } from '@inertiajs/inertia-react';



import LayoutApp from '@/Layout/LayoutApp';
import { DarkModeContext } from '@/Context/DarkModeContext';
import { useSearchBarContext } from '@/Context/SearchBarContext';

const IndividualQuran = ({ayah, surahs}) => {

    const {darkMode} = useContext(DarkModeContext);
    const { check } = useSearchBarContext();

    const [checkLang, setCheckLang] = useState('')


      useEffect(() => {
        (async () => {
            setCheckLang(await check)
          })();
      }, [])


  return (
      <React.Fragment>
          <Head>
              <title>Individual-Quran</title>
          </Head>
          <LayoutApp>
            <div className={`${darkMode ? "bg-darkBg" : "bg-lightBg"} bg-homeBg bg-cover bg-center `}>
                <div className='w-[90%]  md:w-[70%] mx-auto flex flex-col gap-1 lg:flex-row md:gap-3 pt-[100px] pb-16'>
                <div className='w-full  md:w-2/3 '>
                <div className={` w-[100%] md:w-[100%]   rounded-lg shadow-2xl `}>
                {checkLang === 'eng' ? (
                     <div class={`w-full justify-center   mx-auto md:w-full grid pt-[100px]`}>

                     <div class={`${darkMode ? "bg-darkBg text-lightText" : "bg-lightBg text-darkText"}  py-8 px-5 text-center rounded-md shadow-lg  flex flex-col gap-3`}>
                         <div className={`${darkMode ? "bg-lightBg text-darkText" : "bg-gray-700 text-lightText "} flex flex-row rounded mx-5 gap-3  items-center justify-center md:justify-center`}>
                         <h2 class="text-sm md:text-md  ">English Name:</h2>
                         <span className='ml-3   font-bold text-xl'>{ayah.surah.englishName}</span>
                         </div>
                         <div className={`${darkMode ? "bg-lightBg text-darkText" : "bg-gray-700 text-lightText "} flex flex-row	 rounded mx-5 gap-3  items-center justify-center md:justify-center`}>
                         <h2 class="text-sm md:text-md  ">Transtation Name:</h2>
                         <span className='ml-3   font-bold text-xl'>{ayah.surah.englishNameTranslation}</span>
                         </div>
                         <div className={`${darkMode ? "bg-lightBg text-darkText" : "bg-gray-700 text-lightText "} flex flex-row  rounded mx-5 	gap-3  items-center justify-center md:justify-center`}>
                         <h2 class="text-sm md:text-md  ">Surah's Number:</h2>
                         <span className='ml-3   font-bold text-xl'>{ayah.surah.numberInQuran}</span>
                         </div>



                         <p class={`${darkMode ? "bg-lightBg text-darkText" : " text-darkText "} capitalize text-xl  rounded bold p-3`}>&laquo;{ayah.frenshContent}&raquo;</p>
                         <span class={`${darkMode ? "bg-lightBg text-darkText" : "bg-gray-700 text-lightText "} px-1 flex items-center  rounded   border   pr-2 justify-center mx-auto text-sm md:text-md `}>
                         Number of Versets:
                          {' '+ayah.verseNumber}
                          </span>
                         <div className='flex flex-row gap-2  items-center mx-auto justify-center'>
                         <h3>Revilation Type :</h3>
                         <span class={`${darkMode ? "bg-lightBg text-darkText" : "bg-gray-700 text-lightText "} border rounded-full px-2   justify-center mx-auto `}>{ayah.revelationType}</span>
                         </div>
                       <div className="mx-auto ">
                               <audio controls>
                                   <source   src={ayah.audio} type="audio/mp3" />
                               </audio>
                           </div>
                           <Link href={`/quran/${ayah.surah.id}/full-surah`} class="rounded-md bg-gradient-to-r from-orangeBg via-indigo-500 to-orangeBg text-xl text-white pt-3 pb-4 px-8 inline">
                           Full Surah
                           </Link>
                       </div>
                 </div>
                ) : checkLang === 'ar' ? (
                    <div class={`w-full justify-center   mx-auto md:w-full grid pt-[100px]`}>
                    {/* <div class="bg-gradient-to-r from-blue-400 to-indigo-500 rounded-2xl text-white p-4 text-center h-full md:w-full">
                        <h1 class="text-xl ">

                            {ayah.surah.arabicName}</h1>
                        <p class="text-lg">
                        {ayah.verseNumber}
                        </p>
                    </div> */}
                    <div class={`${darkMode ? "bg-darkBg text-lightText" : "bg-lightBg text-darkText"}  py-8 px-5 text-center rounded-md shadow-lg  flex flex-col gap-3`}>
                        <div className={`${darkMode ? "bg-lightBg text-darkText" : "bg-gray-700 text-lightText "} flex flex-row-reverse	 rounded mx-5 gap-3  items-center justify-center md:justify-center`}>
                        <h2 class="text-sm md:text-md  ">: اسم السورة</h2>
                        <span className='ml-3   font-bold text-xl'>{ayah.surah.arabicName}</span>
                        </div>
                        <div className={`${darkMode ? "bg-lightBg text-darkText" : "bg-gray-700 text-lightText "} flex flex-row-reverse  rounded mx-5 	gap-3  items-center justify-center md:justify-center`}>
                        <h2 class="text-sm md:text-md  ">: رقم السورة</h2>
                        <span className='ml-3   font-bold text-xl'>{ayah.surah.numberInQuran}</span>
                        </div>
                        <div className={`${darkMode ? "bg-lightBg text-darkText" : "bg-gray-700 text-lightText "} flex flex-row-reverse  rounded mx-5 	gap-3  items-center justify-center md:justify-center`}>
                        <h2 class="text-sm md:text-md  ">: رقم الآية</h2>
                        <span className='ml-3   font-bold text-xl'>{ayah.surah.versesNumber}</span>
                        </div>


                        <p class={`${darkMode ? "bg-lightBg text-darkText" : " text-darkText "} capitalize text-xl  rounded bold p-3`}>&laquo;{ayah.content}&raquo;</p>
                        <span class={`${darkMode ? "bg-lightBg text-darkText" : "bg-gray-700 text-lightText "} flex items-center  rounded   border  w-24 pr-2 justify-center mx-auto text-sm md:text-md `}>
                        عدد الآيات :
                         {' '+ayah.verseNumber}
                         </span>
                        <div className='flex flex-row-reverse gap-2  items-center mx-auto justify-center'>
                        <h3>: مكية او مدنية</h3>
                        <span class={`${darkMode ? "bg-lightBg text-darkText" : "bg-gray-700 text-lightText "} border rounded-full px-2   justify-center mx-auto `}>{ayah.revelationType === 'meccan' ? 'مكية' : 'مدنية'}</span>
                        </div>
                      <div className="mx-auto ">
                              <audio controls>
                                  <source   src={ayah.audio} type="audio/mp3" />
                              </audio>
                          </div>
                          <Link href={`/quran/${ayah.surah.id}/full-surah`} class="rounded-md bg-gradient-to-r from-orangeBg via-indigo-500 to-orangeBg text-xl text-white pt-3 pb-4 px-8 inline">
                              السورة كاملة
                          </Link>
                      </div>
                </div>
                ) : checkLang === 'fr' ? (

                <div class={`w-full justify-center   mx-auto md:w-full grid pt-[100px]`}>

                    <div class={`${darkMode ? "bg-darkBg text-lightText" : "bg-lightBg text-darkText"}  py-8 px-5 text-center rounded-md shadow-lg  flex flex-col gap-3`}>
                        <div className={`${darkMode ? "bg-lightBg text-darkText" : "bg-gray-700 text-lightText "} flex flex-row rounded mx-5 gap-3  items-center justify-center md:justify-center`}>
                        <h2 class="text-sm md:text-md  ">Nom en Frannçais:</h2>
                        <span className='ml-3   font-bold text-xl'>{ayah.surah.englishName}</span>
                        </div>
                        <div className={`${darkMode ? "bg-lightBg text-darkText" : "bg-gray-700 text-lightText "} flex flex-row	 rounded mx-5 gap-3  items-center justify-center md:justify-center`}>
                        <h2 class="text-sm md:text-md  ">Nom traduit en Français:</h2>
                        <span className='ml-3   font-bold text-xl'>{ayah.surah.frenshNameTranslation}</span>
                        </div>
                        <div className={`${darkMode ? "bg-lightBg text-darkText" : "bg-gray-700 text-lightText "} flex flex-row  rounded mx-5 	gap-3  items-center justify-center md:justify-center`}>
                        <h2 class="text-sm md:text-md  ">Numéro de Surah:</h2>
                        <span className='ml-3   font-bold text-xl'>{ayah.surah.numberInQuran}</span>
                        </div>



                        <p class={`${darkMode ? "bg-lightBg text-darkText" : " text-darkText "} capitalize text-xl  rounded bold p-3`}>&laquo;{ayah.frenshContent}&raquo;</p>
                        <span class={`${darkMode ? "bg-lightBg text-darkText" : "bg-gray-700 text-lightText "} px-1 flex items-center  rounded   border   pr-2 justify-center mx-auto text-sm md:text-md `}>
                        Nombre des Versets:
                         {' '+ayah.verseNumber}
                         </span>
                        <div className='flex flex-row gap-2  items-center mx-auto justify-center'>
                        <h3>Type de Révelation :</h3>
                        <span class={`${darkMode ? "bg-lightBg text-darkText" : "bg-gray-700 text-lightText "} border rounded-full px-2   justify-center mx-auto `}>{ayah.revelationType}</span>
                        </div>
                      <div className="mx-auto ">
                              <audio controls>
                                  <source   src={ayah.audio} type="audio/mp3" />
                              </audio>
                          </div>
                          <Link href={`/quran/${ayah.surah.id}/full-surah`} class="rounded-md bg-gradient-to-r from-orangeBg via-indigo-500 to-orangeBg text-xl text-white pt-3 pb-4 px-8 inline">
                          Surah Compléte
                          </Link>
                      </div>
                </div>
                ) : ''}

              </div>
                </div>
               <div className={`${darkMode ? 'bg-darkBg' : 'bg-lightBg'} rounded-md  md:w-1/3 md:h-auto  md:mt-[100px]`}>
                <ul className='grid md:grid-cols-3 gap-3 text-center p-3'>
                    {/* {surahs.map((surah,i) =>
                        checkLang === 'eng' ? (
                            <li key={i} className={`${darkMode ? 'bg-lightBg text-darkText' : 'bg-darkBg text-lightText'} p-1 rounded`}><Link className='text-sm' href={`/quran/${surah.id}/surah`}>{surah.englishName}</Link></li>
                        ) : checkLang === 'fr' ? (
                            <li key={i} className={`${darkMode ? 'bg-lightBg text-darkText' : 'bg-darkBg text-lightText'} p-1 rounded`}><Link className='text-sm' href={`/quran/${surah.id}/surah`}>{surah.frenshNameTranslation}</Link></li>
                        ) : checkLang === 'ar' ? (
                            <li key={i} className={`${darkMode ? 'bg-lightBg text-darkText' : 'bg-darkBg text-lightText'} p-1 rounded`}><Link className='text-sm' href={`/quran/${surah.id}/surah`}>{surah.arabicName}</Link></li>
                        ) : null

                    //  (

                    //     <li className={`${darkMode ? 'bg-lightBg text-darkText' : 'bg-darkBg text-lightText'} p-1 rounded`}><Link href={`/quran/${ayah.id}/full-surah`}>{surah.arabicName}</Link></li>
                    // ))}
                )} */}
                </ul>
               </div>
                </div>


            </div>

          </LayoutApp>
      </React.Fragment>
  );
}

export default IndividualQuran
