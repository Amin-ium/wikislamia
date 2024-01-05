// app.jsx

import './bootstrap';
import '../css/app.css';
import React from 'react';
import { render } from 'react-dom';
import { createInertiaApp } from '@inertiajs/inertia-react';

import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { DarkModeContextProvider } from './Context/DarkModeContext';
import { SearchContext } from './Context/SearchBarContext';



const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

createInertiaApp({
  title: (title) => `${title} - ${appName}`,
  resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
  setup({ el, App, props }) {
    // Wrap the Inertia app with DarkModeContextProvider
    const Component = (
        <DarkModeContextProvider>
            <SearchContext>
            <div className='h-full bg-gradient-to-r from-darkPrimary via-darkSecondary to-darkThird'>
        <App {...props} />
        </div>
        </SearchContext>
        </DarkModeContextProvider>
    );

    // root.render(
    //     <div className='h-full bg-gradient-to-r from-darkPrimary via-darkSecondary to-darkThird'>
    //         {/* linear-gradient(270deg, #ffb978 0%, #ff922d 100%) */}
    //         <DarkModeContextProvider>
    // <App {...props} />
    // </DarkModeContextProvider>
    // </div>
    // );

    // Use ReactDOM to render the component
    render(Component, el);
  },
});


