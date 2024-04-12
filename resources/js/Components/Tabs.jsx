import React, { useState } from 'react'

const Tabs = ({tabs}) => {
    const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const [underlineLeft, setUnderlineLeft] = useState(0);

  const handleTabClick = (index) => {
    const totalTabs = tabs.length;
    const percentage = (index / totalTabs) * 100;
    setSelectedTabIndex(index);
    setUnderlineLeft(percentage);
  };
  return (
    // <div  className='mt-[200px] w-[80%] mx-auto flex flex-row'>
    // {/* <div role="tablist" className="tabs tabs-lifted"> */}
    //     {/* {data.map((imam,i) =>
    //     <button role="tab" key={i} id={imam.id}  onClick={handleClick} className={`${currentTab === `${imam.id}`  ? 'text-red-500' : 'text-green-500'} tab`}>{imam.imam_english_name}</button>

    //     )} */}
    // {/* </div> */}
    // {/* <div  className=' w-[80%]  mx-auto mt-3'> */}
    //     {/* {data.map((imam,i) =>
    //          currentTab === `${imam.id}` &&
    //          <div role="tabpanel" className='tab-content text-lightText bg-base-100 border-base-300 rounded-box p-6'>
    //             <h3 className='text-lightText' key={i}>{imam.imam_english_name}</h3>
    //             <p className='text-lightText' key={i}>{imam.english_bio}</p>
    //          </div>

    //     )} */}
    // {/* </div> */}

    // {data.map((imam,i) =>
    // <div  role="tablist"  className='tabs tabs-lifted '>

    //     <input key={i} type="radio" id={imam.id}  onClick={handleClick} name="my_tabs_2" role="tab" className={`${currentTab === `${imam.id}`  ? 'text-red-500' : 'text-green-500'} tab `} aria-label={imam.imam_english_name} />
    //     {/* <div key={i} role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">{imam.english_bio}</div> */}

    //  <div key={i} role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">{imam.english_bio}</div>

    //     </div>



    // )}






    // </div>
<div>
      {tabs.map((tab, index) => (
        <div className="tab-container">
        <div
          key={index}
          className={`tab-item ${selectedTabIndex === index ? 'selected' : ''}`}
          onClick={() => handleTabClick(index)}
        >
          {tab.imam_english_name}
        </div>
        <div  className="underline" style={{ left: `${underlineLeft}%` }}>{tab.english_bio}</div>
        </div>
      ))}
      </div>


  )
}

export default Tabs
