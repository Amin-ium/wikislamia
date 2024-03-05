import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function Guest({ children }) {
    return (
        <div className="h-screen  flex flex-col   ">


            <div className="w-full  h-screen bg-lightBg">
                {children}
            </div>
        </div>
    );
}
