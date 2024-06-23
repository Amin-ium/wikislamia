import { ScrollProvider } from '@/Context/ScrollContext';
import { useSearchBarContext } from '@/Context/SearchBarContext';
import LayoutApp from '@/Layout/LayoutApp';
import SidebarLayout from '@/Layout/SidebarLayout';
import DashboardSection from '@/Sections/DashboardSection';

import { Head } from '@inertiajs/react';
import Edit from './Profile/Edit';

export default function Profile({ auth }) {
    const { check, setCheck } = useSearchBarContext();



    //   const reorderedArray = myarray.map(item => ({
    //     id: item.id,
    //     surah_id: item.surah_id,
    //     content: item.content,
    //     englishContent: item.englishContent,
    //     frenshContent: item.frenshContent,
    //     verseNumber: item.verseNumber,
    //     audio: item.audio,
    //     revelationType: item.revelationType
    //   }));

    //   const jsonString = JSON.stringify(reorderedArray, null, 2); // The third parameter (2) is for indentation to make it more readable
    //     console.log(jsonString);






    return (
        <LayoutApp
            user={auth.user}
        >
            <ScrollProvider>
            <SidebarLayout>
            {/* <Head title="Dashboard" /> */}

            <div className="mt-12">
            <Edit />
            </div>
            </SidebarLayout>
            </ScrollProvider>
        </LayoutApp>
    );
}
