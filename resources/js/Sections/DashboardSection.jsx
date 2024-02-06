import { useSearchBarContext } from '@/Context/SearchBarContext';
import { SidebarContext, SidebarContextProvider } from '@/Context/SidebarContext'
import LayoutApp from '@/Layout/LayoutApp'
import React, { useContext } from 'react'

const DashboardSection = () => {
    const { opened } = useContext(SidebarContext);
    const { check, setCheck } = useSearchBarContext();
  return (


    <SidebarContextProvider>
    <div className={`${opened ? "w-[calc(100%-240px)]" : "w-[calc(100%-40px)]"} ${check === 'ar' ? "float-start text-right" : "float-end text-left"} px-3 duration-300   `}>
        {check === "ar" ? "لوحة التحكم" : check === "fr" ? "Tableau de Board" : check === "eng" ? "Dashboard" : '' }
    </div>
    </SidebarContextProvider>

  )
}

export default DashboardSection
