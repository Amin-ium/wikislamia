import LayoutApp from '@/Layout/LayoutApp'
import { Head } from '@inertiajs/inertia-react'
import React, { useState } from 'react'
import blogsBanner from '../../../../public/assets/publicImages/quranBanner.png'

import Pagination from '@/Components/Pagination'
import PostCard from '@/Components/PostCard/PostCard'
import SectionTitle from '@/Components/SectionTitle';
import { useSearchBarContext } from '@/Context/SearchBarContext'



const BlogsPage = ({posts}) => {

    const { check, setCheck } = useSearchBarContext();
    const [isLoading, setIsLoading] = useState(true);



    const textBanner = ['O mankind, indeed We have created you from male and female and made you peoples and tribes that you may know one another',
                        'O hommes, Nous vous avons créés d\'un mâle et d\'une femelle, et Nous avons fait de vous des nations et des tribus, pour que vous vous entre-connaissiez',
                        'يَا أَيُّهَا النَّاسُ إِنَّا خَلَقْنَاكُم مِّن ذَكَرٍ وَأُنثَىٰ وَجَعَلْنَاكُمْ شُعُوبًا وَقَبَائِلَ لِتَعَارَفُوا'
                    ]


    console.log(posts);
  return (
    <>
    <LayoutApp>
    <Head>
              <title>Blogs Page</title>
          </Head>

            <div className='w-full'>
        <div className='w-[80%] mx-auto flex flex-col '>

            <div className='flex flex-col  justify-center items-center -mt-[50px] relative '>
            <img className='w-[40%] h-[40%]' src={blogsBanner} alt="" />
            <p className='w-[28%]  text-[15px] text-center leading-5 font-bold text-lightText  absolute'>{check === 'ar' ? textBanner[2] : check === 'eng' ? textBanner[0] : check === 'fr' ? textBanner[1] : null}</p>
            </div>
            <div className='flex flex-col gap-[30px] -mt-[70px]'>
                <SectionTitle title="Post&Blogs" des="Enjoy Reading and Posting"  />
                 <Pagination className="" Component={PostCard} items={posts}   />
            </div>

            <div>

            </div>

        </div>
    </div>


    </LayoutApp>
    </>

  )
}

export default BlogsPage
