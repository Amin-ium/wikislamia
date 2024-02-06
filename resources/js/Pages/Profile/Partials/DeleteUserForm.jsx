import { useRef, useState } from 'react';
import DangerButton from '@/Components/DangerButton';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import Modal from '@/Components/Modal';
import SecondaryButton from '@/Components/SecondaryButton';
import TextInput from '@/Components/TextInput';
import { useForm } from '@inertiajs/react';
import { useSearchBarContext } from '@/Context/SearchBarContext';

export default function DeleteUserForm({ className = '' }) {
    const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
    const passwordInput = useRef();
    const { check, setCheck } = useSearchBarContext();

    const {
        data,
        setData,
        delete: destroy,
        processing,
        reset,
        errors,
    } = useForm({
        password: '',
    });

    const confirmUserDeletion = () => {
        setConfirmingUserDeletion(true);
    };

    const deleteUser = (e) => {
        e.preventDefault();

        destroy(route('profile.destroy'), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
            onError: () => passwordInput.current.focus(),
            onFinish: () => reset(),
        });
    };

    const closeModal = () => {
        setConfirmingUserDeletion(false);

        reset();
    };

    return (
        <section className={`space-y-6 bg-grayBg`}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">
                {check === "eng" ? "Delete account" : check === "fr" ? "Supprimer le Compte" : check === "ar" ? "حذف الحساب" : null}
                </h2>

                <p className="mt-1 text-sm text-gray-600">

                    {check === "eng" ?
                    "Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain"
                    : check === "fr" ? " Une fois votre compte supprimé, toutes ses ressources et données seront définitivement supprimées. Avant de supprimer votre compte, veuillez télécharger toutes les données ou informations que vous souhaitez conserver"
                    : check === "ar" ? "بمجرد حذف حسابك، سيتم حذف جميع موارده وبياناته نهائيًا. قبل حذف حسابك، يرجى تنزيل أي بيانات أو معلومات ترغب في الاحتفاظ بها" : null}


                </p>
            </header>

            <DangerButton onClick={confirmUserDeletion}>
            {check === "eng" ? "Delete Account" : check === "fr" ? "Supprimer le Compte" : check === "ar" ? "جذف الحساب" : null}
            </DangerButton>

            <Modal show={confirmingUserDeletion} onClose={closeModal}>
                <form onSubmit={deleteUser} className="p-6">
                    <h2 className="text-lg font-medium text-gray-900">

                        {check === "eng" ? "Are you sure you want to delete your account?" : check === "fr" ? "Êtes-vous sûr de vouloir supprimer votre compte ?" : check === "ar" ? "هل انت متأكد انك تريد حذف حسابك؟" : null}
                    </h2>

                    <p className="mt-1 text-sm text-gray-600">
                        {check === "eng" ?
                    "Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account"
                    : check === "fr" ? "Une fois votre compte supprimé, toutes ses ressources et données seront définitivement supprimées. Veuillez saisir votre mot de passe pour confirmer que vous souhaitez supprimer définitivement votre compte"
                    : check === "ar" ? "بمجرد حذف حسابك، سيتم حذف جميع موارده وبياناته نهائيًا. الرجاء إدخال كلمة المرور الخاصة بك لتأكيد رغبتك في حذف حسابك نهائيًا" : null}
                    </p>

                    <div className="mt-6">
                        <InputLabel htmlFor="password" value={check === "eng" ? "Password" : check === "fr" ? "Le Mot de passe" : check === "ar" ? " كلمة السر" : null} className="sr-only" />

                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            ref={passwordInput}
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                            className="mt-1 block w-3/4"
                            isFocused
                            placeholder="Password"
                        />

                        <InputError message={errors.password} className="mt-2" />
                    </div>

                    <div className="mt-6 flex justify-end">
                        <SecondaryButton onClick={closeModal}>
                        {check === "eng" ? "Cancel" : check === "fr" ? "Abandoner" : check === "ar" ? "إلغاء" : null}
                        </SecondaryButton>

                        <DangerButton className="ms-3" disabled={processing}>
                        {check === "eng" ? "Delete Account" : check === "fr" ? "Supprimer le Compte" : check === "ar" ? "جذف الحساب" : null}
                        </DangerButton>
                    </div>
                </form>
            </Modal>
        </section>
    );
}
