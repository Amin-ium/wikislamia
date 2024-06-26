import { useSearchBarContext } from '@/Context/SearchBarContext';
import { SidebarContext, SidebarContextProvider } from '@/Context/SidebarContext';
import { usePage } from '@inertiajs/inertia-react';
import logoLight from "../../../public/assets/publicImages/logoLight.svg";
import lightLogo from "../../../public/assets/publicImages/Group144444.svg";
import { Link} from "@inertiajs/inertia-react";
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
import { DarkModeContext } from '@/Context/DarkModeContext';


const Sidebar = () => {
    const { opened, handleSidebar, setOpened } = useContext(SidebarContext);
    const { check, setCheck } = useSearchBarContext();
    const [dashboard, setDashboard] = useState(null);
    const [adminDashboard, setAdminDashboard] = useState(null);
    const [profile, setProfile] = useState(null);
    const [updateInfosLink, setUpdateInfosLink] = useState(false);
    const [updatePasswordLink, setUpdatePasswordLink] = useState(false);
    const [deleteAccountLink, setDeleteAccountLink] = useState(false);
    const { updateInfosPage,
            setUpdateInfosPage,
            updatePasswordPage,
            setUpdatePasswordPage,
            deleteAccountPage,
            setDeleteAccountPage,
            statisticsDashboard,
            setStatisticsDashboard,
            yourPosts, setYourPosts,
            createPost, setCreatePost,
            setting, setSetting, turnOffLinks,
            toggleStatisticsDashboard, toggleYourPosts, toggleCreatePost, toggleSetting } = useContext(CheckedLinksContext);

    const { auth } = usePage().props
    const { toggle, darkMode } = useContext(DarkModeContext);
    const [dashboardLink, setDashboardLink] = useState(false);
    const [checkedLink, setCheckedLink] = useState('');
    const [adminDashboardLink, setAdminDashboardLink] = useState(false);

    console.log(createPost);
    console.log(yourPosts);





    useEffect(() => {
        if(window.location.pathname === '/dashboard') {
            setDashboard(true)
            setProfile(false)
            setAdminDashboard(false)

        }
        else if(window.location.pathname === '/profile') {
            setProfile(true)
            setDashboard(false)
            setAdminDashboard(false)
        }else if(window.location.pathname === '/admin-dashboard'){
            setProfile(false)
            setDashboard(false)
            setAdminDashboard(true)
        }else if(window.location.pathname.includes('dashboard')){
            setProfile(false)
            setDashboard(true)
            setAdminDashboard(false)
        }


    }, []);

    const toggleUpdateInfosPage = () => {
        setUpdateInfosPage(true);
        setUpdatePasswordPage(false);
        setDeleteAccountPage(false);
        setCheckedLink('updateInfosPage')
      };

      const toggleUpdatePasswordPage = () => {
        setUpdateInfosPage(false);
        setUpdatePasswordPage(true);
        setDeleteAccountPage(false);
        setCheckedLink('updatePasswordPage')
      };

      const toggleDeleteAccountPage = () => {
        setUpdateInfosPage(false);
        setUpdatePasswordPage(false);
        setDeleteAccountPage(true);
        setCheckedLink('deleteAccountPage')
      };

      // Dashboard Links



      useEffect(() => {
        if(updateInfosPage) {
            setUpdateInfosLink(true)
            setUpdatePasswordLink(false)
            setDeleteAccountLink(true)
        }else if(updatePasswordPage) {
            setUpdateInfosLink(false)
            setUpdatePasswordLink(true)
            setDeleteAccountLink(false)
        }else if(deleteAccountLink) {
            setUpdateInfosLink(false)
            setUpdatePasswordLink(false)
            setDeleteAccountLink(true)
        }
    }, []);

      const profileLinks = [
        {linkEng: "Update Infos", linkFr: "ُEdit Infos", linkAr: "تحديث المعلومات", href: "href01", icon:<LuClipboardEdit size={opened ? 18 : 22} className={`${checkedLink === 'updateInfosPage' ? "text-lightText" : ' text-gray-500'}  cursor-pointer`} onClick={toggleUpdateInfosPage} />, method: toggleUpdateInfosPage, linkElementAr: <p className={`${checkedLink === 'updateInfosPage' ? "text-lightText" : ' text-gray-500'} ${check === 'ar' ? "text-right" : "text-left "}  `}>{check === 'ar' ? "تحديث المعلومات" : check === 'eng' ? "Update Infos" : check === 'fr' ? "Edit Infos" : null}</p>},
        {linkEng: "Update Password", linkFr: "Edit Mot de passe", linkAr: "تغيير كلمة السر",  href: "href02", icon:<RiLockPasswordFill size={opened ? 18 : 22} className={` text-lightText cursor-pointer`} onClick={toggleUpdatePasswordPage}  />, method: toggleUpdatePasswordPage, linkElementAr: <p className={`${check === 'ar' ? "text-right" : "text-left "}  ${updateInfosLink ? "  " : ""} `}>{check === 'ar' ? "تغيير كلمة السر" : check === 'eng' ? "Update Password" : check === 'fr' ? "Editer Mot de passe" : null}</p>},
        {linkEng: "Delete account", linkFr: "Supprimer le compte", linkAr: "حذف الحساب",  href: "href03", icon:<MdDeleteForever size={opened ? 18 : 22} className={` text-lightText cursor-pointer`} onClick={toggleDeleteAccountPage}  />, method: toggleDeleteAccountPage, linkElementAr: <p className={`${check === 'ar' ? "text-right" : "text-left "}  ${updateInfosLink ? "  " : ""} `}>{check === 'ar' ? "حذف الحساب" : check === 'eng' ? "Delete Account" : check === 'fr' ? "Suprimer le compte" : null}</p>},
        {linkEng: "Setting", linkFr: "Paramtres", linkAr: "إعدادات",  href: "href04", icon:<IoIosSettings size={opened ? 18 : 22} className={` text-lightText cursor-pointer`}  />, method: null, linkElementAr: <p className={`${check === 'ar' ? "text-right" : "text-left "}  ${updateInfosLink ? "  " : ""} `}>{check === 'ar' ? "إعدادات" : check === 'eng' ? "Setting" : check === 'fr' ? "Paramtres" : null}</p>},
    ];

    const dashboardLinks = [
        {linkEng: "Statistics", linkFr: "Statistiques", linkAr: "إحصائيات", href: "href01", icon:<FaChartLine size={opened ? 18 : 22} className={` text-lightText cursor-pointer`} onClick={toggleStatisticsDashboard}  />, method: toggleStatisticsDashboard},
        {linkEng: "Your Posts", linkFr: "Votre Posts", linkAr: "مقالاتك",  href: "href02", icon:<BsPostcardFill size={opened ? 18 : 22} className={` text-lightText cursor-pointer`} onClick={toggleYourPosts}  />, method: toggleYourPosts},
        {linkEng: "Create Post", linkFr: "Créer un Post", linkAr: "أنشر مقالا",  href: "href03", icon:<RiImageEditFill size={opened ? 18 : 22} className={` text-lightText cursor-pointer`} onClick={toggleCreatePost}  />, method: toggleCreatePost},
        {linkEng: "Setting", linkFr: "Paramtres", linkAr: "إعدادات",  href: "href04", icon:<IoIosSettings size={opened ? 18 : 22} className={` text-lightText cursor-pointer`} onClick={toggleSetting}  />, method: toggleSetting},
    ]

    const adminDashboardLinks = [
        {linkEng: "Statistics", linkFr: "Statistiques", linkAr: "إحصائيات", href: "href01", icon:<FaChartLine size={opened ? 18 : 22} className={` text-lightText cursor-pointer`} onClick={toggleStatisticsDashboard}  />, method: toggleStatisticsDashboard},
        {linkEng: "All Posts", linkFr: "Tous les Posts", linkAr: "جميع المقالات",  href: "href02", icon:<BsPostcardFill size={opened ? 18 : 22} className={` text-lightText cursor-pointer`} onClick={toggleYourPosts}  />, method: toggleYourPosts},
        {linkEng: "All Tags", linkFr: "Tous les Tags", linkAr: "أنشر مقالا",  href: "href03", icon:<RiImageEditFill size={opened ? 18 : 22} className={` text-lightText cursor-pointer`} onClick={toggleCreatePost}  />, method: toggleCreatePost},
        {linkEng: "Setting", linkFr: "Paramtres", linkAr: "إعدادات",  href: "href04", icon:<IoIosSettings size={opened ? 18 : 22} className={` text-lightText cursor-pointer`} onClick={toggleSetting}  />, method: toggleSetting},
    ]



console.log(checkedLink);

  return (

    <div className={`${opened ? "w-[240px]" : "w-[40px] xl:items-center"} ${check === 'ar' ? "fixed right-0 " : "fixed left-0 "}  h-screen bg-darkText duration-300 text-lightText xl:flex xl:flex-col flex flex-col z-20 `}>
        <div>

                <Link href="/" className=" ">
                <img
                    className={`${opened ? "w-[200px] h-[60px]" : "w-[100px] h-[30px] my-3"}    `}
                    src={darkMode&&opened ? logoLight :
                        !darkMode&&opened ? logoLight :
                        darkMode&&!opened ? lightLogo :
                        !darkMode&&!opened ? lightLogo: "" }
                    alt=""
                />
            </Link>


        </div>
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

            <div className={`w-full bg-lightBg text-darkText p-1  rounded-lg flex ${check === 'ar' ? "flex-row-reverse" : "flex-row"} align-middle items-center gap-3`}>

            {profile&&!opened ? <ImProfile className='cursor-pointer' onClick={turnOffLinks} />
            : profile&&opened ?
            <div className={`flex ${check === 'ar' ? "flex-row-reverse" : "flex-row"} items-center gap-1`}>
            <MdDashboard onClick={turnOffLinks} />
            <Link href="/profile" onClick={turnOffLinks}>{profile && (check === "eng" ? "Profile Page" : check === 'ar' ? "الصفحة الشخصية" : check === "fr" ? "Page de Profile" : null)}</Link>
            </div> : null}
            {dashboard&&!opened ? <MdDashboard  onClick={turnOffLinks} />
            : dashboard&&opened ?
            <div className={`flex ${check === 'ar' ? "flex-row-reverse" : "flex-row"} items-center gap-1`}>
            <MdDashboard onClick={turnOffLinks} />
            <Link href="/dashboard" onClick={turnOffLinks}>{dashboard && (check === "eng" ? "Dashboard Panel" : check === 'ar' ? "لوحة التحكم" : check === "fr" ? "Tableau de Board" : null)}{profile && (check === "eng" ? "Profile Page" : check === 'ar' ? "الصفحة الشخصية" : check === "fr" ? "Page de Profile" : null)}</Link>
            </div> : null}
            {adminDashboard&&!opened ? <MdDashboard  onClick={turnOffLinks} />
            : adminDashboard&&opened ?
            <div className={`flex ${check === 'ar' ? "flex-row-reverse" : "flex-row"} items-center gap-1`}>
            <MdDashboard onClick={turnOffLinks} />
            <Link href="/admin-dashboard" onClick={turnOffLinks}>{adminDashboard && (check === "eng" ? "Admin Dashboard Panel" : check === 'ar' ? "لوحة تحكم المسؤول" : check === "fr" ? "Tableau de Board Admin" : null)}{profile && (check === "eng" ? "Profile Page" : check === 'ar' ? "الصفحة الشخصية" : check === "fr" ? "Page de Profile" : null)}</Link>
            </div> : null}

        </div>


            <div className='mt-3'>
            {profile && (
                profileLinks.map((profileLink, i) => (
                    <div className={`flex ${check === 'ar' ? "flex-row-reverse" : "flex-row"} items-center gap-1 mb-[20px]`}>
                        <ul className={`flex items-center  gap-1 ${check === "ar" ? "flex-row-reverse" : "flex-row"} ${opened ? "" : "justify-center"} `}>
                        {profileLink.icon}
                            {opened &&

                                    <li className={`${check === 'ar' ? "text-right" : "text-left "}   cursor-pointer`} key={i} onClick={profileLink.method} >{profileLink.linkElementAr}</li>



                            }
                        </ul>


                    </div>

                ))
            )}
            {dashboard && (
                dashboardLinks.map((dashboardLink, i) => (
                    <div className={`flex ${check === 'ar' ? "flex-row-reverse" : "flex-row"} items-center gap-1 mb-[20px]`}>
                         <ul className={`flex items-center  gap-1 ${check === "ar" ? "flex-row-reverse" : "flex-row"} ${opened ? "" : "justify-center"} `}>
                    {dashboardLink.icon}
                    {opened &&
                        (check === "ar" ? (
                            <li className={`${check === 'ar' ? "text-right" : "text-left "} cursor-pointer`} key={i} onClick={dashboardLink.method}  >{dashboardLink.linkAr}</li>
                        ) : check === 'eng' ? (
                            <li className={`${check === 'ar' ? "text-right" : "text-left "} cursor-pointer`} key={i} onClick={dashboardLink.method}  >{dashboardLink.linkEng}</li>
                        ) : check === "fr" ? (
                            <li className={`${check === 'ar' ? "text-right" : "text-left "} cursor-pointer`} key={i} onClick={dashboardLink.method}  >{dashboardLink.linkFr}</li>
                        ) : null)
                    }
                    </ul>

                    </div>

                ))
            )}

{adminDashboard && (
                adminDashboardLinks.map((dashboardLink, i) => (
                    <div className={`flex ${check === 'ar' ? "flex-row-reverse" : "flex-row"} items-center gap-1 mb-[20px]`}>
                         <ul className={`flex items-center  gap-1 ${check === "ar" ? "flex-row-reverse" : "flex-row"} ${opened ? "" : "justify-center"} `}>
                    {dashboardLink.icon}
                    {opened  &&
                        (check === "ar" ? (
                            <li className={`${check === 'ar' ? "text-right" : "text-left "} cursor-pointer`} key={i} onClick={dashboardLink.method}  >{dashboardLink.linkAr}</li>
                        ) : check === 'eng' ? (
                            <li className={`${check === 'ar' ? "text-right" : "text-left "} cursor-pointer`} key={i} onClick={dashboardLink.method}  >{dashboardLink.linkEng}</li>
                        ) : check === "fr" ? (
                            <li className={`${check === 'ar' ? "text-right" : "text-left "} cursor-pointer`} key={i} onClick={dashboardLink.method}  >{dashboardLink.linkFr}</li>
                        ) : null)
                    }
                    </ul>

                    </div>

                ))
            )}
            </div>

        </div>
    </div>
  )
}

export default Sidebar
