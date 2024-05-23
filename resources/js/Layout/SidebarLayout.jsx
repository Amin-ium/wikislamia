import React, { useContext } from 'react'
import { usePage } from '@inertiajs/inertia-react';
import Sidebar from '@/Components/Sidebar';
import { DarkModeContext } from '@/Context/DarkModeContext';

import { SidebarContextProvider } from '@/Context/SidebarContext';
import Navbar from '@/Components/Navbare/Navbar';


const SidebarLayout = ({user, users,  children , toggleSidebar, postsTag, postsCategory, singleUser, categories}) => {

    const {toggle, darkMode} = useContext(DarkModeContext)







console.log(categories);

  return (
    <React.Fragment>
        <SidebarContextProvider>
        <Navbar />
          <Sidebar
             />
        <main className={` w-full md:h-auto `}>
          {children}
        </main>
        </SidebarContextProvider>
    </React.Fragment>
  )
}

export default SidebarLayout
