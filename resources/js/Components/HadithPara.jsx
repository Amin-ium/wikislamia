
import { Link } from "@inertiajs/inertia-react";
import React from "react";

const HadithPara = ({number_in_book, key, check, eng_hadith, ar_hadith, fr_hadith, hadithHref}) => {
    return (
        <div className={`border shadow-xl shadow-purple-900 mb-[40px] p-4 flex flex-col gap-3 ${check === 'ar' ? "text-right" : "text-left"} `}>
            <h3 key={key}>{check === 'ar' ? "حديث رقم: " + number_in_book : "Hadeet N°: " + number_in_book}</h3>
            <div className="flex flex-col">
                <div className="text-grayBg font-semibold" key={key}>
                    {check === "eng"
                        ? <div className="">
                            <p>{eng_hadith.substring(0, 170)+ ' ...'}</p>
                            <Link href={hadithHref} className={`bg-grayBg text-lightText px-1 rounded-md  ${check === 'ar' ? "float-start" : "float-end"}`} >Read More</Link>
                            </div>

                        : check === "fr"
                        ? <div>
                        <p>{fr_hadith.substring(0, 170)+ ' ...'}</p>
                        <Link href={hadithHref} className={`bg-grayBg text-lightText px-1 rounded-md  ${check === 'ar' ? "float-start" : "float-end"}`} >Lire</Link>
                            </div>
                        : check === "ar"
                        ?
                        <div>
                        <p>{ar_hadith.substring(0, 170)+ ' ...'}</p>
                            <Link href={hadithHref} className={`bg-grayBg text-lightText px-1 rounded-md  ${check === 'ar' ? "float-start" : "float-end"}`}>المزيد</Link>
                            </div>

                        : null}
                </div>
            </div>
        </div>
    );
};

export default HadithPara;
