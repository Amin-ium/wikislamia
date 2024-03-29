import ChartDashboard from '@/Components/ChartDashboard';
import CreatePost from '@/Components/Dashboard/CreatePost';
import Setting from '@/Components/Dashboard/Setting';
import StatisticsDashboard from '@/Components/Dashboard/StatisticsDashboard';
import YourPosts from '@/Components/Dashboard/YourPosts';
import { CheckedLinksContext } from '@/Context/CheckLinksContext';
import { useSearchBarContext } from '@/Context/SearchBarContext';
import { SidebarContext, SidebarContextProvider } from '@/Context/SidebarContext'
import LayoutApp from '@/Layout/LayoutApp'
import React, { useContext } from 'react'

const DashboardSection = ({posts, users}) => {
    const { opened } = useContext(SidebarContext);
    const { check, setCheck } = useSearchBarContext();
    const { statisticsDashboard,  yourPosts, createPost, setting} = useContext(CheckedLinksContext);
console.log(users);

  return (


    <SidebarContextProvider>
    <div className={`${opened ? "w-[calc(100%-240px)] " : "w-[calc(100%-40px)]"} ${check === 'ar' ? "float-start text-right" : "float-end text-left"} px-3 duration-300 flex flex-col    `}>
        {/* {check === "ar" ? "لوحة التحكم" : check === "fr" ? "Tableau de Board" : check === "eng" ? "Dashboard" : '' } */}
        <ChartDashboard posts={posts} users={users} />
        {statisticsDashboard && (<StatisticsDashboard posts={posts} />)}
        {yourPosts && (<YourPosts posts={posts} />)}
        {createPost && (<CreatePost posts={posts} />)}
        {setting && (<Setting posts={posts} />)}

    </div>
    </SidebarContextProvider>

  )
}

export default DashboardSection
