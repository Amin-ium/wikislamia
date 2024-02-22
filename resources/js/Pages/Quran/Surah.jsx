import React from 'react';


import { Head, Link, usePage  } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia';


import moment from "moment";

import { useState } from 'react';

import LayoutApp from '@/Layout/LayoutApp';


export default function Surah({surah}) {







console.log(surah);



  return (
    <React.Fragment>
    <Head>
    <title>Blogs</title>
      </Head>
      <LayoutApp>

        <div className='w-[100%] md:w-[80%] h-screen mx-auto mt-20 bg-white rounded-lg shadow-2xl'>
        <h2 className='my-5 text-4xl bold text-center pt-10'>Full surah</h2>

        </div>
      </LayoutApp>
    </React.Fragment>
);
}
