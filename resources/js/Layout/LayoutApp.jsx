import React, { useContext } from "react";

import { useState } from "react";

import { useEffect } from "react";
// import Navbare from "@/Components/Navbare/Navbare";
import SubFooter from "@/Components/SubFooter/SubFooter";
import { DarkModeContext } from "@/Context/DarkModeContext";
import Navbar from "@/Components/Navbare/Navbar";


const LayoutApp = ({ children }) => {
    const [fully, setFully] = useState(false);
    const myDocument = document.getElementById("myFullScreen");

    const isFullscreen = document.fullscreenElement;

    function fullscreenchanged(event) {
        // document.fullscreenElement will point to the element that
        // is in fullscreen mode if there is one. If there isn't one,
        // the value of the property is null.
        if (document.fullscreenElement) {
            console.log(
                `Element: ${document.fullscreenElement.id} entered fullscreen mode.`
            );
            setFully(true);
        } else {
            console.log("Leaving fullscreen mode.");
            setFully(false);
        }
    }

    addEventListener("fullscreenchange", (event) => {
        fullscreenchanged;
    });

    document.addEventListener("fullscreenchange", fullscreenchanged);

    // When the toggle button is clicked, enter/exit fullscreen
    window.addEventListener("DOMContentLoaded", (event) => {
        const el = document.getElementById("myFullScreen");
        if (el) {
            el.addEventListener("click", () => {
                if (document.fullscreenElement) {
                    // exitFullscreen is only available on the Document object.
                    document.exitFullscreen();
                } else {
                    fullScreenElement.requestFullscreen();
                }
            });
        }
    });

    // let elem = document.getElementById("myFullScreen");
    // useEffect(() => {
    //     if (!document.fullscreenElement) {
    //         alert(
    //             `Error attempting to enable fullscreen mode`,
    //           );
    //       } else {
    //         alert(
    //             `fullscreen mode`,
    //           );

    //       }
    // }, [])

    const { darkMode } = useContext(DarkModeContext);

    return (
        <React.Fragment>
            <div

            >
                {fully ? null : <Navbar />}


                <main className={`${
                    darkMode && isFullscreen && !window.location.pathname.match('dashboard') && !window.location.pathname.match('profile')
                        ? "text-lightText bg-darkText"
                        : darkMode && !isFullscreen && !window.location.pathname.match('dashboard') && !window.location.pathname.match('profile')
                        ? "text-lightText bg-darkText"
                        : !darkMode && isFullscreen && !window.location.pathname.match('dashboard') && !window.location.pathname.match('profile')
                        ? "text-darkText bg-lightBg"
                        : !darkMode && !isFullscreen && !window.location.pathname.match('dashboard') && !window.location.pathname.match('profile')
                        ? "text-darkText bg-lightBg"
                        : null
                } w-full overflow-y-hidden `}>{children}</main>
                {/* <SubFooter /> */}
                {fully ? null : <SubFooter />}
            </div>
        </React.Fragment>
    );
};

export default LayoutApp;
