import { ScrollProvider } from "@/Context/ScrollContext";
import { useSearchBarContext } from "@/Context/SearchBarContext";
import { InertiaProgress } from "@inertiajs/progress";
import LayoutApp from "@/Layout/LayoutApp";
import SidebarLayout from "@/Layout/SidebarLayout";

import { Head } from "@inertiajs/react";
import { useContext, useEffect, useState } from "react";
import { DarkModeContext } from "@/Context/DarkModeContext";
import { Link } from "@inertiajs/inertia-react";
import moment from "moment";

export default function Post({singlePost}) {
    const { check, setCheck } = useSearchBarContext();
    const [dashboardLink, setDashboardLink] = useState(false);
    const { darkMode } = useContext(DarkModeContext);



    useEffect(() => {
        if (
            document.location.pathname === "/dashboard/posts/9" ||
            document.location.pathname === "/dashboard"
        ) {
            setDashboardLink(true);
        } else {
            setDashboardLink(false);
        }
    }, []);



    return (
        <LayoutApp>
            <ScrollProvider>
                <SidebarLayout>

                        <div class={`w-2/3 mx-auto my-[100px]   flex flex-col justify-center  `}>
                            <div className="w-[70%] flex flex-col mx-auto justify-center shadow-xl shadow-purple-700">
                                <div className="w-full flex justify-center relative">
                                    <img className="w-full " src="https://www.shutterstock.com/image-photo/sunset-view-casablanca-cityscape-third-600nw-1844238001.jpg" alt="" />
                                    <span className="bg-darkText text-lightText absolute top-0 right-0 font-bold text-xl px-5 py-4 rounded-full">{moment(singlePost.created_at).format("DD ")}</span>
                                    <span className="bg-darkText text-lightText absolute bottom-0 left-0 font-bold text-lg py-1 px-2">{moment(singlePost.created_at).format("MMMM")}</span>
                                </div>
                                <div className="px-5 py-3">
                                    <div className="w-full flex flex-row  justify-between items-center">
                                        <div className="w-full py-3 ">
                                            <h2 className={`${darkMode ? 'text-lightText' : 'text-darkText'} text-xl font-bold`}>{singlePost.title}</h2>
                                            <h3 className={`${darkMode ? 'text-lightText' : 'text-darkText'} text-md font-semibold`}>Writed by: {singlePost.user.name}</h3>
                                        </div>
                                        <div className="w-full flex justify-end ">
                                            {singlePost.tags?.map((tag,i) =>
                                                <p className={`${darkMode ? 'text-lightText' : 'text-darkText'} text-sm `}>{tag.name}</p>
                                            )}
                                            <p className="bg-darkText text-lightText  font-semibold text-sm px-1 rounded-md ">{moment(singlePost.created_at).format("MMMM DD YYYY HH:mm:ss")}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <p>{singlePost.description}</p>
                                    </div>
                                </div>
                            </div>


                        </div>

                </SidebarLayout>
            </ScrollProvider>
        </LayoutApp>
    );
}

InertiaProgress.init({ color: "#4B5563" });

