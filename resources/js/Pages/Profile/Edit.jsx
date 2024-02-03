import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';
import { Head } from '@inertiajs/react';
import LayoutApp from '@/Layout/LayoutApp';
import { SidebarContextProvider } from '@/Context/SidebarContext';
import SidebarProfileLayout from '@/Layout/SidebarProfileLayout';

export default function Edit({ auth, mustVerifyEmail, status }) {
    return (
        <LayoutApp

        >
            <SidebarContextProvider>
            <SidebarProfileLayout>
            {/* <Head title="Profile" /> */}

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <UpdateProfileInformationForm
                            mustVerifyEmail={mustVerifyEmail}
                            status={status}
                            className="max-w-xl"
                        />
                    </div>

                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <UpdatePasswordForm className="max-w-xl" />
                    </div>

                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <DeleteUserForm className="max-w-xl" />
                    </div>
                </div>
            </div>
            </SidebarProfileLayout>
            </SidebarContextProvider>
        </LayoutApp>
    );
}
