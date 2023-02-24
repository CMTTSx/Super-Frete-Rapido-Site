import React from 'react'
import Image from 'next/image'

import Logo from '../public/img/CaminhaoEntrega.png'
import MenuDropdown from './MenuDropdown'


function Navbar() {
  return (
    <div className=' sm:w-[100%] bg-home bg-cover h-[58em]    '>
    <MenuDropdown />
    </div>
  )
}

export default Navbar