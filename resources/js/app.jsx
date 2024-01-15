import './bootstrap';
import '../css/app.css';
import React, { useContext } from 'react';
import { render } from 'react-dom';
import { createInertiaApp } from '@inertiajs/inertia-react';

import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { DarkModeContextProvider } from './Context/DarkModeContext';
import { SearchContext } from './Context/SearchBarContext';
import { ToggleMenuContextProvider } from './Context/ToggleMenuContext';
import { ToggleMenuContext } from './Context/ToggleMenuContext';

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Wikislamia';

const body = window.document.getElementById('body');

createInertiaApp({
  title: (title) => `${title} - ${appName}`,
  resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
  setup({ el, App, props }) {
    // Wrap the Inertia app with DarkModeContextProvider
    const Component = () => {
      // Using ToggleMenuContext with useContext hook


      return (
        <ToggleMenuContextProvider>
          <DarkModeContextProvider>
            <SearchContext>
              {/* Move useContext inside the ToggleMenuContextProvider */}
              <ToggleMenuContext.Consumer>
              {({ toggleMenu, toggleMenuFun }) => {
                console.log('toggleMenu:', toggleMenu); // Add this line to log the value
                if(toggleMenu && window.innerWidth < 1024 ) {
                    body.style.overflow = "hidden";
                }else if(toggleMenu && window.innerWidth > 1024) {
                    body.style.overflow = "hidden";
                }else{
                    body.style.overflow = "auto";
                }

                return (
                  <div className={` h-full  `}>
                    <App {...props} />
                  </div>
                );
              }}
              </ToggleMenuContext.Consumer>
            </SearchContext>
          </DarkModeContextProvider>
        </ToggleMenuContextProvider>
      );
    };

    // Use ReactDOM to render the component
    render(<Component />, el);
  },
});
