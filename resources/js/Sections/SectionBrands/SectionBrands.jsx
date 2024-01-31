import React, { useContext } from 'react'
import logo1 from '../../../../public/assets/publicImages/logosLight/ICDT_logo1.svg'
import logo2 from '../../../../public/assets/publicImages/logosLight/ICDT_logo2.svg'
import logo3 from '../../../../public/assets/publicImages/logosLight/ICDT_logo3.svg'
import logo4 from '../../../../public/assets/publicImages/logosLight/ICDT_logo4.svg'
import logo5 from '../../../../public/assets/publicImages/logosLight/ICDT_logo5.svg'
import logo6 from '../../../../public/assets/publicImages/logosLight/ICDT_logo1.svg'
import logo7 from '../../../../public/assets/publicImages/logosLight/ICDT_logo7.svg'
import logo8 from '../../../../public/assets/publicImages/logosLight/ICDT_logo8.svg'
import logo01 from '../../../../public/assets/publicImages/logosDark/ICDT_logo1.svg'
import logo02 from '../../../../public/assets/publicImages/logosDark/ICDT_logo2.svg'
import logo03 from '../../../../public/assets/publicImages/logosDark/ICDT_logo3.svg'
import logo04 from '../../../../public/assets/publicImages/logosDark/ICDT_logo4.svg'
import logo05 from '../../../../public/assets/publicImages/logosDark/ICDT_logo5.svg'
import logo06 from '../../../../public/assets/publicImages/logosDark/ICDT_logo6.svg'
import logo07 from '../../../../public/assets/publicImages/logosDark/ICDT_logo7.svg'
import logo08 from '../../../../public/assets/publicImages/logosDark/ICDT_logo8.svg'
import { useScroll } from '@/Context/ScrollContext'
import { DarkModeContext } from '@/Context/DarkModeContext'

const SectionBrands = () => {
    const { darkMode } = useContext(DarkModeContext);
    const { sectionRefs } = useScroll();
    const brandsLight = [
        {src:logo1 , alt:'logo'},
        {src:logo2 , alt:'logo'},
        {src:logo3 , alt:'logo'},
        {src:logo4 , alt:'logo'},
        {src:logo5 , alt:'logo'},
        {src:logo6 , alt:'logo'},
        {src:logo7 , alt:'logo'},
        {src:logo8 , alt:'logo'},
    ]
    const brandsDark = [
        {src:logo01 , alt:'logo'},
        {src:logo02 , alt:'logo'},
        {src:logo03 , alt:'logo'},
        {src:logo04 , alt:'logo'},
        {src:logo05 , alt:'logo'},
        {src:logo06 , alt:'logo'},
        {src:logo07 , alt:'logo'},
        {src:logo08 , alt:'logo'},
    ]
  return (
    <section ref={sectionRefs.section4} className={`${darkMode ? "border-b-[1px] border-[#f1f1f125] " : "border-b-[1px] border-[#28282825]"} w-[100%] py-[50px]`}>
        <div className='grid grid-cols-4 xl:justify-center w-[90%] xl:mx-auto'>
        {darkMode ?
        brandsLight.map((brand,i) => <img key={i}  src={brand.src} alt={brand.alt} className='w-[150px] h-[70px] mx-auto' />)
    :
    brandsDark.map((brand,i) => <img key={i}  src={brand.src} alt={brand.alt} className='w-[150px] h-[70px] mx-auto' />)}
        </div>
    </section>
  )
}

export default SectionBrands
