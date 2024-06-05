import React, { useContext, useEffect } from "react";

import { Head, Link, useForm } from "@inertiajs/inertia-react";
import {
    DarkModeContext,
    DarkModeContextProvider,
} from "@/Context/DarkModeContext";
import ValidationErrors from "@/Components/ValidationErrors";
import Label from "@/Components/Label";
import Input from "@/Components/Input";
import Checkbox from "@/Components/Checkbox";
import Guest from "@/Layouts/GuestLayout";
import ApplicationLogo from "@/Components/ApplicationLogo";
import LoginBanner from "@/Components/LoginBanner";
import { motion } from "framer-motion";
import EncryptedButton from "@/Components/EcryptedButton";

export default function Login({ status, canResetPassword }) {
    const { darkMode } = useContext(DarkModeContext);

    console.log(darkMode);

    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: "",
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const onHandleChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "checkbox"
                ? event.target.checked
                : event.target.value
        );
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("login"));
    };

    return (
        <DarkModeContextProvider>
            <Guest
                className={`${
                    darkMode
                        ? "bg-green-500 text-lightText"
                        : "bg-red-500 text-darkText"
                } `}
            >
                <div className="-mb-[40px]">
                    <div className="w-[100%] flex flex-row-reverse ">
                        <LoginBanner/>
                        <div className="w-1/2 h-screen">
                            <div className="w-[70%] mx-auto flex flex-col  ">
                                <Link href="/" className="flex justify-center w-[60%] mx-auto  ">
                                    <ApplicationLogo className=" fill-current text-gray-500" />
                                </Link>

                            {/* <Head title="Log in" /> */}

                            {status && (
                                <div className="mb-4 font-medium text-sm text-green-600">
                                    {status}
                                </div>
                            )}

                            <ValidationErrors errors={errors} />

                            <form className="-mt-[120px]" onSubmit={submit}>
                                <div
                                    className={`${
                                        darkMode
                                            ? " text-lightText"
                                            : " text-lightText"
                                    }`}
                                >
                                    <Label forInput="email" value="Email" className="text-darkText" />

                                    <Input
                                        type="text"
                                        name="email"
                                        value={data.email}
                                        className="mt-1 block w-full p-2"
                                        autoComplete="username"
                                        isFocused={true}
                                        handleChange={onHandleChange}
                                    />
                                </div>

                                <div className="mt-4">
                                    <Label
                                        forInput="password"
                                        value="Password"
                                    />

                                    <Input
                                        type="password"
                                        name="password"
                                        value={data.password}
                                        className="mt-1 block w-full p-2"
                                        autoComplete="current-password"
                                        handleChange={onHandleChange}
                                    />
                                </div>

                                <div className="block mt-4">
                                    <label className="flex items-center">
                                        <Checkbox
                                            name="remember"
                                            value={data.remember}
                                            handleChange={onHandleChange}
                                        />

                                        <span className="ml-2 text-sm ">
                                            Remember me
                                        </span>
                                    </label>
                                </div>

                                <div className="flex flex-col gap-3  mt-4 ">
                                    <div className="flex flex-row  justify-between">
                                        <Link
                                            href="/register"
                                            className="underline text-sm  "
                                        >
                                            Register
                                        </Link>
                                        {canResetPassword && (
                                            <Link
                                                href={route("password.request")}
                                                className="underline text-sm  "
                                            >
                                                Forgot your password?
                                            </Link>
                                        )}
                                    </div>

                                        <div className="mt-2">
                                        <EncryptedButton targetText='Login' processing={processing} />
                                        </div>



                                </div>
                            </form>
                            </div>
                        </div>
                    </div>
                </div>
            </Guest>
        </DarkModeContextProvider>
    );
}
