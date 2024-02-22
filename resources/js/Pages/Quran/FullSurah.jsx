import React from 'react';

import SidbarLayout from '@/Layout/SidbarLayout';
import { Head, Link, usePage  } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia';


import moment from "moment";

import { useState } from 'react';
import SidbarDashboardLayout from '@/Layout/SidebarDashboardLayout';

import AudioPlayer from '@/Components/audioPlayer/AudioPlayer';
import LayoutApp from '@/Layout/LayoutApp';


export default function Posts({fullSurah}) {







console.log(fullSurah);



  return (
    <React.Fragment>
    <Head>
    <title>Blogs</title>
      </Head>
      <LayoutApp>

        <div className='w-[100%] md:w-[80%] mx-auto -mt-20 bg-white rounded-lg shadow-2xl'>
        <h2 className='my-5 text-4xl bold text-center pt-10'>Full surah</h2>
        <AudioPlayer fullSurah={fullSurah} />
        </div>
      </LayoutApp>
    </React.Fragment>
);
}
