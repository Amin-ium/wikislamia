import React, { Fragment, useContext } from 'react'

import { Head, Link } from '@inertiajs/inertia-react';



import { FaGalacticRepublic } from 'react-icons/fa';
// import asset from '../../../css/imgs/asset.png';
import { FaKaaba } from "react-icons/fa";
// import SubFooter from '@/Components/SubFooter';
import LayoutApp from '@/Layout/LayoutApp';
import SubFooter from '@/Components/SubFooter/SubFooter';
import { DarkModeContext } from '@/Context/DarkModeContext';
import { useSearchBarContext } from '@/Context/SearchBarContext';

const Fsurah = ({surah}) => {

    const {darkMode} = useContext(DarkModeContext);
    const { check } = useSearchBarContext();


  return (
      <React.Fragment>
          <Head>
              <title>Individual-Quran</title>
          </Head>
          <LayoutApp>
            {/* <Section1/> */}
            {/* <section id='section1' className={`bg-quranBg h-[400px] bg-cover bg-center
         flex justify-center `}></section> */}


    <div className={`p-16 `}>
    <div className={`${darkMode ? "bg-grayBg text-lightText " : "bg-lightBg text-darkText"} rounded-md shadow-2xl md:w-[70%] mx-auto mt-[150px] p-5  `}>
        {/* <img className='md:w-full ' src={asset} alt="" /> */}
        {check === 'ar' ? (
           <div className='md:w-full flex md:flex-col'>

           <div className={`${darkMode ? "border-lightBg  " : "border-darkBg"} flex md:flex-row items-center md:justify-center mb-5 border-b-[1px]  mt-[100px]  mx-[250px]`}>


               <FaKaaba className='-mt-20 mx-5' size={30} />
           <h2 className='my-5 -mt-[100px] text-6xl bold text-center pt-5 font-quranTitleFont '>{surah.arabicName}</h2>
           <FaKaaba className='-mt-20 mx-5' size={30} />
           </div>

           {/* <div className="flex  md:justify-center md:w-full mx-auto ">
               <audio controls>
                   <source   src={surah.surahaudio.audio} type="audio/mp3" />
               </audio>
           </div> */}

           <ul className='mt-3 flex flex-col md:flex-col   md:justify-center md:w-[80%] mx-auto'>
           <div className='flex flex-row md:flex-row md:justify-center  align-middle items-center text-xl mb-3'>
                   <FaGalacticRepublic className='text-center ' />

                   <li  className='m-1 text-2xl' >بسم الله الرحمان الرحيم</li>
                   <FaGalacticRepublic className='text-center' />
                   </div>
                   <div className='mt-3 flex flex-row md:flex-row-reverse  md:flex-wrap  md:w-[80%] mx-auto'>
           {surah.ayahs.map((ayah,i) => (
               <div className='flex flex-col md:flex-row md:align-middle mb-3'>

                   <div className='flex flex-row md:flex-row '>
                   {/* <FaGalacticRepublic className='text-center ' /> */}

                   <li  className='mx-1 text-2xl text-right' key={i}>{ayah.content+' '+ '('+(i+1)+')'}</li>
                   {/* <FaGalacticRepublic className='text-center' /> */}
                   </div>


               </div>



           ))}
           </div>
           </ul>

           </div>
        ) : check === 'fr' ? (
            <div className='md:w-full flex md:flex-col'>

           <div className={`${darkMode ? "border-lightBg  " : "border-darkBg"} flex md:flex-row items-center md:justify-center mb-5 border-b-[1px]  mx-[250px]`}>


               <FaKaaba className='-mt-20 mx-5' size={30} />
           <h2 className='my-5 -mt-[100px] text-6xl bold text-center pt-5 font-quranTitleFont '>{surah.arabicName}</h2>
           <FaKaaba className='-mt-20 mx-5' size={30} />
           </div>

           <div className="flex  md:justify-center md:w-full mx-auto ">
               <audio controls>
                   <source   src={surah.surahaudio.audio} type="audio/mp3" />
               </audio>
           </div>

           <ul className='mt-3 flex flex-col md:flex-col   md:justify-center md:w-[100%] mx-auto'>
           <div className='flex flex-row md:flex-row md:justify-center text-center align-middle items-center text-xl mb-3'>
                   <FaGalacticRepublic className='text-center ' />

                   <li  className='m-1' >Au nom du Dieu le plus miséricordieux, le plus miséricordieux</li>
                   <FaGalacticRepublic className='text-center' />
                   </div>
                   <div className='mt-3 flex flex-row md:flex-row md:flex-wrap md:justify-center  md:w-[100%] '>
           {surah.ayahs.map((ayah,i) => (
               <div className='flex flex-col md:flex-row-reverse md:align-middle items-center  mb-1'>
                   <span className={`${darkMode ? "bg-lightBg text-darkText " : "bg-darkBg text-lightText"} text-md px-2   rounded-full`}>{i+1}</span>
                   <div className='flex align-middle items-center'>
                   {/* <FaGalacticRepublic className='text-center ' /> */}

                   <li  className='m-1 text-xl' key={i}>{ayah.frenshContent}</li>
                   {/* <FaGalacticRepublic className='text-center' /> */}
                   </div>


               </div>



           ))}
           </div>
           </ul>

           </div>

        ) : check === 'eng' ? (
            <div className='md:w-full flex md:flex-col'>

            <div className={`${darkMode ? "border-lightBg  " : "border-darkBg"} flex md:flex-row items-center md:justify-center mb-5 border-b-[1px]  mx-[250px]`}>


                <FaKaaba className='-mt-20 mx-5' size={30} />
            <h2 className='my-5 -mt-[100px] text-6xl bold text-center pt-5 font-quranTitleFont '>{surah.arabicName}</h2>
            <FaKaaba className='-mt-20 mx-5' size={30} />
            </div>

            <div className="flex  md:justify-center md:w-full mx-auto ">
                <audio controls>
                    <source   src={surah.surahaudio.audio} type="audio/mp3" />
                </audio>
            </div>

            <ul className='mt-3 flex flex-col md:flex-col   md:justify-center md:w-[100%] mx-auto'>
            <div className='flex flex-row md:flex-row md:justify-center text-center align-middle items-center text-xl mb-3'>
                    <FaGalacticRepublic className='text-center ' />

                    <li  className='m-1' >In the name of god most gracious most merciful</li>
                    <FaGalacticRepublic className='text-center' />
                    </div>
                    <div className='mt-3 flex flex-row md:flex-row md:flex-wrap md:justify-center  md:w-[100%] '>
            {surah.ayahs.map((ayah,i) => (
                <div className='flex flex-col md:flex-row-reverse md:align-middle items-center  mb-1'>
                    <span className={`${darkMode ? "bg-lightBg text-darkText " : "bg-darkBg text-lightText"} text-md px-2   rounded-full`}>{i+1}</span>
                    <div className='flex align-middle items-center'>
                    {/* <FaGalacticRepublic className='text-center ' /> */}

                    <li  className='m-1 text-xl' key={i}>{ayah.englishContent}</li>
                    {/* <FaGalacticRepublic className='text-center' /> */}
                    </div>


                </div>



            ))}
            </div>
            </ul>

            </div>
        ) : null}

        {check === 'ar' ? (
             <div className='flex md:justify-center mt-10'>
             <span>[{surah.arabicName}]</span>
             <span>-[{surah.versesNumber+' '+'آيات '}]-</span>
             <span>[{surah.revelationType === 'meccan' ? 'مكية' : 'مدنية'}]</span>
         </div>
        ) : check === 'fr' ? (
            <div className='flex md:justify-center mt-10'>
            <span>[{surah.frenshNameTranslation}]</span>
            <span>-[{surah.versesNumber+' verses'}]-</span>
            <span>[{surah.revelationType}]</span>
        </div>
        ) : check === 'eng' ? (
            <div className='flex md:justify-center  mt-10'>
            <span>[{surah.englishName}]</span>
            <span>-[{surah.versesNumber+' verses'}]-</span>
            <span>[{surah.revelationType}]</span>
        </div>
        ) : null}


            </div>
             </div>
                {/* <div className={`${darkMode ? "bg-darkBg text-lightText" : "bg-lightBg text-darkText"} w-[90%]  md:w-[70%] mx-auto flex flex-col gap-1 lg:flex-col md:gap-3 absolute top-[150px] left-1/2 -translate-x-1/2 pb-16`}>
                <h2 className='my-5 text-4xl bold text-center pt-5'>{fullSurah[0].surah.arabicName}</h2>
        <ul className=''>
        {fullSurah.map((ayah,i) => (
            <div className='flex flex-col md:flex-col md:justify-center text-center items-center'>
                <span className={`${darkMode ? "bg-lightBg text-darkText " : "bg-darkBg text-lightText"} px-3 py-1 rounded-full`}>{i+1}</span>
                <div className='flex flex-row md:flex-row align-middle items-center'>
                <FaGalacticRepublic className='text-center' />

                <li  className='mx-1' key={i}>{ayah.content}</li>
                <FaGalacticRepublic className='text-center' />
                </div>


            </div>

        ))}
        </ul>
                </div> */}

         <SubFooter/>

          </LayoutApp>
      </React.Fragment>
  );
}

export default Fsurah
