import Tabs from '@/Components/Tabs';
import LayoutApp from '@/Layout/LayoutApp'
import { Head, Link } from '@inertiajs/inertia-react'
import { button } from '@material-tailwind/react';
import React, { useState } from 'react'




const HadeethPage = ({hadeetData}) => {

    console.log(hadeetData);
    // const [currentTab, setCurrentTab] = useState('1');
    // const [disabledTab, setDisabledTab] = useState(false);

    // const handleClick = (e) => {
    //     setCurrentTab(e.target.id)
    // }
  return (
    <>
    <LayoutApp>
    <Head>
              <title>Hadeet Page</title>
          </Head>
          {/* <div className='w-full  flex flex-col mt-[200px]'>
    <div className=' w-[80%]  mx-auto text-lightText flex flex-row justify-between'>
        {hadeetData && hadeetData.imams.map((imam,i) =>
        <button key={i} id={imam.id}  onClick={handleClick} className={`${currentTab === `${imam.id}`  ? 'text-red-500' : 'text-green-500'}`}>{imam.imam_english_name}</button>
        )}
    </div>
    <div className=' w-[80%]  mx-auto'>
        {hadeetData && hadeetData.imams.map((imam,i) =>
             currentTab === `${imam.id}` &&
             <div className='text-lightText'>
                <h3 key={i}>{imam.imam_english_name}</h3>
                <p key={i}>{imam.english_bio}</p>
             </div>

        )}
    </div>
    </div> */}
    <div className='w-full h-screen '>
        <Tabs tabs={hadeetData.imams}/>
    </div>
    </LayoutApp>
    </>

  )
}

export default HadeethPage
