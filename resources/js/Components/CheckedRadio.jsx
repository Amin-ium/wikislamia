
import { DarkModeContext } from '@/Context/DarkModeContext';
import { useSearchBarContext } from '@/Context/SearchBarContext';
import React, { useEffect } from 'react'
import { useContext } from 'react';

const CheckedRadio = () => {

    const { check, setCheck } = useSearchBarContext();
    const { darkMode } = useContext(DarkModeContext);

console.log(check);


  return (
    <>
    <form className='md:flex md:flex-col md:justify-center xl:flex xl:flex-col xl:justify-center'  x-data='{dropDownOpen: false}'>
                <div class="md:flex md:flex-col md:justify-center lg:flex lg:flex-col lg:justify-center xl:flex xl:flex-col xl:justify-center">
                    <div className='flex flex-row my-2 justify-center'>
                    <div class="flex items-center mr-4  p-1 rounded">
                    <label for="arabic" class={`${darkMode ? "text-lightText" : "text-darkText"} mr-2 text-sm font-medium `} >العربية</label>
                    <input  type="radio" checked={ check === 'ar' ? true : false}  class="w-4 h-4 text-purple-500  border-gray-300 rounded focus:ring-purple-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" value='ar'  name="checkbox" id='arabic' onClick={() => setCheck('ar')} />

                    </div>
                    <div class="flex items-center mr-4  p-1 rounded">
                        <input   type="radio" checked={ check === 'fr' ? true : false}  class="w-4 h-4 text-purple-500 border-gray-300 rounded focus:ring-purple-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" value='fr'  name="checkbox" id='french' onClick={() => setCheck('fr')} />
                        <label for="french"  class={`${darkMode ? "text-lightText" : "text-darkText"} ml-2 text-sm font-medium`}>Français </label>
                    </div>
                    <div class="flex items-center mr-4   p-1 rounded">
                        <input   type="radio" checked={ check === 'eng' ? true : false}  class="w-4 h-4 text-purple-600  border-gray-300 rounded focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" value='eng'  name="checkbox" id='english' onClick={() => setCheck('eng')} />
                        <label for="english"  class={`${darkMode ? "text-lightText" : "text-darkText"} ml-2 text-sm font-medium `}>English</label>
                    </div>
                    </div>




                    </div>
                    </form>
    </>
  )
}

export default CheckedRadio
