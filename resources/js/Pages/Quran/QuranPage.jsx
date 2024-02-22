import SurahCard from '@/Components/SurahCard';
import LayoutApp from '@/Layout/LayoutApp'
import { Link } from "@inertiajs/inertia-react";
import React, { useEffect } from 'react'

const QuranPage = ({surahs}) => {
    useEffect(() => {
        console.log(surahs);
    }, [surahs])


  return (
    <>
    <LayoutApp>
    <div className='my-[200px] w-[80%] mx-auto text-darkText '>
        <h2>QuranPage</h2>
        <div className='grid  xl:grid-cols-3 gap-7  '>
            {surahs.map((surah, i) => (
                <Link href={`/quran/surah/${surah.id}`}>
                <SurahCard
                surahNumber={surah.numberInQuran}
                englishName={surah.englishName}
                translatedName={surah.englishNameTranslation}
                arabicName={surah.arabicName}
                versetsLength={surah.versesNumber}

                 /></Link>

            ))}

        </div>
    </div>
    </LayoutApp>
    </>

  )
}

export default QuranPage
