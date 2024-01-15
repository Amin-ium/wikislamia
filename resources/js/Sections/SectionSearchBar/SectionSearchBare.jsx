import React from "react";
import headImg from "../../../../public/assets/publicImages/—Pngtree—ramadan illustration muslim family praying_7466838 2.svg";
import SearchbarEng from "@/Components/SearchBareQuran/SearchbarEng";
import CheckedRadio from "@/Components/CheckedRadio";
import CardsBanner from "@/Components/CardsBanner";
import { useSearchBarContext } from "@/Context/SearchBarContext";
import SearchbarAr from "@/Components/SearchBareQuran/SearchbarAr";
import Searchbarfr from "@/Components/SearchBareQuran/SearchbarFr";
// import f from '../../../../public/assets/publicImages/coverBg.svg'

const SectionSearchBare = () => {
    const { check, setCheck } = useSearchBarContext();

    console.log(check);
    return (
        <>
            <div className="w-[80%] mx-auto  h-auto pb-[100px] ">
                {/* <div className=' relative z-9 w-[90%]  mx-auto flex flex-col justify-center  pt-[140px] lg:pt-[10px] '>
        <img className='w-[300px] h-[150px]  md:w-[400px] md:h-[200px] lg:w-[400px] lg:h-[200px] -mt-[100px] sm:-mt-[100px]  md:-mt-[100px] lg:-mt-0 mx-auto' src={headImg} alt="" />
        <CheckedRadio />
        {check === 'ar' ? <SearchbarAr /> : check === 'eng' ? <SearchbarEng /> : check === 'fr' ? <Searchbarfr /> : null}

        <CardsBanner /> */}
                {/* </div> */}

                {/* <table
                    role="table"
                    class="w-full mt-10 min-w-[500px] overflow-x-scroll border-collapse border border-gray-700"
                >
                    <thead >
                        <tr role="row" className="bg-gray-300">
                            <th
                                colspan="10"
                                role="columnheader"
                                title="Toggle SortBy"
                                className="border  border-gray-700 xl:w-[500px]"
                                // style="cursor: pointer"
                            >
                                <div class="flex items-center justify-between py-2 ps-3 text-start uppercase tracking-wide text-gray-600 sm:text-xs lg:text-xs">
                                    Informations
                                </div>
                            </th>
                            <th
                                colspan="1"
                                role="columnheader"
                                title="Toggle SortBy"
                                className="border border-gray-700"
                                // style="cursor: pointer"
                            >
                                <div class="flex items-center justify-between py-2 ps-3 text-start uppercase tracking-wide text-gray-600 sm:text-xs lg:text-xs">
                                    Références
                                </div>
                            </th>
                            <th
                                colspan="1"
                                role="columnheader"
                                title="Toggle SortBy"
                                className="border border-gray-700"
                                // style="cursor: pointer"
                            >
                                <div class="flex items-center justify-between py-2 ps-3 text-start uppercase tracking-wide text-gray-600 sm:text-xs lg:text-xs">
                                    Montant
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody role="rowgroup" class="px-4">
                        <tr role="row">
                            <td class="py-1 ps-3 text-sm border border-gray-700 xl:w-[500px]" role="cell" colspan="10">
                                TAXE EDILITE AVANT 10/2000 - 2000/2000 - 31602654
                            </td>
                            <td class="py-1 ps-3 text-sm border border-gray-700" role="cell">
                                <p class="text-md font-medium text-gray-600 dark:text-white">
                                    063160265409
                                </p>
                            </td>
                            <td class="py-1 ps-3 text-sm border border-gray-700" role="cell">
                                208.6
                            </td>
                        </tr>

                        <tr role="row">
                            <td class="py-1 ps-3 text-sm border border-gray-700 xl:w-[500px]" role="cell" colspan="10">
                                TAXE EDILITE APRES 10/2000 - 2001/2001 - 31602654
                            </td>
                            <td class="py-1 ps-3 text-sm border border-gray-700" role="cell">
                                <p class="text-md font-medium text-gray-600 dark:text-white">
                                    063160265417
                                </p>
                            </td>
                            <td class="py-1 ps-3 text-sm border border-gray-700" role="cell">
                                212.8
                            </td>
                        </tr>

                        <tr role="row">
                            <td class="py-1 ps-3 text-sm border border-gray-700 xl:w-[500px]" role="cell" colspan="10">
                                TAXE EDILITE APRES 10/2000 - 2002/2002 - 31602654
                            </td>
                            <td class="py-1 ps-3 text-sm border border-gray-700" role="cell">
                                <p class="text-md font-medium text-gray-600 dark:text-white">
                                    063160265425
                                </p>
                            </td>
                            <td class="py-1 ps-3 text-sm border border-gray-700" role="cell">
                                212.8
                            </td>
                        </tr>

                        <tr role="row">
                            <td class="py-1 ps-3 text-sm border border-gray-700 xl:w-[500px]" role="cell" colspan="10">
                                TAXE EDILITE APRES 10/2000 - 2003/2003 - 31602654
                            </td>
                            <td class="py-1 ps-3 text-sm border border-gray-700" role="cell">
                                <p class="text-md font-medium text-gray-600 dark:text-white">
                                    063160265433
                                </p>
                            </td>
                            <td class="py-1 ps-3 text-sm border border-gray-700" role="cell">
                                212.8
                            </td>
                        </tr>

                        <tr role="row">
                            <td class="py-1 ps-3 text-sm border border-gray-700 xl:w-[500px]" role="cell" colspan="10">
                                TAXE EDILITE APRES 10/2000 - 2004/2004 - 31602654
                            </td>
                            <td class="py-1 ps-3 text-sm border border-gray-700" role="cell">
                                <p class="text-md font-medium text-gray-600 dark:text-white">
                                    063160265441
                                </p>
                            </td>
                            <td class="py-1 ps-3 text-sm border border-gray-700" role="cell">
                                212.8
                            </td>
                        </tr>

                        <tr role="row">
                            <td class="py-1 ps-3 text-sm border border-gray-700 xl:w-[500px]" role="cell" colspan="10">
                                TAXE EDILITE APRES 10/2000 - 2005/2005 - 31602654
                            </td>
                            <td class="py-1 ps-3 text-sm border border-gray-700" role="cell">
                                <p class="text-md font-medium text-gray-600 dark:text-white">
                                    063160265458
                                </p>
                            </td>
                            <td class="py-1 ps-3 text-sm border border-gray-700" role="cell">
                                212.8
                            </td>
                        </tr>

                        <tr role="row">
                            <td class="py-1 ps-3 text-sm border border-gray-700 xl:w-[500px]" role="cell" colspan="10">
                                TAXE EDILITE APRES 10/2000 - 2006/2006 - 31602654
                            </td>
                            <td class="py-1 ps-3 text-sm border border-gray-700" role="cell">
                                <p class="text-md font-medium text-gray-600 dark:text-white">
                                    063160265466
                                </p>
                            </td>
                            <td class="py-1 ps-3 text-sm border border-gray-700" role="cell">
                                217.0
                            </td>
                        </tr>

                        <tr role="row">
                            <td class="py-1 ps-3 text-sm border border-gray-700 xl:w-[500px]" role="cell" colspan="10">
                                TAXE EDILITE APRES 10/2000 - 2007/2007 - 31602654
                            </td>
                            <td class="py-1 ps-3 text-sm border border-gray-700" role="cell">
                                <p class="text-md font-medium text-gray-600 dark:text-white">
                                    063160265474
                                </p>
                            </td>
                            <td class="py-1 ps-3 text-sm border border-gray-700" role="cell">
                                217.0
                            </td>
                        </tr>

                    </tbody>
                </table>

                <hr className="my-5"/> */}


                <table
                    role="table"
                    class="w-full mt-10 min-w-[500px] overflow-x-scroll border-collapse border border-gray-700"
                >
                    <thead >
                        <tr role="row" className="bg-gray-300">
                            <th
                                colspan="10"
                                role="columnheader"
                                title="Toggle SortBy"
                                className="border  border-gray-700 xl:w-[500px]"
                                // style="cursor: pointer"
                            >
                                <div class="flex items-center justify-between py-2 ps-3 text-start uppercase tracking-wide text-gray-600 sm:text-xs lg:text-xs">
                                    Informations
                                </div>
                            </th>
                            <th
                                colspan="1"
                                role="columnheader"
                                title="Toggle SortBy"
                                className="border border-gray-700"
                                // style="cursor: pointer"
                            >
                                <div class="flex items-center justify-between py-2 ps-3 text-start uppercase tracking-wide text-gray-600 sm:text-xs lg:text-xs">
                                    Références
                                </div>
                            </th>
                            <th
                                colspan="1"
                                role="columnheader"
                                title="Toggle SortBy"
                                className="border border-gray-700"
                                // style="cursor: pointer"
                            >
                                <div class="flex items-center justify-between py-2 ps-3 text-start uppercase tracking-wide text-gray-600 sm:text-xs lg:text-xs">
                                    Montant
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody role="rowgroup" class="px-4">
                        <tr role="row">
                            <td class="py-1 ps-3 text-sm border border-gray-700 xl:w-[500px]" role="cell" colspan="10">
                                TAXE DE SERVICES COMMUNAUX  - 2008/2008 - 31602654
                            </td>
                            <td class="py-1 ps-3 text-sm border border-gray-700" role="cell">
                                <p class="text-md font-medium text-gray-600 dark:text-white">
                                    063160265485
                                </p>
                            </td>
                            <td class="py-1 ps-3 text-sm border border-gray-700" role="cell">
                                217.0
                            </td>
                        </tr>

                        <tr role="row">
                            <td class="py-1 ps-3 text-sm border border-gray-700 xl:w-[500px]" role="cell" colspan="10">
                            TAXE DE SERVICES COMMUNAUX  - 2009/2009 - 31602654
                            </td>
                            <td class="py-1 ps-3 text-sm border border-gray-700" role="cell">
                                <p class="text-md font-medium text-gray-600 dark:text-white">
                                    063160265493
                                </p>
                            </td>
                            <td class="py-1 ps-3 text-sm border border-gray-700" role="cell">
                                217.0
                            </td>
                        </tr>

                        <tr role="row">
                            <td class="py-1 ps-3 text-sm border border-gray-700 xl:w-[500px]" role="cell" colspan="10">
                            TAXE DE SERVICES COMMUNAUX  - 2010/2010 - 31602654
                            </td>
                            <td class="py-1 ps-3 text-sm border border-gray-700" role="cell">
                                <p class="text-md font-medium text-gray-600 dark:text-white">
                                    063160265402
                                </p>
                            </td>
                            <td class="py-1 ps-3 text-sm border border-gray-700" role="cell">
                                217.0
                            </td>
                        </tr>

                        <tr role="row">
                            <td class="py-1 ps-3 text-sm border border-gray-700 xl:w-[500px]" role="cell" colspan="10">
                            TAXE DE SERVICES COMMUNAUX  - 2011/2011 - 31602654
                            </td>
                            <td class="py-1 ps-3 text-sm border border-gray-700" role="cell">
                                <p class="text-md font-medium text-gray-600 dark:text-white">
                                    063160265410
                                </p>
                            </td>
                            <td class="py-1 ps-3 text-sm border border-gray-700" role="cell">
                                221.4
                            </td>
                        </tr>

                        <tr role="row">
                            <td class="py-1 ps-3 text-sm border border-gray-700 xl:w-[500px]" role="cell" colspan="10">
                            TAXE DE SERVICES COMMUNAUX   - 2012/2012 - 31602654
                            </td>
                            <td class="py-1 ps-3 text-sm border border-gray-700" role="cell">
                                <p class="text-md font-medium text-gray-600 dark:text-white">
                                    063160265428
                                </p>
                            </td>
                            <td class="py-1 ps-3 text-sm border border-gray-700" role="cell">
                                221.4
                            </td>
                        </tr>

                        <tr role="row">
                            <td class="py-1 ps-3 text-sm border border-gray-700 xl:w-[500px]" role="cell" colspan="10">
                            TAXE DE SERVICES COMMUNAUX  - 2013/2013 - 31602654
                            </td>
                            <td class="py-1 ps-3 text-sm border border-gray-700" role="cell">
                                <p class="text-md font-medium text-gray-600 dark:text-white">
                                    063160265436
                                </p>
                            </td>
                            <td class="py-1 ps-3 text-sm border border-gray-700" role="cell">
                                221.4
                            </td>
                        </tr>

                        <tr role="row">
                            <td class="py-1 ps-3 text-sm border border-gray-700 xl:w-[500px]" role="cell" colspan="10">
                            TAXE DE SERVICES COMMUNAUX  - 2014/2014 - 31602654
                            </td>
                            <td class="py-1 ps-3 text-sm border border-gray-700" role="cell">
                                <p class="text-md font-medium text-gray-600 dark:text-white">
                                    063160265444
                                </p>
                            </td>
                            <td class="py-1 ps-3 text-sm border border-gray-700" role="cell">
                                221.4
                            </td>
                        </tr>

                        <tr role="row">
                            <td class="py-1 ps-3 text-sm border border-gray-700 xl:w-[500px]" role="cell" colspan="10">
                            TAXE DE SERVICES COMMUNAUX  - 2015/2015 - 31602654
                            </td>
                            <td class="py-1 ps-3 text-sm border border-gray-700" role="cell">
                                <p class="text-md font-medium text-gray-600 dark:text-white">
                                    063160265451
                                </p>
                            </td>
                            <td class="py-1 ps-3 text-sm border border-gray-700" role="cell">
                                221.4
                            </td>
                        </tr>
                        <tr role="row">
                            <td class="py-1 ps-3 text-sm border border-gray-700 xl:w-[500px]" role="cell" colspan="10">
                            TAXE DE SERVICES COMMUNAUX   - 2016/2016 - 31602654
                            </td>
                            <td class="py-1 ps-3 text-sm border border-gray-700" role="cell">
                                <p class="text-md font-medium text-gray-600 dark:text-white">
                                    063160265469
                                </p>
                            </td>
                            <td class="py-1 ps-3 text-sm border border-gray-700" role="cell">
                            225.8
                            </td>
                        </tr>
                        <tr role="row">
                            <td class="py-1 ps-3 text-sm border border-gray-700 xl:w-[500px]" role="cell" colspan="10">
                            TAXE DE SERVICES COMMUNAUX  - 2017/2017 - 31602654
                            </td>
                            <td class="py-1 ps-3 text-sm border border-gray-700" role="cell">
                                <p class="text-md font-medium text-gray-600 dark:text-white">
                                    063160265477
                                </p>
                            </td>
                            <td class="py-1 ps-3 text-sm border border-gray-700" role="cell">
                                225.8
                            </td>
                        </tr>
                        <tr role="row">
                            <td class="py-1 ps-3 text-sm border border-gray-700 xl:w-[500px]" role="cell" colspan="10">
                            TAXE DE SERVICES COMMUNAUX  - 2018/2018 - 31602654
                            </td>
                            <td class="py-1 ps-3 text-sm border border-gray-700" role="cell">
                                <p class="text-md font-medium text-gray-600 dark:text-white">
                                    063160265485
                                </p>
                            </td>
                            <td class="py-1 ps-3 text-sm border border-gray-700" role="cell">
                                225.8
                            </td>
                        </tr>
                        <tr role="row">
                            <td class="py-1 ps-3 text-sm border border-gray-700 xl:w-[500px]" role="cell" colspan="10">
                            TAXE DE SERVICES COMMUNAUX  - 2019/2019 - 31602654
                            </td>
                            <td class="py-1 ps-3 text-sm border border-gray-700" role="cell">
                                <p class="text-md font-medium text-gray-600 dark:text-white">
                                    063160265493
                                </p>
                            </td>
                            <td class="py-1 ps-3 text-sm border border-gray-700" role="cell">
                                225.8
                            </td>
                        </tr>
                        <tr role="row">
                            <td class="py-1 ps-3 text-sm border border-gray-700 xl:w-[500px]" role="cell" colspan="10">
                            TAXE DE SERVICES COMMUNAUX  - 2020/2020 - 31602654
                            </td>
                            <td class="py-1 ps-3 text-sm border border-gray-700" role="cell">
                                <p class="text-md font-medium text-gray-600 dark:text-white">
                                    063160265402
                                </p>
                            </td>
                            <td class="py-1 ps-3 text-sm border border-gray-700" role="cell">
                                225.8
                            </td>
                        </tr>
                        <tr role="row">
                            <td class="py-1 ps-3 text-sm border border-gray-700 xl:w-[500px]" role="cell" colspan="10">
                            TAXE DE SERVICES COMMUNAUX  - 2021/2021 - 31602654
                            </td>
                            <td class="py-1 ps-3 text-sm border border-gray-700" role="cell">
                                <p class="text-md font-medium text-gray-600 dark:text-white">
                                    063160265410
                                </p>
                            </td>
                            <td class="py-1 ps-3 text-sm border border-gray-700" role="cell">
                                230.3
                            </td>
                        </tr>
                        <tr role="row">
                            <td class="py-1 ps-3 text-sm border border-gray-700 xl:w-[500px]" role="cell" colspan="10">
                            TAXE DE SERVICES COMMUNAUX  - 2022/2022 - 31602654
                            </td>
                            <td class="py-1 ps-3 text-sm border border-gray-700" role="cell">
                                <p class="text-md font-medium text-gray-600 dark:text-white">
                                    063160265428
                                </p>
                            </td>
                            <td class="py-1 ps-3 text-sm border border-gray-700" role="cell">
                                230.3
                            </td>
                        </tr>


                    </tbody>
                </table>
            </div>
        </>
    );
};

export default SectionSearchBare;
