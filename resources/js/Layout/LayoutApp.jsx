import React from 'react'

import { useState } from 'react'

import { useEffect } from 'react';
import Navbare from '@/Components/Navbare/Navbare';

const LayoutApp = ({user, children}) => {




  return (
  <React.Fragment>
<div className='homeBg w-full overflow-y-hidden'>
<Navbare  />
  <main className='overflow-y-hidden'>
    {children}
  </main>

  </div>


    </React.Fragment>
  )
}

export default LayoutApp
