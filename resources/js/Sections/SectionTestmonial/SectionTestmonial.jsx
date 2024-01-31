import React from 'react'
import TestmonialCard from '@/Components/TestmonialCard'
import tester from '../../../../public/assets/publicImages/testimonialTwo.png'
import tester1 from '../../../../public/assets/publicImages/testimonialTwo.png'
import tester2 from '../../../../public/assets/publicImages/testimonialTwo.png'
import illu1 from '../../../../public/assets/publicImages/RoundBigCube.svg'
import illu2 from '../../../../public/assets/publicImages/RoundSmallCube.svg'
import illu3 from '../../../../public/assets/publicImages/Sphere.svg'
import rocket from '../../../../public/assets/publicImages/rocket.svg'
import { useScroll } from '@/Context/ScrollContext'


const SectionTestmonial = ({sectionId}) => {
    const { sectionRefs } = useScroll();
    const testmonial = [
        {src:tester, alt:'tester', name:'John Doe', job:'Team Manager', text:"Good website with noce design, it’s help to undestand islam and  Muslims people, Thanks  ..."},
        {src:tester1, alt:'tester1', name:'Julie Wine', job:'It Manager', text:"Good website with noce design, it’s help to undestand islam and  Muslims people, Thanks  ..."},
        {src:tester2, alt:'tester2', name:'Mark Daniel', job:'Web Master Manager', text:"Good website with noce design, it’s help to undestand islam and  Muslims people, Thanks  ..."},
    ]
  return (
    <section ref={sectionRefs.section5} className='w-[100%] py-20 relative'>
        <img src={illu1} alt="illustartion" className='absolute right-0 top-0 z-32 h-[200px] w-[200px]' />
        <img src={rocket} alt="illustartion" className='absolute left-0 top-0 z-32 h-[200px] w-[200px]' />
        <div className='w-[90%] mx-auto flex flex-row gap-20 justify-center [&>*:nth-child(2)]:mt-[100px] relative z-29'>
            {testmonial.map((test,i) =>
             <TestmonialCard
                src={test.src}
                alt={test.alt}
                text={test.text}
                name={test.name}
                job={test.job}
             />)}

        </div>
        <img src={illu2} alt="illustartion" className='absolute left-0 bottom-[100px] z-32 h-[200px] w-[200px]' />
        <img src={illu3} alt="illustartion" className='absolute right-[500px] bottom-0 z-32 h-[200px] w-[200px]' />
    </section>
  )
}

export default SectionTestmonial
