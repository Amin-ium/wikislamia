import React from 'react'
import loginIllu from '../../../public/assets/publicImages/loginIllu.svg'
import loginImg from '../../../public/assets/publicImages/loginImg.png'

const LoginBanner = () => {
  return (
    <div className="w-1/2  flex flex-col   bg-darkText ">
                            <img src={loginIllu} alt="" srcset="" className="h-[400px] w-full mx-auto"  />
                            <div className=" w-[70%] mx-auto text-lightText relative -mt-[60px]">

                                    <img src={loginImg}  alt="" className='w-full object-cover' />


                                <div className='  absolute inset-0 flex items-center justify-center text-center flex-col '>
                                    <p className=" font-bold text-[16px]">O, people! We created you from a male and a female, and We made you races and tribes, so that you may come to know one another. The best among you before Allah is the most righteous. Allah is Knowing and Aware</p>
                                    <p className="text-xs">[Surah al-Hujurat Verse 13]</p>
                                </div>

                            </div>

                        </div>
  )
}

export default LoginBanner
