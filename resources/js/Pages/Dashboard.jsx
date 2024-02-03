import { ScrollProvider } from '@/Context/ScrollContext';
import { useSearchBarContext } from '@/Context/SearchBarContext';
import LayoutApp from '@/Layout/LayoutApp';
import SidbarDashboardLayout from '@/Layout/SidebarDashboardLayout';
import DashboardSection from '@/Sections/DashboardSection';

import { Head } from '@inertiajs/react';

export default function Dashboard({ auth }) {
    const { check, setCheck } = useSearchBarContext();
    return (
        <LayoutApp
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <ScrollProvider>
            <SidbarDashboardLayout>
            {/* <Head title="Dashboard" /> */}

            <div className="py-12">
            <DashboardSection />
            </div>
            </SidbarDashboardLayout>
            </ScrollProvider>
        </LayoutApp>
    );
}
