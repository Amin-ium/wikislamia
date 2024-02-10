import CheckedRadio from '@/Components/CheckedRadio';
import SearchbarAr from '@/Components/SearchBareQuran/SearchbarAr';
import SearchbarEng from '@/Components/SearchBareQuran/SearchbarEng';
import Searchbarfr from '@/Components/SearchBareQuran/SearchbarFr';
import { DarkModeContext } from '@/Context/DarkModeContext';
import { ScrollProvider } from '@/Context/ScrollContext';
import { useSearchBarContext } from '@/Context/SearchBarContext';
import LayoutApp from '@/Layout/LayoutApp';
import React, { useContext, useEffect, useRef, useState } from 'react'
import headerImgDark from '../../../../public/assets/publicImages/imgDark.svg'
import headerImgLight from '../../../../public/assets/publicImages/OBJECTS.svg'
import { FaAngleDoubleLeft, FaAngleDoubleRight  } from "react-icons/fa";
import AudioPlayer from '@/Components/AudioPlayer';


const Results = ({results, verses}) => {
    const { check, setCheck } = useSearchBarContext();
    const { darkMode } = useContext(DarkModeContext);



    useEffect(() => {
        console.log(results);
    }, [results])

    // const play = (audio) => {
    //     audio = new Audio(audio);
    //     audio.play();
    // }



    const [currentlyPlayingIndex, setCurrentlyPlayingIndex] = useState(null);

  const handlePlay = (index) => {
    setCurrentlyPlayingIndex(index);
  };

  const handlePause = () => {
    setCurrentlyPlayingIndex(null);
  };

  return (
        <ScrollProvider>
        <LayoutApp>
        <section  className={`${ darkMode ? "border-b-[1px] border-[#f1f1f125] " : "border-b-[1px] border-[#28282825]"} w-[100%] h-auto homeBg pb-15`}>
        <div className='w-[100%]   pb-[100px] '>
       <div className=' relative z-9 w-[90%]  mx-auto flex flex-col justify-center  pt-[140px] lg:pt-[10px] '>
       <img className={`${darkMode ? "w-[300px] h-[150px]  md:w-[400px] md:h-[200px] lg:w-[400px] lg:h-[200px] -mt-[100px] sm:-mt-[100px]  md:-mt-[100px] lg:-mt-0 mx-auto"
        : "w-[300px] h-[150px]  md:w-[400px] md:h-[200px] lg:w-[400px] xl:w-[500px] lg:h-[200px] xl:h-[200px] -mt-[100px] sm:-mt-[100px]  md:-mt-[100px]  lg:-mt-0 mx-auto"} `}
        src={darkMode ? headerImgLight : headerImgDark} alt="" />
            <CheckedRadio />
            <SearchbarEng verses={verses} />



            </div>
            <div className='flex xl:flex-col gap-1 w-[70%] mx-auto  mt-5'>
      {results.map((result, i) => (
        <div key={i} className='border flex flex-col p-4  '>
          {check === 'eng' ? (
            <div className='flex flex-row justify-between items-center bg-grayBg rounded-lg text-lightText p-4'>
              <div>
                <h3>Surah Name:<b>{' ' + result.surah.englishName}</b></h3>
                <h3>Verst Number:<b>{' ' + result.verseNumber}</b></h3>
                <div className='flex flex-row xl:items-center xl:align-middle gap-1'>
                  <FaAngleDoubleLeft size={18} />
                  <p className='font-bold'>{result.englishContent}</p>
                  <FaAngleDoubleRight size={18} />
                </div>
              </div>
              <div>
                <AudioPlayer
                  audioList={result.audio}
                  index={i}
                  isPlaying={currentlyPlayingIndex === i}
                  onPlay={handlePlay}
                  onPause={handlePause}
                />
              </div>
            </div>
          ) : check === 'fr' ? (
            <div>
              <p>{result.frenshContent}</p>
              <h3>{result.surah.frenshNameTranslation}</h3>
            </div>
          ) : check === 'ar' ? (
            <div>
              <p>{result.content}</p>
              <h3>{result.surah.arabicName}</h3>
            </div>
          ) : null}
        </div>
      ))}
    </div>
            </div>
            </section>
        </LayoutApp>
        </ScrollProvider>
    )
}

export default Results
