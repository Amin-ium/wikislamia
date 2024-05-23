import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
// import { Link, useForm, usePage } from '@inertiajs/react';
import { Link, usePage, useForm } from "@inertiajs/inertia-react";
import { Transition } from '@headlessui/react';
import { useSearchBarContext } from '@/Context/SearchBarContext';
import { useContext } from 'react';
import { DarkModeContext } from '@/Context/DarkModeContext';
import EditImg from '@/Components/EditImg';

export default function UpdateProfileInformation({ mustVerifyEmail, status, className = '' }) {
    const user = usePage().props.auth.user;
    const { check, setCheck } = useSearchBarContext();
    const { darkMode } = useContext(DarkModeContext);

    const { data, setData, patch, errors, processing, recentlySuccessful } = useForm({
        imagePath: user.imagePath,
        name: user.name,
        email: user.email,
    });

    const submit = (e) => {
        e.preventDefault();

        patch(route('profile.update'));
    };

    console.log(data);

    return (
        <section  className={` ${check === 'ar' ? "test-right" : "text-left"} `}>
            <header>
                <h2 className={`${darkMode ? "text-lightText" : "text-darkText"} text-lg font-medium`}>
                {check === "eng" ? "Profile Information" : check === "fr" ? "Informations de profile" : check === "ar" ? "معلومات الصفحة الشخصية" : null}
                </h2>

                <p className={`${darkMode ? "text-lightText" : "text-darkText"} mt-1 text-sm `}>

                    {check === "eng" ? "Update your account's profile information and email address" : check === "fr" ? "Mis à jour des informations de profile et compte personnel" : check === "ar" ? "تحديث معلومات الصفحة الشخصية والحساب الشخصي" : null}
                </p>
            </header>

            <EditImg user={user} />

            <form onSubmit={submit} className="mt-6 space-y-6">
                 {/*<div className='flex flex-col gap-3'>
                     <img src={user.imagePath} className='h-20 w-20' alt=""  />
                    <input type="file" name="imagePath" id="imagePath"   onChange={(e) => setData('imagePath', e.target.value)} />
                </div> */}
                <div>
                    <InputLabel className={`${darkMode ? "text-lightText" : "text-darkText"}  `} htmlFor="name" value={check === "eng" ? "Name" : check === "fr" ? "Nom" : check === "ar" ? "الاسم" : null} />

                    <TextInput
                        id="name"
                        className="mt-1 block w-full p-2 shadow-xl shadow-purple-500"
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                        required
                        isFocused
                        autoComplete="name"
                    />

                    <InputError className="mt-2" message={errors.name} />
                </div>

                <div>
                    <InputLabel className={`${darkMode ? "text-lightText" : "text-darkText"}  `} htmlFor="email" value={check === "eng" ? "ُEmail" : check === "fr" ? "Email" : check === "ar" ? "البريد الالكتروني" : null} />

                    <TextInput
                        id="email"
                        type="email"
                        className="mt-1 block w-full p-2 shadow-xl shadow-purple-500"
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                        required
                        autoComplete="username"
                    />

                    <InputError className="mt-2" message={errors.email} />
                </div>

                {mustVerifyEmail && user.email_verified_at === null && (
                    <div>
                        <p className="text-sm mt-2 text-gray-800">
                            {check === "eng" ? "Your email address is unverified" : check === "fr" ? "Votre email est inverifié" : check === "ar" ? "البريد الالكتروني غير محقق" : null}
                            <Link
                                href={route('verification.send')}
                                method="post"
                                as="button"
                                className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >

                                {check === "eng" ? "Click here to re-send the verification email" : check === "fr" ? "Clicker ici pour renvoyer l'email de verification" : check === "ar" ? "اضغط هنا لإعادة إرسال رسالة التحقق" : null}
                            </Link>
                        </p>

                        {status === 'verification-link-sent' && (
                            <div className="mt-2 font-medium text-sm text-green-600">
                                 {check === "eng" ? "A new verification link has been sent to your email address" : check === "fr" ? "Un lien de verification a été envoyé à votre adresse email" : check === "ar" ? "لقد تم إرسال رابط التحقق الى بريدك الإلكتروني" : null}
                            </div>
                        )}
                    </div>
                )}

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
                        {check === "eng" ? "Saveي" : check === "fr" ? "Enregistré" : check === "ar" ? "تم الحفظ" : null}
                        </p>
                    </Transition>
                </div>
            </form>
        </section>
    );
}
