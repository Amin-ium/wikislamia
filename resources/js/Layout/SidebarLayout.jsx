import React, { useContext } from 'react'
import { usePage } from '@inertiajs/inertia-react';
import Sidebar from '@/Components/Sidebar';
import { DarkModeContext } from '@/Context/DarkModeContext';
import Navbare from '@/Components/Navbare/Navbare';
import { SidebarContextProvider } from '@/Context/SidebarContext';

const SidebarLayout = ({user, users,  children , toggleSidebar, postsTag, postsCategory, singleUser, categories}) => {

    const {toggle, darkMode} = useContext(DarkModeContext)







console.log(categories);

  return (
    <React.Fragment>
        <SidebarContextProvider>
        {/* <Navbare/> */}
          <Sidebar
             />
        <main className={`${darkMode ? 'bg-darkBg' : 'bg-lightBg'} w-full md:h-auto `}>
          {children}
        </main>
        </SidebarContextProvider>
    </React.Fragment>
  )
}

export default SidebarLayout
