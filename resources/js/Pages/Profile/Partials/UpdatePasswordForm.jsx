import { useRef } from 'react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { useForm } from '@inertiajs/react';
import { Transition } from '@headlessui/react';
import { useSearchBarContext } from '@/Context/SearchBarContext';

export default function UpdatePasswordForm({ className = '' }) {
    const passwordInput = useRef();
    const currentPasswordInput = useRef();
    const { check, setCheck } = useSearchBarContext();

    const { data, setData, errors, put, reset, processing, recentlySuccessful } = useForm({
        current_password: '',
        password: '',
        password_confirmation: '',
    });

    const updatePassword = (e) => {
        e.preventDefault();

        put(route('password.update'), {
            preserveScroll: true,
            onSuccess: () => reset(),
            onError: (errors) => {
                if (errors.password) {
                    reset('password', 'password_confirmation');
                    passwordInput.current.focus();
                }

                if (errors.current_password) {
                    reset('current_password');
                    currentPasswordInput.current.focus();
                }
            },
        });
    };

    return (
        <section className={`bg-grayBg`}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">
                {check === "eng" ? "Update Password" : check === "fr" ? "Mise-à-jour le mot de passe" : check === "ar" ? "تحديث كلمة السر" : null}
                </h2>

                <p className="mt-1 text-sm text-gray-600">

                    value={check === "eng" ? "Ensure your account is using a long, random password to stay secure" : check === "fr" ? "Assurez-vous que votre compte utilise un mot de passe long et aléatoire pour rester en sécurité" : check === "ar" ? "تأكد من أن حسابك يستخدم كلمة مرور طويلة وعشوائية ليظل آمنًا" : null}
                </p>
            </header>

            <form onSubmit={updatePassword} className="mt-6 space-y-6">
                <div>
                    <InputLabel htmlFor="current_password" value={check === "eng" ? "Current Password" : check === "fr" ? "Mot de passe actuel" : check === "ar" ? " كلمة السر الحالية" : null} />

                    <TextInput
                        id="current_password"
                        ref={currentPasswordInput}
                        value={data.current_password}
                        onChange={(e) => setData('current_password', e.target.value)}
                        type="password"
                        className="mt-1 block w-full"
                        autoComplete="current-password"
                    />

                    <InputError message={errors.current_password} className="mt-2" />
                </div>

                <div>
                    <InputLabel htmlFor="password" value={check === "eng" ? "New Password" : check === "fr" ? "Nouveau Mot de passe" : check === "ar" ? " كلمة السر جديدة" : null} />

                    <TextInput
                        id="password"
                        ref={passwordInput}
                        value={data.password}
                        onChange={(e) => setData('password', e.target.value)}
                        type="password"
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div>
                    <InputLabel htmlFor="password_confirmation" value={check === "eng" ? "Confirm Password" : check === "fr" ? "Confirmer le Mot de passe" : check === "ar" ? "تأكيد كلمة السر" : null} />

                    <TextInput
                        id="password_confirmation"
                        value={data.password_confirmation}
                        onChange={(e) => setData('password_confirmation', e.target.value)}
                        type="password"
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                    />

                    <InputError message={errors.password_confirmation} className="mt-2" />
                </div>

                <div className="flex items-center gap-4">
                    <PrimaryButton disabled={processing}>
                    {check === "eng" ? "Save" : check === "fr" ? "Enregistrer" : check === "ar" ? "حفظ" : null}
                    </PrimaryButton>

                    <Transition
                        show={recentlySuccessful}
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0"
                    >
                        <p className="text-sm text-gray-600">
                        {check === "eng" ? "Saved" : check === "fr" ? "Enregistré" : check === "ar" ? "تم الحفظ" : null}
                        </p>
                    </Transition>
                </div>
            </form>
        </section>
    );
}
