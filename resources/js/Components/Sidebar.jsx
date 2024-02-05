import { useSearchBarContext } from '@/Context/SearchBarContext';
import { SidebarContext, SidebarContextProvider } from '@/Context/SidebarContext';
import { usePage } from '@inertiajs/inertia-react';
import { Link } from '@inertiajs/react';
import React, { useContext, useEffect, useState } from 'react'
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";
import { FaBahai } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { MdDashboard } from "react-icons/md";

import { LuClipboardEdit } from "react-icons/lu";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdDeleteForever } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";

import { FaChartLine } from "react-icons/fa";
import { BsPostcardFill } from "react-icons/bs";
import { RiImageEditFill } from "react-icons/ri";
import { CheckedLinksContext } from '@/Context/CheckLinksContext';

const Sidebar = () => {
    const { opened, handleSidebar, setOpened } = useContext(SidebarContext);
    const { check, setCheck } = useSearchBarContext();
    const [dashboard, setDashboard] = useState(null);
    const [profile, setProfile] = useState(null);
    const { updateInfosPage,
        toggleUpdateInfosPage,
         updatePasswordPage,
          toggleUpdatePasswordPage,
           deleteAccountPage,
           toggleDeleteAccountPage } = useContext(CheckedLinksContext);

    const { auth } = usePage().props


    useEffect(() => {
        if(window.location.pathname.match('dashboard')) {
            setDashboard(true)
        }else{
            setDashboard(false)
        }
        if(window.location.pathname.match('profile')) {
            setProfile(true)
        }else{
            setProfile(false)
        }
    }, []);

    const profileLinks = [
        {linkEng: "Update Infos", linkFr: "ُEdit Infos", linkAr: "تحديث المعلومات", href: "href01", icon:<LuClipboardEdit size={18} className='text-lightText' />, method: toggleUpdateInfosPage},
        {linkEng: "Update Password", linkFr: "Edit Mot de passe", linkAr: "تغيير كلمة السر",  href: "href02", icon:<RiLockPasswordFill size={18} className='text-lightText '  />, method: toggleUpdatePasswordPage},
        {linkEng: "Delete account", linkFr: "Supprimer le compte", linkAr: "حذف الحساب",  href: "href03", icon:<MdDeleteForever size={18} className='text-lightText '  />, method: toggleDeleteAccountPage},
        {linkEng: "Setting", linkFr: "Paramtres", linkAr: "إعدادات",  href: "href04", icon:<IoIosSettings size={18} className='text-lightText '  />, method: null},
    ];

    const dashboardLinks = [
        {linkEng: "Statistics", linkFr: "Statistiques", linkAr: "إحصائيات", href: "href01", icon:<FaChartLine size={18} className='text-lightText '  />},
        {linkEng: "Your Posts", linkFr: "Votre Posts", linkAr: "مقالاتك",  href: "href02", icon:<BsPostcardFill size={18} className='text-lightText '  />},
        {linkEng: "Create Post", linkFr: "Créer un Post", linkAr: "أنشر مقالا",  href: "href03", icon:<RiImageEditFill size={18} className='text-lightText '  />},
        {linkEng: "Setting", linkFr: "Paramtres", linkAr: "إعدادات",  href: "href04", icon:<IoIosSettings size={18} className='text-lightText '  />},
    ]


  return (

    <div className={`${opened ? "w-[240px]" : "w-[40px]"} ${check === 'ar' ? "fixed right-0 " : "fixed left-0 "}  h-screen bg-darkText duration-300 text-lightText `}>
        <div className={`${check === 'ar' ? "flex-row-reverse" : "flex-row"} flex  justify-between mt-3  mx-1  border-b-[1px] border-[#f1f1f125] py-2`}>
            {opened && (
                <h2>@{auth.user.name}</h2>
            )}

            {opened&&check==='fr' && (
                 <FaArrowCircleLeft size={24} className={`${
                    opened ? "" :
                    ""} `} onClick={() => setOpened(!opened)} />
            ) }
            {!opened&&check==='fr' && (
                 <FaArrowCircleRight size={24} className={`${
                    opened ? "" :
                    ""} `} onClick={() => setOpened(!opened)} />
            ) }
            {opened&&check==='eng' && (
                 <FaArrowCircleLeft size={24} className={`${
                    opened ? "" :
                    ""} `} onClick={() => setOpened(!opened)} />
            ) }
            {!opened&&check==='eng' && (
                 <FaArrowCircleRight size={24} className={`${
                    opened ? "" :
                    ""} `} onClick={() => setOpened(!opened)} />
            ) }
            {opened&&check==='ar' && (
                 <FaArrowCircleRight size={24} className={`${
                    opened ? "" :
                    ""} `} onClick={() => setOpened(!opened)} />
            ) }
            {!opened&&check==='ar' && (
                 <FaArrowCircleLeft size={24} className={`${
                    opened ? "" :
                    ""} `} onClick={() => setOpened(!opened)} />
            ) }



        </div>
        <div className='flex flex-col   align-middle gap-3 mt-5 px-3'>
        {opened && (
            <div className={`w-full bg-lightBg text-darkText p-1  rounded-lg flex ${check === 'ar' ? "flex-row-reverse" : "flex-row"} align-middle items-center gap-3`}>
            {profile && (<ImProfile />) }{dashboard && (<MdDashboard />)}
            <h2 >{dashboard && (check === "eng" ? "Dashboard Panel" : check === 'ar' ? "لوحة التحكم" : check === "fr" ? "Tableau de Board" : null)}{profile && (check === "eng" ? "Profile Page" : check === 'ar' ? "الصفحة الشخصية" : check === "fr" ? "Page de Profile" : null)}</h2>
        </div>
        )}

            <div className='mt-3'>
            {profile && (
                profileLinks.map((profileLink, i) => (
                    <div className={`flex ${check === 'ar' ? "flex-row-reverse" : "flex-row"} items-center gap-1 mb-[20px]`}>
                        <ul>
                        {profileLink.icon}
                            {opened &&
                                (check === "ar" ? (
                                    <li className={`${check === 'ar' ? "text-right" : "text-left "} cursor-pointer`} key={i} onClick={profileLink.method} >{profileLink.linkAr}</li>
                                ) : check === 'eng' ? (
                                    <li className={`${check === 'ar' ? "text-right" : "text-left "} cursor-pointer`} key={i} onClick={profileLink.method} >{profileLink.linkEng}</li>
                                ) : check === "fr" ? (
                                    <li className={`${check === 'ar' ? "text-right" : "text-left "} cursor-pointer`} key={i} onClick={profileLink.method} >{profileLink.linkFr}</li>
                                ) : null)
                            }
                        </ul>


                    </div>

                ))
            )}
            {dashboard && (
                dashboardLinks.map((dashboardLink, i) => (
                    <div className={`flex ${check === 'ar' ? "flex-row-reverse" : "flex-row"} items-center gap-1 mb-[20px]`}>
                    {dashboardLink.icon}
                    {opened &&
                        (check === "ar" ? (
                            <Link className={`${check === 'ar' ? "text-right" : "text-left "}`} key={i}  href={dashboardLink.href}>{dashboardLink.linkAr}</Link>
                        ) : check === 'eng' ? (
                            <Link className={`${check === 'ar' ? "text-right" : "text-left "}`} key={i}  href={dashboardLink.href}>{dashboardLink.linkEng}</Link>
                        ) : check === "fr" ? (
                            <Link className={`${check === 'ar' ? "text-right" : "text-left "}`} key={i}  href={dashboardLink.href}>{dashboardLink.linkFr}</Link>
                        ) : null)
                    }

                    </div>

                ))
            )}
            </div>

        </div>
    </div>
  )
}

export default Sidebar
