import Faq from '@/Components/Faq/Faq'
import FaqBanner from '@/Components/Faq/FaqBanner'
import { useScrollContext } from '@/Context/ScrollContext';
import React from 'react'

const SectionFaq = ({quiz, sectionId}) => {
    const { currentSection } = useScrollContext();
  return (
    <section id={`section${sectionId}`} className='w-full'>
        <div className='w-[90%] mx-auto flex flex-row items-center'>
            <FaqBanner/>
            <Faq quiz={quiz} />
        </div>
    </section>
  )
}

export default SectionFaq
