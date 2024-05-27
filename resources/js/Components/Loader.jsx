import React from 'react'
import lightLogo from '../../../public/assets/publicImages/lightLogoEnglish.svg'

const Loader = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center bg-darkText text-lightBg'>
        <img src={lightLogo} alt="" className='animate-bounce w-[150px] ' />
    </div>
  )
}

export default Loader
