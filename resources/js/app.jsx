import './bootstrap';
import '../css/app.css';
import React, { useContext } from 'react';
import { render } from 'react-dom';
import { createInertiaApp } from '@inertiajs/inertia-react';

import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { DarkModeContext, DarkModeContextProvider } from './Context/DarkModeContext';
import { SearchContext } from './Context/SearchBarContext';
import { ToggleMenuContextProvider } from './Context/ToggleMenuContext';
import { ToggleMenuContext } from './Context/ToggleMenuContext';
import { ScrollProvider } from './Context/ScrollContext';
import {  SidebarContextProvider } from './Context/SidebarContext';
import { CheckedLinksContextProvider } from './Context/CheckLinksContext';

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
        <ScrollProvider>
        <ToggleMenuContextProvider>
          <DarkModeContextProvider>
            <SearchContext>
            <SidebarContextProvider>
            <CheckedLinksContextProvider>
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
                    <DarkModeContext.Consumer>
                  {({ darkMode }) => {

                    if (darkMode) {
                        return (
                            <div className={` h-full bg-gradient-to-r from-darkPrimary via-darkSecondary to-darkThird `}>
                              <App {...props} />
                            </div>
                          );

                    }else if (!darkMode) {
                        return (
                            <div className={` h-full lightBg `}>
                              <App {...props} />
                            </div>
                          );

                    }
            // Add your logic based on darkMode value
            // ...


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
      );
    };

    // Use ReactDOM to render the component
    render(<Component />, el);
  },
});
