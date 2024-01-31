import Faq from '@/Components/Faq/Faq'
import FaqBanner from '@/Components/Faq/FaqBanner'
import { DarkModeContext } from '@/Context/DarkModeContext';
import { useScroll } from '@/Context/ScrollContext';
import React, { useContext } from 'react'

const SectionFaq = ({quiz, sectionId}) => {
    const { sectionRefs } = useScroll();
    const { darkMode } = useContext(DarkModeContext);
  return (
    <section ref={sectionRefs.section3} className={`${ darkMode ? "border-b-[1px] border-[#f1f1f125] " : "border-b-[1px] border-[#28282825]"} w-full py-[50px]`}>
        <div className='w-[90%] mx-auto flex flex-col xl:flex-row items-center'>
            <FaqBanner/>
            <Faq quiz={quiz} />
        </div>
    </section>
  )
}

export default SectionFaq
