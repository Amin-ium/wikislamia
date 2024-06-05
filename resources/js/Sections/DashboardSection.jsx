import ChartDashboard from "@/Components/ChartDashboard";
import CreatePost from "@/Components/Dashboard/CreatePost";
import { Suspense } from 'react';
import Setting from "@/Components/Dashboard/Setting";
import StatisticsDashboard from "@/Components/Dashboard/StatisticsDashboard";
import YourPosts from "@/Components/Dashboard/YourPosts";
import { CheckedLinksContext } from "@/Context/CheckLinksContext";
import { DarkModeContext } from "@/Context/DarkModeContext";
import { useSearchBarContext } from "@/Context/SearchBarContext";
import {
    SidebarContext,
    SidebarContextProvider,
} from "@/Context/SidebarContext";
import LayoutApp from "@/Layout/LayoutApp";
import { Inertia } from "@inertiajs/inertia";
import { Link } from "@inertiajs/inertia-react";
import moment from "moment";
import React, { useContext, useEffect, useState } from "react";

const DashboardSection = ({ posts, users, user, postsUser, singlePost, tags }) => {
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
        if (document.location.pathname === "/dashboard") {
            setDashboardLink(true);
        } else {
            setDashboardLink(false);
        }
    }, []);

    // const handleMyPost = () => {
    //     setMyPost(true)

    // }

    const viewPost = (id) => {
        Inertia.get(
            `/posts/${id}`,
            {},
            {
                onSuccess: (page) => {
                    if (singlePost) {
                        setSelectedPost(page.props.singlePost);
                        setModal(true);
                        console.log(page.props.singlePost);
                    } else {
                        console.error("Error: singlePost is undefined");
                    }
                },
                onError: (error) => {
                    console.error("Error fetching post:", error);
                },
            }
        );
    };

    const handlePost = (id) => {
        setModal(true);
        viewPost(id);
    };
