import React from "react";
import { render } from "react-dom";
import { createInertiaApp } from "@inertiajs/inertia-react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import {
    DarkModeContext,
    DarkModeContextProvider,
} from "./Context/DarkModeContext";
import { SearchContext } from "./Context/SearchBarContext";
import { ToggleMenuContextProvider } from "./Context/ToggleMenuContext";
import { ToggleMenuContext } from "./Context/ToggleMenuContext";
import { ScrollProvider } from "./Context/ScrollContext";
import { SidebarContextProvider } from "./Context/SidebarContext";
import { CheckedLinksContextProvider } from "./Context/CheckLinksContext";
import { InertiaProgress } from "@inertiajs/progress";
import { LoadingContext, LoadingProvider } from "./Context/LoadingContext";

const appName =
    window.document.getElementsByTagName("title")[0]?.innerText || "Wikislamia";

const body = window.document.getElementById("body");

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob("./Pages/**/*.jsx")
        ),
    setup({ el, App, props }) {
        // Wrap the Inertia app with DarkModeContextProvider
        const Component = () => {
            return (
                <LoadingProvider>
                <ScrollProvider>
                    <ToggleMenuContextProvider>
                        <DarkModeContextProvider>
                            <SearchContext>
                                <SidebarContextProvider>
                                    <CheckedLinksContextProvider>
                                        <ToggleMenuContext.Consumer>
                                            {({
                                                toggleMenu,
                                                toggleMenuFun,
                                            }) => {
                                                console.log("toggleMenu:", toggleMenu); // Debugging line
                                                if (toggleMenu && window.innerWidth < 1024) {
                                                    body.style.overflow = "hidden";
                                                } else if (toggleMenu && window.innerWidth > 1024) {
                                                    body.style.overflow = "hidden";
                                                } else {
                                                    body.style.overflow = "auto";
                                                }

                                                return (
                                                    <DarkModeContext.Consumer>
                                                        {({ darkMode }) => {
                                                            console.log("darkMode:", darkMode); // Debugging line
                                                            if (darkMode) {
                                                                return (
                                                                    <div className={`h-full bg-gradient-to-r from-darkPrimary via-darkSecondary to-darkThird`}>
                                                                        <App {...props} />
                                                                    </div>
                                                                );
                                                            } else if (!darkMode) {
                                                                return (
                                                                    <div className={`h-full lightBg`}>
                                                                        <App {...props} />
                                                                        <ToastContainer />
                                                                    </div>
                                                                );
                                                            }
                                                        }}
                                                    </DarkModeContext.Consumer>
                                                );
                                            }}
                                        </ToggleMenuContext.Consumer>
                                    </CheckedLinksContextProvider>
                                </SidebarContextProvider>
                            </SearchContext>
                        </DarkModeContextProvider>
                    </ToggleMenuContextProvider>
                </ScrollProvider>
                </LoadingProvider>
            );
        };

        render(<Component />, el);
    },
});

InertiaProgress.init({ color: '#FF00FF', showSpinner: true, includeCSS: false });
