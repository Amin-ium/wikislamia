import { useSearchBarContext } from '@/Context/SearchBarContext';
import moment from 'moment';
import React from 'react'

const PrayerTime = ({FajrPrayer, DhuhrPrayer, AsrPrayer, MaghribPrayer, IshaPrayer}) => {
    const { check, setCheck } = useSearchBarContext();
  return (
    <div className=' bg-darkText w-[200px] text-lightText border border-lightText rounded-md p-4 flex flex-col gap-3'>
        {/* <select name="" id="monselect"  className='relative z-10 text-sm text-darkText'>
            <option value="casablanca">Casablanca</option>
            <option value="riyad">Riyad</option>
            <option value="new york" selected>New York</option>
            <option value="paris">Pris</option>
            <option value="london">London</option>
        </select> */}
        <div>
        <h2 className={`${check === 'ar' ? "text-right" : "text-left"} font-bold underline`}>{check === 'ar' ? 'مواقيت الصلاة' : 'Prayer Times'}</h2>
        <div className='text-center'>
                <div className='text-xs'>{moment().format('MMMM Do YYYY, h:mm:ss a')}</div>
                <div  className='text-xs'>Casablanca, Morocco</div>
                </div>
        </div>

            <ul className={`${check === 'ar' ? "text-right" : "text-left"} `}>



                <li>{check === 'ar' ? 'الفجر:' : 'Fajr:'}{' '+FajrPrayer}</li>
                <li>{check === 'ar' ? 'الظهر:' : 'Dhur:'}{' '+DhuhrPrayer}</li>
                <li>{check === 'ar' ? 'العصر:' : 'Asr:'}{' '+AsrPrayer}</li>
                <li>{check === 'ar' ? 'المغرب:' : 'Maghrib:'}{' '+MaghribPrayer}</li>
                <li>{check === 'ar' ? 'العشاء:' : 'Icha:'}{' '+IshaPrayer}</li>


            </ul>
        </div>
  )
}

export default PrayerTime