console.log(tags);

    return (
        <SidebarContextProvider>
            <div
                className={`${
                    opened ? "w-[calc(100%-240px)] mx-auto" : "w-[calc(100%-40px)] mx-auto"
                } ${
                    check === "ar"
                        ? "float-start text-right"
                        : "float-end text-left"
                } px-3 duration-300 flex flex-col    `}
            >
                {/* {check === "ar" ? "لوحة التحكم" : check === "fr" ? "Tableau de Board" : check === "eng" ? "Dashboard" : '' } */}
                {!dashboardLink && (
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                        {/* <ChartDashboard posts={posts} users={users} />
        {statisticsDashboard && (<StatisticsDashboard posts={posts} />)}
        {yourPosts && (<YourPosts posts={posts} />)}
        {createPost && (<CreatePost posts={posts} />)}
        {setting && (<Setting posts={posts} />)} */}
                    </div>
                )}
                {dashboardLink && !yourPosts && !createPost && (
                    <Suspense fallback={<div>Loading ...</div>}>
                    <div className="pt-[100px] ">
                        {/* <Pannel  />  */}
                        <div
                            className={`${
                                darkMode ? "text-lightText" : "text-darkText"
                            } text-center `}
                        >
                            <p>
                                Hi{" "}
                                <span className=" font-bold">{user.name}</span>,
                                until now you published{" "}
                                <span className="font-bold">
                                    {postsUser.length}
                                </span>{" "}
                                posts.
                            </p>
                        </div>
                        <div>
                            <table className="w-[90%] mx-auto min-w-max table-auto text-left mt-5 rounded-lg shadow-2xl shadow-purple-900">
                                <thead
                                    className={`${
                                        darkMode
                                            ? "text-lightText"
                                            : "text-darkText"
                                    } `}
                                >
                                    <tr>
                                        <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 px-4 py-2">
                                            <p className="block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70">
                                                Post Image
                                            </p>
                                        </th>
                                        <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 px-4 py-2">
                                            <p className="block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70">
                                                Post Title
                                            </p>
                                        </th>
                                        <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 px-4 py-2">
                                            <p className="block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70">
                                                Date
                                            </p>
                                        </th>
                                        <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 px-4 py-2">
                                            <p className="block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70">
                                                Tags
                                            </p>
                                        </th>
                                        <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 px-4 py-2">
                                            <p className="block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70 text-center">
                                                Action
                                            </p>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody
                                    className={`${
                                        darkMode
                                            ? "text-lightText"
                                            : "text-darkText"
                                    } `}
                                >
                                    {postsUser?.map((post, i) => (
                                        <tr className="items-center">
                                            <td className="px-4 py-1 border-b border-blue-gray-50">
                                                <div className="flex items-center gap-3">
                                                    <img
                                                        src={'/imageusers/'+post.imagePath}
                                                        alt="Spotify"
                                                        className="inline-block relative object-center w-12 h-12 rounded-lg border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1"
                                                    />
                                                </div>
                                            </td>
                                            <td className="px-4 py-1 border-b border-blue-gray-50">
                                                <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">
                                                    {post.title}
                                                </p>
                                            </td>
                                            <td className="px-4 py-1 border-b border-blue-gray-50">
                                                <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">
                                                    {moment(
                                                        post.created_at
                                                    ).format(
                                                        "YYYY-MM-DD HH:mm:ss"
                                                    )}
                                                </p>
                                            </td>
                                            <td className="px-4 py-1 border-b border-blue-gray-50">
                                                <div className="w-max">
                                                    <div className="relative flex flex-row justify-between gap-3 items-center font-sans font-bold uppercase py-1 px-2 text-xs rounded-md">
                                                        {post.tags.map(
                                                            (tag, i) =>
                                                                tag.name
                                                                    .length >
                                                                0 ? (
                                                                    <Link key={i} href={`/dashboard/PostTag/${tag.id}`} className=" bg-green-500/20 text-lightg p-1 rounded-md">
                                                                        {
                                                                            tag.name
                                                                        }
                                                                    </Link>
                                                                ) : (
                                                                    <p className="bg-green-500/20 text-lightg p-1 rounded-md">
                                                                        no tags
                                                                    </p>
                                                                )
                                                        )}

                                                        {post.tags.length ===
                                                            0 && (
                                                            <p className="  font-normal ">
                                                                no tags
                                                            </p>
                                                        )}
                                                    </div>
                                                </div>
                                            </td>
                                            {/* <td className="px-4 py-1 border-b border-blue-gray-50">
          <div className="flex items-center gap-3">
            <div class="h-9 w-12 rounded-md border border-blue-gray-50 p-1">
              <img src="https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/logos/visa.png" alt="visa" class="inline-block relative object-center  rounded-md h-full w-full object-contain p-1" />
            </div>
            <div class="flex flex-col">
              <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal capitalize">visa
                1234
              </p>
              <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal opacity-70">06/2026</p>
            </div>
          </div>
        </td> */}
                                            <td class="px-4 py-2 border-b border-blue-gray-50 flex flex-row align-middle items-center justify-center gap-3 -mb-1">
                                                <Link
                                                    href={`/dashboard/posts/${post.id}`}
                                                    class="relative align-middle select-none font-sans font-medium text-center  transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-gray-900 hover:bg-gray-900/10 active:bg-gray-900/20 pt-3"
                                                >
                                                    <span class=" transform -translate-x-1/2  bg-green-700 text-lightText rounded-md p-1">
                                                        View
                                                    </span>
                                                </Link>
                                                <Link
                                                    href={`/posts/${post.id}`}
                                                    class="relative align-middle select-none font-sans font-medium text-center  transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-gray-900 hover:bg-gray-900/10 active:bg-gray-900/20 pt-3"
                                                >
                                                    <span class=" transform -translate-x-1/2 rounded-md  bg-red-700 text-lightText  p-1">
                                                        Delete
                                                    </span>
                                                </Link>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* {myPostPage && (
                                 <div
                                 id="default-modal"
                                 tabindex="-1"
                                 aria-hidden="true"
                                 class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
                             >
                                 <div class="relative p-4 w-full max-w-2xl max-h-full">
                                     <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                         <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                             <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                                                 Terms of Service
                                             </h3>
                                             <button
                                                 type="button"
                                                 class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                                 data-modal-hide="default-modal"
                                             >
                                                 <svg
                                                     class="w-3 h-3"
                                                     aria-hidden="true"
                                                     xmlns="http://www.w3.org/2000/svg"
                                                     fill="none"
                                                     viewBox="0 0 14 14"
                                                 >
                                                     <path
                                                         stroke="currentColor"
                                                         stroke-linecap="round"
                                                         stroke-linejoin="round"
                                                         stroke-width="2"
                                                         d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                                     />
                                                 </svg>
                                                 <span class="sr-only">
                                                     Close modal
                                                 </span>
                                             </button>
                                         </div>

                                         <div class="p-4 md:p-5 space-y-4">
                                             <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                                 With less than a month to go
                                                 before the European Union enacts
                                                 new consumer privacy laws for
                                                 its citizens, companies around
                                                 the world are updating their
                                                 terms of service agreements to
                                                 comply.
                                             </p>
                                             <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                                 The European Union’s General
                                                 Data Protection Regulation
                                                 (G.D.P.R.) goes into effect on
                                                 May 25 and is meant to ensure a
                                                 common set of data rights in the
                                                 European Union. It requires
                                                 organizations to notify users as
                                                 soon as possible of high-risk
                                                 data breaches that could
                                                 personally affect them.
                                             </p>
                                         </div>

                                         <div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                                             <button
                                                 data-modal-hide="default-modal"
                                                 type="button"
                                                 class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                             >
                                                 I accept
                                             </button>
                                             <button
                                                 data-modal-hide="default-modal"
                                                 type="button"
                                                 class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                                             >
                                                 Decline
                                             </button>
                                         </div>
                                     </div>
                                 </div>
                             </div>
                            )} */}

                        {/*  */}
                        {/* {yourPosts && !!createPost && <YourPosts postsUser={postsUser} imagePath={user.imagePath} />}
                        {createPost && <CreatePost />}
                        {setting && <Setting />} */}
                    </div>
                    </Suspense>
                )}

            <div className="w-[100%] mx-auto">
            {yourPosts ? (
                <Suspense fallback={<div>Loading ...</div>}>
                <YourPosts postsUser={postsUser} />
                </Suspense>
            ) : createPost && ! yourPosts  ? (
                <CreatePost datas={tags} user={user} />
            ) : setting ? (
                <Setting />
            ) : null}
            </div>
            </div>
        </SidebarContextProvider>
    );
};

export default DashboardSection;
