import { ScrollProvider } from "@/Context/ScrollContext";
import { useSearchBarContext } from "@/Context/SearchBarContext";
import { InertiaProgress } from "@inertiajs/progress";
import LayoutApp from "@/Layout/LayoutApp";
import SidebarLayout from "@/Layout/SidebarLayout";

import { Head } from "@inertiajs/react";
import { useContext, useEffect, useState } from "react";
import { DarkModeContext } from "@/Context/DarkModeContext";
import { Link } from "@inertiajs/inertia-react";

export default function MyPost({
    singlePost
}) {
    const { check, setCheck } = useSearchBarContext();
    const [dashboardLink, setDashboardLink] = useState(false);
    const { darkMode } = useContext(DarkModeContext);

    console.log(singlePost);

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

                        <div class="w-2/3 mx-auto my-[100px]   flex flex-col justify-center text-lightText ">
                            <div className="w-[50%] flex flex-col mx-auto justify-center shadow-xl shadow-purple-700">
                                <div className="w-full flex justify-center relative">
                                    <img className="w-full " src="https://www.shutterstock.com/image-photo/sunset-view-casablanca-cityscape-third-600nw-1844238001.jpg" alt="" />
                                    <span className="bg-darkText text-lightText absolute top-0 right-0 font-bold text-sm p-1">9 min ago</span>
                                </div>
                                <div className="px-5 py-3">
                                    <div className="flex flex-row gap-3 justify-between items-center">
                                        <div>
                                            <h2>{singlePost.title}</h2>
                                            <h3>{singlePost.user.name}</h3>
                                        </div>
                                        <div>
                                            {singlePost.tags?.map((tag,i) =>
                                                <p className="text-sm ">{tag.name}</p>
                                            )}
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
