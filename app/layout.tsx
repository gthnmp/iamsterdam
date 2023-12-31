import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { openSans } from './fonts'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Discover Amsterdam',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel='icon' href="/assets/Icon.png" type="image/png" sizes='<generated>'/>
      </head>
      <body className={`${inter.className} ${openSans.variable} font-sans relative`}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
