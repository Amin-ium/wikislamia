import React from 'react'

import { useState } from 'react'

import { useEffect } from 'react';
import Navbare from '@/Components/Navbare/Navbare';

const LayoutApp = ({user, children}) => {




  return (
  <React.Fragment>

<Navbare  />
  <main >
    {children}
  </main>




    </React.Fragment>
  )
}

export default LayoutApp
