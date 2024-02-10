import { useSearchBarContext } from '@/Context/SearchBarContext';
import moment from 'moment';
import HijriDate,{toHijri} from 'hijri-date/lib/safe';
import { BsFillSunsetFill, BsFillSunriseFill, BsFillSunFill, BsFillMoonFill , BsMask , BsSun,     } from "react-icons/bs";
import { IoMdMoon } from "react-icons/io";
import { BiSolidCircle } from "react-icons/bi";
import React from 'react'


const PrayerTime = ({FajrPrayer, DhuhrPrayer, AsrPrayer, MaghribPrayer, IshaPrayer}) => {

    const today = new HijriDate();
    const dateHijri = today.date + '/' + today.month + '/' + today.year + ' ' ;
    const dayTimeHijri = today.dayName + ' ' + today.hours + ':' + today.minutes;
    const { check, setCheck } = useSearchBarContext();

  return (
    <div className='absolute right-0 -top-5 bg-darkText w-[280px] text-lightText border border-lightText rounded-md p-4 flex flex-col gap-3 prayerBg'>
        {/* <select name="" id="monselect"  className='relative z-10 text-sm text-darkText'>
            <option value="casablanca">Casablanca</option>
            <option value="riyad">Riyad</option>
            <option value="new york" selected>New York</option>
            <option value="paris">Pris</option>
            <option value="london">London</option>
        </select> */}
        <div>
            <div className='flex flex-col '>
                <h2 className={`${check === 'ar' ? "text-right" : "text-left"}  font-bold uppercase `}>{check === 'ar' ? 'الدار البيضاء' : 'Casablanca'}</h2>
            <h2 className={`${check === 'ar' ? "text-right" : "text-left"} font-bold uppercase `}>{check === 'ar' ? 'مواقيت ' : 'Prayer '}</h2>
            <h2 className={`${check === 'ar' ? "text-right" : "text-left"} font-bold uppercase `}>{check === 'ar' ? ' الصلاة' : ' Times'}</h2>
            <div className='w-[70px] h-[5px] bg-yellow-400'></div>
            </div>

        <div className=' mt-3 font-bold'>
                <h3 className='text-xs'>{moment().format('L')+' '}Georgian</h3>
                <h3 className='text-xs'>{dateHijri+' '}Hijri</h3>
                <h3 className='text-xs'>{dayTimeHijri}</h3>

                <div  className='text-xs'></div>
                </div>
        </div>

            <ul className={`${check === 'ar' ? "text-right" : "text-left"} flex flex-row align-middle items-center gap-2 mx-auto `}>



                <li>
                    <div className='flex flex-col gap-1 align-middle items-center font-bold'>
                        <BsFillSunriseFill size={22} className='text-yellow-500' />

                    </div>
                    <div className='bg-[rgba(255,255,255,0.3)] rounded-b  font-bold'>
                    <h3 className='text-xs text-center bg-lightBg text-darkText rounded px-1'>{check === 'ar' ? 'الفجر' : 'Fajr'}</h3>
                        <h3 className='text-darkText text-xs text-center '>{FajrPrayer}</h3>
                        </div>
                </li>
                <li>
                    <div className='flex flex-col gap-1 align-middle items-center font-bold'>
                        <BsFillSunFill size={22} className='text-yellow-500' />

                    </div>
                    <div className='bg-[rgba(255,255,255,0.3)] rounded-b  font-bold'>
                    <h3 className='text-xs text-center bg-lightBg text-darkText rounded px-1'>{check === 'ar' ? 'الظهر' : 'Dhur'}</h3>
                        <h3 className='text-darkText text-xs text-center '>{DhuhrPrayer}</h3>
                        </div>
                </li>
                <li className=''>
                    <div className='flex flex-col gap-1 align-middle items-center font-bold'>
                        <BsSun   size={22} className='text-yellow-500 ' />

                    </div>
                    <div className='bg-[rgba(255,255,255,0.3)] rounded-b  font-bold '>
                    <h3 className='text-xs text-center bg-lightBg text-darkText rounded px-1'>{check === 'ar' ? 'العصر' : 'Asr'}</h3>
                        <h3 className='text-darkText text-xs text-center '>{AsrPrayer}</h3>
                        </div>
                </li>
                <li>
                    <div className='flex flex-col gap-1 align-middle items-center font-bold'>
                        <BsFillSunsetFill size={22} className='text-yellow-500' />
                        </div>
                        <div className='bg-[rgba(255,255,255,0.3)] rounded-b  font-bold'>
                        <h3 className='text-xs text-center bg-lightBg text-darkText rounded px-1'>{check === 'ar' ? 'المغرب' : 'Maghrib'}</h3>
                        <h3 className='text-darkText text-xs text-center '>{MaghribPrayer}</h3>
                        </div>

                </li>
                <li>
                    <div className='flex flex-col gap-1 align-middle items-center font-bold'>
                        <IoMdMoon  size={22} className='text-yellow-500' />
                        </div>
                        <div className='bg-[rgba(255,255,255,0.3)] rounded-b  font-bold'>
                        <h3 className='text-xs text-center bg-lightBg text-darkText rounded px-1  '>{check === 'ar' ? 'العشاء' : 'Icha'}</h3>
                        <h3 className=' text-darkText text-xs text-center '>{IshaPrayer}</h3>
                        </div>


                </li>



            </ul>
        </div>
  )
}

export default PrayerTime
