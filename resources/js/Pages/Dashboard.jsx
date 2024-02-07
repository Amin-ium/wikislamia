import { ScrollProvider } from '@/Context/ScrollContext';
import { useSearchBarContext } from '@/Context/SearchBarContext';
import LayoutApp from '@/Layout/LayoutApp';
import SidebarLayout from '@/Layout/SidebarLayout';
import DashboardSection from '@/Sections/DashboardSection';

import { Head } from '@inertiajs/react';

export default function Dashboard({ auth, posts }) {
    const { check, setCheck } = useSearchBarContext();
    console.log(posts);
    return (
        <LayoutApp
            user={auth.user}

        >
            <ScrollProvider>
            <SidebarLayout>
            {/* <Head title="Dashboard" /> */}

            <div className="py-12">
            <DashboardSection posts={posts} />
            </div>
            </SidebarLayout>
            </ScrollProvider>
        </LayoutApp>
    );
}
