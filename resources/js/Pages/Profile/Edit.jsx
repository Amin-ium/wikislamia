
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';
import { Head } from '@inertiajs/react';
import LayoutApp from '@/Layout/LayoutApp';



import { useSearchBarContext } from '@/Context/SearchBarContext';
import { useContext, useState } from 'react';
import { SidebarContext, SidebarContextProvider } from '@/Context/SidebarContext';
import { CheckedLinksContext } from '@/Context/CheckLinksContext';



export default function Edit({ auth, mustVerifyEmail, status }) {
    const { opened } = useContext(SidebarContext);
    const { check, setCheck } = useSearchBarContext();
    const { updateInfosPage,  updatePasswordPage, deleteAccountPage} = useContext(CheckedLinksContext);

    console.log(updateInfosPage);
    return (





            <div className={`${opened ? "w-[calc(100%-240px)]" : "w-[calc(100%-40px)]"} ${check === 'ar' ? "float-start text-right" : "float-end text-left"} px-3 duration-300   bg-lightBg`}>
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    {updateInfosPage && (<div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <UpdateProfileInformationForm
                            mustVerifyEmail={mustVerifyEmail}
                            status={status}
                            className="max-w-xl"
                        />
                    </div>)}

                    {updatePasswordPage && (
                        <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <UpdatePasswordForm className="max-w-xl" />
                    </div>
                    )}

                        {deleteAccountPage && (
                             <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                             <DeleteUserForm className="max-w-xl" />
                         </div>
                        )}

                </div>
            </div>


    );
}
