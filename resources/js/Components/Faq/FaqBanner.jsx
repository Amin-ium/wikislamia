import React from 'react'
import faqBanner from '../../../../public/assets/publicImages/faqBanner.svg'

const FaqBanner = () => {
  return (
    <div className='w-1/2 flex flex-col justify-center'>
        <img src={faqBanner} alt="" />
        <p>for more question visit f.a.q page by clicking on this link f.a.q</p>
    </div>
  )
}

export default FaqBanner
