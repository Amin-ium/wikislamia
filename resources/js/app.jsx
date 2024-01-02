import './bootstrap';
import '../css/app.css';

import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <div className='h-full bg-gradient-to-r from-darkPrimary via-darkSecondary to-darkThird'>
                {/* linear-gradient(270deg, #ffb978 0%, #ff922d 100%) */}

        <App {...props} />
        </div>
        );

    },
    progress: {
        color: '#4B5563',
    },
});
