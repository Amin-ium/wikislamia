import React, { useContext } from 'react'
import { usePage } from '@inertiajs/inertia-react';


import { SidebarContextProvider } from '@/Context/SidebarContext';
import { DarkModeContext } from '@/Context/DarkModeContext';
import Sidebar from '@/Components/Sidebar';


const SidbarDashboardLayout = ({user, users,  children , toggleSidebar, postsTag, postsCategory, singleUser, categories}) => {

    const {toggle, darkMode} = useContext(DarkModeContext)









  return (
    <React.Fragment>
        <SidebarContextProvider>
        {/* <Navbare/> */}
          <Sidebar

             />
        <main className={`${darkMode ? 'bg-darkText' : 'bg-lightBg'}   `}>
          {children}
        </main>
        </SidebarContextProvider>
    </React.Fragment>
  )
}

export default SidbarDashboardLayout
