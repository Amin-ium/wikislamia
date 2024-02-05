import { ScrollProvider } from '@/Context/ScrollContext';
import { useSearchBarContext } from '@/Context/SearchBarContext';
import LayoutApp from '@/Layout/LayoutApp';
import SidebarLayout from '@/Layout/SidebarLayout';
import DashboardSection from '@/Sections/DashboardSection';

import { Head } from '@inertiajs/react';
import Edit from './Profile/Edit';

export default function Profile({ auth }) {
    const { check, setCheck } = useSearchBarContext();
    return (
        <LayoutApp
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Profile</h2>}
        >
            <ScrollProvider>
            <SidebarLayout>
            {/* <Head title="Dashboard" /> */}

            <div className="py-12">
            <Edit />
            </div>
            </SidebarLayout>
            </ScrollProvider>
        </LayoutApp>
    );
}
