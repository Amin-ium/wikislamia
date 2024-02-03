import { useSearchBarContext } from '@/Context/SearchBarContext';
import { SidebarContext, SidebarContextProvider } from '@/Context/SidebarContext';
import React, { useContext, useEffect, useState } from 'react'
import { FaArrowCircleRight } from "react-icons/fa";

const Sidebar = () => {
    const { opened, handleSidebar, setOpened } = useContext(SidebarContext);
    const { check, setCheck } = useSearchBarContext();


  return (

    <div className={`${opened ? "w-[240px]" : "w-[40px]"} ${check === 'ar' ? "float-end" : "float-start"} h-screen bg-darkText duration-300 text-lightText `}>
        <div className={`${check === 'ar' ? "flex-row-reverse" : "flex-row"} flex  justify-between mt-3  mx-1`}>
            {opened && (
                <h2>Wikislamia</h2>
            )}

            <FaArrowCircleRight size={24} className={`${
                opened ? "" :
                ""} `} onClick={() => setOpened(!opened)} />
        </div>
    </div>
  )
}

export default Sidebar
