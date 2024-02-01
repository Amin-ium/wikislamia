import { ScrollProvider } from '@/Context/ScrollContext';
import { useSearchBarContext } from '@/Context/SearchBarContext';
import LayoutApp from '@/Layout/LayoutApp';
import React, { useEffect } from 'react'

const Results = ({results}) => {
    const { check, setCheck } = useSearchBarContext();
    useEffect(() => {
        console.log(results);
    }, [results])


  return (
        <ScrollProvider>
        <LayoutApp>
            <div className='flex flex-col justify-center'>
                {results?.map((result,i) => (
                    <div className='border flex flex-col text-center gap-3'>
                        {check === "eng" ? (
                            <h1 key={i}>{result.englishContent}</h1>
                        ): check === "fr" ? (
                            <h1 key={i}>{result.frenshContent}</h1>
                        ): check === 'ar' ?? (
                            <h1 key={i}>{result.content}</h1>
                        )}



                    </div>
                ))}
            </div>
        </LayoutApp>
        </ScrollProvider>
    )
}

export default Results
