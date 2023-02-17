import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Link from 'next/link'
const inter = Inter({ subsets: ['latin'] })

import Homepage from 'components/Homepage'

export default function Home() {
  return (
   <>
   <Homepage />
   </>
  )
}
