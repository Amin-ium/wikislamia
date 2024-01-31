import React, { useContext } from 'react'
import TestmonialCard from '@/Components/TestmonialCard'
import tester from '../../../../public/assets/publicImages/testimonialTwo.png'
import tester1 from '../../../../public/assets/publicImages/testimonialTwo.png'
import tester2 from '../../../../public/assets/publicImages/testimonialTwo.png'
import illu1 from '../../../../public/assets/publicImages/RoundBigCube.svg'
import illu2 from '../../../../public/assets/publicImages/RoundSmallCube.svg'
import illu3 from '../../../../public/assets/publicImages/Sphere.svg'
import rocket from '../../../../public/assets/publicImages/rocket.svg'
import { useScroll } from '@/Context/ScrollContext'
import { DarkModeContext } from '@/Context/DarkModeContext'
import SectionTitle from '@/Components/SectionTitle'


const SectionTestmonial = ({sectionId}) => {
    const { sectionRefs } = useScroll();
    const { darkMode } = useContext(DarkModeContext);
    const testmonial = [
        {src:tester, alt:'tester', name:'John Doe', job:'Team Manager', text:"Good website with noce design, it’s help to undestand islam and  Muslims people, Thanks  ..."},
        {src:tester1, alt:'tester1', name:'Julie Wine', job:'It Manager', text:"Good website with noce design, it’s help to undestand islam and  Muslims people, Thanks  ..."},
        {src:tester2, alt:'tester2', name:'Mark Daniel', job:'Web Master Manager', text:"Good website with noce design, it’s help to undestand islam and  Muslims people, Thanks  ..."},
    ]
  return (
        <section ref={sectionRefs.section5} className={`${ darkMode ? "border-b-[1px] border-[#f1f1f125] " : "border-b-[1px] border-[#28282825]"} w-[100%] pt-[50px] pb-[100px] relative`}>
        <img src={illu1} alt="illustartion" className='absolute right-0 top-0 xl:top-0 z-32 h-[100px] xl:h-[200px] w-[100px] xl:w-[200px]' />
        <img src={rocket} alt="illustartion" className='absolute left-0 top-0 xl:top-0 z-32 h-[100px] xl:h-[200px] w-[100px] xl:w-[200px]' />
        <SectionTitle title="Testmonial" des="They trust us & We serve them"  />
        <div className='w-[90%] mx-auto flex flex-col gap-3 xl:flex-row xl:gap-20 justify-center xl:[&>*:nth-child(2)]:mt-[100px] relative z-29'>
            {testmonial.map((test,i) =>
             <TestmonialCard
                src={test.src}
                alt={test.alt}
                text={test.text}
                name={test.name}
                job={test.job}
             />)}

        </div>
        <img src={illu2} alt="illustartion" className='absolute left-0 bottom-[380px] xl:left-0 xl:bottom-[100px] z-32 h-[100px] xl:h-[200px] w-[100px] xl:w-[200px]' />
        <img src={illu3} alt="illustartion" className='absolute right-0 bottom-5 z-32 h-[100px] xl:h-[200px] w-[100px] xl:w-[200px]' />
    </section>
  )
}

export default SectionTestmonial
