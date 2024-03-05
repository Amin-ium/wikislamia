import React, { useEffect } from 'react';

import { Head, Link, useForm } from '@inertiajs/inertia-react';
import Guest from '@/Layouts/GuestLayout';
import ValidationErrors from '@/Components/ValidationErrors';
import Label from '@/Components/Label';
import Input from '@/Components/Input';
import LoginBanner from '@/Components/LoginBanner';
import ApplicationLogo from '@/Components/ApplicationLogo';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    return (
        <Guest>
            <div className="-mb-[40px]">
                    <div className="w-[100%] flex flex-row-reverse ">
                        <LoginBanner />
            {/* <Head title="Register" /> */}
            <div className="w-1/2 h-screen">
                            <div className="w-[70%] mx-auto flex flex-col -mt-[70px]  ">
                                <Link href="/" className="flex justify-center w-[60%] mx-auto  ">
                                    <ApplicationLogo className=" fill-current text-gray-500" />
                                </Link>

            <ValidationErrors errors={errors} />

            <form  className="-mt-[120px]"  onSubmit={submit}>
                <div>
                    <Label forInput="name" value="Name" />

                    <Input
                        type="text"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        isFocused={true}
                        handleChange={onHandleChange}
                        required
                    />
                </div>

                <div className="mt-3">
                    <Label forInput="email" value="Email" />

                    <Input
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        handleChange={onHandleChange}
                        required
                    />
                </div>

                <div className="mt-3">
                    <Label forInput="password" value="Password" />

                    <Input
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        handleChange={onHandleChange}
                        required
                    />
                </div>

                <div className="mt-3">
                    <Label forInput="password_confirmation" value="Confirm Password" />

                    <Input
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full"
                        handleChange={onHandleChange}
                        required
                    />
                </div>

                <div className="flex flex-col items-center justify-between mt-3">
                    <Link href={route('login')} className="underline text-sm text-gray-600 hover:text-gray-900">
                        Already registered?
                    </Link>

                    <button className="bg-darkText w-full text-lightText font-bold p-2 rounded mt-3" processing={processing}>
                        Register
                    </button>
                </div>
            </form>
            </div>
                        </div>
                    </div>
                </div>
        </Guest>
    );
}
