import { useSearchBarContext } from '@/Context/SearchBarContext';
import React, { useEffect } from 'react'

const CheckedRadio = () => {

    const { check, setCheck } = useSearchBarContext();

console.log(check);


  return (
    <>
    <form className='md:flex md:flex-col md:justify-center xl:flex xl:flex-col xl:justify-center'  x-data='{dropDownOpen: false}'>
                <div class="md:flex md:flex-col md:justify-center lg:flex lg:flex-col lg:justify-center xl:flex xl:flex-col xl:justify-center">
                    <div className='flex flex-row my-2 justify-center'>
                    <div class="flex items-center mr-4  p-1 rounded">
                    <label for="arabic" class="mr-2 text-sm font-medium text-lightText dark:text-gray-300">العربية</label>
                    <input  type="radio"  class="w-4 h-4 text-purple-500  border-gray-300 rounded focus:ring-purple-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" value='ar'  name="checkbox" id='arabic' onClick={() => setCheck('ar')} />

                    </div>
                    <div class="flex items-center mr-4  p-1 rounded">
                        <input   type="radio"  class="w-4 h-4 text-purple-500 border-gray-300 rounded focus:ring-purple-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" value='fr'  name="checkbox" id='french' onClick={() => setCheck('fr')} />
                        <label for="french" class="ml-2 text-sm font-medium text-lightText dark:text-gray-300">Français </label>
                    </div>
                    <div class="flex items-center mr-4   p-1 rounded">
                        <input   type="radio"  class="w-4 h-4 text-purple-600  border-gray-300 rounded focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" value='eng'  name="checkbox" id='english' onClick={() => setCheck('eng')} />
                        <label for="english" class="ml-2 text-sm font-medium text-lightText dark:text-gray-300">English</label>
                    </div>
                    </div>




                    </div>
                    </form>
    </>
  )
}

export default CheckedRadio
