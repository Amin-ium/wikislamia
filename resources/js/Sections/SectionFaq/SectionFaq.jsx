import Faq from '@/Components/Faq/Faq'
import FaqBanner from '@/Components/Faq/FaqBanner'
import React from 'react'

const SectionFaq = ({quiz}) => {
  return (
    <section className='w-full'>
        <div className='w-[90%] mx-auto flex flex-row items-center'>
            <FaqBanner/>
            <Faq quiz={quiz} />
        </div>
    </section>
  )
}

export default SectionFaq
