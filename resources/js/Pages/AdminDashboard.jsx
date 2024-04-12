import { ScrollProvider } from '@/Context/ScrollContext';
import { useSearchBarContext } from '@/Context/SearchBarContext';
import LayoutApp from '@/Layout/LayoutApp';
import SidebarLayout from '@/Layout/SidebarLayout';
import DashboardSection from '@/Sections/DashboardSection';

import { Head } from '@inertiajs/react';
import { useEffect } from 'react';

export default function AdminDashboard({ auth, posts, users }) {
    const { check, setCheck } = useSearchBarContext();

    useEffect(() => {

        if(document.location.pathname === '/dashboard') {
            console.log('dashboard');
        }else if(document.location.pathname === '/admin-dashboard'){
            console.log('not dashboard');
        }
    }, []);

    return (
        <LayoutApp
            user={auth.user}

        >
            <ScrollProvider>
            <SidebarLayout>
            {/* <Head title="Dashboard" /> */}

            <div className="py-12">
            <DashboardSection posts={posts} users={users} />
            </div>
            </SidebarLayout>
            </ScrollProvider>
        </LayoutApp>
    );
}
