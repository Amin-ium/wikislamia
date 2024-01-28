import React from 'react'
import cards from "../../../public/assets/publicImages/cards.svg"
import darkLogoArabic from "../../../public/assets/publicImages/darkLogoArabic.svg"
import darkLogoFrench from "../../../public/assets/publicImages/Group 1261152956.svg"
import darkLogoEnglish from "../../../public/assets/publicImages/darkLogoEnglish.svg"
import lightLogoArabic from "../../../public/assets/publicImages/lightLogoArabic.svg"
import lightLogoFrench from "../../../public/assets/publicImages/lightLogoFrench.svg"
import lightLogoEnglish from "../../../public/assets/publicImages/lightLogoEnglish.svg"
import quran from "../../../public/assets/publicImages/Group.svg"
import { useSearchBarContext } from '@/Context/SearchBarContext'
import { useContext } from 'react'
import { DarkModeContext } from '@/Context/DarkModeContext'

const CardsBanner = () => {
    const { check, setCheck } = useSearchBarContext();
    const { darkMode } = useContext(DarkModeContext);
  return (
    <>
        <div className=' flex flex-col w-[90%] mx-auto '>
            <div className='w-full flex flex-row  xl:w-[90%]  lg:w-[80%] lg:mx-auto   mt-[50px] '>
                <div className='w-1/2 flex xl:flex-col '>
                    <div className='w-full xl:w-full flex   mx-auto  '>
                    <img src={check === 'eng' && darkMode ? lightLogoEnglish :
                        check === 'fr' && darkMode ? lightLogoFrench :
                        check === 'ar' && darkMode ? lightLogoArabic :
                        check === 'eng' && !darkMode ? darkLogoEnglish :
                        check === 'fr' && !darkMode ? darkLogoFrench :
                        check === 'ar' && !darkMode ? darkLogoArabic : null} alt="" className={`${check === 'ar' ? '' : ''} w-[100%] h-[100%] xl:w-[300px] xl:h-[150px] md:w-[300px] md:h-[200px] lg:w-[300px] lg:h-[200px]   mx-auto`} />

                    </div>

                </div>
                <div className='w-1/2  '>
                    <img src={cards} className=' w-[100%] h-[100%] xs:w-[300px] xs:h-[150px] sm:w-[300px] sm:h-[150px] xl:w-[400px] xl:h-[200px] md:w-[300px] md:h-[200px] lg:w-[300px] lg:h-[200px]  mx-auto' alt="" />
                </div>

            </div>
            <div className='w-[100%] lg:w-[70%] xl:w-[70%] mx-auto flex flex-col xl:mt-5'>

                    <p className={`${check === 'ar' ? 'text-center xl:text-right lg:text-right text-[16px] lg:text-[25px] xl:text-[25px]' : 'text-center text-[22px] lg:text-[2xl] xl:text-2xl'} ${darkMode ? 'text-lightText' : 'text-darkText'}  `}>
                        {check === 'eng' ? "“It will be said to the reciter of the Quran: «Read, ascend, and recite as you recited in this world, for your status is at the last verse you recite»" :
                        check === 'fr' ? "“Il sera dit au récitant du Coran: « Lis, monte et récite comme tu l'as récité dans ce monde, car ton statut est au dernier verset que tu récites»" :
                        check === 'ar' ? "“يقال لقارئ القرآن: «اقرأ وارتق ورتل كما كنت ترتل في الدنيا، فإن منزلتك عند آخر آية تقرؤها»" : null}
                    </p>
                    <h4 className={`lg:w-[300px] ${darkMode ? 'text-lightText' : 'text-darkText'} text-[12px] xl:text-[14px] xl:text-center mx-auto`}>{
                        check === 'eng' ? "Narrated by Abu Dawud al-Tirmidhi" :
                        check === 'fr' ? "Rapporté par Abou Daoud al-Tirmidhi" :
                        check === 'ar' ? "رواه الترمذي وأبوداوود" : null
                    }</h4>
                </div>

        </div>
        <img src={quran} alt="" className={`${check === 'ar' ? 'w-[50%] h-[50%] lg:-left-[300px]  -top-[10px] ' : 'w-[50%] h-[50%] lg:-left-[300px] -top-[10px] '} absolute  -left-[80px]   `} />
    </>
  )
}

export default CardsBanner
