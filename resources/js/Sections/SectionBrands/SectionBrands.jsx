import React from 'react'
import logo1 from '../../../../public/assets/publicImages/logos/ICDT_logo1.svg'
import logo2 from '../../../../public/assets/publicImages/logos/ICDT_logo2.svg'
import logo3 from '../../../../public/assets/publicImages/logos/ICDT_logo3.svg'
import logo4 from '../../../../public/assets/publicImages/logos/ICDT_logo4.svg'
import logo5 from '../../../../public/assets/publicImages/logos/ICDT_logo5.svg'
import logo6 from '../../../../public/assets/publicImages/logos/ICDT_logo1.svg'
import logo7 from '../../../../public/assets/publicImages/logos/ICDT_logo7.svg'
import logo8 from '../../../../public/assets/publicImages/logos/ICDT_logo8.svg'
import { useScroll } from '@/Context/ScrollContext'

const SectionBrands = () => {
    const { sectionRefs } = useScroll();
    const brands = [
        {src:logo1 , alt:'logo'},
        {src:logo2 , alt:'logo'},
        {src:logo3 , alt:'logo'},
        {src:logo4 , alt:'logo'},
        {src:logo5 , alt:'logo'},
        {src:logo6 , alt:'logo'},
        {src:logo7 , alt:'logo'},
        {src:logo8 , alt:'logo'},
    ]
  return (
    <section ref={sectionRefs.section4} className='w-[100%]'>
        <div className='grid grid-cols-4 xl:justify-center w-[90%] xl:mx-auto'>
        {brands.map((brand,i) => <img key={i} src={brand.src} alt={brand.alt} className='w-[150px] h-[70px] mx-auto' />)}
        </div>
    </section>
  )
}

export default SectionBrands
