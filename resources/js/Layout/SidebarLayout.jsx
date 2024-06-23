import React, { useContext } from 'react'
import { usePage } from '@inertiajs/inertia-react';




import Navbar from '@/Components/Navbare/Navbar';
import { DarkModeContext } from '@/Context/DarkModeContext';
import { SidebarContext, SidebarContextProvider } from '@/Context/SidebarContext';
import Sidebar from '@/Components/Sidebar';



const SidebarLayout = ({user, users,  children , toggleSidebar, postsTag, postsCategory, singleUser, categories}) => {

    const {toggle, darkMode} = useContext(DarkModeContext)

    const { opened } = useContext(SidebarContext);





console.log(opened);

  return (
    <React.Fragment>
        <SidebarContextProvider>
        <Navbar />
          <Sidebar
             />
        <main className={` ${opened ? "w-[calc(100%-240px)]" : "w-[calc(100%-40px)]"} md:h-auto z-10`}>
          {children}
        </main>
        </SidebarContextProvider>
    </React.Fragment>
  )
}

export default SidebarLayout
