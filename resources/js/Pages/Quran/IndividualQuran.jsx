import React, { useContext, useEffect, useState } from 'react'

import { Head, Link } from '@inertiajs/inertia-react';



import LayoutApp from '@/Layout/LayoutApp';
import { DarkModeContext } from '@/Context/DarkModeContext';
import { useSearchBarContext } from '@/Context/SearchBarContext';
import AudioPlayer from '../../Components/AudioPlayer';
import SurahAudioPlayer from '@/Components/SurahAudioPLayer';
import PaginationLinks from '@/Components/PaginationLinks';

const IndividualQuran = ({ayah, surahs}) => {

    const {darkMode} = useContext(DarkModeContext);
    const { check } = useSearchBarContext();

    const [checkLang, setCheckLang] = useState('')


      useEffect(() => {
        (async () => {
            setCheckLang(await check)
          })();
      }, [])

      console.log(checkLang);
  return (
      <React.Fragment>
          <Head>
              <title>Individual-Quran</title>
          </Head>
          <LayoutApp>
            <div className={`${darkMode ? "bg-darkBg" : "bg-lightBg"} bg-homeBg bg-cover bg-center `}>
                <div className='w-[90%]  md:w-[70%] mx-auto flex flex-col gap-1 lg:flex-row md:gap-3 pt-[100px] pb-5'>
                <div className='w-full  md:w-[65%] '>
                <div className={` w-[100%] md:w-[100%]   rounded-lg shadow-2xl `}>
                {check === 'eng' ? (
                     <div class={`w-full justify-center   mx-auto md:w-full grid pt-[10px]`}>
                        <p className='text-center p-3'><span className='font-bold'>{ayah.surah.englishName}</span> is the <span className='font-bold'>{ayah.surah.numberInQuran}st</span> chapter of the Qur’an. The surah titled in English means “<span className='font-bold'>{ayah.surah.englishNameTranslation}</span>” and it consists of <span className='font-bold'>{ayah.surah.versesNumber}</span> verses, and it's <span className='font-bold'>{ayah.surah.revelationType}</span> chapiter.</p>
                     <div class={`${darkMode ? " text-lightText" : "bg-lightBg text-darkText"}  py-8 px-5 text-center rounded-md shadow-lg  flex flex-col gap-3`}>
                         <div className={`${darkMode ? " text-lightText" : " text-darkText "} flex flex-row rounded shadow-lg shadow-purple-900 mx-5 gap-3  items-center justify-center md:justify-center`}>
                         <h2 class="text-sm md:text-md  ">English Name:</h2>
                         <span className='ml-3   font-bold text-xl'>{ayah.surah.englishName}</span>
                         </div>
                         <div className={`${darkMode ? " text-lightText" : " text-darkText "} flex flex-row	 rounded shadow-lg shadow-purple-900 mx-5 gap-3  items-center justify-center md:justify-center`}>
                         <h2 class="text-sm md:text-md  ">Transtation Name:</h2>
                         <span className='ml-3   font-bold text-xl'>{ayah.surah.englishNameTranslation}</span>
                         </div>
                         <div className={`${darkMode ? " text-lightText" : " text-darkText "} flex flex-row  rounded shadow-lg shadow-purple-900 mx-5 	gap-3  items-center justify-center md:justify-center`}>
                         <h2 class="text-sm md:text-md  ">Surah's Number:</h2>
                         <span className='ml-3   font-bold text-xl'>{ayah.surah.numberInQuran}</span>
                         </div>



                         <p class={`${darkMode ? " text-lightText" : " text-darkText "} shadow-lg shadow-purple-900 capitalize  text-xl  rounded bold p-3`}>&laquo;{ayah.frenshContent}&raquo;</p>
                         <span class={`${darkMode ? " text-lightText" : " text-darkText "} shadow-lg shadow-purple-900 p-1 flex items-center  rounded   border   pr-2 justify-center mx-auto text-sm md:text-md `}>
                         Number of Versets:
                          {' '+ayah.verseNumber}
                          </span>
                         <div className='flex flex-row gap-2  items-center mx-auto justify-center shadow-lg shadow-purple-900 p-1'>
                         <h3>Revilation Type :</h3>
                         <span class={`${darkMode ? " text-lightText" : " text-darkText "} font-bold border rounded-full px-2   justify-center mx-auto `}>{ayah.revelationType}</span>
                         </div>
                       <div className="w-2/3 mx-auto rounded-xl shadow-lg shadow-purple-900 ">
                           <SurahAudioPlayer audioSrc={ayah.audio}    />
                           </div>
                           <Link href={`/quran/${ayah.surah.id}/full-surah`} class="rounded-md bg-gradient-to-r from-orangeBg via-indigo-500 to-orangeBg text-xl text-white pt-3 pb-4 px-8 inline">
                           Full Surah
                           </Link>
                       </div>
                 </div>
                ) : check === 'ar' ? (
                    <div class={`w-full justify-center   mx-auto md:w-full grid pt-[100px]`}>
                         <p  className='text-center p-3'><span className='font-bold'>{ayah.surah.arabicName}</span> هي السورة <span className='font-bold'>رقم {ayah.surah.numberInQuran} </span> من القرآن وهي سورة <span className='font-bold'>{ayah.surah.revelationType === 'meccan' ? "مكية" : "مدنية"} </span> وتتكون من <span className='font-bold'>{ayah.surah.versesNumber}</span> آيات</p>
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
                        <div className="w-2/3 mx-auto rounded-xl shadow-lg shadow-purple-900 ">
                            <SurahAudioPlayer audioSrc={ayah.audio}    />
                          </div>
                          <Link href={`/quran/${ayah.surah.id}/full-surah`} class="rounded-md bg-gradient-to-r from-orangeBg via-indigo-500 to-orangeBg text-xl text-white pt-3 pb-4 px-8 inline">
                              السورة كاملة
                          </Link>
                      </div>
                </div>
                ) : check === 'fr' ? (

                <div class={`w-full justify-center   mx-auto md:w-full grid pt-[100px]`}>
                    <p className='text-center p-3'><span className='font-bold'>{ayah.surah.englishName}</span> est la <span className='font-bold'>{ayah.surah.numberInQuran}er</span> chapitre du Coran. <span className='font-bold'>{ayah.surah.englishName}</span> intitulée en français signifie “<span className='font-bold'>{ayah.surah.frenshNameTranslation}</span>” et elle se compose de <span className='font-bold'>{ayah.surah.versesNumber}</span> versets, est c'est une chapitre <span className='font-bold'>{ayah.surah.revelationType}</span></p>

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
                        <div className="w-2/3 mx-auto rounded-xl shadow-lg shadow-purple-900 ">
                              {/* <audio controls  id='audio'>
                                  <source   src={ayah.audio} type="audio/mp3" />
                              </audio> */}
                              <SurahAudioPlayer audioSrc={ayah.audio}    />
                          </div>
                          <Link href={`/quran/${ayah.surah.id}/full-surah`} class="rounded-md bg-gradient-to-r from-orangeBg via-indigo-500 to-orangeBg text-xl text-white pt-3 pb-4 px-8 inline">
                          Surah Compléte
                          </Link>
                      </div>
                </div>
                ) : ''}

              </div>
                </div>
               <div className={`${darkMode ? 'bg-darkBg' : 'bg-lightBg'} rounded-md  md:w-[35%] h-full  shadow-lg shadow-purple-900`}>
                <ul className='text-center'>
                <PaginationLinks data={surahs} />
                    {/* {surahs.map((surah,i) =>
                        check === 'eng' ? (

                            <PaginationLinks link={surah} />
                        ) : check === 'fr' ? (
                            <li key={i} className={`${darkMode ? 'bg-lightBg text-darkText' : 'bg-darkText text-lightText'} p-1 rounded-lg shadow-purple-900 text-xs shadow-lg`}><Link className='text-xs' href={`/quran/${surah.id}/surah`}>{surah.frenshNameTranslation}</Link></li>
                        ) : check === 'ar' ? (
                            <li key={i} className={`${darkMode ? 'bg-lightBg text-darkText' : 'bg-darkText text-lightText'} p-1 rounded-lg shadow-purple-900 text-xs shadow-lg`}><Link className='text-xs' href={`/quran/${surah.id}/surah`}>{surah.arabicName}</Link></li>
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
