import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Link from 'next/link'
const inter = Inter({ subsets: ['latin'] })

import Navbar from 'components/Navbar'
import Main from 'components/Main'

export default function Home() {
  return (
   <>
   <Navbar />
   <Main />
   </>
  )
}
