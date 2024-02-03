import React, { useContext, useEffect } from 'react';

import { Head, Link, useForm } from '@inertiajs/inertia-react';
import { DarkModeContext, DarkModeContextProvider } from '@/Context/DarkModeContext';
import ValidationErrors from '@/Components/ValidationErrors';
import Label from '@/Components/Label';
import Input from '@/Components/Input';
import Checkbox from '@/Components/Checkbox';
import Guest from '@/Layouts/GuestLayout';



export default function Login({ status, canResetPassword }) {

    const {darkMode} = useContext(DarkModeContext)

    console.log(darkMode);


    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: '',
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <DarkModeContextProvider>
        <Guest className={`${darkMode ? "bg-green-500 text-lightText" : "bg-red-500 text-darkText"}`}>
            {/* <Head title="Log in" /> */}

            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

            <ValidationErrors errors={errors} />

            <form onSubmit={submit}>
                <div className={`${darkMode ? " text-lightText" : " text-lightText"}`}>
                    <Label forInput="email" value="Email" />

                    <Input
                        type="text"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        isFocused={true}
                        handleChange={onHandleChange}
                    />
                </div>

                <div className="mt-4">
                    <Label forInput="password" value="Password" />

                    <Input
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="current-password"
                        handleChange={onHandleChange}
                    />
                </div>

                <div className="block mt-4">
                    <label className="flex items-center">
                        <Checkbox name="remember" value={data.remember} handleChange={onHandleChange} />

                        <span className="ml-2 text-sm ">Remember me</span>
                    </label>
                </div>

                <div className="flex flex-col gap-3  mt-4 ">
                    <div className='flex flex-row  justify-between'>
                    <Link
                            href="/register"
                            className="underline text-sm  "
                        >
                            Register
                        </Link>
                    {canResetPassword && (
                        <Link
                            href={route('password.request')}
                            className="underline text-sm  "
                        >
                            Forgot your password?
                        </Link>
                    )}
                    </div>


                    <button className="bg-orangeBg p-2 rounded " processing={processing}>
                        Log in
                    </button>
                </div>
            </form>
        </Guest>
        </DarkModeContextProvider>
    );
}
