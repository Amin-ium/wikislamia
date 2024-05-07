import { ScrollProvider } from '@/Context/ScrollContext';
import { useSearchBarContext } from '@/Context/SearchBarContext';
import LayoutApp from '@/Layout/LayoutApp';
import SidebarLayout from '@/Layout/SidebarLayout';
import DashboardSection from '@/Sections/DashboardSection';

import { Head } from '@inertiajs/react';
import { useEffect, useState } from 'react';

export default function Dashboard({ auth, posts, users, user, postsUser }) {
    const { check, setCheck } = useSearchBarContext();
    const [dashboardLink, setDashboardLink] = useState(false);

    useEffect(() => {

        if(document.location.pathname === '/dashboard') {
            setDashboardLink(true)
        }else{
            setDashboardLink(false)
        }
    }, []);
    console.log(posts);
    return (
        <LayoutApp
            user={auth.user}

        >
            <ScrollProvider>
            <SidebarLayout>
            {/* <Head title="Dashboard" /> */}
            {!dashboardLink &&
                <div className="py-12">
                <DashboardSection posts={posts} users={users} />
                </div>
            }
             {dashboardLink &&
                <div className="py-12">
                <DashboardSection postsUser={postsUser} user={user} />
                </div>
            }

            </SidebarLayout>
            </ScrollProvider>
        </LayoutApp>
    );
}
