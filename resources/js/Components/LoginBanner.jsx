import React from 'react'
import loginIllu from '../../../public/assets/publicImages/loginIllu.svg'

const LoginBanner = () => {
  return (
    <div className="w-1/2 h-screen bg-darkText ">
                            <img src={loginIllu} alt="" srcset="" className="h-[600px] w-full mx-auto"  />
                            <div className="-mt-[120px] w-[70%] mx-auto text-lightText text-center">
                            <p className="quranPara font-bold">O, people! We created you from a male and a female, and We made you races and tribes, so that you may come to know one another. The best among you before Allah is the most righteous. Allah is Knowing and Aware</p>
                            <p className="text-xs">[Surah al-Hujurat Verse 13]</p>
                            </div>

                        </div>
  )
}

export default LoginBanner
