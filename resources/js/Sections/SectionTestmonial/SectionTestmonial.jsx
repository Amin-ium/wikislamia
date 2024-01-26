import React from 'react'
import TestmonialCard from '@/Components/TestmonialCard'
import tester from '../../../../public/assets/publicImages/testimonialTwo.png'
import tester1 from '../../../../public/assets/publicImages/testimonialTwo.png'
import tester2 from '../../../../public/assets/publicImages/testimonialTwo.png'


const SectionTestmonial = () => {
    const testmonial = [
        {src:tester, alt:'tester', name:'John Doe', job:'Team Manager', text:"Good website with noce design, it’s help to undestand islam and  Muslims people, Thanks  ..."},
        {src:tester1, alt:'tester1', name:'Julie Wine', job:'It Manager', text:"Good website with noce design, it’s help to undestand islam and  Muslims people, Thanks  ..."},
        {src:tester2, alt:'tester2', name:'Mark Daniel', job:'Web Master Manager', text:"Good website with noce design, it’s help to undestand islam and  Muslims people, Thanks  ..."},
    ]
  return (
    <section className='w-[100%] my-20'>
        <div className='w-[90%] mx-auto flex flex-row gap-20 justify-center [&>*:nth-child(2)]:mt-[40px]'>
            {testmonial.map((test,i) =>
             <TestmonialCard
                src={test.src}
                alt={test.alt}
                text={test.text}
                name={test.name}
                job={test.job}
             />)}

        </div>
    </section>
  )
}

export default SectionTestmonial
