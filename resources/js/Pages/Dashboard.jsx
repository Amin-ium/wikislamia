import { ScrollProvider } from '@/Context/ScrollContext';
import { useSearchBarContext } from '@/Context/SearchBarContext';
import { InertiaProgress } from '@inertiajs/progress';
import LayoutApp from '@/Layout/LayoutApp';
import SidebarLayout from '@/Layout/SidebarLayout';
import DashboardSection from '@/Sections/DashboardSection';

import { Head } from '@inertiajs/react';
import { useEffect, useState } from 'react';

export default function Dashboard({ auth, posts, users, user, postsUser }) {
    const { check, setCheck } = useSearchBarContext();
    const [dashboardLink, setDashboardLink] = useState(false);
    console.log(postsUser);
    useEffect(() => {

        if(document.location.pathname === '/dashboard') {
            setDashboardLink(true)
        }else{
            setDashboardLink(false)
        }
    }, []);

    return (
        <LayoutApp
            user={auth.user}

        >
            <ScrollProvider>
            <SidebarLayout>
            {/* <Head title="Dashboard" /> */}
            {!dashboardLink &&
                <div className="">
                <DashboardSection posts={posts} users={users} />
                </div>
            }
             {dashboardLink &&
                <div className="">
                <DashboardSection postsUser={postsUser} user={user} />
                </div>
            }

            </SidebarLayout>
            </ScrollProvider>
        </LayoutApp>
    );
}

InertiaProgress.init({ color: '#4B5563' });
