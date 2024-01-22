import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
// import f from './public/assets/publicImages/coverBg.svg'


/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        screens: {
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
        },
        gradientColorStops: {
            // You can name your gradients as per your choice
            'darkPrimary': '#0A0D23', // Start color
            'darkSecondary': '#220a1e', // Via color
            'darkThird': '#01041b', // End color
          },
          // You can also define the directions of your gradients
          // By default, 'to' is 'bottom', so the gradient goes from top to bottom
          // You can set it to other directions like 'to-right', 'to-left', 'to-bottom-right', etc.
          gradientDirection: {
            'bottom': 'to bottom',
            'right': 'to right',
            'top': 'to top',
            'left': 'to left',
          },
        extend: {
            fontFamily: {
                navFont: ["Poppins", "sans-serif"],
                bodyFont: ["Poppins", "sans-serif"],
                titleFont:["Calabri", "sans-serif"],
                subTitleFont:["Roboto", "sans-serif"],
                logoFont:["Artifika", "sans-serif"],
                quranTitleFont:["Katibeh", "serif"],
                quranTextFont:["Marhey", "sans-serif"],

            },
            fontSize: {
                clamp: "clamp(1rem, 1.5rem, 2rem)",

            },

            backgrounds: {

                'bgCover': "url('public/assets/publicImages/coverBg.svg)",
                // 'darkBg' : "bg-[linear-gradient(180deg,#FFFFFF_0%,#000000_100%)]  ",
                // 'contactBg' : "url('https://almaghribalarabi.com/fr/wp-content/uploads/2022/12/islam.jpg')",
                // 'quranBg' : "url('https://t3.ftcdn.net/jpg/02/73/80/00/240_F_273800094_Brds0M9mVOQNNxB6mFTrpWXaZbB9FWvH.jpg')",
                // 'aboutBg' : "url('https://almaghribalarabi.com/fr/wp-content/uploads/2022/12/islam.jpg')",
                'lightBg' : "",

              },
            //   linear-gradient(to right bottom, rgba(0deg,_rgba(198,_198,_198,_0.15)_0%, rgba(198,_198,_198,_0.15)_100%), linear-gradient(90deg,_#0A0D23_0.2%,_#3D1236_43.25%,_#030720_99.79%)

            colors: {
                // darkBg: "#222831",
                navTextDark: "#00081F",
                navTextLight: "#F1F1F1",
                titleTextDark: "#00081F",
                titleTextLight: "#F1F1F1",
                subTitleTextDark: "#484848",
                subTitleTextLight: "#cecece",



                grayBg: "#393e46",
                orangeBg: "#FF8C00",
                lightBg: "#f2f2f2",
                bodyColor: "#212428",
                lightText: "#c4cfde",
                darkText: "#00081F",
                boxBg: "linear-gradient(145deg, #1e2024, #23272b)",
                designColor: "#FF8C00",
                primary: "#1f3e72",
                secondary: 'rgba(255, 255, 255, 0.78)',
                blueGradient: "linear-gradient(97.05deg, #4066ff 3.76%, #2949c6 100%)",
                orangeGradient: "linear-gradient(270deg, #ffb978 0%, #ff922d 100%)",
                blue: "#4066ff",
                lightBlue: "#eeeeff",
                shadow: "0px 23px 21px -8px rgba(136, 160, 255, 0.25)",
                error: "rgb(var(--color-error) / <alpha-value>)",
                transparent: "transparent",
                current: "currentColor",
                dark: {
                primary: '#2A3439',
                secondary: '#ff014f',
                // Add other dark mode colors here
                },
            },

        },
    },

    plugins: [forms],
};
