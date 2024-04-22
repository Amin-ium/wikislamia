import LayoutApp from '@/Layout/LayoutApp'
import { Head } from '@inertiajs/inertia-react'
import React from 'react'
import workImg from '../../../../public/assets/publicImages/work.jpg'
import { FaFacebook, FaGithub } from 'react-icons/fa'
import { TiSocialLinkedinCircular } from 'react-icons/ti'

const AboutPage = () => {
  return (
    <>
    <LayoutApp>
    <Head>
              <title>About Page</title>
          </Head>
    <section className='w-full   '>
        <div className='  teamBg '>
        <div className='  layer flex justify-center items-center '>
            <h2 className='text-5xl font-bold text-darkText'>About Us</h2>
        </div>
        </div>
        <div className='w-full bg-lightBg'>
            <div className='w-[80%] mx-auto flex flex-row items-center py-20'>
                <div className='w-[50%] float-start flex justify-center'>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod dolore aspernatur hic quibusdam soluta aliquam cumque nobis, tenetur amet omnis voluptatum, ea aliquid eveniet mollitia voluptas eum, odit atque iure ad deleniti odio ab corrupti. Deleniti quis, modi vero perspiciatis omnis, adipisci quo, error nobis dolorum neque corrupti est voluptas!</p>
                </div>
                <div className='w-[50%] float-end flex justify-center'>
                    <img src={workImg} className='w-[70%] rounded-xl ' alt="work image" />
                </div>
            </div>
            <div className='w-[80%] mx-auto flex flex-col gap-10 pb-[40px]'>
                <div className='flex flex-col justify-center items-center m'>
                    <h2 className='text-3xl font-bold text-darkText'>The Core of our Team</h2>
                    <p className='text-lg text-grayBg text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita tempore magni pariatur? Sunt, tempore nemo.</p>
                </div>
                <div className='grid grid-cols-2 justify-center gap-[40px]'>
                <div className='flex flex-row shadow-2xl shadow-purple-900'>
                        <div className='w-[50%] float-start'>
                            <img src={workImg} alt=""  className='h-[100%]' />
                        </div>
                        <div className='flex flex-col w-[50%] float-end p-2 gap-3'>
                            <div className='flex flex-col '>
                                <h2 className='text-xl text-purple-900 font-bold'>Amine Daief</h2>
                                <h3 className='text-md font-bold'>CEO</h3>
                            </div>
                            <div>
                                <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe delectus quos omnis.</p>
                            </div>
                            <div className='flex flex-row items-center gap-2'>
                                <FaFacebook size={24} />
                                <TiSocialLinkedinCircular  size={30} />
                                <FaGithub size={24} />
                            </div>
                        </div>

                    </div>
                    <div className='flex flex-row shadow-2xl shadow-purple-900'>
                        <div className='w-[50%] float-start'>
                            <img src={workImg} alt=""  className='h-[100%]' />
                        </div>
                        <div className='flex flex-col w-[50%] float-end p-2 gap-3'>
                            <div className='flex flex-col '>
                                <h2 className='text-xl text-purple-900 font-bold'>Amine Daief</h2>
                                <h3 className='text-md font-bold'>CEO</h3>
                            </div>
                            <div>
                                <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe delectus quos omnis.</p>
                            </div>
                            <div className='flex flex-row items-center gap-2'>
                                <FaFacebook size={24} />
                                <TiSocialLinkedinCircular  size={30} />
                                <FaGithub size={24} />
                            </div>
                        </div>

                    </div>
                    <div className='flex flex-row shadow-2xl shadow-purple-900'>
                        <div className='w-[50%] float-start'>
                            <img src={workImg} alt=""  className='h-[100%]' />
                        </div>
                        <div className='flex flex-col w-[50%] float-end p-2 gap-3'>
                            <div className='flex flex-col '>
                                <h2 className='text-xl text-purple-900 font-bold'>Amine Daief</h2>
                                <h3 className='text-md font-bold'>CEO</h3>
                            </div>
                            <div>
                                <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe delectus quos omnis.</p>
                            </div>
                            <div className='flex flex-row items-center gap-2'>
                                <FaFacebook size={24} />
                                <TiSocialLinkedinCircular  size={30} />
                                <FaGithub size={24} />
                            </div>
                        </div>

                    </div>
                    <div className='flex flex-row shadow-2xl shadow-purple-900'>
                        <div className='w-[50%] float-start'>
                            <img src={workImg} alt=""  className='h-[100%]'  />
                        </div>
                        <div className='flex flex-col w-[50%] float-end p-2 gap-3'>
                            <div className='flex flex-col '>
                                <h2 className='text-xl text-purple-900 font-bold'>Amine Daief</h2>
                                <h3 className='text-md font-bold'>CEO</h3>
                            </div>
                            <div>
                                <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe delectus quos omnis.</p>
                            </div>
                            <div className='flex flex-row items-center gap-2'>
                                <FaFacebook size={24} />
                                <TiSocialLinkedinCircular  size={30} />
                                <FaGithub size={24} />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>


    </section>
    </LayoutApp>
    </>

  )
}

export default AboutPage
