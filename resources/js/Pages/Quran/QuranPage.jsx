import Pagination from '@/Components/Pagination';
import SurahCard from '@/Components/SurahCard';
import LayoutApp from '@/Layout/LayoutApp'
import { Head, Link, usePage } from "@inertiajs/inertia-react";

import React, { useContext, useEffect } from 'react'

import { useSearchBarContext } from '@/Context/SearchBarContext';
import { DarkModeContext } from '@/Context/DarkModeContext';
import QuranPageBanner from '@/Components/quran/QuranPageBanner';

const QuranPage = ({surahs, items, surahAudios}) => {

    const { check, setCheck } = useSearchBarContext();
    const { toggle, darkMode } = useContext(DarkModeContext);


    const { resultPrayer } = usePage().props;
console.log(Array(surahAudios));

  return (
    <>
    <LayoutApp>
    <Head>
              <title>Quran Page</title>
          </Head>
    <div className='my-[200px] w-[80%] mx-auto text-darkText '>
        <QuranPageBanner text={check === "ar" ? "يقال لصاحب القرآن: اقرأ، وارْقَ، ورتّل كما كنت ترتّل في الدنيا؛ فإن منزلتك عند آخر آية تقرؤها" : check === 'eng' ? 'It will said to the the reader of the Qur’an: Read, ascend, and recite as you recited in this world. Your status is at the last verse you recite' : check === 'fr' ? 'Il dira au lecteur du Coran : Lis, monte et récite comme tu l’as récité dans ce monde. Votre statut est au dernier verset que vous récitez' : 'يقال لصاحب القرآن: اقرأ، وارْقَ، ورتّل كما كنت ترتّل في الدنيا؛ فإن منزلتك عند آخر آية تقرؤها'} />

        <div className='  '>
             {/* {surahs.map((surah, i) => (
                <Link href={`/quran/surah/${surah.id}`}> */}
                    <Pagination Component={SurahCard} items={surahs}  />
                {/* </Link> */}

            {/* ))} */}

        </div>
    </div>
    </LayoutApp>
    </>

  )
}

export default QuranPage
