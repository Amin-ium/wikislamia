
import { CheckedLinksContext } from "@/Context/CheckLinksContext";

import {
    SidebarContext,
    SidebarContextProvider,
} from "@/Context/SidebarContext";
import LayoutApp from "@/Layout/LayoutApp";

import React, { useContext, useEffect, useState } from "react";
import { ScrollProvider } from "@/Context/ScrollContext";
import SidebarLayout from "@/Layout/SidebarLayout";
import Pagination from "@/Components/Pagination";
import PostCard from "@/Components/PostCard/PostCard";
import { useSearchBarContext } from "@/Context/SearchBarContext";
import { DarkModeContext } from "@/Context/DarkModeContext";

const DashboardSection = ({ postsTag }) => {
    const { opened } = useContext(SidebarContext);
    const { check, setCheck } = useSearchBarContext();
    const {
        statisticsDashboard,
        yourPosts,
        createPost,
        setting,
        modal,
        setModal,
    } = useContext(CheckedLinksContext);
    const { darkMode } = useContext(DarkModeContext);

    const [dashboardLink, setDashboardLink] = useState(false);
    const [myPostPage, setMyPostPage] = useState(false);
    const [selectedPost, setSelectedPost] = useState(null);

    useEffect(() => {
        if (document.location.pathname.match("dashboard")) {
            setDashboardLink(true);
        } else {
            setDashboardLink(false);
        }
    }, []);

    console.log(dashboardLink);

    // const handleMyPost = () => {
    //     setMyPost(true)

    // }




console.log(postsTag);

    return (
        <LayoutApp>
            <ScrollProvider>
                <SidebarLayout>
            <div
                className={`${
                    opened ? "w-[calc(100%-240px)] mx-auto" : "w-[calc(100%-40px)] mx-auto"
                } ${
                    check === "ar"
                        ? "float-start text-right"
                        : "float-end text-left"
                } px-3 duration-300 flex flex-col    `}
            >
                <div className='max-w-7xl flex flex-col justify-center   mx-auto sm:px-6 lg:px-8 space-y-6 mt-[70px]'>
        <Pagination className="" Component={PostCard} items={postsTag.posts}   />
        </div>
            </div>


                </SidebarLayout>
                </ScrollProvider>
                </LayoutApp>
    );
};

export default DashboardSection;
