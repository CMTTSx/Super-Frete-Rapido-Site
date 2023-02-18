import React from 'react'
import Image from 'next/image'

import Logo from '../public/img/CaminhaoEntrega.png'
import MenuDropdown from './MenuDropdown'
import Link from 'next/link'


function Navbar() {
  return (
    <div className='bg-home bg-cover h-[58em] '>
    <Link href='/'><Image src={Logo} alt="Logo" className=' ml-[13em] cursor-pointer' /></Link>
    <MenuDropdown />
    </div>
  )
}

export default Navbar